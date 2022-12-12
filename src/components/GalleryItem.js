import { useRef } from "react";
import {
  useGsapGalleryCategory,
  useGsapGalleryImage,
  useGsapGalleryTitle,
} from "../hooks/Gsap";

const GalleryItem = ({ image }) => {
  const galleryTitleref = useRef(null);
  const galleryCategoryRef = useRef(null);
  const galleryImageRef = useRef(null);

  useGsapGalleryTitle(galleryTitleref, galleryImageRef);
  useGsapGalleryCategory(galleryCategoryRef, galleryImageRef);
  useGsapGalleryImage(galleryImageRef);

  return (
    <div className="gallery-item">
      <h1 className="gallery-item-title" ref={galleryTitleref}>
        {image.title}
      </h1>
      <p ref={galleryCategoryRef} className="gallery-item-category">
        {image.category}
      </p>
      <div
        ref={galleryImageRef}
        className="gallery-item-img"
        style={{ backgroundImage: `url(${image.src})` }}
      ></div>
    </div>
  );
};

export default GalleryItem;
