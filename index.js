"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./App.css");

var _InfiniteList = _interopRequireDefault(require("./InfiniteList"));

var _TextComponent = _interopRequireDefault(require("./TextComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var randomText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis, felis eleifend feugiat dictum, ante risus feugiat mi, non finibus sapien urna vel dui. Praesent vestibulum, dolor at consectetur bibendum, enim nisl imperdiet lectus, eget lacinia libero diam eget risus. Mauris eu mauris sit amet tortor vestibulum varius. Morbi turpis libero, facilisis et mattis cursus, rhoncus pulvinar nisl. Quisque lobortis, urna et iaculis condimentum, magna mi vehicula diam, lacinia malesuada nulla nibh ut urna. Ut non aliquam massa, vel scelerisque turpis. Etiam in nulla sem. Donec quis malesuada quam, nec egestas ante. Ut mattis iaculis dignissim. Duis dapibus arcu elit, quis volutpat mauris laoreet et. Nulla sem elit, ultricies in molestie at, finibus sit amet arcu. Proin gravida dolor id diam rutrum ultricies quis eget enim. Etiam vestibulum pretium placerat. Nullam fermentum pulvinar sollicitudin.';
var data = new Array(1000).fill().map(function () {
  return {
    key: "".concat(Math.random(), "-").concat(Date.now()),
    value: randomText.slice(0, Math.floor(Math.random() * randomText.length))
  };
});
console.log(data);

function App() {
  return _react.default.createElement("div", {
    style: {
      position: "relative",
      padding: '8px',
      height: '100vh',
      boxSizing: 'border-box'
    }
  }, _react.default.createElement(_InfiniteList.default, {
    itemList: data,
    ItemComponent: _TextComponent.default
  }));
}

var _default = App;
exports.default = _default;
"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('renders learn react link', function () {
  var _render = (0, _react2.render)(_react.default.createElement(_App.default, null)),
      getByText = _render.getByText;

  var linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ramda = require("ramda");

var _InfiniteListModule = _interopRequireDefault(require("./InfiniteList.module.css"));

var _InfiniteList = _interopRequireDefault(require("./InfiniteList.proptypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RenderedItemComponent = function RenderedItemComponent(_ref) {
  var top = _ref.top,
      item = _ref.item,
      addItemRef = _ref.addItemRef,
      ItemComponent = _ref.ItemComponent;
  return _react.default.createElement("div", {
    style: {
      position: 'absolute',
      top: top,
      width: '100%'
    },
    ref: addItemRef
  }, _react.default.createElement("div", {
    style: {
      paddingBottom: '8px'
    }
  }, _react.default.createElement(ItemComponent, item)));
};

var InfiniteList = /*#__PURE__*/function (_Component) {
  _inherits(InfiniteList, _Component);

  function InfiniteList(props) {
    var _this;

    _classCallCheck(this, InfiniteList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfiniteList).call(this, props));

    _this.handleScroll = function (event) {
      var itemList = _this.props.itemList;
      var currentMax = _this.state.currentMax;
      var bottom = event.target.scrollHeight - event.target.scrollTop <= event.target.clientHeight * 2 + 10;

      if (bottom && currentMax < itemList.length) {
        _this.handleScollToBottom(event.target.scrollTop - event.target.clientHeight);

        return;
      }

      _this.setListIntervalToRender(event.target.scrollTop - Math.floor(event.target.clientHeight / 2), event.target.clientHeight * 2);
    };

    _this.setListIntervalToRender = function (scrollTop, clientHeight) {
      var _this$state = _this.state,
          itemPosition = _this$state.itemPosition,
          currentMax = _this$state.currentMax;
      var beginList = itemPosition.findIndex(function (position) {
        return position >= scrollTop;
      });
      if (beginList > 0) beginList -= 1;
      var endList = itemPosition.findIndex(function (position) {
        return position >= clientHeight + scrollTop;
      });
      if (endList === -1) endList = currentMax;

      _this.setState({
        beginList: beginList,
        endList: endList
      });
    };

    _this.addItemRef = function (itemComp) {
      if (itemComp) {
        _this.itemRef.push(itemComp);
      }
    };

    _this.renderList = function () {
      var _this$props = _this.props,
          itemList = _this$props.itemList,
          ItemComponent = _this$props.ItemComponent;
      var _this$state2 = _this.state,
          beginList = _this$state2.beginList,
          endList = _this$state2.endList,
          itemPosition = _this$state2.itemPosition;
      _this.itemRef = [];
      var renderedItemList = itemList.slice(beginList, endList).map(function (item, index) {
        return _react.default.createElement(RenderedItemComponent, {
          key: item.key,
          addItemRef: _this.addItemRef,
          top: itemPosition[index + beginList],
          ItemComponent: ItemComponent,
          item: item
        });
      });
      return renderedItemList;
    };

    _this.calculateItemPosition = function () {
      var newItemPosition = _this.state.itemHeight.reduce(function (heightArr, currentHeight) {
        var position = currentHeight + heightArr[heightArr.length - 1];
        return [].concat(_toConsumableArray(heightArr), [position]);
      }, [0]);

      _this.setState({
        itemPosition: newItemPosition
      });
    };

    _this.addItemHeight = function () {
      var addedRef = _this.itemRef[_this.itemRef.length - 1];

      if (addedRef) {
        var itemHeight = [].concat(_toConsumableArray(_this.state.itemHeight), [addedRef.scrollHeight]);

        _this.setState({
          itemHeight: itemHeight
        }, _this.calculateItemPosition);
      }
    };

    _this.loadMoreOnInitialization = function () {
      var itemList = _this.props.itemList;
      var _this$state3 = _this.state,
          endList = _this$state3.endList,
          currentMax = _this$state3.currentMax;

      if (_this.container) {
        var bottom = _this.container.scrollHeight <= _this.container.clientHeight * 2 + 10;

        if (bottom && currentMax < itemList.length) {
          _this.setState({
            endList: endList + 1,
            currentMax: currentMax + 1
          }, _this.addItemHeight);
        }
      }
    };

    _this.changeSizeComponent = function () {
      var _this$state4 = _this.state,
          itemHeight = _this$state4.itemHeight,
          beginList = _this$state4.beginList,
          endList = _this$state4.endList;
      var itemListChildren = (0, _ramda.pathOr)([], ['childNodes'])(_this.itemListRef);

      var itemListChildrenHeight = _toConsumableArray(itemListChildren).map(function (child) {
        return child.scrollHeight;
      });

      var newItemHeight = _toConsumableArray(itemHeight);

      var toCompareItemHeight = newItemHeight.slice(beginList, endList);

      if ((0, _ramda.equals)(toCompareItemHeight, itemListChildrenHeight)) {
        return;
      }

      newItemHeight.splice.apply(newItemHeight, [beginList, endList - beginList].concat(_toConsumableArray(itemListChildrenHeight)));

      _this.setState({
        itemHeight: newItemHeight
      }, _this.calculateItemPosition);
    };

    _this.state = {
      beginList: 0,
      endList: 0,
      itemPosition: [0],
      currentMax: 0,
      itemHeight: []
    };
    _this.itemRef = [];
    _this.itemListRef = null;
    return _this;
  }

  _createClass(InfiniteList, [{
    key: "handleScollToBottom",
    value: function handleScollToBottom(scrollTop) {
      var _this$state5 = this.state,
          currentMax = _this$state5.currentMax,
          itemPosition = _this$state5.itemPosition;
      var beginList = itemPosition.findIndex(function (position) {
        return position >= scrollTop;
      });
      if (beginList > 0) beginList -= 1;
      this.setState({
        beginList: beginList,
        endList: currentMax + 1,
        currentMax: currentMax + 1
      }, this.addItemHeight);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadMoreOnInitialization();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.loadMoreOnInitialization();
      this.changeSizeComponent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.container = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var itemPosition = this.state.itemPosition;
      return _react.default.createElement("div", {
        ref: function ref(container) {
          _this2.container = container;
        },
        onScroll: this.handleScroll,
        className: "".concat(_InfiniteListModule.default.InfiniteListContainer, " ").concat(this.props.className)
      }, _react.default.createElement("div", {
        style: {
          height: itemPosition[itemPosition.length - 1],
          position: 'relative'
        },
        ref: function ref(itemListRef) {
          _this2.itemListRef = itemListRef;
        }
      }, this.renderList()));
    }
  }]);

  return InfiniteList;
}(_react.Component);

InfiniteList.propTypes = _InfiniteList.default.propTypes;
InfiniteList.defaultProps = _InfiniteList.default.defaultProps;
var _default = InfiniteList;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  className: _propTypes.default.string,
  itemList: _propTypes.default.array,
  ItemComponent: _propTypes.default.elementType
};
var defaultProps = {
  className: '',
  itemList: [],
  ItemComponent: function ItemComponent() {
    return null;
  }
};
var _default = {
  propTypes: propTypes,
  defaultProps: defaultProps
};
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TextComponent = /*#__PURE__*/function (_Component) {
  _inherits(TextComponent, _Component);

  function TextComponent() {
    _classCallCheck(this, TextComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextComponent).apply(this, arguments));
  }

  _createClass(TextComponent, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        style: {
          color: 'white',
          backgroundColor: '#121212'
        }
      }, this.props.value);
    }
  }]);

  return TextComponent;
}(_react.Component);

exports.default = TextComponent;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InfiniteList = _interopRequireDefault(require("./InfiniteList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _InfiniteList.default;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.unregister = unregister;
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = "".concat(process.env.PUBLIC_URL, "/service-worker.js");

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config); // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.

        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    }).catch(function (error) {
      console.error(error.message);
    });
  }
}
"use strict";

require("@testing-library/jest-dom/extend-expect");
