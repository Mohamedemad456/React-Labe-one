import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

function GuessGame() {
  const [number, setNumber] = useState(0);
  const [numberOfTries, setNumberOfTries] = useState(1);
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Function to generate a random number everytime the page refreshes
    setNumber(Math.floor(Math.random() * 100));
  }, []);


  // To confirm that handling function is working
  console.log(number);


  // Handling the guessed number 
  function handleGuess(e) {
    // To prevent the Form from refreshing the page
    e.preventDefault();

    //Converting the guess coming from input into integer
    const guess = parseInt(document.getElementById("guessId").value);

    if (numberOfTries < 5) {
      // Check if it's not the last try
      if (guess >= 1 && guess <= 100) {
        setNumberOfTries(numberOfTries + 1);
        if (guess === number) {
          setMessage("Congratulations, You guessed the number right!");
          document
            .getElementById("guessButton")
            .setAttribute("disabled", "true");
            // Disabling the button after winning
        } else if (guess < number) {
          setMessage("The number is higher than your guess");
        } else {
          setMessage("The number is lower than your guess");
        }
      } else {
        setMessage("Please enter a number between 1 and 100!");
      }
    } else if (numberOfTries === 5) {
      // Check if it's the last try
      if (guess === number) {
        setNumberOfTries(numberOfTries + 1);
        setMessage(
          "Congratulations, You guessed the number right on the last try!"
        );
      } else {
        setNumberOfTries(numberOfTries + 1);
        setMessage(
          `You lose. The number was ${number}. Please refresh to start again!`
        );
      }
      // Disabling the button after the 5 tries
      document.getElementById("guessButton").setAttribute("disabled", "true");
    }
  }
  return (
    <Container
      className="col-md-6 text-center d-flex justify-content-center flex-column p-3"
      style={{ backgroundColor: "white" }}
    >
      <h1>Guess Game</h1>
      <h2>You tried {numberOfTries - 1} times</h2>
      <Form>
        <Form.Group>
          <Form.Label>
            <h4>Guess the number between 1 and 100</h4>
          </Form.Label>
          {message && (
            <Alert variant="warning">
              <strong>{message}</strong>
            </Alert>
          )}
          <Form.Control type="number" id="guessId" required min={0} max={100} />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="my-3"
          id="guessButton"
          onClick={(e) => handleGuess(e)}
        >
          Submit Guess
        </Button>
      </Form>
    </Container>
  );
}

export default GuessGame;
