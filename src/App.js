import './App.css';
import Greeting from "./components/Greeting";
import Bravo from "./components/Bravo";
import Charlie from "./components/Charlie";
import {useState} from "react";
import List from "./components/List";

function App() {
  const [people, setPeople] = useState([])

  const addPerson = (newPerson) => setPeople([...people, newPerson])

 return (
    <div className="App">
      <Charlie addPerson={addPerson} />
      <List people={people} />
    </div>
  );
}

export default App;
