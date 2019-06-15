import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class RedirectPage extends React.Component {
  state = {
    original: null,
    notFound: false
  };

  render() {
    if (this.state.original) {
      window.location = this.state.original;
    }
    return <div>{this.state.notFound && <Redirect to="/" />}</div>;
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `https://short-url-back-nam.herokuapp.com/url/${
          this.props.match.params.key
        }`
      );
      this.setState({ original: response.data.original });
    } catch (error) {
      if (error.response.status === 404) {
        alert("Oops ! Wrong URL. Redirection to Short Url Home page");
        this.setState({ notFound: true });
      }
    }
  }
}

export default RedirectPage;
