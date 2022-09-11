const linkControll = document.querySelectorAll(
  '.section-4__controller, .section-1__cube-controllers a, .section-2__btn'
);
linkControll.forEach((controller) => {
  controller.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

// Section 1
const slideShowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement('div');
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;
    i === 1 && div.classList.add('change');
    document.querySelector('.slideshow').appendChild(div);
  }
};

slideShowDivs();

let counter = 1;

const divs = document.querySelectorAll('.slideshow div');

const slideshow = () => {
  setInterval(() => {
    counter++;
    const div = document.querySelector('.slideshow .change');
    div.classList.remove('change');
    if (counter <= divs.length) {
      div.nextElementSibling.classList.add('change');
    } else {
      divs[0].classList.add('change');
      counter = 1;
    }
  }, 20000);
};

slideshow();

const controllers = document.querySelector('.section-1__cube-controllers');
const cube = document.querySelector('.cube');

let x = 0;
let y = 20;
let z = 0;
let rotate = true;
let interval;

controllers.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('controller-top-x') ||
    e.target.classList.contains('fa-arrow-up-x')
  ) {
    cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  }
  if (
    e.target.classList.contains('controller-bottom-x') ||
    e.target.classList.contains('fa-arrow-down-x')
  ) {
    cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  }
  if (
    e.target.classList.contains('controller-left-y') ||
    e.target.classList.contains('fa-arrow-left')
  ) {
    cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`;
  }
  if (
    e.target.classList.contains('controller-right-y') ||
    e.target.classList.contains('fa-arrow-right')
  ) {
    cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg)`;
  }
  if (
    e.target.classList.contains('controller-top-z') ||
    e.target.classList.contains('fa-arrow-down-z')
  ) {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`;
  }
  if (
    e.target.classList.contains('controller-bottom-z') ||
    e.target.classList.contains('fa-arrow-up-z')
  ) {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`;
  }
});

const playPause = () => {
  if (rotate) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};

playPause();

controllers.addEventListener('mouseover', () => {
  rotate = false;
  playPause();
});
controllers.addEventListener('mouseout', () => {
  rotate = true;
  playPause();
});

// Section 3
const section3Content = document.querySelector('.section-3__content');
window.addEventListener('scroll', () => {
  if (
    window.scrollY + window.innerHeight >=
    section3Content.offsetTop + section3Content.offsetHeight / 2
  ) {
    section3Content.classList.add('change');
  }
});

// Section 4
const watchBands = document.querySelector('.section-4__bands');
const watchCases = document.querySelector('.section-4__cases');
const topController = document.querySelector('.section-4__up-cont');
const rightController = document.querySelector('.section-4__right-cont');
const bottomController = document.querySelector('.section-4__bottom-cont');
const leftController = document.querySelector('.section-4__left-cont');

const hideControllers = () => {
  if (axisY === -280) {
    topController.classList.add('hide-controller');
  } else {
    topController.classList.remove('hide-controller');
  }
  if (axisY === 280) {
    bottomController.classList.add('hide-controller');
  } else {
    bottomController.classList.remove('hide-controller');
  }
  if (axisX === -280) {
    rightController.classList.add('hide-controller');
  } else {
    rightController.classList.remove('hide-controller');
  }
  if (axisX === 280) {
    leftController.classList.add('hide-controller');
  } else {
    leftController.classList.remove('hide-controller');
  }
};

let axisX = 0;
let axisY = 0;

topController.addEventListener('click', () => {
  watchCases.style.marginTop = `${(axisY -= 70)}rem`;
  hideControllers();
});

bottomController.addEventListener('click', () => {
  watchCases.style.marginTop = `${(axisY += 70)}rem`;
  hideControllers();
});

rightController.addEventListener('click', () => {
  watchBands.style.marginRight = `${(axisX -= 70)}rem`;
  hideControllers();
});

leftController.addEventListener('click', () => {
  watchBands.style.marginRight = `${(axisX += 70)}rem`;
  hideControllers();
});
