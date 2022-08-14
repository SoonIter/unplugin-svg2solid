import type { Component } from 'solid-js';
import Logo from './hello/logo.svg';
import Logo2 from './hello/logo2.svg';

const App: Component = () => {
  return (
    <div>
      <Logo />
      <Logo2 />
    </div>
  );
};

export default App;
