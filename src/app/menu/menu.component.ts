import { Component } from '@angular/core';
import {OverlayService} from "../services/overlay.service";
import {MatButton} from "@angular/material/button";
import {FormComponent} from "../form/form.component";
import {AsyncPipe, NgIf} from "@angular/common";


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatButton,
    FormComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(protected overlayService: OverlayService) {
  }

  closeOverlay() {
    this.overlayService.hideOverlay();
  }
  showOverlay() {
    this.overlayService.showOverlay();
  }
}
