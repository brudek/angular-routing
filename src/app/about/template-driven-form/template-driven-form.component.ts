import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild('contactForm')
  contactForm: NgForm;

  messageTempl = new TemplateMessage();
  courses = ['Angular', 'JavaFx', 'Java8', 'OrmLite'];


  constructor() { }

  ngOnInit() {
  }

  onSubmit(contactF) {
    console.log(contactF);
    console.log(this.messageTempl);
    this.reset();
  }

  reset() {
    this.messageTempl = new TemplateMessage();
    this.contactForm.resetForm(this.messageTempl);
  }

}

class TemplateMessage {

  constructor(
    public topic?: string,
    public message?: string,
    public name?: string,
    public email?: string,
    public course = 'Angular',
    public bot = true
  ) { }
}
