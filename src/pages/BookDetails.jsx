import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addComment } from "../features/commentSlice";

const BookDetails = () => {
    const { bookId } = useParams();
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comment.comments[bookId] || []);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if (newComment.trim()) {
            dispatch(addComment({ bookId, comment: newComment }));
            setNewComment("");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-10">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-3xl font-bold mb-4 text-center">Book Details 📖</h2>
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">Book ID: {bookId}</h3>

                {/* Comment Input */}
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <button
                        onClick={handleAddComment}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-md transition"
                    >
                        Submit
                    </button>
                </div>

                {/* Display Comments */}
                <h3 className="text-xl font-semibold mt-6">Comments 📝</h3>
                <ul className="mt-2 space-y-2">
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <li
                                key={index}
                                className="bg-gray-700 px-4 py-2 rounded-md shadow-md"
                            >
                            {comment}
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-400">No comments yet. Be the first to add one!</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default BookDetails;
