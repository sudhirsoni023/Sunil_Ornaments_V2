package com.ornaments.sunil.services.interfaces;

import java.util.List;

import com.ornaments.sunil.dto.BillDto;

public interface BillService {
    public BillDto findByinvoice_no(String invoice);

    public List<BillDto> findByNameContaining(String query);

    public List<BillDto> findAll();

    public boolean delete(int slNo);

    public boolean deleteAll();

    public BillDto save(BillDto billDto);

}
