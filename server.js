import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import moment from 'jalali-moment';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import Jwt from 'jsonwebtoken';
import crypto from 'crypto';

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
// app.get('/students/:name', async (req, res) => {
//     const name = req.params.name
//     try {
//         const [rows] = await db.query(`SELECT * FROM students WHERE name = '${name}'`);
//         res.json(rows);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

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
app.post('/register', async (req, res) => {
    const { email, hashedPassword } = req.body
    const todaySolar = moment().locale('fa').format('YYYY-MM-DD');
    try {
        const insertQuery = db.query(`
        INSERT INTO users (email, password, lastDateIn, role)
        VALUES ('${email}', '${hashedPassword}', '${todaySolar}', 'user');
        `);
        res.status(200).json({ statusCode:200 ,message: 'User Created' });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body
//     const todaySolar = moment().locale('fa').format('YYYY-MM-DD');
//     try {
//         // Check if the email exists and the hashed password matches
//         const checkUserQuery = `
//             SELECT id, email, password
//             FROM users
//             WHERE email = '${email}';
//         `;
//         const userResult = await db.query(checkUserQuery);

//         if (userResult[0].length === 0) {
//           // User not found
//             res.status(404).json({ error: 'کاربری با این مشخصات پیدا نشد !' });
//             return;
//         }else{
//             const storedHashedPassword = userResult[0][0].password;
//             const passwordMatch = await bcrypt.compare(password, storedHashedPassword);
    
//             if (!passwordMatch) {
//               // Passwords don't match
//                 res.status(401).json({ error: 'ایمیل یا رمز عبور معتبر نیست !' });
//                 return;
//             }else if(userResult.length !== 0){
//                 // Update lastDateIn if everything is okay
//                 const updateQuery = `
//                     UPDATE users
//                     SET lastDateIn = '${todaySolar}'
//                     WHERE id = ${userResult[0][0].id};
//                 `;
//                 await db.query(updateQuery);
//                 res.status(200).json({ statusCode: 200, message: 'User updated successfully' });

                
                
//                 const secretKey = ""
//                 const token = Jwt.sign(
//                     { userId: userResult[0][0].id, userEmail: userResult[0][0].email, isAdmin: "user" },
//                     secretKey,
//                     { expiresIn: '24h' }
//                 );
//                 res.cookie('access_token', token, { httpOnly: true, maxAge: 86400000 });
//             }
//         }
    
//     } catch (error) {
//         console.error('Error updating user:', error);
//         res.status(500).json({ error: 'Internal Server Error 2' });
//     }
// });
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const todaySolar = moment().locale('fa').format('YYYY-MM-DD');

    try {
        // Check if the email exists and the hashed password matches
        const checkUserQuery = `
            SELECT id, email, password
            FROM users
            WHERE email = '${email}';
        `;
        const userResult = await db.query(checkUserQuery);

        if (userResult[0].length === 0) {
            // User not found
            res.status(404).json({ error: 'کاربری با این مشخصات پیدا نشد !' });
            return;
        } else {
            const storedHashedPassword = userResult[0][0].password;
            const passwordMatch = await bcrypt.compare(password, storedHashedPassword);

            if (!passwordMatch) {
                // Passwords don't match
                res.status(401).json({ error: 'ایمیل یا رمز عبور معتبر نیست !' });
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
                const secretKey = crypto.randomBytes(32).toString('hex');

                // Generate a JWT token
                const token = Jwt.sign(
                    { userId: userResult[0][0].id, userEmail: userResult[0][0].email, isAdmin: "user" },
                    secretKey,
                    { expiresIn: '24h' }
                );

                // Set the JWT token as a cookie
                res.cookie('access_token', token, { httpOnly: true, maxAge: 86400000 });

                // Send a success response
                res.status(200).json({ statusCode: 200, message: 'User updated successfully' });
            }
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error 2' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});