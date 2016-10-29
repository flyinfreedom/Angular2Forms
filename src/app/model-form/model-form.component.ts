import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  myForm;
  emailPattern = '^[a-zA-Z0-9.!#$%&』*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';
  preCount:boolean = false;

  constructor(private _fb: FormBuilder) {
    this.myForm = this._fb.array([
      this.buildGroup('Eden', 'flyinfreedom1124@gmail.com', '1987-11-24')
    ]);
  }

  ngOnInit() {

  }

  buildGroup(name?:string, email?:string, birthday?:string): FormGroup {
    return this._fb.group({
      userName: [name, [Validators.required, Validators.minLength(3)]],
      email: [email, [Validators.required, Validators.pattern(this.emailPattern)]],
      phone: '',
      birthday: birthday,
      likenumber: '',
      interest: this._fb.group({
        cbx_movie: '',
        cbx_badminton: '',
        cbx_photography: '',
        cbx_drum: ''
      }),
      sex: ''
    });
  }

  add() {
    this.myForm.push(this.buildGroup());
  }

  showDataJson(){
    this.preCount = true;
  }


}
