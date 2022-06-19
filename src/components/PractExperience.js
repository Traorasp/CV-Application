import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PractExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      position: '',
      mainTasks: '',
      startDate: '',
      endDate: '',
      removed: false,
    };
  }

  handleChange = (e) => {
    if (e.target.classList[0] === 'company') {
      this.setState({ company: e.target.value });
    } else if (e.target.classList[0] === 'position') {
      this.setState({ position: e.target.value });
    } else if (e.target.classList[0] === 'mainTasks') {
      this.setState({ mainTasks: e.target.value });
    } else if (e.target.classList[0] === 'startDate') {
      this.setState({ startDate: e.target.value });
    } else {
      this.setState({ endDate: e.target.value });
    }
  };

  delete = () => {
    this.setState({ removed: true });
  };

  render() {
    const {
      company, position, mainTasks, startDate, endDate, removed,
    } = this.state;
    const { submitted } = this.props;

    if (removed) {
      return (
        <div />
      );
    }

    if (submitted) {
      return (
        <div>
          <div>
            Company:
            {' '}
            {company}
          </div>
          <div>
            Position:
            {' '}
            {position}
          </div>
          <div>
            Main Tasks:
            {' '}
            {mainTasks}
          </div>
          <div>
            Start Date:
            {' '}
            {startDate}
          </div>
          <div>
            End Date:
            {' '}
            {endDate}
          </div>
        </div>
      );
    }

    return (
      <div>
        <div>
          <label htmlFor="company">
            Company:
            <input type="text" className="company" value={company} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="position">
            Position:
            <input type="text" className="position" value={position} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="mainTasks">
            Main Tasks:
            <textarea className="mainTasks" value={mainTasks} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="startDate">
            Start Date:
            <input type="date" className="startDate" value={startDate} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="endDate">
            End Date:
            <input type="date" className="endDate" value={endDate} onChange={this.handleChange} />
          </label>
        </div>
        <button type="button" onClick={this.delete}>X</button>
      </div>
    );
  }
}

PractExperience.propTypes = {
  submitted: PropTypes.bool,
};

PractExperience.defaultProps = {
  submitted: false,
};

export default PractExperience;
