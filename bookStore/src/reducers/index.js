const initialState = {
  books: [],
  loading: true,
  cartItems: [],
  totalOrdered: 0,
  error: false,
};

const updateCart = (state, action, amount) => {
  const bookId = action.payload;
  const book = state.books.find((item) => item.id === bookId);
  const bookInCart = state.cartItems.find((item) => item.id === bookId);
  const total = (state.totalOrdered += book.price * amount);
  if (bookInCart) {
    const cartItems = state.cartItems.map((item) => {
      if (item.id === bookInCart.id) {
        item.count += amount;
        item.total += book.price * amount;
      }
      return item;
    });
    if (bookInCart.count === 0) {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== bookId),
      };
    } else {
      return { ...state, cartItems };
    }
  } else {
    const newItem = {
      id: book.id,
      name: book.title,
      total: book.price,
      count: 1,
    };
    return {
      ...state,
      cartItems: state.cartItems.concat(newItem),
      totalOrdered: total,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "BOOKS_LOADED":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: false,
      };
    case "BOOKS_LOADING_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "BOOK_REMOVED_FROM_CART":
      return updateCart(state, action, -1);
    case "BOOK_ADDED_TO_CART":
      return updateCart(state, action, 1);
    case "DELETE_BOOKS_FROM_CART":
      //return deleteBook();
      const bookId = action.payload;
      const book = state.cartItems.find((item) => item.id === bookId);
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== bookId),
        totalOrdered: (state.totalOrdered -= book.total),
      };

    default:
      return state;
  }
};

export default reducer;
