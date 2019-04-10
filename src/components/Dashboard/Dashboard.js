import React, { Component } from "react";
import "./dashboard.scss";
import Survey from "./Survey/Survey";
export default class Dashboard extends Component {
  optionGenerator() {
    const weeks = 13; // weeks in cohort
    const options = [];
    for (let i = 1; i <= weeks; i++) {
      options.push(
        <option key={i} value={i}>
          Week {i}
        </option>
      );
    }
    return options;
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Survey</h1>
        <select>{this.optionGenerator()}</select>

        <Survey />
      </div>
    );
  }
}
