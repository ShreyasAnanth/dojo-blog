
import './App.css';
import { useState } from 'react';

function App() {
  const title = 'React Calender Event';
  const raisePopup = (Event) => {
    console.log(Event.target.innerHTML)    
  }
  let eventData = useState('')
 
  return (
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>
        <div className='wrapper'>
          <div className='time-display' onClick={raisePopup}><h3>9 AM</h3><h3 className='events'>{eventData}</h3></div>
          <hr></hr>
                   
        </div>
      </div>
    </div>
  );
}

export default App;
