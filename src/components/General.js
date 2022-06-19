import React, { Component } from 'react';
import PropTypes from 'prop-types';

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }

  handleChange = () => {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    this.setState({
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
    });
  };

  render() {
    const { name, email, phone } = this.state;
    const { submitted } = this.props;

    if (submitted) {
      return (
        <div>
          <div>
            Name:
            {' '}
            {name}
          </div>
          <div>
            Email:
            {' '}
            {email}
          </div>
          <div>
            Phone:
            {' '}
            {phone}
          </div>
        </div>
      );
    }

    return (
      <div>
        <div>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" value={email} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            Phone:
            <input type="tel" id="phone" name="phone" value={phone} onChange={this.handleChange} />
          </label>

        </div>
      </div>
    );
  }
}

General.propTypes = {
  submitted: PropTypes.bool,
};

General.defaultProps = {
  submitted: false,
};

export default General;
