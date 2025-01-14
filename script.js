// Liste der verfügbaren Bilder
const images = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png",
    "images/image5.png",
    "images/image6.png",
    "images/image7.png",
    "images/image8.png",
    "images/image9.png",
    "images/image10.png",
    "images/image11.png",
    "images/image12.png",
    "images/image13.png",
    "images/image14.png",
    "images/image15.png",
    "images/image16.png",
    "images/image17.png",
    "images/image18.png",
    "images/image19.png",
    "images/image20.png",
  ];
  
  // Referenz auf das Bild-Element
  const taskImage = document.getElementById("task-image");
  
  // Funktion zum Ändern des Bildes
  taskImage.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    taskImage.src = images[randomIndex];
  });
  