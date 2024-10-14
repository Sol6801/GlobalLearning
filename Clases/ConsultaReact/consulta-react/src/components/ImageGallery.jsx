import React from "react"; 
import styles from './ImageGallery.module.css'

function ImageGallery({ images }){
    return(
        <div className={StyleSheet.imageGallery}>
        {
            images.map((image) => (
                <img 
                className={StyleSheet.galleryImage}
                key={images.id} 
                src={image.url} 
                alt={image.type} />
            ))
        }        
        </div>
    )
}

export default ImageGallery