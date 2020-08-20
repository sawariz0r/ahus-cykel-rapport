import React from 'react'
import Styled from "styled-components";
import { useCycle, motion } from "framer-motion";
import ToggleBars from "./ToggleBars";
import { Navigation } from './Navigation';

interface Props { }

const NavContainer = Styled<any>(motion.div)`
  height: 100vh;
  width: 100vw;
  z-index: 600;
`;
const Trigger = Styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 16px;
  right: 16px;
  z-index: 500;
  height: 60px;
  width: 60px;
  background: #030303cc;
  border-radius: 10px;
  padding: 10px;
`;

export const Nav = (props: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <NavContainer
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <Trigger onClick={() => toggleOpen()}>
        <ToggleBars />
      </Trigger>
    <Navigation isOpen={isOpen} />
    </NavContainer>
  )
}
