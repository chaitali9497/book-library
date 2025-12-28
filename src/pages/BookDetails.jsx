import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBookById, deleteBook } from "../Utils/bookUtils";
import "./BookDetails.css";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch book by ID
  useEffect(() => {
    const loadBook = async () => {
      try {
        const data = await fetchBookById(id);
        setBook(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadBook();
  }, [id]);

  // 🔹 Delete book (API)
  const confirmDelete = async () => {
    try {
      await deleteBook(id);
      navigate("/books/All?deleted=true");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <h2 className="not-found">Loading...</h2>;
  if (!book) return <h2 className="not-found">Book Not Found</h2>;

  return (
    <div className="details-container">
      <div className="details-box">
        <h1>{book.title}</h1>

        <p>
          <span className="label">Author:</span> {book.author}
        </p>
        <p>
          <span className="label">Rating:</span> {book.rating}/5
        </p>
        <p>
          <span className="label">Description:</span> {book.description}
        </p>

        <div className="details-buttons">
          <button className="back-link" onClick={() => navigate(-1)}>
            Back
          </button>

          <button className="delete-btn" onClick={() => setShowConfirm(true)}>
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

                <button
                  className="cancel-btn"
                  onClick={() => setShowConfirm(false)}
                >
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
