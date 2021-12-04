export const animateInOrderOnAddClassName = () => {
  const elementSlideNav = document.getElementById('menu')!;
  elementSlideNav.classList.toggle('is-active');
  const elementSlideNavItem = document.querySelectorAll('.c-menu-item')!;
  elementSlideNavItem.forEach((item, index) => {
    const order = index + 1;
    const delay = order * 200;
    setTimeout(() => {
      item.classList.toggle('is-order');
    }, delay);
  });
  const containsClassNameIsActive =
    elementSlideNav.classList.contains('is-active')!;
  const elementOpenButton = document.getElementById('hamburger-open')!;
  const elementCloseButton = document.getElementById('hamburger-close')!;
  if (containsClassNameIsActive === false) {
    elementOpenButton.classList.add('is-visible');
    elementCloseButton.classList.remove('is-visible');
  } else {
    elementOpenButton.classList.remove('is-visible');
    elementCloseButton.classList.add('is-visible');
  }
};
