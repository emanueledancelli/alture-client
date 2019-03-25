import React from "react";
import { Animated, Seo, ScrollToTop, Header, Hero } from "components/common";
import { CheckCircleOutlineIcon } from "mdi-react";
import { Link } from "react-router-dom";
import "./Feedback.page.scss";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const seoTags = {
  title: "Alture - Feedback",
  url: "https://alture.org/feedback",
  description: "Aiutaci a migliorare alture.org con il tuo feedback!"
};

class Feedback extends React.Component {
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
      body: encode({
        "form-name": "feedback",
        email: this.state.mail,
        message: this.state.message
      })
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
        <Seo {...seoTags} />
        <Header close />
        <Hero close hasBorder title="Feedback" />
        <div className="feedback">
          {submitSuccess ? (
            <div className="feedback__success">
              <span>
                Il tuo messaggio è stato inviato con successo, grazie!
              </span>
              <br />
              <Link to="/">
                <CheckCircleOutlineIcon size={80} className="feedback__icon" />
              </Link>
            </div>
          ) : (
            <>
              <span>
                Invia la tua opinione e contribuisci a migliorare alture.org
              </span>
              <form onSubmit={this.handleSubmit}>
                <label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email *"
                    onChange={this.handleChange}
                  />
                </label>

                <label>
                  <textarea
                    name="message"
                    value={message}
                    placeholder="Scrivi qui il tuo messaggio"
                    onChange={this.handleChange}
                  />
                </label>
                <p className="feedback__privacy">
                  * L'indirizzo email fornito verrà utilizzato solo ed
                  esclusivamente per rispondere a questo feedback. Per maggiori
                  info: <Link to="/privacypolicy">Privacy policy</Link>.
                </p>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "15px 0"
                  }}
                >
                  {message.length <= 0 ? (
                    <button
                      className="feedback__btn-disabled"
                      disabled
                      type="submit"
                    >
                      Invia
                    </button>
                  ) : (
                    <button type="submit">Invia</button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </Animated>
    );
  }
}

export default Feedback;
