import "./style.scss";

const ErrorMessage = ({ message }) => {
  return (
    <>
      <div className="error-message">
        {message || "Something went wrong..."}
      </div>
    </>
  );
};

export default ErrorMessage;
