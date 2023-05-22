import React from "react";
import classNames from "classnames";
import "./button.css";

export const Button = ({ children="default button", onClick, className, disabled, active, ...attrs }) => {
    const classes = classNames("btn", className, { active });
    const Tag = attrs.href ? 'a' : 'button'
    const onClickAction = (e) => {
        if (disabled) {
            e.preventDefault()
        }
        else {return onClick(e)}
    }
  return (
    <Tag className={classes} disabled={disabled} onClick={onClickAction} {...attrs}>
      {children}
    </Tag>
  );
};
