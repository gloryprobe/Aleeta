import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss']
})
export class HomeLandingComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  question: string = '';
  answer: string = '';
  editEnabled: boolean = false;
  disableButton: boolean = false;
  failedQuestion: string = '';
  downloadSpinner: boolean = false;
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
  data = `
  What do you Mean by Social Media?
We frequently come across the term "social media" and are quite familiar with it, but what does it actually mean? Social media is a medium for communication and content creation, allowing users to share information, opinions, ideas, and much more. There are two main viewpoints about social media: one group believes it has a negative influence on people, while another group thinks it brings many positive outcomes. A comprehensive speech on social media should address both of these perspectives to provide a balanced view.


What are Some of the Most Widely used Social Media Platforms?
Let's look at what has made social media so popular and widely used in recent years. One major factor is the large number of active users, which greatly affects how much the platform grows, how attractive it is, and how people engage with it. This big user base helps make the platform successful and influential.


These applications serve as the building blocks for a large number of other applications as well. Currently, Facebook is the most popular social networking site on the planet, with more than 2.7 billion active monthly members worldwide. Each social media platform owned by the same company, including Facebook (the company's most popular forum), WhatsApp, Facebook Messenger, and Instagram, has more than 1 billion monthly active users.


In addition, as the number of people who use social media continues to grow, it becomes increasingly clear how important social media has become in today's society.


Monograph on Social Media Use - An Introduction
People have always wanted to connect with others, but in the past, communication was limited to face-to-face interactions such as visiting homes or attending gatherings.


Today, social media has transformed how we connect. Due to busy lives and geographical distances, people now rely on technology to maintain relationships. Social networking sites and apps have revolutionised communication by allowing users to share information and ideas globally through interactive platforms. These sites, accessible from desktops, laptops, and mobile phones, are popular due to their features and ease of use.


Social media platforms like Facebook and Twitter help us stay in touch with friends and acquaintances, while tools like YouTube, Instagram, and WhatsApp allow us to share photos and videos. Additionally, B2B social platforms and review sites enhance the shopping experience by facilitating discussions and offering collective buying deals.


Social Media and Its Significance
Every person's daily routine involves some kind of social media interaction. Anyone, anywhere, at any time, can connect with you through social media as long as you have access to the internet.


While everyone was confined to their homes, unable to speak with anybody other than family and friends, it is critical to communicate with friends and family during Covid-19 to avoid being isolated. The outbreak resulted in social media being an essential tool for individuals to make entertaining videos and engage in social media challenges and activities, which helped keep people busy during these challenging circumstances.


As a result of the quick rise and extension of digital marketing, social media has played an essential part in this expansion. It's also a fantastic resource for finding information on a wide variety of topics. People may learn a great deal and stay up to date with the newest news worldwide by utilizing this. But there is always a drawback to every good that comes with it, no matter how beneficial. As a consequence, the following are some of the most significant advantages and disadvantages of social media in today's fast-paced society.


Format of the Speech
Here is a simple format for structuring a speech:


Introduction

Greeting: Address the audience.

Opening: Start with a quote, question, or interesting fact to grab attention.

Purpose: Clearly state the purpose of your speech.

Overview: Briefly outline the main points you will cover.


Body

Main Point 1: Present your first main idea or argument.

Supporting Details: Provide evidence, examples, or anecdotes.

Main Point 2: Introduce your second main idea or argument.

Supporting Details: Offer additional evidence or examples.

Main Point 3: Discuss your third main idea or argument.

Supporting Details: Share further evidence or examples.


Conclusion

Summary: Recap the main points of your speech.

Closing Statement: End with a strong statement or call to action.

Thank You: Thank the audience for their time and attention.


Benefits of Social Media
Social media sites are erasing differences in age and class. It has assumed a different dimension altogether through interactive sharing. It has now become a medium of mass reach at a minimum cost. Today, one can benefit from social sharing to build a reputation and bring in career opportunities.


They target a broad audience, making it a valuable and effective tool for society. 

 It reaches people even in remote areas, and the information is spread like fire. 

Distance is no more a limitation because of social media. You are constantly updated with the latest news and happenings in the society and environment through social media websites.

Sites and blogs like Orkut, Facebook, Twitter, Instagram, LinkedIn, and many more have become tools for people to connect across the globe. People can attend live talks or live sessions, or lectures happening anywhere in the world while staying at home. 

Teachers and professors can teach on different topics from remote places. 

You can now identify great possibilities for a job through multiple social media sites like LinkedIn, Google, Naukri, and job search. 

Social media enables companies to use these sites as a network to generate awareness about their product, promote their brand, and increase their sales. It saves the cost of marketing and advertising. 

These networking sites on social media provide a comprehensive platform for young aspiring artists to showcase their passion and skills.

Political leaders use the platform of social media for spreading social communication to mass. These days, the political candidates are also communicating with the voters through social media.

Nowadays, a person’s fame or popularity is determined by the number of links he has created with these social media sites. 

It is an excellent educational tool.

It has the potential to increase public awareness of a range of societal issues.

Due to the speed with which data is transmitted over the internet, consumers can stay current on the latest developments.

Social media can be used to disseminate information to the media.

Additionally, there are some social benefits, such as communicating with long-distance family and friends.

It has the potential to open up incredible career opportunities online.


We believe that social media has a lot of positive effects, but we also recognize that, like anything else, it has some negative ones. Keep reading to gather an idea on the same.


Disadvantages of Social Media
However, social media has caused addiction to users. Despite huge benefits, it has some unfavourable consequences.


Users of social media are becoming victims of fraudulent and online scams that seem to be genuine.

It opens up a possibility for hackers to commit fraud and launch virus attacks.

The productivity of people is getting hampered due to extreme usage and indulgence in these social media sites.

Harmful and disrespectful comments and reviews from employees about the company hamper its image tremendously. 

Students, too, are exceedingly active on social media sites these days, limiting them from outdoor activities. 

Students indulge in disputes because of these social media, and sometimes school has to resolve the conflicts.

Some sites are used to express personal anger or dispute, due to which a lot of chaos and confusion is created.

Investigate whether it is possible to cheat on tests.

As a result, students' grades and performance have suffered.

Users are more vulnerable to cybersecurity threats such as hacking, data theft, spamming, and other similar crimes due to a lack of privacy.


Sample Speech on Social Media
Sample Speech 1 - The Positive Impact of Social Media

Good (morning/afternoon/evening) everyone,


Today, I want to talk about the positive impact of social media. Social media platforms like Facebook, Twitter, and Instagram have changed the way we connect with others. They allow us to stay in touch with friends and family no matter where they are in the world.


Firstly, social media helps in maintaining relationships. For instance, platforms like WhatsApp enable us to send instant messages, share updates, and keep up with the lives of loved ones. Secondly, it is a powerful tool for learning and growth. Sites like YouTube provide educational content on a variety of topics, from cooking to coding.


In conclusion, while social media can have its downsides, its ability to keep us connected and informed makes it a valuable tool in our modern lives. Thank you.


Sample Speech 2 - The Negative Effects of Social Media

Hello everyone,


Today, I’m going to discuss the negative effects of social media. While social media platforms like Instagram and Twitter offer many benefits, they also come with significant drawbacks.


One major issue is privacy. Many people are unaware of how much personal information they are sharing online. This can lead to unwanted attention and even identity theft. Another problem is the impact on mental health. Constant comparison to others on social media can lead to feelings of inadequacy and low self-esteem.


To sum up, while social media has its advantages, we must be aware of its potential negative effects and use these platforms responsibly. Thank you for listening.


Sample Speech 3 - Balancing Social Media Use

Good (morning/afternoon/evening) everyone,


Today, I want to speak about balancing social media use in our daily lives. Social media is a great tool for communication and entertainment, but it's essential to find a balance to avoid overuse.


Firstly, setting limits on screen time can help maintain a healthy balance. For example, allocating specific times for checking social media can prevent it from consuming too much of our day. Secondly, it's crucial to engage in offline activities. Spending time with family and friends in person can provide a more meaningful connection than online interactions.


In conclusion, by managing our social media habits and focusing on real-life interactions, we can enjoy the benefits of social media without letting it overwhelm our lives. Thank you.


Test your Knowledge: Speech on Social Media
Task 1 - 5 Minute Speech On Social Media in Education: Explain how social media supports learning, with examples and pros and cons.

Task 2 - Student Speech on Social Media and Mental Health: Discuss how social media affects mental health and share tips for managing its use.

Task 3 - Short Speech on Social Media's Impact on Communication: Describe how social media changes communication, highlighting benefits and challenges.


Now check out if you got them all right from the answers below:


Task 1 - 5 Minute Speech on Social Media in Education:

Prepare a speech on how social media can enhance educational experiences. Start by introducing the concept of using platforms like YouTube, LinkedIn, and educational forums for learning. Discuss how these platforms provide access to a wide range of resources, from video tutorials to professional networking opportunities. Explain the benefits, such as interactive learning and easy access to expert advice. Also, address potential drawbacks, like distractions or the spread of misinformation. Conclude with tips on how students and educators can use social media effectively for educational purposes while managing its challenges.
  `

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
    this.scrollToBottom()
  }
  ask() {
    console.log(this.question);
    const payload = {
      question: this.question ? this.question : this.failedQuestion
    }

    if (this.chat[this.chat.length - 1]?.error) {
      this.chat.splice(-1, 1, { error: false, answer: 'Loading...', question: payload.question })
      this.scrollToBottom()
    }
    else if (this.question !== '') {
      this.chat.push({
        id: Math.ceil(Math.random() * 10000),
        question: this.question,
        answer: 'Loading...',
        error: false
      })
      this.scrollToBottom()
    } else return;

    this.apiService.askQuestion(payload).subscribe((res) => {
      console.log(res);
      if (res.response) {
        this.chat.splice(-1, 1, { error: false, answer: res.response, question: payload.question })
        this.failedQuestion = '';
        this.question = ''
        this.scrollToBottom();
      }
    }, (error) => {
      this.chat.splice(-1, 1, { error: true, answer: '', question: payload.question })
      this.failedQuestion = payload.question;
      this.question = ''
      this.scrollToBottom()
    })
  }

  onEnterPress(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.ask()
    }
  }
  editQuestion() {
    this.editEnabled = true
  }
  disableEdit() {
    this.editEnabled = false
  }
  getLogs() {
    this.downloadSpinner = true;
    this.apiService.downloadCSV().subscribe((res) => {
      const blob = new Blob([res], { type: 'text/csv' })
      this.dowloadFile(blob)
    },
      (error) => {
        console.log('Something went wrong')
        this.downloadSpinner = false
      })
  }

  dowloadFile(blob: Blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'Aleeta_Logs.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    this.downloadSpinner = false;
  }
  scrollToBottom() {
    const el: HTMLDivElement = this.scrollContainer.nativeElement;
    setTimeout(() => {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: 'smooth',
      });
    });
  }
  ngAfterViewInit() {
    this.scrollToBottom();
  }
}
