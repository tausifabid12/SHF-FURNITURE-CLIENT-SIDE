import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useUser = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data.data);
      });
  }, [user?.email]);

  return currentUser;
};

export default useUser;
