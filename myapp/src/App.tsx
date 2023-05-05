import './App.css';
import { Alert } from './Alert';

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
