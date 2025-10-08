package com.ornaments.sunil.mappings;

import org.springframework.stereotype.Component;

import com.ornaments.sunil.dto.BillDto;
import com.ornaments.sunil.entities.Bill;

@Component
public class Mapper {

    public BillDto BillEntityToDtoMapping(Bill bill) {
        return new BillDto(bill.getSl_no(), bill.getName(), bill.getGstin_no(), bill.getParticulars(), bill.getWeight(),
                bill.getRate(), bill.getAmount(), bill.getInvoice_no(), bill.getDate(), bill.getAadhar_no(),
                bill.getPan_no(), bill.getNet_total(), bill.getCgst(), bill.getSgst(),
                bill.getTotal_invoice_value_inwords());
    }

    public Bill BillDtoToEntityMapping(BillDto bill) {
        return new Bill(bill.getSlNo(), bill.getName(), bill.getGstinNo(), bill.getParticulars(), bill.getWeight(),
                bill.getRate(), bill.getAmount(), bill.getInvoiceNo(), bill.getDate(), bill.getAadharNo(),
                bill.getPanNo(), bill.getNetTotal(), bill.getCgst(), bill.getSgst(),
                bill.getTotalInvoiceValueInWords());
    }
}