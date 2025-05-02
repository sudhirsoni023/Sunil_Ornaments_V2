package com.ornaments.sunil.dto;

import javax.validation.constraints.NotBlank;

public class BillDto {

    private int slNo;
    @NotBlank(message = "Name is required")
    private String name;
    private String gstinNo;
    @NotBlank(message = "Particulars is required")
    private String particulars;
    @NotBlank(message = "Weight is required")
    private String weight;
    @NotBlank(message = "Rate is required")
    private String rate;
    private String amount;
    private int invoiceNo;
    @NotBlank(message = "date is required")
    private String date;
    private String aadharNo;
    private String panNo;
    private String netTotal;
    private String cgst;
    private String sgst;
    private String totalInvoiceValueInWords;

    public BillDto(int slNo, String name, String gstinNo, String particulars, String weight, String rate, String amount,
            int invoiceNo, String date, String aadharNo, String panNo, String netTotal, String cgst, String sgst,
            String totalInvoiceValueInWords) {
        this.slNo = slNo;
        this.name = name;
        this.gstinNo = gstinNo;
        this.particulars = particulars;
        this.weight = weight;
        this.rate = rate;
        this.amount = amount;
        this.invoiceNo = invoiceNo;
        this.date = date;
        this.aadharNo = aadharNo;
        this.panNo = panNo;
        this.netTotal = netTotal;
        this.cgst = cgst;
        this.sgst = sgst;
        this.totalInvoiceValueInWords = totalInvoiceValueInWords;
    }

    public BillDto() {
    }

    public int getSlNo() {
        return slNo;
    }

    public void setSlNo(int slNo) {
        this.slNo = slNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGstinNo() {
        return gstinNo;
    }

    public void setGstinNo(String gstinNo) {
        this.gstinNo = gstinNo;
    }

    public String getParticulars() {
        return particulars;
    }

    public void setParticulars(String particulars) {
        this.particulars = particulars;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getRate() {
        return rate;
    }

    public void setRate(String rate) {
        this.rate = rate;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public int getInvoiceNo() {
        return invoiceNo;
    }

    public void setInvoiceNo(int invoiceNo) {
        this.invoiceNo = invoiceNo;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getAadharNo() {
        return aadharNo;
    }

    public void setAadharNo(String aadharNo) {
        this.aadharNo = aadharNo;
    }

    public String getPanNo() {
        return panNo;
    }

    public void setPanNo(String panNo) {
        this.panNo = panNo;
    }

    public String getNetTotal() {
        return netTotal;
    }

    public void setNetTotal(String netTotal) {
        this.netTotal = netTotal;
    }

    public String getCgst() {
        return cgst;
    }

    public void setCgst(String cgst) {
        this.cgst = cgst;
    }

    public String getSgst() {
        return sgst;
    }

    public void setSgst(String sgst) {
        this.sgst = sgst;
    }

    public String getTotalInvoiceValueInWords() {
        return totalInvoiceValueInWords;
    }

    public void setTotalInvoiceValueInWords(String totalInvoiceValueInWords) {
        this.totalInvoiceValueInWords = totalInvoiceValueInWords;
    }
}