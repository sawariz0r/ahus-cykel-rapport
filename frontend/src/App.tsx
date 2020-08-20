import React from 'react';
import logo from './logo.svg';
import './App.css';
import Styled from "styled-components";
import { Map } from './components/Map';
import { Nav } from './components/Nav';

const Container = Styled.div``;


function App() {
  return (
    <Container>
      <Map />
      <Nav />
    </Container>
  );
}

export default App;
