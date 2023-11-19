import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from "../components/Spinner"
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from 'react-icons/md'
import BooksTable from '../components/home/BooksTable'
import BooksCard from '../components/home/BooksCard'

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table')

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:3001/books")
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            })
    }, [])

    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button
                    className="btn bg-yellow-400 text-black"
                    onClick={() => setShowType('table')}
                >
                    <span>Table</span>
                    <svg className="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                </button>
                <button
                    className="btn bg-red-400 text-black"
                    onClick={() => setShowType('card')}
                >
                    <svg className="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    <span>Card</span>
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8 text-yellow-400'>Books List</h1>
                <Link to="/books/create">
                    <MdOutlineAddBox className='text-sky-400 text-4xl' />
                </Link>
            </div>
            {loading ?
                <Spinner />
                :
                showType === 'table'
                    ?
                    (<BooksTable books={books} />)
                    :
                    (<BooksCard books={books} />)
            }
        </div>
    )
}

export default Home
