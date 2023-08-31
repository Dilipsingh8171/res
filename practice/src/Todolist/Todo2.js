import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Todo2() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addtodo = () => {
    if (todo !== "") {
      setTodos([...todos, { list: todo, id: Date.now(), status: false }]);
      setTodo("");
    }
    if (editId) {
      const editTodo = todos.find((todo) => todo.id === editId);
      const updateTodo = todos.map((to) =>
        to.id === editTodo.id
          ? (to = { id: to.id, list: todo })
          : (to = { id: to.id, list: to.list })
      );
      setTodo(updateTodo);
      setEditId(0);
      setTodo("");
    }
  };
  const onEdit = (id) => {
    const editTodo = todos.find((to) => to.id === id);

    setTodo(editTodo.list);
    setEditId(editTodo.id);
  };

  const inputref = useRef("null");
  useEffect(() => {
    inputref.current.focus();
  });

  const onDelete = (id) => {
    setTodos(todos.filter((to) => to.id !== id));
  };
  let onComplete = (id) => {
    let complete = todos.map((list) => {
      if (list.id === id) {
        return { ...list, status: !list.status };
      }
      return list;
    });
    setTodos(complete);
  };

  return (
    <>
      <div>
        <h1> Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="active"
            className="m-2"
            ref={inputref}
            type="text"
            placeholder="Add List items"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn btn-success" onClick={addtodo}>
            {editId ? "EDIT" : "ADD"}
          </button>
        </form>

        <div>
          <ul>
            {todos.map((to) => (
              <li>
                {to.list}
                <div
                  className="list-item-list"
                  id={to.status ? "list-item" : ""}
                ></div>
                <span>
                  <IoMdDoneAll
                    className="list-items-icons"
                    id="complete"
                    title="Complete"
                    onClick={() => onComplete(to.id)}
                  />
                  <FiEdit
                    className="list-items-icons"
                    id="edit"
                    title="Edit"
                    onClick={() => onEdit(to.id)}
                  />
                  <MdDelete
                    className="list-items-icons"
                    id="delete"
                    title="Delete"
                    onClick={() => onDelete(to.id)}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* <table className="table">
          <thead className="thead-dark">
            <tr>
              <th className="m-0" scope="col">
                <h4 className="m-0">List Data</h4>
              </th>

              <th scope="col">
                <button className="btn btn-danger">Delete</button>
              </th>
              <th>
                <button className="btn btn-warning"> Edit</button>
              </th>
            </tr>
          </thead>
          {todos.map((value, index) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row" key={index}>
                      {value}
                    </th>

                    <td>
                      <button onClick={() => Remove(index)}>Remove</button>
                    </td>
                    <td>
                      <button onClick={() => edit(to.id)}>Edit</button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table> */}
      </div>
      <div className="justify-content-center align-items-center">
        <button className="btn btn-primary  ">
          <Link to="/Reg" className="text-white">
            Logout
          </Link>
        </button>
      </div>
    </>
  );
}

export default Todo2;
