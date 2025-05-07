import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllBills } from "../services/ApiService";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const ViewBill = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await getAllBills();
        setBills(response.data);
      } catch (error) {
        console.error("Error fetching bills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []);
  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (!Array.isArray(bills) || bills.length === 0) {
    return (
      <h2 className="text-center bg-danger text-white">
        No Bills Present here, Please start adding bills !!
      </h2>
    );
  }

  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />

      <div className="d-flex flex-grow-1">
        <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
          <SideBar />
        </div>

        <div className="flex-grow-1 p-1 overflow-auto">
          <div
            className="card ml-2 contact-card"
            style={{ backgroundColor: "pink", border: "hidden" }}
          >
            <div className="card-body">
              <h1 className="text-center">Your Bills</h1>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter Name here to search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
              <br />
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col">Invoice No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Particulars</th>
                    <th scope="col">Net Total</th>
                    <th scope="col">
                      Action &nbsp;&nbsp;&nbsp;
                      <button className="btn btn-danger btn-sm">
                        <Link
                          to="/confirmDelete"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Delete All
                        </Link>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bills.map((b) => (
                    <tr key={b.invoice_no}>
                      <th scope="row">{b.invoiceNo}</th>
                      <td>{b.name}</td>
                      <td>{b.date}</td>
                      <td>{b.particulars}</td>
                      <td>{b.netTotal}</td>
                      <td>
                        <div>
                          <Link
                            to="/view-bill-details"
                            state={{ invoiceNo: b.invoiceNo }}
                            className="btn btn-warning btn-sm"
                          >
                            View
                          </Link>
                          <Link
                            to={`/update_bill/${b.invoice_no}`}
                            className="btn btn-primary btn-sm mx-1"
                          >
                            Update
                          </Link>
                          <Link
                            to={`/delete_bill/${b.invoice_no}`}
                            className="btn btn-danger btn-sm"
                          >
                            Delete
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBill;
