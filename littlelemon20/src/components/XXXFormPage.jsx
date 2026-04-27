// src/components/FormPage.jsx
import { useState } from 'react';
import { useUser } from '../context/UserContext'; // Import custom hook

const FormPage = () => {
  // Access the context
  const { user, updateUser } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the context value
    updateUser(name, email);
  };

  return (
    <div style={{ border: '1px solid black', padding: '20px' }}>
      <h3>Nested FormPage Component</h3>
      <p>Current Context User: {user.name} ({user.email})</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Update Context</button>
      </form>
    </div>
  );
};

export default FormPage;