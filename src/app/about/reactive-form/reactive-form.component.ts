import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  contactForm: FormGroup;
  message = new ReactiveMessage();
  focus = false;

  courses = ['Angular', 'JavaFx', 'Java8', 'OrmLite'];

  ngOnInit() {
    this.contactForm = new FormGroup({
      topic: new FormControl(null, Validators.required),
      message: new FormControl(null, [Validators.minLength(20), Validators.maxLength(1000), Validators.required]),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      course: new FormControl(this.courses[0]),
      bot: new FormControl(true)
    });
  }

  onSubmit(form) {
    console.log(this.contactForm);
    this.message.topic = this.contactForm.get('topic').value;
    this.message.name = this.contactForm.value.name;
    this.message.message = this.contactForm.value.message;
    this.message.email = this.contactForm.value.email;
    this.message.course = this.contactForm.value.course;
    this.message.bot = this.contactForm.value.bot;
    console.log(this.message);
  }

  focusFunction() {
    console.log('active');
    this.focus = true;
  }

  focusOutFunction() {
    console.log('inactive');
    this.focus = false;
  }
}

class ReactiveMessage {
  constructor(
    public topic?: string,
    public message?: string,
    public name?: string,
    public email?: string,
    public course = 'Angular',
    public bot = true
  ) { }
}
