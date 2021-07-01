require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoAppRouter = require('./routes/todoApp');
const connectDB = async () =>{
    try {
       await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@todoapp.8df4h.mongodb.net/todoapp?retryWrites=true&w=majority`,
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            }
        )
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

connectDB();

const app = express();
app.use(express.json())
app.use(cors())

app.use('/api', todoAppRouter)

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))