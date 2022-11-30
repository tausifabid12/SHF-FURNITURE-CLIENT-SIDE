import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useUser = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState([]);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://furniture-server-nine.vercel.app/usersInfo?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCurrentUser(data.data);
          setUserLoading(false);
        });
    }
  }, [user?.email]);

  return [currentUser, userLoading];
};

export default useUser;
