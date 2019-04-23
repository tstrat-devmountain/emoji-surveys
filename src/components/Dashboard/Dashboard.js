import React, { Component } from "react";
import "./dashboard.scss";
import Survey from "./Survey/Survey";
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [
                "JS III",
                "React V",
                "HTML/CSS",
                "Job Prep I",
                "Skills Check IV"
            ] // get from db
        };
    }
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

    setTopics = week => {
        // axios.get("....").then(res => {
        //     this.setState({
        //         topics: newTopics
        //     });
        // });
    };

    render() {
        const { topics } = this.state;
        return (
            <div className="dashboard">
                <h1>Survey</h1>
                <select
                    className="dashboard--select"
                    onChange={e => this.setTopics(e.target.value)}
                >
                    {this.optionGenerator()}
                </select>

                <Survey topics={topics} />
            </div>
        );
    }
}
