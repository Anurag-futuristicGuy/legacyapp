import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebaseConfig";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push("/signin"); // Redirect to sign-in page if not authenticated
      } else {
        setLoading(false); // Proceed with the page if authenticated
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
