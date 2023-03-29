import "./App.css";
import Axios from "axios";

function App() {
  //   fetch("https://v2.jokeapi.dev/")
  //   .then((res) => res.json())
  //   .then((data) => {
  //   console.log(data);
  // });

  const Data = {
    error: false,
    amount: 10,
    jokes: [
      {
        category: "Christmas",
        type: "twopart",
        setup: "Why does Santa go down the chimney?",
        delivery: "Because it soots him!",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 253,
        safe: true,
        lang: "en",
      },
      {
        category: "Christmas",
        type: "twopart",
        setup: "What do Santa's little helpers learn at school?",
        delivery: "The elf-abet!\n",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 248,
        safe: true,
        lang: "en",
      },
      {
        category: "Christmas",
        type: "twopart",
        setup: "Why couldn't the skeleton go to the Christmas party?",
        delivery: "Because he had no body to go with!",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 252,
        safe: true,
        lang: "en",
      },
      {
        category: "Christmas",
        type: "twopart",
        setup: "Who hides in the bakery at Christmas?",
        delivery: "A mince spy!",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 250,
        safe: true,
        lang: "en",
      },
      {
        category: "Christmas",
        type: "twopart",
        setup: "Why did Santa's helper see the doctor?",
        delivery: 'Because he had a low "elf" esteem!',
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 243,
        safe: true,
        lang: "en",
      },
      {
        category: "Christmas",
        type: "twopart",
        setup: "What does Santa suffer from if he gets stuck in a chimney?",
        delivery: "Claustrophobia!",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 241,
        safe: true,
        lang: "en",
      },
      {
        category: "Christmas",
        type: "twopart",
        setup: "What's Santa's favourite type of music?",
        delivery: "Wrap!",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 247,
        safe: true,
        lang: "en",
      },
      {
        category: "Christmas",
        type: "twopart",
        setup: "Why does Santa have three gardens?",
        delivery: "So he can 'ho ho ho'!",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 242,
        safe: true,
        lang: "en",
      },
      {
        category: "Christmas",
        type: "twopart",
        setup: "Whats the Grinchs least favorite band?",
        delivery: "The Who.",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        safe: true,
        id: 293,
        lang: "en",
      },
      {
        category: "Christmas",
        type: "twopart",
        setup: "How will Christmas dinner be different after Brexit?",
        delivery: "No Brussels!",
        flags: {
          nsfw: false,
          religious: false,
          political: true,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 251,
        safe: false,
        lang: "en",
      },
    ],
  };

  //Axios.get("https://v2.jokeapi.dev").then((res) => {
    //console.log(res.data);
  //});
  return (
    <div className="App">
      <button>Generate a new joke</button>
      <button>Pick a joke</button>
    </div>
  );
}

export default App;
