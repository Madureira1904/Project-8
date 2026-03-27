import "./Rating.css";

function Rating({ rating }) {
  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < Number(rating) ? "star filled" : "star"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
export default Rating;