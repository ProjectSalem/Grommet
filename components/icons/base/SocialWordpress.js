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


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-wordpress', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--responsive', responsive), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-wordpress');

      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#000000', fillRule: 'evenodd', d: 'M0,11.99925 C0,16.749 2.76,20.85375 6.76275,22.7985 L1.03875,7.116 C0.3735,8.60775 0,10.25925 0,11.99925 M20.10015,11.394 C20.10015,9.9105 19.5669,8.88375 19.1109,8.085 C18.50265,7.09575 17.9319,6.25875 17.9319,5.27025 C17.9319,4.167 18.76815,3.14025 19.94715,3.14025 C20.0004,3.14025 20.05065,3.147 20.1024,3.15 C17.9679,1.194 15.12315,0 11.9994,0 C7.8069,0 4.11915,2.151 1.9734,5.40825 C2.2554,5.41725 2.5209,5.4225 2.7459,5.4225 C4.00065,5.4225 5.9439,5.27025 5.9439,5.27025 C6.5904,5.232 6.6669,6.183 6.0204,6.25875 C6.0204,6.25875 5.37015,6.33525 4.64715,6.3735 L9.01665,19.371 L11.64315,11.49525 L9.77415,6.3735 C9.12765,6.33525 8.5149,6.25875 8.5149,6.25875 C7.8684,6.2205 7.94415,5.232 8.5914,5.27025 C8.5914,5.27025 10.5729,5.4225 11.7519,5.4225 C13.00665,5.4225 14.9499,5.27025 14.9499,5.27025 C15.59715,5.232 15.6729,6.183 15.0264,6.25875 C15.0264,6.25875 14.3754,6.33525 13.65315,6.3735 L17.98965,19.272 L19.1874,15.273 C19.7049,13.6125 20.10015,12.42075 20.10015,11.394 M12.21015,13.04895 L8.6094,23.5107 C9.6849,23.8272 10.8219,23.9997 11.9994,23.9997 C13.39665,23.9997 14.7369,23.7582 15.98415,23.31945 C15.95265,23.2677 15.92265,23.2137 15.89865,23.15445 L12.21015,13.04895 Z M22.52925,6.242475 C22.581,6.624975 22.61025,7.034475 22.61025,7.476225 C22.61025,8.693475 22.38225,10.062225 21.6975,11.774475 L18.03225,22.371225 C21.6,20.291475 23.99925,16.425975 23.99925,11.999475 C23.99925,9.912975 23.466,7.951725 22.52925,6.242475', stroke: 'none' })
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

Icon.displayName = 'SocialWordpress';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];