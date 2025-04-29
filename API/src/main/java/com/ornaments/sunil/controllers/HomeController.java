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
	@GetMapping("/{invoice_no}")
	public ResponseEntity<BillDto> getBillByInvoiceNo(@PathVariable int invoice_no) {
		BillDto bill = billService.getBillByInvoiceNo(invoice_no);
		if (bill != null) {
			return ResponseEntity.ok(bill);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// Get bills by Name
	@GetMapping("/byName/{name}")
	public ResponseEntity<List<BillDto>> getBillByName(@PathVariable String name) {
		List<BillDto> bill = billService.getBillByName(name);
		if (!bill.isEmpty())
			return ResponseEntity.ok(bill);
		else
			return ResponseEntity.notFound().build();
	}

	// Create a new bill
	@PostMapping
	public ResponseEntity<BillDto> createBill(@RequestBody BillDto billDto) {
		BillDto createdBill = billService.createBill(billDto);
		if (createdBill != null)
			return ResponseEntity.ok(createdBill);
		else
			return ResponseEntity.internalServerError().build();
	}

	// Update a bill
	@PutMapping("/{invoice_no}")
	public ResponseEntity<BillDto> updateBill(@PathVariable int invoice_no, @RequestBody BillDto billDto) {
		BillDto updatedBill = billService.updateBill(invoice_no, billDto);
		if (updatedBill != null) {
			return ResponseEntity.ok(updatedBill);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	// Delete a bill
	@DeleteMapping("/{invoice_no}")
	public ResponseEntity<Void> deleteBillByInvoiceNo(@PathVariable int invoice_no) {
		this.billService.deleteBillByInvoiceNo(invoice_no);
		return ResponseEntity.noContent().build();

	}

	// Delete all bills
	@DeleteMapping
	public ResponseEntity<Void> deleteAllBills() {
		this.billService.deleteAllBills();
		return ResponseEntity.noContent().build();
	}
}
