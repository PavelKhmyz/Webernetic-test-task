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

  if (event.target === overlay && overlay) {
    overlay.style.display = 'none';
  }

  if (event.currentTarget === closeButton && overlay) {
    overlay.style.display = 'none';
  }
}
