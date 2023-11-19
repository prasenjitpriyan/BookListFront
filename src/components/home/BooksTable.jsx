import { Link } from 'react-router-dom'
import { MdOutlineDelete } from 'react-icons/md'
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

const BooksTable = ({ books }) => {
    return (
        (
            <div className="overflow-x-auto">
                <table className='table text-gray-500'>
                    <thead>
                        <tr className='text-sky-400 text-center text-xl'>
                            <th>No</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publish Year</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (

                            <tr key={book._id} className='text-center'>
                                <td className='text-yellow-400'>{index + 1}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.publishYear}</td>
                                <td>
                                    <div className='flex justify-center gap-x-4'>
                                        <Link to={`/books/details/${book._id}`}>
                                            <BsInfoCircle className="text-2xl text-green-400" />
                                        </Link>
                                        <Link to={`/books/edit/${book._id}`}>
                                            <AiOutlineEdit className="text-2xl text-yellow-400" />
                                        </Link>
                                        <Link to={`/books/delete/${book._id}`}>
                                            <MdOutlineDelete className="text-2xl text-red-400" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    )
}

export default BooksTable
