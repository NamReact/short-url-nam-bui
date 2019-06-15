import React from "react";
import axios from "axios";
import "./index.css";

class Header extends React.Component {
  state = {
    url: "",
    error: false,
    sameUrl: false
  };

  /* Input set state */

  setUrl = e => {
    this.setState({ url: e.target.value });
  };

  /* Test if the URL has a valid format */

  urlTest = url => {
    const regexp = /((http|https|ftp)(:\/\/))+([a-zA-Z0-9]+[.]{1})+[a-zA-z0-9]+(\/{1}[a-zA-Z0-9]+)*\/?/;
    return regexp.test(String(url));
  };

  /* Create the shrt URL */

  shortenUrl = async () => {
    /* Format check */

    if (this.urlTest(this.state.url) === false) {
      this.setState({ error: true });
      setTimeout(() => this.setState({ error: false }), 2000);
      return;
    }

    try {
      await axios.post("https://short-url-back-nam.herokuapp.com/url/create", {
        url: this.state.url
      });
      this.props.setCounter();
      this.setState({ url: "" });
      return;
    } catch (error) {
      if (error.response.status === 409) {
        this.setState({ error: true, sameUrl: true });
        setTimeout(() => this.setState({ error: false, sameUrl: false }), 2000);
        return;
      }
      return console.log(error.message);
    }
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
            {this.state.error && (
              <div className="header-error">
                <div className="header-arrow" />

                {this.state.sameUrl
                  ? "This URL has already been shortened"
                  : "Please use a valid URL format"}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
