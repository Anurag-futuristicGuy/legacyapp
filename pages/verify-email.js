import { useEffect } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from '../lib/firebaseConfig';

const EmailVerification = () => {
  useEffect(() => {
    const sendVerification = async () => {
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        alert('Verification email sent!');
      }
    };

    sendVerification();
  }, []);

  return (
    <div>
      <h1>Email Verification</h1>
      <p>A verification link has been sent to your email. Please check your inbox.</p>
    </div>
  );
};

export default EmailVerification;
