import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  standalone:true,
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
  imports: [CommonModule,FormsModule]
})
export class HerosComponent implements OnInit {
  // hero = 'Jinesh Shah';
    hero:Hero ={
  id:1,
  name:"Jinesh Shah"



  }
  heroes=HEROES;
  constructor() { }

  ngOnInit() {
  }

}