export const headerScroll = (elementId: string) => {
  const elementHamburgerButton = document.getElementById(elementId)!;
  addEventListener("scroll", function () {
    const scroll = window.pageYOffset;
    if (scroll > 160) {
      elementHamburgerButton.classList.add("is-scroll")!;
    } else {
      elementHamburgerButton.classList.remove("is-scroll")!;
    }
  });
};
export const slideNavAnimation = () => {
  const elementSlideNav = document.getElementById("slide-nav")!;
  elementSlideNav.classList.toggle("is-active");
  const elementSlideNavItem = document.querySelectorAll(".c-slide-nav-item")!;
  elementSlideNavItem.forEach((item, index) => {
    const order = index + 1;
    const delay = order * 200;
    setTimeout(() => {
      item.classList.toggle("is-order");
    }, delay);
  });
  const elementSlideNavIsActive =
    elementSlideNav.classList.contains("is-active")!;
  const elementHamburgerOpen = document.getElementById("hamburger-open")!;
  const elementHamburgerClose = document.getElementById("hamburger-close")!;
  if (elementSlideNavIsActive === false) {
    elementHamburgerOpen.classList.add("is-visible");
    elementHamburgerClose.classList.remove("is-visible");
  } else {
    elementHamburgerOpen.classList.remove("is-visible");
    elementHamburgerClose.classList.add("is-visible");
  }
};
