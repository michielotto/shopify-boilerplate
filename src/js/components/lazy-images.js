export default el => {
  const context = el ? el : document;
  const images = context.querySelectorAll('[data-src]');
  const imageObs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        const target = entry.target;
        target.src = target.getAttribute('data-src');
        if(target.hasAttribute('data-srcset')) {
          target.srcset = target.getAttribute('data-srcset');
        }
        target.onload = () => {
          target.parentNode.classList.add('loaded');
          target.removeAttribute('data-src');
          if(el.classList.contains('loads-img')) {
            el.classList.add('show');
          }
          observer.unobserve(target);
        };
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '48px'
  });

  images.forEach(image => {
    imageObs.observe(image);
  });
}
