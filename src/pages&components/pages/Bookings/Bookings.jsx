import { useQuery } from "@tanstack/react-query";
import React from "react";
import useUser from "../../../hooks/useUsers";
import Loading from "../../Loading/Loading";

const Bookings = () => {
  const [user] = useUser();
  console.log(user?.email);
  const { data: bookings } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/booking/user?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });

  console.log(bookings);
  return <div></div>;
};

export default Bookings;
