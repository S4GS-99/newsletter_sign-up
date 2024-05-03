import { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Success from './components/Success';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="content-grid">
      <main className="full-width">
        {submitted === false ? <SignUp onSubmit={handleSubmit} /> : <Success />}
      </main>
    </div>
  );
}

export default App;
