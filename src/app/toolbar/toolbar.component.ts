import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {OverlayService} from "../services/overlay.service";
import {MenuComponent} from "../menu/menu.component";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {ViewChild} from "@angular/core";
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatButton,
    MatToolbar,
    MenuComponent,
    NgIf,
    AsyncPipe,
    MatMenuTrigger,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatIconButton,

  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
constructor(protected overlayService: OverlayService) {}
  color = 'primary';
  spanColor = 'accent';

  showOverlay() {
    this.overlayService.showOverlay();
  }

  hideOverlay() {
    this.overlayService.hideOverlay();
  }
}

