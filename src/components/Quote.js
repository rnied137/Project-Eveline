import React from 'react'
import "../styles/quote.css";

export default function Quote({quote}) {
    return (
        <div className="quote-area">
              <i className="fa fa-quote-right"></i>
              <p>{quote}</p>
  <i className="fa fa-quote-left"></i>
                 

        </div>
    )
}
