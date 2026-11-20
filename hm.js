const galleryItems = [
  {
    preview: "https://picsum.photos/id/1015/340/250",
    original: "https://picsum.photos/id/1015/1280/800",
    description: "Річка в горах",
  },
  {
    preview: "https://picsum.photos/id/1016/340/250",
    original: "https://picsum.photos/id/1016/1280/800",
    description: "Гірський пейзаж",
  },
  {
    preview: "https://picsum.photos/id/1018/340/250",
    original: "https://picsum.photos/id/1018/1280/800",
    description: "Озеро",
  },
  {
    preview: "https://picsum.photos/id/1019/340/250",
    original: "https://picsum.photos/id/1019/1280/800",
    description: "Ліс",
  },
  {
    preview: "https://picsum.photos/id/1024/340/250",
    original: "https://picsum.photos/id/1024/1280/800",
    description: "Птах",
  },
  {
    preview: "https://picsum.photos/id/1036/340/250",
    original: "https://picsum.photos/id/1036/1280/800",
    description: "Снігові гори",
  },
];

const galleryContainer = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `
    )
    .join("");
}

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

function openModal(imageUrl, altText) {
  lightbox.classList.remove("is-hidden");
  lightboxImage.src = imageUrl;
  lightboxImage.alt = altText;
}

function closeModal() {
  lightbox.classList.add("is-hidden");
  lightboxImage.src = "";
  lightboxImage.alt = "";
}

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;

  const largeImageUrl = event.target.dataset.source;
  const imageAlt = event.target.alt;

  openModal(largeImageUrl, imageAlt);
});

lightbox.addEventListener("click", (event) => {
  if (event.target.dataset.action === "close-lightbox") {
    closeModal();
  }
});