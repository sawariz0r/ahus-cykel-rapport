import React, { useState } from 'react';
import Styled from "styled-components";
import { Map } from './components/Map';
import { Nav } from './components/Nav';
import Info from './components/Info/Info';
import { useCycle } from 'framer-motion';

const Container = Styled.div`
  overflow: hidden;
  height: 100%;
  width: 100vw;
`;


function App() {
  const [infoIsOpen, toggleInfoOpen] = useCycle(false, true);

  return (
    <Container>
      <Map toggleInfo={toggleInfoOpen} />
      <Nav />
      <Info toggleInfo={toggleInfoOpen} isOpen={infoIsOpen} title="hej" />
    </Container>
  );
}

export default App;
