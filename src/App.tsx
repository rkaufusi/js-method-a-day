import React from 'react';
import methods from './methods'

function App() {
  console.log(methods[0].image)
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-yellow-300 to-green-300 h-screen">
      <h2 className="font-bold text-4xl text-slate-800 m-2">JS Method of the day</h2>
      <div className="flex flex-col text-center outline outline-4 outline-offset-2">
        <h1>{methods[0].name}</h1>
        <h4>{methods[0].description}</h4>
        <img src={methods[0].image}/>
      </div>
    </div>
  );
}

export default App;
