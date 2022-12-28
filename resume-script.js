function myFunction()
{
    if(document.documentElement.scrollTop > 50)
    {
        if (document.getElementById("not_scrolled_header"))
        {
            document.getElementById("not_scrolled_header").id = "scroll_header"
        }
    }
    else
    {
        if (document.getElementById("scroll_header"))
        {
            document.getElementById("scroll_header").id = "not_scrolled_header"
        }
    }
}
window.onscroll = () => {myFunction()};


function typewriter(element, text, speed) {
    let start = null;
    let html_size = 0;
    function step(timestamp) {
      if (!start) start = timestamp; // if first iteration
      let progress = timestamp - start;      
      if (Math.floor(progress/speed) >= html_size){ // if the time passed is larger than html size, add letter
        element.innerHTML += text[html_size];
        html_size++;
      }
        if (html_size !== text.length) { 
        window.requestAnimationFrame(step);
      }
    }
    window.requestAnimationFrame(step);
    window.cancelAnimationFrame(step);
  }
  

const element = document.getElementById("front_text");
const text_part_one = "Hi, ";
const text_part_two = "I'm Daniel"; 
const speed = 100;


setTimeout( () => typewriter(element, text_part_one, speed), 500);
setTimeout( () => typewriter(element, text_part_two, speed), 1700);
