import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Chip.css";
import Image from "../image/Image";
import Icon from "../Icon/Icon";

const Chip = ({
  text,
  withImage,
  withIcon,
  withClose,
  imageSrc,
  imgAlt,
  iconName,
  className,
  id,
  onCloseClick,
  onChipClick,
}) => {
  const classes = classNames("chip", className);

    const onChipClickAction = () => {
    onChipClick(id);
  };
  const onCloseClickAction = (e) => {
      e.stopPropagation();
    onCloseClick(e, id);
  };

  return (
    <div className={classes} onClick={onChipClickAction}>
      {withImage && (
        <span className="chipImage">
          <Image src={imageSrc} alt={imgAlt} width={24} height={24} />
        </span>
      )}
      {withIcon && (
        <span className="chipIcon">
          <Icon name={iconName} />
        </span>
      )}
      <span className="chipText">{text}</span>
      {withClose && (
        <span className="chipIcon" onClick={onCloseClickAction}>
          <Icon name="times" />
        </span>
      )}
    </div>
  );
};

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  withImage: PropTypes.bool,
  withIcon: PropTypes.bool,
  withClos: PropTypes.bool,
  imageSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  iconName: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChipClick: PropTypes.func,
  onCloseClick: PropTypes.func,
};

Chip.defaultProps = {
  withImage: false,
  withIcon: false,
  withClose: false,
  imgSrc: "",
  imgAlt: "",
  iconName: "user",
  className: "",
  id: null,
  onChipClick: () => {},
  onCloseClick: () => {},
};

export default Chip;
