import { useState } from 'react';

function signUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const res = await fetch('../utils/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.status === 200) {
      // Haria falta terminar de definir a donde iria el usuario
    } else {
      return console.error("You haven't signed up successfully")
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <label>
        Correo electrónico:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Registrarse</button>
    </form>
  );
}