import express from 'express';
import db from "./DB/db.js";
import uRouter from "./Routers/userRouter.js";

const PORT = process.env.PORT || 8000;

const app = express();

db.authenticate().then( () => {
    console.log("Database successfully connected");
}).catch((err) => {
    console.log("Cannot connect to database: ", err);
});

app.use(express.json());
app.use('/api', uRouter);

app.listen(PORT, () => console.log("Server started at " + PORT + " port"));