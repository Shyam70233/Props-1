import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <Title />
      <Conter counter={0} />
      <Conter counter={1} />
      <Conter counter={2} />

      <Button>+x</Button>
      <Button>+y</Button>
      <Button>+z</Button>
    </div>
  );
}

function Title() {
  return <h1>title comp</h1>;
}

function Conter(props) {
  return <h2>counter {props.counter}</h2>;
}

function Button(props) {
  return <button>{props.children}</button>;
}
