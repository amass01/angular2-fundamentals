import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  onUpdate(id, text) {
    this.mail.update(id, text);
  }

  constructor(@Inject('mail') private mail) {

  }
}
