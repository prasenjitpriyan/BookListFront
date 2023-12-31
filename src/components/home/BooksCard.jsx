import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksCard = ({ books }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((item) => (
                <div key={item._id} className="">
                    <div className="border-2 border-gray-400 rounded-lg px-4 py-2 m-4 relative hover:shadow-lg">
                        <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-400 rounded-lg text-white">
                            {item.publishYear}
                        </h2>
                        <h4 className="my-2">{item._id}</h4>
                        <div className="card-actions">
                            <PiBookOpenTextLight className="text-red-400 text-2xl" />
                            <h2 className="my-1">{item.title}</h2>
                        </div>
                        <div className="card-actions">
                            <BiUserCircle className="text-red-400 text-2xl" />
                            <h2 className="my-1">{item.author}</h2>
                        </div>
                        <div className="flex justify-between items-center gap-x-2 mt-4">
                            <Link to={`/books/details/${item._id}`}>
                                <BsInfoCircle className="text-2xl text-green-400" />
                            </Link>
                            <Link to={`/books/edit/${item._id}`}>
                                <AiOutlineEdit className="text-2xl text-yellow-400" />
                            </Link>
                            <Link to={`/books/delete/${item._id}`}>
                                <MdOutlineDelete className="text-2xl text-red-400" />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BooksCard;
