import React from 'react';
import Styled from "styled-components";
import { motion } from 'framer-motion';

interface Props {
  isOpen: any
 }

const Nav = Styled(motion.div)`
  height: calc(100vh - 92px);
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100vw;
  z-index: 600;
  background: red;
`;

export const Navigation = (props: Props) => {
  return (
    <Nav
      animate={props.isOpen ? "open" : "closed"}
      variants={{
        closed: { x: 600, opacity: 0 },
        open: { x: 0, opacity: 1 }
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
x
    </Nav>
  )
}
