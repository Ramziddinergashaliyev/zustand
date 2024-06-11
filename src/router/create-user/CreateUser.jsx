import React, { useState } from "react";
import "./CreateUser.css";
import useStore from "../../zustand/store";

function CreateUser() {
  const addUser = useStore((state) => state.addUser);

  const handleCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let user = Object.fromEntries(formData.entries());
    let { name, profession, age, gender } = user;
    const data = {
      id: new Date().getTime(),
      name,
      profession,
      age,
      gender,
    };
    addUser(data);
    e.target.reset();
  };

  return (
    <section className="create">
      <div className="create__user">
        <h2>Create User</h2>
        <form onSubmit={handleCreate} className="create__user-form" action="">
          <input name="name" type="text" placeholder="name" />
          <input name="profession" type="text" placeholder="profession" />
          <input name="age" type="number" placeholder="age" />
          <select name="gender" id="">
            <option value="">gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <button type="submit">Create</button>
        </form>
      </div>
    </section>
  );
}

export default CreateUser;
