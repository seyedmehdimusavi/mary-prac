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
  // Selected template type
  selectedTemplate: string = 'essay1';

  // Available templates
  essay1: string = 'In recent years, the phenomenon of TOPIC has triggered a heated debate among people and intellectuals. While some agree that TOPIC, others firmly disagree with this view. I personally agree that TOPIC and will explain my opinion throughout the essay. To start with, POINT 1 (Reason 1). This is because EXPLANATION. As a tangible example, a public investigation conducted by high-profile researchers at Harvard University demonstrates that EXAMPLE. As a result, POINT 1 requires thorough evaluation. Furthermore, POINT 2 (Reason 2). This highlights that EXPLANATION. As an illustration, based on my own experience, EXAMPLE. Thus, POINT 2 (Reason 2) calls for detailed analysis. In conclusion, I strongly agree that TOPIC. (Despite some opposing views, I believe this perspective should be dealt with carefully in the future to ensure balanced outcomes).';
  essay1t:string =`در سال‌های اخیر، پدیده‌ی موضوع  باعث بحث‌های داغی میان مردم و اندیشمندان شده است. در حالی که برخی با موضوع موافق هستند، دیگران به شدت با آن مخالف‌اند. من شخصاً با موضوع موافقم و نظر خود را در طول این مقاله توضیح خواهم داد.
در ابتدا، نکته‌ی اول (دلیل اول). دلیلش این است که توضیح. برای مثال، یک تحقیق عمومی که توسط پژوهشگران برجسته‌ی دانشگاه هاروارد انجام شده نشان می‌دهد که نمونه / مثال. در نتیجه، نکته‌ی اول نیاز به بررسی دقیق دارد.
علاوه بر این، نکته‌ی دوم (دلیل دوم). این نشان می‌دهد که توضیح. به عنوان نمونه، بر اساس تجربه‌ی شخصی خودم، مثال. بنابراین، نکته‌ی دوم (دلیل دوم) نیز باید با جزئیات بیشتری بررسی شود.
در پایان، من کاملاً موافقم که موضوع. گرچه برخی دیدگاه‌های مخالف وجود دارد، اما باور دارم که این مسئله باید در آینده با دقت بیشتری بررسی شود تا نتایج متعادل و منصفانه‌ای حاصل گردد.
`;

essay2:string='In recent years, the phenomenon of TOPIC has triggered a heated debate among people and intellectuals. While some state that SIDE 1, others believe that SIDE 2. I will discuss both views throughout this essay (and present my own viewpoint). To start with, the supporters of TOPIC argue that POINT. This is because EXPLANATION. For instance, a public investigation conducted by high-profile researchers at Harvard University demonstrates that EXAMPLE. As a result, (the supporters believe that) POINT requires thorough evaluation. On the other hand, the opponents of TOPIC state that POINT. This highlights that EXPLANATION. As an illustration, based on my own experience, EXAMPLE. Thus, (the critics insist that) POINT calls for detailed analysis. In conclusion, after evaluating both arguments =elaborated above, I personally believe that YOUR OPINION.';
essay2t:string=`در سال‌های اخیر، پدیده‌ی موضوع (TOPIC) باعث بحث‌های داغی میان مردم و اندیشمندان شده است. در حالی که برخی معتقدند دیدگاه اول (SIDE 1)، دیگران باور دارند که دیدگاه دوم (SIDE 2) درست است. من در این مقاله هر دو دیدگاه را بررسی خواهم کرد (و در پایان نظر شخصی خود را بیان می‌کنم).
در ابتدا، طرفداران موضوع استدلال می‌کنند که نکته (POINT). دلیل آن این است که توضیح (EXPLANATION). برای مثال، یک پژوهش عمومی که توسط محققان برجسته دانشگاه هاروارد انجام شده است، نشان می‌دهد که نمونه (EXAMPLE). در نتیجه، (طرفداران معتقدند که) نکته نیاز به بررسی دقیق دارد.
از سوی دیگر، مخالفان موضوع بیان می‌کنند که نکته (POINT). این نشان می‌دهد که توضیح (EXPLANATION). به عنوان مثال، بر اساس تجربه شخصی من، نمونه (EXAMPLE). بنابراین، (منتقدان اصرار دارند که) نکته باید با جزئیات بیشتری مورد تحلیل قرار گیرد.
در پایان، پس از بررسی هر دو دیدگاه مطرح‌شده در بالا، من شخصاً باور دارم که نظر شما(YOUR OPINION) درست است. 
`

essay3:string='In recent years, the phenomenon of TOPIC has triggered a heated debate among people and intellectuals. While some state that there are significant problems, others believe that the solutions deserve attention. I will discuss both aspects of TOPIC throughout this essay (and present my own viewpoint). To start with, one of the major problems of TOPIC is that POINT. This is because EXPLANATION. As a tangible example, a public investigation conducted by high-profile researchers at Harvard University demonstrates that EXAMPLE. As a result, this problem of TOPIC requires thorough evaluation. On the other hand, there are also solutions associated with TOPIC. One potential solution is that POINT. This highlights that EXPLANATION. As an illustration, based on my own experience, EXAMPLE. Thus, this solution calls for detailed analysis. In conclusion, (I firmly believe that) TOPIC has both problems and solutions. Moving forward, the problems need to be dealt with carefully to ensure balanced outcomes.';
essay3t:string=`مقاله‌های مسئله و راه‌حل (Problem–Solution Essays)
در سال‌های اخیر، پدیده‌ی موضوع (TOPIC) باعث بحث‌های داغی میان مردم و اندیشمندان شده است. در حالی که برخی معتقدند مشکلات قابل توجهی وجود دارد، دیگران باور دارند که راه‌حل‌ها نیز شایسته توجه هستند. من در این مقاله هر دو جنبه‌ی موضوع را بررسی خواهم کرد (و نظر شخصی خود را بیان می‌کنم).
در ابتدا، یکی از مشکلات اصلی موضوع این است که نکته (POINT). دلیل آن این است که توضیح (EXPLANATION). برای مثال، یک تحقیق عمومی که توسط پژوهشگران برجسته‌ی دانشگاه هاروارد انجام شده، نشان می‌دهد که نمونه (EXAMPLE). در نتیجه، این مشکل مربوط به موضوع نیاز به بررسی دقیق دارد.
از سوی دیگر، راه‌حل‌هایی نیز برای موضوع وجود دارد. یکی از راه‌حل‌های احتمالی این است که نکته (POINT). این نشان می‌دهد که توضیح (EXPLANATION). به عنوان نمونه، بر اساس تجربه‌ی شخصی من، مثال (EXAMPLE). بنابراین، این راه‌حل نیاز به تحلیل دقیق دارد.
در پایان، (من قویاً باور دارم که) موضوع هم مشکلات و هم راه‌حل‌هایی دارد. در آینده، لازم است مشکلات با دقت مدیریت شوند تا نتایج متعادل و پایدار حاصل شود.
`;

essay4:string='In recent years, the phenomenon of TOPIC has triggered a heated debate among people and intellectuals. While some state that there are significant advantages, others believe that the disadvantages deserve attention. I will discuss both aspects of TOPIC throughout this essay (and present my own viewpoint). To start with, one of the major advantages of TOPIC is that POINT. This is because EXPLANATION. As a tangible example, a public investigation conducted by high-profile researchers at Harvard University demonstrates that EXAMPLE. As a result, this advantage of TOPIC requires thorough evaluation. On the other hand, there are also disadvantages associated with TOPIC. One potential disadvantage is that POINT. This highlights that EXPLANATION. As an illustration, based on my own experience, EXAMPLE. Thus, this drawback calls for detailed analysis. In conclusion, (I firmly believe that) TOPIC has both advantages and disadvantages. Moving forward, the disadvantages need to be dealt with carefully to ensure balanced outcomes.';
essay4t:string=`مقاله‌های مزایا و معایب (Advantage–Disadvantage Essays)
در سال‌های اخیر، پدیده‌ی موضوع (TOPIC) باعث بحث‌های داغی میان مردم و اندیشمندان شده است. در حالی که برخی معتقدند موضوع دارای مزایای قابل توجهی است، دیگران بر این باورند که معایب آن نیز شایسته‌ی توجه هستند. من در این مقاله هر دو جنبه‌ی موضوع را بررسی خواهم کرد (و در پایان نظر شخصی خود را بیان می‌کنم).
در ابتدا، یکی از مهم‌ترین مزایای موضوع این است که نکته (POINT). دلیل آن این است که توضیح (EXPLANATION). برای مثال، یک تحقیق عمومی که توسط پژوهشگران برجسته‌ی دانشگاه هاروارد انجام شده است، نشان می‌دهد که نمونه (EXAMPLE). در نتیجه، این مزیتِ موضوع نیاز به بررسی دقیق دارد.
از سوی دیگر، معایبی نیز در ارتباط با موضوع وجود دارد. یکی از معایب احتمالی این است که نکته (POINT). این نشان می‌دهد که توضیح (EXPLANATION). به عنوان نمونه، بر اساس تجربه‌ی شخصی من، مثال (EXAMPLE). بنابراین، این نقطه‌ضعف نیاز به تحلیل دقیق دارد.
در پایان، (من قویاً باور دارم که) موضوع هم دارای مزایا و هم معایب است. در آینده، لازم است معایب آن با دقت بیشتری مدیریت شوند تا نتایج متعادل و پایداری حاصل شود.
`;


essay5:string='In recent years, the phenomenon of TOPIC has triggered a heated debate among people and intellectuals. While some state that there are significant causes, others believe that the effects deserve attention. I will discuss both aspects of TOPIC throughout this essay (and present my own viewpoint). To start with, one of the major causes of TOPIC is that POINT. This is because EXPLANATION. As a tangible example, a public investigation conducted by high-profile researchers at Harvard University demonstrates that EXAMPLE. As a result, this cause of TOPIC requires thorough evaluation. On the other hand, there are also effects associated with TOPIC. One potential effect is that POINT. This highlights that EXPLANATION. As an illustration, based on my own experience, EXAMPLE. Thus, this effect calls for detailed analysis. In conclusion, (I firmly believe that) TOPIC has both causes and effects. Moving forward, the effects need to be dealt with carefully to ensure balanced outcomes.';
essay5t:string=`مقاله‌های علت و معلول (Cause–Effect Essays)
در سال‌های اخیر، پدیده‌ی موضوع (TOPIC) باعث بحث‌های داغی میان مردم و اندیشمندان شده است. در حالی که برخی معتقدند دلایل (علل) قابل توجهی وجود دارد، دیگران باور دارند که پیامدها (اثرات) آن نیز شایسته‌ی توجه هستند. من در این مقاله هر دو جنبه‌ی موضوع را بررسی خواهم کرد (و در پایان نظر شخصی خود را بیان می‌کنم).
در ابتدا، یکی از علل اصلی موضوع این است که نکته (POINT). دلیل آن این است که توضیح (EXPLANATION). برای مثال، یک تحقیق عمومی که توسط پژوهشگران برجسته‌ی دانشگاه هاروارد انجام شده است، نشان می‌دهد که نمونه (EXAMPLE). در نتیجه، این علتِ موضوع نیاز به بررسی دقیق دارد.
از سوی دیگر، پیامدهایی نیز در ارتباط با موضوع وجود دارد. یکی از پیامدهای احتمالی این است که نکته (POINT). این نشان می‌دهد که توضیح (EXPLANATION). به عنوان نمونه، بر اساس تجربه‌ی شخصی من، مثال (EXAMPLE). بنابراین، این اثر نیاز به تحلیل دقیق دارد.
در پایان، (من قویاً باور دارم که) موضوع هم دارای علل و هم دارای پیامدهایی است. در آینده، لازم است آثار آن با دقت مدیریت شوند تا نتایج متعادل و پایداری حاصل گردد.
`;

essay6:string='In recent years, the phenomenon of TOPIC has triggered a heated debate among people and intellectuals. While some state that TOPIC RELATED SENTENCE, others believe that TOPIC RELATED SENTENCE. I will discuss TASK throughout this essay (and present my own viewpoint about TASK). To start with, POINT. This is because EXPLANATION. As a tangible example, a public investigation conducted by high-profile researchers at Harvard University demonstrates that EXAMPLE. As a result, POINT requires thorough evaluation. On the other hand, POINT. This highlights that EXPLANATION. As an illustration, based on my own experience, EXAMPLE. Thus, this POINT calls for detailed analysis. In conclusion, after evaluating the different aspects of the topic, I believe that YOUR OPINION.';
essay6t:string=`مقاله‌های ترکیبی (Mixed Essays)
در سال‌های اخیر، پدیده‌ی موضوع (TOPIC) باعث بحث‌های داغی میان مردم و اندیشمندان شده است. در حالی که برخی معتقدند که جمله‌ی مرتبط با موضوع (TOPIC RELATED SENTENCE)، دیگران باور دارند که جمله‌ی مرتبط دیگر با موضوع (TOPIC RELATED SENTENCE) درست است. من در این مقاله، وظیفه یا سؤال مورد نظر (TASK) را بررسی خواهم کرد (و دیدگاه شخصی خود را درباره‌ی آن بیان می‌کنم).
در ابتدا، نکته (POINT). دلیل آن این است که توضیح (EXPLANATION). برای مثال، یک تحقیق عمومی که توسط پژوهشگران برجسته‌ی دانشگاه هاروارد انجام شده است، نشان می‌دهد که نمونه (EXAMPLE). در نتیجه، نکته (POINT) نیاز به بررسی دقیق دارد.
از سوی دیگر، نکته‌ی دیگر (POINT). این نشان می‌دهد که توضیح (EXPLANATION). به عنوان نمونه، بر اساس تجربه‌ی شخصی من، مثال (EXAMPLE). بنابراین، این نکته (POINT) نیز نیاز به تحلیل دقیق دارد.
در پایان، پس از بررسی جنبه‌های مختلف این موضوع، من باور دارم که نظر شما (YOUR OPINION) درست است.
`;

di:string=`The bar chart provides information about [topic]. The X-axis shows [categories or time periods], and the Y-axis shows [units or measurement]. Various numbers can be seen in the picture, such as N, N, as well as N. Additionally, other details are visible, including N and N, as well as N. To conclude, I can notice that the highest value for N could be around N.`;
dit:string=`نمودار میله‌ای اطلاعاتی درباره [موضوع] ارائه می‌دهد.
محور افقی (X) نشان‌دهنده [دسته‌ها یا بازه‌های زمانی] و محور عمودی (Y) نشان‌دهنده [واحدها یا مقادیر اندازه‌گیری] است.
اعداد مختلفی در نمودار دیده می‌شوند، مانند N، N، و همچنین N.
علاوه بر این، جزئیات دیگری نیز قابل مشاهده است، از جمله N و N، و همچنین N.
در پایان، می‌توانم مشاهده کنم که بالاترین مقدار برای N می‌تواند حدود N باشد.`;


di2:string = `This image provides information about [topic]. On one side of the image, I can see N and N, as well as N. Various features can be seen in the picture, such as N, N, and N. Additionally, other details are visible, including N and N, as well as N. To conclude, I can notice that the image shows (Topic).`;
dit2:string=`این تصویر اطلاعاتی درباره [موضوع] ارائه می‌دهد. 
ویژگی‌های مختلفی در تصویر قابل مشاهده هستند، مانند N، N، و همچنین N. 
در یک سمت تصویر، می‌توانم N و N و همچنین N را ببینم. 
علاوه بر این، جزئیات دیگری نیز قابل مشاهده است، از جمله N و N، و همچنین N. 
در پایان، می‌توانم مشاهده کنم که تصویر [موضوع] را نشان می‌دهد.`;

sgd:string=`The discussion between the three speakers was about TOPIC, focusing on N. First speaker talked about N, and explained N as well as N. The speaker also mentioned N, and N and then followed by N and N. Second speaker discussed N, but added a point about N and N. Another idea from this speaker was N as well as N and then he(she) mentioned N. Third speaker explained N and also focused on N and N. In addition to this information, this speaker was talking about N and N and then agreed (disagreed) with N, as well as N. The majority of speaker agreed(disagreed) with N. In the end, some points of discussion were N and N as well as N, and then another important matter that I could conclude is N and N. As a conclusion to this discussion, I noticed that [N] was a good idea.`

sgdt:string=`این گفت‌وگو بین سه سخنران درباره [موضوع] بود که بر [N] تمرکز داشت.
سخنران اول درباره [N] صحبت کرد و [N] را همراه با [N] توضیح داد. او همچنین به [N] و [N] اشاره کرد و سپس به [N] و [N] پرداخت.
سخنران دوم درباره [N] بحث کرد، اما نکته‌ای درباره [N] و [N] اضافه کرد. ایده‌ی دیگر این سخنران [N] بود، همچنین [N]، و سپس او به [N] اشاره کرد.
سخنران سوم [N] را توضیح داد و همچنین بر [N] و [N] تمرکز کرد. علاوه بر این اطلاعات، این سخنران درباره [N] و [N] صحبت کرد و سپس با [N] و همچنین [N] موافقت (یا مخالفت) کرد.
اکثریت سخنرانان با [N] موافق (یا مخالف) بودند.
در پایان، برخی از نکات مورد بحث [N] و [N] و همچنین [N] بودند، و سپس موضوع مهم دیگری که می‌توانم نتیجه‌گیری کنم [N] و [N] بود.
در نتیجه این گفت‌وگو، متوجه شدم که [N] ایده‌ی خوبی بود.
`;


sst:string=`The lecture was about NP1, which focused on NP2.The speaker explained NP3, and highlighted the importance of NP4. Ultimately, while NP5 and NP6 were mentioned, the impacts of NP7 were emphasized.`;

sstt:string=`سخنرانی درباره [NP1] بود که بر [NP2] تمرکز داشت.
سخنران [NP3] را توضیح داد و بر اهمیت [NP4] تأکید کرد.
در نهایت، در حالی که به [NP5] و [NP6] اشاره شد، بر تأثیرات [NP7] تأکید گردید.
`;

rl:string=`The lecture provides information about N and N, focusing on N and N. The most important point is N and N, which shows N and N. Another visible feature is N and N, which indicates N and N. Lastly, it is quite clear that N and N which relates to N and N. To conclude, the data points to N and N, highlighting the significance of N and N.`;

rlt:string=`سخنرانی درباره [NP1] بود که بر [NP2] تمرکز داشت.
سخنران [NP3] را توضیح داد و بر اهمیت [NP4] تأکید کرد.
در نهایت، در حالی که به [NP5] و [NP6] اشاره شد، بر تأثیرات [NP7] تأکید گردید.
`
rts:string=`Hi, I just want to talk about N. Positive: "I’m happy to do N -Concerned: "I’m having trouble because N. To make sure this works well, I’ll need N. I’d really appreciate it if you could N, so everything can be done smoothly. Thanks for your help, I just want to make sure this goes well regarding N.`;

rtst:string=`سلام، فقط می‌خواهم درباره [N] صحبت کنم.
مثبت: «خوشحالم که می‌توانم [N] را انجام دهم.»
نگران‌کننده: «در حال حاضر با مشکلی مواجه هستم چون [N].»
برای اطمینان از اینکه همه‌چیز به‌خوبی پیش برود، به [N] نیاز دارم.
خیلی ممنون می‌شوم اگر بتوانید [N] را انجام دهید تا همه‌چیز به‌صورت روان پیش برود.
از کمکتان سپاسگزارم، فقط می‌خواهم مطمئن شوم که همه‌چیز درباره [N] به‌خوبی پیش می‌رود.
`

  // Placeholder templates for missing types
  swt: string = 'S1, S2, which mean that S3, so S4, S5';
  swtt: string = 'S1، S2، که به معنای S3 است، بنابراین S4، S5';
  
  essay: string = this.essay1; // Default essay points to essay1
  essayt: string = this.essay1t;
  
  retell_lecture: string = this.rl;
  retell_lecturet: string = this.rlt;
  
  sGD: string = this.sgd;
  sGDt: string = this.sgdt;
  
  rTS: string = this.rts;
  rTSt: string = this.rtst;

  // Get the current template based on selection
  get template(): string {
    switch(this.selectedTemplate) {
      case 'essay1': return this.essay1;
      case 'essay2': return this.essay2;
      case 'essay3': return this.essay3;
      case 'essay4': return this.essay4;
      case 'essay5': return this.essay5;
      case 'essay6': return this.essay6;
      case 'essay': return this.essay;
      case 'swt': return this.swt;
      case 'sst': return this.sst;
      case 'di': return this.di;
      case 'di2': return this.di2;
      case 'retell_lecture': return this.retell_lecture;
      case 'sGD': return this.sGD;
      case 'rTS': return this.rTS;
      default: return this.essay1;
    }
  }

  // Get the translation of the current template
  get templateTranslation(): string {
    switch(this.selectedTemplate) {
      case 'essay1': return this.essay1t;
      case 'essay2': return this.essay2t;
      case 'essay3': return this.essay3t;
      case 'essay4': return this.essay4t;
      case 'essay5': return this.essay5t;
      case 'essay6': return this.essay6t;
      case 'essay': return this.essayt;
      case 'swt': return this.swtt;
      case 'sst': return this.sstt;
      case 'di': return this.dit;
      case 'di2': return this.dit2;
      case 'retell_lecture': return this.retell_lecturet;
      case 'sGD': return this.sGDt;
      case 'rTS': return this.rTSt;
      default: return this.essay1t;
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
      case 'essay1': return 'Opinion (Agree/Disagree) Essays';
      case 'essay2': return 'Discussion Essays';
      case 'essay3': return 'Problem-Solution Essays';
      case 'essay4': return 'Advantage-Disadvantage Essays';
      case 'essay5': return 'Cause-Effect Essays';
      case 'essay6': return 'Mixed Essays';
      case 'essay': return 'Essay Template';
      case 'swt': return 'Summarize Written Text';
      case 'sst': return 'Summarize Spoken Text';
      case 'di': return 'Bar Chart-Line chart';
      case 'di2': return 'Other DI';
      case 'retell_lecture': return 'Retell Lecture';
      case 'sGD': return 'Summarize GD';
      case 'rTS': return 'Retell TS';
      default: return 'Template';
    }
  }

  // Get template description (English title)
  getTemplateDescription(): string {
    return this.getTemplateTitle();
  }
}
