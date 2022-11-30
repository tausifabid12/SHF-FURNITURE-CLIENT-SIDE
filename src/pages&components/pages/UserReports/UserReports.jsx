import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

const UserReports = () => {
  const { data: reports, refetch } = useQuery({
    queryKey: ["reports"],
    queryFn: () =>
      fetch(`https://furniture-server-nine.vercel.app/report`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    fetch(`https://furniture-server-nine.vercel.app/delete/report/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          refetch();
          toast.error("Report Deleted");
        }
      });
  };

  return (
    <div className="lg:px-10 ">
      <h2 className="text-3xl font-bold text-gray-900 pb-3">Reports</h2>
      <div>
        <div className="container p-2  mx-auto sm:p-4 dark:dark:text-gray-100">
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="dark:dark:bg-gray-700 text-center">
                <tr className="text-left">
                  <th className="p-3">Product Name</th>
                  <th className="p-3">User Email</th>
                  <th className="p-3 ">Delete</th>
                </tr>
              </thead>
              <tbody>
                {reports?.data &&
                  reports?.data.map((report) => (
                    <tr
                      key={report?._id}
                      className="border-b border-opacity-20  dark:dark:border-gray-700 dark:dark:bg-gray-900"
                    >
                      <td className="p-3">
                        <p>{report?.productName}</p>
                      </td>
                      <td className="p-3">
                        <p className="dark:dark:text-gray-400">
                          {report?.email}
                        </p>
                      </td>

                      <td className="p-3 ">
                        <span
                          onClick={() => handleDelete(report?._id)}
                          className="btn btn-xs btn-error bg-red-500  text-white  "
                        >
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
    </div>
  );
};

export default UserReports;
