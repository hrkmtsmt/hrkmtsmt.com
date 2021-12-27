export function startAnimateEntersScreen(effect: string) {
  const elementsTarget = document.querySelectorAll('.a-target');
  const callback = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(effect);
        observer.unobserve(entry.target);
      }
    });
  };
  const options = {
    rootMargin: '0px',
    threshold: 0,
  };
  const io = new IntersectionObserver(callback, options);
  elementsTarget.forEach((target) => {
    io.observe(target);
  });
}
