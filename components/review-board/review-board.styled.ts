import styled from 'styled-components';
import { ReviewBoardBarProps } from './review-board.types';

export const ReviewBoardContainer = styled.div`
  display: flex;
  width: 400px;
  border: 1px solid #444;
  padding-top: 10px 0;
  flex-direction: column;
  color: #fff;
  padding: 12px;
`;

export const ReviewBoardStarContainer = styled.div`
  margin-left: 16px;
`;

export const ReviewBoardHeader = styled.h2`
  margin: 0;
  margin-left: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ReviewBoardSubHeader = styled.div`
  margin-left: 12px;
  display: flex;
  justify-content: flex-start;
  opacity: 0.7;
`;

export const ReviewBoardBarContainer = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
  color: #fff;
`;

export const ReviewBoardBar = styled.div(
  (props: ReviewBoardBarProps) => `
    width: ${props.progress}%;
    height: 100%;
    background-color: ${props.color};
  `,
);

export const ReviewBoardItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid white; */
  width: 100%;
  height: 24px;
  color: #fff;
`;

export const ReviewBoardItemLeft = styled.div`
  display: flex;
  flex-grow: 1;
  width: 50px;
  /* border: 1px solid white; */
  justify-content: flex-start;
  align-items: center;
  padding-left: 12px;
`;

export const ReviewBoardItemMiddle = styled.div`
  display: flex;
  width: 225px;
  /* border: 1px solid white; */
`;

export const ReviewBoardItemRight = styled.div`
  display: flex;
  width: 65px;
  justify-content: flex-end;
  padding-right: 12px;
  align-items: center;
`;

export const SimpleText = styled.div`
  color: #fff;
`;
