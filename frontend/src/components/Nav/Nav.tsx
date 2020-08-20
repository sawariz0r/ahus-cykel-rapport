import React from 'react'
import Styled from "styled-components";
import { useCycle, motion } from "framer-motion";
import Toggle from "./Toggle";
import { Menu } from './Menu';

interface Props { }

const NavContainer = Styled<any>(motion.div)`
  height: 100%;
  width: 100vw;
  z-index: 600;
  overflow: hidden;
`;

export const Nav = (props: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <NavContainer
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <Toggle onClick={() => {
        toggleOpen()
      }} />
      <Menu isOpen={isOpen}>

      </Menu>
    </NavContainer>
  )
}
