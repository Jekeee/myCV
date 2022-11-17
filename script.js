let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector(".header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.crollTop;
const containHide = () => header.classList.contains("hide");
const upward = document.querySelector('.upward');

window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > 40
  ) {
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove("hide");
  }

  upward.classList.toggle('active', window.scrollY > 200);

  lastScroll = scrollPosition();
});

function scrollToTop(){
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  })
}

