import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const EmpEdit = () => {
  const { empid } = useParams();

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idChange(resp.id);
        nameChange(resp.name);
        emailChange(resp.email);
        phoneChange(resp.phone);
        activeChange(resp.active);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [active, activeChange] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const empData = { id, name, email, phone, active };

    fetch("http://localhost:8000/employee/" + empid, {
      method: "PUT",
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
          <div className="card-body">
            <h1>React JS EDIT Employee</h1>
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

export default EmpEdit;
