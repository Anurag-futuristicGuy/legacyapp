import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebaseConfig';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Logout;
