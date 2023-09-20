import { books } from "./books_data";
import Book_91 from "./Book_91";

const Booklist_91 = () => {
  console.log("books_data", books);
  return (
    <section className="booklist">
      {books.map((book) => {
        const { id, img, title, author } = book;
        return <Book_91 key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
};

export default Booklist_91;
