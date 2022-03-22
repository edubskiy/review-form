import styled from 'styled-components';
import Image from 'next/image';

export const ReviewCommentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const ReviewCommentsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: 2px 3px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 15px;
  cursor: pointer;
  background-color: #fff;
`;

export const ReviewCommentsCardHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ReviewCommentsCardBody = styled.div`
  padding-top: 10px;
`;

export const ReviewCommentsCardProfile = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
`;

export const ReviewCommentsCardProfileImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
`;

export const ReviewCommentsCardProfileImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ReviewCommentsCardProfileUsernameContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const ReviewCommentsCardProfileUsername = styled.div`
  color: #3d3d3d;
  font-size: 1.1em;
  letter-spacing: 0.5px;
`;

export const ReviewCommentsCardProfileSocial = styled.div`
  color: #979797;
  font-size: 0.8rem;
`;

export const ReviewCommentsCardStars = styled.div``;

export const ReviewCommentsCardFeedback = styled.div`
  font-size: 0.9rem;
  color: #4b4b4b;
  text-align: left;
`;
