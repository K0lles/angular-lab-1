import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  users: any[];
  id: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    const arrayFromLocalStorage: any = localStorage.getItem('users');
    this.users = JSON.parse(arrayFromLocalStorage);
  }

}
