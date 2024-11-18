import { Component } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  constructor(private apiService: ApiService){}
  question: string ='';
  answer: string = '';
  histories = [
    'Real Time Chat App',
    'Normal vs Arrow Functions',
    'RxJs Pipe and Error Handling',
    'Angular Routing and Lazy Loading',
    'Material Design Icons',
    'Google OAuth Authentication',
    'Angular Universal (SSR)',
    'Firebase Realtime Database',
    'Angular Form Validation',
    'Material Design Theming',
    'Angular Animations',
    'Angular CDK Drag and Drop',
    'Angular Material Table',
    'Angular Material Tree',
    'Angular Material Dialog',
    'Angular Material Snackbar',
  ]
  questions = [
    'What is the difference between a class and an interface in Angular?',
    'How does Angular Universal work?',
    'What is the purpose of Angular Material?',
    'What is the difference between Angular Forms and Reactive Forms?',
    'How do you handle error in Angular?',
    'What is the purpose of Angular Animations?',
    'What is the purpose of Angular CDK Drag and Drop?',
    'What is the purpose of Angular Material Table?',
  ]
  ngOnInit(): void {
      // this.apiService.askQuestion().subscribe((res)=>{
      //   console.log(res)
      // })
  }
  ask(){
    console.log(this.question);
    const payload = {
      question: this.question
    }
    this.apiService.askQuestion(payload).subscribe((res)=>{
      console.log(res);
      if (res.response) {
        this.answer = res.response;
      }
    })
  }
}
