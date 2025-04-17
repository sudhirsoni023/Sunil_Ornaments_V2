package com.ornaments.sunil.services.implementations;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ornaments.sunil.entities.Bill;
import com.ornaments.sunil.repositories.BillRepository;
import com.ornaments.sunil.services.interfaces.BillService;

@Service
public class BillServiceImpl implements BillService {

    @Autowired
    BillRepository billRepository;

    public Bill findByinvoice_no(String invoice) {
        return this.billRepository.findByinvoice_no(invoice);
    }

    public List<Bill> findByNameContaining(String query) {
        return this.billRepository.findByNameContaining(query);
    }

    public List<Bill> findAll() {
        return this.billRepository.findAll();
    }

    public void delete(Bill b) {
        this.billRepository.delete(b);
    }

    public void deleteAll() {
        this.billRepository.deleteAll();
    }

    public void save(Bill b) {
        this.billRepository.save(b);
    }

}
