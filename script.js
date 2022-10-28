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