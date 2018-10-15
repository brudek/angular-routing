import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';

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
      bot: new FormControl(true),
      questions: new FormArray([new FormControl(null)], this.questionsValidator)
    });

    this.contactForm.valueChanges.subscribe( value => {
      console.log(value);
    });
  }

  addQuestion() {
    const arr = <FormArray>this.contactForm.get('questions');
    arr.push(new FormControl(null));
  }

  questionsValidator(control: AbstractControl): ValidationErrors {
    const arr = <[string]>control.value;
    if (arr.includes('angularjs')) {
      return { forbiddenCourse: true };
    }
  }

  onSubmit(form) {
    console.log(this.contactForm);
    this.message.topic = this.contactForm.get('topic').value; // inny sposób pobierania wartości
    this.message.name = this.contactForm.value.name;
    this.message.message = this.contactForm.value.message;
    this.message.email = this.contactForm.value.email;
    this.message.course = this.contactForm.value.course;
    this.message.bot = this.contactForm.value.bot;
    console.log(this.message);
    this.onReset();
  }

  onReset() {
    this.contactForm.reset({
      course: 'JavaFx',
      bot: true
    });
  }
}

class ReactiveMessage {
  constructor(
    public topic?: string,
    public message?: string,
    public name?: string,
    public email?: string,
    public course = 'Angular',
    public bot = true,
    public questions?: Array<string>
  ) { }
}
