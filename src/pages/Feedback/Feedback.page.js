import React from "react";
import posed from "react-pose";
import { Seo, ScrollToTop, Header, Hero } from "components/common";
import { CheckCircleOutlineIcon } from "mdi-react";
import { Link } from "react-router-dom";
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
    errorMessage: "",
    submitSuccess: false
  };

  handleSubmit = e => {
    this.setState({ isSending: true });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({
          submitSuccess: true,
          isSending: false
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error,
          isSending: false
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
            <div className="feedback__success">
              <span>
                Il tuo messaggio è stato inviato con successo, grazie!
              </span>
              <br />
              <Link to="/informazioni">
                <CheckCircleOutlineIcon size={80} className="feedback__icon" />
              </Link>
            </div>
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
                      placeholder="Email *"
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
                  <button type="submit">Invia</button>
                </p>
              </form>
              <p className="feedback__privacy">
                * L'indirizzo email fornito verrà utilizzato solo ed
                esclusivamente per rispondere a questo feedback. Per maggiori
                info: <Link to="/privacypolicy">Privacy policy</Link>.
              </p>
            </>
          )}
        </div>
      </Animated>
    );
  }
}
