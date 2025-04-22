package com.ornaments.sunil.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ornaments.sunil.entities.*;

public interface BillRepository extends JpaRepository<Bill, Integer> {
	@Query("select b from Bill b where b.invoice_no =:i")
	public Bill findByinvoice_no(@Param("i") long invoice);

	public List<Bill> findByNameContaining(String query);

}
