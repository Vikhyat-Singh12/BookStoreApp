import Book from "../model/book_model.js";

export const getBook = async (req, res) => {
    try {
        // Use await to get the actual data from the database
        const books = await Book.find(); // Assuming 'books' is the collection name
        res.status(200).json(books); // Send the list of books as a response
    } catch (error) {
        console.log("Error: ", error); // Log the error
        res.status(500).json({ message: "Server error", error }); // Return a 500 error response with error details
    }
};
