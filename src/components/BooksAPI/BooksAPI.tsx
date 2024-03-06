import React, { useEffect, useState } from 'react';

type Book = {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        imageLinks: {
            thumbnail: string;
        };
    };
};

const BooksAPI: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8888/main.php');
            const data = await response.json();
            setBooks(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            {books.map((book) => (
                <div key={book.id}>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                </div>
            ))}
        </div>
    );
};

export default BooksAPI;
