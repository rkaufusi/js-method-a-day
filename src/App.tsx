import React from 'react';
import methods from './methods'

function App() {
  let date = new Date()
  let day = date.getDate() - 1
  let num: number;

  if(day < 20) num = day
  else num = day - 20

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-yellow-300 to-green-300 h-screen">
      <h2 className="p-3 font-bold text-4xl text-slate-800 m-2">JS Method of the day</h2>
      <div className="flex flex-col max-w-3xl items-center text-center outline outline-4 outline-offset-2">
        <h1 className="font-bold text-slate-800 text-3xl p-3">{methods[num].name}</h1>
        <h4 className="font-semibold text-slate-800 p-2 text-xl">{methods[num].description}</h4>
        <img className="p-5 max-h-52"src={methods[num].image}/>
      </div>
    </div>
  );
}

export default App;
