import React, { Component } from "react";

class CalorieIntake extends Component {
  constructor() {
    super();
    this.state = {
      value: 1.2
    };
  }
  handleChange = e => {
    this.setState({ value: parseFloat(e.target.value) });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.value);
  };

  
  render() {
    return (
      <div>
        <div className="activity">
          <h2>Daily Activity Level Multiplier</h2>
            <br />
            <h4>Sedentary</h4>
              <p>Little or no excercise</p>
            <h4>Light</h4>
              <p>Light exercise/sports 1-3 days/week</  p>
            <h4>Moderate</h4>
              <p>moderate exercise/sports 3-5 days/week)</p>
            <h4>Active</h4>
              <p>hard exercise/sports 6-7 days a week</p>
            <h4>Very Active</h4>
              <p>very hard exercise/sports & physical job or 2x training</p>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your activity level:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value={1.2}>Sedentary</option>
              <option value={1.55}>Light</option>
              <option value={1.65}>Moderate</option>
              <option value={1.8}>Active</option>
              <option value={2}>Very Active</option>
            </select>
          </label>
          <button type="submit" value="Submit">
            Calc tdee
          </button>
        </form>
      </div>
    );
  }
}

export default CalorieIntake;
