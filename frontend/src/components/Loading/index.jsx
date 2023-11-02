import "./style.scss";

const Loading = ({ message }) => {
  return (
    <div className="loading-message">
      <p>{message || "Loading..."}</p>
    </div>
  );
};

export default Loading;
