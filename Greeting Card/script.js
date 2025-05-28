document.addEventListener("DOMContentLoaded", () => {
  //Get form elements
  const occasionSelect = document.getElementById("occasion");
  const messageInput = document.getElementById("message");
  const colorPicker = document.getElementById("bgColor");
  const previewButton = document.getElementById("previewBtn");

  //Get Preview Elements
  const cardPreview = document.getElementById("cardPreview");
  const previewOccasion = document.getElementById("previewOccasion");
  const previewMessage = document.getElementById("previewMessage");

  previewButton.addEventListener("click", () => {
    //Get current values from the form
    const occasion = occasionSelect.value;
    const message = messageInput.value;
    const bgColor = colorPicker.value;

    //update the preview card
    previewOccasion.textContent = occasion;
    previewMessage.textContent = message;
    cardPreview.style.backgroundColor = bgColor;
  });
});
