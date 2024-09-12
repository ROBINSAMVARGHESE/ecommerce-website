import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

const ExampleCarouselImage = ({ src, alt, width, height }) => {
    return (
        <Image src={src} alt={alt} fluid style={{ width: width, height: height, objectFit: 'cover' }} />
    );
};

ExampleCarouselImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};
ExampleCarouselImage.defaultProps = {
    width: '100%'
}
export default ExampleCarouselImage;
