import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Dashboard />
        </main>
      </div>
    );
  }
}

export default App;
