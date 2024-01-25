import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import moment from 'jalali-moment';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import Jwt from 'jsonwebtoken';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import formidable from 'formidable';
import 'dotenv/config';


const uploadDir = path.join(process.cwd(), 'public/assets/uploads/videos');
// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

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

app.get('/', async (req, res) => {
    res.send("LEAVE NOW !!!!");
});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets/uploads");
    },
    filename: function (req, file, cb) {
        const whiteListFormats = ["image/png", "image/jpg", "image/jpeg", "image/webp", "video/mp4", "video/webm", "video/ogg", "video/mkv", "video/avi"];
        if (whiteListFormats.includes(file.mimetype)) {
            const format = path.extname(file.originalname);
            const uniqueFilename = uuidv4() + format;
            cb(null, uniqueFilename);
        } else {
            console.log("Invalid file type");
        }
    },
});

const upload = multer({ storage: storage, limits: { fileSize: 10 * 1000 * 1000 } });


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
            INSERT INTO users (email, password, lastDateIn, role)
            VALUES ('${email}', '${hashedPassword}', '${todaySolar}', 'user');
        `);
        res.status(200).json({ statusCode: 200, message: 'User Created' });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/Classes/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `classes` ORDER BY `id` DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/ClassEventData/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `classes` ORDER BY `id` DESC');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/ClassEventDataFuture/data', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM `events` ORDER BY `id` DESC');
        res.json(rows);
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
            SELECT id, email, password, role
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
    const { id, name, lastName, email, age, phoneNumber, education, profile, description, linkedin, pinterest, twitterX, facebook } = req.body;
    try {
        await db.query(`UPDATE users 
        SET 
        name = "${name}", 
        lastName= "${lastName}", 
        email = "${email}", 
        age = ${age}, 
        phoneNumber = '${phoneNumber}', 
        education= "${education}", 
        profile= "${profile}",
        description= "${description}",
        linkedin= "${linkedin}",
        pinterest= "${pinterest}",
        twitterX= "${twitterX}",
        facebook= "${facebook}"
        WHERE id = ${id};`).then(
            await db.query(`UPDATE users 
            SET 
            profile= "${profile}"
            WHERE id = ${id};`)
        )
        res.json({ statusCode: 200, message: 'اطلاعات شما بروزرسانی شد !', data: {id, name, lastName, email, age, phoneNumber, education, profile, description, linkedin, pinterest, twitterX, facebook} }).status(200);
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
app.get('/dashboard/blogs/:tid', async (req, res) => {
    const { tid } = req.params
    const TName = await db.query(`SELECT * FROM users WHERE id = ${tid}`)
    const blogs = await db.query(`SELECT * FROM blog WHERE authorName = '${TName[0][0].name}' AND authorLastName = '${TName[0][0].lastName}' ORDER BY id DESC`)
    res.json(blogs).status(200)
});

app.get('/fullDetail/:id', async (req, res) => {
    const id = req.params.id
    const TName = await db.query(`SELECT * FROM users WHERE id = 11`)
    res.json(TName).status(200)
});

app.get('/TeacherUsers/data', async (req, res) => {
    const TName = await db.query(`SELECT * FROM users WHERE role = 'teacher'`)
    res.json(TName).status(200)
});

app.post('/dashboard/blogs/add', async (req, res) => {
    const {
        imageData,
        date,
        title,
        description,
        authorName,
        authorLastName,
        hashtags,
        detailsDescription1,
        detailsDescription2,
        detailsDescription3,
        descriptionImage1,
        descriptionImage2,
        detailsDescription4,
        detailsDescription5,
        timeToRead
    } = req.body;
    console.log(imageData, title, description, authorName, authorLastName, hashtags, detailsDescription1, detailsDescription2, descriptionImage1, descriptionImage2, detailsDescription3, detailsDescription4, detailsDescription5, timeToRead);

    await db.query(`
        INSERT INTO blog 
        (imageData, 
        date,
        title, 
        description, 
        authorName, 
        authorLastName, 
        hashtags, 
        detailsDescription1, 
        detailsDescription2, 
        detailsDescription3,
        descriptionImage1, 
        descriptionImage2, 
        detailsDescription4, 
        detailsDescription5, 
        timeToRead)
        VALUES 
        ('${imageData}', 
        '${date}', 
        '${title}', 
        '${description}', 
        '${authorName}', 
        '${authorLastName}', 
        '${hashtags}', 
        '${detailsDescription1}', 
        '${detailsDescription2}', 
        '${detailsDescription3}', 
        '${descriptionImage1}',
        '${descriptionImage2}',
        '${detailsDescription4}', 
        '${detailsDescription5}', 
        ${timeToRead})
    `);
    res.json({ statusCode: 200, message: 'بلاگ جدید با موفقیت ثبت شد !', data: {imageData, date, title, description, authorName, authorLastName, hashtags, detailsDescription1, detailsDescription2, detailsDescription3, descriptionImage1, descriptionImage2, detailsDescription4, detailsDescription5, timeToRead} }).status(200);
});

app.post('/dashboard/events/add', async (req, res) => {
    const {
        category,
        title,
        image,
        teacherFirstName,
        teacherLastName,
        price,
        discount,
        title_description1,
        description1,
        title_description2,
        description2,
        title_description3,
        description3,
        title_description4,
        description4,
        videoSrc,
        thumbnail,
        place,
        date,
        time,
        detailSubtitle,
        Detail_Head_Title
    } = req.body;

    await db.query(`
        INSERT INTO events 
        (
        category,
        title,
        image,
        teacherFirstName,
        teacherLastName,
        price,
        discount,
        title_description1,
        description1,
        title_description2,
        description2,
        title_description3,
        description3,
        title_description4,
        description4,
        videoSrc,
        thumbnail,
        place,
        date,
        time,
        detailSubtitle,
        Detail_Head_Title
        )
        VALUES 
        ('${category}', 
        '${title}', 
        '${image}', 
        '${teacherFirstName}', 
        '${teacherLastName}', 
        '${price}', 
        '${discount}', 
        '${title_description1}', 
        '${description1}', 
        '${title_description2}', 
        '${description2}', 
        '${title_description3}', 
        '${description3}', 
        '${title_description4}', 
        '${description4}', 
        '${videoSrc}',
        '${thumbnail}',
        '${place}', 
        '${date}', 
        '${time}', 
        '${detailSubtitle}', 
        '${Detail_Head_Title}')
    `);
    res.json({ statusCode: 200, message: 'رویداد جدید با موفقیت ثبت شد !', data: {category,
        title,
        image,
        teacherFirstName,
        teacherLastName,
        price,
        discount,
        title_description1,
        description1,
        title_description2,
        description2,
        title_description3,
        description3,
        title_description4,
        description4,
        videoSrc,
        thumbnail,
        place,
        date,
        time,
        detailSubtitle,
        Detail_Head_Title} }).status(200);
});

// app.post('/upload/single', upload.single('imageData'), (req, res, next) => {
//     if (req.file) {
//         const { filename, path } = req.file;
//         res.json({ success: true, message: 'File uploaded successfully', filename, path });
//     } else {
//         next(req.fileError);
//     }
// });
// app.post('/upload', upload.array('files', 3), (req, res) => {
//     const filePaths = req.files.map(file => file.path);

//     res.json({ success: true, paths: filePaths });
// });
// Define your routes

app.post('/upload/single', upload.single('file'), (req, res, next) => {
    if (req.file) {
        const { filename, path } = req.file;
        res.json({ success: true, message: 'File uploaded successfully', filename, path });
    } else {
        next(req.fileError);
    }
});

app.post('/upload/multiple/2', upload.array('files', 2), (req, res) => {
    const filePaths = req.files.map(file => file.path);

    res.json({ success: true, paths: filePaths });
});

app.post('/upload/multiple/3', upload.array('files', 3), (req, res) => {
    const filePaths = req.files.map(file => file.path);

    res.json({ success: true, paths: filePaths });
});



const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets/uploads/videos");
    },
    filename: function (req, file, cb) {
        const whiteListFormats = ["video/mp4", "video/webm", "video/ogg", "video/mkv", "video/avi"];
        if (whiteListFormats.includes(file.mimetype)) {
            const format = path.extname(file.originalname);
            const uniqueFilename = uuidv4() + format;
            cb(null, uniqueFilename);
        } else {
            console.log("Invalid file type");
        }
    },
});

const uploadVideo = multer({ storage: storage2, limits: { fileSize: 10 * 1000 * 1000 }, dest: uploadDir });

app.post('/upload/video', uploadVideo.single('videoData'), (req, res) => {
    if (req.file) {
        const { filename, path, originalname } = req.file;
        const extname = originalname.split(".").splice(-1)[0]
        const finalName = filename + '.' + extname
        res.json({ success: true, message: 'Video uploaded successfully', finalName, path });
    } else {
        // If no video file is uploaded, multer would have handled the error
        res.status(400).json({ success: false, message: 'No video file provided' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    // Send the error details to the frontend
    res.status(err.status || 500).json({ error: err.message });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});