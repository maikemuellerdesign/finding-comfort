// Liste der verfügbaren Bilder
const images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png"
  ];
  
  // Referenz auf das Bild-Element
  const taskImage = document.getElementById("task-image");
  
  // Funktion zum Ändern des Bildes
  taskImage.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    taskImage.src = images[randomIndex];
  });
  