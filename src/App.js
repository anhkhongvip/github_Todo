import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItems from './components/TodoItems';
function App() {
  const [dataTodo, setDataToDo] = useState({
    title: '',
    description: ''
  });
  const [getDataTodo, setGetDataToDo] = useState([]);
  const changeForm = (e) => {
    console.log(e.target.value);
    setDataToDo({ ...dataTodo, [e.target.name]: e.target.value })
  }
  useEffect(() => {
       axios.get('http://localhost:5000/api/getTodo').then((res) => setGetDataToDo(res.data));
  },[dataTodo]);
  
  const addData = async () => {
    try
    {
       await axios.post('http://localhost:5000/api/postTodo', dataTodo);
       setDataToDo({
        title: '',
        description: ''
      })
    }
    catch (err)
    {
      console.log(err);
    }
  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">TO DO APP</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" name="title" placeholder="Enter title" onChange={changeForm} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" name="description" placeholder="Enter description" onChange={changeForm}/>
        </div>
        <button className="btn btn-primary" onClick={addData} >ADD TODO</button>
        <TodoItems data ={getDataTodo}/>
      </div>
    </div>
  );
}

export default App;
