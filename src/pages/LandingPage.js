import React, { Fragment, Component } from "react";
import Header from "parts/Header";
import HeroSection from "parts/HeroSection";
import RecommendedList from "parts/RecommendedList";

import landingPage from "json/landingPage.json";
import Category from "parts/Category";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refRecommendedList = React.createRef();
  }
  render() {
    return (
      <Fragment>
        <Header {...this.props}></Header>
        <HeroSection refRecommendedList={this.refRecommendedList} />
        <RecommendedList
          refRecommendedList={this.refRecommendedList}
          data={landingPage.recommendedList}
        />
        <Category data={landingPage.categories} />
      </Fragment>
    );
  }
}

export default LandingPage;
