export const ReviewForm = () => {
  return (
    <div className="review-form-container">
      <div className="start-widget">
        <input type="radio" name="rate" id="rate-5" />
        <label htmlFor="rate-5" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-4" />
        <label htmlFor="rate-4" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-3" />
        <label htmlFor="rate-3" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-2" />
        <label htmlFor="rate-2" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-1" />
        <label htmlFor="rate-1" className="fas fa-star"></label>
        <form action='#'>
          <header></header>
          <div className="textarea">
            <textarea cols={30} placeholder="Describe your experience..."></textarea>
          </div>
          <div className="btn">
            <button type="submit">Send feedback</button>
          </div>
        </form>
      </div>    
    </div>
  );
}