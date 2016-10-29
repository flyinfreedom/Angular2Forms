import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../shared/AppSettings';
import { BinaryPipe } from './../binary.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;
  today = new Date();
  toggle: boolean = true;

  ConvertToBinary: number;

  constructor() {
    this.message = "Config value is " + AppSettings.GetConfigValue;
    this.ConvertToBinary = 0;
  }

  ConvertBinary(value:number)
  {
    this.ConvertToBinary = value;
  }

  get format() { return this.toggle ? 'yyyy/MM/dd' : 'fullDate' }

  toggleFormat() { this.toggle = !this.toggle }

  ngOnInit() {
  }

}
