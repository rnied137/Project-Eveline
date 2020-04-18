import React, { useState } from "react";
import arrayOfQuotes from "../data";
import Quote from "./Quote";

import "../styles/mainComponent.css"

export default function MainComponent() {
  const [quotesCurrent, setQuotes] = useState(arrayOfQuotes[4]);

  const previousQuote = () => {
    let currentIndex = returnCurrentIndex();
    if (currentIndex - 1 < 0) currentIndex = arrayOfQuotes.length-1;
    else
    currentIndex = currentIndex -1;
    setQuotes(arrayOfQuotes[currentIndex]);
    console.log("Currrent value prev is " + currentIndex)
  };

  const nextQuote = () => {
    let currentIndex = returnCurrentIndex();
    if (currentIndex + 1 == arrayOfQuotes.length) currentIndex = 0;
    else
    currentIndex = currentIndex +1;
    setQuotes(arrayOfQuotes[currentIndex]);
    console.log("Currrent value next is " + currentIndex)
  };

  const returnCurrentIndex = () => {
    for (let i = 0; i < arrayOfQuotes.length; i++) {
      if (quotesCurrent === arrayOfQuotes[i]) 
      {
          console.log(i);
          return i;
      }
    }
  };

  const randomQuote =()=> {
    let random = (Math.floor(Math.random() * arrayOfQuotes.length));
    setQuotes(arrayOfQuotes[random]);
    console.log(quotesCurrent)
  }

  return (
    <div>
  
  <div className="quote-area">
  <Quote quote={quotesCurrent} />
  </div>

        <button
          onClick={previousQuote}
          className="button"
        >
          Poprzedni
        </button>

        <button onClick={randomQuote}
        className="button">
        Losowy
        </button>
        <button
          onClick={nextQuote}
          className="button"
        >
          Następny
        </button>



    </div>
  );
}
