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


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-platform-heroku', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--responsive', responsive), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'platform-heroku');

      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#000000', fillRule: 'evenodd', d: 'M20.4425631,0 L3.16168659,0 C1.96912351,0 1,0.966467463 1,2.16168659 L1,21.8403054 C1,23.0335325 1.96912351,24 3.16168659,24 L20.4425631,24 C21.6354582,24 22.6015936,23.0335325 22.6015936,21.8403054 L22.6015936,2.16168659 C22.6015936,0.966467463 21.6354582,0 20.4425631,0 L20.4425631,0 Z M21.4013944,21.8403054 C21.4013944,22.3701859 20.9721116,22.7991368 20.4425631,22.7991368 L3.16168659,22.7991368 C2.63247012,22.7991368 2.2001992,22.3701859 2.2001992,21.8403054 L2.2001992,2.16168659 C2.2001992,1.62981408 2.63247012,1.2001992 3.16168659,1.2001992 L20.4425631,1.2001992 C20.9721116,1.2001992 21.4013944,1.62981408 21.4013944,2.16168659 L21.4013944,21.8403054 Z M6.40036521,20.4013612 L9.10222444,18.0002988 L6.40036521,15.5999004 L6.40036521,20.4013612 L6.40036521,20.4013612 Z M16.1577357,10.6722776 C15.672012,10.1838977 14.7852258,9.60056441 13.302158,9.60056441 C11.675,9.60056441 9.99903718,10.0245352 8.80116202,10.4126494 L8.80116202,3.60122842 L6.40043161,3.60122842 L6.40043161,14.0085989 L8.09697875,13.2400066 C8.1251992,13.2273904 10.860259,12.0012948 13.302158,12.0012948 C14.5202855,12.0012948 14.7902058,12.6719456 14.8031541,13.2323705 L14.8031541,20.4013612 L17.2012284,20.4013612 L17.2012284,13.201494 C17.2038845,13.0474436 17.1886122,11.7157703 16.1577357,10.6722776 M13.0012948,7.50039841 L15.4020252,7.50039841 C16.4866866,6.27164675 17.0394754,4.96354582 17.201494,3.60099602 L14.8030876,3.60099602 C14.5358234,4.96088977 13.9445219,6.26135458 13.0012948,7.50039841', stroke: 'none' })
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

Icon.displayName = 'PlatformHeroku';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];