"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Book =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Book, _React$Component);

  function Book() {
    _classCallCheck(this, Book);

    return _possibleConstructorReturn(this, _getPrototypeOf(Book).apply(this, arguments));
  }

  _createClass(Book, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          link = _this$props.link,
          imgLink = _this$props.imgLink,
          imgAlt = _this$props.imgAlt,
          author = _this$props.author,
          publisher = _this$props.publisher,
          published = _this$props.published,
          desc = _this$props.desc;
      return React.createElement("div", {
        className: "book"
      }, React.createElement("div", {
        className: "book__title"
      }, React.createElement("h2", null, React.createElement("a", {
        href: link,
        rel: "noopener noreferrer",
        target: "_blank"
      }, title))), React.createElement("div", {
        className: "book__img-block"
      }, React.createElement("img", {
        src: imgLink,
        alt: imgAlt,
        className: "book__img"
      })), React.createElement("div", {
        className: "book__desc"
      }, React.createElement("div", {
        className: "book__field",
        title: "author"
      }, React.createElement("strong", null, "Author:"), " ", author || 'Not Labeled'), React.createElement("div", {
        className: "book__field"
      }, React.createElement("strong", null, "Publisher:"), " ", publisher), React.createElement("div", {
        className: "book__field"
      }, React.createElement("strong", null, "Published:"), " ", published || 'n/a'), React.createElement("div", {
        className: "book__field"
      }, desc)));
    }
  }]);

  return Book;
}(React.Component);

var Books =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Books, _React$Component2);

  function Books() {
    _classCallCheck(this, Books);

    return _possibleConstructorReturn(this, _getPrototypeOf(Books).apply(this, arguments));
  }

  _createClass(Books, [{
    key: "render",
    value: function render() {
      if (this.props.loading) {
        return React.createElement("div", {
          className: "preloader"
        }, React.createElement("div", {
          className: "preloader__text"
        }, "Content is loading..."));
      } else if (this.props.volumes.length > 1) {
        return this.props.volumes.map(function (book, id) {
          return React.createElement(Book, {
            key: id,
            title: book.title,
            link: book.link,
            author: book.author,
            imgLink: book.imgLink,
            imgAlt: book.title,
            publisher: book.publisher,
            published: book.published,
            desc: book.desc
          });
        });
      } else {
        return React.createElement("div", {
          className: "flash-info"
        }, "Nothing to show...");
      }
    }
  }]);

  return Books;
}(React.Component);

var Search =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Search, _React$Component3);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, _getPrototypeOf(Search).apply(this, arguments));
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      var _this = this;

      return React.createElement("div", {
        id: "search-block"
      }, React.createElement("div", {
        className: "clear",
        style: {
          'display': this.props.query.length > 0 ? 'block' : 'none'
        },
        onClick: this.props.onClear
      }, React.createElement("div", {
        className: "clear__left"
      }), React.createElement("div", {
        className: "clear__right"
      })), React.createElement("input", {
        type: "text",
        value: this.props.query,
        onChange: this.props.onChange,
        onKeyPress: function onKeyPress(e) {
          // imitating button click on tapping Enter key
          if (e.key === 'Enter') {
            _this.props.onClick();
          }
        },
        placeholder: "Type author, book name, subject..."
      }), React.createElement("button", {
        id: "search-btn",
        onClick: this.props.onClick
      }, "Search"));
    }
  }]);

  return Search;
}(React.Component);

var extractInfo = function extractInfo(res) {
  var items = res.items;
  if (!items) return [];
  var dummyImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/2000px-Placeholder_book.svg.png';
  return items.map(function (book) {
    var info = book.volumeInfo;
    var title = info.title,
        publisher = info.publisher,
        pageCount = info.pageCount;
    var link = info.previewLink;
    var imgLink = info.imageLinks ? info.imageLinks.thumbnail : dummyImg;
    var author = info.authors;
    var published = info.publishedDate;
    var desc = info.subtitle;
    return {
      title: title,
      link: link,
      imgLink: imgLink,
      author: author,
      publisher: publisher,
      published: published,
      desc: desc,
      pageCount: pageCount
    };
  });
};

function fetchBooks(query) {
  var url = 'https://www.googleapis.com/books/v1/volumes?q=' + query;
  return fetch(url).then(function (res) {
    return res.json();
  }).then(extractInfo).catch(console.log);
}

var Base =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Base, _React$Component4);

  function Base(props) {
    var _this2;

    _classCallCheck(this, Base);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Base).call(this, props));
    _this2.state = {
      query: '',
      loading: false,
      found: []
    };
    _this2.counter = 0;
    return _this2;
  }

  _createClass(Base, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        query: e.target.value
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this3 = this;

      var query = this.state.query;
      if (!query) return;
      this.setState({
        loading: true
      });
      fetchBooks(query).then(function (found) {
        _this3.setState({
          found: found,
          loading: false
        });
      });
    }
  }, {
    key: "handleClear",
    value: function handleClear() {
      this.setState({
        query: '',
        found: []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement("div", {
        id: "wrapper"
      }, React.createElement("header", null, React.createElement("h1", null, "Book Keepers")), React.createElement("div", {
        id: "content"
      }, React.createElement(Search, {
        onChange: function onChange(e) {
          return _this4.handleChange(e);
        },
        query: this.state.query,
        onClick: function onClick() {
          return _this4.handleClick();
        },
        onClear: function onClear() {
          return _this4.handleClear();
        }
      })), React.createElement("div", {
        id: "books"
      }, React.createElement(Books, {
        volumes: this.state.found,
        loading: this.state.loading
      })));
    }
  }]);

  return Base;
}(React.Component);

ReactDOM.render(React.createElement(Base, null), document.getElementById('container'));