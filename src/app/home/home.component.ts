import { DataBaseService, Course } from './../data-base.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  course: Course;

  constructor(private dbService: DataBaseService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.course = this.dbService.getRandomCourse();
  }

  getCourse() {
    this.router.navigate(['/courses', this.course.id]);
  }

}
