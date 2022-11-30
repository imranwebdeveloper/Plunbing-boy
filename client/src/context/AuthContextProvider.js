import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase.config";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const loginHandler = () => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const token = localStorage.getItem("plumboy-token");
    if (token) {
      setLoading(true);
      fetch("https://plumboy.vercel.app/user", {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            setUser(data.user);
          } else {
            setUser(null);
          }
          setLoading(false);
        });
    }
  }, []);
  const authValue = { user, loading, setUser, loginHandler };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
