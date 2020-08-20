import React from 'react';
import Styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
  isOpen: any,
  title: string,
  description: string,
  toggleInfo: any
}

const Component = Styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 70vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.95);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 16px;

  p {
    font-size: 36px;
    color: black;
  }
`;

const Close = Styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: black;
  height: 20px;
  width: 20px;
`;

const Info = (props: Props) => {
  return (
    <Component
      initial={false}
      animate={props.isOpen ? "open" : "closed"}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      variants={{
        closed: { y: "100%", opacity: 1, transformOrigin: "bottom" },
        open: { y: 0, opacity: 1, }
      }}>
      <Close onClick={() => props.toggleInfo()} />
      {props.title}
      <p>Modell:</p>
      {props.description}
      <p>Färg:</p>
    </Component>
  )
}

export default Info
