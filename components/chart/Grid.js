'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CSSClassnames = require('../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CHART_GRID;

// Underlying grid lines for rows and/or columns.

var Grid = function (_Component) {
  (0, _inherits3.default)(Grid, _Component);

  function Grid() {
    (0, _classCallCheck3.default)(this, Grid);
    return (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).apply(this, arguments));
  }

  (0, _createClass3.default)(Grid, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          columns = _props.columns,
          rows = _props.rows,
          width = _props.width,
          height = _props.height,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'columns', 'rows', 'width', 'height']);

      var classes = (0, _classnames2.default)(CLASS_ROOT, className);

      var commands = '';

      if (columns > 1) {
        var basis = (width - 2 * _utils.padding) / (columns - 1);
        for (var i = 0; i < columns; i += 1) {
          var x = i * basis;
          commands += 'M' + (x + _utils.padding) + ',' + _utils.padding + ' L' + (x + _utils.padding) + ',' + (height - _utils.padding) + ' ';
        }
      }

      if (rows > 1) {
        var _basis = (height - 2 * _utils.padding) / (rows - 1);
        for (var _i = 0; _i < rows; _i += 1) {
          var y = _i * _basis;
          commands += 'M' + _utils.padding + ',' + (y + _utils.padding) + ' L' + (width - _utils.padding) + ',' + (y + _utils.padding) + ' ';
        }
      }

      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({ ref: function ref(_ref) {
            return _this2.gridRef = _ref;
          } }, props, { className: classes,
          viewBox: '0 0 ' + width + ' ' + height,
          preserveAspectRatio: 'none' }),
        _react2.default.createElement('path', { fill: 'none', d: commands })
      );
    }
  }]);
  return Grid;
}(_react.Component);

Grid.displayName = 'Grid';
exports.default = Grid;
;

Grid.propTypes = {
  columns: _react.PropTypes.number,
  rows: _react.PropTypes.number
};
module.exports = exports['default'];