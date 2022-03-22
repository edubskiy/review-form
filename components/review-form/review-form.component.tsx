import React, { useState } from 'react';
import { rates } from './review-form.config';
import {
  Container,
  ReviewEdit,
  ReviewText,
  StarsInput,
  StarsLabel,
  ReviewFormContainer,
  TextareaContainer,
  Textarea,
  ReviewFormButtonContainer,
  ReviewFormButton,
  ReviewFormHeader,
  StarsContainer,
} from './review-form.styles';

export const ReviewForm = () => {
  const [rateHovered, setRateHovered] = useState<number | null>(null);
  const [rateSelected, setRateSelected] = useState<number | null>(null);
  const [feedbackSent, setFeedbackSent] = useState<Boolean>(false);

  return (
    <Container>
      {feedbackSent ? (
        <div>
          <ReviewText>Thanks for your rating!</ReviewText>
          <ReviewEdit onClick={() => setFeedbackSent(false)}>EDIT</ReviewEdit>
        </div>
      ) : (
        <StarsContainer className={`stars`}>
          {rates.map((rate, i) => {
            const checked = rateSelected !== null && rate.value <= rateSelected;
            const hovered = Boolean(
              rateHovered !== null && rate.value <= rateHovered,
            );

            return (
              <span key={rate.name}>
                <StarsInput
                  type='radio'
                  name='rate'
                  checked={checked}
                  id={rate.name}
                  onChange={() => {}}
                  onClick={() => {
                    setRateSelected(rate.value);
                  }}
                />
                <StarsLabel
                  checked={checked}
                  hovered={hovered}
                  onMouseOut={() => setRateHovered(null)}
                  onMouseOver={() => setRateHovered(rate.value)}
                  htmlFor={rate.name}
                  className={`fas fa-star`}
                ></StarsLabel>
              </span>
            );
          })}
          {rateSelected ? (
            <ReviewFormContainer action='#'>
              <ReviewFormHeader>
                {rates[rateSelected - 1].text}
              </ReviewFormHeader>
              <TextareaContainer>
                <Textarea
                  cols={30}
                  placeholder='Describe your experience...'
                ></Textarea>
              </TextareaContainer>
              <ReviewFormButtonContainer
                className='btn'
                onClick={() => setFeedbackSent(true)}
              >
                <ReviewFormButton type='submit'>Send feedback</ReviewFormButton>
              </ReviewFormButtonContainer>
            </ReviewFormContainer>
          ) : null}
        </StarsContainer>
      )}
    </Container>
  );
};
