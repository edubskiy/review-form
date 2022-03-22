import React from 'react';
import { SizedBoxXS } from '../../pages/api/index.styles';
import { scores } from './review-board.config';
import {
  ReviewBoardBar,
  ReviewBoardBarContainer,
  ReviewBoardContainer,
  ReviewBoardItemContainer,
  ReviewBoardItemLeft,
  ReviewBoardItemMiddle,
  ReviewBoardItemRight,
  SimpleText,
} from './review-board.styled';

export const ReviewBoard = () => {
  return (
    <ReviewBoardContainer>
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
