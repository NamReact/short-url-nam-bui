import React from "react";
import Header from "../../components/Header/index";
import Body from "../../components/Body";

class Home extends React.Component {
  state = {
    counter: 0
  };

  setCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <Header setCounter={this.setCounter} />
        <Body key={this.state.counter} />
      </div>
    );
  }
}

export default Home;
