import React, { Fragment, Component } from "react";
import Header from "parts/Header";

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Header {...this.props}></Header>
      </Fragment>
    );
  }
}

export default LandingPage;
