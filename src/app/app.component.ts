import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myStudents:any[]=[];
  myWeather:any[]=[];
  location:string="";
  constructor(private service: DataService) {
  }

  ngOnInit(): void {
    this.service.GetStudentData().subscribe(
      (data)=>{
        this.myStudents = data.students;
      }
    );

    this.service.GetWeatherData().subscribe(
      (data)=>{
        this.myWeather = data.weather; 
        this.location = data.name;
      }
    );
  }

}
