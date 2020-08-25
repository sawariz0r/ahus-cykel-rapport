import React from 'react';
import Styled from "styled-components";
import { CgTrack } from "react-icons/cg/"

interface Props {
  onClick: any,
}

const Button = Styled.div`
  position: absolute;
  box-sizing: border-box;
  bottom: 16px;
  left: 16px;
  z-index: 820;
  height: 40px;
  width: 40px;
  background: #030303cc;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  svg {
    height: 100%;
    width: 100%;
    color: #f3f3f3;
  }
`;

const FocusSelf = (props: Props) => {
  return (
    <Button onClick={props.onClick}>
      <CgTrack />
    </Button>
  )
}

export default FocusSelf
