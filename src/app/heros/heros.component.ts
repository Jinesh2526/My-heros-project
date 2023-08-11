import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import{Hero} from '../hero';
@Component({
  standalone:true,
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
  imports:[CommonModule]
})
export class HerosComponent implements OnInit {
  // hero = 'Jinesh Shah';
  hero:Hero ={
id:1,
name:"Jinesh Shah"


  }
  constructor() { }

  ngOnInit() {
  }

}