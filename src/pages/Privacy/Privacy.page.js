import React, { Component } from "react";
import "./Privacy.page.scss";
import {
  Spinner,
  Seo,
  Hero,
  Header,
  ScrollToTop,
} from "../../components/common";
import { getPrivacy } from "../../api";

class Privacy extends Component {
  state = {
    isLoading: false,
    privacy: "",
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchPrivacy();
  }

  fetchPrivacy = () => {
    getPrivacy()
      .then((res) => {
        this.setState({
          privacy: res.data.content.rendered,
          isLoading: false,
        });
      })
      .catch((err) => console.log(err));
  };

  createPrivacy = () => {
    return { __html: this.state.privacy };
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <Spinner />;
    }
    return (
      <>
        <ScrollToTop />

        <Seo
          title="Privacy Policy - Alture"
          description="Privacy Policy di Alture"
          url="https://alture.org/notifiche"
        />

        <Header close />
        <Hero title="Privacy Policy" close hasBorder />

        <div className="privacy__body">
          <div dangerouslySetInnerHTML={this.createPrivacy()} />
        </div>
      </>
    );
  }
}

export default Privacy;
