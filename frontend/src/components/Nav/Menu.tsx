import React from 'react';
import Styled from "styled-components";
import { motion } from 'framer-motion';

interface Props {
  isOpen: any,
  children: any
 }

const Nav = Styled(motion.div)`
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  width: 100vw;
  z-index: 1100;
  background: rgba(0, 0, 0, 0.8);
`;

export const Menu = (props: Props) => {
  return (
    <Nav
      animate={props.isOpen ? "open" : "closed"}
      variants={{
        closed: { y: "-100%", opacity: 1, transformOrigin: "top" },
        open: { y: 0, opacity: 1 }
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      { props.children }
    </Nav>
  )
}
