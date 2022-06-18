import React from 'react';
import './App.css';
import { GridContainer, GridContent } from 'grid-react';
const content2 = {
  style: {
    backgroundColor: 'red'
  }
}

const content1 = {
  style: {
    backgroundColor: 'blue'
  }
}

function App() {
  return (
    <GridContainer>
      <GridContent {...content1} colSpan={3} rowSpan={4} >
        oi
      </GridContent>
      <GridContent {...content2} colSpan={2} rowSpan={3} >
        oi
      </GridContent>
      <GridContent colSpan={12} rowSpan={1} >
        oi
      </GridContent>
    </GridContainer>
  );
}

export default App;
