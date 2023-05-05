import './App.css';
import { Alert } from './Alert';

function App() {
  return (
    <div className="container">
      <Alert heading="success" closable>
        I'm feeling good
      </Alert>
    </div>
  );
}

export default App;
