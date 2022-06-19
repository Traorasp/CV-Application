import React, { Component } from 'react';
import General from './components/General';
import EduExperience from './components/EduExperience';
import PractExperience from './components/PractExperience';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
    };
  }

  sumbit = () => {
    const changeBtn = document.querySelector('button');
    this.setState((prevState) => ({ submitted: !prevState.submitted }));
    const { submitted } = this.state;
    changeBtn.textContent = submitted ? 'Edit' : 'Submit';
  };

  render() {
    return (
      <div className="App">
        <General />
        <EduExperience />
        <PractExperience />
        <button type="button" onClick={this.sumbit}>Submit</button>
      </div>
    );
  }
}

export default App;
