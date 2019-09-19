import React from "react";
import ReactDOM from "react-dom";
import './normalize.css';
import "./styles.scss";
import store, {UPDATE_HUNGER_LEVEL, UPDATE_LOVED_LEVEL, UPDATE_TIREDNESS_LEVEL} from './redux/store';
import Dashboard from './Components/Dashboard/Dashboard';
import Character from './Components/Character/Character';
import Controls from './Components/Controls/Controls';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hungerLevel: 0,
      lovedLevel: 0,
      tirednessLevel: 0
    }
  }

  componentDidMount() {
    this.setState({
      hungerLevel: store.getState().hungerLevel,
      lovedLevel: store.getState().lovedLevel,
      tirednessLevel: store.getState().tirednessLevel
    }, () => {
      store.subscribe(() => {
        this.setState({
          hungerLevel: store.getState().hungerLevel,
          lovedLevel: store.getState().lovedLevel,
          tirednessLevel: store.getState().tirednessLevel
        })
      })
      this.startGame();
    })
  }

  startGame() {
    this.updateHungerTimer(1000);
    this.updateLovedTimer(1000);
    this.updateTiredTimer(1000);

    setInterval(() => {
     this.setRandomInterval();
    }, 3000) // adjust how soon to change a random interval in ms
  }

  setRandomInterval() {
    let min = 500, max = 1500; // adjust health interval speed possibilities here in ms
    let newInterval = Math.floor(Math.random() * (max - min + 1) + min);
    let levelChooser = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    switch(levelChooser) {
      case 1:
        this.updateHungerTimer(newInterval);
        break;
      case 2:
        this.updateLovedTimer(newInterval);
        break;
      case 3:
        this.updateTiredTimer(newInterval);
        break;
      default: break;
    }
  }

  // update intervals 

  updateHungerTimer(interval) {
    setInterval(() => {
      this.updateHungerLevel();
    }, interval)
  }

  updateLovedTimer(interval) {
    setInterval(() => {
      this.updateLovedLevel();
    }, interval)
  }

  updateTiredTimer(interval) {
    setInterval(() => {
      this.updateTirednessLevel();
    }, interval)
  }

  // update levels

  updateHungerLevel() {
    const {hungerLevel} = this.state;

    if (hungerLevel > 100) return;

    store.dispatch({
      type: UPDATE_HUNGER_LEVEL,
      payload: hungerLevel + 1
    })
  }

  updateLovedLevel() {
    const {lovedLevel} = this.state;

    if (lovedLevel < 0) return;

    store.dispatch({
      type: UPDATE_LOVED_LEVEL,
      payload: lovedLevel - 1
    })
  }

  updateTirednessLevel() {
    const {tirednessLevel} = this.state;

    if (tirednessLevel > 100) return;

      store.dispatch({
        type: UPDATE_TIREDNESS_LEVEL,
        payload: tirednessLevel + 1
      })
  }

  render() {
    const {hungerLevel, lovedLevel, tirednessLevel} = this.state;

    return (
      <div className="App">
        <Dashboard 
          hungerLevel={hungerLevel}
          lovedLevel={lovedLevel}
          tirednessLevel={tirednessLevel}
        />

        <Character 
          hungerLevel={hungerLevel}
          lovedLevel={lovedLevel}
          tirednessLevel={tirednessLevel}
        />

        <Controls 
          hungerLevel={hungerLevel}
          lovedLevel={lovedLevel}
          tirednessLevel={tirednessLevel}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);