import "./App.css";
//import Axios from "axios";
import { Data } from "./Data"

function App() {
  //   fetch("https://v2.jokeapi.dev/")
  //   .then((res) => res.json())
  //   .then((data) => {
  //   console.log(data);
  // });

  

  //Axios.get("https://v2.jokeapi.dev").then((res) => {
    //console.log(res.data);
  //});
  return (
    <div className="App">
      <Data />
      <button>Generate a new joke</button>
      <button>Pick a joke</button>
    </div>
  );
}

export default App;
