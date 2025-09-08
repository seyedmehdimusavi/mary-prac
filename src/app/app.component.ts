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


// ng build --configuration production --base-href="https://seyedmehdimusavi.github.io/mary-prac/"
// npx angular-cli-ghpages --dir=dist/pte-essay/browser