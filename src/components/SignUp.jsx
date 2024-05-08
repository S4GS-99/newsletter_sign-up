import { useState, useEffect } from 'react';
import form from '../styles/SignUp.module.css';
import desktop from '../assets/images/sign-up-desktop.svg';
import mobile from '../assets/images/sign-up-mobile.svg';

export default function SignUp({ onSubmit }) {
  const [imageSrc, setImageSrc] = useState(desktop);
  const [isIncorrect, setIsIncorrect] = useState(false);

  useEffect(() => {
    const updateImageSrc = () => {
      window.innerWidth <= 768 ? setImageSrc(mobile) : setImageSrc(desktop);
    };

    window.addEventListener('resize', updateImageSrc);
    updateImageSrc(); // Call the function to set the initial image source

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', updateImageSrc);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
  };

  return (
    <div className={form.card} id="sign-up">
      <div className={form.content}>
        <h1 className={form.heading}>Stay updated!</h1>
        <p className={form.info}>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className={form.list}>
          <li className={form.item}>
            Product discovery and building what matters
          </li>
          <li className={form.item}>
            Measuring to ensure updates are a success
          </li>
          <li className={form.item}>And much more!</li>
        </ul>
        <form
          className={form.signUp}
          onSubmit={(e) => {
            e.preventDefault();

            const email = e.target.elements.email.value;

            if (!isIncorrect) {
              onSubmit(email.toLowerCase(), true);
            } else {
              return;
            }
          }}
        >
          <label
            className={`${form.label} ${isIncorrect ? form.incorrect : ''}`}
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className={`${form.email} ${isIncorrect ? form.incorrect : ''}`}
            type="email"
            name="email"
            placeholder="email@company"
            required
            onChange={(e) => {
              const email = e.target.value;
              const isValid = validateEmail(email);
              setIsIncorrect(!isValid);
            }}
          />
          <button type="submit" className={form.submit}>
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div className={form.imageContainer}>
        <img src={imageSrc} alt="responsive image" className={form.image} />
      </div>
    </div>
  );
}
