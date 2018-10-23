import React, { Component } from 'react';
import Header from './Components/Header/Header';
import QuestionView from './pages/QuestionView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Wypełnij ankietę"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus auctor nulla 
                vitae finibus. Nam nec neque sit amet tellus accumsan condimentum. Sed vitae dolor at magna
                euismod laoreet. Curabitur eget mattis sapien. Integer scelerisque elit non auctor bibendum.
                Mauris et malesuada diam. Sed posuere facilisis ipsum, non varius massa." />
        <QuestionView />
      </div>
    );
  }
}

export default App;
