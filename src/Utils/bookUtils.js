const BASE_URL = "http://localhost:3000/api/books";

export const fetchBooks = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data.data;
};

export const fetchBookById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data = await res.json();
  return data.data;
};

export const addBook = async (book) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book)
  });
};

export const deleteBook = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
