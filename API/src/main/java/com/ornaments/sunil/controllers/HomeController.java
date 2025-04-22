package com.ornaments.sunil.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ornaments.sunil.services.interfaces.*;
import com.ornaments.sunil.dto.*;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/bills")
public class HomeController {

	BillService billService;

	// Constructor Injection
	public HomeController(BillService billService) {
		this.billService = billService;
	}

	// Get all bills
	@GetMapping
	public ResponseEntity<List<BillDto>> getAllBills() {
		List<BillDto> bills = billService.getAllBills();
		return ResponseEntity.ok(bills);
	}

	// Get a bill by Invoice Id
	@GetMapping("/{id}")
	public ResponseEntity<BillDto> getBillById(@PathVariable long id) {
		BillDto bill = billService.findByinvoice_no(id);
		if (bill != null) {
			return ResponseEntity.ok(bill);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// Create a new bill
	@PostMapping
	public ResponseEntity<BillDto> createBill(@RequestBody BillDto billDto) {
		BillDto createdBill = billService.createBill(billDto);
		return ResponseEntity.ok(createdBill);
	}

	// Update a bill
	@PutMapping("/{id}")
	public ResponseEntity<BillDto> updateBill(@PathVariable int id, @RequestBody BillDto billDto) {
		BillDto updatedBill = billService.updateBill(id, billDto);
		if (updatedBill != null) {
			return ResponseEntity.ok(updatedBill);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// Delete a bill
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteBill(@PathVariable int id) {
		boolean deleted = billService.deleteBill(id);
		if (deleted) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// Delete all bills
	@DeleteMapping
	public ResponseEntity<Void> deleteAllBills() {
		boolean deleted = this.billService.deleteAllBills();
		if (deleted) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
