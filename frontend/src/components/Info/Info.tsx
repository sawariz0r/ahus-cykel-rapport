import React from 'react';
import Styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
  isOpen: any,
  title: string,
  toggleInfo: any,
  children?: any
}

const Component = Styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 85vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
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
  height: 40px;
  width: 40px;
  box-sizing: border-box;
  padding: 10px;
  background: #030303cc;
  border-radius: 10px;
`;

const Info = (props: Props) => {
  return (
    <Component
      onClick={(e: any) => e.stopPropagation()}
      initial={false}
      animate={props.isOpen ? "open" : "closed"}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      variants={{
        closed: { y: "100vh", opacity: 1, transformOrigin: "bottom" },
        open: { y: 0, opacity: 1, }
      }}>
      <motion.div
        initial={false}
        animate={props.isOpen ? "open" : "closed"}
        variants={{
          open: {
            position: "absolute",
            height: "15vh",
            width: "100vw",
            top: "-15vh",
            left: "0",
            background: "rgba(0, 0, 0, 0.5)",
            opacity: 0.5,
            pointerEvents: "painted",
            zIndex: 1100
          },
          closed: {
            opacity: 0
          }
        }} />
      <Close onClick={() => props.toggleInfo()}>
        <svg width="20" height="20" viewBox="0 0 22 19">
          <path fill="transparent" strokeWidth="2" stroke="rgb(255, 255, 255)" strokeLinecap="round" d="M 4 16.5 L 17 2.5" />
          <path fill="transparent" strokeWidth="2" stroke="rgb(255, 255, 255)" strokeLinecap="round" d="M 4 2.5 L 17 16.346" />
        </svg>
      </Close>
      {
        props.children
      }
    </Component>
  )
}

export default Info
