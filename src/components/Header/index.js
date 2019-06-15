import React from "react";
import "./index.css";

class Header extends React.Component {
  state = {
    url: ""
  };

  setUrl = e => {
    this.setState({ url: e.target.value });
  };

  shortenUrl = () => {
    console.log("shortened");
  };

  render() {
    return (
      <div className="header-container">
        <div className="header-content-container">
          <h1>Simplify your links</h1>
          <div>
            <input
              value={this.state.url}
              onChange={this.setUrl}
              type="text"
              name="ul"
              placeholder="Your original URL here"
            />
            <div className="header-button" onClick={this.shortenUrl}>
              SHORTEN URL
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
