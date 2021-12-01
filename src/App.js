import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';


function App() {
  return (
    <div className="App">
      <Profile fullName='React' bio="Hello, My Name is React, Facebook team made me, i'm new and Super COOL">{logo}</Profile>
    </div>
  );
}

export default App;
