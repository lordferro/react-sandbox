import React, { useState } from "react";
import ButtonGroup from "./ButtonGroup";
import Button from "../Button/Button";

const ButtonGroupSandbox = () => {
  const [switchOn, setSwitchOn] = useState(true);

  const handleSwitch = (e) => {
    setSwitchOn((prevState) => {
      if (e.target.classList.contains("active")) {
        return prevState;
      }
      return !prevState;
    });
  };

  return (
    <>
      <h2>
        <span>1. Horizontal button group:</span>
      </h2>
      <ButtonGroup>
        <Button active>First</Button>
        <Button>Middle</Button>
        <Button>Last</Button>
      </ButtonGroup>

      <h2>
        <span>2. Vertical button group:</span>
      </h2>
      <ButtonGroup vertical>
        <Button>First</Button>
        <Button active>Middle</Button>
        <Button>Last</Button>
      </ButtonGroup>

      <h2>
        <span>3. Switcher button group:</span>
      </h2>
      <ButtonGroup>
        <Button onClick={handleSwitch} active={switchOn}>
          ON
        </Button>
        <Button onClick={handleSwitch} active={!switchOn}>
          OFF
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ButtonGroupSandbox;
