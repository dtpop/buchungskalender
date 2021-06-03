(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

},{}],2:[function(require,module,exports){
"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

},{"@babel/runtime/helpers/typeof":3}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

},{}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
(function (global, factory) {
  "use strict";

  if ((typeof module === "undefined" ? "undefined" : (0, _typeof2["default"])(module)) === "object" && (0, _typeof2["default"])(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : void 0, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var flat = arr.flat ? function (array) {
    return arr.flat.call(array);
  } : function (array) {
    return arr.concat.apply([], array);
  };
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var document = window.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return (0, _typeof2["default"])(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : (0, _typeof2["default"])(obj);
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.5.1",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  };

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return (i + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return i % 2;
      }));
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if ((0, _typeof2["default"])(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function globalEval(code, options, doc) {
      DOMEval(code, {
        nonce: options && options.nonce
      }, doc);
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return flat(ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.5
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2020-03-14
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        pushNative = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
    identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
    // or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
        funescape = function funescape(escape, nonHex) {
      var high = "0x" + escape.slice(1) - 0x10000;
      return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
      nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
      // Support: IE <=11+
      // For values outside the Basic Multilingual Plane (BMP), manually construct a
      // surrogate pair
      high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    },
        inDisabledFieldset = addCombinator(function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply
      // eslint-disable-next-line no-unused-expressions

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          pushNative.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        setDocument(context);
        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
            newSelector = selector;
            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // The technique has to be used as well when a leading combinator is used
            // as such selectors are not recognized by querySelectorAll.
            // Thanks to Andrew Dupont for this technique.

            if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
              // Expand context for sibling selectors
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context; // We can use :scope instead of the ID hack if the browser
              // supports it & if we're not changing the context.

              if (newContext !== context || !support.scope) {
                // Capture the context ID, setting it first if necessary
                if (nid = context.getAttribute("id")) {
                  nid = nid.replace(rcssescape, fcssescape);
                } else {
                  context.setAttribute("id", nid = expando);
                }
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(",");
            }

            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      var namespace = elem.namespaceURI,
          docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833

      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9 - 11+, Edge 12 - 18+
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      } // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
      // Safari 4 - 5 only, Opera <=11.6 - 12.x only
      // IE/Edge & older browsers don't support the :scope pseudo-class.
      // Support: Safari 6.0 only
      // Safari 6.0 supports :scope but it's an alias of :root there.


      support.scope = assert(function (el) {
        docElem.appendChild(el).appendChild(document.createElement("div"));
        return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
      });
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)

      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          var input; // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359

          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Support: IE 11+, Edge 15 - 18+
          // IE 11/Edge don't find elements on a `[name='']` query in some cases.
          // Adding a temporary attribute to the document before the selection works
          // around the issue.
          // Interestingly, IE 10 & older don't seem to have the issue.


          input = document.createElement("input");
          input.setAttribute("name", "");
          el.appendChild(input);

          if (!el.querySelectorAll("[name='']").length) {
            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          } // Support: Firefox <=3.6 - 5 only
          // Old Firefox doesn't throw on a badly-escaped identifier.


          el.querySelectorAll("\\\f");
          rbuggyQSA.push("[\\r\\n\\f]");
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: Opera 10 - 11 only
          // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq


        compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
            return -1;
          } // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq


          if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.

          /* eslint-disable eqeqeq */
          return a == document ? -1 : b == document ? 1 :
          /* eslint-enable eqeqeq */
          aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.

        /* eslint-disable eqeqeq */
        ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 :
        /* eslint-enable eqeqeq */
        0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      setDocument(elem);

      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((context.ownerDocument || context) != document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((elem.ownerDocument || elem) != document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            /* eslint-disable max-len */

            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
            /* eslint-enable max-len */
          };
        },
        "CHILD": function CHILD(type, what, _argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, _context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, _context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            // eslint-disable-next-line no-unused-expressions
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (_matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          outermostContext = context == document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0; // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq

            if (!context && elem.ownerDocument != document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, _name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var _siblings = function siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  ;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, _i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, _i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, _i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (elem.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      getProto(elem.contentDocument)) {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (_i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                (0, _typeof2["default"])(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = _slice.call(arguments),
          // the master Deferred
      master = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

          if (! --remaining) {
            master.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }

      return master.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    ["catch"](function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, _key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if ((0, _typeof2["default"])(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;

  var isAttached = function isAttached(elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue; // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.

    div.innerHTML = "<option></option>";
    support.option = !!div.lastChild;
  })(); // We have to close these tags to support XHTML (#13200)


  var wrapMap = {
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td; // Support: IE <=9 only

  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
  }

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if ((0, _typeof2["default"])(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Only attach events to objects that accept data

      if (!acceptData(elem)) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(nativeEvent),
          handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = _slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault();
              return result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function which(event) {
      var button = event.button; // Add which for key events

      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      } // Add which for click: 1 === left; 2 === middle; 3 === right


      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }

        if (button & 2) {
          return 3;
        }

        if (button & 4) {
          return 2;
        }

        return 0;
      }

      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if ((0, _typeof2["default"])(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src);
      events = pdataOld.events;

      if (events) {
        dataPriv.remove(dest, "handle events");

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = flat(args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  }, doc);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html;
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var swap = function swap(elem, options, callback) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.call(elem); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableTrDimensionsVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      },
      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      reliableTrDimensions: function reliableTrDimensions() {
        var table, tr, trChild, trStyle;

        if (reliableTrDimensionsVal == null) {
          table = document.createElement("table");
          tr = document.createElement("tr");
          trChild = document.createElement("div");
          table.style.cssText = "position:absolute;left:-11111px";
          tr.style.height = "1px";
          trChild.style.height = "9px";
          documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
          trStyle = window.getComputedStyle(tr);
          reliableTrDimensionsVal = parseInt(trStyle.height) > 3;
          documentElement.removeChild(table);
        }

        return reliableTrDimensionsVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var _final = jQuery.cssProps[name] || vendorProps[name];

    if (_final) {
      return _final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(_elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.


    if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
    // IE/Edge misreport `getComputedStyle` of table rows with width/height
    // set in CSS while `offset*` properties report correct values.
    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
    !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    val === "auto" || // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
    elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = (0, _typeof2["default"])(value); // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (_i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && (0, _typeof2["default"])(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (_i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = (0, _typeof2["default"])(value),
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, (0, _typeof2["default"])(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          // Handle: regular nodes (via `this.ownerDocument`), window
          // (via `this.document`) & document (via `this`).
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = {
    guid: Date.now()
  };
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + ((0, _typeof2["default"])(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (_i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if ((0, _typeof2["default"])(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Use a noop converter for missing script


        if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1) {
          s.converters["text script"] = function () {};
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (_i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery.ajaxPrefilter(function (s) {
    var i;

    for (i in s.headers) {
      if (i.toLowerCase() === "content-type") {
        s.contentType = s.headers[i] || "";
      }
    }
  });

  jQuery._evalUrl = function (url, options, doc) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(response) {
        jQuery.globalEval(response, options, doc);
      }
    });
  };

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, _callback2;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback2 = function callback(evt) {
            script.remove();
            _callback2 = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback2) {
            _callback2();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && (0, _typeof2["default"])(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  };

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        if (typeof props.top === "number") {
          props.top += "px";
        }

        if (typeof props.left === "number") {
          props.left += "px";
        }

        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (_i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });
  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  }); // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP

  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = _slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(_slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  };

  jQuery.trim = function (text) {
    return text == null ? "" : (text + "").replace(rtrim, "");
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (typeof define === "function" && define.amd) {
    define("jquery", [], function () {
      return jQuery;
    });
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (typeof noGlobal === "undefined") {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});

},{"@babel/runtime/helpers/interopRequireDefault":1,"@babel/runtime/helpers/typeof":3}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/*! UIkit 3.6.8 | https://www.getuikit.com | (c) 2014 - 2021 YOOtheme | MIT License */
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define('uikiticons', factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.UIkitIcons = factory());
})(void 0, function () {
  'use strict';

  function plugin(UIkit) {
    if (plugin.installed) {
      return;
    }

    UIkit.icon.add({
      "500px": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z\"/><path d=\"M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z\"/><path d=\"M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z\"/><path d=\"M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z\"/></svg>",
      "album": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"5\" y=\"2\" width=\"10\" height=\"1\"/><rect x=\"3\" y=\"4\" width=\"14\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"6.5\" width=\"17\" height=\"11\"/></svg>",
      "arrow-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66\"/><line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"4\" x2=\"10.5\" y2=\"15\"/></svg>",
      "arrow-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"10 14 5 9.5 10 5\"/><line fill=\"none\" stroke=\"#000\" x1=\"16\" y1=\"9.5\" x2=\"5\" y2=\"9.52\"/></svg>",
      "arrow-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"10 5 15 9.5 10 14\"/><line fill=\"none\" stroke=\"#000\" x1=\"4\" y1=\"9.5\" x2=\"15\" y2=\"9.5\"/></svg>",
      "arrow-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4\"/><line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"16\" x2=\"10.5\" y2=\"5\"/></svg>",
      "ban": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"4\" y1=\"3.5\" x2=\"16\" y2=\"16.5\"/></svg>",
      "behance": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z\"/><path d=\"M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z\"/><rect x=\"13\" y=\"4\" width=\"5\" height=\"1.4\"/></svg>",
      "bell": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z\"/><path fill=\"none\" stroke=\"#000\" d=\"M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16\"/></svg>",
      "bold": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z\"/></svg>",
      "bolt": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z\"/></svg>",
      "bookmark": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5\"/></svg>",
      "calendar": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z\"/><rect width=\"1\" height=\"3\" x=\"6\" y=\"2\"/><rect width=\"1\" height=\"3\" x=\"13\" y=\"2\"/></svg>",
      "camera": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10.8\" r=\"3.8\"/><path fill=\"none\" stroke=\"#000\" d=\"M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z\"/></svg>",
      "cart": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\"/><circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\"/><polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\"/></svg>",
      "check": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"4,10 8,15 17,4\"/></svg>",
      "chevron-double-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"10 14 6 10 10 6\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"14 14 10 10 14 6\"/></svg>",
      "chevron-double-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"10 6 14 10 10 14\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"6 6 10 10 6 14\"/></svg>",
      "chevron-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"16 7 10 13 4 7\"/></svg>",
      "chevron-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"13 16 7 10 13 4\"/></svg>",
      "chevron-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"7 4 13 10 7 16\"/></svg>",
      "chevron-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"4 13 10 7 16 13\"/></svg>",
      "clock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\"/></svg>",
      "close": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,16 L4,4\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,4 L4,16\"/></svg>",
      "cloud-download": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\"/><polyline fill=\"none\" stroke=\"#000\" points=\"11.75 16 9.5 18.25 7.25 16\"/><path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\"/></svg>",
      "cloud-upload": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\"/><polyline fill=\"none\" stroke=\"#000\" points=\"7.25 11.75 9.5 9.5 11.75 11.75\"/><path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\"/></svg>",
      "code": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"13,4 19,10 13,16\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"7,4 1,10 7,16\"/></svg>",
      "cog": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"9.997\" cy=\"10\" r=\"3.31\"/><path fill=\"none\" stroke=\"#000\" d=\"M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z\"/></svg>",
      "comment": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z\"/></svg>",
      "commenting": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5\"/><circle cx=\"10\" cy=\"8\" r=\"1\"/><circle cx=\"6\" cy=\"8\" r=\"1\"/><circle cx=\"14\" cy=\"8\" r=\"1\"/></svg>",
      "comments": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"2 0.5 19.5 0.5 19.5 13\"/><path d=\"M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z\"/></svg>",
      "copy": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\"/><polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\"/></svg>",
      "credit-card": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"4.5\" width=\"17\" height=\"12\"/><rect x=\"1\" y=\"7\" width=\"18\" height=\"3\"/></svg>",
      "database": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"4.64\" rx=\"7.5\" ry=\"3.14\"/><path fill=\"none\" stroke=\"#000\" d=\"M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11\"/><path fill=\"none\" stroke=\"#000\" d=\"M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25\"/><path fill=\"none\" stroke=\"#000\" d=\"M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64\"/></svg>",
      "desktop": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"8\" y=\"15\" width=\"1\" height=\"2\"/><rect x=\"11\" y=\"15\" width=\"1\" height=\"2\"/><rect x=\"5\" y=\"16\" width=\"10\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"3.5\" width=\"17\" height=\"11\"/></svg>",
      "download": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"14,10 9.5,14.5 5,10\"/><rect x=\"3\" y=\"17\" width=\"13\" height=\"1\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"13.91\" x2=\"9.5\" y2=\"3\"/></svg>",
      "dribbble": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" cx=\"10\" cy=\"10\" r=\"9\"/></svg>",
      "etsy": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path d=\"M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z\"/></svg>",
      "expand": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"13 2 18 2 18 7 17 7 17 3 13 3\"/><polygon points=\"2 13 3 13 3 17 7 17 7 18 2 18\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11,9 L17,3\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M3,17 L9,11\"/></svg>",
      "facebook": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z\"/></svg>",
      "file-edit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z\"/><polyline fill=\"none\" stroke=\"#000\" points=\"16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5\"/></svg>",
      "file-pdf": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" width=\"13\" height=\"17\" x=\"3.5\" y=\"1.5\"/><path d=\"M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z\"/></svg>",
      "file-text": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" width=\"13\" height=\"17\" x=\"3.5\" y=\"1.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"12\" y1=\"12.5\" y2=\"12.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"14\" y1=\"8.5\" y2=\"8.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"14\" y1=\"6.5\" y2=\"6.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"14\" y1=\"10.5\" y2=\"10.5\"/></svg>",
      "file": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"1.5\" width=\"13\" height=\"17\"/></svg>",
      "flickr": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"5.5\" cy=\"9.5\" r=\"3.5\"/><circle cx=\"14.5\" cy=\"9.5\" r=\"3.5\"/></svg>",
      "folder": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5\"/></svg>",
      "forward": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z\"/></svg>",
      "foursquare": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z\"/></svg>",
      "future": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"19 2 18 2 18 6 14 6 14 7 19 7 19 2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10\"/><rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"/><path d=\"M13.018,14.197 L9.445,10.625\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\"/></svg>",
      "git-branch": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"3\" r=\"2\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14\" cy=\"6\" r=\"2\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"17\" r=\"2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5\"/></svg>",
      "git-fork": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"5.79\" cy=\"2.79\" r=\"1.79\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14.19\" cy=\"2.79\" r=\"1.79\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"10.03\" cy=\"16.79\" r=\"1.79\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57\"/></svg>",
      "github-alt": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z\"/></svg>",
      "github": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z\"/></svg>",
      "gitter": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3.5\" y=\"1\" width=\"1.531\" height=\"11.471\"/><rect x=\"7.324\" y=\"4.059\" width=\"1.529\" height=\"15.294\"/><rect x=\"11.148\" y=\"4.059\" width=\"1.527\" height=\"15.294\"/><rect x=\"14.971\" y=\"4.059\" width=\"1.529\" height=\"8.412\"/></svg>",
      "google-plus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z\"/><polygon points=\"20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9\"/></svg>",
      "google": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z\"/></svg>",
      "grid": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"3\" height=\"3\"/><rect x=\"8\" y=\"2\" width=\"3\" height=\"3\"/><rect x=\"14\" y=\"2\" width=\"3\" height=\"3\"/><rect x=\"2\" y=\"8\" width=\"3\" height=\"3\"/><rect x=\"8\" y=\"8\" width=\"3\" height=\"3\"/><rect x=\"14\" y=\"8\" width=\"3\" height=\"3\"/><rect x=\"2\" y=\"14\" width=\"3\" height=\"3\"/><rect x=\"8\" y=\"14\" width=\"3\" height=\"3\"/><rect x=\"14\" y=\"14\" width=\"3\" height=\"3\"/></svg>",
      "happy": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"1\"/><circle cx=\"7\" cy=\"7\" r=\"1\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"8.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4\"/></svg>",
      "hashtag": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z\"/></svg>",
      "heart": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\"/></svg>",
      "history": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"#000\" points=\"1 2 2 2 2 6 6 6 6 7 1 7 1 2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10\"/><rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\"/></svg>",
      "home": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65\"/><polygon points=\"15 4 18 4 18 7 17 7 17 5 15 5\"/><polygon points=\"3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19\"/></svg>",
      "image": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16.1\" cy=\"6.1\" r=\"1.1\"/><rect fill=\"none\" stroke=\"#000\" x=\".5\" y=\"2.5\" width=\"19\" height=\"15\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"4,13 8,9 13,14\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"11,12 12.5,10.5 16,14\"/></svg>",
      "info": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/></svg>",
      "instagram": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z\"/><circle cx=\"14.87\" cy=\"5.26\" r=\"1.09\"/><path d=\"M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z\"/></svg>",
      "italic": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z\"/></svg>",
      "joomla": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z\"/><path d=\"M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8\"/><path d=\"M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8\"/><path d=\"M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7\"/></svg>",
      "laptop": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"16\" width=\"20\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"2.5\" y=\"4.5\" width=\"15\" height=\"10\"/></svg>",
      "lifesaver": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z\"/></svg>",
      "link": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M7.925,11.875 L11.925,7.975\"/></svg>",
      "linkedin": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z\"/><path d=\"M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z\"/></svg>",
      "list": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"6\" y=\"4\" width=\"12\" height=\"1\"/><rect x=\"6\" y=\"9\" width=\"12\" height=\"1\"/><rect x=\"6\" y=\"14\" width=\"12\" height=\"1\"/><rect x=\"2\" y=\"4\" width=\"2\" height=\"1\"/><rect x=\"2\" y=\"9\" width=\"2\" height=\"1\"/><rect x=\"2\" y=\"14\" width=\"2\" height=\"1\"/></svg>",
      "location": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"6.8\" r=\"2.3\"/></svg>",
      "lock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" height=\"10\" width=\"13\" y=\"8.5\" x=\"3.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8\"/></svg>",
      "mail": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"1.4,6.5 10,11 18.6,6.5\"/><path d=\"M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z\"/></svg>",
      "menu": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"4\" width=\"16\" height=\"1\"/><rect x=\"2\" y=\"9\" width=\"16\" height=\"1\"/><rect x=\"2\" y=\"14\" width=\"16\" height=\"1\"/></svg>",
      "microphone": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" x1=\"10\" x2=\"10\" y1=\"16.44\" y2=\"18.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"7\" x2=\"13\" y1=\"18.5\" y2=\"18.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6\"/></svg>",
      "minus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\"/><line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\"/></svg>",
      "minus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect height=\"1\" width=\"18\" y=\"9\" x=\"1\"/></svg>",
      "more-vertical": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"3\" r=\"2\"/><circle cx=\"10\" cy=\"10\" r=\"2\"/><circle cx=\"10\" cy=\"17\" r=\"2\"/></svg>",
      "more": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"3\" cy=\"10\" r=\"2\"/><circle cx=\"10\" cy=\"10\" r=\"2\"/><circle cx=\"17\" cy=\"10\" r=\"2\"/></svg>",
      "move": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"4,5 1,5 1,9 2,9 2,6 4,6\"/><polygon points=\"1,16 2,16 2,18 4,18 4,19 1,19\"/><polygon points=\"14,16 14,19 11,19 11,18 13,18 13,16\"/><rect fill=\"none\" stroke=\"#000\" x=\"5.5\" y=\"1.5\" width=\"13\" height=\"13\"/><rect x=\"1\" y=\"11\" width=\"1\" height=\"3\"/><rect x=\"6\" y=\"18\" width=\"3\" height=\"1\"/></svg>",
      "nut": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"3.5\"/></svg>",
      "pagekit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19\"/></svg>",
      "paint-bucket": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.42,2.33 L11.7,7.61\"/><path d=\"M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z\"/></svg>",
      "pencil": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z\"/><path fill=\"none\" stroke=\"#000\" d=\"M15.98,7.268 L13.851,5.148\"/></svg>",
      "phone-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z\"/><circle cx=\"3.8\" cy=\"10.5\" r=\".8\"/></svg>",
      "phone": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z\"/><circle cx=\"10.5\" cy=\"16.5\" r=\".8\"/></svg>",
      "pinterest": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1\"/></svg>",
      "play-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"8.5 7 13.5 10 8.5 13\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/></svg>",
      "play": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"6.5,5 14.5,10 6.5,15\"/></svg>",
      "plus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"5\" x2=\"9.5\" y2=\"14\"/><line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\"/></svg>",
      "plus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"1\" width=\"1\" height=\"17\"/><rect x=\"1\" y=\"9\" width=\"17\" height=\"1\"/></svg>",
      "print": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5\"/><polyline fill=\"none\" stroke=\"#000\" points=\"15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5\"/><rect fill=\"none\" stroke=\"#000\" width=\"11\" height=\"6\" x=\"4.5\" y=\"11.5\"/><rect width=\"8\" height=\"1\" x=\"6\" y=\"13\"/><rect width=\"8\" height=\"1\" x=\"6\" y=\"15\"/></svg>",
      "pull": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"11\" x2=\"9.5\" y2=\"2\"/><polyline fill=\"none\" stroke=\"#000\" points=\"6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5\"/></svg>",
      "push": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"10\" x2=\"9.5\" y2=\"1\"/><polyline fill=\"none\" stroke=\"#000\" points=\"6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5\"/></svg>",
      "question": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><circle cx=\"10.44\" cy=\"14.42\" r=\"1.05\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" d=\"M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75\"/></svg>",
      "quote-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z\"/><path d=\"M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z\"/></svg>",
      "receiver": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611\"/></svg>",
      "reddit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z\"/><path d=\"M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z\"/><path d=\"M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z\"/><path d=\"M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z\"/></svg>",
      "refresh": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5\"/><polyline fill=\"none\" stroke=\"#000\" points=\"9.9 2 12.79 4.89 9.79 7.9\"/></svg>",
      "reply": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z\"/></svg>",
      "rss": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"3.12\" cy=\"16.8\" r=\"1.85\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5\"/></svg>",
      "search": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>",
      "server": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3\" y=\"3\" width=\"1\" height=\"2\"/><rect x=\"5\" y=\"3\" width=\"1\" height=\"2\"/><rect x=\"7\" y=\"3\" width=\"1\" height=\"2\"/><rect x=\"16\" y=\"3\" width=\"1\" height=\"1\"/><rect x=\"16\" y=\"10\" width=\"1\" height=\"1\"/><circle fill=\"none\" stroke=\"#000\" cx=\"9.9\" cy=\"17.4\" r=\"1.4\"/><rect x=\"3\" y=\"10\" width=\"1\" height=\"2\"/><rect x=\"5\" y=\"10\" width=\"1\" height=\"2\"/><rect x=\"9.5\" y=\"14\" width=\"1\" height=\"2\"/><rect x=\"3\" y=\"17\" width=\"6\" height=\"1\"/><rect x=\"11\" y=\"17\" width=\"6\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"1.5\" width=\"17\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"8.5\" width=\"17\" height=\"5\"/></svg>",
      "settings": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"3.55\" rx=\"2.11\" ry=\"2.15\"/><ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"15.55\" rx=\"2.11\" ry=\"2.15\"/><circle fill=\"none\" stroke=\"#000\" cx=\"13.15\" cy=\"9.55\" r=\"2.15\"/><rect x=\"1\" y=\"3\" width=\"3\" height=\"1\"/><rect x=\"10\" y=\"3\" width=\"8\" height=\"1\"/><rect x=\"1\" y=\"9\" width=\"8\" height=\"1\"/><rect x=\"15\" y=\"9\" width=\"3\" height=\"1\"/><rect x=\"1\" y=\"15\" width=\"3\" height=\"1\"/><rect x=\"10\" y=\"15\" width=\"8\" height=\"1\"/></svg>",
      "shrink": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"11 4 12 4 12 8 16 8 16 9 11 9\"/><polygon points=\"4 11 9 11 9 16 8 16 8 12 4 12\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M12,8 L18,2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2,18 L8,12\"/></svg>",
      "sign-in": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3\"/><polygon points=\"9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5\"/></svg>",
      "sign-out": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5\"/><polygon points=\"13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3\"/></svg>",
      "social": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.4\" y1=\"14\" x2=\"6.3\" y2=\"10.7\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.5\" y1=\"5.5\" x2=\"6.5\" y2=\"8.8\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"4.6\" r=\"2.3\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"14.8\" r=\"2.3\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"4.5\" cy=\"9.8\" r=\"2.3\"/></svg>",
      "soundcloud": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z\"/><rect x=\"6\" y=\"6.5\" width=\"1.5\" height=\"8.5\"/><rect x=\"3\" y=\"8\" width=\"1.5\" height=\"7\"/><rect y=\"10\" width=\"1.5\" height=\"5\"/></svg>",
      "star": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27\"/></svg>",
      "strikethrough": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z\"/><rect x=\"3\" y=\"10\" width=\"15\" height=\"1\"/></svg>",
      "table": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"1\" y=\"3\" width=\"18\" height=\"1\"/><rect x=\"1\" y=\"7\" width=\"18\" height=\"1\"/><rect x=\"1\" y=\"11\" width=\"18\" height=\"1\"/><rect x=\"1\" y=\"15\" width=\"18\" height=\"1\"/></svg>",
      "tablet-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z\"/><circle cx=\"3.7\" cy=\"10.5\" r=\".8\"/></svg>",
      "tablet": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z\"/><circle cx=\"10.5\" cy=\"16.3\" r=\".8\"/></svg>",
      "tag": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z\"/><circle cx=\"14\" cy=\"6\" r=\"1\"/></svg>",
      "thumbnails": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"3.5\" width=\"5\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"3.5\" width=\"5\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"11.5\" width=\"5\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"11.5\" width=\"5\" height=\"5\"/></svg>",
      "trash": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"6.5 3 6.5 1.5 13.5 1.5 13.5 3\"/><polyline fill=\"none\" stroke=\"#000\" points=\"4.5 4 4.5 18.5 15.5 18.5 15.5 4\"/><rect x=\"8\" y=\"7\" width=\"1\" height=\"9\"/><rect x=\"11\" y=\"7\" width=\"1\" height=\"9\"/><rect x=\"2\" y=\"3\" width=\"16\" height=\"1\"/></svg>",
      "triangle-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"5 7 15 7 10 12\"/></svg>",
      "triangle-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"12 5 7 10 12 15\"/></svg>",
      "triangle-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"8 5 13 10 8 15\"/></svg>",
      "triangle-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"5 13 10 8 15 13\"/></svg>",
      "tripadvisor": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z\"/></svg>",
      "tumblr": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z\"/></svg>",
      "tv": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"7\" y=\"16\" width=\"6\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\".5\" y=\"3.5\" width=\"19\" height=\"11\"/></svg>",
      "twitter": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74\"/></svg>",
      "uikit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3\"/><polygon points=\"9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3\"/></svg>",
      "unlock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"8.5\" width=\"13\" height=\"10\"/><path fill=\"none\" stroke=\"#000\" d=\"M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9\"/></svg>",
      "upload": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"5 8 9.5 3.5 14 8\"/><rect x=\"3\" y=\"17\" width=\"13\" height=\"1\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"15\" x2=\"9.5\" y2=\"4\"/></svg>",
      "user": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.9\" cy=\"6.4\" r=\"4.4\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2\"/></svg>",
      "users": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"7.7\" cy=\"8.6\" r=\"3.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1\"/></svg>",
      "video-camera": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9\"/></svg>",
      "vimeo": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z\"/></svg>",
      "warning": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"14\" r=\"1\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><path d=\"M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z\"/></svg>",
      "whatsapp": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9\"/></svg>",
      "wordpress": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z\"/></svg>",
      "world": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M1,10.5 L19,10.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M2.35,15.5 L17.65,15.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M2.35,5.5 L17.523,5.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10.5\" r=\"9\"/></svg>",
      "xing": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z\"/><path d=\"M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z\"/></svg>",
      "yelp": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z\"/></svg>",
      "youtube": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z\"/></svg>"
    });
  }

  if (typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
  }

  return plugin;
});

},{"@babel/runtime/helpers/interopRequireDefault":1,"@babel/runtime/helpers/typeof":3}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/*! UIkit 3.6.8 | https://www.getuikit.com | (c) 2014 - 2021 YOOtheme | MIT License */
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define('uikit', factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.UIkit = factory());
})(void 0, function () {
  'use strict';

  var objPrototype = Object.prototype;
  var hasOwnProperty = objPrototype.hasOwnProperty;

  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  var hyphenateCache = {};
  var hyphenateRe = /([a-z\d])([A-Z])/g;

  function hyphenate(str) {
    if (!(str in hyphenateCache)) {
      hyphenateCache[str] = str.replace(hyphenateRe, '$1-$2').toLowerCase();
    }

    return hyphenateCache[str];
  }

  var camelizeCache = {};
  var camelizeRe = /-(\w)/g;

  function camelize(str) {
    if (!(str in camelizeCache)) {
      camelizeCache[str] = str.replace(camelizeRe, toUpper);
    }

    return camelizeCache[str];
  }

  function toUpper(_, c) {
    return c ? c.toUpperCase() : '';
  }

  function ucfirst(str) {
    return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : '';
  }

  var strPrototype = String.prototype;

  var startsWithFn = strPrototype.startsWith || function (search) {
    return this.lastIndexOf(search, 0) === 0;
  };

  function startsWith(str, search) {
    return startsWithFn.call(str, search);
  }

  var endsWithFn = strPrototype.endsWith || function (search) {
    return this.substr(-search.length) === search;
  };

  function endsWith(str, search) {
    return endsWithFn.call(str, search);
  }

  var arrPrototype = Array.prototype;

  var includesFn = function includesFn(search, i) {
    return !!~this.indexOf(search, i);
  };

  var includesStr = strPrototype.includes || includesFn;
  var includesArray = arrPrototype.includes || includesFn;

  function includes(obj, search) {
    return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
  }

  var findIndexFn = arrPrototype.findIndex || function (predicate) {
    var arguments$1 = arguments;

    for (var i = 0; i < this.length; i++) {
      if (predicate.call(arguments$1[1], this[i], i, this)) {
        return i;
      }
    }

    return -1;
  };

  function findIndex(array, predicate) {
    return findIndexFn.call(array, predicate);
  }

  var isArray = Array.isArray;

  function isFunction(obj) {
    return typeof obj === 'function';
  }

  function isObject(obj) {
    return obj !== null && (0, _typeof2["default"])(obj) === 'object';
  }

  var toString = objPrototype.toString;

  function isPlainObject(obj) {
    return toString.call(obj) === '[object Object]';
  }

  function isWindow(obj) {
    return isObject(obj) && obj === obj.window;
  }

  function isDocument(obj) {
    return nodeType(obj) === 9;
  }

  function isNode(obj) {
    return nodeType(obj) >= 1;
  }

  function isElement(obj) {
    return nodeType(obj) === 1;
  }

  function nodeType(obj) {
    return !isWindow(obj) && isObject(obj) && obj.nodeType;
  }

  function isBoolean(value) {
    return typeof value === 'boolean';
  }

  function isString(value) {
    return typeof value === 'string';
  }

  function isNumber(value) {
    return typeof value === 'number';
  }

  function isNumeric(value) {
    return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
  }

  function isEmpty(obj) {
    return !(isArray(obj) ? obj.length : isObject(obj) ? Object.keys(obj).length : false);
  }

  function isUndefined(value) {
    return value === void 0;
  }

  function toBoolean(value) {
    return isBoolean(value) ? value : value === 'true' || value === '1' || value === '' ? true : value === 'false' || value === '0' ? false : value;
  }

  function toNumber(value) {
    var number = Number(value);
    return !isNaN(number) ? number : false;
  }

  function toFloat(value) {
    return parseFloat(value) || 0;
  }

  var toArray = Array.from || function (value) {
    return arrPrototype.slice.call(value);
  };

  function toNode(element) {
    return toNodes(element)[0];
  }

  function toNodes(element) {
    return element && (isNode(element) ? [element] : toArray(element).filter(isNode)) || [];
  }

  function toWindow(element) {
    if (isWindow(element)) {
      return element;
    }

    element = toNode(element);
    return element ? (isDocument(element) ? element : element.ownerDocument).defaultView : window;
  }

  function toMs(time) {
    return !time ? 0 : endsWith(time, 'ms') ? toFloat(time) : toFloat(time) * 1000;
  }

  function isEqual(value, other) {
    return value === other || isObject(value) && isObject(other) && Object.keys(value).length === Object.keys(other).length && each(value, function (val, key) {
      return val === other[key];
    });
  }

  function swap(value, a, b) {
    return value.replace(new RegExp(a + "|" + b, 'g'), function (match) {
      return match === a ? b : a;
    });
  }

  var assign = Object.assign || function (target) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    target = Object(target);

    for (var i = 0; i < args.length; i++) {
      var source = args[i];

      if (source !== null) {
        for (var key in source) {
          if (hasOwn(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }

    return target;
  };

  function last(array) {
    return array[array.length - 1];
  }

  function each(obj, cb) {
    for (var key in obj) {
      if (false === cb(obj[key], key)) {
        return false;
      }
    }

    return true;
  }

  function sortBy(array, prop) {
    return array.slice().sort(function (ref, ref$1) {
      var propA = ref[prop];
      if (propA === void 0) propA = 0;
      var propB = ref$1[prop];
      if (propB === void 0) propB = 0;
      return propA > propB ? 1 : propB > propA ? -1 : 0;
    });
  }

  function uniqueBy(array, prop) {
    var seen = new Set();
    return array.filter(function (ref) {
      var check = ref[prop];
      return seen.has(check) ? false : seen.add(check) || true;
    } // IE 11 does not return the Set object
    );
  }

  function clamp(number, min, max) {
    if (min === void 0) min = 0;
    if (max === void 0) max = 1;
    return Math.min(Math.max(toNumber(number) || 0, min), max);
  }

  function noop() {}

  function intersectRect() {
    var rects = [],
        len = arguments.length;

    while (len--) {
      rects[len] = arguments[len];
    }

    return [['bottom', 'top'], ['right', 'left']].every(function (ref) {
      var minProp = ref[0];
      var maxProp = ref[1];
      return Math.min.apply(Math, rects.map(function (ref) {
        var min = ref[minProp];
        return min;
      })) - Math.max.apply(Math, rects.map(function (ref) {
        var max = ref[maxProp];
        return max;
      })) > 0;
    });
  }

  function pointInRect(point, rect) {
    return point.x <= rect.right && point.x >= rect.left && point.y <= rect.bottom && point.y >= rect.top;
  }

  var Dimensions = {
    ratio: function ratio(dimensions, prop, value) {
      var obj;
      var aProp = prop === 'width' ? 'height' : 'width';
      return obj = {}, obj[aProp] = dimensions[prop] ? Math.round(value * dimensions[aProp] / dimensions[prop]) : dimensions[aProp], obj[prop] = value, obj;
    },
    contain: function contain(dimensions, maxDimensions) {
      var this$1 = this;
      dimensions = assign({}, dimensions);
      each(dimensions, function (_, prop) {
        return dimensions = dimensions[prop] > maxDimensions[prop] ? this$1.ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
      });
      return dimensions;
    },
    cover: function cover(dimensions, maxDimensions) {
      var this$1 = this;
      dimensions = this.contain(dimensions, maxDimensions);
      each(dimensions, function (_, prop) {
        return dimensions = dimensions[prop] < maxDimensions[prop] ? this$1.ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
      });
      return dimensions;
    }
  };

  function _getIndex(i, elements, current, finite) {
    if (current === void 0) current = 0;
    if (finite === void 0) finite = false;
    elements = toNodes(elements);
    var length = elements.length;
    i = isNumeric(i) ? toNumber(i) : i === 'next' ? current + 1 : i === 'previous' ? current - 1 : elements.indexOf(toNode(i));

    if (finite) {
      return clamp(i, 0, length - 1);
    }

    i %= length;
    return i < 0 ? i + length : i;
  }

  function attr(element, name, value) {
    if (isObject(name)) {
      for (var key in name) {
        attr(element, key, name[key]);
      }

      return;
    }

    if (isUndefined(value)) {
      element = toNode(element);
      return element && element.getAttribute(name);
    } else {
      toNodes(element).forEach(function (element) {
        if (isFunction(value)) {
          value = value.call(element, attr(element, name));
        }

        if (value === null) {
          removeAttr(element, name);
        } else {
          element.setAttribute(name, value);
        }
      });
    }
  }

  function hasAttr(element, name) {
    return toNodes(element).some(function (element) {
      return element.hasAttribute(name);
    });
  }

  function removeAttr(element, name) {
    element = toNodes(element);
    name.split(' ').forEach(function (name) {
      return element.forEach(function (element) {
        return element.hasAttribute(name) && element.removeAttribute(name);
      });
    });
  }

  function data(element, attribute) {
    for (var i = 0, attrs = [attribute, "data-" + attribute]; i < attrs.length; i++) {
      if (hasAttr(element, attrs[i])) {
        return attr(element, attrs[i]);
      }
    }
  }
  /* global DocumentTouch */


  var inBrowser = typeof window !== 'undefined';
  var isIE = inBrowser && /msie|trident/i.test(window.navigator.userAgent);
  var isRtl = inBrowser && attr(document.documentElement, 'dir') === 'rtl';
  var hasTouchEvents = inBrowser && 'ontouchstart' in window;
  var hasPointerEvents = inBrowser && window.PointerEvent;
  var hasTouch = inBrowser && (hasTouchEvents || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints); // IE >=11

  var pointerDown = hasPointerEvents ? 'pointerdown' : hasTouchEvents ? 'touchstart' : 'mousedown';
  var pointerMove = hasPointerEvents ? 'pointermove' : hasTouchEvents ? 'touchmove' : 'mousemove';
  var pointerUp = hasPointerEvents ? 'pointerup' : hasTouchEvents ? 'touchend' : 'mouseup';
  var pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouchEvents ? '' : 'mouseenter';
  var pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouchEvents ? '' : 'mouseleave';
  var pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';
  var voidElements = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    menuitem: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  };

  function isVoidElement(element) {
    return toNodes(element).some(function (element) {
      return voidElements[element.tagName.toLowerCase()];
    });
  }

  function isVisible(element) {
    return toNodes(element).some(function (element) {
      return element.offsetWidth || element.offsetHeight || element.getClientRects().length;
    });
  }

  var selInput = 'input,select,textarea,button';

  function isInput(element) {
    return toNodes(element).some(function (element) {
      return matches(element, selInput);
    });
  }

  function parent(element) {
    element = toNode(element);
    return element && isElement(element.parentNode) && element.parentNode;
  }

  function filter(element, selector) {
    return toNodes(element).filter(function (element) {
      return matches(element, selector);
    });
  }

  var elProto = inBrowser ? Element.prototype : {};
  var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector || noop;

  function matches(element, selector) {
    return toNodes(element).some(function (element) {
      return matchesFn.call(element, selector);
    });
  }

  var closestFn = elProto.closest || function (selector) {
    var ancestor = this;

    do {
      if (matches(ancestor, selector)) {
        return ancestor;
      }
    } while (ancestor = parent(ancestor));
  };

  function closest(element, selector) {
    if (startsWith(selector, '>')) {
      selector = selector.slice(1);
    }

    return isElement(element) ? closestFn.call(element, selector) : toNodes(element).map(function (element) {
      return closest(element, selector);
    }).filter(Boolean);
  }

  function within(element, selector) {
    return !isString(selector) ? element === selector || (isDocument(selector) ? selector.documentElement : toNode(selector)).contains(toNode(element)) // IE 11 document does not implement contains
    : matches(element, selector) || !!closest(element, selector);
  }

  function parents(element, selector) {
    var elements = [];

    while (element = parent(element)) {
      if (!selector || matches(element, selector)) {
        elements.push(element);
      }
    }

    return elements;
  }

  function _children(element, selector) {
    element = toNode(element);
    var children = element ? toNodes(element.children) : [];
    return selector ? filter(children, selector) : children;
  }

  function index(element, ref) {
    return ref ? toNodes(element).indexOf(toNode(ref)) : _children(parent(element)).indexOf(element);
  }

  function query(selector, context) {
    return toNode(selector) || find(selector, getContext(selector, context));
  }

  function queryAll(selector, context) {
    var nodes = toNodes(selector);
    return nodes.length && nodes || findAll(selector, getContext(selector, context));
  }

  function getContext(selector, context) {
    if (context === void 0) context = document;
    return isContextSelector(selector) || isDocument(context) ? context : context.ownerDocument;
  }

  function find(selector, context) {
    return toNode(_query(selector, context, 'querySelector'));
  }

  function findAll(selector, context) {
    return toNodes(_query(selector, context, 'querySelectorAll'));
  }

  function _query(selector, context, queryFn) {
    if (context === void 0) context = document;

    if (!selector || !isString(selector)) {
      return null;
    }

    selector = selector.replace(contextSanitizeRe, '$1 *');

    if (isContextSelector(selector)) {
      selector = splitSelector(selector).map(function (selector, i) {
        var ctx = context;

        if (selector[0] === '!') {
          var selectors = selector.substr(1).trim().split(' ');
          ctx = closest(parent(context), selectors[0]);
          selector = selectors.slice(1).join(' ').trim();
        }

        if (selector[0] === '-') {
          var selectors$1 = selector.substr(1).trim().split(' ');
          var prev = (ctx || context).previousElementSibling;
          ctx = matches(prev, selector.substr(1)) ? prev : null;
          selector = selectors$1.slice(1).join(' ');
        }

        if (!ctx) {
          return null;
        }

        return domPath(ctx) + " " + selector;
      }).filter(Boolean).join(',');
      context = document;
    }

    try {
      return context[queryFn](selector);
    } catch (e) {
      return null;
    }
  }

  var contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
  var contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

  function isContextSelector(selector) {
    return isString(selector) && selector.match(contextSelectorRe);
  }

  var selectorRe = /.*?[^\\](?:,|$)/g;

  function splitSelector(selector) {
    return selector.match(selectorRe).map(function (selector) {
      return selector.replace(/,$/, '').trim();
    });
  }

  function domPath(element) {
    var names = [];

    while (element.parentNode) {
      if (element.id) {
        names.unshift("#" + escape(element.id));
        break;
      } else {
        var tagName = element.tagName;

        if (tagName !== 'HTML') {
          tagName += ":nth-child(" + (index(element) + 1) + ")";
        }

        names.unshift(tagName);
        element = element.parentNode;
      }
    }

    return names.join(' > ');
  }

  var escapeFn = inBrowser && window.CSS && CSS.escape || function (css) {
    return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) {
      return "\\" + match;
    });
  };

  function escape(css) {
    return isString(css) ? escapeFn.call(null, css) : '';
  }

  function on() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var ref = getArgs(args);
    var targets = ref[0];
    var type = ref[1];
    var selector = ref[2];
    var listener = ref[3];
    var useCapture = ref[4];
    targets = toEventTargets(targets);

    if (listener.length > 1) {
      listener = detail(listener);
    }

    if (useCapture && useCapture.self) {
      listener = selfFilter(listener);
    }

    if (selector) {
      listener = delegate(selector, listener);
    }

    useCapture = useCaptureFilter(useCapture);
    type.split(' ').forEach(function (type) {
      return targets.forEach(function (target) {
        return target.addEventListener(type, listener, useCapture);
      });
    });
    return function () {
      return off(targets, type, listener, useCapture);
    };
  }

  function off(targets, type, listener, useCapture) {
    if (useCapture === void 0) useCapture = false;
    useCapture = useCaptureFilter(useCapture);
    targets = toEventTargets(targets);
    type.split(' ').forEach(function (type) {
      return targets.forEach(function (target) {
        return target.removeEventListener(type, listener, useCapture);
      });
    });
  }

  function once() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var ref = getArgs(args);
    var element = ref[0];
    var type = ref[1];
    var selector = ref[2];
    var listener = ref[3];
    var useCapture = ref[4];
    var condition = ref[5];
    var off = on(element, type, selector, function (e) {
      var result = !condition || condition(e);

      if (result) {
        off();
        listener(e, result);
      }
    }, useCapture);
    return off;
  }

  function trigger(targets, event, detail) {
    return toEventTargets(targets).reduce(function (notCanceled, target) {
      return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail));
    }, true);
  }

  function createEvent(e, bubbles, cancelable, detail) {
    if (bubbles === void 0) bubbles = true;
    if (cancelable === void 0) cancelable = false;

    if (isString(e)) {
      var event = document.createEvent('CustomEvent'); // IE 11

      event.initCustomEvent(e, bubbles, cancelable, detail);
      e = event;
    }

    return e;
  }

  function getArgs(args) {
    if (isFunction(args[2])) {
      args.splice(2, 0, false);
    }

    return args;
  }

  function delegate(selector, listener) {
    var this$1 = this;
    return function (e) {
      var current = selector[0] === '>' ? findAll(selector, e.currentTarget).reverse().filter(function (element) {
        return within(e.target, element);
      })[0] : closest(e.target, selector);

      if (current) {
        e.current = current;
        listener.call(this$1, e);
      }
    };
  }

  function detail(listener) {
    return function (e) {
      return isArray(e.detail) ? listener.apply(void 0, [e].concat(e.detail)) : listener(e);
    };
  }

  function selfFilter(listener) {
    return function (e) {
      if (e.target === e.currentTarget || e.target === e.current) {
        return listener.call(null, e);
      }
    };
  }

  function useCaptureFilter(options) {
    return options && isIE && !isBoolean(options) ? !!options.capture : options;
  }

  function isEventTarget(target) {
    return target && 'addEventListener' in target;
  }

  function toEventTarget(target) {
    return isEventTarget(target) ? target : toNode(target);
  }

  function toEventTargets(target) {
    return isArray(target) ? target.map(toEventTarget).filter(Boolean) : isString(target) ? findAll(target) : isEventTarget(target) ? [target] : toNodes(target);
  }

  function isTouch(e) {
    return e.pointerType === 'touch' || !!e.touches;
  }

  function getEventPos(e) {
    var touches = e.touches;
    var changedTouches = e.changedTouches;
    var ref = touches && touches[0] || changedTouches && changedTouches[0] || e;
    var x = ref.clientX;
    var y = ref.clientY;
    return {
      x: x,
      y: y
    };
  }
  /* global setImmediate */


  var Promise = inBrowser && window.Promise || PromiseFn;

  var Deferred = function Deferred() {
    var this$1 = this;
    this.promise = new Promise(function (resolve, reject) {
      this$1.reject = reject;
      this$1.resolve = resolve;
    });
  };
  /**
   * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
   */


  var RESOLVED = 0;
  var REJECTED = 1;
  var PENDING = 2;
  var async = inBrowser && window.setImmediate || setTimeout;

  function PromiseFn(executor) {
    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];
    var promise = this;

    try {
      executor(function (x) {
        promise.resolve(x);
      }, function (r) {
        promise.reject(r);
      });
    } catch (e) {
      promise.reject(e);
    }
  }

  PromiseFn.reject = function (r) {
    return new PromiseFn(function (resolve, reject) {
      reject(r);
    });
  };

  PromiseFn.resolve = function (x) {
    return new PromiseFn(function (resolve, reject) {
      resolve(x);
    });
  };

  PromiseFn.all = function all(iterable) {
    return new PromiseFn(function (resolve, reject) {
      var result = [];
      var count = 0;

      if (iterable.length === 0) {
        resolve(result);
      }

      function resolver(i) {
        return function (x) {
          result[i] = x;
          count += 1;

          if (count === iterable.length) {
            resolve(result);
          }
        };
      }

      for (var i = 0; i < iterable.length; i += 1) {
        PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
      }
    });
  };

  PromiseFn.race = function race(iterable) {
    return new PromiseFn(function (resolve, reject) {
      for (var i = 0; i < iterable.length; i += 1) {
        PromiseFn.resolve(iterable[i]).then(resolve, reject);
      }
    });
  };

  var p = PromiseFn.prototype;

  p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
      if (x === promise) {
        throw new TypeError('Promise settled with itself.');
      }

      var called = false;

      try {
        var then = x && x.then;

        if (x !== null && isObject(x) && isFunction(then)) {
          then.call(x, function (x) {
            if (!called) {
              promise.resolve(x);
            }

            called = true;
          }, function (r) {
            if (!called) {
              promise.reject(r);
            }

            called = true;
          });
          return;
        }
      } catch (e) {
        if (!called) {
          promise.reject(e);
        }

        return;
      }

      promise.state = RESOLVED;
      promise.value = x;
      promise.notify();
    }
  };

  p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
      if (reason === promise) {
        throw new TypeError('Promise settled with itself.');
      }

      promise.state = REJECTED;
      promise.value = reason;
      promise.notify();
    }
  };

  p.notify = function notify() {
    var this$1 = this;
    async(function () {
      if (this$1.state !== PENDING) {
        while (this$1.deferred.length) {
          var ref = this$1.deferred.shift();
          var onResolved = ref[0];
          var onRejected = ref[1];
          var resolve = ref[2];
          var reject = ref[3];

          try {
            if (this$1.state === RESOLVED) {
              if (isFunction(onResolved)) {
                resolve(onResolved.call(undefined, this$1.value));
              } else {
                resolve(this$1.value);
              }
            } else if (this$1.state === REJECTED) {
              if (isFunction(onRejected)) {
                resolve(onRejected.call(undefined, this$1.value));
              } else {
                reject(this$1.value);
              }
            }
          } catch (e) {
            reject(e);
          }
        }
      }
    });
  };

  p.then = function then(onResolved, onRejected) {
    var this$1 = this;
    return new PromiseFn(function (resolve, reject) {
      this$1.deferred.push([onResolved, onRejected, resolve, reject]);
      this$1.notify();
    });
  };

  p["catch"] = function (onRejected) {
    return this.then(undefined, onRejected);
  };

  function ajax(url, options) {
    return new Promise(function (resolve, reject) {
      var env = assign({
        data: null,
        method: 'GET',
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: noop,
        responseType: ''
      }, options);
      env.beforeSend(env);
      var xhr = env.xhr;

      for (var prop in env) {
        if (prop in xhr) {
          try {
            xhr[prop] = env[prop];
          } catch (e) {}
        }
      }

      xhr.open(env.method.toUpperCase(), url);

      for (var header in env.headers) {
        xhr.setRequestHeader(header, env.headers[header]);
      }

      on(xhr, 'load', function () {
        if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          // IE 11 does not support responseType 'json'
          if (env.responseType === 'json' && isString(xhr.response)) {
            xhr = assign(copyXhr(xhr), {
              response: JSON.parse(xhr.response)
            });
          }

          resolve(xhr);
        } else {
          reject(assign(Error(xhr.statusText), {
            xhr: xhr,
            status: xhr.status
          }));
        }
      });
      on(xhr, 'error', function () {
        return reject(assign(Error('Network Error'), {
          xhr: xhr
        }));
      });
      on(xhr, 'timeout', function () {
        return reject(assign(Error('Network Timeout'), {
          xhr: xhr
        }));
      });
      xhr.send(env.data);
    });
  }

  function getImage(src, srcset, sizes) {
    return new Promise(function (resolve, reject) {
      var img = new Image();

      img.onerror = function (e) {
        return reject(e);
      };

      img.onload = function () {
        return resolve(img);
      };

      sizes && (img.sizes = sizes);
      srcset && (img.srcset = srcset);
      img.src = src;
    });
  }

  function copyXhr(source) {
    var target = {};

    for (var key in source) {
      target[key] = source[key];
    }

    return target;
  }

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
      return;
    }

    var unbind = on(document, 'DOMContentLoaded', function () {
      unbind();
      fn();
    });
  }

  function empty(element) {
    element = $(element);
    element.innerHTML = '';
    return element;
  }

  function html(parent, html) {
    parent = $(parent);
    return isUndefined(html) ? parent.innerHTML : append(parent.hasChildNodes() ? empty(parent) : parent, html);
  }

  function prepend(parent, element) {
    parent = $(parent);

    if (!parent.hasChildNodes()) {
      return append(parent, element);
    } else {
      return insertNodes(element, function (element) {
        return parent.insertBefore(element, parent.firstChild);
      });
    }
  }

  function append(parent, element) {
    parent = $(parent);
    return insertNodes(element, function (element) {
      return parent.appendChild(element);
    });
  }

  function before(ref, element) {
    ref = $(ref);
    return insertNodes(element, function (element) {
      return ref.parentNode.insertBefore(element, ref);
    });
  }

  function after(ref, element) {
    ref = $(ref);
    return insertNodes(element, function (element) {
      return ref.nextSibling ? before(ref.nextSibling, element) : append(ref.parentNode, element);
    });
  }

  function insertNodes(element, fn) {
    element = isString(element) ? fragment(element) : element;
    return element ? 'length' in element ? toNodes(element).map(fn) : fn(element) : null;
  }

  function _remove(element) {
    toNodes(element).forEach(function (element) {
      return element.parentNode && element.parentNode.removeChild(element);
    });
  }

  function wrapAll(element, structure) {
    structure = toNode(before(element, structure));

    while (structure.firstChild) {
      structure = structure.firstChild;
    }

    append(structure, element);
    return structure;
  }

  function wrapInner(element, structure) {
    return toNodes(toNodes(element).map(function (element) {
      return element.hasChildNodes ? wrapAll(toNodes(element.childNodes), structure) : append(element, structure);
    }));
  }

  function unwrap(element) {
    toNodes(element).map(parent).filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (parent) {
      before(parent, parent.childNodes);

      _remove(parent);
    });
  }

  var fragmentRe = /^\s*<(\w+|!)[^>]*>/;
  var singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

  function fragment(html) {
    var matches = singleTagRe.exec(html);

    if (matches) {
      return document.createElement(matches[1]);
    }

    var container = document.createElement('div');

    if (fragmentRe.test(html)) {
      container.insertAdjacentHTML('beforeend', html.trim());
    } else {
      container.textContent = html;
    }

    return container.childNodes.length > 1 ? toNodes(container.childNodes) : container.firstChild;
  }

  function apply(node, fn) {
    if (!isElement(node)) {
      return;
    }

    fn(node);
    node = node.firstElementChild;

    while (node) {
      var next = node.nextElementSibling;
      apply(node, fn);
      node = next;
    }
  }

  function $(selector, context) {
    return !isString(selector) ? toNode(selector) : isHtml(selector) ? toNode(fragment(selector)) : find(selector, context);
  }

  function $$(selector, context) {
    return !isString(selector) ? toNodes(selector) : isHtml(selector) ? toNodes(fragment(selector)) : findAll(selector, context);
  }

  function isHtml(str) {
    return str[0] === '<' || str.match(/^\s*</);
  }

  function addClass(element) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    apply$1(element, args, 'add');
  }

  function removeClass(element) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    apply$1(element, args, 'remove');
  }

  function removeClasses(element, cls) {
    attr(element, 'class', function (value) {
      return (value || '').replace(new RegExp("\\b" + cls + "\\b", 'g'), '');
    });
  }

  function replaceClass(element) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    args[0] && removeClass(element, args[0]);
    args[1] && addClass(element, args[1]);
  }

  function hasClass(element, cls) {
    var assign;
    assign = getClasses(cls), cls = assign[0];
    var nodes = toNodes(element);

    for (var n = 0; n < nodes.length; n++) {
      if (cls && nodes[n].classList.contains(cls)) {
        return true;
      }
    }

    return false;
  }

  function toggleClass(element, cls, force) {
    cls = getClasses(cls);
    var nodes = toNodes(element);

    for (var n = 0; n < nodes.length; n++) {
      var list = nodes[n].classList;

      for (var i = 0; i < cls.length; i++) {
        if (isUndefined(force)) {
          list.toggle(cls[i]);
        } else if (supports.Force) {
          list.toggle(cls[i], !!force);
        } else {
          list[force ? 'add' : 'remove'](cls[i]);
        }
      }
    }
  }

  function apply$1(element, args, fn) {
    var ref;
    args = args.reduce(function (args, arg) {
      return args.concat(getClasses(arg));
    }, []);
    var nodes = toNodes(element);

    var loop = function loop(n) {
      if (supports.Multiple) {
        (ref = nodes[n].classList)[fn].apply(ref, args);
      } else {
        args.forEach(function (cls) {
          return nodes[n].classList[fn](cls);
        });
      }
    };

    for (var n = 0; n < nodes.length; n++) {
      loop(n);
    }
  }

  function getClasses(str) {
    str = String(str);
    return (~str.indexOf(' ') ? str.split(' ') : [str]).filter(Boolean);
  } // IE 11


  var supports = {
    get Multiple() {
      return this.get('Multiple');
    },

    get Force() {
      return this.get('Force');
    },

    get: function get(key) {
      var ref = document.createElement('_');
      var classList = ref.classList;
      classList.add('a', 'b');
      classList.toggle('c', false);
      supports = {
        Multiple: classList.contains('b'),
        Force: !classList.contains('c')
      };
      return supports[key];
    }
  };
  var cssNumber = {
    'animation-iteration-count': true,
    'column-count': true,
    'fill-opacity': true,
    'flex-grow': true,
    'flex-shrink': true,
    'font-weight': true,
    'line-height': true,
    'opacity': true,
    'order': true,
    'orphans': true,
    'stroke-dasharray': true,
    'stroke-dashoffset': true,
    'widows': true,
    'z-index': true,
    'zoom': true
  };

  function css(element, property, value, priority) {
    if (priority === void 0) priority = '';
    return toNodes(element).map(function (element) {
      if (isString(property)) {
        property = propName(property);

        if (isUndefined(value)) {
          return getStyle(element, property);
        } else if (!value && !isNumber(value)) {
          element.style.removeProperty(property);
        } else {
          element.style.setProperty(property, isNumeric(value) && !cssNumber[property] ? value + "px" : value, priority);
        }
      } else if (isArray(property)) {
        var styles = getStyles(element);
        return property.reduce(function (props, property) {
          props[property] = styles[propName(property)];
          return props;
        }, {});
      } else if (isObject(property)) {
        priority = value;
        each(property, function (value, property) {
          return css(element, property, value, priority);
        });
      }

      return element;
    })[0];
  }

  function getStyles(element, pseudoElt) {
    element = toNode(element);
    return element.ownerDocument.defaultView.getComputedStyle(element, pseudoElt);
  }

  function getStyle(element, property, pseudoElt) {
    return getStyles(element, pseudoElt)[property];
  }

  var vars = {};

  function getCssVar(name) {
    var docEl = document.documentElement;

    if (!isIE) {
      return getStyles(docEl).getPropertyValue("--uk-" + name);
    }

    if (!(name in vars)) {
      /* usage in css: .uk-name:before { content:"xyz" } */
      var element = append(docEl, document.createElement('div'));
      addClass(element, "uk-" + name);
      vars[name] = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');

      _remove(element);
    }

    return vars[name];
  }

  var cssProps = {}; // https://drafts.csswg.org/cssom/#dom-cssstyledeclaration-setproperty

  function propName(name) {
    if (!cssProps[name]) {
      cssProps[name] = vendorPropName(name);
    }

    return cssProps[name];
  }

  var cssPrefixes = ['webkit', 'moz', 'ms'];

  function vendorPropName(name) {
    name = hyphenate(name);
    var ref = document.documentElement;
    var style = ref.style;

    if (name in style) {
      return name;
    }

    var i = cssPrefixes.length,
        prefixedName;

    while (i--) {
      prefixedName = "-" + cssPrefixes[i] + "-" + name;

      if (prefixedName in style) {
        return prefixedName;
      }
    }
  }

  function transition(element, props, duration, timing) {
    if (duration === void 0) duration = 400;
    if (timing === void 0) timing = 'linear';
    return Promise.all(toNodes(element).map(function (element) {
      return new Promise(function (resolve, reject) {
        for (var name in props) {
          var value = css(element, name);

          if (value === '') {
            css(element, name, value);
          }
        }

        var timer = setTimeout(function () {
          return trigger(element, 'transitionend');
        }, duration);
        once(element, 'transitionend transitioncanceled', function (ref) {
          var type = ref.type;
          clearTimeout(timer);
          removeClass(element, 'uk-transition');
          css(element, {
            transitionProperty: '',
            transitionDuration: '',
            transitionTimingFunction: ''
          });
          type === 'transitioncanceled' ? reject() : resolve(element);
        }, {
          self: true
        });
        addClass(element, 'uk-transition');
        css(element, assign({
          transitionProperty: Object.keys(props).map(propName).join(','),
          transitionDuration: duration + "ms",
          transitionTimingFunction: timing
        }, props));
      });
    }));
  }

  var Transition = {
    start: transition,
    stop: function stop(element) {
      trigger(element, 'transitionend');
      return Promise.resolve();
    },
    cancel: function cancel(element) {
      trigger(element, 'transitioncanceled');
    },
    inProgress: function inProgress(element) {
      return hasClass(element, 'uk-transition');
    }
  };
  var animationPrefix = 'uk-animation-';

  function animate(element, animation, duration, origin, out) {
    if (duration === void 0) duration = 200;
    return Promise.all(toNodes(element).map(function (element) {
      return new Promise(function (resolve, reject) {
        trigger(element, 'animationcanceled');
        var timer = setTimeout(function () {
          return trigger(element, 'animationend');
        }, duration);
        once(element, 'animationend animationcanceled', function (ref) {
          var type = ref.type;
          clearTimeout(timer);
          type === 'animationcanceled' ? reject() : resolve(element);
          css(element, 'animationDuration', '');
          removeClasses(element, animationPrefix + "\\S*");
        }, {
          self: true
        });
        css(element, 'animationDuration', duration + "ms");
        addClass(element, animation, animationPrefix + (out ? 'leave' : 'enter'));

        if (startsWith(animation, animationPrefix)) {
          addClass(element, origin && "uk-transform-origin-" + origin, out && animationPrefix + "reverse");
        }
      });
    }));
  }

  var _inProgress = new RegExp(animationPrefix + "(enter|leave)");

  var Animation = {
    "in": animate,
    out: function out(element, animation, duration, origin) {
      return animate(element, animation, duration, origin, true);
    },
    inProgress: function inProgress(element) {
      return _inProgress.test(attr(element, 'class'));
    },
    cancel: function cancel(element) {
      trigger(element, 'animationcanceled');
    }
  };
  var dirs = {
    width: ['left', 'right'],
    height: ['top', 'bottom']
  };

  function dimensions(element) {
    var rect = isWindow(element) || !toNode(element) ? {
      height: height(element),
      width: width(element),
      top: 0,
      left: 0
    } : toNode(element).getBoundingClientRect();
    return {
      height: rect.height,
      width: rect.width,
      top: rect.top,
      left: rect.left,
      bottom: rect.top + rect.height,
      right: rect.left + rect.width
    };
  }

  function offset(element, coordinates) {
    var currentOffset = dimensions(element);
    var ref = toWindow(element);
    var pageYOffset = ref.pageYOffset;
    var pageXOffset = ref.pageXOffset;
    var offsetBy = {
      height: pageYOffset,
      width: pageXOffset
    };

    for (var dir in dirs) {
      for (var i in dirs[dir]) {
        currentOffset[dirs[dir][i]] += offsetBy[dir];
      }
    }

    if (!coordinates) {
      return currentOffset;
    }

    var pos = css(element, 'position');
    each(css(element, ['left', 'top']), function (value, prop) {
      return css(element, prop, coordinates[prop] - currentOffset[prop] + toFloat(pos === 'absolute' && value === 'auto' ? position(element)[prop] : value));
    });
  }

  function position(element, parent) {
    element = toNode(element);
    parent = parent || element.offsetParent || element.documentElement;
    var elementOffset = offset(element);
    var parentOffset = offset(parent);
    return {
      top: elementOffset.top - parentOffset.top - toFloat(css(parent, 'borderTopWidth')),
      left: elementOffset.left - parentOffset.left - toFloat(css(parent, 'borderLeftWidth'))
    };
  }

  function offsetPosition(element) {
    var offset = [0, 0];
    element = toNode(element);

    do {
      offset[0] += element.offsetTop;
      offset[1] += element.offsetLeft;

      if (css(element, 'position') === 'fixed') {
        var win = toWindow(element);
        offset[0] += win.pageYOffset;
        offset[1] += win.pageXOffset;
        return offset;
      }
    } while (element = element.offsetParent);

    return offset;
  }

  var height = dimension('height');
  var width = dimension('width');

  function dimension(prop) {
    var propName = ucfirst(prop);
    return function (element, value) {
      if (isUndefined(value)) {
        if (isWindow(element)) {
          return element["inner" + propName];
        }

        if (isDocument(element)) {
          var doc = element.documentElement;
          return Math.max(doc["offset" + propName], doc["scroll" + propName]);
        }

        element = toNode(element);
        value = css(element, prop);
        value = value === 'auto' ? element["offset" + propName] : toFloat(value) || 0;
        return value - boxModelAdjust(element, prop);
      } else {
        return css(element, prop, !value && value !== 0 ? '' : +value + boxModelAdjust(element, prop) + 'px');
      }
    };
  }

  function boxModelAdjust(element, prop, sizing) {
    if (sizing === void 0) sizing = 'border-box';
    return css(element, 'boxSizing') === sizing ? dirs[prop].map(ucfirst).reduce(function (value, prop) {
      return value + toFloat(css(element, "padding" + prop)) + toFloat(css(element, "border" + prop + "Width"));
    }, 0) : 0;
  }

  function flipPosition(pos) {
    for (var dir in dirs) {
      for (var i in dirs[dir]) {
        if (dirs[dir][i] === pos) {
          return dirs[dir][1 - i];
        }
      }
    }

    return pos;
  }

  function toPx(value, property, element) {
    if (property === void 0) property = 'width';
    if (element === void 0) element = window;
    return isNumeric(value) ? +value : endsWith(value, 'vh') ? percent(height(toWindow(element)), value) : endsWith(value, 'vw') ? percent(width(toWindow(element)), value) : endsWith(value, '%') ? percent(dimensions(element)[property], value) : toFloat(value);
  }

  function percent(base, value) {
    return base * toFloat(value) / 100;
  }
  /*
      Based on:
      Copyright (c) 2016 Wilson Page wilsonpage@me.com
      https://github.com/wilsonpage/fastdom
  */


  var fastdom = {
    reads: [],
    writes: [],
    read: function read(task) {
      this.reads.push(task);
      scheduleFlush();
      return task;
    },
    write: function write(task) {
      this.writes.push(task);
      scheduleFlush();
      return task;
    },
    clear: function clear(task) {
      remove$1(this.reads, task);
      remove$1(this.writes, task);
    },
    flush: flush
  };

  function flush(recursion) {
    if (recursion === void 0) recursion = 1;
    runTasks(fastdom.reads);
    runTasks(fastdom.writes.splice(0, fastdom.writes.length));
    fastdom.scheduled = false;

    if (fastdom.reads.length || fastdom.writes.length) {
      scheduleFlush(recursion + 1);
    }
  }

  var RECURSION_LIMIT = 4;

  function scheduleFlush(recursion) {
    if (fastdom.scheduled) {
      return;
    }

    fastdom.scheduled = true;

    if (recursion && recursion < RECURSION_LIMIT) {
      Promise.resolve().then(function () {
        return flush(recursion);
      });
    } else {
      requestAnimationFrame(function () {
        return flush();
      });
    }
  }

  function runTasks(tasks) {
    var task;

    while (task = tasks.shift()) {
      task();
    }
  }

  function remove$1(array, item) {
    var index = array.indexOf(item);
    return ~index && array.splice(index, 1);
  }

  function MouseTracker() {}

  MouseTracker.prototype = {
    positions: [],
    init: function init() {
      var this$1 = this;
      this.positions = [];
      var position;
      this.unbind = on(document, 'mousemove', function (e) {
        return position = getEventPos(e);
      });
      this.interval = setInterval(function () {
        if (!position) {
          return;
        }

        this$1.positions.push(position);

        if (this$1.positions.length > 5) {
          this$1.positions.shift();
        }
      }, 50);
    },
    cancel: function cancel() {
      this.unbind && this.unbind();
      this.interval && clearInterval(this.interval);
    },
    movesTo: function movesTo(target) {
      if (this.positions.length < 2) {
        return false;
      }

      var p = target.getBoundingClientRect();
      var left = p.left;
      var right = p.right;
      var top = p.top;
      var bottom = p.bottom;
      var ref = this.positions;
      var prevPosition = ref[0];
      var position = last(this.positions);
      var path = [prevPosition, position];

      if (pointInRect(position, p)) {
        return false;
      }

      var diagonals = [[{
        x: left,
        y: top
      }, {
        x: right,
        y: bottom
      }], [{
        x: left,
        y: bottom
      }, {
        x: right,
        y: top
      }]];
      return diagonals.some(function (diagonal) {
        var intersection = intersect(path, diagonal);
        return intersection && pointInRect(intersection, p);
      });
    }
  }; // Inspired by http://paulbourke.net/geometry/pointlineplane/

  function intersect(ref, ref$1) {
    var ref_0 = ref[0];
    var x1 = ref_0.x;
    var y1 = ref_0.y;
    var ref_1 = ref[1];
    var x2 = ref_1.x;
    var y2 = ref_1.y;
    var ref$1_0 = ref$1[0];
    var x3 = ref$1_0.x;
    var y3 = ref$1_0.y;
    var ref$1_1 = ref$1[1];
    var x4 = ref$1_1.x;
    var y4 = ref$1_1.y;
    var denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1); // Lines are parallel

    if (denominator === 0) {
      return false;
    }

    var ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;

    if (ua < 0) {
      return false;
    } // Return an object with the x and y coordinates of the intersection


    return {
      x: x1 + ua * (x2 - x1),
      y: y1 + ua * (y2 - y1)
    };
  }

  var strats = {};
  strats.events = strats.created = strats.beforeConnect = strats.connected = strats.beforeDisconnect = strats.disconnected = strats.destroy = concatStrat; // args strategy

  strats.args = function (parentVal, childVal) {
    return childVal !== false && concatStrat(childVal || parentVal);
  }; // update strategy


  strats.update = function (parentVal, childVal) {
    return sortBy(concatStrat(parentVal, isFunction(childVal) ? {
      read: childVal
    } : childVal), 'order');
  }; // property strategy


  strats.props = function (parentVal, childVal) {
    if (isArray(childVal)) {
      childVal = childVal.reduce(function (value, key) {
        value[key] = String;
        return value;
      }, {});
    }

    return strats.methods(parentVal, childVal);
  }; // extend strategy


  strats.computed = strats.methods = function (parentVal, childVal) {
    return childVal ? parentVal ? assign({}, parentVal, childVal) : childVal : parentVal;
  }; // data strategy


  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (!childVal) {
        return parentVal;
      }

      if (!parentVal) {
        return childVal;
      }

      return function (vm) {
        return mergeFnData(parentVal, childVal, vm);
      };
    }

    return mergeFnData(parentVal, childVal, vm);
  };

  function mergeFnData(parentVal, childVal, vm) {
    return strats.computed(isFunction(parentVal) ? parentVal.call(vm, vm) : parentVal, isFunction(childVal) ? childVal.call(vm, vm) : childVal);
  } // concat strategy


  function concatStrat(parentVal, childVal) {
    parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;
    return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
  } // default strategy


  function defaultStrat(parentVal, childVal) {
    return isUndefined(childVal) ? parentVal : childVal;
  }

  function mergeOptions(parent, child, vm) {
    var options = {};

    if (isFunction(child)) {
      child = child.options;
    }

    if (child["extends"]) {
      parent = mergeOptions(parent, child["extends"], vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }

    for (var key in parent) {
      mergeKey(key);
    }

    for (var key$1 in child) {
      if (!hasOwn(parent, key$1)) {
        mergeKey(key$1);
      }
    }

    function mergeKey(key) {
      options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
    }

    return options;
  }

  function parseOptions(options, args) {
    var obj;
    if (args === void 0) args = [];

    try {
      return !options ? {} : startsWith(options, '{') ? JSON.parse(options) : args.length && !includes(options, ':') ? (obj = {}, obj[args[0]] = options, obj) : options.split(';').reduce(function (options, option) {
        var ref = option.split(/:(.*)/);
        var key = ref[0];
        var value = ref[1];

        if (key && !isUndefined(value)) {
          options[key.trim()] = value.trim();
        }

        return options;
      }, {});
    } catch (e) {
      return {};
    }
  }

  function play(el) {
    if (isIFrame(el)) {
      call(el, {
        func: 'playVideo',
        method: 'play'
      });
    }

    if (isHTML5(el)) {
      try {
        el.play()["catch"](noop);
      } catch (e) {}
    }
  }

  function pause(el) {
    if (isIFrame(el)) {
      call(el, {
        func: 'pauseVideo',
        method: 'pause'
      });
    }

    if (isHTML5(el)) {
      el.pause();
    }
  }

  function mute(el) {
    if (isIFrame(el)) {
      call(el, {
        func: 'mute',
        method: 'setVolume',
        value: 0
      });
    }

    if (isHTML5(el)) {
      el.muted = true;
    }
  }

  function isHTML5(el) {
    return el && el.tagName === 'VIDEO';
  }

  function isIFrame(el) {
    return el && el.tagName === 'IFRAME' && (isYoutube(el) || isVimeo(el));
  }

  function isYoutube(el) {
    return !!el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
  }

  function isVimeo(el) {
    return !!el.src.match(/vimeo\.com\/video\/.*/);
  }

  function call(el, cmd) {
    enableApi(el).then(function () {
      return post(el, cmd);
    });
  }

  function post(el, cmd) {
    try {
      el.contentWindow.postMessage(JSON.stringify(assign({
        event: 'command'
      }, cmd)), '*');
    } catch (e) {}
  }

  var stateKey = '_ukPlayer';
  var counter = 0;

  function enableApi(el) {
    if (el[stateKey]) {
      return el[stateKey];
    }

    var youtube = isYoutube(el);
    var vimeo = isVimeo(el);
    var id = ++counter;
    var poller;
    return el[stateKey] = new Promise(function (resolve) {
      youtube && once(el, 'load', function () {
        var listener = function listener() {
          return post(el, {
            event: 'listening',
            id: id
          });
        };

        poller = setInterval(listener, 100);
        listener();
      });
      once(window, 'message', resolve, false, function (ref) {
        var data = ref.data;

        try {
          data = JSON.parse(data);
          return data && (youtube && data.id === id && data.event === 'onReady' || vimeo && Number(data.player_id) === id);
        } catch (e) {}
      });
      el.src = "" + el.src + (includes(el.src, '?') ? '&' : '?') + (youtube ? 'enablejsapi=1' : "api=1&player_id=" + id);
    }).then(function () {
      return clearInterval(poller);
    });
  }

  function isInView(element, offsetTop, offsetLeft) {
    if (offsetTop === void 0) offsetTop = 0;
    if (offsetLeft === void 0) offsetLeft = 0;

    if (!isVisible(element)) {
      return false;
    }

    return intersectRect.apply(void 0, scrollParents(element).map(function (parent) {
      var ref = offset(getViewport(parent));
      var top = ref.top;
      var left = ref.left;
      var bottom = ref.bottom;
      var right = ref.right;
      return {
        top: top - offsetTop,
        left: left - offsetLeft,
        bottom: bottom + offsetTop,
        right: right + offsetLeft
      };
    }).concat(offset(element)));
  }

  function scrollTop(element, top) {
    if (isWindow(element) || isDocument(element)) {
      element = getScrollingElement(element);
    } else {
      element = toNode(element);
    }

    element.scrollTop = top;
  }

  function scrollIntoView(element, ref) {
    if (ref === void 0) ref = {};
    var offsetBy = ref.offset;
    if (offsetBy === void 0) offsetBy = 0;

    if (!isVisible(element)) {
      return;
    }

    var parents = scrollParents(element);
    var diff = 0;
    return parents.reduce(function (fn, scrollElement, i) {
      var scrollTop = scrollElement.scrollTop;
      var scrollHeight = scrollElement.scrollHeight;
      var viewport = getViewport(scrollElement);
      var maxScroll = scrollHeight - height(viewport);
      var top = Math.ceil(position(parents[i - 1] || element, viewport).top - offsetBy) + diff + scrollTop;

      if (top > maxScroll) {
        diff = top - maxScroll;
        top = maxScroll;
      } else {
        diff = 0;
      }

      return function () {
        return scrollTo(scrollElement, top - scrollTop).then(fn);
      };
    }, function () {
      return Promise.resolve();
    })();

    function scrollTo(element, top) {
      return new Promise(function (resolve) {
        var scroll = element.scrollTop;
        var duration = getDuration(Math.abs(top));
        var start = Date.now();

        (function step() {
          var percent = ease(clamp((Date.now() - start) / duration));
          scrollTop(element, scroll + top * percent); // scroll more if we have not reached our destination

          if (percent !== 1) {
            requestAnimationFrame(step);
          } else {
            resolve();
          }
        })();
      });
    }

    function getDuration(dist) {
      return 40 * Math.pow(dist, .375);
    }

    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }
  }

  function scrolledOver(element, heightOffset) {
    if (heightOffset === void 0) heightOffset = 0;

    if (!isVisible(element)) {
      return 0;
    }

    var ref = scrollParents(element, /auto|scroll/);
    var scrollElement = ref[0];
    var scrollHeight = scrollElement.scrollHeight;
    var scrollTop = scrollElement.scrollTop;
    var viewport = getViewport(scrollElement);
    var viewportHeight = height(viewport);
    var viewportTop = offsetPosition(element)[0] - scrollTop - offsetPosition(scrollElement)[0];
    var viewportDist = Math.min(viewportHeight, viewportTop + scrollTop);
    var top = viewportTop - viewportDist;
    var dist = Math.min(height(element) + heightOffset + viewportDist, scrollHeight - (viewportTop + scrollTop), scrollHeight - viewportHeight);
    return clamp(-1 * top / dist);
  }

  function scrollParents(element, overflowRe, scrollable) {
    if (overflowRe === void 0) overflowRe = /auto|scroll|hidden/;
    if (scrollable === void 0) scrollable = false;
    var scrollEl = getScrollingElement(element);
    var ancestors = parents(element).reverse();
    ancestors = ancestors.slice(ancestors.indexOf(scrollEl) + 1);
    var fixedIndex = findIndex(ancestors, function (el) {
      return css(el, 'position') === 'fixed';
    });

    if (~fixedIndex) {
      ancestors = ancestors.slice(fixedIndex);
    }

    return [scrollEl].concat(ancestors.filter(function (parent) {
      return overflowRe.test(css(parent, 'overflow')) && (!scrollable || parent.scrollHeight > height(parent));
    })).reverse();
  }

  function getViewport(scrollElement) {
    return scrollElement === getScrollingElement(scrollElement) ? window : scrollElement;
  }

  function getScrollingElement(element) {
    var ref = toWindow(element);
    var document = ref.document;
    return document.scrollingElement || document.documentElement;
  }

  var dirs$1 = {
    width: ['x', 'left', 'right'],
    height: ['y', 'top', 'bottom']
  };

  function _positionAt(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {
    elAttach = getPos(elAttach);
    targetAttach = getPos(targetAttach);
    var flipped = {
      element: elAttach,
      target: targetAttach
    };

    if (!element || !target) {
      return flipped;
    }

    var dim = offset(element);
    var targetDim = offset(target);
    var position = targetDim;
    moveTo(position, elAttach, dim, -1);
    moveTo(position, targetAttach, targetDim, 1);
    elOffset = getOffsets(elOffset, dim.width, dim.height);
    targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);
    elOffset['x'] += targetOffset['x'];
    elOffset['y'] += targetOffset['y'];
    position.left += elOffset['x'];
    position.top += elOffset['y'];

    if (flip) {
      var boundaries = scrollParents(target).map(getViewport);

      if (boundary && includes(boundaries, boundary)) {
        boundaries.unshift(boundary);
      }

      boundaries = boundaries.map(function (el) {
        return offset(el);
      });
      each(dirs$1, function (ref, prop) {
        var dir = ref[0];
        var align = ref[1];
        var alignFlip = ref[2];

        if (!(flip === true || includes(flip, dir))) {
          return;
        }

        boundaries.some(function (boundary) {
          var elemOffset = elAttach[dir] === align ? -dim[prop] : elAttach[dir] === alignFlip ? dim[prop] : 0;
          var targetOffset = targetAttach[dir] === align ? targetDim[prop] : targetAttach[dir] === alignFlip ? -targetDim[prop] : 0;

          if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {
            var centerOffset = dim[prop] / 2;
            var centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;
            return elAttach[dir] === 'center' && (apply(centerOffset, centerTargetOffset) || apply(-centerOffset, -centerTargetOffset)) || apply(elemOffset, targetOffset);
          }

          function apply(elemOffset, targetOffset) {
            var newVal = toFloat((position[align] + elemOffset + targetOffset - elOffset[dir] * 2).toFixed(4));

            if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
              position[align] = newVal;
              ['element', 'target'].forEach(function (el) {
                flipped[el][dir] = !elemOffset ? flipped[el][dir] : flipped[el][dir] === dirs$1[prop][1] ? dirs$1[prop][2] : dirs$1[prop][1];
              });
              return true;
            }
          }
        });
      });
    }

    offset(element, position);
    return flipped;
  }

  function moveTo(position, attach, dim, factor) {
    each(dirs$1, function (ref, prop) {
      var dir = ref[0];
      var align = ref[1];
      var alignFlip = ref[2];

      if (attach[dir] === alignFlip) {
        position[align] += dim[prop] * factor;
      } else if (attach[dir] === 'center') {
        position[align] += dim[prop] * factor / 2;
      }
    });
  }

  function getPos(pos) {
    var x = /left|center|right/;
    var y = /top|center|bottom/;
    pos = (pos || '').split(' ');

    if (pos.length === 1) {
      pos = x.test(pos[0]) ? pos.concat('center') : y.test(pos[0]) ? ['center'].concat(pos) : ['center', 'center'];
    }

    return {
      x: x.test(pos[0]) ? pos[0] : 'center',
      y: y.test(pos[1]) ? pos[1] : 'center'
    };
  }

  function getOffsets(offsets, width, height) {
    var ref = (offsets || '').split(' ');
    var x = ref[0];
    var y = ref[1];
    return {
      x: x ? toFloat(x) * (endsWith(x, '%') ? width / 100 : 1) : 0,
      y: y ? toFloat(y) * (endsWith(y, '%') ? height / 100 : 1) : 0
    };
  }

  var util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ajax: ajax,
    getImage: getImage,
    transition: transition,
    Transition: Transition,
    animate: animate,
    Animation: Animation,
    attr: attr,
    hasAttr: hasAttr,
    removeAttr: removeAttr,
    data: data,
    addClass: addClass,
    removeClass: removeClass,
    removeClasses: removeClasses,
    replaceClass: replaceClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    dimensions: dimensions,
    offset: offset,
    position: position,
    offsetPosition: offsetPosition,
    height: height,
    width: width,
    boxModelAdjust: boxModelAdjust,
    flipPosition: flipPosition,
    toPx: toPx,
    ready: ready,
    empty: empty,
    html: html,
    prepend: prepend,
    append: append,
    before: before,
    after: after,
    remove: _remove,
    wrapAll: wrapAll,
    wrapInner: wrapInner,
    unwrap: unwrap,
    fragment: fragment,
    apply: apply,
    $: $,
    $$: $$,
    inBrowser: inBrowser,
    isIE: isIE,
    isRtl: isRtl,
    hasTouch: hasTouch,
    pointerDown: pointerDown,
    pointerMove: pointerMove,
    pointerUp: pointerUp,
    pointerEnter: pointerEnter,
    pointerLeave: pointerLeave,
    pointerCancel: pointerCancel,
    on: on,
    off: off,
    once: once,
    trigger: trigger,
    createEvent: createEvent,
    toEventTargets: toEventTargets,
    isTouch: isTouch,
    getEventPos: getEventPos,
    fastdom: fastdom,
    isVoidElement: isVoidElement,
    isVisible: isVisible,
    selInput: selInput,
    isInput: isInput,
    parent: parent,
    filter: filter,
    matches: matches,
    closest: closest,
    within: within,
    parents: parents,
    children: _children,
    index: index,
    hasOwn: hasOwn,
    hyphenate: hyphenate,
    camelize: camelize,
    ucfirst: ucfirst,
    startsWith: startsWith,
    endsWith: endsWith,
    includes: includes,
    findIndex: findIndex,
    isArray: isArray,
    isFunction: isFunction,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isWindow: isWindow,
    isDocument: isDocument,
    isNode: isNode,
    isElement: isElement,
    isBoolean: isBoolean,
    isString: isString,
    isNumber: isNumber,
    isNumeric: isNumeric,
    isEmpty: isEmpty,
    isUndefined: isUndefined,
    toBoolean: toBoolean,
    toNumber: toNumber,
    toFloat: toFloat,
    toArray: toArray,
    toNode: toNode,
    toNodes: toNodes,
    toWindow: toWindow,
    toMs: toMs,
    isEqual: isEqual,
    swap: swap,
    assign: assign,
    last: last,
    each: each,
    sortBy: sortBy,
    uniqueBy: uniqueBy,
    clamp: clamp,
    noop: noop,
    intersectRect: intersectRect,
    pointInRect: pointInRect,
    Dimensions: Dimensions,
    getIndex: _getIndex,
    MouseTracker: MouseTracker,
    mergeOptions: mergeOptions,
    parseOptions: parseOptions,
    play: play,
    pause: pause,
    mute: mute,
    positionAt: _positionAt,
    Promise: Promise,
    Deferred: Deferred,
    query: query,
    queryAll: queryAll,
    find: find,
    findAll: findAll,
    escape: escape,
    css: css,
    getStyles: getStyles,
    getStyle: getStyle,
    getCssVar: getCssVar,
    propName: propName,
    isInView: isInView,
    scrollTop: scrollTop,
    scrollIntoView: scrollIntoView,
    scrolledOver: scrolledOver,
    scrollParents: scrollParents,
    getViewport: getViewport
  });

  function globalAPI(UIkit) {
    var DATA = UIkit.data;

    UIkit.use = function (plugin) {
      if (plugin.installed) {
        return;
      }

      plugin.call(null, this);
      plugin.installed = true;
      return this;
    };

    UIkit.mixin = function (mixin, component) {
      component = (isString(component) ? UIkit.component(component) : component) || this;
      component.options = mergeOptions(component.options, mixin);
    };

    UIkit.extend = function (options) {
      options = options || {};
      var Super = this;

      var Sub = function UIkitComponent(options) {
        this._init(options);
      };

      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.options = mergeOptions(Super.options, options);
      Sub["super"] = Super;
      Sub.extend = Super.extend;
      return Sub;
    };

    UIkit.update = function (element, e) {
      element = element ? toNode(element) : document.body;
      parents(element).reverse().forEach(function (element) {
        return update(element[DATA], e);
      });
      apply(element, function (element) {
        return update(element[DATA], e);
      });
    };

    var container;
    Object.defineProperty(UIkit, 'container', {
      get: function get() {
        return container || document.body;
      },
      set: function set(element) {
        container = $(element);
      }
    });

    function update(data, e) {
      if (!data) {
        return;
      }

      for (var name in data) {
        if (data[name]._connected) {
          data[name]._callUpdate(e);
        }
      }
    }
  }

  function hooksAPI(UIkit) {
    UIkit.prototype._callHook = function (hook) {
      var this$1 = this;
      var handlers = this.$options[hook];

      if (handlers) {
        handlers.forEach(function (handler) {
          return handler.call(this$1);
        });
      }
    };

    UIkit.prototype._callConnected = function () {
      if (this._connected) {
        return;
      }

      this._data = {};
      this._computeds = {};
      this._frame = 0;

      this._initProps();

      this._callHook('beforeConnect');

      this._connected = true;

      this._initEvents();

      this._initObservers();

      this._callHook('connected');

      this._callUpdate();
    };

    UIkit.prototype._callDisconnected = function () {
      if (!this._connected) {
        return;
      }

      this._callHook('beforeDisconnect');

      this._disconnectObservers();

      this._unbindEvents();

      this._callHook('disconnected');

      this._connected = false;
    };

    UIkit.prototype._callUpdate = function (e) {
      var this$1 = this;
      if (e === void 0) e = 'update';
      var type = e.type || e;

      if (~['update', 'resize'].indexOf(type)) {
        this._callWatches();
      }

      var updates = this.$options.update;

      if (!updates) {
        return;
      }

      var frame = this._frame = ++this._frame % 64;

      var loop = function loop(i) {
        var ref = updates[i];
        var read = ref.read;
        var write = ref.write;
        var events = ref.events;

        if (type !== 'update' && (!events || !~events.indexOf(type))) {
          return;
        }

        var cancel = void 0;

        if (read) {
          fastdom.read(function () {
            if (!this$1._connected || frame !== this$1._frame) {
              return;
            }

            var result = read.call(this$1, this$1._data, type);

            if (result === false) {
              cancel = true;
            } else if (isPlainObject(result)) {
              assign(this$1._data, result);
            }
          });
        }

        if (write) {
          fastdom.write(function () {
            if (cancel || !this$1._connected || frame !== this$1._frame) {
              return;
            }

            write.call(this$1, this$1._data, type);
          });
        }
      };

      for (var i = 0; i < updates.length; i++) {
        loop(i);
      }
    };

    UIkit.prototype._callWatches = function () {
      var this$1 = this;
      var ref = this;
      var _watch = ref._watch;

      if (_watch) {
        return;
      }

      var initital = !hasOwn(this, '_watch');
      this._watch = fastdom.read(function () {
        if (!this$1._connected) {
          return;
        }

        var ref = this$1;
        var computed = ref.$options.computed;
        var _computeds = ref._computeds;

        for (var key in computed) {
          var hasPrev = hasOwn(_computeds, key);
          var prev = _computeds[key];
          delete _computeds[key];
          var ref$1 = computed[key];
          var watch = ref$1.watch;
          var immediate = ref$1.immediate;

          if (watch && (initital && immediate || hasPrev && !isEqual(prev, this$1[key]))) {
            watch.call(this$1, this$1[key], prev);
          }
        }

        this$1._watch = null;
      });
    };
  }

  function stateAPI(UIkit) {
    var uid = 0;

    UIkit.prototype._init = function (options) {
      options = options || {};
      options.data = normalizeData(options, this.constructor.options);
      this.$options = mergeOptions(this.constructor.options, options, this);
      this.$el = null;
      this.$props = {};
      this._uid = uid++;

      this._initData();

      this._initMethods();

      this._initComputeds();

      this._callHook('created');

      if (options.el) {
        this.$mount(options.el);
      }
    };

    UIkit.prototype._initData = function () {
      var ref = this.$options;
      var data = ref.data;
      if (data === void 0) data = {};

      for (var key in data) {
        this.$props[key] = this[key] = data[key];
      }
    };

    UIkit.prototype._initMethods = function () {
      var ref = this.$options;
      var methods = ref.methods;

      if (methods) {
        for (var key in methods) {
          this[key] = methods[key].bind(this);
        }
      }
    };

    UIkit.prototype._initComputeds = function () {
      var ref = this.$options;
      var computed = ref.computed;
      this._computeds = {};

      if (computed) {
        for (var key in computed) {
          registerComputed(this, key, computed[key]);
        }
      }
    };

    UIkit.prototype._initProps = function (props) {
      var key;
      props = props || getProps(this.$options, this.$name);

      for (key in props) {
        if (!isUndefined(props[key])) {
          this.$props[key] = props[key];
        }
      }

      var exclude = [this.$options.computed, this.$options.methods];

      for (key in this.$props) {
        if (key in props && notIn(exclude, key)) {
          this[key] = this.$props[key];
        }
      }
    };

    UIkit.prototype._initEvents = function () {
      var this$1 = this;
      this._events = [];
      var ref = this.$options;
      var events = ref.events;

      if (events) {
        events.forEach(function (event) {
          if (!hasOwn(event, 'handler')) {
            for (var key in event) {
              registerEvent(this$1, event[key], key);
            }
          } else {
            registerEvent(this$1, event);
          }
        });
      }
    };

    UIkit.prototype._unbindEvents = function () {
      this._events.forEach(function (unbind) {
        return unbind();
      });

      delete this._events;
    };

    UIkit.prototype._initObservers = function () {
      this._observers = [initChildListObserver(this), initPropsObserver(this)];
    };

    UIkit.prototype._disconnectObservers = function () {
      this._observers.forEach(function (observer) {
        return observer && observer.disconnect();
      });
    };

    function getProps(opts, name) {
      var data$1 = {};
      var args = opts.args;
      if (args === void 0) args = [];
      var props = opts.props;
      if (props === void 0) props = {};
      var el = opts.el;

      if (!props) {
        return data$1;
      }

      for (var key in props) {
        var prop = hyphenate(key);
        var value = data(el, prop);

        if (isUndefined(value)) {
          continue;
        }

        value = props[key] === Boolean && value === '' ? true : coerce(props[key], value);

        if (prop === 'target' && (!value || startsWith(value, '_'))) {
          continue;
        }

        data$1[key] = value;
      }

      var options = parseOptions(data(el, name), args);

      for (var key$1 in options) {
        var prop$1 = camelize(key$1);

        if (props[prop$1] !== undefined) {
          data$1[prop$1] = coerce(props[prop$1], options[key$1]);
        }
      }

      return data$1;
    }

    function registerComputed(component, key, cb) {
      Object.defineProperty(component, key, {
        enumerable: true,
        get: function get() {
          var _computeds = component._computeds;
          var $props = component.$props;
          var $el = component.$el;

          if (!hasOwn(_computeds, key)) {
            _computeds[key] = (cb.get || cb).call(component, $props, $el);
          }

          return _computeds[key];
        },
        set: function set(value) {
          var _computeds = component._computeds;
          _computeds[key] = cb.set ? cb.set.call(component, value) : value;

          if (isUndefined(_computeds[key])) {
            delete _computeds[key];
          }
        }
      });
    }

    function registerEvent(component, event, key) {
      if (!isPlainObject(event)) {
        event = {
          name: key,
          handler: event
        };
      }

      var name = event.name;
      var el = event.el;
      var handler = event.handler;
      var capture = event.capture;
      var passive = event.passive;
      var delegate = event.delegate;
      var filter = event.filter;
      var self = event.self;
      el = isFunction(el) ? el.call(component) : el || component.$el;

      if (isArray(el)) {
        el.forEach(function (el) {
          return registerEvent(component, assign({}, event, {
            el: el
          }), key);
        });
        return;
      }

      if (!el || filter && !filter.call(component)) {
        return;
      }

      component._events.push(on(el, name, !delegate ? null : isString(delegate) ? delegate : delegate.call(component), isString(handler) ? component[handler] : handler.bind(component), {
        passive: passive,
        capture: capture,
        self: self
      }));
    }

    function notIn(options, key) {
      return options.every(function (arr) {
        return !arr || !hasOwn(arr, key);
      });
    }

    function coerce(type, value) {
      if (type === Boolean) {
        return toBoolean(value);
      } else if (type === Number) {
        return toNumber(value);
      } else if (type === 'list') {
        return toList(value);
      }

      return type ? type(value) : value;
    }

    function toList(value) {
      return isArray(value) ? value : isString(value) ? value.split(/,(?![^(]*\))/).map(function (value) {
        return isNumeric(value) ? toNumber(value) : toBoolean(value.trim());
      }) : [value];
    }

    function normalizeData(ref, ref$1) {
      var data = ref.data;
      var el = ref.el;
      var args = ref$1.args;
      var props = ref$1.props;
      if (props === void 0) props = {};
      data = isArray(data) ? !isEmpty(args) ? data.slice(0, args.length).reduce(function (data, value, index) {
        if (isPlainObject(value)) {
          assign(data, value);
        } else {
          data[args[index]] = value;
        }

        return data;
      }, {}) : undefined : data;

      if (data) {
        for (var key in data) {
          if (isUndefined(data[key])) {
            delete data[key];
          } else {
            data[key] = props[key] ? coerce(props[key], data[key]) : data[key];
          }
        }
      }

      return data;
    }

    function initChildListObserver(component) {
      var ref = component.$options;
      var el = ref.el;
      var observer = new MutationObserver(function () {
        return component.$emit();
      });
      observer.observe(el, {
        childList: true,
        subtree: true
      });
      return observer;
    }

    function initPropsObserver(component) {
      var $name = component.$name;
      var $options = component.$options;
      var $props = component.$props;
      var attrs = $options.attrs;
      var props = $options.props;
      var el = $options.el;

      if (!props || attrs === false) {
        return;
      }

      var attributes = isArray(attrs) ? attrs : Object.keys(props);
      var filter = attributes.map(function (key) {
        return hyphenate(key);
      }).concat($name);
      var observer = new MutationObserver(function (records) {
        var data = getProps($options, $name);

        if (records.some(function (ref) {
          var attributeName = ref.attributeName;
          var prop = attributeName.replace('data-', '');
          return (prop === $name ? attributes : [camelize(prop), camelize(attributeName)]).some(function (prop) {
            return !isUndefined(data[prop]) && data[prop] !== $props[prop];
          });
        })) {
          component.$reset();
        }
      });
      observer.observe(el, {
        attributes: true,
        attributeFilter: filter.concat(filter.map(function (key) {
          return "data-" + key;
        }))
      });
      return observer;
    }
  }

  function instanceAPI(UIkit) {
    var DATA = UIkit.data;

    UIkit.prototype.$create = function (component, element, data) {
      return UIkit[component](element, data);
    };

    UIkit.prototype.$mount = function (el) {
      var ref = this.$options;
      var name = ref.name;

      if (!el[DATA]) {
        el[DATA] = {};
      }

      if (el[DATA][name]) {
        return;
      }

      el[DATA][name] = this;
      this.$el = this.$options.el = this.$options.el || el;

      if (within(el, document)) {
        this._callConnected();
      }
    };

    UIkit.prototype.$reset = function () {
      this._callDisconnected();

      this._callConnected();
    };

    UIkit.prototype.$destroy = function (removeEl) {
      if (removeEl === void 0) removeEl = false;
      var ref = this.$options;
      var el = ref.el;
      var name = ref.name;

      if (el) {
        this._callDisconnected();
      }

      this._callHook('destroy');

      if (!el || !el[DATA]) {
        return;
      }

      delete el[DATA][name];

      if (!isEmpty(el[DATA])) {
        delete el[DATA];
      }

      if (removeEl) {
        _remove(this.$el);
      }
    };

    UIkit.prototype.$emit = function (e) {
      this._callUpdate(e);
    };

    UIkit.prototype.$update = function (element, e) {
      if (element === void 0) element = this.$el;
      UIkit.update(element, e);
    };

    UIkit.prototype.$getComponent = UIkit.getComponent;
    var names = {};
    Object.defineProperties(UIkit.prototype, {
      $container: Object.getOwnPropertyDescriptor(UIkit, 'container'),
      $name: {
        get: function get() {
          var ref = this.$options;
          var name = ref.name;

          if (!names[name]) {
            names[name] = UIkit.prefix + hyphenate(name);
          }

          return names[name];
        }
      }
    });
  }

  function componentAPI(UIkit) {
    var DATA = UIkit.data;
    var components = {};

    UIkit.component = function (name, options) {
      var id = hyphenate(name);
      name = camelize(id);

      if (!options) {
        if (isPlainObject(components[name])) {
          components[name] = UIkit.extend(components[name]);
        }

        return components[name];
      }

      UIkit[name] = function (element, data) {
        var i = arguments.length,
            argsArray = Array(i);

        while (i--) {
          argsArray[i] = arguments[i];
        }

        var component = UIkit.component(name);
        return component.options.functional ? new component({
          data: isPlainObject(element) ? element : [].concat(argsArray)
        }) : !element ? init(element) : $$(element).map(init)[0];

        function init(element) {
          var instance = UIkit.getComponent(element, name);

          if (instance) {
            if (!data) {
              return instance;
            } else {
              instance.$destroy();
            }
          }

          return new component({
            el: element,
            data: data
          });
        }
      };

      var opt = isPlainObject(options) ? assign({}, options) : options.options;
      opt.name = name;

      if (opt.install) {
        opt.install(UIkit, opt, name);
      }

      if (UIkit._initialized && !opt.functional) {
        fastdom.read(function () {
          return UIkit[name]("[uk-" + id + "],[data-uk-" + id + "]");
        });
      }

      return components[name] = isPlainObject(options) ? opt : options;
    };

    UIkit.getComponents = function (element) {
      return element && element[DATA] || {};
    };

    UIkit.getComponent = function (element, name) {
      return UIkit.getComponents(element)[name];
    };

    UIkit.connect = function (node) {
      if (node[DATA]) {
        for (var name in node[DATA]) {
          node[DATA][name]._callConnected();
        }
      }

      for (var i = 0; i < node.attributes.length; i++) {
        var name$1 = getComponentName(node.attributes[i].name);

        if (name$1 && name$1 in components) {
          UIkit[name$1](node);
        }
      }
    };

    UIkit.disconnect = function (node) {
      for (var name in node[DATA]) {
        node[DATA][name]._callDisconnected();
      }
    };
  }

  function getComponentName(attribute) {
    return startsWith(attribute, 'uk-') || startsWith(attribute, 'data-uk-') ? camelize(attribute.replace('data-uk-', '').replace('uk-', '')) : false;
  }

  var UIkit = function UIkit(options) {
    this._init(options);
  };

  UIkit.util = util;
  UIkit.data = '__uikit__';
  UIkit.prefix = 'uk-';
  UIkit.options = {};
  UIkit.version = '3.6.8';
  globalAPI(UIkit);
  hooksAPI(UIkit);
  stateAPI(UIkit);
  componentAPI(UIkit);
  instanceAPI(UIkit);

  function Core(UIkit) {
    if (!inBrowser) {
      return;
    } // throttle 'resize'


    var pendingResize;

    var handleResize = function handleResize() {
      if (pendingResize) {
        return;
      }

      pendingResize = true;
      fastdom.write(function () {
        return pendingResize = false;
      });
      UIkit.update(null, 'resize');
    };

    on(window, 'load resize', handleResize);
    on(document, 'loadedmetadata load', handleResize, true);

    if ('ResizeObserver' in window) {
      new ResizeObserver(handleResize).observe(document.documentElement);
    } // throttle `scroll` event (Safari triggers multiple `scroll` events per frame)


    var pending;
    on(window, 'scroll', function (e) {
      if (pending) {
        return;
      }

      pending = true;
      fastdom.write(function () {
        return pending = false;
      });
      UIkit.update(null, e.type);
    }, {
      passive: true,
      capture: true
    });
    var started = 0;
    on(document, 'animationstart', function (ref) {
      var target = ref.target;

      if ((css(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {
        started++;
        css(document.documentElement, 'overflowX', 'hidden');
        setTimeout(function () {
          if (! --started) {
            css(document.documentElement, 'overflowX', '');
          }
        }, toMs(css(target, 'animationDuration')) + 100);
      }
    }, true);
    on(document, pointerDown, function (e) {
      if (!isTouch(e)) {
        return;
      } // Handle Swipe Gesture


      var pos = getEventPos(e);
      var target = 'tagName' in e.target ? e.target : parent(e.target);
      once(document, pointerUp + " " + pointerCancel + " scroll", function (e) {
        var ref = getEventPos(e);
        var x = ref.x;
        var y = ref.y; // swipe

        if (e.type !== 'scroll' && target && x && Math.abs(pos.x - x) > 100 || y && Math.abs(pos.y - y) > 100) {
          setTimeout(function () {
            trigger(target, 'swipe');
            trigger(target, "swipe" + swipeDirection(pos.x, pos.y, x, y));
          });
        }
      });
    }, {
      passive: true
    });
  }

  function swipeDirection(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
  }

  function boot(UIkit) {
    var connect = UIkit.connect;
    var disconnect = UIkit.disconnect;

    if (!inBrowser || !window.MutationObserver) {
      return;
    }

    fastdom.read(function () {
      if (document.body) {
        apply(document.body, connect);
      }

      new MutationObserver(function (records) {
        return records.forEach(applyChildListMutation);
      }).observe(document, {
        childList: true,
        subtree: true
      });
      new MutationObserver(function (records) {
        return records.forEach(applyAttributeMutation);
      }).observe(document, {
        attributes: true,
        subtree: true
      });
      UIkit._initialized = true;
    });

    function applyChildListMutation(ref) {
      var addedNodes = ref.addedNodes;
      var removedNodes = ref.removedNodes;

      for (var i = 0; i < addedNodes.length; i++) {
        apply(addedNodes[i], connect);
      }

      for (var i$1 = 0; i$1 < removedNodes.length; i$1++) {
        apply(removedNodes[i$1], disconnect);
      }
    }

    function applyAttributeMutation(ref) {
      var target = ref.target;
      var attributeName = ref.attributeName;
      var name = getComponentName(attributeName);

      if (!name || !(name in UIkit)) {
        return;
      }

      if (hasAttr(target, attributeName)) {
        UIkit[name](target);
        return;
      }

      var component = UIkit.getComponent(target, name);

      if (component) {
        component.$destroy();
      }
    }
  }

  var Class = {
    connected: function connected() {
      !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
    }
  };
  var Togglable = {
    props: {
      cls: Boolean,
      animation: 'list',
      duration: Number,
      origin: String,
      transition: String
    },
    data: {
      cls: false,
      animation: [false],
      duration: 200,
      origin: false,
      transition: 'linear',
      clsEnter: 'uk-togglabe-enter',
      clsLeave: 'uk-togglabe-leave',
      initProps: {
        overflow: '',
        height: '',
        paddingTop: '',
        paddingBottom: '',
        marginTop: '',
        marginBottom: ''
      },
      hideProps: {
        overflow: 'hidden',
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
      }
    },
    computed: {
      hasAnimation: function hasAnimation(ref) {
        var animation = ref.animation;
        return !!animation[0];
      },
      hasTransition: function hasTransition(ref) {
        var animation = ref.animation;
        return this.hasAnimation && animation[0] === true;
      }
    },
    methods: {
      toggleElement: function toggleElement(targets, toggle, animate) {
        var this$1 = this;
        return new Promise(function (resolve) {
          return Promise.all(toNodes(targets).map(function (el) {
            var show = isBoolean(toggle) ? toggle : !this$1.isToggled(el);

            if (!trigger(el, "before" + (show ? 'show' : 'hide'), [this$1])) {
              return Promise.reject();
            }

            var promise = (isFunction(animate) ? animate : animate === false || !this$1.hasAnimation ? this$1._toggle : this$1.hasTransition ? toggleHeight(this$1) : toggleAnimation(this$1))(el, show) || Promise.resolve();
            addClass(el, show ? this$1.clsEnter : this$1.clsLeave);
            trigger(el, show ? 'show' : 'hide', [this$1]);
            promise["catch"](noop).then(function () {
              return removeClass(el, show ? this$1.clsEnter : this$1.clsLeave);
            });
            return promise.then(function () {
              removeClass(el, show ? this$1.clsEnter : this$1.clsLeave);
              trigger(el, show ? 'shown' : 'hidden', [this$1]);
              this$1.$update(el);
            });
          })).then(resolve, noop);
        });
      },
      isToggled: function isToggled(el) {
        if (el === void 0) el = this.$el;
        return hasClass(this.clsEnter) ? true : hasClass(this.clsLeave) ? false : this.cls ? hasClass(el, this.cls.split(' ')[0]) : !hasAttr(el, 'hidden');
      },
      _toggle: function _toggle(el, toggled) {
        if (!el) {
          return;
        }

        toggled = Boolean(toggled);
        var changed;

        if (this.cls) {
          changed = includes(this.cls, ' ') || toggled !== hasClass(el, this.cls);
          changed && toggleClass(el, this.cls, includes(this.cls, ' ') ? undefined : toggled);
        } else {
          changed = toggled === el.hidden;
          changed && (el.hidden = !toggled);
        }

        $$('[autofocus]', el).some(function (el) {
          return isVisible(el) ? el.focus() || true : el.blur();
        });

        if (changed) {
          trigger(el, 'toggled', [toggled, this]);
          this.$update(el);
        }
      }
    }
  };

  function toggleHeight(ref) {
    var isToggled = ref.isToggled;
    var duration = ref.duration;
    var initProps = ref.initProps;
    var hideProps = ref.hideProps;
    var transition = ref.transition;
    var _toggle = ref._toggle;
    return function (el, show) {
      var inProgress = Transition.inProgress(el);
      var inner = el.hasChildNodes ? toFloat(css(el.firstElementChild, 'marginTop')) + toFloat(css(el.lastElementChild, 'marginBottom')) : 0;
      var currentHeight = isVisible(el) ? height(el) + (inProgress ? 0 : inner) : 0;
      Transition.cancel(el);

      if (!isToggled(el)) {
        _toggle(el, true);
      }

      height(el, ''); // Update child components first

      fastdom.flush();
      var endHeight = height(el) + (inProgress ? 0 : inner);
      height(el, currentHeight);
      return (show ? Transition.start(el, assign({}, initProps, {
        overflow: 'hidden',
        height: endHeight
      }), Math.round(duration * (1 - currentHeight / endHeight)), transition) : Transition.start(el, hideProps, Math.round(duration * (currentHeight / endHeight)), transition).then(function () {
        return _toggle(el, false);
      })).then(function () {
        return css(el, initProps);
      });
    };
  }

  function toggleAnimation(cmp) {
    return function (el, show) {
      Animation.cancel(el);
      var animation = cmp.animation;
      var duration = cmp.duration;
      var _toggle = cmp._toggle;

      if (show) {
        _toggle(el, true);

        return Animation["in"](el, animation[0], duration, cmp.origin);
      }

      return Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(function () {
        return _toggle(el, false);
      });
    };
  }

  var Accordion = {
    mixins: [Class, Togglable],
    props: {
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      transition: String,
      offset: Number
    },
    data: {
      targets: '> *',
      active: false,
      animation: [true],
      collapsible: true,
      multiple: false,
      clsOpen: 'uk-open',
      toggle: '> .uk-accordion-title',
      content: '> .uk-accordion-content',
      transition: 'ease',
      offset: 0
    },
    computed: {
      items: {
        get: function get(ref, $el) {
          var targets = ref.targets;
          return $$(targets, $el);
        },
        watch: function watch(items, prev) {
          var this$1 = this;
          items.forEach(function (el) {
            return hide($(this$1.content, el), !hasClass(el, this$1.clsOpen));
          });

          if (prev || hasClass(items, this.clsOpen)) {
            return;
          }

          var active = this.active !== false && items[Number(this.active)] || !this.collapsible && items[0];

          if (active) {
            this.toggle(active, false);
          }
        },
        immediate: true
      },
      toggles: function toggles(ref) {
        var toggle = ref.toggle;
        return this.items.map(function (item) {
          return $(toggle, item);
        });
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.targets + " " + this.$props.toggle;
      },
      handler: function handler(e) {
        e.preventDefault();
        this.toggle(index(this.toggles, e.current));
      }
    }],
    methods: {
      toggle: function toggle(item, animate) {
        var this$1 = this;
        var items = [this.items[_getIndex(item, this.items)]];
        var activeItems = filter(this.items, "." + this.clsOpen);

        if (!this.multiple && !includes(activeItems, items[0])) {
          items = items.concat(activeItems);
        }

        if (!this.collapsible && activeItems.length < 2 && !filter(items, ":not(." + this.clsOpen + ")").length) {
          return;
        }

        items.forEach(function (el) {
          return this$1.toggleElement(el, !hasClass(el, this$1.clsOpen), function (el, show) {
            toggleClass(el, this$1.clsOpen, show);
            attr($(this$1.$props.toggle, el), 'aria-expanded', show);
            var content = $("" + (el._wrapper ? '> * ' : '') + this$1.content, el);

            if (animate === false || !this$1.hasTransition) {
              hide(content, !show);
              return;
            }

            if (!el._wrapper) {
              el._wrapper = wrapAll(content, "<div" + (show ? ' hidden' : '') + ">");
            }

            hide(content, false);
            return toggleHeight(this$1)(el._wrapper, show).then(function () {
              hide(content, !show);
              delete el._wrapper;
              unwrap(content);

              if (show) {
                var toggle = $(this$1.$props.toggle, el);

                if (!isInView(toggle)) {
                  scrollIntoView(toggle, {
                    offset: this$1.offset
                  });
                }
              }
            });
          });
        });
      }
    }
  };

  function hide(el, hide) {
    el && (el.hidden = hide);
  }

  var alert = {
    mixins: [Class, Togglable],
    args: 'animation',
    props: {
      close: String
    },
    data: {
      animation: [true],
      selClose: '.uk-alert-close',
      duration: 150,
      hideProps: assign({
        opacity: 0
      }, Togglable.data.hideProps)
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.selClose;
      },
      handler: function handler(e) {
        e.preventDefault();
        this.close();
      }
    }],
    methods: {
      close: function close() {
        var this$1 = this;
        this.toggleElement(this.$el).then(function () {
          return this$1.$destroy(true);
        });
      }
    }
  };
  var Video = {
    args: 'autoplay',
    props: {
      automute: Boolean,
      autoplay: Boolean
    },
    data: {
      automute: false,
      autoplay: true
    },
    computed: {
      inView: function inView(ref) {
        var autoplay = ref.autoplay;
        return autoplay === 'inview';
      }
    },
    connected: function connected() {
      if (this.inView && !hasAttr(this.$el, 'preload')) {
        this.$el.preload = 'none';
      }

      if (this.automute) {
        mute(this.$el);
      }
    },
    update: {
      read: function read() {
        return {
          visible: isVisible(this.$el) && css(this.$el, 'visibility') !== 'hidden',
          inView: this.inView && isInView(this.$el)
        };
      },
      write: function write(ref) {
        var visible = ref.visible;
        var inView = ref.inView;

        if (!visible || this.inView && !inView) {
          pause(this.$el);
        } else if (this.autoplay === true || this.inView && inView) {
          play(this.$el);
        }
      },
      events: ['resize', 'scroll']
    }
  };
  var cover = {
    mixins: [Class, Video],
    props: {
      width: Number,
      height: Number
    },
    data: {
      automute: true
    },
    update: {
      read: function read() {
        var el = this.$el;
        var ref = getPositionedParent(el) || parent(el);
        var height = ref.offsetHeight;
        var width = ref.offsetWidth;
        var dim = Dimensions.cover({
          width: this.width || el.naturalWidth || el.videoWidth || el.clientWidth,
          height: this.height || el.naturalHeight || el.videoHeight || el.clientHeight
        }, {
          width: width + (width % 2 ? 1 : 0),
          height: height + (height % 2 ? 1 : 0)
        });

        if (!dim.width || !dim.height) {
          return false;
        }

        return dim;
      },
      write: function write(ref) {
        var height = ref.height;
        var width = ref.width;
        css(this.$el, {
          height: height,
          width: width
        });
      },
      events: ['resize']
    }
  };

  function getPositionedParent(el) {
    while (el = parent(el)) {
      if (css(el, 'position') !== 'static') {
        return el;
      }
    }
  }

  var Position = {
    props: {
      pos: String,
      offset: null,
      flip: Boolean,
      clsPos: String
    },
    data: {
      pos: "bottom-" + (!isRtl ? 'left' : 'right'),
      flip: true,
      offset: false,
      clsPos: ''
    },
    computed: {
      pos: function pos(ref) {
        var pos = ref.pos;
        return (pos + (!includes(pos, '-') ? '-center' : '')).split('-');
      },
      dir: function dir() {
        return this.pos[0];
      },
      align: function align() {
        return this.pos[1];
      }
    },
    methods: {
      positionAt: function positionAt(element, target, boundary) {
        removeClasses(element, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?");
        var ref = this;
        var offset$1 = ref.offset;
        var axis = this.getAxis();

        if (!isNumeric(offset$1)) {
          var node = $(offset$1);
          offset$1 = node ? offset(node)[axis === 'x' ? 'left' : 'top'] - offset(target)[axis === 'x' ? 'right' : 'bottom'] : 0;
        }

        var ref$1 = _positionAt(element, target, axis === 'x' ? flipPosition(this.dir) + " " + this.align : this.align + " " + flipPosition(this.dir), axis === 'x' ? this.dir + " " + this.align : this.align + " " + this.dir, axis === 'x' ? "" + (this.dir === 'left' ? -offset$1 : offset$1) : " " + (this.dir === 'top' ? -offset$1 : offset$1), null, this.flip, boundary).target;

        var x = ref$1.x;
        var y = ref$1.y;
        this.dir = axis === 'x' ? x : y;
        this.align = axis === 'x' ? y : x;
        toggleClass(element, this.clsPos + "-" + this.dir + "-" + this.align, this.offset === false);
      },
      getAxis: function getAxis() {
        return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
      }
    }
  };
  var active;
  var drop = {
    mixins: [Position, Togglable],
    args: 'pos',
    props: {
      mode: 'list',
      toggle: Boolean,
      boundary: Boolean,
      boundaryAlign: Boolean,
      delayShow: Number,
      delayHide: Number,
      clsDrop: String
    },
    data: {
      mode: ['click', 'hover'],
      toggle: '- *',
      boundary: inBrowser && window,
      boundaryAlign: false,
      delayShow: 0,
      delayHide: 800,
      clsDrop: false,
      animation: ['uk-animation-fade'],
      cls: 'uk-open'
    },
    computed: {
      boundary: function boundary(ref, $el) {
        var boundary = ref.boundary;
        return query(boundary, $el);
      },
      clsDrop: function clsDrop(ref) {
        var clsDrop = ref.clsDrop;
        return clsDrop || "uk-" + this.$options.name;
      },
      clsPos: function clsPos() {
        return this.clsDrop;
      }
    },
    created: function created() {
      this.tracker = new MouseTracker();
    },
    connected: function connected() {
      addClass(this.$el, this.clsDrop);
      var ref = this.$props;
      var toggle = ref.toggle;
      this.toggle = toggle && this.$create('toggle', query(toggle, this.$el), {
        target: this.$el,
        mode: this.mode
      });
    },
    disconnected: function disconnected() {
      if (this.isActive()) {
        active = null;
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return "." + this.clsDrop + "-close";
      },
      handler: function handler(e) {
        e.preventDefault();
        this.hide(false);
      }
    }, {
      name: 'click',
      delegate: function delegate() {
        return 'a[href^="#"]';
      },
      handler: function handler(ref) {
        var defaultPrevented = ref.defaultPrevented;
        var hash = ref.current.hash;

        if (!defaultPrevented && hash && !within(hash, this.$el)) {
          this.hide(false);
        }
      }
    }, {
      name: 'beforescroll',
      handler: function handler() {
        this.hide(false);
      }
    }, {
      name: 'toggle',
      self: true,
      handler: function handler(e, toggle) {
        e.preventDefault();

        if (this.isToggled()) {
          this.hide(false);
        } else {
          this.show(toggle, false);
        }
      }
    }, {
      name: 'toggleshow',
      self: true,
      handler: function handler(e, toggle) {
        e.preventDefault();
        this.show(toggle);
      }
    }, {
      name: 'togglehide',
      self: true,
      handler: function handler(e) {
        e.preventDefault();
        this.hide();
      }
    }, {
      name: pointerEnter,
      filter: function filter() {
        return includes(this.mode, 'hover');
      },
      handler: function handler(e) {
        if (!isTouch(e)) {
          this.clearTimers();
        }
      }
    }, {
      name: pointerLeave,
      filter: function filter() {
        return includes(this.mode, 'hover');
      },
      handler: function handler(e) {
        if (!isTouch(e) && e.relatedTarget) {
          this.hide();
        }
      }
    }, {
      name: 'toggled',
      self: true,
      handler: function handler(e, toggled) {
        if (!toggled) {
          return;
        }

        this.clearTimers();
        this.position();
      }
    }, {
      name: 'show',
      self: true,
      handler: function handler() {
        var this$1 = this;
        active = this;
        this.tracker.init();
        once(this.$el, 'hide', on(document, pointerDown, function (ref) {
          var target = ref.target;
          return !within(target, this$1.$el) && once(document, pointerUp + " " + pointerCancel + " scroll", function (ref) {
            var defaultPrevented = ref.defaultPrevented;
            var type = ref.type;
            var newTarget = ref.target;

            if (!defaultPrevented && type === pointerUp && target === newTarget && !(this$1.toggle && within(target, this$1.toggle.$el))) {
              this$1.hide(false);
            }
          }, true);
        }), {
          self: true
        });
        once(this.$el, 'hide', on(document, 'keydown', function (e) {
          if (e.keyCode === 27) {
            this$1.hide(false);
          }
        }), {
          self: true
        });
      }
    }, {
      name: 'beforehide',
      self: true,
      handler: function handler() {
        this.clearTimers();
      }
    }, {
      name: 'hide',
      handler: function handler(ref) {
        var target = ref.target;

        if (this.$el !== target) {
          active = active === null && within(target, this.$el) && this.isToggled() ? this : active;
          return;
        }

        active = this.isActive() ? null : active;
        this.tracker.cancel();
      }
    }],
    update: {
      write: function write() {
        if (this.isToggled() && !hasClass(this.$el, this.clsEnter)) {
          this.position();
        }
      },
      events: ['resize']
    },
    methods: {
      show: function show(toggle, delay) {
        var this$1 = this;
        if (toggle === void 0) toggle = this.toggle;
        if (delay === void 0) delay = true;

        if (this.isToggled() && toggle && this.toggle && toggle.$el !== this.toggle.$el) {
          this.hide(false);
        }

        this.toggle = toggle;
        this.clearTimers();

        if (this.isActive()) {
          return;
        }

        if (active) {
          if (delay && active.isDelaying) {
            this.showTimer = setTimeout(this.show, 10);
            return;
          }

          var prev;

          while (active && prev !== active && !within(this.$el, active.$el)) {
            prev = active;
            active.hide(false);
          }
        }

        this.showTimer = setTimeout(function () {
          return !this$1.isToggled() && this$1.toggleElement(this$1.$el, true);
        }, delay && this.delayShow || 0);
      },
      hide: function hide(delay) {
        var this$1 = this;
        if (delay === void 0) delay = true;

        var hide = function hide() {
          return this$1.toggleElement(this$1.$el, false, false);
        };

        this.clearTimers();
        this.isDelaying = getPositionedElements(this.$el).some(function (el) {
          return this$1.tracker.movesTo(el);
        });

        if (delay && this.isDelaying) {
          this.hideTimer = setTimeout(this.hide, 50);
        } else if (delay && this.delayHide) {
          this.hideTimer = setTimeout(hide, this.delayHide);
        } else {
          hide();
        }
      },
      clearTimers: function clearTimers() {
        clearTimeout(this.showTimer);
        clearTimeout(this.hideTimer);
        this.showTimer = null;
        this.hideTimer = null;
        this.isDelaying = false;
      },
      isActive: function isActive() {
        return active === this;
      },
      position: function position() {
        removeClass(this.$el, this.clsDrop + "-stack");
        toggleClass(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
        var boundary = offset(this.boundary);
        var alignTo = this.boundaryAlign ? boundary : offset(this.toggle.$el);

        if (this.align === 'justify') {
          var prop = this.getAxis() === 'y' ? 'width' : 'height';
          css(this.$el, prop, alignTo[prop]);
        } else if (this.$el.offsetWidth > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
          addClass(this.$el, this.clsDrop + "-stack");
        }

        this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);
      }
    }
  };

  function getPositionedElements(el) {
    var result = [];
    apply(el, function (el) {
      return css(el, 'position') !== 'static' && result.push(el);
    });
    return result;
  }

  var formCustom = {
    mixins: [Class],
    args: 'target',
    props: {
      target: Boolean
    },
    data: {
      target: false
    },
    computed: {
      input: function input(_, $el) {
        return $(selInput, $el);
      },
      state: function state() {
        return this.input.nextElementSibling;
      },
      target: function target(ref, $el) {
        var target = ref.target;
        return target && (target === true && parent(this.input) === $el && this.input.nextElementSibling || query(target, $el));
      }
    },
    update: function update() {
      var ref = this;
      var target = ref.target;
      var input = ref.input;

      if (!target) {
        return;
      }

      var option;
      var prop = isInput(target) ? 'value' : 'textContent';
      var prev = target[prop];
      var value = input.files && input.files[0] ? input.files[0].name : matches(input, 'select') && (option = $$('option', input).filter(function (el) {
        return el.selected;
      })[0]) // eslint-disable-line prefer-destructuring
      ? option.textContent : input.value;

      if (prev !== value) {
        target[prop] = value;
      }
    },
    events: [{
      name: 'change',
      handler: function handler() {
        this.$update();
      }
    }, {
      name: 'reset',
      el: function el() {
        return closest(this.$el, 'form');
      },
      handler: function handler() {
        this.$update();
      }
    }]
  }; // Deprecated

  var gif = {
    update: {
      read: function read(data) {
        var inview = isInView(this.$el);

        if (!inview || data.isInView === inview) {
          return false;
        }

        data.isInView = inview;
      },
      write: function write() {
        this.$el.src = '' + this.$el.src; // force self-assign
      },
      events: ['scroll', 'resize']
    }
  };
  var Margin = {
    props: {
      margin: String,
      firstColumn: Boolean
    },
    data: {
      margin: 'uk-margin-small-top',
      firstColumn: 'uk-first-column'
    },
    update: {
      read: function read() {
        var rows = getRows(this.$el.children);
        return {
          rows: rows,
          columns: getColumns(rows)
        };
      },
      write: function write(ref) {
        var columns = ref.columns;
        var rows = ref.rows;

        for (var i = 0; i < rows.length; i++) {
          for (var j = 0; j < rows[i].length; j++) {
            toggleClass(rows[i][j], this.margin, i !== 0);
            toggleClass(rows[i][j], this.firstColumn, !!~columns[0].indexOf(rows[i][j]));
          }
        }
      },
      events: ['resize']
    }
  };

  function getRows(items) {
    return sortBy$1(items, 'top', 'bottom');
  }

  function getColumns(rows) {
    var columns = [];

    for (var i = 0; i < rows.length; i++) {
      var sorted = sortBy$1(rows[i], 'left', 'right');

      for (var j = 0; j < sorted.length; j++) {
        columns[j] = !columns[j] ? sorted[j] : columns[j].concat(sorted[j]);
      }
    }

    return isRtl ? columns.reverse() : columns;
  }

  function sortBy$1(items, startProp, endProp) {
    var sorted = [[]];

    for (var i = 0; i < items.length; i++) {
      var el = items[i];

      if (!isVisible(el)) {
        continue;
      }

      var dim = getOffset(el);

      for (var j = sorted.length - 1; j >= 0; j--) {
        var current = sorted[j];

        if (!current[0]) {
          current.push(el);
          break;
        }

        var startDim = void 0;

        if (current[0].offsetParent === el.offsetParent) {
          startDim = getOffset(current[0]);
        } else {
          dim = getOffset(el, true);
          startDim = getOffset(current[0], true);
        }

        if (dim[startProp] >= startDim[endProp] - 1 && dim[startProp] !== startDim[startProp]) {
          sorted.push([el]);
          break;
        }

        if (dim[endProp] - 1 > startDim[startProp] || dim[startProp] === startDim[startProp]) {
          current.push(el);
          break;
        }

        if (j === 0) {
          sorted.unshift([el]);
          break;
        }
      }
    }

    return sorted;
  }

  function getOffset(element, offset) {
    var assign;
    if (offset === void 0) offset = false;
    var offsetTop = element.offsetTop;
    var offsetLeft = element.offsetLeft;
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;

    if (offset) {
      assign = offsetPosition(element), offsetTop = assign[0], offsetLeft = assign[1];
    }

    return {
      top: offsetTop,
      left: offsetLeft,
      bottom: offsetTop + offsetHeight,
      right: offsetLeft + offsetWidth
    };
  }

  var grid = {
    "extends": Margin,
    mixins: [Class],
    name: 'grid',
    props: {
      masonry: Boolean,
      parallax: Number
    },
    data: {
      margin: 'uk-grid-margin',
      clsStack: 'uk-grid-stack',
      masonry: false,
      parallax: 0
    },
    connected: function connected() {
      this.masonry && addClass(this.$el, 'uk-flex-top uk-flex-wrap-top');
    },
    update: [{
      write: function write(ref) {
        var columns = ref.columns;
        toggleClass(this.$el, this.clsStack, columns.length < 2);
      },
      events: ['resize']
    }, {
      read: function read(data) {
        var columns = data.columns;
        var rows = data.rows; // Filter component makes elements positioned absolute

        if (!columns.length || !this.masonry && !this.parallax || positionedAbsolute(this.$el)) {
          data.translates = false;
          return false;
        }

        var translates = false;

        var nodes = _children(this.$el);

        var columnHeights = getColumnHeights(columns);
        var margin = getMarginTop(nodes, this.margin) * (rows.length - 1);
        var elHeight = Math.max.apply(Math, columnHeights) + margin;

        if (this.masonry) {
          columns = columns.map(function (column) {
            return sortBy(column, 'offsetTop');
          });
          translates = getTranslates(rows, columns);
        }

        var padding = Math.abs(this.parallax);

        if (padding) {
          padding = columnHeights.reduce(function (newPadding, hgt, i) {
            return Math.max(newPadding, hgt + margin + (i % 2 ? padding : padding / 8) - elHeight);
          }, 0);
        }

        return {
          padding: padding,
          columns: columns,
          translates: translates,
          height: translates ? elHeight : ''
        };
      },
      write: function write(ref) {
        var height = ref.height;
        var padding = ref.padding;
        css(this.$el, 'paddingBottom', padding || '');
        height !== false && css(this.$el, 'height', height);
      },
      events: ['resize']
    }, {
      read: function read(ref) {
        var height$1 = ref.height;
        return {
          scrolled: this.parallax ? scrolledOver(this.$el, height$1 ? height$1 - height(this.$el) : 0) * Math.abs(this.parallax) : false
        };
      },
      write: function write(ref) {
        var columns = ref.columns;
        var scrolled = ref.scrolled;
        var translates = ref.translates;

        if (scrolled === false && !translates) {
          return;
        }

        columns.forEach(function (column, i) {
          return column.forEach(function (el, j) {
            return css(el, 'transform', !scrolled && !translates ? '' : "translateY(" + ((translates && -translates[i][j]) + (scrolled ? i % 2 ? scrolled : scrolled / 8 : 0)) + "px)");
          });
        });
      },
      events: ['scroll', 'resize']
    }]
  };

  function positionedAbsolute(el) {
    return _children(el).some(function (el) {
      return css(el, 'position') === 'absolute';
    });
  }

  function getTranslates(rows, columns) {
    var rowHeights = rows.map(function (row) {
      return Math.max.apply(Math, row.map(function (el) {
        return el.offsetHeight;
      }));
    });
    return columns.map(function (elements) {
      var prev = 0;
      return elements.map(function (element, row) {
        return prev += row ? rowHeights[row - 1] - elements[row - 1].offsetHeight : 0;
      });
    });
  }

  function getMarginTop(nodes, cls) {
    var ref = nodes.filter(function (el) {
      return hasClass(el, cls);
    });
    var node = ref[0];
    return toFloat(node ? css(node, 'marginTop') : css(nodes[0], 'paddingLeft'));
  }

  function getColumnHeights(columns) {
    return columns.map(function (column) {
      return column.reduce(function (sum, el) {
        return sum + el.offsetHeight;
      }, 0);
    });
  } // IE 11 fix (min-height on a flex container won't apply to its flex items)


  var FlexBug = isIE ? {
    props: {
      selMinHeight: String
    },
    data: {
      selMinHeight: false,
      forceHeight: false
    },
    computed: {
      elements: function elements(ref, $el) {
        var selMinHeight = ref.selMinHeight;
        return selMinHeight ? $$(selMinHeight, $el) : [$el];
      }
    },
    update: [{
      read: function read() {
        css(this.elements, 'height', '');
      },
      order: -5,
      events: ['resize']
    }, {
      write: function write() {
        var this$1 = this;
        this.elements.forEach(function (el) {
          var height = toFloat(css(el, 'minHeight'));

          if (height && (this$1.forceHeight || Math.round(height + boxModelAdjust(el, 'height', 'content-box')) >= el.offsetHeight)) {
            css(el, 'height', height);
          }
        });
      },
      order: 5,
      events: ['resize']
    }]
  } : {};
  var heightMatch = {
    mixins: [FlexBug],
    args: 'target',
    props: {
      target: String,
      row: Boolean
    },
    data: {
      target: '> *',
      row: true,
      forceHeight: true
    },
    computed: {
      elements: function elements(ref, $el) {
        var target = ref.target;
        return $$(target, $el);
      }
    },
    update: {
      read: function read() {
        return {
          rows: (this.row ? getRows(this.elements) : [this.elements]).map(match)
        };
      },
      write: function write(ref) {
        var rows = ref.rows;
        rows.forEach(function (ref) {
          var heights = ref.heights;
          var elements = ref.elements;
          return elements.forEach(function (el, i) {
            return css(el, 'minHeight', heights[i]);
          });
        });
      },
      events: ['resize']
    }
  };

  function match(elements) {
    if (elements.length < 2) {
      return {
        heights: [''],
        elements: elements
      };
    }

    var heights = elements.map(getHeight);
    var max = Math.max.apply(Math, heights);
    var hasMinHeight = elements.some(function (el) {
      return el.style.minHeight;
    });
    var hasShrunk = elements.some(function (el, i) {
      return !el.style.minHeight && heights[i] < max;
    });

    if (hasMinHeight && hasShrunk) {
      css(elements, 'minHeight', '');
      heights = elements.map(getHeight);
      max = Math.max.apply(Math, heights);
    }

    heights = elements.map(function (el, i) {
      return heights[i] === max && toFloat(el.style.minHeight).toFixed(2) !== max.toFixed(2) ? '' : max;
    });
    return {
      heights: heights,
      elements: elements
    };
  }

  var clsBlock = 'uk-display-block';

  function getHeight(element) {
    if (!isVisible(element)) {
      addClass(element, clsBlock);
    }

    var height = dimensions(element).height - boxModelAdjust(element, 'height', 'content-box');
    removeClass(element, clsBlock);
    return height;
  }

  var heightViewport = {
    mixins: [FlexBug],
    props: {
      expand: Boolean,
      offsetTop: Boolean,
      offsetBottom: Boolean,
      minHeight: Number
    },
    data: {
      expand: false,
      offsetTop: false,
      offsetBottom: false,
      minHeight: 0
    },
    update: {
      read: function read(ref) {
        var prev = ref.minHeight;

        if (!isVisible(this.$el)) {
          return false;
        }

        var minHeight = '';
        var box = boxModelAdjust(this.$el, 'height', 'content-box');

        if (this.expand) {
          this.$el.dataset.heightExpand = '';

          if ($('[data-height-expand]') !== this.$el) {
            return false;
          }

          minHeight = height(window) - (dimensions(document.documentElement).height - dimensions(this.$el).height) - box || '';
        } else {
          // on mobile devices (iOS and Android) window.innerHeight !== 100vh
          minHeight = 'calc(100vh';

          if (this.offsetTop) {
            var ref$1 = offset(this.$el);
            var top = ref$1.top;
            minHeight += top > 0 && top < height(window) / 2 ? " - " + top + "px" : '';
          }

          if (this.offsetBottom === true) {
            minHeight += " - " + dimensions(this.$el.nextElementSibling).height + "px";
          } else if (isNumeric(this.offsetBottom)) {
            minHeight += " - " + this.offsetBottom + "vh";
          } else if (this.offsetBottom && endsWith(this.offsetBottom, 'px')) {
            minHeight += " - " + toFloat(this.offsetBottom) + "px";
          } else if (isString(this.offsetBottom)) {
            minHeight += " - " + dimensions(query(this.offsetBottom, this.$el)).height + "px";
          }

          minHeight += (box ? " - " + box + "px" : '') + ")";
        }

        return {
          minHeight: minHeight,
          prev: prev
        };
      },
      write: function write(ref) {
        var minHeight = ref.minHeight;
        var prev = ref.prev;
        css(this.$el, {
          minHeight: minHeight
        });

        if (minHeight !== prev) {
          this.$update(this.$el, 'resize');
        }

        if (this.minHeight && toFloat(css(this.$el, 'minHeight')) < this.minHeight) {
          css(this.$el, 'minHeight', this.minHeight);
        }
      },
      events: ['resize']
    }
  };
  var SVG = {
    args: 'src',
    props: {
      id: Boolean,
      icon: String,
      src: String,
      style: String,
      width: Number,
      height: Number,
      ratio: Number,
      "class": String,
      strokeAnimation: Boolean,
      focusable: Boolean,
      // IE 11
      attributes: 'list'
    },
    data: {
      ratio: 1,
      include: ['style', 'class', 'focusable'],
      "class": '',
      strokeAnimation: false
    },
    beforeConnect: function beforeConnect() {
      this["class"] += ' uk-svg';
    },
    connected: function connected() {
      var this$1 = this;
      var assign;

      if (!this.icon && includes(this.src, '#')) {
        assign = this.src.split('#'), this.src = assign[0], this.icon = assign[1];
      }

      this.svg = this.getSvg().then(function (el) {
        this$1.applyAttributes(el);
        return this$1.svgEl = insertSVG(el, this$1.$el);
      }, noop);
    },
    disconnected: function disconnected() {
      var this$1 = this;

      if (isVoidElement(this.$el)) {
        this.$el.hidden = false;
      }

      if (this.svg) {
        this.svg.then(function (svg) {
          return (!this$1._connected || svg !== this$1.svgEl) && _remove(svg);
        }, noop);
      }

      this.svg = this.svgEl = null;
    },
    update: {
      read: function read() {
        return !!(this.strokeAnimation && this.svgEl && isVisible(this.svgEl));
      },
      write: function write() {
        applyAnimation(this.svgEl);
      },
      type: ['resize']
    },
    methods: {
      getSvg: function getSvg() {
        var this$1 = this;
        return loadSVG(this.src).then(function (svg) {
          return parseSVG(svg, this$1.icon) || Promise.reject('SVG not found.');
        });
      },
      applyAttributes: function applyAttributes(el) {
        var this$1 = this;

        for (var prop in this.$options.props) {
          if (this[prop] && includes(this.include, prop)) {
            attr(el, prop, this[prop]);
          }
        }

        for (var attribute in this.attributes) {
          var ref = this.attributes[attribute].split(':', 2);
          var prop$1 = ref[0];
          var value = ref[1];
          attr(el, prop$1, value);
        }

        if (!this.id) {
          removeAttr(el, 'id');
        }

        var props = ['width', 'height'];
        var dimensions = [this.width, this.height];

        if (!dimensions.some(function (val) {
          return val;
        })) {
          dimensions = props.map(function (prop) {
            return attr(el, prop);
          });
        }

        var viewBox = attr(el, 'viewBox');

        if (viewBox && !dimensions.some(function (val) {
          return val;
        })) {
          dimensions = viewBox.split(' ').slice(2);
        }

        dimensions.forEach(function (val, i) {
          val = (val | 0) * this$1.ratio;
          val && attr(el, props[i], val);

          if (val && !dimensions[i ^ 1]) {
            removeAttr(el, props[i ^ 1]);
          }
        });
        attr(el, 'data-svg', this.icon || this.src);
      }
    }
  };
  var svgs = {};

  function loadSVG(src) {
    if (svgs[src]) {
      return svgs[src];
    }

    return svgs[src] = new Promise(function (resolve, reject) {
      if (!src) {
        reject();
        return;
      }

      if (startsWith(src, 'data:')) {
        resolve(decodeURIComponent(src.split(',')[1]));
      } else {
        ajax(src).then(function (xhr) {
          return resolve(xhr.response);
        }, function () {
          return reject('SVG not found.');
        });
      }
    });
  }

  function parseSVG(svg, icon) {
    if (icon && includes(svg, '<symbol')) {
      svg = parseSymbols(svg, icon) || svg;
    }

    svg = $(svg.substr(svg.indexOf('<svg')));
    return svg && svg.hasChildNodes() && svg;
  }

  var symbolRe = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g;
  var symbols = {};

  function parseSymbols(svg, icon) {
    if (!symbols[svg]) {
      symbols[svg] = {};
      symbolRe.lastIndex = 0;
      var match;

      while (match = symbolRe.exec(svg)) {
        symbols[svg][match[3]] = "<svg xmlns=\"http://www.w3.org/2000/svg\"" + match[1] + "svg>";
      }
    }

    return symbols[svg][icon];
  }

  function applyAnimation(el) {
    var length = getMaxPathLength(el);

    if (length) {
      el.style.setProperty('--uk-animation-stroke', length);
    }
  }

  function getMaxPathLength(el) {
    return Math.ceil(Math.max.apply(Math, [0].concat($$('[stroke]', el).map(function (stroke) {
      try {
        return stroke.getTotalLength();
      } catch (e) {
        return 0;
      }
    }))));
  }

  function insertSVG(el, root) {
    if (isVoidElement(root) || root.tagName === 'CANVAS') {
      root.hidden = true;
      var next = root.nextElementSibling;
      return equals(el, next) ? next : after(root, el);
    }

    var last = root.lastElementChild;
    return equals(el, last) ? last : append(root, el);
  }

  function equals(el, other) {
    return attr(el, 'data-svg') === attr(other, 'data-svg');
  }

  var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"/></svg>";
  var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"/></svg>";
  var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"/><rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"/></svg>";
  var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"9\" width=\"20\" height=\"2\"/><rect y=\"3\" width=\"20\" height=\"2\"/><rect y=\"15\" width=\"20\" height=\"2\"/></svg>";
  var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"/><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"/></svg>";
  var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"/></svg>";
  var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"/></svg>";
  var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>";
  var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"/></svg>";
  var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";
  var slidenavNext = "<svg width=\"14px\" height=\"24px\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1.225,23 12.775,12 1.225,1 \"/></svg>";
  var slidenavNextLarge = "<svg width=\"25px\" height=\"40px\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"4.002,38.547 22.527,20.024 4,1.5 \"/></svg>";
  var slidenavPrevious = "<svg width=\"14px\" height=\"24px\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"12.775,1 1.225,12 12.775,23 \"/></svg>";
  var slidenavPreviousLarge = "<svg width=\"25px\" height=\"40px\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"20.527,1.5 2,20.024 20.525,38.547 \"/></svg>";
  var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"/></svg>";
  var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"/></svg>";
  var icons = {
    spinner: spinner,
    totop: totop,
    marker: marker,
    'close-icon': closeIcon,
    'close-large': closeLarge,
    'navbar-toggle-icon': navbarToggleIcon,
    'overlay-icon': overlayIcon,
    'pagination-next': paginationNext,
    'pagination-previous': paginationPrevious,
    'search-icon': searchIcon,
    'search-large': searchLarge,
    'search-navbar': searchNavbar,
    'slidenav-next': slidenavNext,
    'slidenav-next-large': slidenavNextLarge,
    'slidenav-previous': slidenavPrevious,
    'slidenav-previous-large': slidenavPreviousLarge
  };
  var Icon = {
    install: install,
    "extends": SVG,
    args: 'icon',
    props: ['icon'],
    data: {
      include: ['focusable']
    },
    isIcon: true,
    beforeConnect: function beforeConnect() {
      addClass(this.$el, 'uk-icon');
    },
    methods: {
      getSvg: function getSvg() {
        var icon = getIcon(this.icon);

        if (!icon) {
          return Promise.reject('Icon not found.');
        }

        return Promise.resolve(icon);
      }
    }
  };
  var IconComponent = {
    args: false,
    "extends": Icon,
    data: function data(vm) {
      return {
        icon: hyphenate(vm.constructor.options.name)
      };
    },
    beforeConnect: function beforeConnect() {
      addClass(this.$el, this.$name);
    }
  };
  var Slidenav = {
    "extends": IconComponent,
    beforeConnect: function beforeConnect() {
      addClass(this.$el, 'uk-slidenav');
    },
    computed: {
      icon: function icon(ref, $el) {
        var icon = ref.icon;
        return hasClass($el, 'uk-slidenav-large') ? icon + "-large" : icon;
      }
    }
  };
  var Search = {
    "extends": IconComponent,
    computed: {
      icon: function icon(ref, $el) {
        var icon = ref.icon;
        return hasClass($el, 'uk-search-icon') && parents($el, '.uk-search-large').length ? 'search-large' : parents($el, '.uk-search-navbar').length ? 'search-navbar' : icon;
      }
    }
  };
  var Close = {
    "extends": IconComponent,
    computed: {
      icon: function icon() {
        return "close-" + (hasClass(this.$el, 'uk-close-large') ? 'large' : 'icon');
      }
    }
  };
  var Spinner = {
    "extends": IconComponent,
    connected: function connected() {
      var this$1 = this;
      this.svg.then(function (svg) {
        return this$1.ratio !== 1 && css($('circle', svg), 'strokeWidth', 1 / this$1.ratio);
      }, noop);
    }
  };
  var parsed = {};

  function install(UIkit) {
    UIkit.icon.add = function (name, svg) {
      var obj;
      var added = isString(name) ? (obj = {}, obj[name] = svg, obj) : name;
      each(added, function (svg, name) {
        icons[name] = svg;
        delete parsed[name];
      });

      if (UIkit._initialized) {
        apply(document.body, function (el) {
          return each(UIkit.getComponents(el), function (cmp) {
            cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
          });
        });
      }
    };
  }

  function getIcon(icon) {
    if (!icons[icon]) {
      return null;
    }

    if (!parsed[icon]) {
      parsed[icon] = $((icons[applyRtl(icon)] || icons[icon]).trim());
    }

    return parsed[icon].cloneNode(true);
  }

  function applyRtl(icon) {
    return isRtl ? swap(swap(icon, 'left', 'right'), 'previous', 'next') : icon;
  }

  var img = {
    args: 'dataSrc',
    props: {
      dataSrc: String,
      dataSrcset: Boolean,
      sizes: String,
      width: Number,
      height: Number,
      offsetTop: String,
      offsetLeft: String,
      target: String
    },
    data: {
      dataSrc: '',
      dataSrcset: false,
      sizes: false,
      width: false,
      height: false,
      offsetTop: '50vh',
      offsetLeft: '50vw',
      target: false
    },
    computed: {
      cacheKey: function cacheKey(ref) {
        var dataSrc = ref.dataSrc;
        return this.$name + "." + dataSrc;
      },
      width: function width(ref) {
        var width = ref.width;
        var dataWidth = ref.dataWidth;
        return width || dataWidth;
      },
      height: function height(ref) {
        var height = ref.height;
        var dataHeight = ref.dataHeight;
        return height || dataHeight;
      },
      sizes: function sizes(ref) {
        var sizes = ref.sizes;
        var dataSizes = ref.dataSizes;
        return sizes || dataSizes;
      },
      isImg: function isImg(_, $el) {
        return _isImg($el);
      },
      target: {
        get: function get(ref) {
          var target = ref.target;
          return [this.$el].concat(queryAll(target, this.$el));
        },
        watch: function watch() {
          this.observe();
        }
      },
      offsetTop: function offsetTop(ref) {
        var offsetTop = ref.offsetTop;
        return toPx(offsetTop, 'height');
      },
      offsetLeft: function offsetLeft(ref) {
        var offsetLeft = ref.offsetLeft;
        return toPx(offsetLeft, 'width');
      }
    },
    connected: function connected() {
      if (!window.IntersectionObserver) {
        setSrcAttrs(this.$el, this.dataSrc, this.dataSrcset, this.sizes);
        return;
      }

      if (storage[this.cacheKey]) {
        setSrcAttrs(this.$el, storage[this.cacheKey], this.dataSrcset, this.sizes);
      } else if (this.isImg && this.width && this.height) {
        setSrcAttrs(this.$el, getPlaceholderImage(this.width, this.height, this.sizes));
      }

      this.observer = new IntersectionObserver(this.load, {
        rootMargin: this.offsetTop + "px " + this.offsetLeft + "px"
      });
      requestAnimationFrame(this.observe);
    },
    disconnected: function disconnected() {
      this.observer && this.observer.disconnect();
    },
    update: {
      read: function read(ref) {
        var this$1 = this;
        var image = ref.image;

        if (!this.observer) {
          return false;
        }

        if (!image && document.readyState === 'complete') {
          this.load(this.observer.takeRecords());
        }

        if (this.isImg) {
          return false;
        }

        image && image.then(function (img) {
          return img && img.currentSrc !== '' && setSrcAttrs(this$1.$el, currentSrc(img));
        });
      },
      write: function write(data) {
        if (this.dataSrcset && window.devicePixelRatio !== 1) {
          var bgSize = css(this.$el, 'backgroundSize');

          if (bgSize.match(/^(auto\s?)+$/) || toFloat(bgSize) === data.bgSize) {
            data.bgSize = getSourceSize(this.dataSrcset, this.sizes);
            css(this.$el, 'backgroundSize', data.bgSize + "px");
          }
        }
      },
      events: ['resize']
    },
    methods: {
      load: function load(entries) {
        var this$1 = this; // Old chromium based browsers (UC Browser) did not implement `isIntersecting`

        if (!entries.some(function (entry) {
          return isUndefined(entry.isIntersecting) || entry.isIntersecting;
        })) {
          return;
        }

        this._data.image = getImage(this.dataSrc, this.dataSrcset, this.sizes).then(function (img) {
          setSrcAttrs(this$1.$el, currentSrc(img), img.srcset, img.sizes);
          storage[this$1.cacheKey] = currentSrc(img);
          return img;
        }, function (e) {
          return trigger(this$1.$el, new e.constructor(e.type, e));
        });
        this.observer.disconnect();
      },
      observe: function observe() {
        var this$1 = this;

        if (this._connected && !this._data.image) {
          this.target.forEach(function (el) {
            return this$1.observer.observe(el);
          });
        }
      }
    }
  };

  function setSrcAttrs(el, src, srcset, sizes) {
    if (_isImg(el)) {
      sizes && (el.sizes = sizes);
      srcset && (el.srcset = srcset);
      src && (el.src = src);
    } else if (src) {
      var change = !includes(el.style.backgroundImage, src);

      if (change) {
        css(el, 'backgroundImage', "url(" + escape(src) + ")");
        trigger(el, createEvent('load', false));
      }
    }
  }

  function getPlaceholderImage(width, height, sizes) {
    var assign;

    if (sizes) {
      assign = Dimensions.ratio({
        width: width,
        height: height
      }, 'width', toPx(sizesToPixel(sizes))), width = assign.width, height = assign.height;
    }

    return "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + width + "\" height=\"" + height + "\"></svg>";
  }

  var sizesRe = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;

  function sizesToPixel(sizes) {
    var matches;
    sizesRe.lastIndex = 0;

    while (matches = sizesRe.exec(sizes)) {
      if (!matches[1] || window.matchMedia(matches[1]).matches) {
        matches = evaluateSize(matches[2]);
        break;
      }
    }

    return matches || '100vw';
  }

  var sizeRe = /\d+(?:\w+|%)/g;
  var additionRe = /[+-]?(\d+)/g;

  function evaluateSize(size) {
    return startsWith(size, 'calc') ? size.slice(5, -1).replace(sizeRe, function (size) {
      return toPx(size);
    }).replace(/ /g, '').match(additionRe).reduce(function (a, b) {
      return a + +b;
    }, 0) : size;
  }

  var srcSetRe = /\s+\d+w\s*(?:,|$)/g;

  function getSourceSize(srcset, sizes) {
    var srcSize = toPx(sizesToPixel(sizes));
    var descriptors = (srcset.match(srcSetRe) || []).map(toFloat).sort(function (a, b) {
      return a - b;
    });
    return descriptors.filter(function (size) {
      return size >= srcSize;
    })[0] || descriptors.pop() || '';
  }

  function _isImg(el) {
    return el.tagName === 'IMG';
  }

  function currentSrc(el) {
    return el.currentSrc || el.src;
  }

  var key = '__test__';
  var storage; // workaround for Safari's private browsing mode and accessing sessionStorage in Blink

  try {
    storage = window.sessionStorage || {};
    storage[key] = 1;
    delete storage[key];
  } catch (e) {
    storage = {};
  }

  var Media = {
    props: {
      media: Boolean
    },
    data: {
      media: false
    },
    computed: {
      matchMedia: function matchMedia() {
        var media = toMedia(this.media);
        return !media || window.matchMedia(media).matches;
      }
    }
  };

  function toMedia(value) {
    if (isString(value)) {
      if (value[0] === '@') {
        var name = "breakpoint-" + value.substr(1);
        value = toFloat(getCssVar(name));
      } else if (isNaN(value)) {
        return value;
      }
    }

    return value && !isNaN(value) ? "(min-width: " + value + "px)" : false;
  }

  var leader = {
    mixins: [Class, Media],
    props: {
      fill: String
    },
    data: {
      fill: '',
      clsWrapper: 'uk-leader-fill',
      clsHide: 'uk-leader-hide',
      attrFill: 'data-fill'
    },
    computed: {
      fill: function fill(ref) {
        var fill = ref.fill;
        return fill || getCssVar('leader-fill-content');
      }
    },
    connected: function connected() {
      var assign;
      assign = wrapInner(this.$el, "<span class=\"" + this.clsWrapper + "\">"), this.wrapper = assign[0];
    },
    disconnected: function disconnected() {
      unwrap(this.wrapper.childNodes);
    },
    update: {
      read: function read(ref) {
        var changed = ref.changed;
        var width = ref.width;
        var prev = width;
        width = Math.floor(this.$el.offsetWidth / 2);
        return {
          width: width,
          fill: this.fill,
          changed: changed || prev !== width,
          hide: !this.matchMedia
        };
      },
      write: function write(data) {
        toggleClass(this.wrapper, this.clsHide, data.hide);

        if (data.changed) {
          data.changed = false;
          attr(this.wrapper, this.attrFill, new Array(data.width).join(data.fill));
        }
      },
      events: ['resize']
    }
  };
  var Container = {
    props: {
      container: Boolean
    },
    data: {
      container: true
    },
    computed: {
      container: function container(ref) {
        var container = ref.container;
        return container === true && this.$container || container && $(container);
      }
    }
  };
  var active$1 = [];
  var Modal = {
    mixins: [Class, Container, Togglable],
    props: {
      selPanel: String,
      selClose: String,
      escClose: Boolean,
      bgClose: Boolean,
      stack: Boolean
    },
    data: {
      cls: 'uk-open',
      escClose: true,
      bgClose: true,
      overlay: true,
      stack: false
    },
    computed: {
      panel: function panel(ref, $el) {
        var selPanel = ref.selPanel;
        return $(selPanel, $el);
      },
      transitionElement: function transitionElement() {
        return this.panel;
      },
      bgClose: function bgClose(ref) {
        var bgClose = ref.bgClose;
        return bgClose && this.panel;
      }
    },
    beforeDisconnect: function beforeDisconnect() {
      if (this.isToggled()) {
        this.toggleElement(this.$el, false, false);
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.selClose;
      },
      handler: function handler(e) {
        e.preventDefault();
        this.hide();
      }
    }, {
      name: 'toggle',
      self: true,
      handler: function handler(e) {
        if (e.defaultPrevented) {
          return;
        }

        e.preventDefault();

        if (this.isToggled() === includes(active$1, this)) {
          this.toggle();
        }
      }
    }, {
      name: 'beforeshow',
      self: true,
      handler: function handler(e) {
        if (includes(active$1, this)) {
          return false;
        }

        if (!this.stack && active$1.length) {
          Promise.all(active$1.map(function (modal) {
            return modal.hide();
          })).then(this.show);
          e.preventDefault();
        } else {
          active$1.push(this);
        }
      }
    }, {
      name: 'show',
      self: true,
      handler: function handler() {
        var this$1 = this;

        if (width(window) - width(document) && this.overlay) {
          css(document.body, 'overflowY', 'scroll');
        }

        if (this.stack) {
          css(this.$el, 'zIndex', toFloat(css(this.$el, 'zIndex')) + active$1.length);
        }

        addClass(document.documentElement, this.clsPage);

        if (this.bgClose) {
          once(this.$el, 'hide', on(document, pointerDown, function (ref) {
            var target = ref.target;

            if (last(active$1) !== this$1 || this$1.overlay && !within(target, this$1.$el) || within(target, this$1.panel)) {
              return;
            }

            once(document, pointerUp + " " + pointerCancel + " scroll", function (ref) {
              var defaultPrevented = ref.defaultPrevented;
              var type = ref.type;
              var newTarget = ref.target;

              if (!defaultPrevented && type === pointerUp && target === newTarget) {
                this$1.hide();
              }
            }, true);
          }), {
            self: true
          });
        }

        if (this.escClose) {
          once(this.$el, 'hide', on(document, 'keydown', function (e) {
            if (e.keyCode === 27 && last(active$1) === this$1) {
              this$1.hide();
            }
          }), {
            self: true
          });
        }
      }
    }, {
      name: 'hidden',
      self: true,
      handler: function handler() {
        var this$1 = this;
        active$1.splice(active$1.indexOf(this), 1);

        if (!active$1.length) {
          css(document.body, 'overflowY', '');
        }

        css(this.$el, 'zIndex', '');

        if (!active$1.some(function (modal) {
          return modal.clsPage === this$1.clsPage;
        })) {
          removeClass(document.documentElement, this.clsPage);
        }
      }
    }],
    methods: {
      toggle: function toggle() {
        return this.isToggled() ? this.hide() : this.show();
      },
      show: function show() {
        var this$1 = this;

        if (this.container && parent(this.$el) !== this.container) {
          append(this.container, this.$el);
          return new Promise(function (resolve) {
            return requestAnimationFrame(function () {
              return this$1.show().then(resolve);
            });
          });
        }

        return this.toggleElement(this.$el, true, animate$1(this));
      },
      hide: function hide() {
        return this.toggleElement(this.$el, false, animate$1(this));
      }
    }
  };

  function animate$1(ref) {
    var transitionElement = ref.transitionElement;
    var _toggle = ref._toggle;
    return function (el, show) {
      return new Promise(function (resolve, reject) {
        return once(el, 'show hide', function () {
          el._reject && el._reject();
          el._reject = reject;

          _toggle(el, show);

          var off = once(transitionElement, 'transitionstart', function () {
            once(transitionElement, 'transitionend transitioncancel', resolve, {
              self: true
            });
            clearTimeout(timer);
          }, {
            self: true
          });
          var timer = setTimeout(function () {
            off();
            resolve();
          }, toMs(css(transitionElement, 'transitionDuration')));
        });
      }).then(function () {
        return delete el._reject;
      });
    };
  }

  var modal = {
    install: install$1,
    mixins: [Modal],
    data: {
      clsPage: 'uk-modal-page',
      selPanel: '.uk-modal-dialog',
      selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
    },
    events: [{
      name: 'show',
      self: true,
      handler: function handler() {
        if (hasClass(this.panel, 'uk-margin-auto-vertical')) {
          addClass(this.$el, 'uk-flex');
        } else {
          css(this.$el, 'display', 'block');
        }

        height(this.$el); // force reflow
      }
    }, {
      name: 'hidden',
      self: true,
      handler: function handler() {
        css(this.$el, 'display', '');
        removeClass(this.$el, 'uk-flex');
      }
    }]
  };

  function install$1(ref) {
    var modal = ref.modal;

    modal.dialog = function (content, options) {
      var dialog = modal("<div class=\"uk-modal\"> <div class=\"uk-modal-dialog\">" + content + "</div> </div>", options);
      dialog.show();
      on(dialog.$el, 'hidden', function () {
        return Promise.resolve().then(function () {
          return dialog.$destroy(true);
        });
      }, {
        self: true
      });
      return dialog;
    };

    modal.alert = function (message, options) {
      return openDialog(function (ref) {
        var labels = ref.labels;
        return "<div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + labels.ok + "</button> </div>";
      }, options, function (deferred) {
        return deferred.resolve();
      });
    };

    modal.confirm = function (message, options) {
      return openDialog(function (ref) {
        var labels = ref.labels;
        return "<form> <div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + labels.cancel + "</button> <button class=\"uk-button uk-button-primary\" autofocus>" + labels.ok + "</button> </div> </form>";
      }, options, function (deferred) {
        return deferred.reject();
      });
    };

    modal.prompt = function (message, value, options) {
      return openDialog(function (ref) {
        var labels = ref.labels;
        return "<form class=\"uk-form-stacked\"> <div class=\"uk-modal-body\"> <label>" + (isString(message) ? message : html(message)) + "</label> <input class=\"uk-input\" value=\"" + (value || '') + "\" autofocus> </div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + labels.cancel + "</button> <button class=\"uk-button uk-button-primary\">" + labels.ok + "</button> </div> </form>";
      }, options, function (deferred) {
        return deferred.resolve(null);
      }, function (dialog) {
        return $('input', dialog.$el).value;
      });
    };

    modal.labels = {
      ok: 'Ok',
      cancel: 'Cancel'
    };

    function openDialog(tmpl, options, hideFn, submitFn) {
      options = assign({
        bgClose: false,
        escClose: true,
        labels: modal.labels
      }, options);
      var dialog = modal.dialog(tmpl(options), options);
      var deferred = new Deferred();
      var resolved = false;
      on(dialog.$el, 'submit', 'form', function (e) {
        e.preventDefault();
        deferred.resolve(submitFn && submitFn(dialog));
        resolved = true;
        dialog.hide();
      });
      on(dialog.$el, 'hide', function () {
        return !resolved && hideFn(deferred);
      });
      deferred.promise.dialog = dialog;
      return deferred.promise;
    }
  }

  var nav = {
    "extends": Accordion,
    data: {
      targets: '> .uk-parent',
      toggle: '> a',
      content: '> ul'
    }
  };
  var navbar = {
    mixins: [Class, FlexBug],
    props: {
      dropdown: String,
      mode: 'list',
      align: String,
      offset: Number,
      boundary: Boolean,
      boundaryAlign: Boolean,
      clsDrop: String,
      delayShow: Number,
      delayHide: Number,
      dropbar: Boolean,
      dropbarMode: String,
      dropbarAnchor: Boolean,
      duration: Number
    },
    data: {
      dropdown: '.uk-navbar-nav > li',
      align: !isRtl ? 'left' : 'right',
      clsDrop: 'uk-navbar-dropdown',
      mode: undefined,
      offset: undefined,
      delayShow: undefined,
      delayHide: undefined,
      boundaryAlign: undefined,
      flip: 'x',
      boundary: true,
      dropbar: false,
      dropbarMode: 'slide',
      dropbarAnchor: false,
      duration: 200,
      forceHeight: true,
      selMinHeight: '.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle'
    },
    computed: {
      boundary: function boundary(ref, $el) {
        var boundary = ref.boundary;
        var boundaryAlign = ref.boundaryAlign;
        return boundary === true || boundaryAlign ? $el : boundary;
      },
      dropbarAnchor: function dropbarAnchor(ref, $el) {
        var dropbarAnchor = ref.dropbarAnchor;
        return query(dropbarAnchor, $el);
      },
      pos: function pos(ref) {
        var align = ref.align;
        return "bottom-" + align;
      },
      dropbar: {
        get: function get(ref) {
          var dropbar = ref.dropbar;

          if (!dropbar) {
            return null;
          }

          dropbar = this._dropbar || query(dropbar, this.$el) || $('+ .uk-navbar-dropbar', this.$el);
          return dropbar ? dropbar : this._dropbar = $('<div></div>');
        },
        watch: function watch(dropbar) {
          addClass(dropbar, 'uk-navbar-dropbar');
        },
        immediate: true
      },
      dropdowns: {
        get: function get(ref, $el) {
          var dropdown = ref.dropdown;
          var clsDrop = ref.clsDrop;
          return $$(dropdown + " ." + clsDrop, $el);
        },
        watch: function watch(dropdowns) {
          var this$1 = this;
          this.$create('drop', dropdowns.filter(function (el) {
            return !this$1.getDropdown(el);
          }), assign({}, this.$props, {
            boundary: this.boundary,
            pos: this.pos,
            offset: this.dropbar || this.offset
          }));
        },
        immediate: true
      }
    },
    disconnected: function disconnected() {
      this.dropbar && _remove(this.dropbar);
      delete this._dropbar;
    },
    events: [{
      name: 'mouseover',
      delegate: function delegate() {
        return this.dropdown;
      },
      handler: function handler(ref) {
        var current = ref.current;
        var active = this.getActive();

        if (active && active.toggle && !within(active.toggle.$el, current) && !active.tracker.movesTo(active.$el)) {
          active.hide(false);
        }
      }
    }, {
      name: 'mouseleave',
      el: function el() {
        return this.dropbar;
      },
      handler: function handler() {
        var active = this.getActive();

        if (active && !this.dropdowns.some(function (el) {
          return matches(el, ':hover');
        })) {
          active.hide();
        }
      }
    }, {
      name: 'beforeshow',
      capture: true,
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler() {
        if (!parent(this.dropbar)) {
          after(this.dropbarAnchor || this.$el, this.dropbar);
        }
      }
    }, {
      name: 'show',
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(_, ref) {
        var $el = ref.$el;
        var dir = ref.dir;

        if (!hasClass($el, this.clsDrop)) {
          return;
        }

        if (this.dropbarMode === 'slide') {
          addClass(this.dropbar, 'uk-navbar-dropbar-slide');
        }

        this.clsDrop && addClass($el, this.clsDrop + "-dropbar");

        if (dir === 'bottom') {
          this.transitionTo($el.offsetHeight + toFloat(css($el, 'marginTop')) + toFloat(css($el, 'marginBottom')), $el);
        }
      }
    }, {
      name: 'beforehide',
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(e, ref) {
        var $el = ref.$el;
        var active = this.getActive();

        if (matches(this.dropbar, ':hover') && active && active.$el === $el) {
          e.preventDefault();
        }
      }
    }, {
      name: 'hide',
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(_, ref) {
        var $el = ref.$el;

        if (!hasClass($el, this.clsDrop)) {
          return;
        }

        var active = this.getActive();

        if (!active || active && active.$el === $el) {
          this.transitionTo(0);
        }
      }
    }],
    methods: {
      getActive: function getActive() {
        var ref = this.dropdowns.map(this.getDropdown).filter(function (drop) {
          return drop && drop.isActive();
        });
        var active = ref[0];
        return active && includes(active.mode, 'hover') && within(active.toggle.$el, this.$el) && active;
      },
      transitionTo: function transitionTo(newHeight, el) {
        var this$1 = this;
        var ref = this;
        var dropbar = ref.dropbar;
        var oldHeight = isVisible(dropbar) ? height(dropbar) : 0;
        el = oldHeight < newHeight && el;
        css(el, 'clip', "rect(0," + el.offsetWidth + "px," + oldHeight + "px,0)");
        height(dropbar, oldHeight);
        Transition.cancel([el, dropbar]);
        return Promise.all([Transition.start(dropbar, {
          height: newHeight
        }, this.duration), Transition.start(el, {
          clip: "rect(0," + el.offsetWidth + "px," + newHeight + "px,0)"
        }, this.duration)])["catch"](noop).then(function () {
          css(el, {
            clip: ''
          });
          this$1.$update(dropbar);
        });
      },
      getDropdown: function getDropdown(el) {
        return this.$getComponent(el, 'drop') || this.$getComponent(el, 'dropdown');
      }
    }
  };
  var offcanvas = {
    mixins: [Modal],
    args: 'mode',
    props: {
      mode: String,
      flip: Boolean,
      overlay: Boolean
    },
    data: {
      mode: 'slide',
      flip: false,
      overlay: false,
      clsPage: 'uk-offcanvas-page',
      clsContainer: 'uk-offcanvas-container',
      selPanel: '.uk-offcanvas-bar',
      clsFlip: 'uk-offcanvas-flip',
      clsContainerAnimation: 'uk-offcanvas-container-animation',
      clsSidebarAnimation: 'uk-offcanvas-bar-animation',
      clsMode: 'uk-offcanvas',
      clsOverlay: 'uk-offcanvas-overlay',
      selClose: '.uk-offcanvas-close',
      container: false
    },
    computed: {
      clsFlip: function clsFlip(ref) {
        var flip = ref.flip;
        var clsFlip = ref.clsFlip;
        return flip ? clsFlip : '';
      },
      clsOverlay: function clsOverlay(ref) {
        var overlay = ref.overlay;
        var clsOverlay = ref.clsOverlay;
        return overlay ? clsOverlay : '';
      },
      clsMode: function clsMode(ref) {
        var mode = ref.mode;
        var clsMode = ref.clsMode;
        return clsMode + "-" + mode;
      },
      clsSidebarAnimation: function clsSidebarAnimation(ref) {
        var mode = ref.mode;
        var clsSidebarAnimation = ref.clsSidebarAnimation;
        return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
      },
      clsContainerAnimation: function clsContainerAnimation(ref) {
        var mode = ref.mode;
        var clsContainerAnimation = ref.clsContainerAnimation;
        return mode !== 'push' && mode !== 'reveal' ? '' : clsContainerAnimation;
      },
      transitionElement: function transitionElement(ref) {
        var mode = ref.mode;
        return mode === 'reveal' ? parent(this.panel) : this.panel;
      }
    },
    update: {
      read: function read() {
        if (this.isToggled() && !isVisible(this.$el)) {
          this.hide();
        }
      },
      events: ['resize']
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return 'a[href^="#"]';
      },
      handler: function handler(ref) {
        var hash = ref.current.hash;
        var defaultPrevented = ref.defaultPrevented;

        if (!defaultPrevented && hash && $(hash, document.body)) {
          this.hide();
        }
      }
    }, {
      name: 'touchstart',
      passive: true,
      el: function el() {
        return this.panel;
      },
      handler: function handler(ref) {
        var targetTouches = ref.targetTouches;

        if (targetTouches.length === 1) {
          this.clientY = targetTouches[0].clientY;
        }
      }
    }, {
      name: 'touchmove',
      self: true,
      passive: false,
      filter: function filter() {
        return this.overlay;
      },
      handler: function handler(e) {
        e.cancelable && e.preventDefault();
      }
    }, {
      name: 'touchmove',
      passive: false,
      el: function el() {
        return this.panel;
      },
      handler: function handler(e) {
        if (e.targetTouches.length !== 1) {
          return;
        }

        var clientY = event.targetTouches[0].clientY - this.clientY;
        var ref = this.panel;
        var scrollTop = ref.scrollTop;
        var scrollHeight = ref.scrollHeight;
        var clientHeight = ref.clientHeight;

        if (clientHeight >= scrollHeight || scrollTop === 0 && clientY > 0 || scrollHeight - scrollTop <= clientHeight && clientY < 0) {
          e.cancelable && e.preventDefault();
        }
      }
    }, {
      name: 'show',
      self: true,
      handler: function handler() {
        if (this.mode === 'reveal' && !hasClass(parent(this.panel), this.clsMode)) {
          wrapAll(this.panel, '<div>');
          addClass(parent(this.panel), this.clsMode);
        }

        css(document.documentElement, 'overflowY', this.overlay ? 'hidden' : '');
        addClass(document.body, this.clsContainer, this.clsFlip);
        css(document.body, 'touch-action', 'pan-y pinch-zoom');
        css(this.$el, 'display', 'block');
        addClass(this.$el, this.clsOverlay);
        addClass(this.panel, this.clsSidebarAnimation, this.mode !== 'reveal' ? this.clsMode : '');
        height(document.body); // force reflow

        addClass(document.body, this.clsContainerAnimation);
        this.clsContainerAnimation && suppressUserScale();
      }
    }, {
      name: 'hide',
      self: true,
      handler: function handler() {
        removeClass(document.body, this.clsContainerAnimation);
        css(document.body, 'touch-action', '');
      }
    }, {
      name: 'hidden',
      self: true,
      handler: function handler() {
        this.clsContainerAnimation && resumeUserScale();

        if (this.mode === 'reveal') {
          unwrap(this.panel);
        }

        removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
        removeClass(this.$el, this.clsOverlay);
        css(this.$el, 'display', '');
        removeClass(document.body, this.clsContainer, this.clsFlip);
        css(document.documentElement, 'overflowY', '');
      }
    }, {
      name: 'swipeLeft swipeRight',
      handler: function handler(e) {
        if (this.isToggled() && endsWith(e.type, 'Left') ^ this.flip) {
          this.hide();
        }
      }
    }]
  }; // Chrome in responsive mode zooms page upon opening offcanvas

  function suppressUserScale() {
    getViewport$1().content += ',user-scalable=0';
  }

  function resumeUserScale() {
    var viewport = getViewport$1();
    viewport.content = viewport.content.replace(/,user-scalable=0$/, '');
  }

  function getViewport$1() {
    return $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">');
  }

  var overflowAuto = {
    mixins: [Class],
    props: {
      selContainer: String,
      selContent: String
    },
    data: {
      selContainer: '.uk-modal',
      selContent: '.uk-modal-dialog'
    },
    computed: {
      container: function container(ref, $el) {
        var selContainer = ref.selContainer;
        return closest($el, selContainer);
      },
      content: function content(ref, $el) {
        var selContent = ref.selContent;
        return closest($el, selContent);
      }
    },
    connected: function connected() {
      css(this.$el, 'minHeight', 150);
    },
    update: {
      read: function read() {
        if (!this.content || !this.container || !isVisible(this.$el)) {
          return false;
        }

        return {
          current: toFloat(css(this.$el, 'maxHeight')),
          max: Math.max(150, height(this.container) - (dimensions(this.content).height - height(this.$el)))
        };
      },
      write: function write(ref) {
        var current = ref.current;
        var max = ref.max;
        css(this.$el, 'maxHeight', max);

        if (Math.round(current) !== Math.round(max)) {
          trigger(this.$el, 'resize');
        }
      },
      events: ['resize']
    }
  };
  var responsive = {
    props: ['width', 'height'],
    connected: function connected() {
      addClass(this.$el, 'uk-responsive-width');
    },
    update: {
      read: function read() {
        return isVisible(this.$el) && this.width && this.height ? {
          width: width(parent(this.$el)),
          height: this.height
        } : false;
      },
      write: function write(dim) {
        height(this.$el, Dimensions.contain({
          height: this.height,
          width: this.width
        }, dim).height);
      },
      events: ['resize']
    }
  };
  var scroll = {
    props: {
      offset: Number
    },
    data: {
      offset: 0
    },
    methods: {
      scrollTo: function scrollTo(el) {
        var this$1 = this;
        el = el && $(el) || document.body;

        if (trigger(this.$el, 'beforescroll', [this, el])) {
          scrollIntoView(el, {
            offset: this.offset
          }).then(function () {
            return trigger(this$1.$el, 'scrolled', [this$1, el]);
          });
        }
      }
    },
    events: {
      click: function click(e) {
        if (e.defaultPrevented) {
          return;
        }

        e.preventDefault();
        this.scrollTo("#" + escape(decodeURIComponent(this.$el.hash.substr(1))));
      }
    }
  };
  var stateKey$1 = '_ukScrollspy';
  var scrollspy = {
    args: 'cls',
    props: {
      cls: String,
      target: String,
      hidden: Boolean,
      offsetTop: Number,
      offsetLeft: Number,
      repeat: Boolean,
      delay: Number
    },
    data: function data() {
      return {
        cls: false,
        target: false,
        hidden: true,
        offsetTop: 0,
        offsetLeft: 0,
        repeat: false,
        delay: 0,
        inViewClass: 'uk-scrollspy-inview'
      };
    },
    computed: {
      elements: {
        get: function get(ref, $el) {
          var target = ref.target;
          return target ? $$(target, $el) : [$el];
        },
        watch: function watch(elements) {
          if (this.hidden) {
            css(filter(elements, ":not(." + this.inViewClass + ")"), 'visibility', 'hidden');
          }
        },
        immediate: true
      }
    },
    disconnected: function disconnected() {
      var this$1 = this;
      this.elements.forEach(function (el) {
        removeClass(el, this$1.inViewClass, el[stateKey$1] ? el[stateKey$1].cls : '');
        delete el[stateKey$1];
      });
    },
    update: [{
      read: function read(ref) {
        var this$1 = this;
        var update = ref.update;

        if (!update) {
          return;
        }

        this.elements.forEach(function (el) {
          if (!el[stateKey$1]) {
            el[stateKey$1] = {
              cls: data(el, 'uk-scrollspy-class') || this$1.cls
            };
          }

          el[stateKey$1].show = isInView(el, this$1.offsetTop, this$1.offsetLeft);
        });
      },
      write: function write(data) {
        var this$1 = this; // Let child components be applied at least once first

        if (!data.update) {
          this.$emit();
          return data.update = true;
        }

        this.elements.forEach(function (el) {
          var state = el[stateKey$1];

          var toggle = function toggle(inview) {
            css(el, 'visibility', !inview && this$1.hidden ? 'hidden' : '');
            toggleClass(el, this$1.inViewClass, inview);
            toggleClass(el, state.cls);
            trigger(el, inview ? 'inview' : 'outview');
            state.inview = inview;
            this$1.$update(el);
          };

          if (state.show && !state.inview && !state.queued) {
            state.queued = true;
            data.promise = (data.promise || Promise.resolve()).then(function () {
              return new Promise(function (resolve) {
                return setTimeout(resolve, this$1.delay);
              });
            }).then(function () {
              toggle(true);
              setTimeout(function () {
                state.queued = false;
                this$1.$emit();
              }, 300);
            });
          } else if (!state.show && state.inview && !state.queued && this$1.repeat) {
            toggle(false);
          }
        });
      },
      events: ['scroll', 'resize']
    }]
  };
  var scrollspyNav = {
    props: {
      cls: String,
      closest: String,
      scroll: Boolean,
      overflow: Boolean,
      offset: Number
    },
    data: {
      cls: 'uk-active',
      closest: false,
      scroll: false,
      overflow: true,
      offset: 0
    },
    computed: {
      links: {
        get: function get(_, $el) {
          return $$('a[href^="#"]', $el).filter(function (el) {
            return el.hash;
          });
        },
        watch: function watch(links) {
          if (this.scroll) {
            this.$create('scroll', links, {
              offset: this.offset || 0
            });
          }
        },
        immediate: true
      },
      targets: function targets() {
        return $$(this.links.map(function (el) {
          return escape(el.hash).substr(1);
        }).join(','));
      },
      elements: function elements(ref) {
        var selector = ref.closest;
        return closest(this.links, selector || '*');
      }
    },
    update: [{
      read: function read() {
        var this$1 = this;
        var ref = this.targets;
        var length = ref.length;

        if (!length || !isVisible(this.$el)) {
          return false;
        }

        var ref$1 = scrollParents(this.targets, /auto|scroll/, true);
        var scrollElement = ref$1[0];
        var scrollTop = scrollElement.scrollTop;
        var scrollHeight = scrollElement.scrollHeight;
        var viewport = getViewport(scrollElement);
        var max = scrollHeight - height(viewport);
        var active = false;

        if (scrollTop === max) {
          active = length - 1;
        } else {
          this.targets.every(function (el, i) {
            if (position(el, viewport).top - this$1.offset <= 0) {
              active = i;
              return true;
            }
          });

          if (active === false && this.overflow) {
            active = 0;
          }
        }

        return {
          active: active
        };
      },
      write: function write(ref) {
        var active = ref.active;
        this.links.forEach(function (el) {
          return el.blur();
        });
        removeClass(this.elements, this.cls);

        if (active !== false) {
          trigger(this.$el, 'active', [active, addClass(this.elements[active], this.cls)]);
        }
      },
      events: ['scroll', 'resize']
    }]
  };
  var sticky = {
    mixins: [Class, Media],
    props: {
      top: null,
      bottom: Boolean,
      offset: String,
      animation: String,
      clsActive: String,
      clsInactive: String,
      clsFixed: String,
      clsBelow: String,
      selTarget: String,
      widthElement: Boolean,
      showOnUp: Boolean,
      targetOffset: Number
    },
    data: {
      top: 0,
      bottom: false,
      offset: 0,
      animation: '',
      clsActive: 'uk-active',
      clsInactive: '',
      clsFixed: 'uk-sticky-fixed',
      clsBelow: 'uk-sticky-below',
      selTarget: '',
      widthElement: false,
      showOnUp: false,
      targetOffset: false
    },
    computed: {
      offset: function offset(ref) {
        var offset = ref.offset;
        return toPx(offset);
      },
      selTarget: function selTarget(ref, $el) {
        var selTarget = ref.selTarget;
        return selTarget && $(selTarget, $el) || $el;
      },
      widthElement: function widthElement(ref, $el) {
        var widthElement = ref.widthElement;
        return query(widthElement, $el) || this.placeholder;
      },
      isActive: {
        get: function get() {
          return hasClass(this.selTarget, this.clsActive);
        },
        set: function set(value) {
          if (value && !this.isActive) {
            replaceClass(this.selTarget, this.clsInactive, this.clsActive);
            trigger(this.$el, 'active');
          } else if (!value && !hasClass(this.selTarget, this.clsInactive)) {
            replaceClass(this.selTarget, this.clsActive, this.clsInactive);
            trigger(this.$el, 'inactive');
          }
        }
      }
    },
    connected: function connected() {
      this.placeholder = $('+ .uk-sticky-placeholder', this.$el) || $('<div class="uk-sticky-placeholder"></div>');
      this.isFixed = false;
      this.isActive = false;
    },
    disconnected: function disconnected() {
      if (this.isFixed) {
        this.hide();
        removeClass(this.selTarget, this.clsInactive);
      }

      _remove(this.placeholder);

      this.placeholder = null;
      this.widthElement = null;
    },
    events: [{
      name: 'load hashchange popstate',
      el: inBrowser && window,
      handler: function handler() {
        var this$1 = this;

        if (!(this.targetOffset !== false && location.hash && window.pageYOffset > 0)) {
          return;
        }

        var target = $(location.hash);

        if (target) {
          fastdom.read(function () {
            var ref = offset(target);
            var top = ref.top;
            var elTop = offset(this$1.$el).top;
            var elHeight = this$1.$el.offsetHeight;

            if (this$1.isFixed && elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
              scrollTop(window, top - elHeight - (isNumeric(this$1.targetOffset) ? this$1.targetOffset : 0) - this$1.offset);
            }
          });
        }
      }
    }],
    update: [{
      read: function read(ref, type) {
        var height = ref.height;
        this.inactive = !this.matchMedia || !isVisible(this.$el);

        if (this.inactive) {
          return false;
        }

        if (this.isActive && type !== 'update') {
          this.hide();
          height = this.$el.offsetHeight;
          this.show();
        }

        height = !this.isActive ? this.$el.offsetHeight : height;
        this.topOffset = offset(this.isFixed ? this.placeholder : this.$el).top;
        this.bottomOffset = this.topOffset + height;
        var bottom = parseProp('bottom', this);
        this.top = Math.max(toFloat(parseProp('top', this)), this.topOffset) - this.offset;
        this.bottom = bottom && bottom - this.$el.offsetHeight;
        this.width = dimensions(isVisible(this.widthElement) ? this.widthElement : this.$el).width;
        return {
          height: height,
          top: offsetPosition(this.placeholder)[0],
          margins: css(this.$el, ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'])
        };
      },
      write: function write(ref) {
        var height = ref.height;
        var margins = ref.margins;
        var ref$1 = this;
        var placeholder = ref$1.placeholder;
        css(placeholder, assign({
          height: height
        }, margins));

        if (!within(placeholder, document)) {
          after(this.$el, placeholder);
          placeholder.hidden = true;
        }

        this.isActive = !!this.isActive; // force self-assign
      },
      events: ['resize']
    }, {
      read: function read(ref) {
        var scroll = ref.scroll;
        if (scroll === void 0) scroll = 0;
        this.scroll = window.pageYOffset;
        return {
          dir: scroll <= this.scroll ? 'down' : 'up',
          scroll: this.scroll
        };
      },
      write: function write(data, type) {
        var this$1 = this;
        var now = Date.now();
        var initTimestamp = data.initTimestamp;
        if (initTimestamp === void 0) initTimestamp = 0;
        var dir = data.dir;
        var lastDir = data.lastDir;
        var lastScroll = data.lastScroll;
        var scroll = data.scroll;
        var top = data.top;
        data.lastScroll = scroll;

        if (scroll < 0 || scroll === lastScroll && type === 'scroll' || this.showOnUp && type !== 'scroll' && !this.isFixed) {
          return;
        }

        if (now - initTimestamp > 300 || dir !== lastDir) {
          data.initScroll = scroll;
          data.initTimestamp = now;
        }

        data.lastDir = dir;

        if (this.showOnUp && !this.isFixed && Math.abs(data.initScroll - scroll) <= 30 && Math.abs(lastScroll - scroll) <= 10) {
          return;
        }

        if (this.inactive || scroll < this.top || this.showOnUp && (scroll <= this.top || dir === 'down' && type === 'scroll' || dir === 'up' && !this.isFixed && scroll <= this.bottomOffset)) {
          if (!this.isFixed) {
            if (Animation.inProgress(this.$el) && top > scroll) {
              Animation.cancel(this.$el);
              this.hide();
            }

            return;
          }

          this.isFixed = false;

          if (this.animation && scroll > this.topOffset) {
            Animation.cancel(this.$el);
            Animation.out(this.$el, this.animation).then(function () {
              return this$1.hide();
            }, noop);
          } else {
            this.hide();
          }
        } else if (this.isFixed) {
          this.update();
        } else if (this.animation) {
          Animation.cancel(this.$el);
          this.show();
          Animation["in"](this.$el, this.animation)["catch"](noop);
        } else {
          this.show();
        }
      },
      events: ['resize', 'scroll']
    }],
    methods: {
      show: function show() {
        this.isFixed = true;
        this.update();
        this.placeholder.hidden = false;
      },
      hide: function hide() {
        this.isActive = false;
        removeClass(this.$el, this.clsFixed, this.clsBelow);
        css(this.$el, {
          position: '',
          top: '',
          width: ''
        });
        this.placeholder.hidden = true;
      },
      update: function update() {
        var active = this.top !== 0 || this.scroll > this.top;
        var top = Math.max(0, this.offset);

        if (isNumeric(this.bottom) && this.scroll > this.bottom - this.offset) {
          top = this.bottom - this.scroll;
        }

        css(this.$el, {
          position: 'fixed',
          top: top + "px",
          width: this.width
        });
        this.isActive = active;
        toggleClass(this.$el, this.clsBelow, this.scroll > this.bottomOffset);
        addClass(this.$el, this.clsFixed);
      }
    }
  };

  function parseProp(prop, ref) {
    var $props = ref.$props;
    var $el = ref.$el;
    var propOffset = ref[prop + "Offset"];
    var value = $props[prop];

    if (!value) {
      return;
    }

    if (isString(value) && value.match(/^-?\d/)) {
      return propOffset + toPx(value);
    } else {
      return offset(value === true ? parent($el) : query(value, $el)).bottom;
    }
  }

  var Switcher = {
    mixins: [Togglable],
    args: 'connect',
    props: {
      connect: String,
      toggle: String,
      active: Number,
      swiping: Boolean
    },
    data: {
      connect: '~.uk-switcher',
      toggle: '> * > :first-child',
      active: 0,
      swiping: true,
      cls: 'uk-active',
      attrItem: 'uk-switcher-item'
    },
    computed: {
      connects: {
        get: function get(ref, $el) {
          var connect = ref.connect;
          return queryAll(connect, $el);
        },
        watch: function watch(connects) {
          if (this.swiping) {
            css(connects, 'touch-action', 'pan-y pinch-zoom');
          }
        },
        immediate: true
      },
      toggles: {
        get: function get(ref, $el) {
          var toggle = ref.toggle;
          return $$(toggle, $el).filter(function (el) {
            return !matches(el, '.uk-disabled *, .uk-disabled, [disabled]');
          });
        },
        watch: function watch(toggles) {
          var active = this.index();
          this.show(~active && active || toggles[this.active] || toggles[0]);
        },
        immediate: true
      },
      children: function children() {
        var this$1 = this;
        return _children(this.$el).filter(function (child) {
          return this$1.toggles.some(function (toggle) {
            return within(toggle, child);
          });
        });
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.toggle;
      },
      handler: function handler(e) {
        e.preventDefault();
        this.show(e.current);
      }
    }, {
      name: 'click',
      el: function el() {
        return this.connects;
      },
      delegate: function delegate() {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function handler(e) {
        e.preventDefault();
        this.show(data(e.current, this.attrItem));
      }
    }, {
      name: 'swipeRight swipeLeft',
      filter: function filter() {
        return this.swiping;
      },
      el: function el() {
        return this.connects;
      },
      handler: function handler(ref) {
        var type = ref.type;
        this.show(endsWith(type, 'Left') ? 'next' : 'previous');
      }
    }],
    methods: {
      index: function index() {
        var this$1 = this;
        return findIndex(this.children, function (el) {
          return hasClass(el, this$1.cls);
        });
      },
      show: function show(item) {
        var this$1 = this;
        var prev = this.index();

        var next = _getIndex(this.children[_getIndex(item, this.toggles, prev)], _children(this.$el));

        if (prev === next) {
          return;
        }

        this.children.forEach(function (child, i) {
          toggleClass(child, this$1.cls, next === i);
          attr(this$1.toggles[i], 'aria-expanded', next === i);
        });
        this.connects.forEach(function (ref) {
          var children = ref.children;
          return this$1.toggleElement(toNodes(children).filter(function (child, i) {
            return i !== next && this$1.isToggled(child);
          }), false, prev >= 0).then(function () {
            return this$1.toggleElement(children[next], true, prev >= 0);
          });
        });
      }
    }
  };
  var tab = {
    mixins: [Class],
    "extends": Switcher,
    props: {
      media: Boolean
    },
    data: {
      media: 960,
      attrItem: 'uk-tab-item'
    },
    connected: function connected() {
      var cls = hasClass(this.$el, 'uk-tab-left') ? 'uk-tab-left' : hasClass(this.$el, 'uk-tab-right') ? 'uk-tab-right' : false;

      if (cls) {
        this.$create('toggle', this.$el, {
          cls: cls,
          mode: 'media',
          media: this.media
        });
      }
    }
  };
  var toggle = {
    mixins: [Media, Togglable],
    args: 'target',
    props: {
      href: String,
      target: null,
      mode: 'list',
      queued: Boolean
    },
    data: {
      href: false,
      target: false,
      mode: 'click',
      queued: true
    },
    computed: {
      target: {
        get: function get(ref, $el) {
          var href = ref.href;
          var target = ref.target;
          target = queryAll(target || href, $el);
          return target.length && target || [$el];
        },
        watch: function watch() {
          this.updateAria();
        },
        immediate: true
      }
    },
    events: [{
      name: pointerEnter + " " + pointerLeave,
      filter: function filter() {
        return includes(this.mode, 'hover');
      },
      handler: function handler(e) {
        if (!isTouch(e)) {
          this.toggle("toggle" + (e.type === pointerEnter ? 'show' : 'hide'));
        }
      }
    }, {
      name: 'click',
      filter: function filter() {
        return includes(this.mode, 'click') || hasTouch && includes(this.mode, 'hover');
      },
      handler: function handler(e) {
        var link;

        if (closest(e.target, 'a[href="#"], a[href=""]') || (link = closest(e.target, 'a[href]')) && (!isToggled(this.target, this.cls) || link.hash && matches(this.target, link.hash))) {
          e.preventDefault();
        }

        this.toggle();
      }
    }, {
      name: 'toggled',
      self: true,
      el: function el() {
        return this.target;
      },
      handler: function handler(e, toggled) {
        this.updateAria(toggled);
      }
    }],
    update: {
      read: function read() {
        return includes(this.mode, 'media') && this.media ? {
          match: this.matchMedia
        } : false;
      },
      write: function write(ref) {
        var match = ref.match;
        var toggled = this.isToggled(this.target);

        if (match ? !toggled : toggled) {
          this.toggle();
        }
      },
      events: ['resize']
    },
    methods: {
      toggle: function toggle(type) {
        var this$1 = this;

        if (!trigger(this.target, type || 'toggle', [this])) {
          return;
        }

        if (!this.queued) {
          return this.toggleElement(this.target);
        }

        var leaving = this.target.filter(function (el) {
          return hasClass(el, this$1.clsLeave);
        });

        if (leaving.length) {
          this.target.forEach(function (el) {
            var isLeaving = includes(leaving, el);
            this$1.toggleElement(el, isLeaving, isLeaving);
          });
          return;
        }

        var toggled = this.target.filter(this.isToggled);
        this.toggleElement(toggled, false).then(function () {
          return this$1.toggleElement(this$1.target.filter(function (el) {
            return !includes(toggled, el);
          }), true);
        });
      },
      updateAria: function updateAria(toggled) {
        attr(this.$el, 'aria-expanded', isBoolean(toggled) ? toggled : isToggled(this.target, this.cls));
      }
    }
  }; // TODO improve isToggled handling

  function isToggled(target, cls) {
    return cls ? hasClass(target, cls.split(' ')[0]) : isVisible(target);
  }

  var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Accordion: Accordion,
    Alert: alert,
    Cover: cover,
    Drop: drop,
    Dropdown: drop,
    FormCustom: formCustom,
    Gif: gif,
    Grid: grid,
    HeightMatch: heightMatch,
    HeightViewport: heightViewport,
    Icon: Icon,
    Img: img,
    Leader: leader,
    Margin: Margin,
    Modal: modal,
    Nav: nav,
    Navbar: navbar,
    Offcanvas: offcanvas,
    OverflowAuto: overflowAuto,
    Responsive: responsive,
    Scroll: scroll,
    Scrollspy: scrollspy,
    ScrollspyNav: scrollspyNav,
    Sticky: sticky,
    Svg: SVG,
    Switcher: Switcher,
    Tab: tab,
    Toggle: toggle,
    Video: Video,
    Close: Close,
    Spinner: Spinner,
    SlidenavNext: Slidenav,
    SlidenavPrevious: Slidenav,
    SearchIcon: Search,
    Marker: IconComponent,
    NavbarToggleIcon: IconComponent,
    OverlayIcon: IconComponent,
    PaginationNext: IconComponent,
    PaginationPrevious: IconComponent,
    Totop: IconComponent
  }); // register components

  each(components, function (component, name) {
    return UIkit.component(name, component);
  }); // core functionality

  UIkit.use(Core);
  boot(UIkit);
  var countdown = {
    mixins: [Class],
    props: {
      date: String,
      clsWrapper: String
    },
    data: {
      date: '',
      clsWrapper: '.uk-countdown-%unit%'
    },
    computed: {
      date: function date(ref) {
        var date = ref.date;
        return Date.parse(date);
      },
      days: function days(ref, $el) {
        var clsWrapper = ref.clsWrapper;
        return $(clsWrapper.replace('%unit%', 'days'), $el);
      },
      hours: function hours(ref, $el) {
        var clsWrapper = ref.clsWrapper;
        return $(clsWrapper.replace('%unit%', 'hours'), $el);
      },
      minutes: function minutes(ref, $el) {
        var clsWrapper = ref.clsWrapper;
        return $(clsWrapper.replace('%unit%', 'minutes'), $el);
      },
      seconds: function seconds(ref, $el) {
        var clsWrapper = ref.clsWrapper;
        return $(clsWrapper.replace('%unit%', 'seconds'), $el);
      },
      units: function units() {
        var this$1 = this;
        return ['days', 'hours', 'minutes', 'seconds'].filter(function (unit) {
          return this$1[unit];
        });
      }
    },
    connected: function connected() {
      this.start();
    },
    disconnected: function disconnected() {
      var this$1 = this;
      this.stop();
      this.units.forEach(function (unit) {
        return empty(this$1[unit]);
      });
    },
    events: [{
      name: 'visibilitychange',
      el: inBrowser && document,
      handler: function handler() {
        if (document.hidden) {
          this.stop();
        } else {
          this.start();
        }
      }
    }],
    update: {
      write: function write() {
        var this$1 = this;
        var timespan = getTimeSpan(this.date);

        if (timespan.total <= 0) {
          this.stop();
          timespan.days = timespan.hours = timespan.minutes = timespan.seconds = 0;
        }

        this.units.forEach(function (unit) {
          var digits = String(Math.floor(timespan[unit]));
          digits = digits.length < 2 ? "0" + digits : digits;
          var el = this$1[unit];

          if (el.textContent !== digits) {
            digits = digits.split('');

            if (digits.length !== el.children.length) {
              html(el, digits.map(function () {
                return '<span></span>';
              }).join(''));
            }

            digits.forEach(function (digit, i) {
              return el.children[i].textContent = digit;
            });
          }
        });
      }
    },
    methods: {
      start: function start() {
        this.stop();

        if (this.date && this.units.length) {
          this.$update();
          this.timer = setInterval(this.$update, 1000);
        }
      },
      stop: function stop() {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
      }
    }
  };

  function getTimeSpan(date) {
    var total = date - Date.now();
    return {
      total: total,
      seconds: total / 1000 % 60,
      minutes: total / 1000 / 60 % 60,
      hours: total / 1000 / 60 / 60 % 24,
      days: total / 1000 / 60 / 60 / 24
    };
  }

  var clsLeave = 'uk-transition-leave';
  var clsEnter = 'uk-transition-enter';

  function fade(action, target, duration, stagger) {
    if (stagger === void 0) stagger = 0;
    var index = transitionIndex(target, true);
    var propsIn = {
      opacity: 1
    };
    var propsOut = {
      opacity: 0
    };

    var wrapIndexFn = function wrapIndexFn(fn) {
      return function () {
        return index === transitionIndex(target) ? fn() : Promise.reject();
      };
    };

    var leaveFn = wrapIndexFn(function () {
      addClass(target, clsLeave);
      return Promise.all(getTransitionNodes(target).map(function (child, i) {
        return new Promise(function (resolve) {
          return setTimeout(function () {
            return Transition.start(child, propsOut, duration / 2, 'ease').then(resolve);
          }, i * stagger);
        });
      })).then(function () {
        return removeClass(target, clsLeave);
      });
    });
    var enterFn = wrapIndexFn(function () {
      var oldHeight = height(target);
      addClass(target, clsEnter);
      action();
      css(_children(target), {
        opacity: 0
      }); // Two frames to ensure UIkit updates propagated

      return new Promise(function (resolve) {
        return requestAnimationFrame(function () {
          var nodes = _children(target);

          var newHeight = height(target);
          height(target, oldHeight);
          var transitionNodes = getTransitionNodes(target);
          css(nodes, propsOut);
          var transitions = transitionNodes.map(function (child, i) {
            return new Promise(function (resolve) {
              return setTimeout(function () {
                return Transition.start(child, propsIn, duration / 2, 'ease').then(resolve);
              }, i * stagger);
            });
          });

          if (oldHeight !== newHeight) {
            transitions.push(Transition.start(target, {
              height: newHeight
            }, duration / 2 + transitionNodes.length * stagger, 'ease'));
          }

          Promise.all(transitions).then(function () {
            removeClass(target, clsEnter);

            if (index === transitionIndex(target)) {
              css(target, 'height', '');
              css(nodes, {
                opacity: ''
              });
              delete target.dataset.transition;
            }

            resolve();
          });
        });
      });
    });
    return hasClass(target, clsLeave) ? waitTransitionend(target).then(enterFn) : hasClass(target, clsEnter) ? waitTransitionend(target).then(leaveFn).then(enterFn) : leaveFn().then(enterFn);
  }

  function transitionIndex(target, next) {
    if (next) {
      target.dataset.transition = 1 + transitionIndex(target);
    }

    return toNumber(target.dataset.transition) || 0;
  }

  function waitTransitionend(target) {
    return Promise.all(_children(target).filter(Transition.inProgress).map(function (el) {
      return new Promise(function (resolve) {
        return once(el, 'transitionend transitioncanceled', resolve);
      });
    }));
  }

  function getTransitionNodes(target) {
    return getRows(_children(target)).reduce(function (nodes, row) {
      return nodes.concat(sortBy(row.filter(function (el) {
        return isInView(el);
      }), 'offsetLeft'));
    }, []);
  }

  var targetClass = 'uk-animation-target';

  function slide(action, target, duration) {
    addStyle();

    var nodes = _children(target); // Get current state


    var currentProps = nodes.map(function (el) {
      return getProps(el, true);
    });
    var oldHeight = height(target); // Cancel previous animations

    Transition.cancel(target);
    nodes.forEach(Transition.cancel);
    removeClass(target, targetClass);
    reset(target); // Adding, sorting, removing nodes

    action(); // Find new nodes

    nodes = nodes.concat(_children(target).filter(function (el) {
      return !includes(nodes, el);
    })); // Wait for update to propagate

    return Promise.resolve().then(function () {
      // Force update
      fastdom.flush(); // Get new state

      var newHeight = height(target);
      var ref = getTransitionProps(target, nodes, currentProps);
      var propsTo = ref[0];
      var propsFrom = ref[1]; // Reset to previous state

      addClass(target, targetClass);
      nodes.forEach(function (el, i) {
        return propsFrom[i] && css(el, propsFrom[i]);
      });
      css(target, {
        height: oldHeight,
        display: 'block'
      }); // Start transitions on next frame

      return new Promise(function (resolve) {
        return requestAnimationFrame(function () {
          var transitions = nodes.map(function (el, i) {
            return Transition.start(el, propsTo[i], duration, 'ease');
          }).concat(Transition.start(target, {
            height: newHeight
          }, duration, 'ease'));
          Promise.all(transitions).then(function () {
            nodes.forEach(function (el, i) {
              return css(el, 'display', propsTo[i].opacity === 0 ? 'none' : '');
            });
            reset(target);
          }, noop).then(resolve);
        });
      });
    });
  }

  function getProps(el, opacity) {
    var zIndex = css(el, 'zIndex');
    return isVisible(el) ? assign({
      display: '',
      opacity: opacity ? css(el, 'opacity') : '0',
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: zIndex === 'auto' ? index(el) : zIndex
    }, getPositionWithMargin(el)) : false;
  }

  function getTransitionProps(target, nodes, currentProps) {
    var propsTo = nodes.map(function (el, i) {
      return parent(el) && i in currentProps ? currentProps[i] ? isVisible(el) ? getPositionWithMargin(el) : {
        opacity: 0
      } : {
        opacity: isVisible(el) ? 1 : 0
      } : false;
    });
    var propsFrom = propsTo.map(function (props, i) {
      var from = parent(nodes[i]) === target && (currentProps[i] || getProps(nodes[i]));

      if (!from) {
        return false;
      }

      if (!props) {
        delete from.opacity;
      } else if (!('opacity' in props)) {
        var opacity = from.opacity;

        if (opacity % 1) {
          props.opacity = 1;
        } else {
          delete from.opacity;
        }
      }

      return from;
    });
    return [propsTo, propsFrom];
  }

  function reset(el) {
    css(el.children, {
      height: '',
      left: '',
      opacity: '',
      pointerEvents: '',
      position: '',
      top: '',
      width: '',
      zIndex: ''
    });
    removeClass(el, targetClass);
    css(el, {
      height: '',
      display: ''
    });
  }

  function getPositionWithMargin(el) {
    var ref = offset(el);
    var height = ref.height;
    var width = ref.width;
    var ref$1 = position(el);
    var top = ref$1.top;
    var left = ref$1.left;
    return {
      top: top,
      left: left,
      height: height,
      width: width
    };
  }

  var style;

  function addStyle() {
    if (style) {
      return;
    }

    style = !!append(document.head, "<style> ." + targetClass + " > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        } </style>");
  }

  var Animate = {
    props: {
      duration: Number,
      animation: String
    },
    data: {
      duration: 150,
      animation: 'slide'
    },
    methods: {
      animate: function animate(action, target) {
        if (target === void 0) target = this.$el;
        var name = this.animation;
        var animationFn = name === 'fade' ? fade : name === 'delayed-fade' ? function () {
          var args = [],
              len = arguments.length;

          while (len--) {
            args[len] = arguments[len];
          }

          return fade.apply(void 0, args.concat([40]));
        } : slide;
        return animationFn(action, target, this.duration).then(function () {
          return trigger(toWindow(target), 'resize');
        }, noop);
      }
    }
  };
  var filter$1 = {
    mixins: [Animate],
    args: 'target',
    props: {
      target: Boolean,
      selActive: Boolean
    },
    data: {
      target: null,
      selActive: false,
      attrItem: 'uk-filter-control',
      cls: 'uk-active',
      duration: 250
    },
    computed: {
      toggles: {
        get: function get(ref, $el) {
          var attrItem = ref.attrItem;
          return $$("[" + this.attrItem + "],[data-" + this.attrItem + "]", $el);
        },
        watch: function watch() {
          var this$1 = this;
          this.updateState();

          if (this.selActive !== false) {
            var actives = $$(this.selActive, this.$el);
            this.toggles.forEach(function (el) {
              return toggleClass(el, this$1.cls, includes(actives, el));
            });
          }
        },
        immediate: true
      },
      children: {
        get: function get(ref, $el) {
          var target = ref.target;
          return $$(target + " > *", $el);
        },
        watch: function watch(list, old) {
          if (!isEqualList(list, old)) {
            this.updateState();
          }
        }
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function handler(e) {
        e.preventDefault();
        this.apply(e.current);
      }
    }],
    methods: {
      apply: function apply(el) {
        var prevState = this.getState();
        var newState = mergeState(el, this.attrItem, this.getState());

        if (!isEqualState(prevState, newState)) {
          this.setState(newState);
        }
      },
      getState: function getState() {
        var this$1 = this;
        return this.toggles.filter(function (item) {
          return hasClass(item, this$1.cls);
        }).reduce(function (state, el) {
          return mergeState(el, this$1.attrItem, state);
        }, {
          filter: {
            '': ''
          },
          sort: []
        });
      },
      setState: function setState(state, animate) {
        var this$1 = this;
        if (animate === void 0) animate = true;
        state = assign({
          filter: {
            '': ''
          },
          sort: []
        }, state);
        trigger(this.$el, 'beforeFilter', [this, state]);
        this.toggles.forEach(function (el) {
          return toggleClass(el, this$1.cls, !!matchFilter(el, this$1.attrItem, state));
        });
        Promise.all($$(this.target, this.$el).map(function (target) {
          var filterFn = function filterFn() {
            applyState(state, target, _children(target));
            this$1.$update(this$1.$el);
          };

          return animate ? this$1.animate(filterFn, target) : filterFn();
        })).then(function () {
          return trigger(this$1.$el, 'afterFilter', [this$1]);
        });
      },
      updateState: function updateState() {
        var this$1 = this;
        fastdom.write(function () {
          return this$1.setState(this$1.getState(), false);
        });
      }
    }
  };

  function getFilter(el, attr) {
    return parseOptions(data(el, attr), ['filter']);
  }

  function isEqualState(stateA, stateB) {
    return ['filter', 'sort'].every(function (prop) {
      return isEqual(stateA[prop], stateB[prop]);
    });
  }

  function applyState(state, target, children) {
    var selector = getSelector(state);
    children.forEach(function (el) {
      return css(el, 'display', selector && !matches(el, selector) ? 'none' : '');
    });
    var ref = state.sort;
    var sort = ref[0];
    var order = ref[1];

    if (sort) {
      var sorted = sortItems(children, sort, order);

      if (!isEqual(sorted, children)) {
        append(target, sorted);
      }
    }
  }

  function mergeState(el, attr, state) {
    var filterBy = getFilter(el, attr);
    var filter = filterBy.filter;
    var group = filterBy.group;
    var sort = filterBy.sort;
    var order = filterBy.order;
    if (order === void 0) order = 'asc';

    if (filter || isUndefined(sort)) {
      if (group) {
        if (filter) {
          delete state.filter[''];
          state.filter[group] = filter;
        } else {
          delete state.filter[group];

          if (isEmpty(state.filter) || '' in state.filter) {
            state.filter = {
              '': filter || ''
            };
          }
        }
      } else {
        state.filter = {
          '': filter || ''
        };
      }
    }

    if (!isUndefined(sort)) {
      state.sort = [sort, order];
    }

    return state;
  }

  function matchFilter(el, attr, ref) {
    var stateFilter = ref.filter;
    if (stateFilter === void 0) stateFilter = {
      '': ''
    };
    var ref_sort = ref.sort;
    var stateSort = ref_sort[0];
    var stateOrder = ref_sort[1];
    var ref$1 = getFilter(el, attr);
    var filter = ref$1.filter;
    if (filter === void 0) filter = '';
    var group = ref$1.group;
    if (group === void 0) group = '';
    var sort = ref$1.sort;
    var order = ref$1.order;
    if (order === void 0) order = 'asc';
    return isUndefined(sort) ? group in stateFilter && filter === stateFilter[group] || !filter && group && !(group in stateFilter) && !stateFilter[''] : stateSort === sort && stateOrder === order;
  }

  function isEqualList(listA, listB) {
    return listA.length === listB.length && listA.every(function (el) {
      return ~listB.indexOf(el);
    });
  }

  function getSelector(ref) {
    var filter = ref.filter;
    var selector = '';
    each(filter, function (value) {
      return selector += value || '';
    });
    return selector;
  }

  function sortItems(nodes, sort, order) {
    return assign([], nodes).sort(function (a, b) {
      return data(a, sort).localeCompare(data(b, sort), undefined, {
        numeric: true
      }) * (order === 'asc' || -1);
    });
  }

  var Animations = {
    slide: {
      show: function show(dir) {
        return [{
          transform: _translate(dir * -100)
        }, {
          transform: _translate()
        }];
      },
      percent: function percent(current) {
        return translated(current);
      },
      translate: function translate(percent, dir) {
        return [{
          transform: _translate(dir * -100 * percent)
        }, {
          transform: _translate(dir * 100 * (1 - percent))
        }];
      }
    }
  };

  function translated(el) {
    return Math.abs(css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
  }

  function _translate(value, unit) {
    if (value === void 0) value = 0;
    if (unit === void 0) unit = '%';
    value += value ? unit : '';
    return isIE ? "translateX(" + value + ")" : "translate3d(" + value + ", 0, 0)"; // currently not translate3d in IE, translate3d within translate3d does not work while transitioning
  }

  function scale3d(value) {
    return "scale3d(" + value + ", " + value + ", 1)";
  }

  var Animations$1 = assign({}, Animations, {
    fade: {
      show: function show() {
        return [{
          opacity: 0
        }, {
          opacity: 1
        }];
      },
      percent: function percent(current) {
        return 1 - css(current, 'opacity');
      },
      translate: function translate(percent) {
        return [{
          opacity: 1 - percent
        }, {
          opacity: percent
        }];
      }
    },
    scale: {
      show: function show() {
        return [{
          opacity: 0,
          transform: scale3d(1 - .2)
        }, {
          opacity: 1,
          transform: scale3d(1)
        }];
      },
      percent: function percent(current) {
        return 1 - css(current, 'opacity');
      },
      translate: function translate(percent) {
        return [{
          opacity: 1 - percent,
          transform: scale3d(1 - .2 * percent)
        }, {
          opacity: percent,
          transform: scale3d(1 - .2 + .2 * percent)
        }];
      }
    }
  });

  function Transitioner(prev, next, dir, ref) {
    var animation = ref.animation;
    var easing = ref.easing;
    var _percent = animation.percent;
    var _translate2 = animation.translate;
    var show = animation.show;
    if (show === void 0) show = noop;
    var props = show(dir);
    var deferred = new Deferred();
    return {
      dir: dir,
      show: function show(duration, percent, linear) {
        var this$1 = this;
        if (percent === void 0) percent = 0;
        var timing = linear ? 'linear' : easing;
        duration -= Math.round(duration * clamp(percent, -1, 1));
        this.translate(percent);
        triggerUpdate(next, 'itemin', {
          percent: percent,
          duration: duration,
          timing: timing,
          dir: dir
        });
        triggerUpdate(prev, 'itemout', {
          percent: 1 - percent,
          duration: duration,
          timing: timing,
          dir: dir
        });
        Promise.all([Transition.start(next, props[1], duration, timing), Transition.start(prev, props[0], duration, timing)]).then(function () {
          this$1.reset();
          deferred.resolve();
        }, noop);
        return deferred.promise;
      },
      cancel: function cancel() {
        Transition.cancel([next, prev]);
      },
      reset: function reset() {
        for (var prop in props[0]) {
          css([next, prev], prop, '');
        }
      },
      forward: function forward(duration, percent) {
        if (percent === void 0) percent = this.percent();
        Transition.cancel([next, prev]);
        return this.show(duration, percent, true);
      },
      translate: function translate(percent) {
        this.reset();

        var props = _translate2(percent, dir);

        css(next, props[1]);
        css(prev, props[0]);
        triggerUpdate(next, 'itemtranslatein', {
          percent: percent,
          dir: dir
        });
        triggerUpdate(prev, 'itemtranslateout', {
          percent: 1 - percent,
          dir: dir
        });
      },
      percent: function percent() {
        return _percent(prev || next, next, dir);
      },
      getDistance: function getDistance() {
        return prev && prev.offsetWidth;
      }
    };
  }

  function triggerUpdate(el, type, data) {
    trigger(el, createEvent(type, false, false, data));
  }

  var SliderAutoplay = {
    props: {
      autoplay: Boolean,
      autoplayInterval: Number,
      pauseOnHover: Boolean
    },
    data: {
      autoplay: false,
      autoplayInterval: 7000,
      pauseOnHover: true
    },
    connected: function connected() {
      this.autoplay && this.startAutoplay();
    },
    disconnected: function disconnected() {
      this.stopAutoplay();
    },
    update: function update() {
      attr(this.slides, 'tabindex', '-1');
    },
    events: [{
      name: 'visibilitychange',
      el: inBrowser && document,
      filter: function filter() {
        return this.autoplay;
      },
      handler: function handler() {
        if (document.hidden) {
          this.stopAutoplay();
        } else {
          this.startAutoplay();
        }
      }
    }],
    methods: {
      startAutoplay: function startAutoplay() {
        var this$1 = this;
        this.stopAutoplay();
        this.interval = setInterval(function () {
          return (!this$1.draggable || !$(':focus', this$1.$el)) && (!this$1.pauseOnHover || !matches(this$1.$el, ':hover')) && !this$1.stack.length && this$1.show('next');
        }, this.autoplayInterval);
      },
      stopAutoplay: function stopAutoplay() {
        this.interval && clearInterval(this.interval);
      }
    }
  };
  var SliderDrag = {
    props: {
      draggable: Boolean
    },
    data: {
      draggable: true,
      threshold: 10
    },
    created: function created() {
      var this$1 = this;
      ['start', 'move', 'end'].forEach(function (key) {
        var fn = this$1[key];

        this$1[key] = function (e) {
          var pos = getEventPos(e).x * (isRtl ? -1 : 1);
          this$1.prevPos = pos !== this$1.pos ? this$1.pos : this$1.prevPos;
          this$1.pos = pos;
          fn(e);
        };
      });
    },
    events: [{
      name: pointerDown,
      delegate: function delegate() {
        return this.selSlides;
      },
      handler: function handler(e) {
        if (!this.draggable || !isTouch(e) && hasTextNodesOnly(e.target) || closest(e.target, selInput) || e.button > 0 || this.length < 2) {
          return;
        }

        this.start(e);
      }
    }, {
      name: 'dragstart',
      handler: function handler(e) {
        e.preventDefault();
      }
    }],
    methods: {
      start: function start() {
        this.drag = this.pos;

        if (this._transitioner) {
          this.percent = this._transitioner.percent();
          this.drag += this._transitioner.getDistance() * this.percent * this.dir;

          this._transitioner.cancel();

          this._transitioner.translate(this.percent);

          this.dragging = true;
          this.stack = [];
        } else {
          this.prevIndex = this.index;
        } // Workaround for iOS's inert scrolling preventing pointerdown event
        // https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action


        on(this.list, 'touchmove', this.move, {
          passive: false
        });
        on(document, pointerMove, this.move, {
          passive: false
        });
        on(document, pointerUp + " " + pointerCancel, this.end, true);
        css(this.list, 'userSelect', 'none');
      },
      move: function move(e) {
        var this$1 = this;
        var distance = this.pos - this.drag;

        if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
          return;
        }

        e.cancelable && e.preventDefault();
        this.dragging = true;
        this.dir = distance < 0 ? 1 : -1;
        var ref = this;
        var slides = ref.slides;
        var ref$1 = this;
        var prevIndex = ref$1.prevIndex;
        var dis = Math.abs(distance);
        var nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
        var width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

        while (nextIndex !== prevIndex && dis > width) {
          this.drag -= width * this.dir;
          prevIndex = nextIndex;
          dis -= width;
          nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
          width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;
        }

        this.percent = dis / width;
        var prev = slides[prevIndex];
        var next = slides[nextIndex];
        var changed = this.index !== nextIndex;
        var edge = prevIndex === nextIndex;
        var itemShown;
        [this.index, this.prevIndex].filter(function (i) {
          return !includes([nextIndex, prevIndex], i);
        }).forEach(function (i) {
          trigger(slides[i], 'itemhidden', [this$1]);

          if (edge) {
            itemShown = true;
            this$1.prevIndex = prevIndex;
          }
        });

        if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
          trigger(slides[this.index], 'itemshown', [this]);
        }

        if (changed) {
          this.prevIndex = prevIndex;
          this.index = nextIndex;
          !edge && trigger(prev, 'beforeitemhide', [this]);
          trigger(next, 'beforeitemshow', [this]);
        }

        this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

        if (changed) {
          !edge && trigger(prev, 'itemhide', [this]);
          trigger(next, 'itemshow', [this]);
        }
      },
      end: function end() {
        off(this.list, 'touchmove', this.move, {
          passive: false
        });
        off(document, pointerMove, this.move, {
          passive: false
        });
        off(document, pointerUp + " " + pointerCancel, this.end, true);

        if (this.dragging) {
          this.dragging = null;

          if (this.index === this.prevIndex) {
            this.percent = 1 - this.percent;
            this.dir *= -1;

            this._show(false, this.index, true);

            this._transitioner = null;
          } else {
            var dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
            this.index = dirChange ? this.index : this.prevIndex;

            if (dirChange) {
              this.percent = 1 - this.percent;
            }

            this.show(this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? 'next' : 'previous', true);
          }
        }

        css(this.list, {
          userSelect: '',
          pointerEvents: ''
        });
        this.drag = this.percent = null;
      }
    }
  };

  function hasTextNodesOnly(el) {
    return !el.children.length && el.childNodes.length;
  }

  var SliderNav = {
    data: {
      selNav: false
    },
    computed: {
      nav: function nav(ref, $el) {
        var selNav = ref.selNav;
        return $(selNav, $el);
      },
      selNavItem: function selNavItem(ref) {
        var attrItem = ref.attrItem;
        return "[" + attrItem + "],[data-" + attrItem + "]";
      },
      navItems: function navItems(_, $el) {
        return $$(this.selNavItem, $el);
      }
    },
    update: {
      write: function write() {
        var this$1 = this;

        if (this.nav && this.length !== this.nav.children.length) {
          html(this.nav, this.slides.map(function (_, i) {
            return "<li " + this$1.attrItem + "=\"" + i + "\"><a href></a></li>";
          }).join(''));
        }

        this.navItems.concat(this.nav).forEach(function (el) {
          return el && (el.hidden = !this$1.maxIndex);
        });
        this.updateNav();
      },
      events: ['resize']
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.selNavItem;
      },
      handler: function handler(e) {
        e.preventDefault();
        this.show(data(e.current, this.attrItem));
      }
    }, {
      name: 'itemshow',
      handler: 'updateNav'
    }],
    methods: {
      updateNav: function updateNav() {
        var this$1 = this;
        var i = this.getValidIndex();
        this.navItems.forEach(function (el) {
          var cmd = data(el, this$1.attrItem);
          toggleClass(el, this$1.clsActive, toNumber(cmd) === i);
          toggleClass(el, 'uk-invisible', this$1.finite && (cmd === 'previous' && i === 0 || cmd === 'next' && i >= this$1.maxIndex));
        });
      }
    }
  };
  var Slider = {
    mixins: [SliderAutoplay, SliderDrag, SliderNav],
    props: {
      clsActivated: Boolean,
      easing: String,
      index: Number,
      finite: Boolean,
      velocity: Number,
      selSlides: String
    },
    data: function data() {
      return {
        easing: 'ease',
        finite: false,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: 'uk-active',
        clsActivated: false,
        Transitioner: false,
        transitionOptions: {}
      };
    },
    connected: function connected() {
      this.prevIndex = -1;
      this.index = this.getValidIndex(this.$props.index);
      this.stack = [];
    },
    disconnected: function disconnected() {
      removeClass(this.slides, this.clsActive);
    },
    computed: {
      duration: function duration(ref, $el) {
        var velocity = ref.velocity;
        return speedUp($el.offsetWidth / velocity);
      },
      list: function list(ref, $el) {
        var selList = ref.selList;
        return $(selList, $el);
      },
      maxIndex: function maxIndex() {
        return this.length - 1;
      },
      selSlides: function selSlides(ref) {
        var selList = ref.selList;
        var selSlides = ref.selSlides;
        return selList + " " + (selSlides || '> *');
      },
      slides: {
        get: function get() {
          return $$(this.selSlides, this.$el);
        },
        watch: function watch() {
          this.$reset();
        }
      },
      length: function length() {
        return this.slides.length;
      }
    },
    events: {
      itemshown: function itemshown() {
        this.$update(this.list);
      }
    },
    methods: {
      show: function show(index, force) {
        var this$1 = this;
        if (force === void 0) force = false;

        if (this.dragging || !this.length) {
          return;
        }

        var ref = this;
        var stack = ref.stack;
        var queueIndex = force ? 0 : stack.length;

        var reset = function reset() {
          stack.splice(queueIndex, 1);

          if (stack.length) {
            this$1.show(stack.shift(), true);
          }
        };

        stack[force ? 'unshift' : 'push'](index);

        if (!force && stack.length > 1) {
          if (stack.length === 2) {
            this._transitioner.forward(Math.min(this.duration, 200));
          }

          return;
        }

        var prevIndex = this.getIndex(this.index);
        var prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
        var nextIndex = this.getIndex(index, this.index);
        var next = this.slides[nextIndex];

        if (prev === next) {
          reset();
          return;
        }

        this.dir = getDirection(index, prevIndex);
        this.prevIndex = prevIndex;
        this.index = nextIndex;

        if (prev && !trigger(prev, 'beforeitemhide', [this]) || !trigger(next, 'beforeitemshow', [this, prev])) {
          this.index = this.prevIndex;
          reset();
          return;
        }

        var promise = this._show(prev, next, force).then(function () {
          prev && trigger(prev, 'itemhidden', [this$1]);
          trigger(next, 'itemshown', [this$1]);
          return new Promise(function (resolve) {
            fastdom.write(function () {
              stack.shift();

              if (stack.length) {
                this$1.show(stack.shift(), true);
              } else {
                this$1._transitioner = null;
              }

              resolve();
            });
          });
        });

        prev && trigger(prev, 'itemhide', [this]);
        trigger(next, 'itemshow', [this]);
        return promise;
      },
      getIndex: function getIndex(index, prev) {
        if (index === void 0) index = this.index;
        if (prev === void 0) prev = this.index;
        return clamp(_getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
      },
      getValidIndex: function getValidIndex(index, prevIndex) {
        if (index === void 0) index = this.index;
        if (prevIndex === void 0) prevIndex = this.prevIndex;
        return this.getIndex(index, prevIndex);
      },
      _show: function _show(prev, next, force) {
        this._transitioner = this._getTransitioner(prev, next, this.dir, assign({
          easing: force ? next.offsetWidth < 600 ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          /* easeOutQuad */
          : 'cubic-bezier(0.165, 0.84, 0.44, 1)'
          /* easeOutQuart */
          : this.easing
        }, this.transitionOptions));

        if (!force && !prev) {
          this._translate(1);

          return Promise.resolve();
        }

        var ref = this.stack;
        var length = ref.length;
        return this._transitioner[length > 1 ? 'forward' : 'show'](length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration, this.percent);
      },
      _getDistance: function _getDistance(prev, next) {
        return this._getTransitioner(prev, prev !== next && next).getDistance();
      },
      _translate: function _translate(percent, prev, next) {
        if (prev === void 0) prev = this.prevIndex;
        if (next === void 0) next = this.index;

        var transitioner = this._getTransitioner(prev !== next ? prev : false, next);

        transitioner.translate(percent);
        return transitioner;
      },
      _getTransitioner: function _getTransitioner(prev, next, dir, options) {
        if (prev === void 0) prev = this.prevIndex;
        if (next === void 0) next = this.index;
        if (dir === void 0) dir = this.dir || 1;
        if (options === void 0) options = this.transitionOptions;
        return new this.Transitioner(isNumber(prev) ? this.slides[prev] : prev, isNumber(next) ? this.slides[next] : next, dir * (isRtl ? -1 : 1), options);
      }
    }
  };

  function getDirection(index, prevIndex) {
    return index === 'next' ? 1 : index === 'previous' ? -1 : index < prevIndex ? -1 : 1;
  }

  function speedUp(x) {
    return .5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
  }

  var Slideshow = {
    mixins: [Slider],
    props: {
      animation: String
    },
    data: {
      animation: 'slide',
      clsActivated: 'uk-transition-active',
      Animations: Animations,
      Transitioner: Transitioner
    },
    computed: {
      animation: function animation(ref) {
        var animation = ref.animation;
        var Animations = ref.Animations;
        return assign(Animations[animation] || Animations.slide, {
          name: animation
        });
      },
      transitionOptions: function transitionOptions() {
        return {
          animation: this.animation
        };
      }
    },
    events: {
      'itemshow itemhide itemshown itemhidden': function itemshowItemhideItemshownItemhidden(ref) {
        var target = ref.target;
        this.$update(target);
      },
      beforeitemshow: function beforeitemshow(ref) {
        var target = ref.target;
        addClass(target, this.clsActive);
      },
      itemshown: function itemshown(ref) {
        var target = ref.target;
        addClass(target, this.clsActivated);
      },
      itemhidden: function itemhidden(ref) {
        var target = ref.target;
        removeClass(target, this.clsActive, this.clsActivated);
      }
    }
  };
  var LightboxPanel = {
    mixins: [Container, Modal, Togglable, Slideshow],
    functional: true,
    props: {
      delayControls: Number,
      preload: Number,
      videoAutoplay: Boolean,
      template: String
    },
    data: function data() {
      return {
        preload: 1,
        videoAutoplay: false,
        delayControls: 3000,
        items: [],
        cls: 'uk-open',
        clsPage: 'uk-lightbox-page',
        selList: '.uk-lightbox-items',
        attrItem: 'uk-lightbox-item',
        selClose: '.uk-close-large',
        selCaption: '.uk-lightbox-caption',
        pauseOnHover: false,
        velocity: 2,
        Animations: Animations$1,
        template: "<div class=\"uk-lightbox uk-overflow-hidden\"> <ul class=\"uk-lightbox-items\"></ul> <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque\"> <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close></button> </div> <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade\" href uk-slidenav-previous uk-lightbox-item=\"previous\"></a> <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade\" href uk-slidenav-next uk-lightbox-item=\"next\"></a> <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque\"></div> </div>"
      };
    },
    created: function created() {
      var $el = $(this.template);
      var list = $(this.selList, $el);
      this.items.forEach(function () {
        return append(list, '<li>');
      });
      this.$mount(append(this.container, $el));
    },
    computed: {
      caption: function caption(ref, $el) {
        var selCaption = ref.selCaption;
        return $('.uk-lightbox-caption', $el);
      }
    },
    events: [{
      name: pointerMove + " " + pointerDown + " keydown",
      handler: 'showControls'
    }, {
      name: 'click',
      self: true,
      delegate: function delegate() {
        return this.selSlides;
      },
      handler: function handler(e) {
        if (e.defaultPrevented) {
          return;
        }

        this.hide();
      }
    }, {
      name: 'shown',
      self: true,
      handler: function handler() {
        this.showControls();
      }
    }, {
      name: 'hide',
      self: true,
      handler: function handler() {
        this.hideControls();
        removeClass(this.slides, this.clsActive);
        Transition.stop(this.slides);
      }
    }, {
      name: 'hidden',
      self: true,
      handler: function handler() {
        this.$destroy(true);
      }
    }, {
      name: 'keyup',
      el: inBrowser && document,
      handler: function handler(e) {
        if (!this.isToggled(this.$el) || !this.draggable) {
          return;
        }

        switch (e.keyCode) {
          case 37:
            this.show('previous');
            break;

          case 39:
            this.show('next');
            break;
        }
      }
    }, {
      name: 'beforeitemshow',
      handler: function handler(e) {
        if (this.isToggled()) {
          return;
        }

        this.draggable = false;
        e.preventDefault();
        this.toggleElement(this.$el, true, false);
        this.animation = Animations$1['scale'];
        removeClass(e.target, this.clsActive);
        this.stack.splice(1, 0, this.index);
      }
    }, {
      name: 'itemshow',
      handler: function handler() {
        html(this.caption, this.getItem().caption || '');

        for (var j = -this.preload; j <= this.preload; j++) {
          this.loadItem(this.index + j);
        }
      }
    }, {
      name: 'itemshown',
      handler: function handler() {
        this.draggable = this.$props.draggable;
      }
    }, {
      name: 'itemload',
      handler: function handler(_, item) {
        var this$1 = this;
        var src = item.source;
        var type = item.type;
        var alt = item.alt;
        if (alt === void 0) alt = '';
        var poster = item.poster;
        var attrs = item.attrs;
        if (attrs === void 0) attrs = {};
        this.setItem(item, '<span uk-spinner></span>');

        if (!src) {
          return;
        }

        var matches;
        var iframeAttrs = {
          frameborder: '0',
          allow: 'autoplay',
          allowfullscreen: '',
          style: 'max-width: 100%; box-sizing: border-box;',
          'uk-responsive': '',
          'uk-video': "" + this.videoAutoplay
        }; // Image

        if (type === 'image' || src.match(/\.(jpe?g|png|gif|svg|webp)($|\?)/i)) {
          getImage(src, attrs.srcset, attrs.size).then(function (ref) {
            var width = ref.width;
            var height = ref.height;
            return this$1.setItem(item, createEl('img', assign({
              src: src,
              width: width,
              height: height,
              alt: alt
            }, attrs)));
          }, function () {
            return this$1.setError(item);
          }); // Video
        } else if (type === 'video' || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {
          var video = createEl('video', assign({
            src: src,
            poster: poster,
            controls: '',
            playsinline: '',
            'uk-video': "" + this.videoAutoplay
          }, attrs));
          on(video, 'loadedmetadata', function () {
            attr(video, {
              width: video.videoWidth,
              height: video.videoHeight
            });
            this$1.setItem(item, video);
          });
          on(video, 'error', function () {
            return this$1.setError(item);
          }); // Iframe
        } else if (type === 'iframe' || src.match(/\.(html|php)($|\?)/i)) {
          this.setItem(item, createEl('iframe', assign({
            src: src,
            frameborder: '0',
            allowfullscreen: '',
            "class": 'uk-lightbox-iframe'
          }, attrs))); // YouTube
        } else if (matches = src.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) {
          this.setItem(item, createEl('iframe', assign({
            src: "https://www.youtube" + (matches[1] || '') + ".com/embed/" + matches[2] + (matches[3] ? "?" + matches[3] : ''),
            width: 1920,
            height: 1080
          }, iframeAttrs, attrs))); // Vimeo
        } else if (matches = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) {
          ajax("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(src), {
            responseType: 'json',
            withCredentials: false
          }).then(function (ref) {
            var ref_response = ref.response;
            var height = ref_response.height;
            var width = ref_response.width;
            return this$1.setItem(item, createEl('iframe', assign({
              src: "https://player.vimeo.com/video/" + matches[1] + (matches[2] ? "?" + matches[2] : ''),
              width: width,
              height: height
            }, iframeAttrs, attrs)));
          }, function () {
            return this$1.setError(item);
          });
        }
      }
    }],
    methods: {
      loadItem: function loadItem(index) {
        if (index === void 0) index = this.index;
        var item = this.getItem(index);

        if (!this.getSlide(item).childElementCount) {
          trigger(this.$el, 'itemload', [item]);
        }
      },
      getItem: function getItem(index) {
        if (index === void 0) index = this.index;
        return this.items[_getIndex(index, this.slides)];
      },
      setItem: function setItem(item, content) {
        trigger(this.$el, 'itemloaded', [this, html(this.getSlide(item), content)]);
      },
      getSlide: function getSlide(item) {
        return this.slides[this.items.indexOf(item)];
      },
      setError: function setError(item) {
        this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
      },
      showControls: function showControls() {
        clearTimeout(this.controlsTimer);
        this.controlsTimer = setTimeout(this.hideControls, this.delayControls);
        addClass(this.$el, 'uk-active', 'uk-transition-active');
      },
      hideControls: function hideControls() {
        removeClass(this.$el, 'uk-active', 'uk-transition-active');
      }
    }
  };

  function createEl(tag, attrs) {
    var el = fragment("<" + tag + ">");
    attr(el, attrs);
    return el;
  }

  var lightbox = {
    install: install$2,
    props: {
      toggle: String
    },
    data: {
      toggle: 'a'
    },
    computed: {
      toggles: {
        get: function get(ref, $el) {
          var toggle = ref.toggle;
          return $$(toggle, $el);
        },
        watch: function watch() {
          this.hide();
        }
      }
    },
    disconnected: function disconnected() {
      this.hide();
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.toggle + ":not(.uk-disabled)";
      },
      handler: function handler(e) {
        e.preventDefault();
        this.show(e.current);
      }
    }],
    methods: {
      show: function show(index) {
        var this$1 = this;
        var items = uniqueBy(this.toggles.map(toItem), 'source');

        if (isElement(index)) {
          var ref = toItem(index);
          var source = ref.source;
          index = findIndex(items, function (ref) {
            var src = ref.source;
            return source === src;
          });
        }

        this.panel = this.panel || this.$create('lightboxPanel', assign({}, this.$props, {
          items: items
        }));
        on(this.panel.$el, 'hidden', function () {
          return this$1.panel = false;
        });
        return this.panel.show(index);
      },
      hide: function hide() {
        return this.panel && this.panel.hide();
      }
    }
  };

  function install$2(UIkit, Lightbox) {
    if (!UIkit.lightboxPanel) {
      UIkit.component('lightboxPanel', LightboxPanel);
    }

    assign(Lightbox.props, UIkit.component('lightboxPanel').options.props);
  }

  function toItem(el) {
    var item = {};
    ['href', 'caption', 'type', 'poster', 'alt', 'attrs'].forEach(function (attr) {
      item[attr === 'href' ? 'source' : attr] = data(el, attr);
    });
    item.attrs = parseOptions(item.attrs);
    return item;
  }

  var obj;
  var notification = {
    functional: true,
    args: ['message', 'status'],
    data: {
      message: '',
      status: '',
      timeout: 5000,
      group: null,
      pos: 'top-center',
      clsContainer: 'uk-notification',
      clsClose: 'uk-notification-close',
      clsMsg: 'uk-notification-message'
    },
    install: install$3,
    computed: {
      marginProp: function marginProp(ref) {
        var pos = ref.pos;
        return "margin" + (startsWith(pos, 'top') ? 'Top' : 'Bottom');
      },
      startProps: function startProps() {
        var obj;
        return obj = {
          opacity: 0
        }, obj[this.marginProp] = -this.$el.offsetHeight, obj;
      }
    },
    created: function created() {
      var container = $("." + this.clsContainer + "-" + this.pos, this.$container) || append(this.$container, "<div class=\"" + this.clsContainer + " " + this.clsContainer + "-" + this.pos + "\" style=\"display: block\"></div>");
      this.$mount(append(container, "<div class=\"" + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : '') + "\"> <a href class=\"" + this.clsClose + "\" data-uk-close></a> <div>" + this.message + "</div> </div>"));
    },
    connected: function connected() {
      var this$1 = this;
      var obj;
      var margin = toFloat(css(this.$el, this.marginProp));
      Transition.start(css(this.$el, this.startProps), (obj = {
        opacity: 1
      }, obj[this.marginProp] = margin, obj)).then(function () {
        if (this$1.timeout) {
          this$1.timer = setTimeout(this$1.close, this$1.timeout);
        }
      });
    },
    events: (obj = {
      click: function click(e) {
        if (closest(e.target, 'a[href="#"],a[href=""]')) {
          e.preventDefault();
        }

        this.close();
      }
    }, obj[pointerEnter] = function () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }, obj[pointerLeave] = function () {
      if (this.timeout) {
        this.timer = setTimeout(this.close, this.timeout);
      }
    }, obj),
    methods: {
      close: function close(immediate) {
        var this$1 = this;

        var removeFn = function removeFn(el) {
          var container = parent(el);
          trigger(el, 'close', [this$1]);

          _remove(el);

          if (container && !container.hasChildNodes()) {
            _remove(container);
          }
        };

        if (this.timer) {
          clearTimeout(this.timer);
        }

        if (immediate) {
          removeFn(this.$el);
        } else {
          Transition.start(this.$el, this.startProps).then(removeFn);
        }
      }
    }
  };

  function install$3(UIkit) {
    UIkit.notification.closeAll = function (group, immediate) {
      apply(document.body, function (el) {
        var notification = UIkit.getComponent(el, 'notification');

        if (notification && (!group || group === notification.group)) {
          notification.close(immediate);
        }
      });
    };
  }

  var _props = ['x', 'y', 'bgx', 'bgy', 'rotate', 'scale', 'color', 'backgroundColor', 'borderColor', 'opacity', 'blur', 'hue', 'grayscale', 'invert', 'saturate', 'sepia', 'fopacity', 'stroke'];
  var Parallax = {
    mixins: [Media],
    props: _props.reduce(function (props, prop) {
      props[prop] = 'list';
      return props;
    }, {}),
    data: _props.reduce(function (data, prop) {
      data[prop] = undefined;
      return data;
    }, {}),
    computed: {
      props: function props(properties, $el) {
        var this$1 = this;
        return _props.reduce(function (props, prop) {
          if (isUndefined(properties[prop])) {
            return props;
          }

          var isColor = prop.match(/color/i);
          var isCssProp = isColor || prop === 'opacity';
          var pos, bgPos, diff;
          var steps = properties[prop].slice();

          if (isCssProp) {
            css($el, prop, '');
          }

          if (steps.length < 2) {
            steps.unshift((prop === 'scale' ? 1 : isCssProp ? css($el, prop) : 0) || 0);
          }

          var unit = getUnit(steps);

          if (isColor) {
            var ref = $el.style;
            var color = ref.color;
            steps = steps.map(function (step) {
              return parseColor($el, step);
            });
            $el.style.color = color;
          } else if (startsWith(prop, 'bg')) {
            var attr = prop === 'bgy' ? 'height' : 'width';
            steps = steps.map(function (step) {
              return toPx(step, attr, this$1.$el);
            });
            css($el, "background-position-" + prop[2], '');
            bgPos = css($el, 'backgroundPosition').split(' ')[prop[2] === 'x' ? 0 : 1]; // IE 11 can't read background-position-[x|y]

            if (this$1.covers) {
              var min = Math.min.apply(Math, steps);
              var max = Math.max.apply(Math, steps);
              var down = steps.indexOf(min) < steps.indexOf(max);
              diff = max - min;
              steps = steps.map(function (step) {
                return step - (down ? min : max);
              });
              pos = (down ? -diff : 0) + "px";
            } else {
              pos = bgPos;
            }
          } else {
            steps = steps.map(toFloat);
          }

          if (prop === 'stroke') {
            if (!steps.some(function (step) {
              return step;
            })) {
              return props;
            }

            var length = getMaxPathLength(this$1.$el);
            css($el, 'strokeDasharray', length);

            if (unit === '%') {
              steps = steps.map(function (step) {
                return step * length / 100;
              });
            }

            steps = steps.reverse();
            prop = 'strokeDashoffset';
          }

          props[prop] = {
            steps: steps,
            unit: unit,
            pos: pos,
            bgPos: bgPos,
            diff: diff
          };
          return props;
        }, {});
      },
      bgProps: function bgProps() {
        var this$1 = this;
        return ['bgx', 'bgy'].filter(function (bg) {
          return bg in this$1.props;
        });
      },
      covers: function covers(_, $el) {
        return _covers($el);
      }
    },
    disconnected: function disconnected() {
      delete this._image;
    },
    update: {
      read: function read(data) {
        var this$1 = this;
        data.active = this.matchMedia;

        if (!data.active) {
          return;
        }

        if (!data.image && this.covers && this.bgProps.length) {
          var src = css(this.$el, 'backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');

          if (src) {
            var img = new Image();
            img.src = src;
            data.image = img;

            if (!img.naturalWidth) {
              img.onload = function () {
                return this$1.$update();
              };
            }
          }
        }

        var image = data.image;

        if (!image || !image.naturalWidth) {
          return;
        }

        var dimEl = {
          width: this.$el.offsetWidth,
          height: this.$el.offsetHeight
        };
        var dimImage = {
          width: image.naturalWidth,
          height: image.naturalHeight
        };
        var dim = Dimensions.cover(dimImage, dimEl);
        this.bgProps.forEach(function (prop) {
          var ref = this$1.props[prop];
          var diff = ref.diff;
          var bgPos = ref.bgPos;
          var steps = ref.steps;
          var attr = prop === 'bgy' ? 'height' : 'width';
          var span = dim[attr] - dimEl[attr];

          if (span < diff) {
            dimEl[attr] = dim[attr] + diff - span;
          } else if (span > diff) {
            var posPercentage = dimEl[attr] / toPx(bgPos, attr, this$1.$el);

            if (posPercentage) {
              this$1.props[prop].steps = steps.map(function (step) {
                return step - (span - diff) / posPercentage;
              });
            }
          }

          dim = Dimensions.cover(dimImage, dimEl);
        });
        data.dim = dim;
      },
      write: function write(ref) {
        var dim = ref.dim;
        var active = ref.active;

        if (!active) {
          css(this.$el, {
            backgroundSize: '',
            backgroundRepeat: ''
          });
          return;
        }

        dim && css(this.$el, {
          backgroundSize: dim.width + "px " + dim.height + "px",
          backgroundRepeat: 'no-repeat'
        });
      },
      events: ['resize']
    },
    methods: {
      reset: function reset() {
        var this$1 = this;
        each(this.getCss(0), function (_, prop) {
          return css(this$1.$el, prop, '');
        });
      },
      getCss: function getCss(percent) {
        var ref = this;
        var props = ref.props;
        return Object.keys(props).reduce(function (css, prop) {
          var ref = props[prop];
          var steps = ref.steps;
          var unit = ref.unit;
          var pos = ref.pos;
          var value = getValue(steps, percent);

          switch (prop) {
            // transforms
            case 'x':
            case 'y':
              {
                unit = unit || 'px';
                css.transform += " translate" + ucfirst(prop) + "(" + toFloat(value).toFixed(unit === 'px' ? 0 : 2) + unit + ")";
                break;
              }

            case 'rotate':
              unit = unit || 'deg';
              css.transform += " rotate(" + (value + unit) + ")";
              break;

            case 'scale':
              css.transform += " scale(" + value + ")";
              break;
            // bg image

            case 'bgy':
            case 'bgx':
              css["background-position-" + prop[2]] = "calc(" + pos + " + " + value + "px)";
              break;
            // color

            case 'color':
            case 'backgroundColor':
            case 'borderColor':
              {
                var ref$1 = getStep(steps, percent);
                var start = ref$1[0];
                var end = ref$1[1];
                var p = ref$1[2];
                css[prop] = "rgba(" + start.map(function (value, i) {
                  value = value + p * (end[i] - value);
                  return i === 3 ? toFloat(value) : parseInt(value, 10);
                }).join(',') + ")";
                break;
              }
            // CSS Filter

            case 'blur':
              unit = unit || 'px';
              css.filter += " blur(" + (value + unit) + ")";
              break;

            case 'hue':
              unit = unit || 'deg';
              css.filter += " hue-rotate(" + (value + unit) + ")";
              break;

            case 'fopacity':
              unit = unit || '%';
              css.filter += " opacity(" + (value + unit) + ")";
              break;

            case 'grayscale':
            case 'invert':
            case 'saturate':
            case 'sepia':
              unit = unit || '%';
              css.filter += " " + prop + "(" + (value + unit) + ")";
              break;

            default:
              css[prop] = value;
          }

          return css;
        }, {
          transform: '',
          filter: ''
        });
      }
    }
  };

  function parseColor(el, color) {
    return css(css(el, 'color', color), 'color').split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(toFloat);
  }

  function getStep(steps, percent) {
    var count = steps.length - 1;
    var index = Math.min(Math.floor(count * percent), count - 1);
    var step = steps.slice(index, index + 2);
    step.push(percent === 1 ? 1 : percent % (1 / count) * count);
    return step;
  }

  function getValue(steps, percent, digits) {
    if (digits === void 0) digits = 2;
    var ref = getStep(steps, percent);
    var start = ref[0];
    var end = ref[1];
    var p = ref[2];
    return (isNumber(start) ? start + Math.abs(start - end) * p * (start < end ? 1 : -1) : +end).toFixed(digits);
  }

  function getUnit(steps) {
    return steps.reduce(function (unit, step) {
      return isString(step) && step.replace(/-|\d/g, '').trim() || unit;
    }, '');
  }

  function _covers(el) {
    var ref = el.style;
    var backgroundSize = ref.backgroundSize;
    var covers = css(css(el, 'backgroundSize', ''), 'backgroundSize') === 'cover';
    el.style.backgroundSize = backgroundSize;
    return covers;
  }

  var parallax = {
    mixins: [Parallax],
    props: {
      target: String,
      viewport: Number,
      easing: Number
    },
    data: {
      target: false,
      viewport: 1,
      easing: 1
    },
    computed: {
      target: function target(ref, $el) {
        var target = ref.target;
        return getOffsetElement(target && query(target, $el) || $el);
      }
    },
    update: {
      read: function read(ref, type) {
        var percent = ref.percent;
        var active = ref.active;

        if (type !== 'scroll') {
          percent = false;
        }

        if (!active) {
          return;
        }

        var prev = percent;
        percent = ease(scrolledOver(this.target) / (this.viewport || 1), this.easing);
        return {
          percent: percent,
          style: prev !== percent ? this.getCss(percent) : false
        };
      },
      write: function write(ref) {
        var style = ref.style;
        var active = ref.active;

        if (!active) {
          this.reset();
          return;
        }

        style && css(this.$el, style);
      },
      events: ['scroll', 'resize']
    }
  };

  function ease(percent, easing) {
    return clamp(percent * (1 - (easing - easing * percent)));
  } // SVG elements do not inherit from HTMLElement


  function getOffsetElement(el) {
    return el ? 'offsetTop' in el ? el : getOffsetElement(parent(el)) : document.body;
  }

  var SliderReactive = {
    update: {
      write: function write() {
        if (this.stack.length || this.dragging) {
          return;
        }

        var index = this.getValidIndex(this.index);

        if (!~this.prevIndex || this.index !== index) {
          this.show(index);
        }
      },
      events: ['resize']
    }
  };

  function Transitioner$1(prev, next, dir, ref) {
    var center = ref.center;
    var easing = ref.easing;
    var list = ref.list;
    var deferred = new Deferred();
    var from = prev ? getLeft(prev, list, center) : getLeft(next, list, center) + dimensions(next).width * dir;
    var to = next ? getLeft(next, list, center) : from + dimensions(prev).width * dir * (isRtl ? -1 : 1);
    return {
      dir: dir,
      show: function show(duration, percent, linear) {
        if (percent === void 0) percent = 0;
        var timing = linear ? 'linear' : easing;
        duration -= Math.round(duration * clamp(percent, -1, 1));
        this.translate(percent);
        prev && this.updateTranslates();
        percent = prev ? percent : clamp(percent, 0, 1);
        triggerUpdate$1(this.getItemIn(), 'itemin', {
          percent: percent,
          duration: duration,
          timing: timing,
          dir: dir
        });
        prev && triggerUpdate$1(this.getItemIn(true), 'itemout', {
          percent: 1 - percent,
          duration: duration,
          timing: timing,
          dir: dir
        });
        Transition.start(list, {
          transform: _translate(-to * (isRtl ? -1 : 1), 'px')
        }, duration, timing).then(deferred.resolve, noop);
        return deferred.promise;
      },
      cancel: function cancel() {
        Transition.cancel(list);
      },
      reset: function reset() {
        css(list, 'transform', '');
      },
      forward: function forward(duration, percent) {
        if (percent === void 0) percent = this.percent();
        Transition.cancel(list);
        return this.show(duration, percent, true);
      },
      translate: function translate(percent) {
        var distance = this.getDistance() * dir * (isRtl ? -1 : 1);
        css(list, 'transform', _translate(clamp(-to + (distance - distance * percent), -getWidth(list), dimensions(list).width) * (isRtl ? -1 : 1), 'px'));
        this.updateTranslates();

        if (prev) {
          percent = clamp(percent, -1, 1);
          triggerUpdate$1(this.getItemIn(), 'itemtranslatein', {
            percent: percent,
            dir: dir
          });
          triggerUpdate$1(this.getItemIn(true), 'itemtranslateout', {
            percent: 1 - percent,
            dir: dir
          });
        }
      },
      percent: function percent() {
        return Math.abs((css(list, 'transform').split(',')[4] * (isRtl ? -1 : 1) + from) / (to - from));
      },
      getDistance: function getDistance() {
        return Math.abs(to - from);
      },
      getItemIn: function getItemIn(out) {
        if (out === void 0) out = false;
        var actives = sortBy(this.getActives(), 'offsetLeft');
        var all = sortBy(_children(list), 'offsetLeft');
        var i = index(all, actives[dir * (out ? -1 : 1) > 0 ? actives.length - 1 : 0]);
        return ~i && all[i + (prev && !out ? dir : 0)];
      },
      getActives: function getActives() {
        return [prev || next].concat(_children(list).filter(function (slide) {
          var slideLeft = getElLeft(slide, list);
          return slideLeft > from && slideLeft + dimensions(slide).width <= dimensions(list).width + from;
        }));
      },
      updateTranslates: function updateTranslates() {
        var actives = this.getActives();

        _children(list).forEach(function (slide) {
          var isActive = includes(actives, slide);
          triggerUpdate$1(slide, "itemtranslate" + (isActive ? 'in' : 'out'), {
            percent: isActive ? 1 : 0,
            dir: slide.offsetLeft <= next.offsetLeft ? 1 : -1
          });
        });
      }
    };
  }

  function getLeft(el, list, center) {
    var left = getElLeft(el, list);
    return center ? left - centerEl(el, list) : Math.min(left, getMax(list));
  }

  function getMax(list) {
    return Math.max(0, getWidth(list) - dimensions(list).width);
  }

  function getWidth(list) {
    return _children(list).reduce(function (right, el) {
      return dimensions(el).width + right;
    }, 0);
  }

  function centerEl(el, list) {
    return dimensions(list).width / 2 - dimensions(el).width / 2;
  }

  function getElLeft(el, list) {
    return el && (position(el).left + (isRtl ? dimensions(el).width - dimensions(list).width : 0)) * (isRtl ? -1 : 1) || 0;
  }

  function triggerUpdate$1(el, type, data) {
    trigger(el, createEvent(type, false, false, data));
  }

  var slider = {
    mixins: [Class, Slider, SliderReactive],
    props: {
      center: Boolean,
      sets: Boolean
    },
    data: {
      center: false,
      sets: false,
      attrItem: 'uk-slider-item',
      selList: '.uk-slider-items',
      selNav: '.uk-slider-nav',
      clsContainer: 'uk-slider-container',
      Transitioner: Transitioner$1
    },
    computed: {
      avgWidth: function avgWidth() {
        return getWidth(this.list) / this.length;
      },
      finite: function finite(ref) {
        var finite = ref.finite;
        return finite || Math.ceil(getWidth(this.list)) < dimensions(this.list).width + getMaxElWidth(this.list) + this.center;
      },
      maxIndex: function maxIndex() {
        var this$1 = this;

        if (!this.finite || this.center && !this.sets) {
          return this.length - 1;
        }

        if (this.center) {
          return last(this.sets);
        }

        css(this.slides, 'order', '');
        var max = getMax(this.list);
        var index = findIndex(this.slides, function (el) {
          return getElLeft(el, this$1.list) >= max;
        });
        return ~index ? index : this.length - 1;
      },
      sets: function sets(ref) {
        var this$1 = this;
        var sets = ref.sets;

        if (!sets) {
          return;
        }

        var width = dimensions(this.list).width / (this.center ? 2 : 1);
        var left = 0;
        var leftCenter = width;
        var slideLeft = 0;
        sets = sortBy(this.slides, 'offsetLeft').reduce(function (sets, slide, i) {
          var slideWidth = dimensions(slide).width;
          var slideRight = slideLeft + slideWidth;

          if (slideRight > left) {
            if (!this$1.center && i > this$1.maxIndex) {
              i = this$1.maxIndex;
            }

            if (!includes(sets, i)) {
              var cmp = this$1.slides[i + 1];

              if (this$1.center && cmp && slideWidth < leftCenter - dimensions(cmp).width / 2) {
                leftCenter -= slideWidth;
              } else {
                leftCenter = width;
                sets.push(i);
                left = slideLeft + width + (this$1.center ? slideWidth / 2 : 0);
              }
            }
          }

          slideLeft += slideWidth;
          return sets;
        }, []);
        return !isEmpty(sets) && sets;
      },
      transitionOptions: function transitionOptions() {
        return {
          center: this.center,
          list: this.list
        };
      }
    },
    connected: function connected() {
      toggleClass(this.$el, this.clsContainer, !$("." + this.clsContainer, this.$el));
    },
    update: {
      write: function write() {
        var this$1 = this;
        this.navItems.forEach(function (el) {
          var index = toNumber(data(el, this$1.attrItem));

          if (index !== false) {
            el.hidden = !this$1.maxIndex || index > this$1.maxIndex || this$1.sets && !includes(this$1.sets, index);
          }
        });

        if (this.length && !this.dragging && !this.stack.length) {
          this.reorder();

          this._translate(1);
        }

        var actives = this._getTransitioner(this.index).getActives();

        this.slides.forEach(function (slide) {
          return toggleClass(slide, this$1.clsActive, includes(actives, slide));
        });
        (!this.sets || includes(this.sets, toFloat(this.index))) && this.slides.forEach(function (slide) {
          return toggleClass(slide, this$1.clsActivated, includes(actives, slide));
        });
      },
      events: ['resize']
    },
    events: {
      beforeitemshow: function beforeitemshow(e) {
        if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
          this.index = this.getValidIndex();
        }

        var diff = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));

        if (!this.dragging && diff > 1) {
          for (var i = 0; i < diff; i++) {
            this.stack.splice(1, 0, this.dir > 0 ? 'next' : 'previous');
          }

          e.preventDefault();
          return;
        }

        var index = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
        this.duration = speedUp(this.avgWidth / this.velocity) * (dimensions(this.slides[index]).width / this.avgWidth);
        this.reorder();
      },
      itemshow: function itemshow() {
        ~this.prevIndex && addClass(this._getTransitioner().getItemIn(), this.clsActive);
      }
    },
    methods: {
      reorder: function reorder() {
        var this$1 = this;

        if (this.finite) {
          css(this.slides, 'order', '');
          return;
        }

        var index = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
        this.slides.forEach(function (slide, i) {
          return css(slide, 'order', this$1.dir > 0 && i < index ? 1 : this$1.dir < 0 && i >= this$1.index ? -1 : '');
        });

        if (!this.center) {
          return;
        }

        var next = this.slides[index];
        var width = dimensions(this.list).width / 2 - dimensions(next).width / 2;
        var j = 0;

        while (width > 0) {
          var slideIndex = this.getIndex(--j + index, index);
          var slide = this.slides[slideIndex];
          css(slide, 'order', slideIndex > index ? -2 : -1);
          width -= dimensions(slide).width;
        }
      },
      getValidIndex: function getValidIndex(index, prevIndex) {
        if (index === void 0) index = this.index;
        if (prevIndex === void 0) prevIndex = this.prevIndex;
        index = this.getIndex(index, prevIndex);

        if (!this.sets) {
          return index;
        }

        var prev;

        do {
          if (includes(this.sets, index)) {
            return index;
          }

          prev = index;
          index = this.getIndex(index + this.dir, prevIndex);
        } while (index !== prev);

        return index;
      }
    }
  };

  function getMaxElWidth(list) {
    return Math.max.apply(Math, [0].concat(_children(list).map(function (el) {
      return dimensions(el).width;
    })));
  }

  var sliderParallax = {
    mixins: [Parallax],
    data: {
      selItem: '!li'
    },
    computed: {
      item: function item(ref, $el) {
        var selItem = ref.selItem;
        return query(selItem, $el);
      }
    },
    events: [{
      name: 'itemin itemout',
      self: true,
      el: function el() {
        return this.item;
      },
      handler: function handler(ref) {
        var this$1 = this;
        var type = ref.type;
        var ref_detail = ref.detail;
        var percent = ref_detail.percent;
        var duration = ref_detail.duration;
        var timing = ref_detail.timing;
        var dir = ref_detail.dir;
        fastdom.read(function () {
          var propsFrom = this$1.getCss(getCurrentPercent(type, dir, percent));
          var propsTo = this$1.getCss(isIn(type) ? .5 : dir > 0 ? 1 : 0);
          fastdom.write(function () {
            css(this$1.$el, propsFrom);
            Transition.start(this$1.$el, propsTo, duration, timing)["catch"](noop);
          });
        });
      }
    }, {
      name: 'transitioncanceled transitionend',
      self: true,
      el: function el() {
        return this.item;
      },
      handler: function handler() {
        Transition.cancel(this.$el);
      }
    }, {
      name: 'itemtranslatein itemtranslateout',
      self: true,
      el: function el() {
        return this.item;
      },
      handler: function handler(ref) {
        var this$1 = this;
        var type = ref.type;
        var ref_detail = ref.detail;
        var percent = ref_detail.percent;
        var dir = ref_detail.dir;
        fastdom.read(function () {
          var props = this$1.getCss(getCurrentPercent(type, dir, percent));
          fastdom.write(function () {
            return css(this$1.$el, props);
          });
        });
      }
    }]
  };

  function isIn(type) {
    return endsWith(type, 'in');
  }

  function getCurrentPercent(type, dir, percent) {
    percent /= 2;
    return !isIn(type) ? dir < 0 ? percent : 1 - percent : dir < 0 ? 1 - percent : percent;
  }

  var Animations$2 = assign({}, Animations, {
    fade: {
      show: function show() {
        return [{
          opacity: 0,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function percent(current) {
        return 1 - css(current, 'opacity');
      },
      translate: function translate(percent) {
        return [{
          opacity: 1 - percent,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    scale: {
      show: function show() {
        return [{
          opacity: 0,
          transform: scale3d(1 + .5),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function percent(current) {
        return 1 - css(current, 'opacity');
      },
      translate: function translate(percent) {
        return [{
          opacity: 1 - percent,
          transform: scale3d(1 + .5 * percent),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    pull: {
      show: function show(dir) {
        return dir < 0 ? [{
          transform: _translate(30),
          zIndex: -1
        }, {
          transform: _translate(),
          zIndex: 0
        }] : [{
          transform: _translate(-100),
          zIndex: 0
        }, {
          transform: _translate(),
          zIndex: -1
        }];
      },
      percent: function percent(current, next, dir) {
        return dir < 0 ? 1 - translated(next) : translated(current);
      },
      translate: function translate(percent, dir) {
        return dir < 0 ? [{
          transform: _translate(30 * percent),
          zIndex: -1
        }, {
          transform: _translate(-100 * (1 - percent)),
          zIndex: 0
        }] : [{
          transform: _translate(-percent * 100),
          zIndex: 0
        }, {
          transform: _translate(30 * (1 - percent)),
          zIndex: -1
        }];
      }
    },
    push: {
      show: function show(dir) {
        return dir < 0 ? [{
          transform: _translate(100),
          zIndex: 0
        }, {
          transform: _translate(),
          zIndex: -1
        }] : [{
          transform: _translate(-30),
          zIndex: -1
        }, {
          transform: _translate(),
          zIndex: 0
        }];
      },
      percent: function percent(current, next, dir) {
        return dir > 0 ? 1 - translated(next) : translated(current);
      },
      translate: function translate(percent, dir) {
        return dir < 0 ? [{
          transform: _translate(percent * 100),
          zIndex: 0
        }, {
          transform: _translate(-30 * (1 - percent)),
          zIndex: -1
        }] : [{
          transform: _translate(-30 * percent),
          zIndex: -1
        }, {
          transform: _translate(100 * (1 - percent)),
          zIndex: 0
        }];
      }
    }
  });
  var slideshow = {
    mixins: [Class, Slideshow, SliderReactive],
    props: {
      ratio: String,
      minHeight: Number,
      maxHeight: Number
    },
    data: {
      ratio: '16:9',
      minHeight: false,
      maxHeight: false,
      selList: '.uk-slideshow-items',
      attrItem: 'uk-slideshow-item',
      selNav: '.uk-slideshow-nav',
      Animations: Animations$2
    },
    update: {
      read: function read() {
        var ref = this.ratio.split(':').map(Number);
        var width = ref[0];
        var height = ref[1];
        height = height * this.list.offsetWidth / width || 0;

        if (this.minHeight) {
          height = Math.max(this.minHeight, height);
        }

        if (this.maxHeight) {
          height = Math.min(this.maxHeight, height);
        }

        return {
          height: height - boxModelAdjust(this.list, 'height', 'content-box')
        };
      },
      write: function write(ref) {
        var height = ref.height;
        height > 0 && css(this.list, 'minHeight', height);
      },
      events: ['resize']
    }
  };
  var sortable = {
    mixins: [Class, Animate],
    props: {
      group: String,
      threshold: Number,
      clsItem: String,
      clsPlaceholder: String,
      clsDrag: String,
      clsDragState: String,
      clsBase: String,
      clsNoDrag: String,
      clsEmpty: String,
      clsCustom: String,
      handle: String
    },
    data: {
      group: false,
      threshold: 5,
      clsItem: 'uk-sortable-item',
      clsPlaceholder: 'uk-sortable-placeholder',
      clsDrag: 'uk-sortable-drag',
      clsDragState: 'uk-drag',
      clsBase: 'uk-sortable',
      clsNoDrag: 'uk-sortable-nodrag',
      clsEmpty: 'uk-sortable-empty',
      clsCustom: '',
      handle: false,
      pos: {}
    },
    created: function created() {
      var this$1 = this;
      ['init', 'start', 'move', 'end'].forEach(function (key) {
        var fn = this$1[key];

        this$1[key] = function (e) {
          assign(this$1.pos, getEventPos(e));
          fn(e);
        };
      });
    },
    events: {
      name: pointerDown,
      passive: false,
      handler: 'init'
    },
    computed: {
      target: function target() {
        return (this.$el.tBodies || [this.$el])[0];
      },
      items: function items() {
        return _children(this.target);
      },
      isEmpty: {
        get: function get() {
          return isEmpty(this.items);
        },
        watch: function watch(empty) {
          toggleClass(this.target, this.clsEmpty, empty);
        },
        immediate: true
      },
      handles: {
        get: function get(ref, el) {
          var handle = ref.handle;
          return handle ? $$(handle, el) : this.items;
        },
        watch: function watch(handles, prev) {
          css(prev, {
            touchAction: '',
            userSelect: ''
          });
          css(handles, {
            touchAction: hasTouch ? 'none' : '',
            userSelect: 'none'
          }); // touchAction set to 'none' causes a performance drop in Chrome 80
        },
        immediate: true
      }
    },
    update: {
      write: function write() {
        if (!this.drag || !parent(this.placeholder)) {
          return;
        }

        var ref = this;
        var ref_pos = ref.pos;
        var x = ref_pos.x;
        var y = ref_pos.y;
        var ref_origin = ref.origin;
        var offsetTop = ref_origin.offsetTop;
        var offsetLeft = ref_origin.offsetLeft;
        var placeholder = ref.placeholder;
        css(this.drag, {
          top: y - offsetTop,
          left: x - offsetLeft
        });
        var sortable = this.getSortable(document.elementFromPoint(x, y));

        if (!sortable) {
          return;
        }

        var items = sortable.items;

        if (items.some(Transition.inProgress)) {
          return;
        }

        var target = findTarget(items, {
          x: x,
          y: y
        });

        if (items.length && (!target || target === placeholder)) {
          return;
        }

        this.touched.add(sortable);
        var previous = this.getSortable(placeholder);

        if (sortable !== previous) {
          previous.remove(placeholder);
        }

        sortable.insert(placeholder, findInsertTarget(sortable.target, target, placeholder, x, y));
      },
      events: ['move']
    },
    methods: {
      init: function init(e) {
        var target = e.target;
        var button = e.button;
        var defaultPrevented = e.defaultPrevented;
        var ref = this.items.filter(function (el) {
          return within(target, el);
        });
        var placeholder = ref[0];

        if (!placeholder || defaultPrevented || button > 0 || isInput(target) || within(target, "." + this.clsNoDrag) || this.handle && !within(target, this.handle)) {
          return;
        }

        e.preventDefault();
        this.touched = new Set([this]);
        this.placeholder = placeholder;
        this.origin = assign({
          target: target,
          index: index(placeholder)
        }, this.pos);
        on(document, pointerMove, this.move);
        on(document, pointerUp, this.end);

        if (!this.threshold) {
          this.start(e);
        }
      },
      start: function start(e) {
        this.drag = appendDrag(this.$container, this.placeholder);
        var ref = this.placeholder.getBoundingClientRect();
        var left = ref.left;
        var top = ref.top;
        assign(this.origin, {
          offsetLeft: this.pos.x - left,
          offsetTop: this.pos.y - top
        });
        addClass(this.drag, this.clsDrag, this.clsCustom);
        addClass(this.placeholder, this.clsPlaceholder);
        addClass(this.items, this.clsItem);
        addClass(document.documentElement, this.clsDragState);
        trigger(this.$el, 'start', [this, this.placeholder]);
        trackScroll(this.pos);
        this.move(e);
      },
      move: function move(e) {
        if (this.drag) {
          this.$emit('move');
        } else if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
          this.start(e);
        }
      },
      end: function end() {
        var this$1 = this;
        off(document, pointerMove, this.move);
        off(document, pointerUp, this.end);
        off(window, 'scroll', this.scroll);

        if (!this.drag) {
          return;
        }

        untrackScroll();
        var sortable = this.getSortable(this.placeholder);

        if (this === sortable) {
          if (this.origin.index !== index(this.placeholder)) {
            trigger(this.$el, 'moved', [this, this.placeholder]);
          }
        } else {
          trigger(sortable.$el, 'added', [sortable, this.placeholder]);
          trigger(this.$el, 'removed', [this, this.placeholder]);
        }

        trigger(this.$el, 'stop', [this, this.placeholder]);

        _remove(this.drag);

        this.drag = null;
        this.touched.forEach(function (ref) {
          var clsPlaceholder = ref.clsPlaceholder;
          var clsItem = ref.clsItem;
          return this$1.touched.forEach(function (sortable) {
            return removeClass(sortable.items, clsPlaceholder, clsItem);
          });
        });
        this.touched = null;
        removeClass(document.documentElement, this.clsDragState);
      },
      insert: function insert(element, target) {
        var this$1 = this;

        if (target && (element === target || element === target.previousElementSibling)) {
          return;
        }

        addClass(this.items, this.clsItem);

        var insert = function insert() {
          return target ? before(target, element) : append(this$1.target, element);
        };

        if (this.animation) {
          this.animate(insert);
        } else {
          insert();
        }
      },
      remove: function remove(element) {
        if (!within(element, this.target)) {
          return;
        }

        if (this.animation) {
          this.animate(function () {
            return _remove(element);
          });
        } else {
          _remove(element);
        }
      },
      getSortable: function getSortable(element) {
        do {
          var sortable = this.$getComponent(element, 'sortable');

          if (sortable && (sortable === this || this.group !== false && sortable.group === this.group)) {
            return sortable;
          }
        } while (element = parent(element));
      }
    }
  };
  var trackTimer;

  function trackScroll(pos) {
    var last = Date.now();
    trackTimer = setInterval(function () {
      var x = pos.x;
      var y = pos.y;
      y += window.pageYOffset;
      var dist = (Date.now() - last) * .3;
      last = Date.now();
      scrollParents(document.elementFromPoint(x, pos.y)).reverse().some(function (scrollEl) {
        var scroll = scrollEl.scrollTop;
        var scrollHeight = scrollEl.scrollHeight;
        var ref = offset(getViewport(scrollEl));
        var top = ref.top;
        var bottom = ref.bottom;
        var height = ref.height;

        if (top < y && top + 35 > y) {
          scroll -= dist;
        } else if (bottom > y && bottom - 35 < y) {
          scroll += dist;
        } else {
          return;
        }

        if (scroll > 0 && scroll < scrollHeight - height) {
          scrollTop(scrollEl, scroll);
          return true;
        }
      });
    }, 15);
  }

  function untrackScroll() {
    clearInterval(trackTimer);
  }

  function appendDrag(container, element) {
    var clone = append(container, element.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, '$1div$2'));
    css(clone, 'margin', '0', 'important');
    css(clone, assign({
      boxSizing: 'border-box',
      width: element.offsetWidth,
      height: element.offsetHeight
    }, css(element, ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'])));
    height(clone.firstElementChild, height(element.firstElementChild));
    return clone;
  }

  function findTarget(items, point) {
    return items[findIndex(items, function (item) {
      return pointInRect(point, item.getBoundingClientRect());
    })];
  }

  function findInsertTarget(list, target, placeholder, x, y) {
    var items = _children(list);

    if (!items.length) {
      return;
    }

    var single = items.length === 1;

    if (single) {
      append(list, placeholder);
    }

    var horizontal = isHorizontal(_children(list));

    if (single) {
      _remove(placeholder);
    }

    var rect = target.getBoundingClientRect();

    if (!horizontal) {
      return y < rect.top + rect.height / 2 ? target : target.nextElementSibling;
    }

    var placeholderRect = placeholder.getBoundingClientRect();
    var sameLine = intersectLine([rect.top, rect.bottom], [placeholderRect.top, placeholderRect.bottom]);
    return sameLine && x > rect.left + rect.width / 2 || !sameLine && placeholderRect.top < rect.top ? target.nextElementSibling : target;
  }

  function isHorizontal(items) {
    return items.some(function (el, i) {
      var rectA = el.getBoundingClientRect();
      return items.slice(i + 1).some(function (el) {
        var rectB = el.getBoundingClientRect();
        return !intersectLine([rectA.left, rectA.right], [rectB.left, rectB.right]);
      });
    });
  }

  function intersectLine(lineA, lineB) {
    return lineA[1] > lineB[0] && lineB[1] > lineA[0];
  }

  var obj$1;
  var tooltip = {
    mixins: [Container, Togglable, Position],
    args: 'title',
    props: {
      delay: Number,
      title: String
    },
    data: {
      pos: 'top',
      title: '',
      delay: 0,
      animation: ['uk-animation-scale-up'],
      duration: 100,
      cls: 'uk-active',
      clsPos: 'uk-tooltip'
    },
    beforeConnect: function beforeConnect() {
      this._hasTitle = hasAttr(this.$el, 'title');
      attr(this.$el, 'title', '');
      this.updateAria(false);
      makeFocusable(this.$el);
    },
    disconnected: function disconnected() {
      this.hide();
      attr(this.$el, 'title', this._hasTitle ? this.title : null);
    },
    methods: {
      show: function show() {
        var this$1 = this;

        if (this.isToggled(this.tooltip) || !this.title) {
          return;
        }

        this._unbind = once(document, 'show keydown', this.hide, false, function (e) {
          return e.type === 'keydown' && e.keyCode === 27 || e.type === 'show' && e.detail[0] !== this$1 && e.detail[0].$name === this$1.$name;
        });
        clearTimeout(this.showTimer);
        this.showTimer = setTimeout(this._show, this.delay);
      },
      hide: function hide() {
        var this$1 = this;

        if (matches(this.$el, 'input:focus')) {
          return;
        }

        clearTimeout(this.showTimer);

        if (!this.isToggled(this.tooltip)) {
          return;
        }

        this.toggleElement(this.tooltip, false, false).then(function () {
          this$1.tooltip = _remove(this$1.tooltip);

          this$1._unbind();
        });
      },
      _show: function _show() {
        var this$1 = this;
        this.tooltip = append(this.container, "<div class=\"" + this.clsPos + "\"> <div class=\"" + this.clsPos + "-inner\">" + this.title + "</div> </div>");
        on(this.tooltip, 'toggled', function (e, toggled) {
          this$1.updateAria(toggled);

          if (!toggled) {
            return;
          }

          this$1.positionAt(this$1.tooltip, this$1.$el);
          this$1.origin = this$1.getAxis() === 'y' ? flipPosition(this$1.dir) + "-" + this$1.align : this$1.align + "-" + flipPosition(this$1.dir);
        });
        this.toggleElement(this.tooltip, true);
      },
      updateAria: function updateAria(toggled) {
        attr(this.$el, 'aria-expanded', toggled);
      }
    },
    events: (obj$1 = {
      focus: 'show',
      blur: 'hide'
    }, obj$1[pointerEnter + " " + pointerLeave] = function (e) {
      if (isTouch(e)) {
        return;
      }

      e.type === pointerEnter ? this.show() : this.hide();
    }, obj$1)
  };

  function makeFocusable(el) {
    if (!isFocusable(el)) {
      attr(el, 'tabindex', '0');
    }
  }

  function isFocusable(el) {
    return isInput(el) || matches(el, 'a,button') || hasAttr(el, 'tabindex');
  }

  var upload = {
    props: {
      allow: String,
      clsDragover: String,
      concurrent: Number,
      maxSize: Number,
      method: String,
      mime: String,
      msgInvalidMime: String,
      msgInvalidName: String,
      msgInvalidSize: String,
      multiple: Boolean,
      name: String,
      params: Object,
      type: String,
      url: String
    },
    data: {
      allow: false,
      clsDragover: 'uk-dragover',
      concurrent: 1,
      maxSize: 0,
      method: 'POST',
      mime: false,
      msgInvalidMime: 'Invalid File Type: %s',
      msgInvalidName: 'Invalid File Name: %s',
      msgInvalidSize: 'Invalid File Size: %s Kilobytes Max',
      multiple: false,
      name: 'files[]',
      params: {},
      type: '',
      url: '',
      abort: noop,
      beforeAll: noop,
      beforeSend: noop,
      complete: noop,
      completeAll: noop,
      error: noop,
      fail: noop,
      load: noop,
      loadEnd: noop,
      loadStart: noop,
      progress: noop
    },
    events: {
      change: function change(e) {
        if (!matches(e.target, 'input[type="file"]')) {
          return;
        }

        e.preventDefault();

        if (e.target.files) {
          this.upload(e.target.files);
        }

        e.target.value = '';
      },
      drop: function drop(e) {
        stop(e);
        var transfer = e.dataTransfer;

        if (!transfer || !transfer.files) {
          return;
        }

        removeClass(this.$el, this.clsDragover);
        this.upload(transfer.files);
      },
      dragenter: function dragenter(e) {
        stop(e);
      },
      dragover: function dragover(e) {
        stop(e);
        addClass(this.$el, this.clsDragover);
      },
      dragleave: function dragleave(e) {
        stop(e);
        removeClass(this.$el, this.clsDragover);
      }
    },
    methods: {
      upload: function upload(files) {
        var this$1 = this;

        if (!files.length) {
          return;
        }

        trigger(this.$el, 'upload', [files]);

        for (var i = 0; i < files.length; i++) {
          if (this.maxSize && this.maxSize * 1000 < files[i].size) {
            this.fail(this.msgInvalidSize.replace('%s', this.maxSize));
            return;
          }

          if (this.allow && !match$1(this.allow, files[i].name)) {
            this.fail(this.msgInvalidName.replace('%s', this.allow));
            return;
          }

          if (this.mime && !match$1(this.mime, files[i].type)) {
            this.fail(this.msgInvalidMime.replace('%s', this.mime));
            return;
          }
        }

        if (!this.multiple) {
          files = [files[0]];
        }

        this.beforeAll(this, files);
        var chunks = chunk(files, this.concurrent);

        var upload = function upload(files) {
          var data = new FormData();
          files.forEach(function (file) {
            return data.append(this$1.name, file);
          });

          for (var key in this$1.params) {
            data.append(key, this$1.params[key]);
          }

          ajax(this$1.url, {
            data: data,
            method: this$1.method,
            responseType: this$1.type,
            beforeSend: function beforeSend(env) {
              var xhr = env.xhr;
              xhr.upload && on(xhr.upload, 'progress', this$1.progress);
              ['loadStart', 'load', 'loadEnd', 'abort'].forEach(function (type) {
                return on(xhr, type.toLowerCase(), this$1[type]);
              });
              this$1.beforeSend(env);
            }
          }).then(function (xhr) {
            this$1.complete(xhr);

            if (chunks.length) {
              upload(chunks.shift());
            } else {
              this$1.completeAll(xhr);
            }
          }, function (e) {
            return this$1.error(e);
          });
        };

        upload(chunks.shift());
      }
    }
  };

  function match$1(pattern, path) {
    return path.match(new RegExp("^" + pattern.replace(/\//g, '\\/').replace(/\*\*/g, '(\\/[^\\/]+)*').replace(/\*/g, '[^\\/]+').replace(/((?!\\))\?/g, '$1.') + "$", 'i'));
  }

  function chunk(files, size) {
    var chunks = [];

    for (var i = 0; i < files.length; i += size) {
      var chunk = [];

      for (var j = 0; j < size; j++) {
        chunk.push(files[i + j]);
      }

      chunks.push(chunk);
    }

    return chunks;
  }

  function stop(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  var components$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Countdown: countdown,
    Filter: filter$1,
    Lightbox: lightbox,
    LightboxPanel: LightboxPanel,
    Notification: notification,
    Parallax: parallax,
    Slider: slider,
    SliderParallax: sliderParallax,
    Slideshow: slideshow,
    SlideshowParallax: sliderParallax,
    Sortable: sortable,
    Tooltip: tooltip,
    Upload: upload
  });
  each(components$1, function (component, name) {
    return UIkit.component(name, component);
  });
  return UIkit;
});

},{"@babel/runtime/helpers/interopRequireDefault":1,"@babel/runtime/helpers/typeof":3}],7:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _jquery = _interopRequireWildcard(require("jquery"));

(0, _jquery["default"])(function () {
  var StartDate;
  (0, _jquery["default"])(".buka-cal-wrapper").on("click", ".bookable", function () {
    if ((0, _jquery["default"])(".buka-cal-wrapper").hasClass("booking-complete")) {
      clear_booking();
    }

    if ((0, _jquery["default"])(this).data("date") < (0, _jquery["default"])("input#datestart").val()) {
      clear_booking();
    }

    if ((0, _jquery["default"])(".bk-day.reserve-start").length) {
      find_end((0, _jquery["default"])(this));
    } else {
      find_start((0, _jquery["default"])(this));
    }
  });
  (0, _jquery["default"])(document).on("click", "#to-step-2", function () {
    (0, _jquery["default"])("#bookingform-step1").slideUp();
    (0, _jquery["default"])("#bookingform-step2").slideDown();
  });
  (0, _jquery["default"])(document).on("click", "#to-step-1", function () {
    (0, _jquery["default"])("#bookingform-step2").slideUp();
    (0, _jquery["default"])("#bookingform-step1").slideDown();
  });

  if ((0, _jquery["default"])('.uk-form-danger').length) {
    (0, _jquery["default"])("#bookingform-step1").hide();
    (0, _jquery["default"])("#bookingform-step2").show();
  }

  function clear_booking() {
    (0, _jquery["default"])(".buka-cal-wrapper").removeClass("booking-complete");
    (0, _jquery["default"])(".bk-cal-day").removeClass("reserve-start");
    (0, _jquery["default"])(".bk-cal-day").removeClass("reserve-end");
    (0, _jquery["default"])(".bk-cal-day").removeClass("add-reserve");
    (0, _jquery["default"])("input#date_start").val("");
    (0, _jquery["default"])("input#date_end").val("");
    (0, _jquery["default"])("input#datestart").val("");
    (0, _jquery["default"])("input#dateend").val("");
    (0, _jquery["default"])("#to-step-2").prop("disabled", true);
  }

  function mark_end($elem) {
    var min_booking_days = $elem.data('minbookingdays');
    (0, _jquery["default"])(".buka-cal-wrapper").removeClass("booking-start");
    (0, _jquery["default"])(".buka-cal-wrapper").addClass("booking-complete");
    $elem.addClass("reserve-end");
    (0, _jquery["default"])("input#date_end").val($elem.data("date").split("-").reverse().join("."));
    (0, _jquery["default"])("input#dateend").val($elem.data("date"));
    (0, _jquery["default"])(".mind_booking_message").hide();
    (0, _jquery["default"])("#to-step-2").prop("disabled", false).addClass('uk-active');

    if ((0, _jquery["default"])(".add-reserve").length <= min_booking_days) {
      (0, _jquery["default"])(".mind_booking_message").show();
      (0, _jquery["default"])("#to-step-2").prop("disabled", true).removeClass('uk-active');
    }
  }

  function find_end($elem) {
    var EndDate = new Date($elem.data("date"));

    if ($elem.data("fullweek") == 1 && EndDate.getDay() != 6 && !$elem.hasClass('fix-booked-start')) {
      while (EndDate.getDay() != 6) {
        EndDate.setDate(EndDate.getDate() + 1);

        if ((0, _jquery["default"])("ul").find("[data-date='" + date_to_string(EndDate) + "']").hasClass('fix-booked-start')) {
          break;
        }
      }

      var $endElem = (0, _jquery["default"])("ul").find("[data-date='" + date_to_string(EndDate) + "']");
      $endElem.trigger('mouseenter');
      mark_end($endElem);
      return;
    }

    mark_end($elem);
  }

  function find_start($elem) {
    var StartDate = new Date($elem.data("date"));

    if ($elem.data("fullweek") == 1 && StartDate.getDay() != 6 && !$elem.hasClass('fix-booked-end')) {
      while (StartDate.getDay() != 6) {
        StartDate.setDate(StartDate.getDate() - 1);

        if ((0, _jquery["default"])("ul").find("[data-date='" + date_to_string(StartDate) + "']").hasClass('fix-booked-end')) {
          break;
        }
      }

      mark_start((0, _jquery["default"])("ul").find("[data-date='" + date_to_string(StartDate) + "']"));
      $elem.trigger('mouseenter');
      return;
    }

    mark_start($elem);
  }

  function mark_start($elem) {
    (0, _jquery["default"])(".buka-cal-wrapper").addClass("booking-start");
    $elem.addClass("reserve-start");
    (0, _jquery["default"])("input#date_start").val($elem.data("date").split("-").reverse().join("."));
    (0, _jquery["default"])("input#datestart").val($elem.data("date"));
  }

  function date_to_string(jsDate) {
    return jsDate.getFullYear() + "-" + pad(jsDate.getMonth() + 1, 2) + "-" + pad(jsDate.getDate(), 2);
  }

  function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
  }

  (0, _jquery["default"])('.minikalender-wrapper').on('click', 'a', function (e) {
    e.preventDefault();
    var href = (0, _jquery["default"])(this).attr('href') + "&minicalendar=1";
    (0, _jquery["default"])((0, _jquery["default"])(this).parents('.minikalender-wrapper')).load(href);
    return false;
  });
  (0, _jquery["default"])(document).on("mouseenter", ".buka-cal-wrapper.booking-start .bk-cal-day", function () {
    var addthis = 0;
    var $current = (0, _jquery["default"])(this);
    (0, _jquery["default"])(".bk-cal-day").removeClass("add-reserve");

    if ($current.data("date") >= (0, _jquery["default"])(".reserve-start").data("date")) {
      (0, _jquery["default"])(".bk-cal-day").each(function () {
        if ((0, _jquery["default"])(this).hasClass("reserve-start")) {
          addthis = 1;
        }

        if ((0, _jquery["default"])(this).data("date") > $current.data("date")) {
          addthis = 0;
        }

        if (addthis && (0, _jquery["default"])(this).hasClass("bookable")) {
          (0, _jquery["default"])(this).addClass("add-reserve");
        }

        if (!(0, _jquery["default"])(this).hasClass("bookable")) {
          addthis = 0;
        }
      });
    }
  });
});

},{"@babel/runtime/helpers/interopRequireWildcard":2,"jquery":4}],8:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jquery = _interopRequireDefault(require("jquery"));

var _uikit = _interopRequireDefault(require("uikit"));

var _uikitIcons = _interopRequireDefault(require("uikit/dist/js/uikit-icons"));

require("../scripts/buchungskalender");

// import jQuery
// import bootstrap components from node_modules folder
// see https://getbootstrap.com/docs/4.3/getting-started/webpack/
// import 'popper.js';
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/tooltip';
// import Icons from '../scripts/uikit-icons-digicheck';
// import '../scripts/dc-app';
_uikit["default"].use(_uikitIcons["default"]); // import demo
// import fooFighters from './demo-modules/foo-fighters';
// on document ready


(0, _jquery["default"])(function () {
  var $doc = (0, _jquery["default"])(document); // enable bootstrap tooltips
  //$('[data-toggle="tooltip"]').tooltip();
  // Learn to Fly!
  //console.dir(fooFighters);
});

},{"../scripts/buchungskalender":7,"@babel/runtime/helpers/interopRequireDefault":1,"jquery":4,"uikit":6,"uikit/dist/js/uikit-icons":5}]},{},[8]);

//# sourceMappingURL=script.js.map
