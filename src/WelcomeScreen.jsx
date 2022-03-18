import React from "react";
import {useState } from "react";
import "./WelcomeScreen.css";

const WelcomeScreen = (props) => {

  const [showLogin, setShowLogin] = useState(false);

  return props.showWelcomeScreen ? (
    <div className="WelcomeScreen">
      <h1 className="welcome__title">Welcome to the Meet app</h1>
      <p>
        This is an app that show's imaginary events from an online school, in
        order to demonstrate the use of GoogleAuth0 and Google Calendar API,
        using AWS lambda
      </p>
      <h4 className="welcome__subtitle">
        Log in to see upcoming events for full-stack developers around the world
      </h4>
      <button
        onClick={() => {
          setShowLogin(true);
        }}
      >
        Login
      </button>
      {showLogin && (
        <div className="button_cont" align="center">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button
              onClick={() => {
                props.getAccessToken();
              }}
              rel="nofollow noopener"
              className="google-btn__btn-text"
            >
              <b>Sign in with google</b>
            </button>
          </div>
        </div>
      )}
      <a
        href="https://farmeroy.github.io/meet-app/privacy.html"
        rel="nofollow noopener"
      >
        Privacy policy
      </a>
    </div>
  ) : null;
};

export default WelcomeScreen;
