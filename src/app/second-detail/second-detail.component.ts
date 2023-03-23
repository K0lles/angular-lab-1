import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-second-detail',
  templateUrl: './second-detail.component.html',
  styleUrls: ['./second-detail.component.scss']
})
export class SecondDetailComponent implements OnInit{
  id: any;
  users: any[];

  user: any;

  constructor(private route: ActivatedRoute,
              private staticRoute: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    let arrayFromLocalStorage: any = localStorage.getItem('users');
    this.users = JSON.parse(arrayFromLocalStorage);
    for (let el of this.users) {
      if (el.id === parseInt(this.id)) this.user = el;
    }

    if (this.user === undefined) {
      this.staticRoute.navigate(['/second'])
    }
  }

}
