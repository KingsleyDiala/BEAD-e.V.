// Grab the HTML elements
const navMenu = document.getElementsByClassName("nav_links")[0],
  open = document.getElementById("open"),
  close = document.getElementById("close"),
  show = document.getElementsByClassName("show")[0];

close.style.display = "none";
navMenu.classList.remove("show");

// Toggle Menu Open
if (open) {
  open.addEventListener("click", () => {
    navMenu.classList.add("show");
    close.style.display = "block";
    open.style.display = "none";
  });
}

// Close Menu
if (close) {
  close.addEventListener("click", () => {
    navMenu.classList.remove("show");
    open.style.display = "block";
    close.style.display = "none";
  });
}

// Close Menu if link is click on

// Get the links
const links = document.querySelectorAll(".link");

function linkAction() {
  navMenu.classList.remove("show");
  close.style.display = "none";
  open.style.display = "block";
}

links.forEach((n) => n.addEventListener("click", linkAction));

// HIGHLIGHT LINK ON ACTIVE PAGE

let current = 0;
for (var i = 0; i < document.links.length; i++) {
  if (document.links[i].href === document.URL) {
    current = i;
  }
}
document.links[current].className = "current";

// Gallery
jQuery(document).ready(function () {
  jQuery("#nanogallery2").nanogallery2({
    // ### gallery settings ###
    thumbnailHeight: 250,
    thumbnailWidth: 200,
    thumbnailDisplayTransition: "scaleDown",
    thumbnailHoverEffect2: "scale120",
    thumbnailBaseGridHeight: 100,
    galleryDisplayTransition: "slideUp",
    galleryDisplayTransitionDuration: 500,
    // GALLERY AND THUMBNAIL LAYOUT
    galleryMosaic: [
      // default layout
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 4, r: 1 },
      { w: 2, h: 1, c: 5, r: 1 },
      { w: 2, h: 2, c: 5, r: 2 },
      { w: 1, h: 1, c: 4, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 2, h: 1, c: 3, r: 4 },
      { w: 1, h: 1, c: 5, r: 4 },
      { w: 1, h: 1, c: 6, r: 4 },
    ],
    galleryMosaicXS: [
      // layout for XS width
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 1, h: 1, c: 3, r: 4 },
    ],
    galleryMosaicSM: [
      // layout for SM width
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 1, h: 1, c: 3, r: 4 },
    ],
    galleryMaxRows: 1,
    galleryDisplayMode: "rows",
    gallerySorting: "random",
    thumbnailDisplayOrder: "random",

    thumbnailHeight: "180",
    thumbnailWidth: "220",
    thumbnailAlignment: "scaled",
    thumbnailGutterWidth: 0,
    thumbnailGutterHeight: 0,
    thumbnailBorderHorizontal: 0,
    thumbnailBorderVertical: 0,

    thumbnailToolbarImage: null,
    thumbnailToolbarAlbum: null,
    thumbnailLabel: { display: false },

    // DISPLAY ANIMATION
    // for gallery
    galleryDisplayTransitionDuration: 1500,
    // for thumbnails
    thumbnailDisplayTransition: "imageSlideUp",
    thumbnailDisplayTransitionDuration: 1200,
    thumbnailDisplayTransitionEasing: "easeInOutQuint",
    thumbnailDisplayInterval: 60,

    // THUMBNAIL HOVER ANIMATION
    thumbnailBuildInit2: "image_scale_1.15",
    thumbnailHoverEffect2:
      "thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00",
    touchAnimation: true,
    touchAutoOpenDelay: 500,

    // LIGHTBOX
    viewerToolbar: { display: false },
    viewerTools: {
      topLeft: "label",
      topRight: "fullscreenButton, closeButton",
    },

    // GALLERY THEME
    galleryTheme: {
      thumbnail: { background: "#111" },
    },

    // DEEP LINKING
    locationHash: true,

    // ### gallery content ###
    items: [
      {
        src: "../../img/projekte/001ddf65-5da5-4d2e-a844-80adf45ce747 2.jpg",
        srct: "../../img/projekte/001ddf65-5da5-4d2e-a844-80adf45ce747 2.jpg",
      },
      {
        src: "../../img/projekte/24d24b7f-24f3-4737-a03f-8c0c6caae62b.jpp",
        srct: "../../img/projekte/24d24b7f-24f3-4737-a03f-8c0c6caae62b.jpg",
      },
      {
        src: "../../img/projekte/a630dd6a-8fb9-4b8c-b40e-b5ec50f542c9.jpg",
        srct: "../../img/projekte/a630dd6a-8fb9-4b8c-b40e-b5ec50f542c9.jpg",
      },
      {
        src: "../../img/projekte/B8E73AB2-46A7-484D-A4C7-CE7256D765D7.jpg",
        srct: "../../img/projekte/B8E73AB2-46A7-484D-A4C7-CE7256D765D7.jpg",
      },
      {
        src: "../../img/projekte/cb44c36d-140f-4a56-935b-39346479a831 2.jpg",
        srct: "../../img/projekte/cb44c36d-140f-4a56-935b-39346479a831 2.jpg",
      },
      {
        src: "../../img/projekte/cd9060c3-aff0-4734-acde-c6faaa15a9b8.jpg",
        srct: "../../img/projekte/cd9060c3-aff0-4734-acde-c6faaa15a9b8.jpg",
      },
      {
        src: "../../img/projekte/IMG_3137 2.jpg",
        srct: "../../img/projekte/IMG_3137 2.jpg",
      },
      {
        src: "../../img/projekte/IMG_3145.jpg",
        srct: "../../img/projekte/IMG_3145.jpg",
      },
      {
        src: "../../img/projekte/IMG_3204.jpg",
        srct: "../../img/projekte/IMG_3204.jpg",
      },
      {
        src: "../../img/projekte/IMG_3208 2.jpg",
        srct: "../../img/projekte/IMG_3208 2.jpg",
      },
      {
        src: "../../img/projekte/IMG_3218 2.jpg",
        srct: "../../img/projekte/IMG_3218 2.jpg",
      },
    
    ],
  });
});
