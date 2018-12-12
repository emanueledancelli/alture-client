import React, { Component } from "react";
import "./Privacy.page.scss";

import { PagesHeader } from "components";
import { Spinner, Seo, ScrollToTop } from "components/common";
import axios from "config.js";
import Logo from "logo.png";

export class Privacy extends Component {
  state = {
    isLoading: false,
    privacy: ""
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getPrivacy();
  }

  getPrivacy = () => {
    axios
      .get(`/pages/60`)
      .then(res => {
        this.setState({
          privacy: res.data.content.rendered,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
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
          image={Logo}
        />

        <PagesHeader
          pageTitle="Privacy Policy"
          onClick={() => this.props.history.goBack()}
        />

        <div className="privacy__body">
          <div dangerouslySetInnerHTML={this.createPrivacy()} />
        </div>

        <div className="privacy__footer">
          <p>
            <a
              href="https://github.com/emanueledancelli"
              target="_blank"
              rel="noopener noreferrer"
            >
              ED
            </a>
          </p>
        </div>
      </>
    );
  }
}
