import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap'
import './App.css';
const texts = require('./texts.json')

const getWordList = () => {
  const textList = texts.english
  const textArr = textList.slice()
  console.log(textArr)
}
getWordList()

const setText = (textArr) => {

}

class App extends React.Component {
  const [rSelected, setRSelected] = useState(null)
  render () {
  return 
    <div className="App">
        <div id='typeBox'>
          <div id='header'>
          <ButtonGroup>
            <Button color='primary' onClick={() => setRSelected(25)} active={rSelected === 25}>25</Button>
            <Button color='primary' onClick={() => setRSelected(50)} active={rSelected === 50}>50</Button>
            <Button color='primary' onClick={() => setRSelected(100)} active={rSelected === 100}>100</Button>
            <Button color='primary' onClick={() => setRSelected(150)} active={rSelected === 150}>150</Button>
          </ButtonGroup>
          <p>Selected: {rSelected}</p>
          <h4 id='wpmAccCounter'>Accuracy: | WPM: </h4>
          </div>
        <div id='centerContainer'>
          <p>{'textValues'}</p>
            <input id='typingBox'></input>
            <button id='redoButton'>redo</button>
        </div>
      </div>
    </div>
  }
}

export default App;
