import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";

import Spinner from "../spinner";
import { withBookstoreService } from "../hoc";
import ErrorIndicator from "../error-indicator";
import {
  booksLoaded,
  booksLoading,
  bookAddedToCart,
  booksLoadingError,
} from "../../actions";
import { compose } from "../../utils";

import "./book-list.css";

const BookList = ({ books, bookAddedToCart, error }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              bookAddedToCart={() => bookAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    // 1. receive data
    const {
      bookstoreService,
      booksLoaded,
      booksLoading,
      booksLoadingError,
    } = this.props;
    booksLoading();
    bookstoreService
      .getBooks()
      .then((data) => booksLoaded(data))
      .catch((error) => booksLoadingError(error));
    //const data = bookstoreService.getBooks();

    // 2. dispacth action to store
    //this.props.booksLoaded(data);
  }

  render() {
    const { books, loading, error, bookAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    } else if (error) {
      return <ErrorIndicator />;
    }
    return <BookList books={books} bookAddedToCart={bookAddedToCart} />;
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = {
  booksLoaded,
  booksLoading,
  bookAddedToCart,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
