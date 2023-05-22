import React from "react";
import classNames from "classnames";

import "./ButtonGroup.css";

const ButtonGroup = ({ children=null, className, vertical, ...attrs }) => {
  const classes = classNames("btn-group", className, { vertical });

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

export default ButtonGroup;
