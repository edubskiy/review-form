import {
  ReviewCommentsCard,
  ReviewCommentsCardProfile,
  ReviewCommentsCardFeedback,
  ReviewCommentsContainer,
  ReviewCommentsCardProfileImageContainer,
  ReviewCommentsCardProfileUsernameContainer,
  ReviewCommentsCardStars,
  ReviewCommentsCardProfileImage,
  ReviewCommentsCardProfileUsername,
  ReviewCommentsCardProfileSocial,
  ReviewCommentsCardHead,
  ReviewCommentsCardBody,
} from './review-comment.styles';

export const ReviewComments = () => {
  return (
    <ReviewCommentsContainer>
      <ReviewCommentsCard>
        <ReviewCommentsCardHead>
          <ReviewCommentsCardProfile>
            <ReviewCommentsCardProfileImageContainer>
              <ReviewCommentsCardProfileImage
                width={50}
                height={50}
                src='/images/avatar.png'
              />
            </ReviewCommentsCardProfileImageContainer>
            <ReviewCommentsCardProfileUsernameContainer>
              <ReviewCommentsCardProfileUsername>
                John Doe
              </ReviewCommentsCardProfileUsername>
              <ReviewCommentsCardProfileSocial>
                @johndoe
              </ReviewCommentsCardProfileSocial>
            </ReviewCommentsCardProfileUsernameContainer>
          </ReviewCommentsCardProfile>
          <ReviewCommentsCardStars>
            <div className='fas fa-star'></div>
            <div className='fas fa-star'></div>
            <div className='fas fa-star'></div>
            <div className='fas fa-star'></div>
            <div className='far fa-star'></div>
          </ReviewCommentsCardStars>
        </ReviewCommentsCardHead>
        <ReviewCommentsCardBody>
          <ReviewCommentsCardFeedback>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </ReviewCommentsCardFeedback>
        </ReviewCommentsCardBody>
      </ReviewCommentsCard>
    </ReviewCommentsContainer>
  );
};
