import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({
  id,
  source,
  thumbnail,
  caption,
  description,
  live_link,
  github,
  position,
  toggleLightbox,
}) => {
  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      toggleLightbox(position)
    },
    [position, toggleLightbox]
  )

  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      {/* <a className="image fit thumb" href={source} onClick={onClick}>
        <img src={thumbnail} />
      </a> */}
      <img src={thumbnail} />
      <h3>{caption}</h3>
      <p>{description}</p>
      <a href={live_link}>Live Link</a>
      <a href={github}>{" "}GitHub</a>
    </article>
  )
}

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
}

export default GalleryItem
