import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const EmpCreate = () => {
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [active, activeChange] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const empData = { name, email, phone, active };

    fetch("http://localhost:8000/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empData),
    })
      .then((res) => {
        alert("Saved SuccessFully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="card">
          <h1>React JS CREATE Employee</h1>

          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label style={{ textAlign: "left", display: "flex" }}>
                    ID
                  </label>
                  <input
                    value={id}
                    disabled="disabled"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label style={{ textAlign: "left", display: "flex" }}>
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => nameChange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label style={{ textAlign: "left", display: "flex" }}>
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => emailChange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label style={{ textAlign: "left", display: "flex" }}>
                    Phone
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => phoneChange(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12" style={{ textAlign: "left" }}>
                <div className="form-group">
                  <input
                    checked={active}
                    onChange={(e) => activeChange(e.target.checked)}
                    type="checkbox"
                    className="form-check-input"
                  ></input>
                  <label className="form-check-label">Is Active</label>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group" style={{ textAlign: "left" }}>
                  <button className="btn btn-success" type="submit">
                    Save
                  </button>
                  <Link to="/" className="btn btn-danger">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmpCreate;
