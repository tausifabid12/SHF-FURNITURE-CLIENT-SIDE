import React from "react";
import { toast } from "react-toastify";

const ReportModal = ({ id, productName }) => {
  const handleReport = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const message = form.message.value;
    const reportInfo = { email, productName, message, productId: id };
    console.log(reportInfo);

    fetch(`http://localhost:5000/report`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          toast.success("Reported Successful", {
            position: "top-center",
            autoClose: 2000,
          });
        } else {
          toast.error("report Unsuccessful", {
            position: "top-center",
            autoClose: 2000,
          });
        }
        e.target.reset();
      });
  };
  return (
    <div>
      <input type="checkbox" id="reportModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="reportModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleReport}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Message"
                name="message"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Report</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
