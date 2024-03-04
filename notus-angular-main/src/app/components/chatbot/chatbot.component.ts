import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

  @Input() showChatbot: boolean;
  @Output() onClose = new EventEmitter<void>();

  closeChatbot() {
    this.showChatbot = false;
    this.onClose.emit();
  }

  openChatbot() {
    this.showChatbot = true;
  }


}
