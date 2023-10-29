import "./Card.scss";

const KISI_BACKEND_API = "http://localhost:8000";

function Card({ imageUrl, title, description }) {
  return (
    <div className="card">
      <img
        crossOrigin="anonymous"
        src={`${KISI_BACKEND_API}/api/images${imageUrl}`}
        alt={title}
      />
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
}

export default Card;
