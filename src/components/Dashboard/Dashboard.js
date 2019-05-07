import React, { Component } from "react";
import axios from "axios";
import Survey from "./Survey/Survey";
import "./dashboard.scss";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: [],
            topics: []
        };
    }

    componentDidMount() {
        axios.get("/api/schedule").then(schedule => {
            this.setState({
                schedule: schedule.data
            });
            this.setTopics(1);
        });
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
        const { schedule } = this.state;
        const currWeekTopics = schedule.filter(t => t.week === +week);
        this.setState({
            topics: currWeekTopics
        });
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
