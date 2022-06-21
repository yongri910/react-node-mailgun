import './App.css';
import {useState} from 'react'

function App() {

  const [email, setEmail]=useState('');
  const [subject, setSubject]=useState('');
  const [message, setMessage]=useState('');

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <h1>Send Email</h1>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="email"></input>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input id="subject" onChange={(e)=>setSubject(e.target.value)} type="text"></input>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" onChange={(e)=>setMessage(e.target.value)}></textarea>
          </div>
          <div>
            <label></label>
            <button type="submit">Submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
