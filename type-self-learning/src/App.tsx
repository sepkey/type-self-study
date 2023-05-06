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

      {/* <Checklist
        data={[
          { name: 'Sepide', surname: 'Kia', age: 32 },
          { name: 'Hamed', surname: 'Nabat', age: 31 },
          { name: 'Navid', surname: 'Baba', age: 35 },
        ]}
        id="age"
        primary="name"
        secondary="surname"
      /> */}

      <Checklist
        data={[
          { id: 1, name: 'Lucy', role: 'Manager' },
          { id: 2, name: 'Bob', role: 'Developer' },
          { id: 3, name: 'Bill', role: 'Developer' },
          { id: 4, name: 'Tara', role: 'Developer' },
          { id: 5, name: 'Sara', role: 'UX' },
          { id: 6, name: 'Derik', role: 'QA' },
        ]}
        id="id"
        primary="name"
        secondary="role"
        style={{
          width: '300px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
      />
    </div>
  );
}

export default App;
