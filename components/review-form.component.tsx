import React, { useState } from "react";
import { rates } from "./review-form.config";

export const ReviewForm = () => {
  const [ rateHovered, setRateHovered ] = useState<number | null>(null);
  const [ rateSelected, setRateSelected ] = useState<number | null>(null);
  const [ feedbackSent, setFeedbackSent ] = useState<Boolean>(false);
  
  return (
    <div className="review-form-container">
      {feedbackSent
        ? <div className="post">
            <div className="text">Thanks for your rating!</div>
            <div className="edit" onClick={() => setFeedbackSent(false)}>EDIT</div>
          </div>
        : <div className={`start-widget ${rates.length === rateSelected ? 'all-checked' : ''}`}>
            {rates.map((rate, i) => {              
              const checked = rateSelected !== null && rate.value <= rateSelected;

              return (
                <span key={rate.name}>
                  <input
                    className={checked ? 'checked' : ''}
                    type="radio" 
                    name="rate" 
                    checked={checked} 
                    id={rate.name} 
                    onChange={() => {}}
                    onClick={() => {
                      setRateSelected(rate.value);
                    }} 
                  />
                  <label 
                    onMouseOut={() => setRateHovered(null)} 
                    onMouseOver={() => setRateHovered(rate.value)} 
                    htmlFor={rate.name} 
                    className={`fas fa-star ${rateHovered !== null && rate.value <= rateHovered ? 'hovered' : ''}`}
                  ></label>
                </span>
              )  
            })}
            {rateSelected 
              ? <form action='#'>
                  <header>{rates[rateSelected - 1].text}</header>
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