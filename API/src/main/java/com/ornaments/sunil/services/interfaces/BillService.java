package com.ornaments.sunil.services.interfaces;

import java.util.List;

import com.ornaments.sunil.dto.BillDto;

public interface BillService {
    public BillDto findByinvoice_no(int invoice);

    public List<BillDto> findByNameContaining(String query);

    public List<BillDto> getAllBills();

    public void deleteBill(int invoice_no);

    public void deleteAllBills();

    public BillDto createBill(BillDto billDto);

    public BillDto updateBill(int invoice_no, BillDto billDto);

}
