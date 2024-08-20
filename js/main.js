(function () {
  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return

    if (document.documentElement.clientWidth > 900) return

    if (burgerIcon) {
      e.preventDefault()
    }

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }
  }
})();

const btn = document.querySelector('.about__img-button')
const modal = document.querySelector('.modal')
const body = document.body
// modal
const openModal = () => {
  body.classList.add('body--modal-opened')
}
const closeModal = () => {
  body.classList.remove('body--modal-opened')
}

btn.addEventListener('click', (openModal))

modal.addEventListener('click', event => {
  const target = event.target
  if (target && target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
    closeModal()
    console.log('успешно')
  }
});

document.addEventListener('keydown', event => {
  if (event.code === 'Escape' && body.classList.contains('body--modal-opened')) {
    body.classList.toggle('body--modal-opened')
  }
});
// tabs
const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', toggleTab)
function toggleTab(e) {
  const tabControl = e.target.closest('.tab-control__link')

  // остановка функции если а)есть класс .tab-control__link б)если кнопка активная+предотвращение дефолтного поведения кнопок
  if (!tabControl) return
  e.preventDefault()
  if (tabControl.classList.contains('tab-control__link--active')) return

  const tabContentId = tabControl.getAttribute('href')
  const tabContent = document.querySelector(tabContentId)
  const activeControl = document.querySelector('.tab-control__link--active')
  const activeContent = document.querySelector('.tab-content--show')

  // включение-выключение активной подстветки кнопок(условие на всякий случай,например если кто то удалить модификаторы в html)
  if (activeControl) {
    activeControl.classList.remove('tab-control__link--active')
  }
  tabControl.classList.add('tab-control__link--active')

  // включение-выключение контента в табах(условие на всякий случай,например если кто то удалить модификаторы в html)
  if (activeContent) {
    activeContent.classList.remove('tab-content--show')
  }
  tabContent.classList.add('tab-content--show')
};
// accordion
const accordionLists = document.querySelectorAll('.accordion__list');

accordionLists.forEach(el => {

  el.addEventListener('click', (e) => {
    const accordionList = e.currentTarget
    const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
    const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
    const accordionControl = e.target.closest('.accordion-list__control');
    if(!accordionControl) return
    e.preventDefault()
    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;

    if(accordionOpenedItem && accordionItem != accordionOpenedItem) {
      accordionOpenedItem.classList.remove('accordion-list__item--opened');
      accordionOpenedContent.style.maxHeight = null;
    }
    accordionItem.classList.toggle('accordion-list__item--opened');

    if (accordionItem.classList.contains('accordion-list__item--opened')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = null;
    }
  });
});

// slider/swiper-gallery
const swiper = new Swiper('.gallery__slider', {
  slidesPerView: 1.5,
  spaceBetween: 15,
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.gallery__next',
    prevEl: '.gallery__prev',
  },
  breakpoints: {
    451: {
      slidesPerView: 2,
    },
    601: {
      slidesPerView: 3,
    },
    801: {
      spaceBetween: 32,
    },
    1101: {
      slidesPerView: 4,
    }
  }
});
// slider/swiper-testimonials
new Swiper('.testimonials__slider', {
  initialSlide: 1,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    901: {
      slidesPerView: 1.5,
    },
    1201: {
      slidesPerView: 2.05,
    },
  }
});
// tel mask
const telInputs = document.querySelectorAll('input[type="tel"]')

const im = new Inputmask('+7 (999) 999-99-99')
im.mask(telInputs)