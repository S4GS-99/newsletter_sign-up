import { useEffect, useState } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Success from './components/Success';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [isFull, setFull] = useState('feature');
  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  useEffect(() => {
    const updateSize = () => {
      window.innerWidth > 1024 ? setFull('feature') : setFull('full-width');
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', updateSize);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div className="content-grid">
      <main className={isFull}>
        {submitted === false ? <SignUp onSubmit={handleSubmit} /> : <Success />}
      </main>
    </div>
  );
}

export default App;
