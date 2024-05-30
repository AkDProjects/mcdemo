import {Component, ElementRef, inject, input, output} from '@angular/core';
import {Message} from "../message";
import {v4 as uuidv4} from "uuid";
import {ChatComponent} from "../chat/chat.component";

@Component({
  selector: 'app-chat-cont',
  standalone: true,
  imports: [
    ChatComponent
  ],
  templateUrl: './chat-cont.component.html',
  styleUrl: './chat-cont.component.css'
})
export class ChatContComponent {
  //we always want this a message passed from the chat-room.ts to be required
  //id for which user sent message needs to be put here so the divs can be styled accordingly
  senderID = uuidv4();
  recieverID =  uuidv4();
  myId = input<string>();
  messagesSignal = input<Message[]>([
    {
      text: 'sendTest',
      userID: this.senderID,
      id: uuidv4(),

    },
    { text: 'recieveTest',
      userID: this.recieverID,
      id: uuidv4(),
    }
  ]);
}
