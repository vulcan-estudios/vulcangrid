'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Row = function Row() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var className = props.className,
      children = props.children,
      column = props.column,
      expanded = props.expanded,
      other = _objectWithoutProperties(props, ['className', 'children', 'column', 'expanded']);

  var cls = column ? 'column row' : 'row';

  if (expanded) {
    cls += ' expanded';
  }

  cls += className ? ' ' + className : '';

  return _react2.default.createElement(
    'div',
    _extends({ className: cls }, other),
    children
  );
};

Row.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
  column: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number]),
  expanded: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number])
};

exports.default = Row;