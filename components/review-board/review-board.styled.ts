import styled from 'styled-components';
import { ReviewBoardBarProps } from './review-board.types';

export const ReviewBoardContainer = styled.div`
  display: flex;
  width: 400px;
  border: 1px solid #444;
  padding: 10px 0;
  flex-direction: column;
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
  width: 250px;
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
