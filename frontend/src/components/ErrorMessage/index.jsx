import "./style.scss";

const ErrorMessage = ({ message }) => {
  return (
    <>
      <div className="error-message">
        <p>{message || "Something went wrong..."}</p>
      </div>
    </>
  );
};

export default ErrorMessage;
