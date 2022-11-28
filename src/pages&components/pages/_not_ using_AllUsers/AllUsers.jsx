import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`http://localhost:5000/users`).then((res) => res.json()),
  });

  console.log(users?.data);
  return (
    <div className="lg:p-8">
      <div className="container p-2 mx-auto sm:p-4 dark:dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">All Users</h2>
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
              {users?.data &&
                users?.data.map((user) => (
                  <tr
                    key={user._id}
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

                    <td className="">
                      <span className="px-3 py-1 font-semibold rounded-md bg-green-600 text-white dark:dark:bg-violet-400 dark:dark:text-gray-900">
                        <span>Verify</span>
                      </span>
                    </td>
                    <td className="">
                      <span className="px-3 py-1 font-semibold rounded-md bg-red-600 text-white dark:dark:bg-violet-400 dark:dark:text-gray-900">
                        <span>Delete</span>
                      </span>
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

export default AllUsers;
