import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "Some welcome message";
  name = '';

  //ActivatedRoute
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.message)
   // console.log(this.route.snapshot.params['name'])
   this.name = this.route.snapshot.params['name'];
  }

}
