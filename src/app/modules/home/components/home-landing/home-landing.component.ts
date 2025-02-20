import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})
export class HomeLandingComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  question: string = '';
  answer: string = '';
  editEnabled: boolean = false;
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
  data = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit'

  chat: any[] = [
    // {
    //   id: '5635',
    //   question: 'Are you sure you want to leave this room?',
    //   answer: 'Leave this room'
    // },
    // {
    //   id: '5636',
    //   question: 'What are your thoughts on this topic?',
    //   answer: 'This topic is interesting'
    // },
    // {
    //   id: '5637',
    //   question: this.data,
    //   answer: this.data
    // },
    // {
    //   id: '5638',
    //   question: 'Thank you for your feedback!',
    //   answer: 'Thank you'
    // },
    // {
    //   id: '5639',
    //   question: 'What do you think about the topic?',
    //   answer: 'This topic is not interesting'
    // },
    // {
    //   id: '5640',
    //   question: 'Explanation of the Code ChangesLine Wrapping with span: Each line is wrapped in a span element with the class .line. This makes each line independently animatable.Delay for Sequential Typing: We apply an increasing delay (animation-delay) for each span. This makes each line start typing after the previous one has finished.Animation Timing: You can adjust the animation-delay or the duration in @keyframes typingg to change the speed and the delay between lines.This setup will create the effect of each line typing out one after another. Adjust the duration in the animation and animation-delay values as needed for smoother or faster effects',
    //   answer: 'Yes'
    // }
  ]
  ngOnInit(): void {

  }
  ask() {
    console.log(this.question);
    const payload = {
      question: this.question
    }
    // this.apiService.askQuestion(payload).subscribe((res)=>{
    //   console.log(res);
    //   if (res.response) {
    //     this.answer = res.response;
    //   }
    // })
    this.chat.push({
      id:'5345',
      question: this.question,
      answer: 'tsponsebrtbrt brtbbtsponseb rtbrtbrtbbtsponsebrt brtbrtbbt sponsebrtbrtbr tbbtsponsebrtbrtbrtbb',
    })
    this.question = ''
  }
  editQuestion(){
    this.editEnabled = true
  }
  disableEdit(){
    this.editEnabled =false
  }
  getLogs(){
    this.apiService.downloadCSV().subscribe((res)=>{
      console.log(res);
      const blob = new Blob([res], { type: 'text/csv'})
      console.log(blob);
      // const file = new File([blob], 'Aleeta')
      this.dowloadFile(blob)
      // window.open(window.URL.createObjectURL(file))


    })
  }

  dowloadFile(blob: Blob){
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // the filename you want
    a.download = 'Aleeta_Logs.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
