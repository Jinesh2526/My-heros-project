import { Component, OnInit } from '@angular/core';
import { HerosComponent } from './heros/heros.component';

@Component({
  standalone:true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[HerosComponent]
})
export class AppComponent implements OnInit {
//  username:string="hii"
//  phone:string="556688442"
//  age:number=21
//  photo:string="https://static.theprint.in/wp-content/uploads/2022/07/rs7-1024x477.jpg?compress=true"
title = 'Tour of Heroes';
  constructor() { }

  ngOnInit() {
  }

}