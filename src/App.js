import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
const texts = require("./texts.json");
const engText = texts.english;

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

//toDo: align typing area and text area
//toDo: styling improvements on button group
//toDo: logic

export default function App() {
  const classes = useStyles();
  const [rSelected, setRSelected] = useState(null);
  const [accuracy, setAccuracy] = useState("XX");
  const [wpm, setWpm] = useState("XX");
  // const []
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
              <div className="TextArea">{"textValues"}</div>
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
