import axios from "axios";
let BASE_URL = "http://localhost:8083/api/bills";

export const getAllBills = () => {
  return axios.get(BASE_URL);
};
export const getBillByInvoiceNo = (invoice_no) => {
  return axios.get(`${BASE_URL}/${invoice_no}`);
};
export const getBillByName = (name) => {
  return axios.get(`${BASE_URL}/byName/${name}`);
};
export const createBill = (newBill) => {
  return axios.post(BASE_URL, newBill);
};
export const updateBill = (invoice_no, updatedBill) => {
  return axios.put(`${BASE_URL}/${invoice_no}`, updatedBill);
};
export const deleteBillByInvoiceNo = (invoice_no) => {
  return axios.delete(`${BASE_URL}/${invoice_no}`);
};
export const deleteAllBills = () => {
  return axios.delete(BASE_URL);
};
