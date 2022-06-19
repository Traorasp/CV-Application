import React, { Component } from 'react';
import General from './components/General';
import EduExperience from './components/EduExperience';
import PractExperience from './components/PractExperience';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      eduExp: [],
      practExp: [],
    };
  }

  sumbit = () => {
    const changeBtn = document.getElementById('submitBtn');
    const eduBtn = document.getElementById('eduBtn');
    const practBtn = document.getElementById('practBtn');
    this.setState((prevState) => ({ submitted: !prevState.submitted }));
    changeBtn.textContent = changeBtn.textContent === 'Submit' ? 'Edit' : 'Submit';
    eduBtn.classList.toggle('hide');
    practBtn.classList.toggle('hide');
  };

  addEducation = () => {
    this.setState((prevState) => ({ eduExp: [...prevState.eduExp, prevState.eduExp.length] }));
  };

  addPractical = () => {
    this.setState((prev) => ({ practExp: [...prev.practExp, prev.practExp.length] }));
  };

  render() {
    const { submitted, eduExp, practExp } = this.state;
    return (
      <div className="App">
        <div>
          <General submitted={submitted} />
          <div>
            Educational Experience
            {eduExp.map(() => <EduExperience submitted={submitted} />)}
            <button type="button" onClick={this.addEducation} id="eduBtn">Add</button>
          </div>
          <div>
            Practical Experience
            {practExp.map(() => <PractExperience submitted={submitted} />)}
            <button type="button" onClick={this.addPractical} id="practBtn"> Add</button>
          </div>
        </div>
        <button type="button" onClick={this.sumbit} id="submitBtn">Submit</button>
      </div>
    );
  }
}

export default App;
