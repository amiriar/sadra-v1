import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import moment from 'jalali-moment';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import Jwt from 'jsonwebtoken';
import 'dotenv/config';



const app = express();
const PORT = 3001;
app.use(express.json())
app.use(cookieParser());

const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true,
}));

const db = mysql.createPool({ 
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sadra-db-core',
});

app.get('/blog/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM blog ORDER BY `id` DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/blog/data/asc', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM blog ORDER BY `id` ASC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/stusuccess/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `student-success` ORDER BY `id` DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/students/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `students` LIMIT 0,4');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/blogdetail/:id', async (req, res) => {
    const id = req.params.id
    try {
        const [rows] = await db.query(`SELECT * FROM blog WHERE id = '${id}'`);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/employment/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `careeropportunities` ORDER BY `id` DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/events/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `events` ORDER BY `id` DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/eventsDetail/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `events` ORDER BY `id` DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/HomeContactsDetail/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `contact` ORDER BY `id` DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/evetnDetailTeachersData/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `teachers` ORDER BY `id` DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/HomeEventData/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `events` ORDER BY `id` DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/HomePopularData/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `popular-events` ORDER BY `id` DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/HomeComment/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `comment` ORDER BY `id` DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/register', async (req, res) => {
    const { email, hashedPassword } = req.body;
    const todaySolar = moment().locale('fa').format('YYYY-MM-DD');
    try {
        const insertQuery = db.query(`
            INSERT INTO users (email, password, lastDateIn, role, level1, level2)
            VALUES ('${email}', '${hashedPassword}', '${todaySolar}', 'user', false, false);
        `);
        res.status(200).json({ statusCode: 200, message: 'User Created' });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const todaySolar = moment().locale('fa').format('YYYY-MM-DD');

    try {
        // Check if the email exists and the hashed password matches
        const checkUserQuery = `
            SELECT id, email, password, role, level1, level2
            FROM users
            WHERE email = '${email}';
        `;
        const userResult = await db.query(checkUserQuery);

        if (userResult[0].length === 0) {
            res.json({ error: 'کاربری با این مشخصات پیدا نشد !' }).status(404);
            return;
        }
        const storedHashedPassword = userResult[0][0].password;
        const passwordMatch = await bcrypt.compare(password, storedHashedPassword);

        if (!passwordMatch) {
            res.json({ error: 'ایمیل یا رمز عبور معتبر نیست !' }).status(401);
            return;
        } else if (userResult.length !== 0) {
            // Update lastDateIn if everything is okay
            const updateQuery = `
                UPDATE users
                SET lastDateIn = '${todaySolar}'
                WHERE id = ${userResult[0][0].id};
            `;
            await db.query(updateQuery);

                // Generate a random secret key for JWT
            const secretKey = process.env.BLOGS_SECRET_KEY;

            const token = Jwt.sign(
                { id: userResult[0][0].id, email: userResult[0][0].email, role: userResult[0][0].role },
                secretKey,
                { expiresIn: '24h' }
            );

            // Set the JWT token as a cookie using res.cookie
            res.cookie('accessID', token, { httpOnly: true, maxAge: 86400000, sameSite: 'None', secure: true });
            
            // Send a success response
            res.status(200).json({ statusCode: 200, message: 'User updated successfully'});
            }
    } catch (error) {
        console.error('Error updating user:', error);
        res.json({ error: 'مشکلی پیش آمد!' }).status(500);
    }
});

app.get('/signout', (req, res) => {
    res.clearCookie('accessID', { httpOnly: true, secure: true });
    res.status(200).json({ message: 'Sign-out successful', path: '/' });
});

app.get('/dashboard/token', (req, res) => {
    const accessToken = req.cookies.accessID;
    const secretKey = process.env.BLOGS_SECRET_KEY;

    const decodedToken = Jwt.verify(accessToken, secretKey);
    
    res.json(decodedToken);
});

app.post('/fullInfo', async (req, res) => {
    const { id, name, lastName, email, age, phoneNumber, education, isStudent } = req.body;
    console.log(id, name, lastName, email, age, phoneNumber, education, isStudent);
    try {
        await db.query(`UPDATE users 
        SET name = "${name}", lastName= "${lastName}", email = "${email}", age = ${age}, phoneNumber = '${phoneNumber}', education= "${education}",isStudent= ${isStudent} WHERE id = ${id};`);
        res.json({ statusCode: 200, message: 'اطلاعات شما بروزرسانی شد !', path:"/dashboard" }).status(200);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/users/data', async (req, res) => {
    const selectQuery = await db.query(`SELECT * FROM users`)
    res.json(selectQuery).status(200)
});

app.get('/users/data/:id', async (req, res) => {
    const { id } = req.params
    const selectQuery = await db.query(`SELECT * FROM users WHERE id = ${id}`)
    res.json(selectQuery).status(200)
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});