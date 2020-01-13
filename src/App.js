import React from 'react';
import './data.scss';
import LeftFetch from './LeftFetch';
import RightSide from './RightSide';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <div className="Top">
        <Nav/>
      </div>
      <div className="bottom">
      <LeftFetch/>
      <RightSide/>
      </div>
      
    </div>
  );
}

export default App;
