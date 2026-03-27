import "./Tags.css"

function Tags({ tags }) {
  return (
    <div className="logement-tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
    </div>
  );
}
export default Tags;