import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import TodoContainer from "./components/TodoContanier";
import About from "./components/about";
import Nav from "./components/Nav";
class App extends Component {
  state = {
    page: "todoApp",
  };

  changePage = (pageName) => {
    this.setState({ page: pageName });
  };

  render() {
    const displayedPage =
      this.state.page === "todoApp" ? (
        <TodoContainer logo={logo}/>
      ) : (
        <About name="Tuwaiq React Course" />
      );
    return (
      <div className="App">
        <Nav changePage={this.changePage} />
        {displayedPage}
      </div>
    );
  }
}

export default App;