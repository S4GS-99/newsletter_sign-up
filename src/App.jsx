import { useState } from 'react';
import './App.css';
import SignUp from './components/Sign-up';
import Success from './components/Success';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="content-grid">
      <main className="feature">
        {submitted === true ? <SignUp /> : <Success />}
      </main>
      <footer>
        <div className="attribution">
          <p>
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Santiago Gomez</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
