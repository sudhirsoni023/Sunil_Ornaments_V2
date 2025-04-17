package com.ornaments.sunil.services.interfaces;

import java.util.List;

import com.ornaments.sunil.entities.Bill;

public interface BillService {
    public Bill findByinvoice_no(String invoice);

    public List<Bill> findByNameContaining(String query);

    public List<Bill> findAll();

    public void delete(Bill b);

    public void deleteAll();

    public void save(Bill b);

}
