import { Component } from '@angular/core';
import { MessageService } from '../services/message-service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  constructor(public messageService: MessageService) {}
}
