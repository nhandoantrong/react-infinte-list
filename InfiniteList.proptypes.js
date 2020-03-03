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