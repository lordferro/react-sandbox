import React from "react";
import Icon from "./Icon";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";

const IconSandBox = () => {
  return (
    <>
      <h2>1. Base icon</h2>
      <Icon
        name="atom"
        onClick={() => {
          console.log("!!!");
        }}
      />

      <h2>2. Icons button group</h2>
      <ButtonGroup>
        <Button active>
          <Icon name="align-right" />
        </Button>
        <Button>
          <Icon name="align-center" />
        </Button>
        <Button>
          <Icon name="align-left" />
        </Button>
        <Button>
          <Icon name="align-justify" />
        </Button>
      </ButtonGroup>

      <h2>
        <span>3. Icon with size 8rem</span>
      </h2>
      <Icon title="badge" size={8} name="award" />

      <h2>
        <span>4. Disabling icon functionality:</span>
      </h2>
      <Icon
        size={2}
        disabled
        onClick={() => {
          console.log("!!!");
        }}
        name="atom"
      />
    </>
  );
};

export default IconSandBox;
