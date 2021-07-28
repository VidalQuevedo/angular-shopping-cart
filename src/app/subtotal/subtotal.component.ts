import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.scss']
})
export class SubtotalComponent implements OnInit {

  count$: Observable<number> | undefined;
  subTotal$: Observable<number> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
