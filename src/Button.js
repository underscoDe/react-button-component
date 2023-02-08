import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const STYLES = {
  small: {
    "--padding": "8px 16px",
    "--borderRadius": 2 + "px",
    "--fontSize": "1rem",
  },
  medium: {
    "--padding": "16px 24px",
    "--borderRadius": 2 + "px",
    "--fontSize": 18 / 16 + "rem",
  },
  large: {
    "--padding": "20px 36px",
    "--borderRadius": 4 + "px",
    "--fontSize": 21 / 16 + "rem",
  },
};

const Button = ({ variant, size, children }) => {
  const styles = STYLES[size];

  const ButtonComponent =
    variant === "fill"
      ? FillButton
      : variant === "outline"
      ? OutlineButton
      : GhostButton;

  return <ButtonComponent style={styles}>Button</ButtonComponent>;
};

const ButtonBase = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  color: ${COLORS.white};
`;

const FillButton = styled(ButtonBase)`
  background: ${COLORS.primary};

  &:focus {
    outline-offset: -5px;
    outline-color: ${COLORS.primary};
  }

  &:hover {
    background: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(ButtonBase)`
  background: ${COLORS.white};
  color: ${COLORS.primary};
  border-color: inherit;

  &:focus {
    outline-offset: -5px;
  }

  &:hover {
    background: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(ButtonBase)`
  background-color: transparent;
  color: gray;

  &:focus {
    border-color: ${COLORS.transparentGray75};
    border-radius: 8px;
  }

  &:hover {
    background: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

export default Button;
