import PropTypes from "prop-types";

import { GalleryItem, Image } from "./ImageGalleryItem.styled";

function ImageGalleryItem({ webformatURL, tags, onClick }) {
  return (
    <GalleryItem >
      <Image onClick={onClick} src={webformatURL} alt={tags} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
 
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
