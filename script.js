const faqQues = document.querySelectorAll(".faq-ques");
const faqAns = document.querySelectorAll(".faq-ans");
const arrows = document.querySelectorAll(".arrow");

faqQues.forEach((faqQue,index)=>{
    faqQue.addEventListener("click",function (){
        faqQue.classList.toggle("current-ques");
        arrows[index].classList.toggle("rotate");
        faqAns[index].classList.toggle("show");
        if(!faqAns[index].style.maxHeight){
            faqAns[index].style.maxHeight= faqAns[index].scrollHeight+"rem";
            
        }
        else{
            faqAns[index].style.maxHeight=null; 
        }
    });
})

