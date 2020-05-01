const booksLoaded = (newBooks) => {
  return {
    type: "BOOKS_LOADED",
    payload: newBooks,
  };
};

const booksLoading = () => {
  return {
    type: "BOOKS_LOADING",
  };
};

const bookAddedToCart = (id) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: id,
  };
};

const bookRemoveFromCart = (id) => {
  return {
    type: "BOOK_REMOVED_FROM_CART",
    payload: id,
  };
};

const booksLoadingError = () => {
  return {
    type: "BOOKS_LOADING_ERROR",
  };
};

const booksDeleteFromCart = (id) => {
  return {
    type: "DELETE_BOOKS_FROM_CART",
    payload: id,
  };
};

export {
  booksLoaded,
  booksLoading,
  bookAddedToCart,
  bookRemoveFromCart,
  booksLoadingError,
  booksDeleteFromCart,
};
