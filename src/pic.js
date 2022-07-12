import { useState, useEffect } from "react"

export default function Pic() {

  let url = "https://api.nasa.gov/planetary/apod?api_key=34vrP3yewNAFBUbwWjaIFkOc8R7IKAzCtPMo28Vx"

  const [image, setImage] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(data => setImage(data.hdurl))
  }, [])

  return (
    <article>
      <img src={image}/>
    </article>
  )
}