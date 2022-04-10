"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logo = _interopRequireDefault(require("./logo.svg"));

require("./App.css");

var _calendar = _interopRequireDefault(require("./components/calendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    id: "logo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon"
  }, "date_range"), /*#__PURE__*/React.createElement("span", null, "react", /*#__PURE__*/React.createElement("b", null, "calendar")))), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(_calendar.default, null)));
}

var _default = App;
exports.default = _default;