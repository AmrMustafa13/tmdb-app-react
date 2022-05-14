import React, { useEffect, useState } from 'react'
import HeroImage from '../HeroImage/HeroImage'
import SearchBar from '../SearchBar/SearchBar'
import FourColGrid from '../FourColGrid/FourColGrid'
import MovieThumb from '../MovieThumb/MovieThumb'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import Spinner from '../Spinner/Spinner'
import classes from './Home.module.css'
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config'

function Home() {

    const [movies, setMovies] = useState([])
    const [heroImage, setHeroImage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')

    const fetchItems = (endPoint) => {
        fetch(endPoint)
            .then((res) => res.json())
            .then((data) => {
                setMovies([...movies, ...data.results])
                setHeroImage(heroImage || data.results[0])
                setLoading(false)
                setCurrentPage(data.page)
                setTotalPages(data.total_pages)
            })
    }

    const loadMoreItems = () => {
        let endPoint = ''
        setLoading(true)
        if (searchTerm === '')
            endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`
        else
            endPoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage + 1}`
        fetchItems(endPoint)
    }

    useEffect(() => {
        setLoading(true)
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        fetchItems(endPoint)
    }, [])

    return (
        <div className={classes['rmdb-home']}>
            <HeroImage />
            <SearchBar />
            <FourColGrid />
            <Spinner />
            <LoadMoreBtn />
        </div>
    )
}

export default Home