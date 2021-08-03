import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoesList from './components/TodoesList';
import './App.css';

const  App = () => {

  const initialState = JSON.parse(localStorage.getItem("todoes")) || [];
  const [input, setInput] = useState("");
  const [todoes, setTodoes] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todoes", JSON.stringify(todoes));
  });

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Form
            input = {input}
            setInput = {setInput}
            todoes = {todoes}
            setTodoes = {setTodoes}
            editTodo = {editTodo}
            setEditTodo = {setEditTodo}
          /> 
        </div>
        <div>
          <TodoesList 
            todoes={todoes} 
            setTodoes={setTodoes} 
            setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
