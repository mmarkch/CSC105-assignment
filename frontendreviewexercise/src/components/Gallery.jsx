import React from 'react'
import "../styles/Gallery.css"

const Gallery = () => {
  return (
    <section >
    <div className='Gallery'>
    <h2>Gallery</h2>
    <ul>
        <li>
            <img width={200} src='https://upload.wikimedia.org/wikipedia/en/0/01/Sheriff_Woody.png' />
        </li>
        <li>
            <img width={200} src='https://ychef.files.bbci.co.uk/976x549/p038m41d.webp'/>
        </li>
        <li>
            <img width={200} src='https://s3.amazonaws.com/media.thecrimson.com/photos/2023/02/20/205429_1361347.jpg'/>
        </li>
    </ul>
    </div>
    </section>
  )
}

export default Gallery