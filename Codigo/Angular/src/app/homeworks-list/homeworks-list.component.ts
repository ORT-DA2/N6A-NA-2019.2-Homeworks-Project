import { Component, OnInit } from '@angular/core';
import { Homework } from '../models/Homework';
import { Exercise } from '../models/Exercise';
import { HomeworksService } from '../services/homeworks.service';

@Component({
  selector: 'app-homeworks-list',
  templateUrl: './homeworks-list.component.html',
  styleUrls: ['./homeworks-list.component.css']
})
export class HomeworksListComponent implements OnInit {
  pageTitle:string = 'HomeworksList';
  homeworks:Array<Homework>;
  showExercises:boolean = false;
  listFilter:string = "";

  constructor(private _serviceHomeworks:HomeworksService) { 
    
  }

  ngOnInit() {
    this.homeworks = this._serviceHomeworks.getHomeworks();
  }

  toogleExercises() {
    this.showExercises = !this.showExercises;
  }
}