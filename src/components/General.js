import React, { Component } from 'react';

class General extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" name="name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            Phone:
            <input type="tel" id="phone" name="phone" />
          </label>

        </div>
      </form>
    );
  }
}

export default General;
