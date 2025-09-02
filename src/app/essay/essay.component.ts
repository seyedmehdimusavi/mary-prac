import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-essay',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './essay.component.html',
  styleUrl: './essay.component.scss'
})
export class EssayComponent {
  // Available templates
  essay: string = 'Recently, the phenomenon of T1 and its corresponding impact has sparked a heated debate. Although contested by many that the matter of N1 is highly beneficial, such an issue is regarded thoroughly both constructive and positive by a substantial number of individuals. I highly believe that N2 can be a plus, and I will investigate that throughout this essay. From a social standpoint, T2 can provide the society with noticeable effects that are rooted in the fact that merits, as well as advantages of N3, are crucial. According to my own experience, I performed an academic experiment that discovered the importance of N4. Thus, beneficial ramifications of N5 are visible. From a scientific point of view, T3 can provide the community with negative impacts that are related to the reality that demerits of N6 are remarkable. As a tangible example, some scientific research undertaken by a prestigious university described the role of N7. Hence, predicted outcomes of N8 are noticeable. To conclude, while there are several compelling arguments on both sides, I profoundly believe that the benefits of T4 far outweigh its drawbacks. Not only do the advantages of N9 prove the significance of N10, but also pinpoint possible implications.';
  swt: string = 'While the impacts of n and n such as n and n are important, the effects of n and n such as n and n are remarkable, the influences of n and n such as n and n are significant.';
  sst: string = 'The lecture mainly was about N. While the impacts of n and n such as n and n are important. The effects of n and n such as n and n are remarkable. The influences of n and n such as n and n are significant. In conclusion, the lecture was informative.';
  
  // Selected template type
  selectedTemplate: string = 'essay';
  
  // Get the current template based on selection
  get template(): string {
    switch(this.selectedTemplate) {
      case 'essay': return this.essay;
      case 'swt': return this.swt;
      case 'sst': return this.sst;
      default: return this.essay;
    }
  }
  
  // Change the selected template
  changeTemplate(templateType: string): void {
    this.selectedTemplate = templateType;
    this.resetExercise();
  }
  
  // User input
  userInput: string = '';
  
  // Words with errors
  errorWords: { [key: number]: boolean } = {};
  
  // Check user input against the template
  checkInput(): void {
    const templateWords = this.template.split(' ');
    const userWords = this.userInput.split(' ');
    
    this.errorWords = {};
    
    // Check each word the user has typed
    for (let i = 0; i < userWords.length; i++) {
      if (i < templateWords.length && userWords[i] !== templateWords[i]) {
        this.errorWords[i] = true;
      }
    }
  }
  
  // Get word class based on whether it's correct or not
  getWordClass(index: number): string {
    return this.errorWords[index] ? 'error-word' : '';
  }
  
  // Reset the exercise
  resetExercise(): void {
    this.userInput = '';
    this.errorWords = {};
  }
  
  // Calculate progress percentage
  getProgress(): number {
    if (!this.userInput) return 0;
    
    const templateWords = this.template.split(' ');
    const userWords = this.userInput.split(' ');
    const correctWords = userWords.filter((word, i) => i < templateWords.length && word === templateWords[i]).length;
    
    return Math.round((correctWords / templateWords.length) * 100);
  }
  
  // Get template title based on selection
  getTemplateTitle(): string {
    switch(this.selectedTemplate) {
      case 'essay': return 'Essay Template';
      case 'swt': return 'Summarize Written Text';
      case 'sst': return 'Summarize Spoken Text';
      default: return 'Template';
    }
  }
}
