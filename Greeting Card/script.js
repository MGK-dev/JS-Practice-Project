document.addEventListener("DOMContentLoaded", () => {
  //Get form elements
  const occasionSelect = document.getElementById("occasion");
  const messageInput = document.getElementById("message");
  const colorPicker = document.getElementById("bgColor");
  const previewButton = document.getElementById("previewBtn");
  const downloadButton = document.getElementById("downloadBtn");

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

  downloadButton.addEventListener("click", () => {
    html2canvas(cardPreview).then((canvas) => {
      const link = document.createElement("a");
      link.download = "greeting-card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });
});
