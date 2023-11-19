import { useState } from 'react';
import BackButton from "../components/BackButton";
import Spinner from '../components/Spinner';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack'

const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar()

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear,
        };
        setLoading(true);
        axios
            .post("http://localhost:3001/books", data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book Created Successfully', { variant: 'success' })
                navigate('/')
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error', { variant: 'error' })
                console.log(error);
            })
    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4 text-yellow-400'>Create Book</h1>
            {loading ? (<Spinner />) : (
                <div className='flex justify-center items-center'>
                    <div className='form-control w-full max-w-xl'>
                        <label className='label'>Title</label>
                        <input
                            type='text'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='input input-bordered w-full max-w-2xl'
                        />
                        <label className='label'>Author</label>
                        <input
                            type='text'
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className='input input-bordered w-full max-w-2xl'
                        />
                        <label className='label'>Publish Year</label>
                        <input
                            type='text'
                            value={publishYear}
                            onChange={(e) => setPublishYear(e.target.value)}
                            className='input input-bordered w-full max-w-2xl'
                        />
                        <button className='p-2 bg-yellow-400 m-8 text-black' onClick={handleSaveBook}>
                            Save
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default CreateBook
