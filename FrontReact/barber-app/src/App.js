import logo from './logo.svg';
import './App.css';
import { FormSubmitDate } from './Components/registerDate_Form.jsx/Forms/FormSubmitDate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FormSubmitDate/>
      </header>
    </div>
  );
}

export default App;
