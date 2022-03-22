import React from 'react';
import { SizedBox, SizedBoxS, SizedBoxXS } from '../../pages/api/index.styles';
import { scores } from './review-board.config';
import {
  ReviewBoardBar,
  ReviewBoardBarContainer,
  ReviewBoardContainer,
  ReviewBoardHeader,
  ReviewBoardItemContainer,
  ReviewBoardItemLeft,
  ReviewBoardItemMiddle,
  ReviewBoardItemRight,
  ReviewBoardStarContainer,
  ReviewBoardSubHeader,
  SimpleText,
} from './review-board.styled';

export const ReviewBoard = () => {
  return (
    <ReviewBoardContainer>
      <ReviewBoardHeader>
        <div>User Rating</div>
        <ReviewBoardStarContainer>
          <div className={`fas fa-star`}></div>
          <div className={`fas fa-star`}></div>
          <div className={`fas fa-star`}></div>
          <div className={`fas fa-star`}></div>
          <div className={`far fa-star`}></div>
        </ReviewBoardStarContainer>
      </ReviewBoardHeader>
      <ReviewBoardSubHeader>
        4.3 average based on 199 reviews.
      </ReviewBoardSubHeader>
      <SizedBoxS />
      {scores.map((score) => {
        return (
          <React.Fragment key={score.id}>
            <ReviewBoardItemContainer>
              <ReviewBoardItemLeft>
                <SimpleText>{score.scoreCount} star</SimpleText>
              </ReviewBoardItemLeft>
              <ReviewBoardItemMiddle>
                <ReviewBoardBarContainer>
                  <ReviewBoardBar
                    color={score.color}
                    progress={score.progress}
                  />
                </ReviewBoardBarContainer>
              </ReviewBoardItemMiddle>
              <ReviewBoardItemRight>
                <SimpleText>{score.scoreVotes}</SimpleText>
              </ReviewBoardItemRight>
            </ReviewBoardItemContainer>
            <SizedBoxXS />
          </React.Fragment>
        );
      })}
    </ReviewBoardContainer>
  );
};
