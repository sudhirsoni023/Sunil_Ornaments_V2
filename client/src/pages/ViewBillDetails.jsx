import { useLocation } from "react-router-dom";
import "../assets/css/bill_style.css";
import { useState, useEffect } from "react";
import { getBillByInvoiceNo } from "../services/ApiService";
const ViewBillDetails = () => {
  const location = useLocation();
  const { invoiceNo } = location.state || {};
  const [bill, setBill] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBill = async () => {
      try {
        const response = await getBillByInvoiceNo(invoiceNo); // API call
        setBill(response.data);
      } catch (error) {
        console.error("Error fetching bill:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBill();
  }, [invoiceNo]);
  console.log(JSON.stringify(bill));
  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div id="mydiv">
      <table className="my-table">
        <tr>
          <td>
            <span className="GSTIN">GSTIN : 23CESPS0515N1Z2</span>
            <span className="jaimaa">| | जय माँ | |</span>
            <span className="mob1">Mob.: 9827617412</span>
            <br />
            <br />
            <span className="mpcode">M.P. Code : 23</span>
            <span className="GST">
              <u className="u_gst">GST Invoice</u>
            </span>
            <span className="mob2">Mob.: 8319182661</span>
            <br />
            <br />
            <h1 className="text-center">SUNIL ORNAMENTS</h1>
          </td>
        </tr>
        <tr>
          <td className="phool text-center">
            Phool Chandra Chowk, SATNA - 485001 (M.P.)
          </td>
        </tr>
        <tr>
          <td>
            <div className="col-lg-6 mb-1">
              <div className="card" style={{ width: "31.5pc" }}>
                <ul className="list-group">
                  <li className="list-group-item">
                    M/S. &nbsp;
                    <u>
                      <span>{bill.name}</span>
                    </u>
                  </li>
                  <li className="list-group-item"></li>
                  <li className="list-group-item">
                    ...........................................................................................
                  </li>
                  <li className="list-group-item"></li>
                  <li className="list-group-item">
                    GSTIN No. &nbsp;
                    <u>
                      <span>{bill.gstin_no}</span>
                    </u>
                    <span>
                      .....................................................................
                    </span>
                  </li>
                  <li className="list-group-item"></li>
                  <li className="list-group-item"></li>
                  <li className="list-group-item"></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mb-1">
              <div className="card" style={{ width: "31.5pc" }}>
                <ul className="list-group">
                  <li className="list-group-item">
                    Invoice No. &nbsp;
                    <u>
                      <span>{bill.invoiceNo}</span>
                    </u>
                  </li>
                  <li className="list-group-item">
                    Date &nbsp;&nbsp;
                    <u>
                      <span>{bill.date}</span>
                    </u>
                  </li>
                  <li className="list-group-item">State Code. &nbsp; 23</li>
                  <li className="list-group-item">
                    Aadhar No. &nbsp;
                    <u>
                      <span>{bill.aadhar_no}</span>
                    </u>
                    <span>
                      .....................................................................
                    </span>
                  </li>
                  <li className="list-group-item">
                    Pan No. &nbsp;{" "}
                    <u>
                      <span>{bill.pan_no}</span>
                    </u>
                    <span>
                      ...........................................................................
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <table className="table table-bordered" style={{ textAlign: "center" }}>
        <tr className="tr_bordered">
          <td>&nbsp;Particulars</td>
          <td>HSN/SAC CODE</td>
          <td>WEIGHT</td>
          <td>RATE</td>
          <td>AMOUNT</td>
        </tr>
        <tr className="tr_bordered">
          <td>{bill.particulars}</td>
          <td>7113</td>
          <td>{bill.weight} gm</td>
          <td>{bill.rate} /-</td>
          <td>{bill.amount}</td>
        </tr>
      </table>
      <div className="row">
        <div className="col-lg-6">
          <div className="card" style={{ width: "32pc" }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item line">
                Total Invoice In Words:-{" "}
                <u>
                  <span>{bill.total_invoice_value_inwords}</span>
                </u>
              </li>
              <li className="list-group-item">
                <hr
                  style={{ border: "2px solid navy", backgroundColor: "pink" }}
                />
              </li>
              <li className="list-group-item">Bank Details:</li>
              <li className="list-group-item">
                Bank Name: State Bank of India
              </li>
              <li className="list-group-item">Branch: Bihari Chowk, Satna</li>
              <li className="list-group-item">Bank A/c. No. 35924235989</li>
              <li className="list-group-item">Bank IFSC Code: SBIN0030178</li>
              <li className="list-group-item">
                <hr
                  style={{ border: "2px solid navy", backgroundColor: "pink" }}
                />
              </li>
              <li className="list-group-item">
                All Subject to SATNA Jurisdiction
              </li>
              <li className="list-group-item">E.& O.E.</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6 mb-4">
          <div className="card" style={{ width: "32pc" }}>
            <table className="mytable2" style={{ height: "22pc" }}>
              <tr style={{ textAlign: "center" }}>
                <td>TOTAL TAXABLE VALUE :</td>
                <td>{bill.amount}</td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <td>
                  CGST @ &nbsp;
                  <u>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1.5 &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </u>
                  %
                </td>
                <td>{bill.cgst}</td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <td>
                  SGST @ &nbsp;
                  <u>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1.5 &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </u>
                  %
                </td>
                <td>{bill.sgst}</td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <td> IGST @ &nbsp;..................................%</td>
                <td></td>
              </tr>
              <tr style={{ textAlign: "center" }}>
                <td style={{ textAlign: "right" }}>NET TOTAL &nbsp;</td>
                <td>{bill.net_total}</td>
              </tr>
            </table>
            <div className="tr_bordered" style={{ backgroundColor: "pink" }}>
              <br />
              <div className="footer"> For: Sunil Ornaments</div>
              <br />
              <br />
              <div className="footer"> Aut. Signature</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBillDetails;
