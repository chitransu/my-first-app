import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service'

@Component({
  selector: 'app-manu',
  templateUrl: './manu.component.html',
  styleUrls: ['./manu.component.css']
})
export class ManuComponent implements OnInit {

  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

}
