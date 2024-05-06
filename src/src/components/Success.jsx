import style from '../styles/Success.module.css';
import IconSuccess from '../assets/images/icon-success.svg';

export default function Success() {
  return (
    <div className={style.card} id="success">
      <div className={style.header}>
        <img src={IconSuccess} width={64} height={64} />
      </div>
      <div className={style.content}>
        <div className={style.body}>
          <h1 className={style.heading}>Thanks for subscribing!</h1>
          <p className={style.text}>
            A confirmation email has been sent to{' '}
            <strong className={style.email}>ash@loremcompany.com</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <button className={style.button}>Dismiss message</button>
      </div>
    </div>
  );
}
