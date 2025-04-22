package com.ornaments.sunil.services.implementations;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ornaments.sunil.dto.BillDto;
import com.ornaments.sunil.entities.Bill;
import com.ornaments.sunil.mappings.Mapper;
import com.ornaments.sunil.repositories.BillRepository;
import com.ornaments.sunil.services.interfaces.BillService;

@Service
public class BillServiceImpl implements BillService {

    BillRepository billRepository;
    Mapper mapper = new Mapper();

    // Constructor Injection
    public BillServiceImpl(BillRepository billRepository) {
        this.billRepository = billRepository;
    }

    public BillDto findByinvoice_no(long invoice) {
        Bill bill = this.billRepository.findByinvoice_no(invoice);
        return mapper.BillEntityToDtoMapping(bill);
    }

    public List<BillDto> findByNameContaining(String query) {
        List<Bill> bill = this.billRepository.findByNameContaining(query);
        return bill.stream().map(b -> mapper.BillEntityToDtoMapping(b)).collect(Collectors.toList());
    }

    public List<BillDto> getAllBills() {
        List<Bill> bill = this.billRepository.findAll();
        return bill.stream().map(b -> mapper.BillEntityToDtoMapping(b)).collect(Collectors.toList());
    }

    public boolean deleteBill(int invoice_no) {
        Optional<Bill> optionalBill = billRepository.findById(invoice_no);
        if (optionalBill.isPresent()) {
            billRepository.deleteById((int) invoice_no);
            return true;
        }
        return false;
    }

    public boolean deleteAllBills() {
        this.billRepository.deleteAll();
        return true;
    }

    public BillDto createBill(BillDto billDTO) {
        Bill bill = mapper.BillDtoToEntityMapping(billDTO);
        Bill savedBill = billRepository.save(bill);
        return mapper.BillEntityToDtoMapping(savedBill);
    }

    // Update bill
    public BillDto updateBill(int invoice_no, BillDto billDTO) {
        Optional<Bill> optionalBill = billRepository.findById(invoice_no);
        if (optionalBill.isPresent()) {
            Bill bill = optionalBill.get();
            // Update values
            bill.setName(billDTO.getName());
            bill.setGstin_no(billDTO.getGstinNo());
            bill.setParticulars(billDTO.getParticulars());
            bill.setWeight(billDTO.getWeight());
            bill.setRate(billDTO.getRate());
            bill.setAmount(billDTO.getAmount());
            bill.setInvoice_no(billDTO.getInvoiceNo());
            bill.setDate(billDTO.getDate());
            bill.setAadhar_no(billDTO.getAadharNo());
            bill.setPan_no(billDTO.getPanNo());
            bill.setNet_total(billDTO.getNetTotal());
            bill.setCgst(billDTO.getCgst());
            bill.setSgst(billDTO.getSgst());
            bill.setTotal_invoice_value_inwords(billDTO.getTotalInvoiceValueInWords());

            Bill updatedBill = billRepository.save(bill);
            return mapper.BillEntityToDtoMapping(updatedBill);
        }
        return null;
    }

}
