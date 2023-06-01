import "./Icon.css";
import PropTypes from "prop-types";
import classNames from "classnames";

const Icon = ({ name, className, onClick, size, disabled, ...attrs }) => {
  const classes = classNames(
    "fa",
    `fa-${name}`,
    className,
    { func: onClick },
    { disabled }
  );

  const elemSize = size ? { fontSize: `${size}rem` } : null;

  return (
    <i
      {...attrs}
      className={classes}
      onClick={disabled ? null : onClick}
      style={elemSize}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.number,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  name: "",
  className: "",
  onClick: null,
  size: null,
  disabled: false,
};

export default Icon;
