import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";

const Sellers = () => {
  const { removeUser } = useContext(AuthContext);
  //   const [user] = useUser();

  const { data: sellers, refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: () =>
      fetch(`http://localhost:5000/users?role=seller`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          console.log(data);
          removeUser()
            .then((r) => {
              console.log(r);
            })
            .catch((err) => console.log(err));
          refetch();
          toast.error("user deleted", {
            position: "top-center",
          });
        }
      });
  };
  return (
    <div className="lg:p-8">
      <div className="container p-2 mx-auto sm:p-4 dark:dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          All sellers
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="dark:dark:bg-gray-700 text-center">
              <tr className="text-left">
                <th className="p-3">User Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Verify</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {sellers?.data &&
                sellers?.data.map((user) => (
                  <tr
                    key={user?._id}
                    className="border-b border-opacity-20 dark:dark:border-gray-700 dark:dark:bg-gray-900"
                  >
                    <td className="p-3">
                      <p>{user?.userName}</p>
                    </td>
                    <td className="p-3">
                      <p>{user?.email}</p>
                    </td>
                    <td className="p-3">
                      <p className="dark:dark:text-gray-400">{user?.role}</p>
                    </td>

                    <td className="cursor-pointer">
                      <button className="btn btn-xs bg-green-600 border-none text-white ">
                        Verify
                      </button>
                    </td>
                    <td className="cursor-pointer">
                      <button
                        onClick={() => handleDeleteUser(user?._id)}
                        className="btn btn-xs bg-red-600 border-none text-white "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
