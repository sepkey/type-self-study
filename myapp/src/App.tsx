import './App.css';
import { Checklist } from './checklist';

function App() {
  return (
    <div className="container">
      <Checklist
        data={[
          { id: 1, name: 'Rose', role: 'Manager' },
          { id: 1, name: 'Dan', role: 'Product owner' },
        ]}
        id="id"
        primary="name"
        secondary="role"
      />

      <Checklist
        data={[
          { name: 'Sepide', surname: 'Kia', age: 32 },
          { name: 'Hamed', surname: 'Nabat', age: 31 },
          { name: 'Navid', surname: 'Baba', age: 35 },
        ]}
        id="age"
        primary="name"
        secondary="surname"
      />
    </div>
  );
}

export default App;
