//your code here
let draggedDiv = null;

window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');

  images.forEach(image => {
    image.addEventListener('dragstart', (e) => {
      draggedDiv = image;
      image.classList.add('selected');
    });

    image.addEventListener('dragend', (e) => {
      draggedDiv = null;
      image.classList.remove('selected');
    });

    image.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    image.addEventListener('drop', (e) => {
      e.preventDefault();
      if (draggedDiv && draggedDiv !== image) {
        
        const draggedStyle = draggedDiv.style.backgroundImage;
        const droppedStyle = image.style.backgroundImage;

        draggedDiv.style.backgroundImage = droppedStyle;
        image.style.backgroundImage = draggedStyle;
      }
      
      images.forEach(img => img.classList.remove('selected'));
    });
  });

 
  images.forEach(image => {
    const computedStyle = getComputedStyle(image);
    image.style.backgroundImage = computedStyle.backgroundImage;
  });
});
