import React from "react";

const Form = ({
  formData,
  handleChange,
  name,
  id,
  min,
  max,
  placeholder,
  title,
}) => {
  return (
    <div className="form-group-col">
      <p className="form-label">{title}</p>
      <input
        type="number"
        name={name}
        id={id}
        className="form-control"
        min={min}
        max={max}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
      />
    </div>
  );
};

export default Form;
