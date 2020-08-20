import React from 'react'
import { motion } from 'framer-motion';
import Styled from "styled-components";
interface Props {
  onClick: any,
}

const Trigger = Styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 16px;
  right: 16px;
  z-index: 820;
  height: 40px;
  width: 40px;
  background: #030303cc;
  border-radius: 10px;
  padding: 10px;
`;

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="rgb(255, 255, 255)"
    strokeLinecap="round"
    {...props}
  />
);

const Toggle = ({ onClick }: Props) => {
  return (
    <Trigger onClick={onClick}>
      <svg width="20" height="20" viewBox="0 0 22 19">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 4 16.5 L 17 2.5" }
          }}
          transition={{ duration: 0.2 }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 4 2.5 L 17 16.346" }
          }}
          transition={{ duration: 0.2 }}
        />
      </svg>
    </Trigger>

  )
}

export default Toggle
