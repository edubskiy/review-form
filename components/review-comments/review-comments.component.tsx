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
import { reviews } from './review-comments.config';

export const ReviewComments = () => {
  return (
    <ReviewCommentsContainer>
      {reviews.map((review) => {
        return (
          <ReviewCommentsCard key={review.id}>
            <ReviewCommentsCardHead>
              <ReviewCommentsCardProfile>
                <ReviewCommentsCardProfileImageContainer>
                  <ReviewCommentsCardProfileImage
                    width={50}
                    height={50}
                    src={review.image}
                  />
                </ReviewCommentsCardProfileImageContainer>
                <ReviewCommentsCardProfileUsernameContainer>
                  <ReviewCommentsCardProfileUsername>
                    {review.userName}
                  </ReviewCommentsCardProfileUsername>
                  <ReviewCommentsCardProfileSocial>
                    {review.userSocial}
                  </ReviewCommentsCardProfileSocial>
                </ReviewCommentsCardProfileUsernameContainer>
              </ReviewCommentsCardProfile>
              <ReviewCommentsCardStars>
                {Array.from({ length: 5 }).map((o, i) => {
                  return (
                    <div
                      key={`stars-${review.id}`}
                      className={`fa${i < review.score ? 's' : 'r'} fa-star`}
                    ></div>
                  );
                })}
              </ReviewCommentsCardStars>
            </ReviewCommentsCardHead>
            <ReviewCommentsCardBody>
              <ReviewCommentsCardFeedback>
                {review.feedback}
              </ReviewCommentsCardFeedback>
            </ReviewCommentsCardBody>
          </ReviewCommentsCard>
        );
      })}
    </ReviewCommentsContainer>
  );
};
