import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers : Customer[]=[
    {id: 1, name: 'John', email: 'john@example.com', phone: '1234567890', address: '123 Main St'},
    {id: 2, name: 'John', email: 'john@example.com', phone: '1234567890', address: '123 Main St'},
    {id: 3, name: 'John', email: 'john@example.com', phone: '1234567890', address: '123 Main St'},
    {id: 4, name: 'John', email: 'john@example.com', phone: '1234567890', address: '123 Main St'},
    {id: 5, name: 'John', email: 'john@example.com', phone: '1234567890', address: '123 Main St'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
