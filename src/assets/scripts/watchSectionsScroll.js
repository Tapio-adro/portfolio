let sections
let navLinks

function watchSectionsScroll() {
  sections = document.querySelectorAll("section");
  navLinks = document.querySelectorAll("nav a");
  checkSectionsScroll(sections, navLinks);

  window.addEventListener("scroll", sectionsScrollEventHandler);
}
function checkSectionsScroll () {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    if (top >= offset && offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
      });
      
      document
        .querySelector("nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });
}
function sectionsScrollEventHandler() {
  checkSectionsScroll();
}
function stopWatchingSectionsScroll() {
  window.removeEventListener("scroll", sectionsScrollEventHandler);
}



export { watchSectionsScroll, stopWatchingSectionsScroll };