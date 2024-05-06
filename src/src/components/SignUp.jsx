import { useState, useEffect } from 'react';
import form from '../styles/SignUp.module.css';
import desktop from '../assets/images/sign-up-desktop.svg';
import mobile from '../assets/images/sign-up-mobile.svg';

export default function SignUp({ onSubmit }) {
  const [imageSrc, setImageSrc] = useState(desktop);

  useEffect(() => {
    const updateImageSrc = () => {
      window.innerWidth <= 768 ? setImageSrc(mobile) : setImageSrc(desktop);
    };

    window.addEventListener('resize', updateImageSrc);
    updateImageSrc(); // Call the function to set the initial image source

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', updateImageSrc);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

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
        <form className={form.signUp}>
          <label className={form.label} htmlFor="email">
            Email Address
          </label>
          <br />
          <input
            className={form.email}
            type="text"
            name="email"
            placeholder="email@company"
          />
          <button type="submit" className={form.submit} onClick={onSubmit}>
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
