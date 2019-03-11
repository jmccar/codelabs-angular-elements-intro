import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  onAddGreeter() {
    const container = document.getElementById('container');
    container.innerHTML = '<do-greet></do-greet>';
  }
}
