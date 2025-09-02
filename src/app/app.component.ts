import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EssayComponent } from './essay/essay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EssayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PTE-Essay';
}
