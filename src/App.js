import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
const texts = require("./texts.json");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

//toDo: styling improvements on button group
//toDo: logic
//toDo: create component(3) for word being typed, correct word, incorrect word

export default function App() {
  const classes = useStyles();
  const [rSelected, setRSelected] = useState(null);
  const [accuracy, setAccuracy] = useState("XX");
  const [wpm, setWpm] = useState("XX");
  const engText = texts.english;
  const [wordList, setWordList] = useState([]);
  const [randomWords, setRandomWords] = useState();
  const [currentWord, setCurrentWord] = useState(0);
  const [wordCount, setWordCount] = useState("");
  const [correctKeys, setCorrectKeys] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  // const []
  function setText() {
    let randomWords = [];
    let wordList = [];
    setWordList(engText[Math.floor(Math.random() * rSelected)]);
    while (wordList.length < wordCount) {
      const randomWord =
        randomWords[Math.floor(Math.random() * randomWords.length)];
      if (
        wordList[wordList.length - 1] !== randomWord ||
        wordList[wordList.length - 1] === undefined
      ) {
        wordList.push(randomWord);
        setWordList(wordList);
      }
    }
  }

  function showText() {
    wordList.forEach((word) => {});
  }

  useEffect(() => {
    setText();

    console.log("User selected word count of : ", rSelected);
    console.group("state vars");
    console.log(wordList);
    console.log(randomWords);
    console.log();
    console.groupEnd();
  }, [rSelected]);

  const handleRedo = () => {
    setText();
  };

  return (
    <div className="App">
      <div className="MainContainer">
        <div className="TypeBox">
          <div className="Header">
            <div className="ButtonContainer">
              <ButtonGroup size="large" variant="text" className={classes.root}>
                <Button
                  onClick={() => setRSelected(25)}
                  disabled={rSelected === 25 ? true : false}
                >
                  25
                </Button>
                <Button
                  onClick={() => setRSelected(50)}
                  disabled={rSelected === 50 ? true : false}
                >
                  50
                </Button>
                <Button
                  onClick={() => setRSelected(100)}
                  disabled={rSelected === 100 ? true : false}
                >
                  100
                </Button>
                <Button
                  onClick={() => setRSelected(150)}
                  disabled={rSelected === 150 ? true : false}
                >
                  150
                </Button>
              </ButtonGroup>
            </div>
            <div className="WpmContainer">
              <h3 id="wpmAccCounter">
                Accuracy: {accuracy} | WPM: {wpm}
              </h3>
            </div>
          </div>
          <div className="InputContainer">
            <div className="TextContainer">
              <div className="TextArea">{randomWords}</div>
            </div>

            <div className="InputTypeBox">
              <input id="typingBox" />
              <div className="RedoButtonContainer">
                <Button id="redoButton" variant="contained" size="large">
                  redo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
