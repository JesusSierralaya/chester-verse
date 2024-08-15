import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  data = {
    title: 'Change the title',
  };

  defaultNumber = 100;

  defaultName = 'Chester';

  onLogoClicked() {
    alert('Hello Chester');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

  returnNumber(newNumber: number) {
    this.defaultNumber = newNumber;
  }

  returnName(newName: string) {
    this.defaultName = newName;
  }
}
