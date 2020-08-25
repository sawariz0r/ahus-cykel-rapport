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
  height: 300px;
  width: 90vw;
  left: 5vw;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 16px;
  z-index: 1002;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.06), 
              0 2px 2px rgba(0,0,0,0.06), 
              0 4px 4px rgba(0,0,0,0.06), 
              0 8px 8px rgba(0,0,0,0.06),
              0 16px 16px rgba(0,0,0,0.06);

  @media (min-width: 767px) {
    width: 340px;
    left: calc((100% - 340px) / 2);
  }
  
  p {
    font-size: 16px;
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
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

const Title = Styled.h1`
  font-size: 24px;
  margin: 0 0 12px 0;
`;

const Text = Styled.p`
  position: relative;
  font-size: 16px;

  ${props => props.title && `
   &:before {
     content: "${props.title}";
     position: absolute; 
     top: -13px;
     font-size: 12px;
     left: 0;
     height: 10px;
   } 
  `}  
`;


const Info = (props: Props) => {
  return (
      <Component
        onClick={(e: any) => e.stopPropagation()}
        initial={false}
        animate={props.isOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        variants={{
          closed: { y: 400, opacity: 0 },
          open: { y: -20, opacity: 1, }
        }}>
        <Close onClick={() => props.toggleInfo()}>
          <svg width="20" height="20" viewBox="0 0 22 19">
            <path fill="transparent" strokeWidth="2" stroke="rgba(0, 0, 0, 0.8)" strokeLinecap="round" d="M 4 16.5 L 17 2.5" />
            <path fill="transparent" strokeWidth="2" stroke="rgba(0, 0, 0, 0.8)" strokeLinecap="round" d="M 4 2.5 L 17 16.346" />
          </svg>
        </Close>
        
        <Title>Cykel</Title>
        <Text title="Title">Text</Text>
      </Component>
  )
}

export default Info
