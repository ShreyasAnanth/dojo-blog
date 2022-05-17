
import './App.css';
import eventData from './App.js'



function popup() {
  const title = 'Enter Event and time';
  let data = '';
  const bindName = (Event) => {
    //   console.log(document.getElementById('inputEvent'))
    //   console.log(Event.target.value) 
      data = Event.target.value
    }
    const submitEvent = () => {
        eventData = data;
    }
  return (
    <div className="popup">
      <div className='content-2'>
        <p className='popup-title'>{title}</p>
        <div className='form'>
         <input type="text" id='inputEvent' onInput={bindName} placeholder="Enter Event"></input>  
            <input type="submit" onClick={submitEvent} />
        </div>
      </div>
    </div>
  );
}

export default popup;
