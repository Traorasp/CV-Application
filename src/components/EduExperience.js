import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EduExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      title: '',
      date: '',
    };
  }

  handleChange = (e) => {
    if (e.target.classList[0] === 'school') {
      this.setState({ school: e.target.value });
    } else if (e.target.classList[0] === 'title') {
      this.setState({ title: e.target.value });
    } else {
      this.setState({ date: e.target.value });
    }
  };

  render() {
    const { school, title, date } = this.state;
    const { submitted } = this.props;

    if (submitted) {
      return (
        <div>
          <div>
            School:
            {' '}
            {school}
          </div>
          <div>
            Title:
            {' '}
            {title}
          </div>
          <div>
            Date:
            {' '}
            {date}
          </div>
        </div>
      );
    }

    return (
      <div>
        <div>
          <label htmlFor="school">
            School:
            <input type="text" className="school" value={school} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="title">
            Title:
            <input type="text" className="title" value={title} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="date">
            Date:
            <input type="date" className="date" value={date} onChange={this.handleChange} />
          </label>
        </div>
      </div>
    );
  }
}

EduExperience.propTypes = {
  submitted: PropTypes.bool,
};

EduExperience.defaultProps = {
  submitted: false,
};

export default EduExperience;
