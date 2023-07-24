const modal_texts = document.querySelectorAll('.modal_text');
const modal_btns = document.querySelectorAll('.modalBtn');
const close_btns = document.querySelectorAll('.close');
const background = document.querySelector('.background');

modal_btns.forEach((modal_btn, index) => {
    modal_btn.addEventListener('click', () => {
      closeModalTexts();
      modal_texts[index].classList.toggle('show');
      background.classList.add('mist');
    });
  });

close_btns.forEach((close_btn, index) => {
  close_btn.addEventListener('click', () => {
    modal_texts[index].classList.remove('show');
    background.classList.remove('mist');
  });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.modal_text') && !event.target.closest('.modalBtn')) {
      modal_texts.forEach((modal_text) => {
        modal_text.classList.remove('show');
        background.classList.remove('mist');
      });
    }
  });

  function closeModalTexts() {
    modal_texts.forEach((modal_text) => {
      modal_text.classList.remove('show');
    });
    background.classList.remove('mist');
  }