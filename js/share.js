const shareButton = document.getElementById("share-button");
// const shareDialog = document.getElementById("share-dialog");
// const closeButton = document.getElementById("close-button");

shareButton.addEventListener("click", (event) => {
  if (navigator.share) {
    navigator
      .share({
        title: "Floriaaan | Portfolio",
        url: "https://floriaaan.github.io",
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch(console.error);
  } else {
    // shareDialog.classList.add("is-open");
  }
});

// closeButton.addEventListener("click", (event) => {
//   shareDialog.classList.remove("is-open");
// });
