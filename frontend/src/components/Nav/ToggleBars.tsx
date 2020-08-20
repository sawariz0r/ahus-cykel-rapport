import React from 'react'
import { motion } from 'framer-motion';

interface Props {

}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="rgb(255, 255, 255)"
    strokeLinecap="round"
    {...props}
  />
);

const ToggleBars = (props: Props) => {
  return (
    <svg width="40" height="40" viewBox="0 0 22 19">
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
  )
}

export default ToggleBars
