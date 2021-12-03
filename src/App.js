import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import { useState } from 'react';


function App() {
  
  const [bio, setBio] = useState("kach bio");


  return (
    <div className="App">
      <Profile fullName='React' bio={bio}  setBio={setBio} >{logo}</Profile>
      
      <h1>h1 :{bio}</h1>
    </div>
  );
}

export default App;
