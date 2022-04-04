import React from 'react';
import './App.css';
import MyHeader from "./MyHeader";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  const counterProps = {
    initialValue: 5
  }

  return (
    <Container>
      <div className="App">
        <MyHeader/>
        <Counter {...counterProps}/>
      </div>
    </Container>
  );
}

export default App;
