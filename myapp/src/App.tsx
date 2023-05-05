import './App.css';
import { Alert } from './components/Alert';

function App() {
  return (
    <div className="App">
      <Alert heading="success" closable>
        I'm feeling good
      </Alert>
    </div>
  );
}

export default App;
