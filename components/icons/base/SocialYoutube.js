'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = require('../../../utils/CSSClassnames');

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = require('../../../utils/Intl');

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = require('../../../utils/Props');

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON; // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  (0, _inherits3.default)(Icon, _Component);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
  }

  (0, _createClass3.default)(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-youtube', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--responsive', responsive), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-youtube');

      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#000000', fillRule: 'evenodd', d: 'M9.522,15.553 L9.52125,8.80975 L16.00575,12.193 L9.522,15.553 Z M23.76,7.64125 C23.76,7.64125 23.52525,5.9875 22.806,5.25925 C21.89325,4.303 20.87025,4.2985 20.4015,4.243 C17.043,4 12.00525,4 12.00525,4 L11.99475,4 C11.99475,4 6.957,4 3.5985,4.243 C3.129,4.2985 2.10675,4.303 1.19325,5.25925 C0.474,5.9875 0.24,7.64125 0.24,7.64125 C0.24,7.64125 0,9.58375 0,11.5255 L0,13.3465 C0,15.289 0.24,17.23075 0.24,17.23075 C0.24,17.23075 0.474,18.8845 1.19325,19.61275 C2.10675,20.569 3.306,20.539 3.84,20.63875 C5.76,20.82325 12,20.88025 12,20.88025 C12,20.88025 17.043,20.87275 20.4015,20.62975 C20.87025,20.5735 21.89325,20.569 22.806,19.61275 C23.52525,18.8845 23.76,17.23075 23.76,17.23075 C23.76,17.23075 24,15.289 24,13.3465 L24,11.5255 C24,9.58375 23.76,7.64125 23.76,7.64125 L23.76,7.64125 Z', stroke: 'none' })
      );
    }
  }]);
  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _react.PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'SocialYoutube';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];