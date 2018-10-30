import { useState, useEffect } from 'react';

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var useDomLocation = function useDomLocation(element) {
  var _useState = useState(getlocation(element)),
      _useState2 = slicedToArray(_useState, 2),
      elementlocation = _useState2[0],
      setElementlocation = _useState2[1];

  useEffect(function () {
    element.addEventListener('resize', handleResize);
    return function () {
      element.removeEventListener('resize', handleResize);
    };
  }, []);
  function handleResize() {
    setElementlocation(getlocation(element));
  }
  function getlocation(E) {
    var rect = E.getBoundingClientRect();
    var top = document.documentElement.clientTop;
    var left = document.documentElement.clientLeft;
    return {
      top: rect.top - top,
      bottom: rect.bottom - top,
      left: rect.left - left,
      right: rect.right - left
    };
  }
  return elementlocation;
};

export default useDomLocation;
//# sourceMappingURL=index.es.js.map
