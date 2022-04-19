"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dateFns = require("date-fns");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Calendar = /*#__PURE__*/function (_React$Component) {
  _inherits(Calendar, _React$Component);

  var _super = _createSuper(Calendar);

  function Calendar() {
    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentMonth: new Date(),
      selectedDate: new Date()
    });

    _defineProperty(_assertThisInitialized(_this), "onDateClick", function (day) {
      _this.setState({
        selectedDate: day
      });
    });

    _defineProperty(_assertThisInitialized(_this), "nextMonth", function () {
      _this.setState({
        currentMonth: (0, _dateFns.addMonths)(_this.state.currentMonth, 1)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "prevMonth", function () {
      _this.setState({
        currentMonth: (0, _dateFns.subMonths)(_this.state.currentMonth, 1)
      });
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "renderHeader",
    value: function renderHeader() {
      var dateFormat = "dd M Y";
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "header row flex-middle"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col col-start"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "icon",
        onClick: this.prevMonth
      }, "chevron_left")), /*#__PURE__*/_react.default.createElement("div", {
        className: "col col-center"
      }, /*#__PURE__*/_react.default.createElement("span", null, (0, _dateFns.format)(this.state.currentMonth, dateFormat))), /*#__PURE__*/_react.default.createElement("div", {
        className: "col col-end",
        onClick: this.nextMonth
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "icon"
      }, "chevron_right")));
    }
  }, {
    key: "renderDays",
    value: function renderDays() {
      var dayFormat = "iiii";
      var days = [];
      var startDate = (0, _dateFns.startOfWeek)(this.state.currentMonth);

      for (var i = 0; i < 7; i++) {
        days.push( /*#__PURE__*/_react.default.createElement("div", {
          className: "col col-center",
          key: i
        }, (0, _dateFns.format)((0, _dateFns.addDays)(startDate, i), dayFormat)));
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "days row"
      }, days);
    }
  }, {
    key: "renderCells",
    value: function renderCells() {
      var _this2 = this;

      var _this$state = this.state,
          currentMonth = _this$state.currentMonth,
          selectedDate = _this$state.selectedDate;
      var monthStart = (0, _dateFns.startOfMonth)(currentMonth);
      var monthEnd = (0, _dateFns.endOfMonth)(monthStart);
      var startDate = (0, _dateFns.startOfWeek)(monthStart);
      var endDate = (0, _dateFns.endOfWeek)(monthEnd);
      var dateFormat = 'd';
      var rows = [];
      var days = [];
      var day = startDate;
      var formattedDate = "";

      while (day <= endDate) {
        var _loop = function _loop(i) {
          formattedDate = (0, _dateFns.format)(day, dateFormat);
          var cloneDay = day;
          days.push( /*#__PURE__*/_react.default.createElement("div", {
            className: "col cell ".concat(!(0, _dateFns.isSameMonth)(day, monthStart) ? "disabled" : (0, _dateFns.isSameDay)(day, selectedDate) ? "selected" : ""),
            key: day,
            onClick: function onClick() {
              return _this2.onDateClick((0, _dateFns.parse)(cloneDay));
            }
          }, /*#__PURE__*/_react.default.createElement("span", {
            className: "number"
          }, formattedDate), /*#__PURE__*/_react.default.createElement("span", {
            className: "bg"
          }, formattedDate)));
          day = (0, _dateFns.addDays)(day, 1);
        };

        for (var i = 0; i < 7; i++) {
          _loop(i);
        }

        rows.push( /*#__PURE__*/_react.default.createElement("div", {
          className: "row",
          key: day
        }, days));
        days = [];
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "body"
      }, rows);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "calendar"
      }, this.renderHeader(), this.renderDays(), this.renderCells());
    }
  }]);

  return Calendar;
}(_react.default.Component);

var _default = Calendar;
exports.default = _default;