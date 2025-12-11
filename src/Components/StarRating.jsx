import  "./StarRating.css";

function StarRating({ rating, setRating }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
  key={star}
  onClick={() => setRating(star)}
  className={star <= rating ? "active" : ""} 
>
  ★
</span>

      ))}
    </div>
  );
}
export default StarRating;