import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dash-forms',
  templateUrl: './dash-forms.component.html',
  styleUrls: ['./dash-forms.component.css']
})
export class DashFormsComponent implements OnInit {

  form: FormGroup;
  myPizzas = [];
  pizzaObject = {
    size: 'small',
    toppings: []
  }

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      details: new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        confirm: new FormControl(''),
        phone: new FormControl(''),
        address: new FormControl(''),
        postcode: new FormControl('')
      }),
      pizzas: new FormArray([])
    })
  }

}

//Email matcher
import { AbstractControl } from '@angular/forms';
export const emailMatcher = (control: AbstractControl) => {
  const email = control.get('email');
  const confirm = control.get('confirm');
  if (!email || !confirm) {
    return null;
  }
  return email.value === confirm.value ? null : {nomatch: true};
}
