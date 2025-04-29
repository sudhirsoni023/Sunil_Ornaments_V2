package com.ornaments.sunil.services.interfaces;

import java.util.List;

import com.ornaments.sunil.dto.BillDto;

public interface BillService {
    public BillDto getBillByInvoiceNo(int invoice);

    public List<BillDto> getBillByName(String name);

    public List<BillDto> getAllBills();

    public void deleteBillByInvoiceNo(int invoice_no);

    public void deleteAllBills();

    public BillDto createBill(BillDto billDto);

    public BillDto updateBill(int invoice_no, BillDto billDto);

}
