import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {OverlayService} from "../services/overlay.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatButton,
    ReactiveFormsModule,
    MatInput,
    CommonModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(protected overlayService: OverlayService){
  }

reportForm = new FormGroup({
  r_number: new FormControl('',[
    Validators.required,
    //Validators.pattern('R\w{1,3}-\d{1,4}-\d\d')
    Validators.minLength(4)
  ]),
  r_date: new FormControl(''),
  r_time: new FormControl('',[
    Validators.pattern('\d{4}|\d{6}(Z?|z?)')
  ]),
  s1_name: new FormControl(''),

  })




  showOverlay() {
    this.overlayService.showOverlay();
  }

  hideOverlay() {
    this.overlayService.hideOverlay();
  }
  onSubmit() {
    console.warn(this.reportForm.value);
  }
}
