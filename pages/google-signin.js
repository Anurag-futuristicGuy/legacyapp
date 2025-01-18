import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../lib/firebaseConfig';

const GoogleSignIn = () => {
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      alert('Google Sign-In successful!');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign In with Google</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default GoogleSignIn;
