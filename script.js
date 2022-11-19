//Testimonial Data
const testimonials = [
    {
      week: "1",
      testimonial:
        "The first week was really stressful for me as the choices I make this week will decide the fate of this module. From choosing the challenge to teammates, it made me more skeptical about the process. However, I will still try my best and cope with whatever is given ahead. (hopefully 🙏) There is also the lingering thought of joining ocbc internship. I heard from my tutors and friends that working in a bank is not really ideal and that working for a big company would not be very beneficial. Overall, week 1 was quite hectic and stress inducing. :D ",
    },
    {
      week: "2",
      testimonial:
        "The second week was deciding and finalizing our idea. During the long weekend, I asked my group to research and write down their thoughts about sustainability. After that, come up with an idea that may work based on their understanding. I came up with an idea which focuses on business with sustainability, where people would donate items and we would sell/give back to the community using various technologies like websites or mobile applications. Everyone did the research and gave an idea which is fantastic. We also consulted Dr Joel for further advice on improving our ideas. After all this, I can see that my team is bonding well together unlike the other teams which puts my heart at ease seeing that we at least have some chemistry between us. I had also made figma files for us to do the user story planning and wireframe. By the looks of it, I should go well if everyone does their work.",
    },
    {
      week: "3",
      testimonial:
        "The third week was the start of coding the application. I have a strong feeling that I need to hard carry (anticipated since week1) as my team has 2 weak coders and only left me and chunkai. Chun kai was also not confident with HTML, CSS, javascript. We also visited the dev ops center in NP. It was pretty cool as I have never seen anything like this in real life before. The room also has a funky smell… ",
    },
    {
      week: "4",
      testimonial:
        "The fourth week I am starting to feel very stressed.  The technical part is doing well, however, I began to further doubt the idea and needed to start all over into ideation.  The problem is that the idea has a flaw where the donors do get any gains from donating which would promote donating. Hence, I gather the team to start ideating about that problem. As more ideas get poured in by my teammates and teacher, I get extremely confused and lost as I do not know what is best to do. I asked myself whether it is feasible and realistic. I am still very confused and do not know how to continue. To make it worse, next week is the submission dateline alongside with a lot of work from whitespace week and week 4. It is going to hell week and I am not sure if my team is able to pull through with everything in place. Right now, I will just stick to finishing up the basic frame of the website and continue to prototype with the idea given to us. ",
    },
    {
      week: "5",
      testimonial:
        "This was the final stretch, the hackathon was the finale of assignment 1 and also no more PFD lessons for the remaining term. I was excited and stressed at the same time, wanting it to all end so that I can focus on other work in the future. I have worked tirelessly since week 2 to code the application from start to finish based on what I had planned. Although not all of the functions were implemented, it was still as good as finished. My teammates also helped do other side hustles like slides, pitching, marketing for the website e.g email and instagram account and error handling plus coding. Everyone came together to give the final push. It turned out to be a huge success as the pitching/demo went well as well as winning the best project for our challenge topic “what does sustainability look like in Ngee Ann Polytechnic?”. We also got prizes for getting first. I received a razer mouse and a toblerone. It was also my first hackathon and I am really proud of the outcome. ",
    },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  let weeknum = document.getElementById("week");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    weeknum.innerHTML = `<p>This is the diary for Week <b style = "color: #26e042;">${testimonials[i].week}</b>:</p>`
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
    `;
  };
  window.onload = displayTestimonial;