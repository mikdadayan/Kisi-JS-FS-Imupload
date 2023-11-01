import "./style.scss";

const Loading = ({ message }) => {
  return <div className="loading-message">{message || "Loading..."}</div>;
};

export default Loading;
