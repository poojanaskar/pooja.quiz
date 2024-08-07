const h2 = document.querySelector('#h2');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const next = document.querySelector('#next');
const opt = document.querySelector('.opt');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');


const home = document.getElementById('home');
const clear = document.getElementById('clear');
const start = document.getElementById('start');
const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');
const label1 = document.querySelector('#label1');
const label2 = document.querySelector('#label2');
const label3 = document.querySelector('#label3');
const label4= document.querySelector('#label4');





const question = [{

       que: "Which of the following is used to declare a variable in JavaScript?",
       a: 'var',
       b: 'let',
       c: 'const',
       d: 'all',
       correct: 'all'


},
{
       que: "Which function is used to display an alert box in JavaScript?",
       a: 'alert',
       b: 'msg',
       c: 'popup',
       d: 'notify',
       correct: 'alert'

}
       ,
{
       que: " Which of the following is NOT a JavaScript data type?",
       a: 'String',
       b: 'boolean',
       c: 'Float',
       d: 'Int',
       correct: 'boolean'

},

{
       que: "  How do you access the first element of an array arr?",
       a: ' arr.first()',
       b: 'arr[0]',
       c: 'arr.begin()',
       d: 'arr.get(0)',
       correct: 'arr[0]'
},




];

let currentIndex = 0;

let paste = (currentIndex) => {


       h2.innerHTML = question[currentIndex].que;
       option1.nextElementSibling.innerHTML = question[currentIndex].a;
       option2.nextElementSibling.innerHTML = question[currentIndex].b;
       option3.nextElementSibling.innerHTML = question[currentIndex].c;
       option4.nextElementSibling.innerHTML = question[currentIndex].d;

    

       document.querySelectorAll('input[name="choice"]').forEach(input => {
              input.checked = false;
            });
}

let score = 0;

let checkAnswer = (currentIndex) => {
      const   arr = [option1, option2, option3, option4];
   

       arr.forEach(e => {


              if (e.checked) {
                     let check = e.nextElementSibling.innerHTML;
                     if (question[currentIndex].correct === check) {
                            score++;
                            console.log(score);
                     }

              }
       });

    

};

const QuestionNumber = (currentIndex)=>{
       h3.innerHTML = ` Question  No.   ${currentIndex+1} of  ${question.length} `;
} 


       paste(0);

       QuestionNumber(0);
       congratulation= ()=>{
              const QuestionNumber = (currentIndex)=>{
                     h3.innerHTML = ` Question  No.   ${question.length} of  ${question.length} `;
              } 
              if(score<=2){
                     h1.innerHTML="Don't worry, you can always try again!"    
              }
              if(2<score<=3){
                     h1.innerHTML=" Keep practicing to improve your score!"    
              }
              if(score==4){
                     h1.innerHTML="Great job!"    
              }
            
              h2.innerHTML = `you have Completed the  quiz ,  score is ${score}/${question.length}`;
              document.querySelector('.allOption').style.display = 'none';
              clear.style.display ='none';
              next.style.display ='none';


       }

       
                    
       

       next.addEventListener('click', () => {
              if(currentIndex <question.length){
             console.log(currentIndex);
              checkAnswer(currentIndex);
              currentIndex++;
              if(currentIndex <question.length)
              QuestionNumber(currentIndex);
              if (currentIndex < question.length) {
                     paste(currentIndex);
                   } else {
                     congratulation();
                   }
                 } else {
                   congratulation();
                 }
       });
     
// home button

       home.addEventListener('click' , ()=>{
              window.location.reload();
       });

       // start again 
       start.addEventListener('click' , ()=>{
            
              window.location.reload();
       });

       // clear

       clear.addEventListener('click' ,()=>{
              document.querySelectorAll('input[name="choice"]').forEach(input => {
                     input.checked = false; })
       });

       const startTimer = () => {
              let timeRemaining = 5 * 60; // 5 minutes in seconds
          
              timerInterval = setInterval(() => {
                  const minutes = Math.floor(timeRemaining / 60);
                  const seconds = timeRemaining % 60;
          
                  minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
                  secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
          
                  if (timeRemaining > 0) {
                      timeRemaining--;
                  } else {
                      clearInterval(timerInterval);
                      congratulation();
                  }
              }, 1000);
          };
          const resetTimer = () => {
              clearInterval(timerInterval);
              minutesDisplay.textContent = "05";
              secondsDisplay.textContent = "00";
              startTimer();
          };
          startTimer();