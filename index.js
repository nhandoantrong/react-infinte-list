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

var _InfiniteList = _interopRequireDefault(require("./InfiniteList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _InfiniteList.default;
exports.default = _default;
