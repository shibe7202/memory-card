import { useState, useEffect } from 'react'

function Card({ imageID, onClick }) {
    const [data, setData] = useState(null)
    const url = 'https://api.artic.edu/api/v1/artworks/' + imageID + '?fields=id,title,image_id'
    const imageUrl = data ? data.config.iiif_url + '/' + data.data.image_id + '/full/843,/0/default.jpg' : null
    const title = data ? data.data.title : null

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const result = await response.json()
            setData(result)
        }
        fetchData()
    }, [url])

    return (
        <div className='card' onClick={onClick}>
            <img className='cardImage' src={imageUrl} alt={title} id={imageID} />
            <p className='cardTitle' id={imageID}>{title}</p>
        </div>
    )
}

export default Card