package com.ornaments.sunil.services.implementations;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ornaments.sunil.dto.BillDto;
import com.ornaments.sunil.entities.Bill;
import com.ornaments.sunil.mappings.Mapper;
import com.ornaments.sunil.repositories.BillRepository;
import com.ornaments.sunil.services.interfaces.BillService;

import jakarta.transaction.Transactional;

@Service
public class BillServiceImpl implements BillService {

    BillRepository billRepository;
    Mapper mapper = new Mapper();

    // Constructor Injection
    public BillServiceImpl(BillRepository billRepository) {
        this.billRepository = billRepository;
    }

    public BillDto getBillByInvoiceNo(int invoice_no) {
        Bill bill = this.billRepository.getBillByInvoiceNo(invoice_no);
        if (bill != null)
            return mapper.BillEntityToDtoMapping(bill);
        else
            return null;
    }

    public List<BillDto> getBillByName(String name) {
        List<Bill> bill = this.billRepository.getBillByNameContaining(name);
        if (bill != null)
            return bill.stream().map(b -> mapper.BillEntityToDtoMapping(b)).collect(Collectors.toList());
        else
            return null;
    }

    public List<BillDto> getAllBills() {
        List<Bill> bill = this.billRepository.findAll();
        if (!bill.isEmpty())
            return bill.stream().map(b -> mapper.BillEntityToDtoMapping(b)).collect(Collectors.toList());
        else
            return Collections.emptyList();
    }

    @Transactional
    public void deleteBillByInvoiceNo(int invoice_no) {
        this.billRepository.deleteBillByInvoiceNo(invoice_no);
    }

    public void deleteAllBills() {
        this.billRepository.deleteAll();
    }

    public BillDto createBill(BillDto billDTO) {
        Bill bill = mapper.BillDtoToEntityMapping(billDTO);
        Bill savedBill = billRepository.save(bill);
        if (bill != null)
            return mapper.BillEntityToDtoMapping(savedBill);
        else
            return null;
    }

    // Update bill
    public BillDto updateBill(int invoice_no, BillDto billDTO) {
        Bill bill = billRepository.getBillByInvoiceNo(invoice_no);
        // Update values
        bill.setName(billDTO.getName());
        bill.setGstin_no(billDTO.getGstinNo());
        bill.setParticulars(billDTO.getParticulars());
        bill.setWeight(billDTO.getWeight());
        bill.setRate(billDTO.getRate());
        bill.setAmount(billDTO.getAmount());
        bill.setDate(billDTO.getDate());
        bill.setAadhar_no(billDTO.getAadharNo());
        bill.setPan_no(billDTO.getPanNo());
        bill.setNet_total(billDTO.getNetTotal());
        bill.setCgst(billDTO.getCgst());
        bill.setSgst(billDTO.getSgst());
        bill.setTotal_invoice_value_inwords(billDTO.getTotalInvoiceValueInWords());

        Bill updatedBill = billRepository.save(bill);
        if (updatedBill != null)
            return mapper.BillEntityToDtoMapping(updatedBill);
        else
            return null;
    }
}
