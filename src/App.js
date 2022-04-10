import React, {useState} from 'react';
import './index.css';

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
   <>
    <div className='second'>
    <h1>{ctime}</h1>
    </div>
   </>
   
  );
}

export default App;
