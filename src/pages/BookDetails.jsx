import { useParams,  useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteBook } from "../Utils/booksSlice";
import "./BookDetails.css";


function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
  const book = useSelector((state) =>
    state.books.find((b) => b.id == id)
  );

  const [showConfirm, setShowConfirm] = useState(false);

  if (!book) {
    return <h2 className="not-found">Book Not Found</h2>;
  }

  function handleDelete() {
    setShowConfirm(true); 
  }

  function confirmDelete() {
    dispatch(deleteBook(book.id));
    navigate("/books/All?deleted=true");
  }

  return (
    <div className="details-container">
      <div className="details-box">

        <h1>{book.title}</h1>

        <p><span className="label">Author:</span> {book.author}</p>
        <p><span className="label">Rating:</span> {book.rating}/5</p>
        <p><span className="label">Description:</span> {book.description}</p>

        <div className="details-buttons">
        
            <button className="back-link" onClick={() => navigate(-1)}> Back</button>
         
          <button className="delete-btn" onClick={handleDelete}>
            Delete Book
          </button>
        </div>

       
        {showConfirm && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h2>Delete Book?</h2>
              <p>This action cannot be undone.</p>

              <div className="modal-actions">
                <button className="confirm-btn" onClick={confirmDelete}>
                  Yes, Delete
                </button>

                <button className="cancel-btn" onClick={() => setShowConfirm(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default BookDetails;
