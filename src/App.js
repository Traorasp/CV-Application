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
    const { submitted } = this.state;
    changeBtn.textContent = submitted ? 'Edit' : 'Submit';
  };

  addEducation = () => {
    this.setState((prevState) => ({ eduExperience: prevState.eduExperience + 1 }));
  };

  addPractical = () => {
    this.setState((prevState) => ({ practExperience: prevState.practExperience + 1 }));
  };

  render() {
    const { submitted } = this.state;
    return (
      <div className="App">
        <div>
          <General submitted={submitted} />
          <EduExperience />
          <button type="button" onClick={this.addEducation} id="eduBtn">Add</button>
          <PractExperience />
          <button type="button" onClick={this.addPractical} id="practBtn"> Add</button>
        </div>
        <button type="button" onClick={this.sumbit} id="submitBtn">Submit</button>
      </div>
    );
  }
}

export default App;
