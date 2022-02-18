import React from 'react';    

function App() {              
  // we can write JS here :)
  const name = "Adam";
  const age = "32";

  return (                   //JSX = Javascript XML
     <div><p>My name is {name} and I'm {age} years old.</p>
     <p>Test</p>
     <img src="https://thiscatdoesnotexist.com/" alt="random picture of cat"></img>
     </div>
  );                          
}  

export default App;
