import logo from './logo.svg';
import './App.css';
import {Mybutton} from './components/Button/button.js'
import {Mylogo} from './components/ReactLogo/logo.js'
import {Mybenefits} from './components/ReactBenefits/benefits.js'

function App() {
  return (
    <div className="App">
      <header>
        <Mylogo/>
        <Mybenefits/>
        <Mybutton/>
      </header>
    </div>
  );
}

export default App;
