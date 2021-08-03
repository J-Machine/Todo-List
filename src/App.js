import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoesList from './components/TodoesList';
import './App.css';

const  App = () => {

  const [input, setInput] = useState("");
  const [todoes, setTodoes] = useState([]);

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
          />
        </div>
        <div>
          <TodoesList todoes={todoes} setTodoes={setTodoes}/>
        </div>
      </div>
    </div>
  );
}

export default App;
