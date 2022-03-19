import React, { useState } from "react";
import { rates } from "./review-form.config";

export const ReviewForm = () => {
  const [ rateHovered, setRateHovered ] = useState<Number | null>(null);
  const [ rateSelected, setRateSelected ] = useState<Number | null>(null);
  const [ feedbackSent, setFeedbackSent ] = useState<Boolean>(false);
  
  return (
    <div className="review-form-container">
      {feedbackSent
        ? <div className="post">
            <div className="text">Thanks for your rating!</div>
            <div className="edit" onClick={() => setFeedbackSent(false)}>EDIT</div>
          </div>
        : <div className="start-widget">
            {rates.map((rate, i) => {
              console.log("rendering rate 2" , rate);
              
              // const rate = ratesMap[rateKey];
              // const checked = rateSelected !== null && rate.value <= rateSelected;
              const checked = rateSelected === rate.value;
              console.log("checked" , checked);
              // if (checked) debugger;
              return (
                <React.Fragment key={rate.name}>
                  <input 
                    type="radio" 
                    name="rate" 
                    checked={checked} 
                    id={rate.name} 
                    onClick={() => {
                      setRateSelected(rate.value);
                    }} 
                  />
                  <label 
                    onMouseOut={() => setRateHovered(null)} 
                    onMouseOver={() => setRateHovered(rate.value)} 
                    htmlFor={rate.name} 
                    className={`fas fa-star ${rateHovered !== null && rate.value <= rateHovered ? 'hovered' : null}`}
                  ></label>
                </React.Fragment>
              )  
            })}
            {rateSelected 
              ? <form action='#'>
                  <header></header>
                  <div className="textarea">
                    <textarea cols={30} placeholder="Describe your experience..."></textarea>
                  </div>
                  <div className="btn" onClick={() => setFeedbackSent(true) }>
                    <button type="submit">Send feedback</button>
                  </div>
                </form> 
              : null
            }
          </div>
      }    
    </div>
  );
}