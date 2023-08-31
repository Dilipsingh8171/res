import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Todo() {
  const [activity, setactivity] = useState("");
  const [listData, setListData] = useState([]);
  const [editData, setEditdata] = useState([]);

  const update = () => {
    setListData([...listData, activity]);
    setactivity("");
  };
  const Remove = (index) => {
    const updatelist = listData.filter((value, id) => {
      return index != id;
    });
    setListData(updatelist);
  };

  return (
    <>
      <div>
        <h1> Todo List</h1>
        <input
          id="active"
          className="m-2"
          type="text"
          placeholder="Add List items"
          value={activity}
          onChange={(e) => setactivity(e.target.value)}
        />
        <button className="btn btn-success" onClick={update}>
          Add
        </button>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th className="m-0" scope="col">
                <h4 className="m-0">List Data</h4>
              </th>
              {/* <th>
                <button className="btn btn-primary">Add</button>
              </th> */}
              <th scope="col">
                <button className="btn btn-danger">Delete</button>
              </th>
              <th>
                <button className="btn btn-warning"> Edit</button>
              </th>
            </tr>
          </thead>
          {listData.map((value, index) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row" key={index}>
                      {value}
                    </th>
                    {/* <td>
                      <button>Add</button>
                    </td> */}
                    <td>
                      <button onClick={() => Remove(index)}>Remove</button>
                    </td>
                    <td>
                      <button onClick={() => edit(value.activity)}>Edit</button>
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
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

export default Todo;
