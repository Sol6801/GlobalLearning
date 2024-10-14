import { useState } from 'react' //*usar api con estilo de arreglo de imagen {useState, useEffect} */
import ImageGallery from './components/ImageGallery.jsx'
import Filters from './components/Filters.jsx'
import styles from './App.module.css'

function App() {
  const images = [
    { id: 1, url: 'https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1', type: 'cats' },
    { id: 2, url: 'https://hips.hearstapps.com/hmg-prod/images/how-to-keep-ducks-call-ducks-1615457181.jpg?crop=0.670xw:1.00xh;0.157xw,0&resize=980:*', type: 'ducks' },
    { id: 3, url: 'https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo=', type: 'cats' },
    { id: 4, url: 'https://www.kalmbachfeeds.com/cdn/shop/articles/two-white-ducks-in-grass.jpg?v=1706873608', type: 'ducks' },
    { id: 5, url: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FPGDGYJXM56KI5CTHHDX3DN2WQ.jpg&w=1200', type: 'cats' },
    { id: 6, url: 'https://organicfeeds.com/wp-content/uploads/2021/03/How-To-Raise-A-Baby-Duck-scaled-1.jpg', type: 'ducks' },
  ];//* const [images2, setImages2] = useState ([]) //uso de api*/

  const [filters, setFilters] = useState({
    showCats:true,
    showDucks: true,
    showAll: true
  })

//*useEffect en API*/

// useEffect(() => {
//   const fetchImages = () => {
//     const response = await fetch('api.example')
//     const data = await response.json()
//     setImages2(data)
//   }
//   fetchImages()
// }, [])

  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value
  })
}


  const filteredImages = images.filter((image) =>{
    if(filters.showCats && image.type === 'cats') return true
    if(filters.showDucks && image.type === 'ducks') return true
    if(filters.showAll) return true
    return false
  })


  return (
    <>
    <h1 className={styles.title}>Image Gallery</h1>
    <main className={styles.App}>
      <div className={styles.galleryContainer}>
        <ImageGallery images={filteredImages}/>
      </div>
      <div className={styles.filtersContainer}>
      <Filters filters={filters} onFilterChange={handleFilterChange}/>
      </div>
    </main>
    </>
  )
}

export default App
