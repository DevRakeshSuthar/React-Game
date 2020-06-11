import React from "react";

const Form = ({ returnGuessToApp }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const guess = e.target.elements.guess.value;
    // console.log(guess);

    returnGuessToApp(guess);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Guess number..."
          name="guess"
          required
        ></input>
        <button type="submit">check guess</button>
      </form>
    </div>
  );
};

export default Form;
