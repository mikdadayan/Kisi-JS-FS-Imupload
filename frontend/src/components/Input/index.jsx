const Input = ({
  type,
  onChange,
  value = "",
  id = "",
  className = "",
  placeholder = "",
  accept = "",
  labelText = "",
  labelClassName = "",
  style = {},
}) => {
  return (
    <>
      {labelText && (
        <label className={labelClassName} htmlFor={id}>
          {labelText}
        </label>
      )}
      <input
        id={id}
        className={className}
        type={type}
        onChange={onChange}
        value={value}
        accept={accept}
        placeholder={placeholder}
        style={style}
      />
    </>
  );
};

export default Input;
