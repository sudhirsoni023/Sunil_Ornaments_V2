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

    public BillDto findByinvoice_no(String invoice) {
        Bill bill = this.billRepository.findByinvoice_no(invoice);
        return mapper.BillEntityToDtoMapping(bill);
    }

    public List<BillDto> findByNameContaining(String query) {
        List<Bill> bill = this.billRepository.findByNameContaining(query);
        return bill.stream().map(b -> mapper.BillEntityToDtoMapping(b)).collect(Collectors.toList());
    }

    public List<BillDto> findAll() {
        List<Bill> bill = this.billRepository.findAll();
        return bill.stream().map(b -> mapper.BillEntityToDtoMapping(b)).collect(Collectors.toList());
    }

    public boolean delete(int slNo) {
        Optional<Bill> optionalBill = billRepository.findById(slNo);
        if (optionalBill.isPresent()) {
            billRepository.deleteById(slNo);
            return true;
        }
        return false;
    }

    public boolean deleteAll() {
        this.billRepository.deleteAll();
        return true;
    }

    public BillDto save(BillDto billDTO) {
        Bill bill = mapper.BillDtoToEntityMapping(billDTO);
        Bill savedBill = billRepository.save(bill);
        return mapper.BillEntityToDtoMapping(savedBill);
    }

}
