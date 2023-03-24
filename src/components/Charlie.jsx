import React, { useState } from "react";

const Charlie = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [creditScore, setCreditScore] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = { name, age, creditScore };
    // console.log(person);
    props.addPerson(person);
    setName("");
    setAge(0);
    setCreditScore(0);
  };

  const handleName = (e) => setName(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleCredit = (e) => setCreditScore(e.target.value);

  return (
    <div>
      <h1>Charlie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={handleName}
        />
        <input
          type="number"
          value={age}
          placeholder="age"
          onChange={handleAge}
        />
        <input
          type="number"
          value={creditScore}
          placeholder="Credit Score"
          onChange={handleCredit}
        />
        <button>Add</button>
        <button type="button">Reset</button>
      </form>
    </div>
  );
};

export default Charlie;
