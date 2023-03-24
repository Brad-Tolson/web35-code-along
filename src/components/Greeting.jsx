import React from "react";

const Greeting = (props) => {
    let {name, age, isCool} = props.personalInfo

    // if(props.name !== "Brad") {
    //     return (
    //         <div>
    //             <h1>You're not Brad</h1>
    //         </div>
    //     )
    // }
  
    return (
    <div>
      <h1>Greetings {name}</h1>
      <h2>Age: {age}</h2>
      <h3>{isCool ? "This person is dope" : "This person is sad"}</h3>
    </div>
  );
};

export default Greeting;
