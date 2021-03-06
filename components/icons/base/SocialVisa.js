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


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-visa', className, (_classnames = {}, (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--' + size, size), (0, _defineProperty3.default)(_classnames, CLASS_ROOT + '--responsive', responsive), (0, _defineProperty3.default)(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-visa');

      var restProps = _Props2.default.omit(this.props, (0, _keys2.default)(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        (0, _extends3.default)({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#000000', fillRule: 'evenodd', d: 'M2.04104243,9.05491668 C1.44373799,8.72373602 0.762180517,8.45751099 0,8.27300908 L0.0247991442,8.12468762 L3.15804902,8.12468762 C3.58007147,8.14041924 3.92121447,8.2751212 4.03883743,8.72653117 L4.72006671,12.0021411 C4.72010336,12.0022589 4.72013999,12.0023767 4.72017662,12.0024945 L4.92286683,12.9904181 L6.82522703,8.12909393 L8.88348317,8.12909393 L5.82441223,15.2441905 L3.76855953,15.2465576 L2.04104243,9.05491668 L2.04104243,9.05491668 Z M8.4549423,15.2527118 L9.66980904,8.12388647 L11.6129185,8.12388647 L10.3972142,15.2527118 L8.4549423,15.2527118 Z M17.4446139,8.29941052 C17.0596263,8.15498555 16.4564354,8 15.7031022,8 C13.7831167,8 12.4306348,8.9668753 12.4191274,10.3526049 C12.4083119,11.3769443 13.3846553,11.9483806 14.1217106,12.289378 C14.8780299,12.6387874 15.1323213,12.8616519 15.1287161,13.1736623 C15.1239092,13.6515101 14.524724,13.8698227 13.9662153,13.8698227 C13.1884835,13.8698227 12.7753101,13.7617771 12.1371964,13.4956142 L11.8868016,13.3822883 L11.6140838,14.9781733 C12.0679336,15.1771491 12.9071716,15.3495778 13.7785648,15.3584997 C15.8210893,15.3584997 17.1470606,14.4026948 17.1621367,12.9229397 C17.1694563,12.1119967 16.6517696,11.4948221 15.5307463,10.9860573 C14.8515556,10.656276 14.4356146,10.4362155 14.4400209,10.1022828 C14.4400209,9.80596764 14.7920887,9.48911396 15.5527778,9.48911396 C16.1881967,9.47924528 16.6484557,9.61780732 17.0070783,9.76223229 L17.1812186,9.84449553 L17.4446139,8.29941052 Z M22.4272754,8.13069622 L20.9258165,8.13069622 C20.4606778,8.13069622 20.1126158,8.25764162 19.9083233,8.72186995 L17.022555,15.2549696 L19.0629674,15.2549696 C19.0629674,15.2549696 19.3966088,14.3765482 19.4720623,14.1836903 C19.6950361,14.1836903 21.6771832,14.1867492 21.9605708,14.1867492 C22.0186904,14.4363065 22.196982,15.2549696 22.196982,15.2549696 L24,15.2549696 L22.4272754,8.13069622 Z M20.0312265,12.7255662 C20.1919294,12.3148326 20.8053895,10.7327856 20.8053895,10.7327856 C20.7939186,10.7517582 20.9648906,10.3200492 21.0630312,10.0523932 L21.1943829,10.6670187 C21.1943829,10.6670187 21.5664429,12.3686915 21.6441905,12.7255297 L20.0312265,12.7255297 L20.0312265,12.7255662 Z', stroke: 'none' })
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

Icon.displayName = 'SocialVisa';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _react.PropTypes.bool
};
module.exports = exports['default'];