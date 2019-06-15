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
    /* Check if the short url exist in the API */

    try {
      const response = await axios.get(
        `https://short-url-back-nam.herokuapp.com/url/${
          this.props.match.params.key
        }`
      );
      this.setState({ original: response.data.original });
    } catch (error) {
      /* If url doesnt exist, the API returns an error code 404 */

      if (error.response.status === 404) {
        /* On catch of the error 404, the user is alerted and the state is changed to perform a redirect to the home page*/

        alert("Oops ! Wrong URL. Redirection to Short Url Home page");
        this.setState({ notFound: true });
      }
    }
  }
}

export default RedirectPage;
