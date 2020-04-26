import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task, Category, Priority} from './models';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'app';

  public tasks: Task[];
  public categories: Category[];
  public priorities: Priority[];

  constructor(public dataHandler: DataService) {
  }

  ngOnInit(): void {
    this.dataHandler.getCategories().subscribe(temp => this.categories = temp);
    this.dataHandler.getTasks().subscribe(temp => this.tasks = temp);
    this.dataHandler.getPriorities().subscribe(temp => this.priorities = temp);
  }



}
