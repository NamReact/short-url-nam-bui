import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

class Body extends React.Component {
  state = {
    data: null
  };
  render() {
    return (
      <div>
        <div className="body-titles gray">
          <div>Original URL</div>
          <div>Short URL</div>
          <div>Visits</div>
        </div>
        <ul>
          {this.state.data ? (
            this.state.data.map(url => {
              return (
                <li key={url.key} className="body-titles li">
                  <div>
                    <a href={url.original} alt="original-url">
                      {url.original}
                    </a>
                  </div>
                  <div>
                    <Link to={"/" + url.key}>
                      {"https://short-url-back-nam.herokuapp.com/" + url.key}
                    </Link>
                  </div>
                  <div>{url.visited}</div>
                </li>
              );
            })
          ) : (
            <div />
          )}
        </ul>
      </div>
    );
  }
  async componentDidMount() {
    const response = await axios.get(
      "https://short-url-back-nam.herokuapp.com/url"
    );
    this.setState({ data: response.data });
  }
}

export default Body;
