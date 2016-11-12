'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Column = function Column() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var className = props.className,
      children = props.children,
      sm = props.sm,
      smOffset = props.smOffset,
      md = props.md,
      mdOffset = props.mdOffset,
      lg = props.lg,
      lgOffset = props.lgOffset,
      other = _objectWithoutProperties(props, ['className', 'children', 'sm', 'smOffset', 'md', 'mdOffset', 'lg', 'lgOffset']);

  var cls = 'column';

  if (sm) cls += ' small-' + sm;
  if (smOffset) cls += ' small-offset-' + smOffset;
  if (md) cls += ' medium-' + md;
  if (mdOffset) cls += ' medium-offset-' + mdOffset;
  if (lg) cls += ' large-' + lg;
  if (lgOffset) cls += ' large-offset-' + lgOffset;

  cls += className ? ' ' + className : '';

  return _react2.default.createElement(
    'div',
    _extends({ className: cls }, other),
    children
  );
};

var gridVal = function gridVal(props, prop, compName) {

  var n = props[prop];

  if (n === undefined) {
    return;
  }

  var isPosInt = Math.abs(Math.round(n)) === n;

  if (typeof n !== 'number' || !isPosInt || n < 1 || n > 12) {
    return new Error('Invalid prop ' + prop + ' supplied to ' + compName + '.\nIt should be a integer between 1 and 12.');
  }
};

Column.propTypes = {
  sm: gridVal,
  smOffset: gridVal,
  md: gridVal,
  mdOffset: gridVal,
  lg: gridVal,
  lgOffset: gridVal,
  className: _react.PropTypes.string,
  children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string])
};

exports.default = Column;