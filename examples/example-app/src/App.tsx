import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GridLayout, MainContent, Header, Footer, LeftSidebar, RightSidebar } from 'grid-react';


function App() {
  return (
    // <Hello />
    <GridLayout layoutType='classic'>
      <Header>
        <h1>Teste</h1>
      </Header>
      <LeftSidebar>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </LeftSidebar>
      <MainContent>
        oi
      </MainContent>
      <RightSidebar>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </RightSidebar>
      <Footer>
        Teste
      </Footer>
    </GridLayout>
  );
}

export default App;
