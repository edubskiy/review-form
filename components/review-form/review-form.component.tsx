import React, { useState } from 'react';
import { SizedBoxXS, TextXL } from '../../pages/api/index.styles';
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
  const [userFeedbackText, setUserFeedbackText] = useState<string | null>(null);

  return (
    <Container>
      {feedbackSent ? (
        <div>
          <ReviewText>Thanks for your rating!</ReviewText>
          <ReviewEdit onClick={() => setFeedbackSent(false)}>EDIT</ReviewEdit>
        </div>
      ) : (
        <StarsContainer className={`stars`}>
          <TextXL>How do you like our product?</TextXL>
          <SizedBoxXS />
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
                  onChange={(e) => {
                    setUserFeedbackText(e.currentTarget.value);
                  }}
                  cols={30}
                  placeholder='Share your experience...'
                ></Textarea>
              </TextareaContainer>
              <ReviewFormButtonContainer
                className='btn'
                onClick={() => {
                  setFeedbackSent(true);
                }}
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
