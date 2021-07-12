import PropTypes from "prop-types";

import { Gallery } from "./ImageGallery.styled";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGalery({ images, handleOpenModal }) {
  return (
    <Gallery className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onClick={() => handleOpenModal(largeImageURL)}
          ></ImageGalleryItem>
        );
      })}
    </Gallery>
  );
}

ImageGalery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
  handleOpenModal: PropTypes.func.isRequired,
};

export default ImageGalery;
