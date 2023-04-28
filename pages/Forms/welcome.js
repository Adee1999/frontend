import React from "react";

function Welcome({ formData }) {
  return (
    <>
      <h4 className="text-center mt-2">Registration was successful for...</h4>
      <div className="card mt-4">
        
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Username:
              <span className="h6 text-success">{formData.firstName}</span>
            </li>
            <li className="list-group-item">
              Email: <span className="h6 text-success">{formData.lastName}</span>
            </li>
            <li className="list-group-item">
              Username:
              <span className="h6 text-success">{formData.userName}</span>
            </li>
            <li className="list-group-item">
              Email: <span className="h6 text-success">{formData.street}</span>
            </li>
            <li className="list-group-item">
              Email: <span className="h6 text-success">{formData.city}</span>
            </li>
            <li className="list-group-item">
              Email: <span className="h6 text-success">{formData.password}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Welcome;