import React from "react";
import posed from "react-pose";
import { Seo, ScrollToTop, Header, Hero } from "components/common";
import { CheckCircleOutlineIcon } from "mdi-react";
import "./Feedback.page.scss";

const Animated = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { ease: "easeOut", duration: 400 }
    }
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      y: { ease: "easeOut", duration: 400 }
    }
  }
});

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export class Feedback extends React.Component {
  state = {
    mail: "",
    message: "",
    submitSuccess: false,
    errorMessage: ""
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({
          submitSuccess: true
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error
        });
      });

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { email, message, submitSuccess } = this.state;
    return (
      <Animated>
        <ScrollToTop />
        <Seo />
        <Header close />
        <Hero close hasBorder title="Feedback" />
        <div className="feedback">
          {submitSuccess ? (
            <>
              <span>
                Il tuo messaggio è stato inviato con successo, grazie!
              </span>
              <br />
              <CheckCircleOutlineIcon size={54} className="feedback__icon" />
            </>
          ) : (
            <>
              <span>
                Invia la tua opinione e contribuisci a migliorare alture.org
              </span>
              <form onSubmit={this.handleSubmit}>
                <p>
                  <label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="La tua email"
                      onChange={this.handleChange}
                    />
                  </label>
                </p>
                <p>
                  <label>
                    <textarea
                      name="message"
                      value={message}
                      placeholder="Inserisci qui il tuo messaggio"
                      onChange={this.handleChange}
                    />
                  </label>
                </p>
                <p>
                  <button className="feedback__button" type="submit">
                    Invia
                  </button>
                </p>
              </form>
            </>
          )}
        </div>
      </Animated>
    );
  }
}
