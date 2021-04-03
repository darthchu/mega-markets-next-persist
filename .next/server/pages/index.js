module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./redux/components/TotalsDisplay.jsx




const TotalsDisplay = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
  className: "innerbox",
  id: "totals",
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
    htmlFor: "totalCards",
    children: "Total Cards:"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
    id: "totalCards",
    children: props.totalCards
  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
      htmlFor: "totalMarkets",
      children: "Total Markets:"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      id: "totalCards",
      children: props.totalMarkets
    })]
  })]
});

/* harmony default export */ var components_TotalsDisplay = (TotalsDisplay);
// CONCATENATED MODULE: ./redux/components/MarketCreator.jsx




const MarketCreator = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      children: "Create New Market"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "user-interface",
      style: styles['user-inteface'],
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
        children: "Location: "
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        id: "text-box",
        style: styles['text-box'],
        onChange: props.handleChange
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        id: "submit-btn",
        style: styles['submit-btn'],
        onClick: props.handleClick,
        children: "Add Market"
      })]
    })]
  });
};

const styles = {
  'text-box': {
    width: '200px',
    height: '26px',
    marginLeft: '0px'
  },
  '.user-interface': {
    display: 'flex',
    'flex-direction': 'row',
    'align-items': 'center'
  }
};
/* harmony default export */ var components_MarketCreator = (MarketCreator);
// CONCATENATED MODULE: ./redux/components/MarketDisplay.jsx




const MarketDisplay = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "marketBox",
    style: MarketDisplay_styles.container,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      id: "desc",
      styles: MarketDisplay_styles.desc,
      children: ["Market ID: ", props.marketId]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      id: "desc",
      styles: MarketDisplay_styles.desc,
      children: ["Location: ", props.marketLocation]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      id: "desc",
      styles: MarketDisplay_styles.desc,
      children: ["Cards: ", props.marketCards]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      id: "desc",
      styles: MarketDisplay_styles.desc,
      children: ["% of total: ", props.marketCards ? (props.marketCards / props.totalCards * 100).toFixed(2) : '0.00']
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      styles: ['text-box'],
      onClick: () => props.handleAddClick(props.marketId),
      children: "Add Card"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      styles: ['text-box'],
      onClick: () => props.handleDeleteClick(props.marketId),
      children: "Delete Card"
    })]
  });
};

const MarketDisplay_styles = {
  container: {
    border: '1px solid black',
    height: '100px',
    width: '200px',
    marginLeft: '0px'
  },
  'text-box': {
    width: '200px',
    height: '26px',
    marginLeft: '0px'
  }
};
/* harmony default export */ var components_MarketDisplay = (MarketDisplay);
// CONCATENATED MODULE: ./redux/components/MarketsDisplay.jsx





const MarketsDisplay = props => {
  const displays = [];

  for (let i = 0; i < props.marketList.length; i++) {
    displays.push( /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_MarketDisplay, {
      marketId: props.marketList[i].marketId,
      marketLocation: props.marketList[i].location,
      marketCards: props.marketList[i].cards,
      totalCards: props.marketList[i].totalCards
    }, `Market Display ${i}`));
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "displayBox",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      children: "Markets"
    }), displays]
  });
};

/* harmony default export */ var components_MarketsDisplay = (MarketsDisplay);
// CONCATENATED MODULE: ./redux/containers/MarketsContainer.jsx






const MarketsContainer = props => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "innerbox",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_MarketCreator, {
      handleClick: props.handleClick,
      handleChange: props.handleChange
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_MarketsDisplay, {
      marketList: props.marketList
    })]
  });
};

/* harmony default export */ var containers_MarketsContainer = (MarketsContainer);
// EXTERNAL MODULE: external "next-persist-test"
var external_next_persist_test_ = __webpack_require__("a8J8");
var external_next_persist_test_default = /*#__PURE__*/__webpack_require__.n(external_next_persist_test_);

// CONCATENATED MODULE: ./redux/containers/MainContainer.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import nextPersist from "../../next-persist.js";




const persistConfig = {
  allowList: ["lastMarketId", "marketList", "totalCards", "totalMarkets"]
};

class MainContainer_MainContainer extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      totalMarkets: 0,
      totalCards: 0,
      marketList: props.testState,
      // marketList: [{,
      //   marketId : 1,
      //   location : 'new yuk',
      //   cards : 0,
      //   totalCards : 0
      // }],
      lastMarketId: 10000,
      newLocation: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(state => {
      return _objectSpread(_objectSpread({}, state), {}, {
        newLocation: e.target.value
      });
    });
  }

  handleClick(e) {
    this.setState(state => {
      // increment totalMarkets and lastMarketId
      const lastMarketId = this.state.lastMarketId + 1;
      const totalMarkets = this.state.totalMarkets + 1;
      const newMarket = {
        // what goes in here? a new market card element
        marketId: lastMarketId,
        location: state.newLocation,
        cards: 0,
        totalCards: state.totalCards
      };
      let marketList = state.marketList.slice();
      marketList.push(newMarket);
      return _objectSpread(_objectSpread({}, state), {}, {
        marketList,
        lastMarketId,
        totalMarkets,
        newLocation: this.state.newLocation
      }); // create a newMarket object and insert into marketList
    }, () => {
      external_next_persist_test_default.a.writeStorage(persistConfig, this.state);
    });
  }

  componentDidMount() {
    this.setState( // returns state object
    external_next_persist_test_default.a.getStorage(persistConfig, this.state)); //   const clientState = localStorage.getItem("key");
    //   console.log("hello?", clientState);
    //   if (clientState) {
    //     const {
    //       lastMarketId,
    //       marketList,
    //       newLocation,
    //       totalCards,
    //       totalMarkets,
    //     } = JSON.parse(clientState);
    //     console.log("clientState exists", marketList);
    //     this.setState((state) => {
    //       return {
    //         ...state,
    //         marketList,
    //         lastMarketId,
    //         totalMarkets,
    //         newLocation,
    //         totalCards,
    //       };
    //     });
    //   }
    // else return { state };
  }

  render() {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "outerBox",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          id: "header",
          children: "MegaMarket Loyalty Cards"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_TotalsDisplay, {
          totalCards: this.state.totalCards,
          totalMarkets: this.state.totalMarkets
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(containers_MarketsContainer, {
          handleClick: this.handleClick,
          handleChange: this.handleChange,
          marketList: this.state.marketList
        })]
      })
    });
  }

}

/* harmony default export */ var containers_MainContainer = (MainContainer_MainContainer);
// CONCATENATED MODULE: ./pages/index.js





function Home({
  testState
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "MegaMarket Cards"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(containers_MainContainer, {
      testState: testState
    })]
  });
}
const getStaticProps = async context => {
  const res = await fetch(`https://api.jsonbin.io/b/605e529b838e525f311917eb`);
  const testState = await res.json();
  return {
    props: {
      testState
    }
  };
};

/***/ }),

/***/ "a8J8":
/***/ (function(module, exports) {

module.exports = require("next-persist-test");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });