import {Component, ElementRef, inject, input, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DataTableComponent} from "./data-table/data-table.component";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {MatAutocomplete, MatOption} from "@angular/material/autocomplete";
import {FormsModule} from "@angular/forms";
import {DataTableDataSource} from "./data-table/data-table-datasource";
import {debounceTime, Subject} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {SearchbarService} from "./services/searchbar.service";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {MatAccordion} from "@angular/material/expansion";
import {ChatComponent} from "./chat/chat.component";
import {Message} from "./message";
import {ChatContComponent} from "./chat-cont/chat-cont.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataTableComponent, MatButtonToggle, MatToolbar, MatButton, RouterLink, MatAutocomplete, MatOption, FormsModule, ToolbarComponent, MatAccordion, ChatComponent, ChatContComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private subjectKeyUp = new Subject();

  constructor(private searchbar: SearchbarService) {
  }
  title = 'mcdemo';
  protected DataTableDataSource = DataTableDataSource;


  ngOnInit() {}




}

