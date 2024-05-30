import {Component, ElementRef, inject, input} from '@angular/core';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';

import {MatFormField} from "@angular/material/form-field";
import {Message} from "../message";
import {MatBadge} from "@angular/material/badge";
import { v4 as uuidv4 } from 'uuid';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatBadge,
    NgClass

  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent {
  messages = input.required<Message[]>();
  myId = input<string>();
elRef = inject(ElementRef);
get scrollContainer(): ElementRef { return this.elRef.nativeElement; }
}
