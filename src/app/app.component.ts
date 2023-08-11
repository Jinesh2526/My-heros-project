import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HerosComponent } from './heros/heros.component';
import { HEROES } from './mock-heroes';

@Component({
  standalone:true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[HerosComponent,CommonModule,HeroDetailComponent]
})
export class AppComponent implements OnInit {
//  username:string="hii"
//  phone:string="556688442"
//  age:number=21
//  photo:string="https://static.theprint.in/wp-content/uploads/2022/07/rs7-1024x477.jpg?compress=true"
title = 'Tour of Heroes';
// heros=HEROES;
  constructor() { }

  ngOnInit() {
  }

}