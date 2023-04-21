import './App.css';
import { MyComponent } from './components/invitation';

function App() {
  const details = {
    name:'jaGdish',
    subject:'Birthday party invitation',
    email:'jaGdish@gmail.com',
    main:'Birthday party',
    guestLists:['Ritu','Saurabh','Kartik'],
    address:'Green field Avenue'
  };
  return (
    <div className="App">
      <header>
        <MyComponent name="jaGdish" subject={details.subject} email={details.email} main={details.main} guestLists={details.guestLists} address={details.address}/>
      </header>
    </div>
  );
}

export default App;
