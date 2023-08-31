import React from "react";
import Register from "./Todolist/Register";
import Todo from "./Todolist/Todo";
import Todo2 from "./Todolist/Todo2";
import { Routes, Route } from "react-router-dom";
import Login from "./Todolist/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Reg" element={<Register />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
