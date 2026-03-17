import "./Banner.css"

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt={title} className="banner-img" />
      <h1 className="banner-title">{title}</h1>
    </div>
  );
}

export default Banner;