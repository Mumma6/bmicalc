import React, { Component } from "react";
import "./Bmi.css";

class Bmi extends Component {
  constructor() {
    super();
    this.state = {
      height: "",
      weight: "",
      bmi: "",
      message: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  };

  calcBmi = () => {
    let heightSquared = ((this.state.height / 100) * this.state.height) / 100;
    let bmi = this.state.weight / heightSquared;

    // Set message
    let message = "";
    if (bmi >= 18.5 && bmi <= 24.99) {
      message = "You are in a healthy weight range";
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = "You are overweight";
    } else if (bmi >= 30) {
      message = "You are obese";
    } else if (bmi < 18.5) {
      message = "You are under weight";
    }

    this.setState({
      bmi: Math.round(bmi * 100) / 100,
      message: message
    });
  };

  submit = e => {
    e.preventDefault();
    this.calcBmi();
  };

  render() {
    return (
      <div className="bmi">
        <h1>Use this formula to calculate your BMI</h1>
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>Inpute your height in cm</label>
            <input
              className="form-control"
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.onChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Inpute your weight in kg</label>
            <input
              className="form-control"
              type="text"
              name="weight"
              value={this.state.weight}
              onChange={this.onChange}
              required
            />
          </div>

          
          <h2>{this.state.bmi}</h2>
          <h2>{this.state.message}</h2>

          <button type="submit" className="btn btn-primary">
            Calc BMI
          </button>
          
        </form>
      </div>
    );
  }
}

export default Bmi;
