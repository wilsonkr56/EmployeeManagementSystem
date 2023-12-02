import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EmpDetail = () => {
  const { empid } = useParams();

  const [empData, setEmpData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div className="card">
        <h1>React JS Employee Detail</h1>
        <br></br>
        <div className="card-body" style={{ textAlign: "left" }}>
          {empData && (
            <div>
              <h1>
                The Employee Name is: {empData.name} ({empData.id})
              </h1>
              <h2>Contact Detail: {empData.phone} </h2>
              <h2>Email ID: {empData.email} </h2>
              <Link to="/" className="btn btn-danger">
                Back
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;
