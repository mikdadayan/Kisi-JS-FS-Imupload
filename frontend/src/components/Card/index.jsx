import "./style.scss";

function Card({ imageUrl, title, description }) {
  return (
    <div className="card">
      <img
        crossOrigin="anonymous"
        src={`${process.env.REACT_APP_KISI_BACKEND_API}/api/images${imageUrl}`}
        alt={title}
      />
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
}

export default Card;
