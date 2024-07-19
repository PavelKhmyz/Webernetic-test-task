import form from '../login-form/login-form.html?raw';

document.querySelector('.modal-button')?.addEventListener('click', () => openModal());
document.querySelector('.modal-overlay')?.addEventListener('click', (event: Event) => closeModal(event));
document.querySelector('.modal__close-button')?.addEventListener('click', (event: Event) => closeModal(event));

const openModal = () => {
  const overlay: HTMLElement | null = document.querySelector('.modal-overlay');

  if(overlay) {
    overlay.style.display = 'flex';
  }
};

const closeModal = (event: Event) => {
  const overlay: HTMLElement | null = document.querySelector('.modal-overlay');
  const closeButton: HTMLElement | null = document.querySelector('.modal__close-button');

  if(!overlay || !closeButton) {
    return;
  }

  if (event.target === overlay) {
    overlay.style.display = 'none';
  }

  if (event.currentTarget === closeButton) {
    overlay.style.display = 'none';
  }
}

const putContent = (template: string) => {
  const modal = document.querySelector('.modal');

  if(modal) {
    modal.insertAdjacentHTML('beforeend', template);
  }  
}

putContent(form);
