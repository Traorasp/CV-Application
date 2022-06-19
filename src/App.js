import React, { Component } from 'react';
import General from './components/General';
import EduExperience from './components/EduExperience';
import PractExperience from './components/PractExperience';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      eduExperience: 1,
      practExperience: 1,
    };
  }

  sumbit = () => {
    const changeBtn = document.getElementById('submitBtn');
    this.setState((prevState) => ({ submitted: !prevState.submitted }));
    changeBtn.textContent = changeBtn.textContent === 'Submit' ? 'Edit' : 'Submit';
  };

  addEducation = () => {
    this.setState((prevState) => ({ eduExperience: prevState.eduExperience + 1 }));
  };

  addPractical = () => {
    this.setState((prevState) => ({ practExperience: prevState.practExperience + 1 }));
  };

  render() {
    const { submitted, eduExperience, practExperience } = this.state;
    return (
      <div className="App">
        <div>
          <General submitted={submitted} />
          <EduExperience submitted={submitted} amount={eduExperience} />
          <button type="button" onClick={this.addEducation} id="eduBtn">Add</button>
          <PractExperience submitted={submitted} amount={practExperience} />
          <button type="button" onClick={this.addPractical} id="practBtn"> Add</button>
        </div>
        <button type="button" onClick={this.sumbit} id="submitBtn">Submit</button>
      </div>
    );
  }
}

export default App;
