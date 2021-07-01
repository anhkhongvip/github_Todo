const express = require('express');
const router = express.Router();
const Todo = require('../models/TodoApp');
router.post('/postTodo', async (req, res) => {
    const {title, description} = req.body;
    console.log(title);
    if (!title) {
        return res
          .status(400)
          .json({ success: false, message: 'Title is require' });
    }
    try{
        const newTodo = new Todo({title, description});
        await newTodo.save();
        res.json({ success: true, message: 'Add successfully', newTodo });
        console.log("dsfdsfsdfsđs"+title);
    }
    catch(error){
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
})

router.get('/getTodo', async(req, res) => {
   try{
       const getTodos = await Todo.find();
       res.status(200).json(getTodos)
   }
   catch (error){
       res.status(400).json({ success: false, message: error})
   }
})

module.exports = router;