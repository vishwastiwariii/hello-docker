import express from 'express';
import "dotenv/config";
import prisma from './prisma.js';
const app = express();
app.use(express.json());
app.get('/', async (req, res) => {
    const user = await prisma.user.findFirst();
    res.status(200).json({
        data: user
    });
});
app.post('/', async (req, res) => {
    const username = req.body.username || Math.random().toString();
    const password = req.body.password || Math.random().toString();
    const user = await prisma.user.create({
        data: {
            username: username,
            password: password
        }
    });
    res.status(200).json({
        status: "success",
        data: user
    });
});
app.listen(3000, () => {
    console.log("Server is started on port 3000");
});
//# sourceMappingURL=index.js.map