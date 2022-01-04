const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', () => {

    if(link.getAttribute('name') === 'projects'){
      document.querySelector('.link.active').classList.toggle('active');
      link.classList.toggle('active');   
    } 
    if(link.getAttribute('name') === 'about')
    {
      document.querySelector('.link.active').classList.toggle('active');
      link.classList.toggle('active');
    }
  })
})

const divs = document.querySelectorAll("div");
window.onscroll = () => {
  var current = "";

  divs.forEach((div) => {
    const sectionTop = div.offsetTop;
    if (pageYOffset >= sectionTop - 0) {
      current = div.getAttribute("id"); }
      console.log(current)
  });


  links.forEach(link => {
   /* link.classList.remove("active")*/

   if (current==="section1"){
    link.classList.remove("active")
    if(link.getAttribute('name') === 'projects'){
      link.classList.add("active");
    }
  }

  else if (current==="section2"){
    link.classList.remove("active")
    if(link.getAttribute('name') === 'about'){
      link.classList.add("active");
    }
  }

  })


};
