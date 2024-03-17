import React from "react";
import PropTypes from "prop-types";

const Button = () => {
  return (
    <button
      className={`btn ${props.className}`}
      onclick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

const OutlinedButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
