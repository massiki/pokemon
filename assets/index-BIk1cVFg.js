(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function fc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ya = { exports: {} },
  ro = {},
  Xa = { exports: {} },
  N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yn = Symbol.for("react.element"),
  dc = Symbol.for("react.portal"),
  pc = Symbol.for("react.fragment"),
  hc = Symbol.for("react.strict_mode"),
  mc = Symbol.for("react.profiler"),
  gc = Symbol.for("react.provider"),
  vc = Symbol.for("react.context"),
  yc = Symbol.for("react.forward_ref"),
  kc = Symbol.for("react.suspense"),
  wc = Symbol.for("react.memo"),
  Pc = Symbol.for("react.lazy"),
  Ml = Symbol.iterator;
function Sc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ml && e[Ml]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Za = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ja = Object.assign,
  qa = {};
function ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qa),
    (this.updater = n || Za);
}
ln.prototype.isReactComponent = {};
ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function es() {}
es.prototype = ln.prototype;
function Wi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qa),
    (this.updater = n || Za);
}
var Vi = (Wi.prototype = new es());
Vi.constructor = Wi;
Ja(Vi, ln.prototype);
Vi.isPureReactComponent = !0;
var jl = Array.isArray,
  ts = Object.prototype.hasOwnProperty,
  bi = { current: null },
  ns = { key: !0, ref: !0, __self: !0, __source: !0 };
function rs(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ts.call(t, r) && !ns.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var s = Array(a), c = 0; c < a; c++) s[c] = arguments[c + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Yn,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: bi.current,
  };
}
function Rc(e, t) {
  return {
    $$typeof: Yn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function $i(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yn;
}
function Cc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ul = /\/+/g;
function Ro(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Cc("" + e.key)
    : t.toString(36);
}
function kr(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Yn:
          case dc:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Ro(l, 0) : r),
      jl(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ul, "$&/") + "/"),
          kr(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          ($i(o) &&
            (o = Rc(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ul, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), jl(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + Ro(i, a);
      l += kr(i, t, n, s, o);
    }
  else if (((s = Sc(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Ro(i, a++)), (l += kr(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    kr(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Ec(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  wr = { transition: null },
  xc = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: bi,
  };
function os() {
  throw Error("act(...) is not supported in production builds of React.");
}
N.Children = {
  map: nr,
  forEach: function (e, t, n) {
    nr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$i(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
N.Component = ln;
N.Fragment = pc;
N.Profiler = mc;
N.PureComponent = Wi;
N.StrictMode = hc;
N.Suspense = kc;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xc;
N.act = os;
N.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ja({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = bi.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      ts.call(t, s) &&
        !ns.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var c = 0; c < s; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Yn, type: e.type, key: o, ref: i, props: r, _owner: l };
};
N.createContext = function (e) {
  return (
    (e = {
      $$typeof: vc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: gc, _context: e }),
    (e.Consumer = e)
  );
};
N.createElement = rs;
N.createFactory = function (e) {
  var t = rs.bind(null, e);
  return (t.type = e), t;
};
N.createRef = function () {
  return { current: null };
};
N.forwardRef = function (e) {
  return { $$typeof: yc, render: e };
};
N.isValidElement = $i;
N.lazy = function (e) {
  return { $$typeof: Pc, _payload: { _status: -1, _result: e }, _init: Ec };
};
N.memo = function (e, t) {
  return { $$typeof: wc, type: e, compare: t === void 0 ? null : t };
};
N.startTransition = function (e) {
  var t = wr.transition;
  wr.transition = {};
  try {
    e();
  } finally {
    wr.transition = t;
  }
};
N.unstable_act = os;
N.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
N.useContext = function (e) {
  return ae.current.useContext(e);
};
N.useDebugValue = function () {};
N.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
N.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
N.useId = function () {
  return ae.current.useId();
};
N.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
N.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
N.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
N.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
N.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
N.useRef = function (e) {
  return ae.current.useRef(e);
};
N.useState = function (e) {
  return ae.current.useState(e);
};
N.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
N.useTransition = function () {
  return ae.current.useTransition();
};
N.version = "18.3.1";
Xa.exports = N;
var Zt = Xa.exports;
const nt = fc(Zt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tc = Zt,
  _c = Symbol.for("react.element"),
  Dc = Symbol.for("react.fragment"),
  Nc = Object.prototype.hasOwnProperty,
  Ac = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function is(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Nc.call(t, r) && !zc.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: _c,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Ac.current,
  };
}
ro.Fragment = Dc;
ro.jsx = is;
ro.jsxs = is;
Ya.exports = ro;
var T = Ya.exports,
  Yo = {},
  ls = { exports: {} },
  ye = {},
  as = { exports: {} },
  ss = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, _) {
    var D = R.length;
    R.push(_);
    e: for (; 0 < D; ) {
      var b = (D - 1) >>> 1,
        Y = R[b];
      if (0 < o(Y, _)) (R[b] = _), (R[D] = Y), (D = b);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var _ = R[0],
      D = R.pop();
    if (D !== _) {
      R[0] = D;
      e: for (var b = 0, Y = R.length, er = Y >>> 1; b < er; ) {
        var gt = 2 * (b + 1) - 1,
          So = R[gt],
          vt = gt + 1,
          tr = R[vt];
        if (0 > o(So, D))
          vt < Y && 0 > o(tr, So)
            ? ((R[b] = tr), (R[vt] = D), (b = vt))
            : ((R[b] = So), (R[gt] = D), (b = gt));
        else if (vt < Y && 0 > o(tr, D)) (R[b] = tr), (R[vt] = D), (b = vt);
        else break e;
      }
    }
    return _;
  }
  function o(R, _) {
    var D = R.sortIndex - _.sortIndex;
    return D !== 0 ? D : R.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    c = [],
    m = 1,
    h = null,
    p = 3,
    y = !1,
    k = !1,
    w = !1,
    M = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(R) {
    for (var _ = n(c); _ !== null; ) {
      if (_.callback === null) r(c);
      else if (_.startTime <= R)
        r(c), (_.sortIndex = _.expirationTime), t(s, _);
      else break;
      _ = n(c);
    }
  }
  function g(R) {
    if (((w = !1), d(R), !k))
      if (n(s) !== null) (k = !0), wo(S);
      else {
        var _ = n(c);
        _ !== null && Po(g, _.startTime - R);
      }
  }
  function S(R, _) {
    (k = !1), w && ((w = !1), f(x), (x = -1)), (y = !0);
    var D = p;
    try {
      for (
        d(_), h = n(s);
        h !== null && (!(h.expirationTime > _) || (R && !xe()));

      ) {
        var b = h.callback;
        if (typeof b == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var Y = b(h.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof Y == "function" ? (h.callback = Y) : h === n(s) && r(s),
            d(_);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var er = !0;
      else {
        var gt = n(c);
        gt !== null && Po(g, gt.startTime - _), (er = !1);
      }
      return er;
    } finally {
      (h = null), (p = D), (y = !1);
    }
  }
  var C = !1,
    E = null,
    x = -1,
    V = 5,
    A = -1;
  function xe() {
    return !(e.unstable_now() - A < V);
  }
  function un() {
    if (E !== null) {
      var R = e.unstable_now();
      A = R;
      var _ = !0;
      try {
        _ = E(!0, R);
      } finally {
        _ ? cn() : ((C = !1), (E = null));
      }
    } else C = !1;
  }
  var cn;
  if (typeof u == "function")
    cn = function () {
      u(un);
    };
  else if (typeof MessageChannel < "u") {
    var Ll = new MessageChannel(),
      cc = Ll.port2;
    (Ll.port1.onmessage = un),
      (cn = function () {
        cc.postMessage(null);
      });
  } else
    cn = function () {
      M(un, 0);
    };
  function wo(R) {
    (E = R), C || ((C = !0), cn());
  }
  function Po(R, _) {
    x = M(function () {
      R(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || y || ((k = !0), wo(S));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (R) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = p;
      }
      var D = p;
      p = _;
      try {
        return R();
      } finally {
        p = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, _) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var D = p;
      p = R;
      try {
        return _();
      } finally {
        p = D;
      }
    }),
    (e.unstable_scheduleCallback = function (R, _, D) {
      var b = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? b + D : b))
          : (D = b),
        R)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = D + Y),
        (R = {
          id: m++,
          callback: _,
          priorityLevel: R,
          startTime: D,
          expirationTime: Y,
          sortIndex: -1,
        }),
        D > b
          ? ((R.sortIndex = D),
            t(c, R),
            n(s) === null &&
              R === n(c) &&
              (w ? (f(x), (x = -1)) : (w = !0), Po(g, D - b)))
          : ((R.sortIndex = Y), t(s, R), k || y || ((k = !0), wo(S))),
        R
      );
    }),
    (e.unstable_shouldYield = xe),
    (e.unstable_wrapCallback = function (R) {
      var _ = p;
      return function () {
        var D = p;
        p = _;
        try {
          return R.apply(this, arguments);
        } finally {
          p = D;
        }
      };
    });
})(ss);
as.exports = ss;
var Fc = as.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oc = Zt,
  ve = Fc;
function v(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var us = new Set(),
  zn = {};
function Nt(e, t) {
  Jt(e, t), Jt(e + "Capture", t);
}
function Jt(e, t) {
  for (zn[e] = t, e = 0; e < t.length; e++) us.add(t[e]);
}
var be = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xo = Object.prototype.hasOwnProperty,
  Ic =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Hl = {},
  Bl = {};
function Lc(e) {
  return Xo.call(Bl, e)
    ? !0
    : Xo.call(Hl, e)
    ? !1
    : Ic.test(e)
    ? (Bl[e] = !0)
    : ((Hl[e] = !0), !1);
}
function Mc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function jc(e, t, n, r) {
  if (t === null || typeof t > "u" || Mc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qi = /[\-:]([a-z])/g;
function Ki(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Ki);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Ki);
    ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Qi, Ki);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gi(e, t, n, r) {
  var o = ee.hasOwnProperty(t) ? ee[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (jc(t, n, o, r) && (n = null),
    r || o === null
      ? Lc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for("react.element"),
  Ft = Symbol.for("react.portal"),
  Ot = Symbol.for("react.fragment"),
  Yi = Symbol.for("react.strict_mode"),
  Zo = Symbol.for("react.profiler"),
  cs = Symbol.for("react.provider"),
  fs = Symbol.for("react.context"),
  Xi = Symbol.for("react.forward_ref"),
  Jo = Symbol.for("react.suspense"),
  qo = Symbol.for("react.suspense_list"),
  Zi = Symbol.for("react.memo"),
  Xe = Symbol.for("react.lazy"),
  ds = Symbol.for("react.offscreen"),
  Wl = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wl && e[Wl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B = Object.assign,
  Co;
function kn(e) {
  if (Co === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Co = (t && t[1]) || "";
    }
  return (
    `
` +
    Co +
    e
  );
}
var Eo = !1;
function xo(e, t) {
  if (!e || Eo) return "";
  Eo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var s =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Eo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kn(e) : "";
}
function Uc(e) {
  switch (e.tag) {
    case 5:
      return kn(e.type);
    case 16:
      return kn("Lazy");
    case 13:
      return kn("Suspense");
    case 19:
      return kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = xo(e.type, !1)), e;
    case 11:
      return (e = xo(e.type.render, !1)), e;
    case 1:
      return (e = xo(e.type, !0)), e;
    default:
      return "";
  }
}
function ei(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ot:
      return "Fragment";
    case Ft:
      return "Portal";
    case Zo:
      return "Profiler";
    case Yi:
      return "StrictMode";
    case Jo:
      return "Suspense";
    case qo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fs:
        return (e.displayName || "Context") + ".Consumer";
      case cs:
        return (e._context.displayName || "Context") + ".Provider";
      case Xi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zi:
        return (
          (t = e.displayName || null), t !== null ? t : ei(e.type) || "Memo"
        );
      case Xe:
        (t = e._payload), (e = e._init);
        try {
          return ei(e(t));
        } catch {}
    }
  return null;
}
function Hc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ei(t);
    case 8:
      return t === Yi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ps(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Bc(e) {
  var t = ps(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function or(e) {
  e._valueTracker || (e._valueTracker = Bc(e));
}
function hs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ps(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ar(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ti(e, t) {
  var n = t.checked;
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ms(e, t) {
  (t = t.checked), t != null && Gi(e, "checked", t, !1);
}
function ni(e, t) {
  ms(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ri(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ri(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function bl(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ri(e, t, n) {
  (t !== "number" || Ar(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wn = Array.isArray;
function $t(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function oi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(v(91));
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function $l(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(v(92));
      if (wn(n)) {
        if (1 < n.length) throw Error(v(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function gs(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ql(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ir,
  ys = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ir = ir || document.createElement("div"),
          ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ir.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Wc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function (e) {
  Wc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rn[t] = Rn[e]);
  });
});
function ks(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rn.hasOwnProperty(e) && Rn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ws(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = ks(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Vc = B(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function li(e, t) {
  if (t) {
    if (Vc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(v(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(v(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(v(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(v(62));
  }
}
function ai(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var si = null;
function Ji(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ui = null,
  Qt = null,
  Kt = null;
function Kl(e) {
  if ((e = Jn(e))) {
    if (typeof ui != "function") throw Error(v(280));
    var t = e.stateNode;
    t && ((t = so(t)), ui(e.stateNode, e.type, t));
  }
}
function Ps(e) {
  Qt ? (Kt ? Kt.push(e) : (Kt = [e])) : (Qt = e);
}
function Ss() {
  if (Qt) {
    var e = Qt,
      t = Kt;
    if (((Kt = Qt = null), Kl(e), t)) for (e = 0; e < t.length; e++) Kl(t[e]);
  }
}
function Rs(e, t) {
  return e(t);
}
function Cs() {}
var To = !1;
function Es(e, t, n) {
  if (To) return e(t, n);
  To = !0;
  try {
    return Rs(e, t, n);
  } finally {
    (To = !1), (Qt !== null || Kt !== null) && (Cs(), Ss());
  }
}
function On(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = so(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(v(231, t, typeof n));
  return n;
}
var ci = !1;
if (be)
  try {
    var dn = {};
    Object.defineProperty(dn, "passive", {
      get: function () {
        ci = !0;
      },
    }),
      window.addEventListener("test", dn, dn),
      window.removeEventListener("test", dn, dn);
  } catch {
    ci = !1;
  }
function bc(e, t, n, r, o, i, l, a, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Cn = !1,
  zr = null,
  Fr = !1,
  fi = null,
  $c = {
    onError: function (e) {
      (Cn = !0), (zr = e);
    },
  };
function Qc(e, t, n, r, o, i, l, a, s) {
  (Cn = !1), (zr = null), bc.apply($c, arguments);
}
function Kc(e, t, n, r, o, i, l, a, s) {
  if ((Qc.apply(this, arguments), Cn)) {
    if (Cn) {
      var c = zr;
      (Cn = !1), (zr = null);
    } else throw Error(v(198));
    Fr || ((Fr = !0), (fi = c));
  }
}
function At(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Gl(e) {
  if (At(e) !== e) throw Error(v(188));
}
function Gc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = At(e)), t === null)) throw Error(v(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Gl(o), e;
        if (i === r) return Gl(o), t;
        i = i.sibling;
      }
      throw Error(v(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(v(189));
      }
    }
    if (n.alternate !== r) throw Error(v(190));
  }
  if (n.tag !== 3) throw Error(v(188));
  return n.stateNode.current === n ? e : t;
}
function Ts(e) {
  return (e = Gc(e)), e !== null ? _s(e) : null;
}
function _s(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = _s(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ds = ve.unstable_scheduleCallback,
  Yl = ve.unstable_cancelCallback,
  Yc = ve.unstable_shouldYield,
  Xc = ve.unstable_requestPaint,
  $ = ve.unstable_now,
  Zc = ve.unstable_getCurrentPriorityLevel,
  qi = ve.unstable_ImmediatePriority,
  Ns = ve.unstable_UserBlockingPriority,
  Or = ve.unstable_NormalPriority,
  Jc = ve.unstable_LowPriority,
  As = ve.unstable_IdlePriority,
  oo = null,
  Me = null;
function qc(e) {
  if (Me && typeof Me.onCommitFiberRoot == "function")
    try {
      Me.onCommitFiberRoot(oo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ae = Math.clz32 ? Math.clz32 : nf,
  ef = Math.log,
  tf = Math.LN2;
function nf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ef(e) / tf) | 0)) | 0;
}
var lr = 64,
  ar = 4194304;
function Pn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ir(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (r = Pn(a)) : ((i &= l), i !== 0 && (r = Pn(i)));
  } else (l = n & ~o), l !== 0 ? (r = Pn(l)) : i !== 0 && (r = Pn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ae(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function rf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function of(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Ae(i),
      a = 1 << l,
      s = o[l];
    s === -1
      ? (!(a & n) || a & r) && (o[l] = rf(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function di(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zs() {
  var e = lr;
  return (lr <<= 1), !(lr & 4194240) && (lr = 64), e;
}
function _o(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ae(t)),
    (e[t] = n);
}
function lf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ae(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function el(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ae(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var F = 0;
function Fs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Os,
  tl,
  Is,
  Ls,
  Ms,
  pi = !1,
  sr = [],
  rt = null,
  ot = null,
  it = null,
  In = new Map(),
  Ln = new Map(),
  Je = [],
  af =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      it = null;
      break;
    case "pointerover":
    case "pointerout":
      In.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ln.delete(t.pointerId);
  }
}
function pn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Jn(t)), t !== null && tl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function sf(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (rt = pn(rt, e, t, n, r, o)), !0;
    case "dragenter":
      return (ot = pn(ot, e, t, n, r, o)), !0;
    case "mouseover":
      return (it = pn(it, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return In.set(i, pn(In.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Ln.set(i, pn(Ln.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function js(e) {
  var t = wt(e.target);
  if (t !== null) {
    var n = At(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xs(n)), t !== null)) {
          (e.blockedOn = t),
            Ms(e.priority, function () {
              Is(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Pr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = hi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (si = r), n.target.dispatchEvent(r), (si = null);
    } else return (t = Jn(n)), t !== null && tl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Zl(e, t, n) {
  Pr(e) && n.delete(t);
}
function uf() {
  (pi = !1),
    rt !== null && Pr(rt) && (rt = null),
    ot !== null && Pr(ot) && (ot = null),
    it !== null && Pr(it) && (it = null),
    In.forEach(Zl),
    Ln.forEach(Zl);
}
function hn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pi ||
      ((pi = !0),
      ve.unstable_scheduleCallback(ve.unstable_NormalPriority, uf)));
}
function Mn(e) {
  function t(o) {
    return hn(o, e);
  }
  if (0 < sr.length) {
    hn(sr[0], e);
    for (var n = 1; n < sr.length; n++) {
      var r = sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && hn(rt, e),
      ot !== null && hn(ot, e),
      it !== null && hn(it, e),
      In.forEach(t),
      Ln.forEach(t),
      n = 0;
    n < Je.length;
    n++
  )
    (r = Je[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Je.length && ((n = Je[0]), n.blockedOn === null); )
    js(n), n.blockedOn === null && Je.shift();
}
var Gt = Ge.ReactCurrentBatchConfig,
  Lr = !0;
function cf(e, t, n, r) {
  var o = F,
    i = Gt.transition;
  Gt.transition = null;
  try {
    (F = 1), nl(e, t, n, r);
  } finally {
    (F = o), (Gt.transition = i);
  }
}
function ff(e, t, n, r) {
  var o = F,
    i = Gt.transition;
  Gt.transition = null;
  try {
    (F = 4), nl(e, t, n, r);
  } finally {
    (F = o), (Gt.transition = i);
  }
}
function nl(e, t, n, r) {
  if (Lr) {
    var o = hi(e, t, n, r);
    if (o === null) jo(e, t, r, Mr, n), Xl(e, r);
    else if (sf(o, e, t, n, r)) r.stopPropagation();
    else if ((Xl(e, r), t & 4 && -1 < af.indexOf(e))) {
      for (; o !== null; ) {
        var i = Jn(o);
        if (
          (i !== null && Os(i),
          (i = hi(e, t, n, r)),
          i === null && jo(e, t, r, Mr, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else jo(e, t, r, null, n);
  }
}
var Mr = null;
function hi(e, t, n, r) {
  if (((Mr = null), (e = Ji(r)), (e = wt(e)), e !== null))
    if (((t = At(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xs(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Mr = e), null;
}
function Us(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Zc()) {
        case qi:
          return 1;
        case Ns:
          return 4;
        case Or:
        case Jc:
          return 16;
        case As:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var et = null,
  rl = null,
  Sr = null;
function Hs() {
  if (Sr) return Sr;
  var e,
    t = rl,
    n = t.length,
    r,
    o = "value" in et ? et.value : et.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Sr = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Rr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ur() {
  return !0;
}
function Jl() {
  return !1;
}
function ke(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ur
        : Jl),
      (this.isPropagationStopped = Jl),
      this
    );
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ur));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ur));
      },
      persist: function () {},
      isPersistent: ur,
    }),
    t
  );
}
var an = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ol = ke(an),
  Zn = B({}, an, { view: 0, detail: 0 }),
  df = ke(Zn),
  Do,
  No,
  mn,
  io = B({}, Zn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: il,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mn &&
            (mn && e.type === "mousemove"
              ? ((Do = e.screenX - mn.screenX), (No = e.screenY - mn.screenY))
              : (No = Do = 0),
            (mn = e)),
          Do);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : No;
    },
  }),
  ql = ke(io),
  pf = B({}, io, { dataTransfer: 0 }),
  hf = ke(pf),
  mf = B({}, Zn, { relatedTarget: 0 }),
  Ao = ke(mf),
  gf = B({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vf = ke(gf),
  yf = B({}, an, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kf = ke(yf),
  wf = B({}, an, { data: 0 }),
  ea = ke(wf),
  Pf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Sf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Rf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Cf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Rf[e]) ? !!t[e] : !1;
}
function il() {
  return Cf;
}
var Ef = B({}, Zn, {
    key: function (e) {
      if (e.key) {
        var t = Pf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Rr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: il,
    charCode: function (e) {
      return e.type === "keypress" ? Rr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Rr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xf = ke(Ef),
  Tf = B({}, io, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ta = ke(Tf),
  _f = B({}, Zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: il,
  }),
  Df = ke(_f),
  Nf = B({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Af = ke(Nf),
  zf = B({}, io, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ff = ke(zf),
  Of = [9, 13, 27, 32],
  ll = be && "CompositionEvent" in window,
  En = null;
be && "documentMode" in document && (En = document.documentMode);
var If = be && "TextEvent" in window && !En,
  Bs = be && (!ll || (En && 8 < En && 11 >= En)),
  na = " ",
  ra = !1;
function Ws(e, t) {
  switch (e) {
    case "keyup":
      return Of.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var It = !1;
function Lf(e, t) {
  switch (e) {
    case "compositionend":
      return Vs(t);
    case "keypress":
      return t.which !== 32 ? null : ((ra = !0), na);
    case "textInput":
      return (e = t.data), e === na && ra ? null : e;
    default:
      return null;
  }
}
function Mf(e, t) {
  if (It)
    return e === "compositionend" || (!ll && Ws(e, t))
      ? ((e = Hs()), (Sr = rl = et = null), (It = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Bs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jf[e.type] : t === "textarea";
}
function bs(e, t, n, r) {
  Ps(r),
    (t = jr(t, "onChange")),
    0 < t.length &&
      ((n = new ol("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var xn = null,
  jn = null;
function Uf(e) {
  tu(e, 0);
}
function lo(e) {
  var t = jt(e);
  if (hs(t)) return e;
}
function Hf(e, t) {
  if (e === "change") return t;
}
var $s = !1;
if (be) {
  var zo;
  if (be) {
    var Fo = "oninput" in document;
    if (!Fo) {
      var ia = document.createElement("div");
      ia.setAttribute("oninput", "return;"),
        (Fo = typeof ia.oninput == "function");
    }
    zo = Fo;
  } else zo = !1;
  $s = zo && (!document.documentMode || 9 < document.documentMode);
}
function la() {
  xn && (xn.detachEvent("onpropertychange", Qs), (jn = xn = null));
}
function Qs(e) {
  if (e.propertyName === "value" && lo(jn)) {
    var t = [];
    bs(t, jn, e, Ji(e)), Es(Uf, t);
  }
}
function Bf(e, t, n) {
  e === "focusin"
    ? (la(), (xn = t), (jn = n), xn.attachEvent("onpropertychange", Qs))
    : e === "focusout" && la();
}
function Wf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return lo(jn);
}
function Vf(e, t) {
  if (e === "click") return lo(t);
}
function bf(e, t) {
  if (e === "input" || e === "change") return lo(t);
}
function $f(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == "function" ? Object.is : $f;
function Un(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Xo.call(t, o) || !Fe(e[o], t[o])) return !1;
  }
  return !0;
}
function aa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function sa(e, t) {
  var n = aa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = aa(n);
  }
}
function Ks(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ks(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Gs() {
  for (var e = window, t = Ar(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ar(e.document);
  }
  return t;
}
function al(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Qf(e) {
  var t = Gs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ks(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && al(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = sa(n, i));
        var l = sa(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Kf = be && "documentMode" in document && 11 >= document.documentMode,
  Lt = null,
  mi = null,
  Tn = null,
  gi = !1;
function ua(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  gi ||
    Lt == null ||
    Lt !== Ar(r) ||
    ((r = Lt),
    "selectionStart" in r && al(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Tn && Un(Tn, r)) ||
      ((Tn = r),
      (r = jr(mi, "onSelect")),
      0 < r.length &&
        ((t = new ol("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Lt))));
}
function cr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Mt = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd"),
  },
  Oo = {},
  Ys = {};
be &&
  ((Ys = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Mt.animationend.animation,
    delete Mt.animationiteration.animation,
    delete Mt.animationstart.animation),
  "TransitionEvent" in window || delete Mt.transitionend.transition);
function ao(e) {
  if (Oo[e]) return Oo[e];
  if (!Mt[e]) return e;
  var t = Mt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ys) return (Oo[e] = t[n]);
  return e;
}
var Xs = ao("animationend"),
  Zs = ao("animationiteration"),
  Js = ao("animationstart"),
  qs = ao("transitionend"),
  eu = new Map(),
  ca =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pt(e, t) {
  eu.set(e, t), Nt(t, [e]);
}
for (var Io = 0; Io < ca.length; Io++) {
  var Lo = ca[Io],
    Gf = Lo.toLowerCase(),
    Yf = Lo[0].toUpperCase() + Lo.slice(1);
  pt(Gf, "on" + Yf);
}
pt(Xs, "onAnimationEnd");
pt(Zs, "onAnimationIteration");
pt(Js, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(qs, "onTransitionEnd");
Jt("onMouseEnter", ["mouseout", "mouseover"]);
Jt("onMouseLeave", ["mouseout", "mouseover"]);
Jt("onPointerEnter", ["pointerout", "pointerover"]);
Jt("onPointerLeave", ["pointerout", "pointerover"]);
Nt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Nt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Nt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Nt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Nt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Sn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Xf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));
function fa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Kc(r, t, void 0, e), (e.currentTarget = null);
}
function tu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), s !== i && o.isPropagationStopped())) break e;
          fa(o, a, c), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          fa(o, a, c), (i = s);
        }
    }
  }
  if (Fr) throw ((e = fi), (Fr = !1), (fi = null), e);
}
function I(e, t) {
  var n = t[Pi];
  n === void 0 && (n = t[Pi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (nu(t, e, 2, !1), n.add(r));
}
function Mo(e, t, n) {
  var r = 0;
  t && (r |= 4), nu(n, e, r, t);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function Hn(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      us.forEach(function (n) {
        n !== "selectionchange" && (Xf.has(n) || Mo(n, !1, e), Mo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fr] || ((t[fr] = !0), Mo("selectionchange", !1, t));
  }
}
function nu(e, t, n, r) {
  switch (Us(t)) {
    case 1:
      var o = cf;
      break;
    case 4:
      o = ff;
      break;
    default:
      o = nl;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ci ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function jo(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = wt(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Es(function () {
    var c = i,
      m = Ji(n),
      h = [];
    e: {
      var p = eu.get(e);
      if (p !== void 0) {
        var y = ol,
          k = e;
        switch (e) {
          case "keypress":
            if (Rr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = xf;
            break;
          case "focusin":
            (k = "focus"), (y = Ao);
            break;
          case "focusout":
            (k = "blur"), (y = Ao);
            break;
          case "beforeblur":
          case "afterblur":
            y = Ao;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = ql;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = hf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Df;
            break;
          case Xs:
          case Zs:
          case Js:
            y = vf;
            break;
          case qs:
            y = Af;
            break;
          case "scroll":
            y = df;
            break;
          case "wheel":
            y = Ff;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = kf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = ta;
        }
        var w = (t & 4) !== 0,
          M = !w && e === "scroll",
          f = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var u = c, d; u !== null; ) {
          d = u;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = On(u, f)), g != null && w.push(Bn(u, g, d)))),
            M)
          )
            break;
          u = u.return;
        }
        0 < w.length &&
          ((p = new y(p, k, null, n, m)), h.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== si &&
            (k = n.relatedTarget || n.fromElement) &&
            (wt(k) || k[$e]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          y
            ? ((k = n.relatedTarget || n.toElement),
              (y = c),
              (k = k ? wt(k) : null),
              k !== null &&
                ((M = At(k)), k !== M || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((y = null), (k = c)),
          y !== k)
        ) {
          if (
            ((w = ql),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = ta),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (u = "pointer")),
            (M = y == null ? p : jt(y)),
            (d = k == null ? p : jt(k)),
            (p = new w(g, u + "leave", y, n, m)),
            (p.target = M),
            (p.relatedTarget = d),
            (g = null),
            wt(m) === c &&
              ((w = new w(f, u + "enter", k, n, m)),
              (w.target = d),
              (w.relatedTarget = M),
              (g = w)),
            (M = g),
            y && k)
          )
            t: {
              for (w = y, f = k, u = 0, d = w; d; d = zt(d)) u++;
              for (d = 0, g = f; g; g = zt(g)) d++;
              for (; 0 < u - d; ) (w = zt(w)), u--;
              for (; 0 < d - u; ) (f = zt(f)), d--;
              for (; u--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = zt(w)), (f = zt(f));
              }
              w = null;
            }
          else w = null;
          y !== null && da(h, p, y, w, !1),
            k !== null && M !== null && da(h, M, k, w, !0);
        }
      }
      e: {
        if (
          ((p = c ? jt(c) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var S = Hf;
        else if (oa(p))
          if ($s) S = bf;
          else {
            S = Wf;
            var C = Bf;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (S = Vf);
        if (S && (S = S(e, c))) {
          bs(h, S, n, m);
          break e;
        }
        C && C(e, p, c),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            ri(p, "number", p.value);
      }
      switch (((C = c ? jt(c) : window), e)) {
        case "focusin":
          (oa(C) || C.contentEditable === "true") &&
            ((Lt = C), (mi = c), (Tn = null));
          break;
        case "focusout":
          Tn = mi = Lt = null;
          break;
        case "mousedown":
          gi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (gi = !1), ua(h, n, m);
          break;
        case "selectionchange":
          if (Kf) break;
        case "keydown":
        case "keyup":
          ua(h, n, m);
      }
      var E;
      if (ll)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        It
          ? Ws(e, n) && (x = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x &&
        (Bs &&
          n.locale !== "ko" &&
          (It || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && It && (E = Hs())
            : ((et = m),
              (rl = "value" in et ? et.value : et.textContent),
              (It = !0))),
        (C = jr(c, x)),
        0 < C.length &&
          ((x = new ea(x, e, null, n, m)),
          h.push({ event: x, listeners: C }),
          E ? (x.data = E) : ((E = Vs(n)), E !== null && (x.data = E)))),
        (E = If ? Lf(e, n) : Mf(e, n)) &&
          ((c = jr(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new ea("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: c }),
            (m.data = E)));
    }
    tu(h, t);
  });
}
function Bn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function jr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = On(e, n)),
      i != null && r.unshift(Bn(e, i, o)),
      (i = On(e, t)),
      i != null && r.push(Bn(e, i, o))),
      (e = e.return);
  }
  return r;
}
function zt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function da(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      c = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      o
        ? ((s = On(n, i)), s != null && l.unshift(Bn(n, s, a)))
        : o || ((s = On(n, i)), s != null && l.push(Bn(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Zf = /\r\n?/g,
  Jf = /\u0000|\uFFFD/g;
function pa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zf,
      `
`
    )
    .replace(Jf, "");
}
function dr(e, t, n) {
  if (((t = pa(t)), pa(e) !== t && n)) throw Error(v(425));
}
function Ur() {}
var vi = null,
  yi = null;
function ki(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var wi = typeof setTimeout == "function" ? setTimeout : void 0,
  qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ha = typeof Promise == "function" ? Promise : void 0,
  ed =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ha < "u"
      ? function (e) {
          return ha.resolve(null).then(e).catch(td);
        }
      : wi;
function td(e) {
  setTimeout(function () {
    throw e;
  });
}
function Uo(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Mn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Mn(t);
}
function lt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ma(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sn = Math.random().toString(36).slice(2),
  Le = "__reactFiber$" + sn,
  Wn = "__reactProps$" + sn,
  $e = "__reactContainer$" + sn,
  Pi = "__reactEvents$" + sn,
  nd = "__reactListeners$" + sn,
  rd = "__reactHandles$" + sn;
function wt(e) {
  var t = e[Le];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[$e] || n[Le])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ma(e); e !== null; ) {
          if ((n = e[Le])) return n;
          e = ma(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Jn(e) {
  return (
    (e = e[Le] || e[$e]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(v(33));
}
function so(e) {
  return e[Wn] || null;
}
var Si = [],
  Ut = -1;
function ht(e) {
  return { current: e };
}
function L(e) {
  0 > Ut || ((e.current = Si[Ut]), (Si[Ut] = null), Ut--);
}
function O(e, t) {
  Ut++, (Si[Ut] = e.current), (e.current = t);
}
var dt = {},
  oe = ht(dt),
  fe = ht(!1),
  Et = dt;
function qt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function Hr() {
  L(fe), L(oe);
}
function ga(e, t, n) {
  if (oe.current !== dt) throw Error(v(168));
  O(oe, t), O(fe, n);
}
function ru(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(v(108, Hc(e) || "Unknown", o));
  return B({}, n, r);
}
function Br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt),
    (Et = oe.current),
    O(oe, e),
    O(fe, fe.current),
    !0
  );
}
function va(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(v(169));
  n
    ? ((e = ru(e, t, Et)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      L(fe),
      L(oe),
      O(oe, e))
    : L(fe),
    O(fe, n);
}
var He = null,
  uo = !1,
  Ho = !1;
function ou(e) {
  He === null ? (He = [e]) : He.push(e);
}
function od(e) {
  (uo = !0), ou(e);
}
function mt() {
  if (!Ho && He !== null) {
    Ho = !0;
    var e = 0,
      t = F;
    try {
      var n = He;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (He = null), (uo = !1);
    } catch (o) {
      throw (He !== null && (He = He.slice(e + 1)), Ds(qi, mt), o);
    } finally {
      (F = t), (Ho = !1);
    }
  }
  return null;
}
var Ht = [],
  Bt = 0,
  Wr = null,
  Vr = 0,
  we = [],
  Pe = 0,
  xt = null,
  Be = 1,
  We = "";
function yt(e, t) {
  (Ht[Bt++] = Vr), (Ht[Bt++] = Wr), (Wr = e), (Vr = t);
}
function iu(e, t, n) {
  (we[Pe++] = Be), (we[Pe++] = We), (we[Pe++] = xt), (xt = e);
  var r = Be;
  e = We;
  var o = 32 - Ae(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Ae(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Be = (1 << (32 - Ae(t) + o)) | (n << o) | r),
      (We = i + e);
  } else (Be = (1 << i) | (n << o) | r), (We = e);
}
function sl(e) {
  e.return !== null && (yt(e, 1), iu(e, 1, 0));
}
function ul(e) {
  for (; e === Wr; )
    (Wr = Ht[--Bt]), (Ht[Bt] = null), (Vr = Ht[--Bt]), (Ht[Bt] = null);
  for (; e === xt; )
    (xt = we[--Pe]),
      (we[Pe] = null),
      (We = we[--Pe]),
      (we[Pe] = null),
      (Be = we[--Pe]),
      (we[Pe] = null);
}
var ge = null,
  me = null,
  j = !1,
  Ne = null;
function lu(e, t) {
  var n = Se(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ya(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (me = lt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = xt !== null ? { id: Be, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Se(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ri(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ci(e) {
  if (j) {
    var t = me;
    if (t) {
      var n = t;
      if (!ya(e, t)) {
        if (Ri(e)) throw Error(v(418));
        t = lt(n.nextSibling);
        var r = ge;
        t && ya(e, t)
          ? lu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (j = !1), (ge = e));
      }
    } else {
      if (Ri(e)) throw Error(v(418));
      (e.flags = (e.flags & -4097) | 2), (j = !1), (ge = e);
    }
  }
}
function ka(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function pr(e) {
  if (e !== ge) return !1;
  if (!j) return ka(e), (j = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ki(e.type, e.memoizedProps))),
    t && (t = me))
  ) {
    if (Ri(e)) throw (au(), Error(v(418)));
    for (; t; ) lu(e, t), (t = lt(t.nextSibling));
  }
  if ((ka(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(v(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              me = lt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      me = null;
    }
  } else me = ge ? lt(e.stateNode.nextSibling) : null;
  return !0;
}
function au() {
  for (var e = me; e; ) e = lt(e.nextSibling);
}
function en() {
  (me = ge = null), (j = !1);
}
function cl(e) {
  Ne === null ? (Ne = [e]) : Ne.push(e);
}
var id = Ge.ReactCurrentBatchConfig;
function gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(v(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(v(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(v(284));
    if (!n._owner) throw Error(v(290, e));
  }
  return e;
}
function hr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      v(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function wa(e) {
  var t = e._init;
  return t(e._payload);
}
function su(e) {
  function t(f, u) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [u]), (f.flags |= 16)) : d.push(u);
    }
  }
  function n(f, u) {
    if (!e) return null;
    for (; u !== null; ) t(f, u), (u = u.sibling);
    return null;
  }
  function r(f, u) {
    for (f = new Map(); u !== null; )
      u.key !== null ? f.set(u.key, u) : f.set(u.index, u), (u = u.sibling);
    return f;
  }
  function o(f, u) {
    return (f = ct(f, u)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, u, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < u ? ((f.flags |= 2), u) : d)
            : ((f.flags |= 2), u))
        : ((f.flags |= 1048576), u)
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, u, d, g) {
    return u === null || u.tag !== 6
      ? ((u = Ko(d, f.mode, g)), (u.return = f), u)
      : ((u = o(u, d)), (u.return = f), u);
  }
  function s(f, u, d, g) {
    var S = d.type;
    return S === Ot
      ? m(f, u, d.props.children, g, d.key)
      : u !== null &&
        (u.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Xe &&
            wa(S) === u.type))
      ? ((g = o(u, d.props)), (g.ref = gn(f, u, d)), (g.return = f), g)
      : ((g = Nr(d.type, d.key, d.props, null, f.mode, g)),
        (g.ref = gn(f, u, d)),
        (g.return = f),
        g);
  }
  function c(f, u, d, g) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== d.containerInfo ||
      u.stateNode.implementation !== d.implementation
      ? ((u = Go(d, f.mode, g)), (u.return = f), u)
      : ((u = o(u, d.children || [])), (u.return = f), u);
  }
  function m(f, u, d, g, S) {
    return u === null || u.tag !== 7
      ? ((u = Ct(d, f.mode, g, S)), (u.return = f), u)
      : ((u = o(u, d)), (u.return = f), u);
  }
  function h(f, u, d) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = Ko("" + u, f.mode, d)), (u.return = f), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case rr:
          return (
            (d = Nr(u.type, u.key, u.props, null, f.mode, d)),
            (d.ref = gn(f, null, u)),
            (d.return = f),
            d
          );
        case Ft:
          return (u = Go(u, f.mode, d)), (u.return = f), u;
        case Xe:
          var g = u._init;
          return h(f, g(u._payload), d);
      }
      if (wn(u) || fn(u))
        return (u = Ct(u, f.mode, d, null)), (u.return = f), u;
      hr(f, u);
    }
    return null;
  }
  function p(f, u, d, g) {
    var S = u !== null ? u.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return S !== null ? null : a(f, u, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === S ? s(f, u, d, g) : null;
        case Ft:
          return d.key === S ? c(f, u, d, g) : null;
        case Xe:
          return (S = d._init), p(f, u, S(d._payload), g);
      }
      if (wn(d) || fn(d)) return S !== null ? null : m(f, u, d, g, null);
      hr(f, d);
    }
    return null;
  }
  function y(f, u, d, g, S) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(d) || null), a(u, f, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case rr:
          return (f = f.get(g.key === null ? d : g.key) || null), s(u, f, g, S);
        case Ft:
          return (f = f.get(g.key === null ? d : g.key) || null), c(u, f, g, S);
        case Xe:
          var C = g._init;
          return y(f, u, d, C(g._payload), S);
      }
      if (wn(g) || fn(g)) return (f = f.get(d) || null), m(u, f, g, S, null);
      hr(u, g);
    }
    return null;
  }
  function k(f, u, d, g) {
    for (
      var S = null, C = null, E = u, x = (u = 0), V = null;
      E !== null && x < d.length;
      x++
    ) {
      E.index > x ? ((V = E), (E = null)) : (V = E.sibling);
      var A = p(f, E, d[x], g);
      if (A === null) {
        E === null && (E = V);
        break;
      }
      e && E && A.alternate === null && t(f, E),
        (u = i(A, u, x)),
        C === null ? (S = A) : (C.sibling = A),
        (C = A),
        (E = V);
    }
    if (x === d.length) return n(f, E), j && yt(f, x), S;
    if (E === null) {
      for (; x < d.length; x++)
        (E = h(f, d[x], g)),
          E !== null &&
            ((u = i(E, u, x)), C === null ? (S = E) : (C.sibling = E), (C = E));
      return j && yt(f, x), S;
    }
    for (E = r(f, E); x < d.length; x++)
      (V = y(E, f, x, d[x], g)),
        V !== null &&
          (e && V.alternate !== null && E.delete(V.key === null ? x : V.key),
          (u = i(V, u, x)),
          C === null ? (S = V) : (C.sibling = V),
          (C = V));
    return (
      e &&
        E.forEach(function (xe) {
          return t(f, xe);
        }),
      j && yt(f, x),
      S
    );
  }
  function w(f, u, d, g) {
    var S = fn(d);
    if (typeof S != "function") throw Error(v(150));
    if (((d = S.call(d)), d == null)) throw Error(v(151));
    for (
      var C = (S = null), E = u, x = (u = 0), V = null, A = d.next();
      E !== null && !A.done;
      x++, A = d.next()
    ) {
      E.index > x ? ((V = E), (E = null)) : (V = E.sibling);
      var xe = p(f, E, A.value, g);
      if (xe === null) {
        E === null && (E = V);
        break;
      }
      e && E && xe.alternate === null && t(f, E),
        (u = i(xe, u, x)),
        C === null ? (S = xe) : (C.sibling = xe),
        (C = xe),
        (E = V);
    }
    if (A.done) return n(f, E), j && yt(f, x), S;
    if (E === null) {
      for (; !A.done; x++, A = d.next())
        (A = h(f, A.value, g)),
          A !== null &&
            ((u = i(A, u, x)), C === null ? (S = A) : (C.sibling = A), (C = A));
      return j && yt(f, x), S;
    }
    for (E = r(f, E); !A.done; x++, A = d.next())
      (A = y(E, f, x, A.value, g)),
        A !== null &&
          (e && A.alternate !== null && E.delete(A.key === null ? x : A.key),
          (u = i(A, u, x)),
          C === null ? (S = A) : (C.sibling = A),
          (C = A));
    return (
      e &&
        E.forEach(function (un) {
          return t(f, un);
        }),
      j && yt(f, x),
      S
    );
  }
  function M(f, u, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ot &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var S = d.key, C = u; C !== null; ) {
              if (C.key === S) {
                if (((S = d.type), S === Ot)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (u = o(C, d.props.children)),
                      (u.return = f),
                      (f = u);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Xe &&
                    wa(S) === C.type)
                ) {
                  n(f, C.sibling),
                    (u = o(C, d.props)),
                    (u.ref = gn(f, C, d)),
                    (u.return = f),
                    (f = u);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Ot
              ? ((u = Ct(d.props.children, f.mode, g, d.key)),
                (u.return = f),
                (f = u))
              : ((g = Nr(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = gn(f, u, d)),
                (g.return = f),
                (f = g));
          }
          return l(f);
        case Ft:
          e: {
            for (C = d.key; u !== null; ) {
              if (u.key === C)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === d.containerInfo &&
                  u.stateNode.implementation === d.implementation
                ) {
                  n(f, u.sibling),
                    (u = o(u, d.children || [])),
                    (u.return = f),
                    (f = u);
                  break e;
                } else {
                  n(f, u);
                  break;
                }
              else t(f, u);
              u = u.sibling;
            }
            (u = Go(d, f.mode, g)), (u.return = f), (f = u);
          }
          return l(f);
        case Xe:
          return (C = d._init), M(f, u, C(d._payload), g);
      }
      if (wn(d)) return k(f, u, d, g);
      if (fn(d)) return w(f, u, d, g);
      hr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        u !== null && u.tag === 6
          ? (n(f, u.sibling), (u = o(u, d)), (u.return = f), (f = u))
          : (n(f, u), (u = Ko(d, f.mode, g)), (u.return = f), (f = u)),
        l(f))
      : n(f, u);
  }
  return M;
}
var tn = su(!0),
  uu = su(!1),
  br = ht(null),
  $r = null,
  Wt = null,
  fl = null;
function dl() {
  fl = Wt = $r = null;
}
function pl(e) {
  var t = br.current;
  L(br), (e._currentValue = t);
}
function Ei(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yt(e, t) {
  ($r = e),
    (fl = Wt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ce(e) {
  var t = e._currentValue;
  if (fl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wt === null)) {
      if ($r === null) throw Error(v(308));
      (Wt = e), ($r.dependencies = { lanes: 0, firstContext: e });
    } else Wt = Wt.next = e;
  return t;
}
var Pt = null;
function hl(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function cu(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), hl(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Qe(e, r)
  );
}
function Qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ze = !1;
function ml(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ve(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Qe(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), hl(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Qe(e, n)
  );
}
function Cr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), el(e, n);
  }
}
function Pa(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Qr(e, t, n, r) {
  var o = e.updateQueue;
  Ze = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      c = s.next;
    (s.next = null), l === null ? (i = c) : (l.next = c), (l = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (a = m.lastBaseUpdate),
      a !== l &&
        (a === null ? (m.firstBaseUpdate = c) : (a.next = c),
        (m.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = o.baseState;
    (l = 0), (m = c = s = null), (a = i);
    do {
      var p = a.lane,
        y = a.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var k = e,
            w = a;
          switch (((p = t), (y = n), w.tag)) {
            case 1:
              if (((k = w.payload), typeof k == "function")) {
                h = k.call(y, h, p);
                break e;
              }
              h = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = w.payload),
                (p = typeof k == "function" ? k.call(y, h, p) : k),
                p == null)
              )
                break e;
              h = B({}, h, p);
              break e;
            case 2:
              Ze = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [a]) : p.push(a));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          m === null ? ((c = m = y), (s = h)) : (m = m.next = y),
          (l |= p);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (s = h),
      (o.baseState = s),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = m),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (_t |= l), (e.lanes = l), (e.memoizedState = h);
  }
}
function Sa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(v(191, o));
        o.call(r);
      }
    }
}
var qn = {},
  je = ht(qn),
  Vn = ht(qn),
  bn = ht(qn);
function St(e) {
  if (e === qn) throw Error(v(174));
  return e;
}
function gl(e, t) {
  switch ((O(bn, t), O(Vn, e), O(je, qn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ii(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ii(t, e));
  }
  L(je), O(je, t);
}
function nn() {
  L(je), L(Vn), L(bn);
}
function du(e) {
  St(bn.current);
  var t = St(je.current),
    n = ii(t, e.type);
  t !== n && (O(Vn, e), O(je, n));
}
function vl(e) {
  Vn.current === e && (L(je), L(Vn));
}
var U = ht(0);
function Kr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Bo = [];
function yl() {
  for (var e = 0; e < Bo.length; e++)
    Bo[e]._workInProgressVersionPrimary = null;
  Bo.length = 0;
}
var Er = Ge.ReactCurrentDispatcher,
  Wo = Ge.ReactCurrentBatchConfig,
  Tt = 0,
  H = null,
  K = null,
  X = null,
  Gr = !1,
  _n = !1,
  $n = 0,
  ld = 0;
function te() {
  throw Error(v(321));
}
function kl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function wl(e, t, n, r, o, i) {
  if (
    ((Tt = i),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Er.current = e === null || e.memoizedState === null ? cd : fd),
    (e = n(r, o)),
    _n)
  ) {
    i = 0;
    do {
      if (((_n = !1), ($n = 0), 25 <= i)) throw Error(v(301));
      (i += 1),
        (X = K = null),
        (t.updateQueue = null),
        (Er.current = dd),
        (e = n(r, o));
    } while (_n);
  }
  if (
    ((Er.current = Yr),
    (t = K !== null && K.next !== null),
    (Tt = 0),
    (X = K = H = null),
    (Gr = !1),
    t)
  )
    throw Error(v(300));
  return e;
}
function Pl() {
  var e = $n !== 0;
  return ($n = 0), e;
}
function Ie() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return X === null ? (H.memoizedState = X = e) : (X = X.next = e), X;
}
function Ee() {
  if (K === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = X === null ? H.memoizedState : X.next;
  if (t !== null) (X = t), (K = e);
  else {
    if (e === null) throw Error(v(310));
    (K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      X === null ? (H.memoizedState = X = e) : (X = X.next = e);
  }
  return X;
}
function Qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vo(e) {
  var t = Ee(),
    n = t.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = K,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      c = i;
    do {
      var m = c.lane;
      if ((Tt & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((a = s = h), (l = r)) : (s = s.next = h),
          (H.lanes |= m),
          (_t |= m);
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? (l = r) : (s.next = a),
      Fe(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (H.lanes |= i), (_t |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bo(e) {
  var t = Ee(),
    n = t.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    Fe(i, t.memoizedState) || (ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function pu() {}
function hu(e, t) {
  var n = H,
    r = Ee(),
    o = t(),
    i = !Fe(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (ce = !0)),
    (r = r.queue),
    Sl(vu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (X !== null && X.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kn(9, gu.bind(null, n, r, o, t), void 0, null),
      Z === null)
    )
      throw Error(v(349));
    Tt & 30 || mu(n, t, o);
  }
  return o;
}
function mu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function gu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), yu(t) && ku(e);
}
function vu(e, t, n) {
  return n(function () {
    yu(t) && ku(e);
  });
}
function yu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function ku(e) {
  var t = Qe(e, 1);
  t !== null && ze(t, e, 1, -1);
}
function Ra(e) {
  var t = Ie();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ud.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function Kn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wu() {
  return Ee().memoizedState;
}
function xr(e, t, n, r) {
  var o = Ie();
  (H.flags |= e),
    (o.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r));
}
function co(e, t, n, r) {
  var o = Ee();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (K !== null) {
    var l = K.memoizedState;
    if (((i = l.destroy), r !== null && kl(r, l.deps))) {
      o.memoizedState = Kn(t, n, i, r);
      return;
    }
  }
  (H.flags |= e), (o.memoizedState = Kn(1 | t, n, i, r));
}
function Ca(e, t) {
  return xr(8390656, 8, e, t);
}
function Sl(e, t) {
  return co(2048, 8, e, t);
}
function Pu(e, t) {
  return co(4, 2, e, t);
}
function Su(e, t) {
  return co(4, 4, e, t);
}
function Ru(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Cu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), co(4, 4, Ru.bind(null, t, e), n)
  );
}
function Rl() {}
function Eu(e, t) {
  var n = Ee();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function xu(e, t) {
  var n = Ee();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Tu(e, t, n) {
  return Tt & 21
    ? (Fe(n, t) || ((n = zs()), (H.lanes |= n), (_t |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function ad(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Wo.transition;
  Wo.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (Wo.transition = r);
  }
}
function _u() {
  return Ee().memoizedState;
}
function sd(e, t, n) {
  var r = ut(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Du(e))
  )
    Nu(t, n);
  else if (((n = cu(e, t, n, r)), n !== null)) {
    var o = le();
    ze(n, e, r, o), Au(n, t, r);
  }
}
function ud(e, t, n) {
  var r = ut(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Du(e)) Nu(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Fe(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), hl(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = cu(e, t, o, r)),
      n !== null && ((o = le()), ze(n, e, r, o), Au(n, t, r));
  }
}
function Du(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function Nu(e, t) {
  _n = Gr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Au(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), el(e, n);
  }
}
var Yr = {
    readContext: Ce,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  cd = {
    readContext: Ce,
    useCallback: function (e, t) {
      return (Ie().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ce,
    useEffect: Ca,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        xr(4194308, 4, Ru.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return xr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return xr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ie();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ie();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = sd.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ie();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ra,
    useDebugValue: Rl,
    useDeferredValue: function (e) {
      return (Ie().memoizedState = e);
    },
    useTransition: function () {
      var e = Ra(!1),
        t = e[0];
      return (e = ad.bind(null, e[1])), (Ie().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        o = Ie();
      if (j) {
        if (n === void 0) throw Error(v(407));
        n = n();
      } else {
        if (((n = t()), Z === null)) throw Error(v(349));
        Tt & 30 || mu(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Ca(vu.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Kn(9, gu.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ie(),
        t = Z.identifierPrefix;
      if (j) {
        var n = We,
          r = Be;
        (n = (r & ~(1 << (32 - Ae(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = $n++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ld++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  fd = {
    readContext: Ce,
    useCallback: Eu,
    useContext: Ce,
    useEffect: Sl,
    useImperativeHandle: Cu,
    useInsertionEffect: Pu,
    useLayoutEffect: Su,
    useMemo: xu,
    useReducer: Vo,
    useRef: wu,
    useState: function () {
      return Vo(Qn);
    },
    useDebugValue: Rl,
    useDeferredValue: function (e) {
      var t = Ee();
      return Tu(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Vo(Qn)[0],
        t = Ee().memoizedState;
      return [e, t];
    },
    useMutableSource: pu,
    useSyncExternalStore: hu,
    useId: _u,
    unstable_isNewReconciler: !1,
  },
  dd = {
    readContext: Ce,
    useCallback: Eu,
    useContext: Ce,
    useEffect: Sl,
    useImperativeHandle: Cu,
    useInsertionEffect: Pu,
    useLayoutEffect: Su,
    useMemo: xu,
    useReducer: bo,
    useRef: wu,
    useState: function () {
      return bo(Qn);
    },
    useDebugValue: Rl,
    useDeferredValue: function (e) {
      var t = Ee();
      return K === null ? (t.memoizedState = e) : Tu(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = bo(Qn)[0],
        t = Ee().memoizedState;
      return [e, t];
    },
    useMutableSource: pu,
    useSyncExternalStore: hu,
    useId: _u,
    unstable_isNewReconciler: !1,
  };
function _e(e, t) {
  if (e && e.defaultProps) {
    (t = B({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function xi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? At(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = le(),
      o = ut(e),
      i = Ve(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, o)),
      t !== null && (ze(t, e, o, r), Cr(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = le(),
      o = ut(e),
      i = Ve(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, o)),
      t !== null && (ze(t, e, o, r), Cr(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = le(),
      r = ut(e),
      o = Ve(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = at(e, o, r)),
      t !== null && (ze(t, e, r, n), Cr(t, e, r));
  },
};
function Ea(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Un(n, r) || !Un(o, i)
      : !0
  );
}
function zu(e, t, n) {
  var r = !1,
    o = dt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ce(i))
      : ((o = de(t) ? Et : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? qt(e, o) : dt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function xa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fo.enqueueReplaceState(t, t.state, null);
}
function Ti(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), ml(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ce(i))
    : ((i = de(t) ? Et : oe.current), (o.context = qt(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (xi(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && fo.enqueueReplaceState(o, o.state, null),
      Qr(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Uc(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function $o(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _i(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var pd = typeof WeakMap == "function" ? WeakMap : Map;
function Fu(e, t, n) {
  (n = Ve(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Zr || ((Zr = !0), (ji = r)), _i(e, t);
    }),
    n
  );
}
function Ou(e, t, n) {
  (n = Ve(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        _i(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        _i(e, t),
          typeof r != "function" &&
            (st === null ? (st = new Set([this])) : st.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Ta(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new pd();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Td.bind(null, e, t, n)), t.then(e, e));
}
function _a(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Da(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ve(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var hd = Ge.ReactCurrentOwner,
  ce = !1;
function ie(e, t, n, r) {
  t.child = e === null ? uu(t, null, n, r) : tn(t, e.child, n, r);
}
function Na(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Yt(t, o),
    (r = wl(e, t, n, r, i, o)),
    (n = Pl()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ke(e, t, o))
      : (j && n && sl(t), (t.flags |= 1), ie(e, t, r, o), t.child)
  );
}
function Aa(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Al(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Iu(e, t, i, r, o))
      : ((e = Nr(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Un), n(l, r) && e.ref === t.ref)
    )
      return Ke(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = ct(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Iu(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Un(i, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Ke(e, t, o);
  }
  return Di(e, t, n, r, o);
}
function Lu(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        O(bt, he),
        (he |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          O(bt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        O(bt, he),
        (he |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      O(bt, he),
      (he |= r);
  return ie(e, t, o, n), t.child;
}
function Mu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Di(e, t, n, r, o) {
  var i = de(n) ? Et : oe.current;
  return (
    (i = qt(t, i)),
    Yt(t, o),
    (n = wl(e, t, n, r, i, o)),
    (r = Pl()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ke(e, t, o))
      : (j && r && sl(t), (t.flags |= 1), ie(e, t, n, o), t.child)
  );
}
function za(e, t, n, r, o) {
  if (de(n)) {
    var i = !0;
    Br(t);
  } else i = !1;
  if ((Yt(t, o), t.stateNode === null))
    Tr(e, t), zu(t, n, r), Ti(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ce(c))
      : ((c = de(n) ? Et : oe.current), (c = qt(t, c)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== c) && xa(t, l, r, c)),
      (Ze = !1);
    var p = t.memoizedState;
    (l.state = p),
      Qr(t, r, l, o),
      (s = t.memoizedState),
      a !== r || p !== s || fe.current || Ze
        ? (typeof m == "function" && (xi(t, n, m, r), (s = t.memoizedState)),
          (a = Ze || Ea(t, n, a, r, p, s, c))
            ? (h ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = c),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      fu(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : _e(t.type, a)),
      (l.props = c),
      (h = t.pendingProps),
      (p = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ce(s))
        : ((s = de(n) ? Et : oe.current), (s = qt(t, s)));
    var y = n.getDerivedStateFromProps;
    (m =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== h || p !== s) && xa(t, l, r, s)),
      (Ze = !1),
      (p = t.memoizedState),
      (l.state = p),
      Qr(t, r, l, o);
    var k = t.memoizedState;
    a !== h || p !== k || fe.current || Ze
      ? (typeof y == "function" && (xi(t, n, y, r), (k = t.memoizedState)),
        (c = Ze || Ea(t, n, c, r, p, k, s) || !1)
          ? (m ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, k, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, k, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (l.props = r),
        (l.state = k),
        (l.context = s),
        (r = c))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ni(e, t, n, r, i, o);
}
function Ni(e, t, n, r, o, i) {
  Mu(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && va(t, n, !1), Ke(e, t, i);
  (r = t.stateNode), (hd.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = tn(t, e.child, null, i)), (t.child = tn(t, null, a, i)))
      : ie(e, t, a, i),
    (t.memoizedState = r.state),
    o && va(t, n, !0),
    t.child
  );
}
function ju(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ga(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ga(e, t.context, !1),
    gl(e, t.containerInfo);
}
function Fa(e, t, n, r, o) {
  return en(), cl(o), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var Ai = { dehydrated: null, treeContext: null, retryLane: 0 };
function zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Uu(e, t, n) {
  var r = t.pendingProps,
    o = U.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    O(U, o & 1),
    e === null)
  )
    return (
      Ci(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = mo(l, r, 0, null)),
              (e = Ct(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = zi(n)),
              (t.memoizedState = Ai),
              e)
            : Cl(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return md(e, t, l, r, a, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = ct(a, i)) : ((i = Ct(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? zi(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ai),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ct(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Cl(e, t) {
  return (
    (t = mo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function mr(e, t, n, r) {
  return (
    r !== null && cl(r),
    tn(t, e.child, null, n),
    (e = Cl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function md(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = $o(Error(v(422)))), mr(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = mo({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Ct(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && tn(t, e.child, null, l),
        (t.child.memoizedState = zi(l)),
        (t.memoizedState = Ai),
        i);
  if (!(t.mode & 1)) return mr(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(v(419))), (r = $o(i, r, void 0)), mr(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), ce || a)) {
    if (((r = Z), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Qe(e, o), ze(r, e, o, -1));
    }
    return Nl(), (r = $o(Error(v(421)))), mr(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = _d.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (me = lt(o.nextSibling)),
      (ge = t),
      (j = !0),
      (Ne = null),
      e !== null &&
        ((we[Pe++] = Be),
        (we[Pe++] = We),
        (we[Pe++] = xt),
        (Be = e.id),
        (We = e.overflow),
        (xt = t)),
      (t = Cl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Oa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ei(e.return, t, n);
}
function Qo(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Hu(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ie(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Oa(e, n, t);
        else if (e.tag === 19) Oa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((O(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Kr(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Qo(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Kr(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Qo(t, !0, n, null, i);
        break;
      case "together":
        Qo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Tr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ke(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (_t |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(v(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function gd(e, t, n) {
  switch (t.tag) {
    case 3:
      ju(t), en();
      break;
    case 5:
      du(t);
      break;
    case 1:
      de(t.type) && Br(t);
      break;
    case 4:
      gl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      O(br, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (O(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Uu(e, t, n)
          : (O(U, U.current & 1),
            (e = Ke(e, t, n)),
            e !== null ? e.sibling : null);
      O(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Hu(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        O(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Lu(e, t, n);
  }
  return Ke(e, t, n);
}
var Bu, Fi, Wu, Vu;
Bu = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fi = function () {};
Wu = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), St(je.current);
    var i = null;
    switch (n) {
      case "input":
        (o = ti(e, o)), (r = ti(e, r)), (i = []);
        break;
      case "select":
        (o = B({}, o, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = oi(e, o)), (r = oi(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ur);
    }
    li(n, r);
    var l;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var a = o[c];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (zn.hasOwnProperty(c)
              ? i || (i = [])
              : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((a = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && s !== a && (s != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (zn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && I("scroll", e),
                  i || a === s || (i = []))
                : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Vu = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vn(e, t) {
  if (!j)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function vd(e, t, n) {
  var r = t.pendingProps;
  switch ((ul(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return de(t.type) && Hr(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nn(),
        L(fe),
        L(oe),
        yl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ne !== null && (Bi(Ne), (Ne = null)))),
        Fi(e, t),
        ne(t),
        null
      );
    case 5:
      vl(t);
      var o = St(bn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Wu(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(v(166));
          return ne(t), null;
        }
        if (((e = St(je.current)), pr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Le] = t), (r[Wn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Sn.length; o++) I(Sn[o], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I("error", r), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              Vl(r, i), I("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                I("invalid", r);
              break;
            case "textarea":
              $l(r, i), I("invalid", r);
          }
          li(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : zn.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  I("scroll", r);
            }
          switch (n) {
            case "input":
              or(r), bl(r, i, !0);
              break;
            case "textarea":
              or(r), Ql(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ur);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Le] = t),
            (e[Wn] = r),
            Bu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ai(n, r)), n)) {
              case "dialog":
                I("cancel", e), I("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Sn.length; o++) I(Sn[o], e);
                o = r;
                break;
              case "source":
                I("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                I("error", e), I("load", e), (o = r);
                break;
              case "details":
                I("toggle", e), (o = r);
                break;
              case "input":
                Vl(e, r), (o = ti(e, r)), I("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = B({}, r, { value: void 0 })),
                  I("invalid", e);
                break;
              case "textarea":
                $l(e, r), (o = oi(e, r)), I("invalid", e);
                break;
              default:
                o = r;
            }
            li(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? ws(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ys(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Fn(e, s)
                    : typeof s == "number" && Fn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (zn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && I("scroll", e)
                      : s != null && Gi(e, i, s, l));
              }
            switch (n) {
              case "input":
                or(e), bl(e, r, !1);
                break;
              case "textarea":
                or(e), Ql(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? $t(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      $t(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ur);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) Vu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(v(166));
        if (((n = St(bn.current)), St(je.current), pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Le] = t),
            (i = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Le] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (L(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (j && me !== null && t.mode & 1 && !(t.flags & 128))
          au(), en(), (t.flags |= 98560), (i = !1);
        else if (((i = pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(v(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(v(317));
            i[Le] = t;
          } else
            en(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (i = !1);
        } else Ne !== null && (Bi(Ne), (Ne = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? G === 0 && (G = 3) : Nl())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        nn(), Fi(e, t), e === null && Hn(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return pl(t.type._context), ne(t), null;
    case 17:
      return de(t.type) && Hr(), ne(t), null;
    case 19:
      if ((L(U), (i = t.memoizedState), i === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) vn(i, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Kr(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    vn(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return O(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            $() > on &&
            ((t.flags |= 128), (r = !0), vn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kr(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              vn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !j)
            )
              return ne(t), null;
          } else
            2 * $() - i.renderingStartTime > on &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), vn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = $()),
          (t.sibling = null),
          (n = U.current),
          O(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        Dl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(v(156, t.tag));
}
function yd(e, t) {
  switch ((ul(t), t.tag)) {
    case 1:
      return (
        de(t.type) && Hr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nn(),
        L(fe),
        L(oe),
        yl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return vl(t), null;
    case 13:
      if ((L(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(v(340));
        en();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return L(U), null;
    case 4:
      return nn(), null;
    case 10:
      return pl(t.type._context), null;
    case 22:
    case 23:
      return Dl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gr = !1,
  re = !1,
  kd = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function Vt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function Oi(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var Ia = !1;
function wd(e, t) {
  if (((vi = Lr), (e = Gs()), al(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            c = 0,
            m = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              h !== n || (o !== 0 && h.nodeType !== 3) || (a = l + o),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = l + r),
                h.nodeType === 3 && (l += h.nodeValue.length),
                (y = h.firstChild) !== null;

            )
              (p = h), (h = y);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++c === o && (a = l),
                p === i && ++m === r && (s = l),
                (y = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = y;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (yi = { focusedElem: e, selectionRange: n }, Lr = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var w = k.memoizedProps,
                    M = k.memoizedState,
                    f = t.stateNode,
                    u = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : _e(t.type, w),
                      M
                    );
                  f.__reactInternalSnapshotBeforeUpdate = u;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(v(163));
            }
        } catch (g) {
          W(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (k = Ia), (Ia = !1), k;
}
function Dn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Oi(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function po(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ii(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Le], delete t[Wn], delete t[Pi], delete t[nd], delete t[rd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function $u(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function La(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || $u(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Li(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ur));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Li(e, t, n), e = e.sibling; e !== null; ) Li(e, t, n), (e = e.sibling);
}
function Mi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mi(e, t, n), e = e.sibling; e !== null; ) Mi(e, t, n), (e = e.sibling);
}
var J = null,
  De = !1;
function Ye(e, t, n) {
  for (n = n.child; n !== null; ) Qu(e, t, n), (n = n.sibling);
}
function Qu(e, t, n) {
  if (Me && typeof Me.onCommitFiberUnmount == "function")
    try {
      Me.onCommitFiberUnmount(oo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Vt(n, t);
    case 6:
      var r = J,
        o = De;
      (J = null),
        Ye(e, t, n),
        (J = r),
        (De = o),
        J !== null &&
          (De
            ? ((e = J),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : J.removeChild(n.stateNode));
      break;
    case 18:
      J !== null &&
        (De
          ? ((e = J),
            (n = n.stateNode),
            e.nodeType === 8
              ? Uo(e.parentNode, n)
              : e.nodeType === 1 && Uo(e, n),
            Mn(e))
          : Uo(J, n.stateNode));
      break;
    case 4:
      (r = J),
        (o = De),
        (J = n.stateNode.containerInfo),
        (De = !0),
        Ye(e, t, n),
        (J = r),
        (De = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Oi(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Ye(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Vt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          W(n, t, a);
        }
      Ye(e, t, n);
      break;
    case 21:
      Ye(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Ye(e, t, n), (re = r))
        : Ye(e, t, n);
      break;
    default:
      Ye(e, t, n);
  }
}
function Ma(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kd()),
      t.forEach(function (r) {
        var o = Dd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (J = a.stateNode), (De = !1);
              break e;
            case 3:
              (J = a.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (J = a.stateNode.containerInfo), (De = !0);
              break e;
          }
          a = a.return;
        }
        if (J === null) throw Error(v(160));
        Qu(i, l, o), (J = null), (De = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (c) {
        W(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ku(t, e), (t = t.sibling);
}
function Ku(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), Oe(e), r & 4)) {
        try {
          Dn(3, e, e.return), po(3, e);
        } catch (w) {
          W(e, e.return, w);
        }
        try {
          Dn(5, e, e.return);
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 1:
      Te(t, e), Oe(e), r & 512 && n !== null && Vt(n, n.return);
      break;
    case 5:
      if (
        (Te(t, e),
        Oe(e),
        r & 512 && n !== null && Vt(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Fn(o, "");
        } catch (w) {
          W(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && ms(o, i),
              ai(a, l);
            var c = ai(a, i);
            for (l = 0; l < s.length; l += 2) {
              var m = s[l],
                h = s[l + 1];
              m === "style"
                ? ws(o, h)
                : m === "dangerouslySetInnerHTML"
                ? ys(o, h)
                : m === "children"
                ? Fn(o, h)
                : Gi(o, m, h, c);
            }
            switch (a) {
              case "input":
                ni(o, i);
                break;
              case "textarea":
                gs(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? $t(o, !!i.multiple, y, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? $t(o, !!i.multiple, i.defaultValue, !0)
                      : $t(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Wn] = i;
          } catch (w) {
            W(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Te(t, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(v(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          W(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Te(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mn(t.containerInfo);
        } catch (w) {
          W(e, e.return, w);
        }
      break;
    case 4:
      Te(t, e), Oe(e);
      break;
    case 13:
      Te(t, e),
        Oe(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Tl = $())),
        r & 4 && Ma(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (c = re) || m), Te(t, e), (re = c)) : Te(t, e),
        Oe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (P = e, m = e.child; m !== null; ) {
            for (h = P = m; P !== null; ) {
              switch (((p = P), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dn(4, p, p.return);
                  break;
                case 1:
                  Vt(p, p.return);
                  var k = p.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (w) {
                      W(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Vt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ua(h);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (P = y)) : Ua(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (o = h.stateNode),
                  c
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = h.stateNode),
                      (s = h.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = ks("display", l)));
              } catch (w) {
                W(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (w) {
                W(e, e.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Te(t, e), Oe(e), r & 4 && Ma(e);
      break;
    case 21:
      break;
    default:
      Te(t, e), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($u(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(v(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Fn(o, ""), (r.flags &= -33));
          var i = La(e);
          Mi(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = La(e);
          Li(e, a, l);
          break;
        default:
          throw Error(v(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Pd(e, t, n) {
  (P = e), Gu(e);
}
function Gu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var o = P,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || gr;
      if (!l) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || re;
        a = gr;
        var c = re;
        if (((gr = l), (re = s) && !c))
          for (P = o; P !== null; )
            (l = P),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Ha(o)
                : s !== null
                ? ((s.return = l), (P = s))
                : Ha(o);
        for (; i !== null; ) (P = i), Gu(i), (i = i.sibling);
        (P = o), (gr = a), (re = c);
      }
      ja(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (P = i)) : ja(e);
  }
}
function ja(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || po(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : _e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Sa(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Sa(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Mn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(v(163));
          }
        re || (t.flags & 512 && Ii(t));
      } catch (p) {
        W(t, t.return, p);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function Ua(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function Ha(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            po(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, o, s);
            }
          }
          var i = t.return;
          try {
            Ii(t);
          } catch (s) {
            W(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ii(t);
          } catch (s) {
            W(t, l, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      P = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (P = a);
      break;
    }
    P = t.return;
  }
}
var Sd = Math.ceil,
  Xr = Ge.ReactCurrentDispatcher,
  El = Ge.ReactCurrentOwner,
  Re = Ge.ReactCurrentBatchConfig,
  z = 0,
  Z = null,
  Q = null,
  q = 0,
  he = 0,
  bt = ht(0),
  G = 0,
  Gn = null,
  _t = 0,
  ho = 0,
  xl = 0,
  Nn = null,
  ue = null,
  Tl = 0,
  on = 1 / 0,
  Ue = null,
  Zr = !1,
  ji = null,
  st = null,
  vr = !1,
  tt = null,
  Jr = 0,
  An = 0,
  Ui = null,
  _r = -1,
  Dr = 0;
function le() {
  return z & 6 ? $() : _r !== -1 ? _r : (_r = $());
}
function ut(e) {
  return e.mode & 1
    ? z & 2 && q !== 0
      ? q & -q
      : id.transition !== null
      ? (Dr === 0 && (Dr = zs()), Dr)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Us(e.type))),
        e)
    : 1;
}
function ze(e, t, n, r) {
  if (50 < An) throw ((An = 0), (Ui = null), Error(v(185)));
  Xn(e, n, r),
    (!(z & 2) || e !== Z) &&
      (e === Z && (!(z & 2) && (ho |= n), G === 4 && qe(e, q)),
      pe(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((on = $() + 500), uo && mt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  of(e, t);
  var r = Ir(e, e === Z ? q : 0);
  if (r === 0)
    n !== null && Yl(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yl(n), t === 1))
      e.tag === 0 ? od(Ba.bind(null, e)) : ou(Ba.bind(null, e)),
        ed(function () {
          !(z & 6) && mt();
        }),
        (n = null);
    else {
      switch (Fs(r)) {
        case 1:
          n = qi;
          break;
        case 4:
          n = Ns;
          break;
        case 16:
          n = Or;
          break;
        case 536870912:
          n = As;
          break;
        default:
          n = Or;
      }
      n = nc(n, Yu.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yu(e, t) {
  if (((_r = -1), (Dr = 0), z & 6)) throw Error(v(327));
  var n = e.callbackNode;
  if (Xt() && e.callbackNode !== n) return null;
  var r = Ir(e, e === Z ? q : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = qr(e, r);
  else {
    t = r;
    var o = z;
    z |= 2;
    var i = Zu();
    (Z !== e || q !== t) && ((Ue = null), (on = $() + 500), Rt(e, t));
    do
      try {
        Ed();
        break;
      } catch (a) {
        Xu(e, a);
      }
    while (!0);
    dl(),
      (Xr.current = i),
      (z = o),
      Q !== null ? (t = 0) : ((Z = null), (q = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = di(e)), o !== 0 && ((r = o), (t = Hi(e, o)))), t === 1)
    )
      throw ((n = Gn), Rt(e, 0), qe(e, r), pe(e, $()), n);
    if (t === 6) qe(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Rd(o) &&
          ((t = qr(e, r)),
          t === 2 && ((i = di(e)), i !== 0 && ((r = i), (t = Hi(e, i)))),
          t === 1))
      )
        throw ((n = Gn), Rt(e, 0), qe(e, r), pe(e, $()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(v(345));
        case 2:
          kt(e, ue, Ue);
          break;
        case 3:
          if (
            (qe(e, r), (r & 130023424) === r && ((t = Tl + 500 - $()), 10 < t))
          ) {
            if (Ir(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              le(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = wi(kt.bind(null, e, ue, Ue), t);
            break;
          }
          kt(e, ue, Ue);
          break;
        case 4:
          if ((qe(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Ae(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = $() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Sd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = wi(kt.bind(null, e, ue, Ue), r);
            break;
          }
          kt(e, ue, Ue);
          break;
        case 5:
          kt(e, ue, Ue);
          break;
        default:
          throw Error(v(329));
      }
    }
  }
  return pe(e, $()), e.callbackNode === n ? Yu.bind(null, e) : null;
}
function Hi(e, t) {
  var n = Nn;
  return (
    e.current.memoizedState.isDehydrated && (Rt(e, t).flags |= 256),
    (e = qr(e, t)),
    e !== 2 && ((t = ue), (ue = n), t !== null && Bi(t)),
    e
  );
}
function Bi(e) {
  ue === null ? (ue = e) : ue.push.apply(ue, e);
}
function Rd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Fe(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function qe(e, t) {
  for (
    t &= ~xl,
      t &= ~ho,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ae(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ba(e) {
  if (z & 6) throw Error(v(327));
  Xt();
  var t = Ir(e, 0);
  if (!(t & 1)) return pe(e, $()), null;
  var n = qr(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = di(e);
    r !== 0 && ((t = r), (n = Hi(e, r)));
  }
  if (n === 1) throw ((n = Gn), Rt(e, 0), qe(e, t), pe(e, $()), n);
  if (n === 6) throw Error(v(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kt(e, ue, Ue),
    pe(e, $()),
    null
  );
}
function _l(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    (z = n), z === 0 && ((on = $() + 500), uo && mt());
  }
}
function Dt(e) {
  tt !== null && tt.tag === 0 && !(z & 6) && Xt();
  var t = z;
  z |= 1;
  var n = Re.transition,
    r = F;
  try {
    if (((Re.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Re.transition = n), (z = t), !(z & 6) && mt();
  }
}
function Dl() {
  (he = bt.current), L(bt);
}
function Rt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), qf(n)), Q !== null))
    for (n = Q.return; n !== null; ) {
      var r = n;
      switch ((ul(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hr();
          break;
        case 3:
          nn(), L(fe), L(oe), yl();
          break;
        case 5:
          vl(r);
          break;
        case 4:
          nn();
          break;
        case 13:
          L(U);
          break;
        case 19:
          L(U);
          break;
        case 10:
          pl(r.type._context);
          break;
        case 22:
        case 23:
          Dl();
      }
      n = n.return;
    }
  if (
    ((Z = e),
    (Q = e = ct(e.current, null)),
    (q = he = t),
    (G = 0),
    (Gn = null),
    (xl = ho = _t = 0),
    (ue = Nn = null),
    Pt !== null)
  ) {
    for (t = 0; t < Pt.length; t++)
      if (((n = Pt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    Pt = null;
  }
  return e;
}
function Xu(e, t) {
  do {
    var n = Q;
    try {
      if ((dl(), (Er.current = Yr), Gr)) {
        for (var r = H.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Gr = !1;
      }
      if (
        ((Tt = 0),
        (X = K = H = null),
        (_n = !1),
        ($n = 0),
        (El.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Gn = t), (Q = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = q),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            m = a,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var y = _a(l);
          if (y !== null) {
            (y.flags &= -257),
              Da(y, l, a, i, t),
              y.mode & 1 && Ta(i, c, t),
              (t = y),
              (s = c);
            var k = t.updateQueue;
            if (k === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ta(i, c, t), Nl();
              break e;
            }
            s = Error(v(426));
          }
        } else if (j && a.mode & 1) {
          var M = _a(l);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256),
              Da(M, l, a, i, t),
              cl(rn(s, a));
            break e;
          }
        }
        (i = s = rn(s, a)),
          G !== 4 && (G = 2),
          Nn === null ? (Nn = [i]) : Nn.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Fu(i, s, t);
              Pa(i, f);
              break e;
            case 1:
              a = s;
              var u = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (st === null || !st.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Ou(i, a, t);
                Pa(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      qu(n);
    } catch (S) {
      (t = S), Q === n && n !== null && (Q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zu() {
  var e = Xr.current;
  return (Xr.current = Yr), e === null ? Yr : e;
}
function Nl() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    Z === null || (!(_t & 268435455) && !(ho & 268435455)) || qe(Z, q);
}
function qr(e, t) {
  var n = z;
  z |= 2;
  var r = Zu();
  (Z !== e || q !== t) && ((Ue = null), Rt(e, t));
  do
    try {
      Cd();
      break;
    } catch (o) {
      Xu(e, o);
    }
  while (!0);
  if ((dl(), (z = n), (Xr.current = r), Q !== null)) throw Error(v(261));
  return (Z = null), (q = 0), G;
}
function Cd() {
  for (; Q !== null; ) Ju(Q);
}
function Ed() {
  for (; Q !== null && !Yc(); ) Ju(Q);
}
function Ju(e) {
  var t = tc(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? qu(e) : (Q = t),
    (El.current = null);
}
function qu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = yd(n, t)), n !== null)) {
        (n.flags &= 32767), (Q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (Q = null);
        return;
      }
    } else if (((n = vd(n, t, he)), n !== null)) {
      Q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Q = t;
      return;
    }
    Q = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function kt(e, t, n) {
  var r = F,
    o = Re.transition;
  try {
    (Re.transition = null), (F = 1), xd(e, t, n, r);
  } finally {
    (Re.transition = o), (F = r);
  }
  return null;
}
function xd(e, t, n, r) {
  do Xt();
  while (tt !== null);
  if (z & 6) throw Error(v(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(v(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (lf(e, i),
    e === Z && ((Q = Z = null), (q = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vr ||
      ((vr = !0),
      nc(Or, function () {
        return Xt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Re.transition), (Re.transition = null);
    var l = F;
    F = 1;
    var a = z;
    (z |= 4),
      (El.current = null),
      wd(e, n),
      Ku(n, e),
      Qf(yi),
      (Lr = !!vi),
      (yi = vi = null),
      (e.current = n),
      Pd(n),
      Xc(),
      (z = a),
      (F = l),
      (Re.transition = i);
  } else e.current = n;
  if (
    (vr && ((vr = !1), (tt = e), (Jr = o)),
    (i = e.pendingLanes),
    i === 0 && (st = null),
    qc(n.stateNode),
    pe(e, $()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Zr) throw ((Zr = !1), (e = ji), (ji = null), e);
  return (
    Jr & 1 && e.tag !== 0 && Xt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ui ? An++ : ((An = 0), (Ui = e))) : (An = 0),
    mt(),
    null
  );
}
function Xt() {
  if (tt !== null) {
    var e = Fs(Jr),
      t = Re.transition,
      n = F;
    try {
      if (((Re.transition = null), (F = 16 > e ? 16 : e), tt === null))
        var r = !1;
      else {
        if (((e = tt), (tt = null), (Jr = 0), z & 6)) throw Error(v(331));
        var o = z;
        for (z |= 4, P = e.current; P !== null; ) {
          var i = P,
            l = i.child;
          if (P.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var c = a[s];
                for (P = c; P !== null; ) {
                  var m = P;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dn(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (P = h);
                  else
                    for (; P !== null; ) {
                      m = P;
                      var p = m.sibling,
                        y = m.return;
                      if ((bu(m), m === c)) {
                        P = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (P = p);
                        break;
                      }
                      P = y;
                    }
                }
              }
              var k = i.alternate;
              if (k !== null) {
                var w = k.child;
                if (w !== null) {
                  k.child = null;
                  do {
                    var M = w.sibling;
                    (w.sibling = null), (w = M);
                  } while (w !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (P = l);
          else
            e: for (; P !== null; ) {
              if (((i = P), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (P = f);
                break e;
              }
              P = i.return;
            }
        }
        var u = e.current;
        for (P = u; P !== null; ) {
          l = P;
          var d = l.child;
          if (l.subtreeFlags & 2064 && d !== null) (d.return = l), (P = d);
          else
            e: for (l = u; P !== null; ) {
              if (((a = P), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      po(9, a);
                  }
                } catch (S) {
                  W(a, a.return, S);
                }
              if (a === l) {
                P = null;
                break e;
              }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (P = g);
                break e;
              }
              P = a.return;
            }
        }
        if (
          ((z = o), mt(), Me && typeof Me.onPostCommitFiberRoot == "function")
        )
          try {
            Me.onPostCommitFiberRoot(oo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Re.transition = t);
    }
  }
  return !1;
}
function Wa(e, t, n) {
  (t = rn(n, t)),
    (t = Fu(e, t, 1)),
    (e = at(e, t, 1)),
    (t = le()),
    e !== null && (Xn(e, 1, t), pe(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) Wa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Wa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (st === null || !st.has(r)))
        ) {
          (e = rn(n, e)),
            (e = Ou(t, e, 1)),
            (t = at(t, e, 1)),
            (e = le()),
            t !== null && (Xn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Td(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Z === e &&
      (q & n) === n &&
      (G === 4 || (G === 3 && (q & 130023424) === q && 500 > $() - Tl)
        ? Rt(e, 0)
        : (xl |= n)),
    pe(e, t);
}
function ec(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ar), (ar <<= 1), !(ar & 130023424) && (ar = 4194304))
      : (t = 1));
  var n = le();
  (e = Qe(e, t)), e !== null && (Xn(e, t, n), pe(e, n));
}
function _d(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ec(e, n);
}
function Dd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(v(314));
  }
  r !== null && r.delete(t), ec(e, n);
}
var tc;
tc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), gd(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), j && t.flags & 1048576 && iu(t, Vr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Tr(e, t), (e = t.pendingProps);
      var o = qt(t, oe.current);
      Yt(t, n), (o = wl(null, t, r, e, o, n));
      var i = Pl();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            de(r) ? ((i = !0), Br(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ml(t),
            (o.updater = fo),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ti(t, r, e, n),
            (t = Ni(null, t, r, !0, i, n)))
          : ((t.tag = 0), j && i && sl(t), ie(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Tr(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Ad(r)),
          (e = _e(r, e)),
          o)
        ) {
          case 0:
            t = Di(null, t, r, e, n);
            break e;
          case 1:
            t = za(null, t, r, e, n);
            break e;
          case 11:
            t = Na(null, t, r, e, n);
            break e;
          case 14:
            t = Aa(null, t, r, _e(r.type, e), n);
            break e;
        }
        throw Error(v(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _e(r, o)),
        Di(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _e(r, o)),
        za(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((ju(t), e === null)) throw Error(v(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          fu(e, t),
          Qr(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = rn(Error(v(423)), t)), (t = Fa(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = rn(Error(v(424)), t)), (t = Fa(e, t, r, n, o));
            break e;
          } else
            for (
              me = lt(t.stateNode.containerInfo.firstChild),
                ge = t,
                j = !0,
                Ne = null,
                n = uu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((en(), r === o)) {
            t = Ke(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        du(t),
        e === null && Ci(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        ki(r, o) ? (l = null) : i !== null && ki(r, i) && (t.flags |= 32),
        Mu(e, t),
        ie(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ci(t), null;
    case 13:
      return Uu(e, t, n);
    case 4:
      return (
        gl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tn(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _e(r, o)),
        Na(e, t, r, o, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          O(br, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Fe(i.value, l)) {
            if (i.children === o.children && !fe.current) {
              t = Ke(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ve(-1, n & -n)), (s.tag = 2);
                      var c = i.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (c.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ei(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(v(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  Ei(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ie(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Yt(t, n),
        (o = Ce(o)),
        (r = r(o)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = _e(r, t.pendingProps)),
        (o = _e(r.type, o)),
        Aa(e, t, r, o, n)
      );
    case 15:
      return Iu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _e(r, o)),
        Tr(e, t),
        (t.tag = 1),
        de(r) ? ((e = !0), Br(t)) : (e = !1),
        Yt(t, n),
        zu(t, r, o),
        Ti(t, r, o, n),
        Ni(null, t, r, !0, e, n)
      );
    case 19:
      return Hu(e, t, n);
    case 22:
      return Lu(e, t, n);
  }
  throw Error(v(156, t.tag));
};
function nc(e, t) {
  return Ds(e, t);
}
function Nd(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Se(e, t, n, r) {
  return new Nd(e, t, n, r);
}
function Al(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ad(e) {
  if (typeof e == "function") return Al(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xi)) return 11;
    if (e === Zi) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Se(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Nr(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Al(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Ot:
        return Ct(n.children, o, i, t);
      case Yi:
        (l = 8), (o |= 8);
        break;
      case Zo:
        return (
          (e = Se(12, n, t, o | 2)), (e.elementType = Zo), (e.lanes = i), e
        );
      case Jo:
        return (e = Se(13, n, t, o)), (e.elementType = Jo), (e.lanes = i), e;
      case qo:
        return (e = Se(19, n, t, o)), (e.elementType = qo), (e.lanes = i), e;
      case ds:
        return mo(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case cs:
              l = 10;
              break e;
            case fs:
              l = 9;
              break e;
            case Xi:
              l = 11;
              break e;
            case Zi:
              l = 14;
              break e;
            case Xe:
              (l = 16), (r = null);
              break e;
          }
        throw Error(v(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Se(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ct(e, t, n, r) {
  return (e = Se(7, e, r, t)), (e.lanes = n), e;
}
function mo(e, t, n, r) {
  return (
    (e = Se(22, e, r, t)),
    (e.elementType = ds),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ko(e, t, n) {
  return (e = Se(6, e, null, t)), (e.lanes = n), e;
}
function Go(e, t, n) {
  return (
    (t = Se(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function zd(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _o(0)),
    (this.expirationTimes = _o(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _o(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function zl(e, t, n, r, o, i, l, a, s) {
  return (
    (e = new zd(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Se(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ml(i),
    e
  );
}
function Fd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ft,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function rc(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (At(e) !== e || e.tag !== 1) throw Error(v(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (de(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(v(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (de(n)) return ru(e, n, t);
  }
  return t;
}
function oc(e, t, n, r, o, i, l, a, s) {
  return (
    (e = zl(n, r, !0, e, o, i, l, a, s)),
    (e.context = rc(null)),
    (n = e.current),
    (r = le()),
    (o = ut(n)),
    (i = Ve(r, o)),
    (i.callback = t ?? null),
    at(n, i, o),
    (e.current.lanes = o),
    Xn(e, o, r),
    pe(e, r),
    e
  );
}
function go(e, t, n, r) {
  var o = t.current,
    i = le(),
    l = ut(o);
  return (
    (n = rc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ve(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(o, t, l)),
    e !== null && (ze(e, o, l, i), Cr(e, o, l)),
    l
  );
}
function eo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Va(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Fl(e, t) {
  Va(e, t), (e = e.alternate) && Va(e, t);
}
function Od() {
  return null;
}
var ic =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ol(e) {
  this._internalRoot = e;
}
vo.prototype.render = Ol.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(v(409));
  go(e, t, null, null);
};
vo.prototype.unmount = Ol.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Dt(function () {
      go(null, e, null, null);
    }),
      (t[$e] = null);
  }
};
function vo(e) {
  this._internalRoot = e;
}
vo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ls();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Je.length && t !== 0 && t < Je[n].priority; n++);
    Je.splice(n, 0, e), n === 0 && js(e);
  }
};
function Il(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ba() {}
function Id(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var c = eo(l);
        i.call(c);
      };
    }
    var l = oc(t, r, e, 0, null, !1, !1, "", ba);
    return (
      (e._reactRootContainer = l),
      (e[$e] = l.current),
      Hn(e.nodeType === 8 ? e.parentNode : e),
      Dt(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = eo(s);
      a.call(c);
    };
  }
  var s = zl(e, 0, !1, null, null, !1, !1, "", ba);
  return (
    (e._reactRootContainer = s),
    (e[$e] = s.current),
    Hn(e.nodeType === 8 ? e.parentNode : e),
    Dt(function () {
      go(t, s, n, r);
    }),
    s
  );
}
function ko(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = eo(l);
        a.call(s);
      };
    }
    go(t, l, e, o);
  } else l = Id(n, t, e, o, r);
  return eo(l);
}
Os = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 &&
          (el(t, n | 1), pe(t, $()), !(z & 6) && ((on = $() + 500), mt()));
      }
      break;
    case 13:
      Dt(function () {
        var r = Qe(e, 1);
        if (r !== null) {
          var o = le();
          ze(r, e, 1, o);
        }
      }),
        Fl(e, 1);
  }
};
tl = function (e) {
  if (e.tag === 13) {
    var t = Qe(e, 134217728);
    if (t !== null) {
      var n = le();
      ze(t, e, 134217728, n);
    }
    Fl(e, 134217728);
  }
};
Is = function (e) {
  if (e.tag === 13) {
    var t = ut(e),
      n = Qe(e, t);
    if (n !== null) {
      var r = le();
      ze(n, e, t, r);
    }
    Fl(e, t);
  }
};
Ls = function () {
  return F;
};
Ms = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
ui = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ni(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = so(r);
            if (!o) throw Error(v(90));
            hs(r), ni(r, o);
          }
        }
      }
      break;
    case "textarea":
      gs(e, n);
      break;
    case "select":
      (t = n.value), t != null && $t(e, !!n.multiple, t, !1);
  }
};
Rs = _l;
Cs = Dt;
var Ld = { usingClientEntryPoint: !1, Events: [Jn, jt, so, Ps, Ss, _l] },
  yn = {
    findFiberByHostInstance: wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Md = {
    bundleType: yn.bundleType,
    version: yn.version,
    rendererPackageName: yn.rendererPackageName,
    rendererConfig: yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ts(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yn.findFiberByHostInstance || Od,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber)
    try {
      (oo = yr.inject(Md)), (Me = yr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld;
ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Il(t)) throw Error(v(200));
  return Fd(e, t, null, n);
};
ye.createRoot = function (e, t) {
  if (!Il(e)) throw Error(v(299));
  var n = !1,
    r = "",
    o = ic;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = zl(e, 1, !1, null, null, n, !1, r, o)),
    (e[$e] = t.current),
    Hn(e.nodeType === 8 ? e.parentNode : e),
    new Ol(t)
  );
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(v(188))
      : ((e = Object.keys(e).join(",")), Error(v(268, e)));
  return (e = Ts(t)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return Dt(e);
};
ye.hydrate = function (e, t, n) {
  if (!yo(t)) throw Error(v(200));
  return ko(null, e, t, !0, n);
};
ye.hydrateRoot = function (e, t, n) {
  if (!Il(e)) throw Error(v(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = ic;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = oc(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[$e] = t.current),
    Hn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new vo(t);
};
ye.render = function (e, t, n) {
  if (!yo(t)) throw Error(v(200));
  return ko(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function (e) {
  if (!yo(e)) throw Error(v(40));
  return e._reactRootContainer
    ? (Dt(function () {
        ko(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[$e] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = _l;
ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!yo(n)) throw Error(v(200));
  if (e == null || e._reactInternals === void 0) throw Error(v(38));
  return ko(e, t, n, !1, r);
};
ye.version = "18.3.1-next-f1338f8080-20240426";
function lc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc);
    } catch (e) {
      console.error(e);
    }
}
lc(), (ls.exports = ye);
var jd = ls.exports,
  $a = jd;
(Yo.createRoot = $a.createRoot), (Yo.hydrateRoot = $a.hydrateRoot);
const Qa = [
    {
      id: 1,
      name: "Bulbasaur",
      genus: "Seed Pokémon",
      description:
        "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/1.webp",
      types: ["Grass", "Poison"],
      abilities: [
        {
          name: "Overgrow",
          effect:
            "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
          description: "Ups GRASS moves in a pinch.",
        },
        {
          name: "Chlorophyll",
          effect:
            "This Pokémon's Speed is doubled during strong sunlight.  This bonus does not count as a stat modifier.",
          description: "Raises SPEED in sunshine.",
        },
      ],
      stats: {
        HP: 45,
        Attack: 49,
        Defense: 49,
        "Special Attack": 65,
        "Special Defense": 65,
        Speed: 45,
      },
      locations: ["Cerulean City", "Pallet Town", "Lumiose City"],
      color: "#d1e8dd",
    },
    {
      id: 2,
      name: "Ivysaur",
      genus: "Seed Pokémon",
      description:
        "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/2.webp",
      types: ["Grass", "Poison"],
      abilities: [
        {
          name: "Overgrow",
          effect:
            "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
          description: "Ups GRASS moves in a pinch.",
        },
        {
          name: "Chlorophyll",
          effect:
            "This Pokémon's Speed is doubled during strong sunlight.  This bonus does not count as a stat modifier.",
          description: "Raises SPEED in sunshine.",
        },
      ],
      stats: {
        HP: 60,
        Attack: 62,
        Defense: 63,
        "Special Attack": 80,
        "Special Defense": 80,
        Speed: 60,
      },
      locations: [],
      color: "#bbd4db",
    },
    {
      id: 3,
      name: "Venusaur",
      genus: "Seed Pokémon",
      description:
        "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/3.webp",
      types: ["Grass", "Poison"],
      abilities: [
        {
          name: "Overgrow",
          effect:
            "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
          description: "Ups GRASS moves in a pinch.",
        },
        {
          name: "Chlorophyll",
          effect:
            "This Pokémon's Speed is doubled during strong sunlight.  This bonus does not count as a stat modifier.",
          description: "Raises SPEED in sunshine.",
        },
      ],
      stats: {
        HP: 80,
        Attack: 82,
        Defense: 83,
        "Special Attack": 100,
        "Special Defense": 100,
        Speed: 80,
      },
      locations: [],
      color: "#dbd4d8",
    },
    {
      id: 4,
      name: "Charmander",
      genus: "Lizard Pokémon",
      description:
        "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/4.webp",
      types: ["Fire"],
      abilities: [
        {
          name: "Blaze",
          effect:
            "When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.",
          description: "Ups FIRE moves in a pinch.",
        },
        {
          name: "Solar Power",
          effect:
            "During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.",
          description: "Boosts Sp. Atk, but lowers HP in sunshine.",
        },
      ],
      stats: {
        HP: 39,
        Attack: 52,
        Defense: 43,
        "Special Attack": 60,
        "Special Defense": 50,
        Speed: 65,
      },
      locations: ["Pallet Town", "Route 24", "Lumiose City"],
      color: "#f6ddcb",
    },
    {
      id: 5,
      name: "Charmeleon",
      genus: "Flame Pokémon",
      description:
        "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/5.webp",
      types: ["Fire"],
      abilities: [
        {
          name: "Blaze",
          effect:
            "When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.",
          description: "Ups FIRE moves in a pinch.",
        },
        {
          name: "Solar Power",
          effect:
            "During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.",
          description: "Boosts Sp. Atk, but lowers HP in sunshine.",
        },
      ],
      stats: {
        HP: 58,
        Attack: 64,
        Defense: 58,
        "Special Attack": 80,
        "Special Defense": 65,
        Speed: 80,
      },
      locations: [],
      color: "#f3cbc5",
    },
    {
      id: 6,
      name: "Charizard",
      genus: "Flame Pokémon",
      description:
        "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/6.webp",
      types: ["Fire", "Flying"],
      abilities: [
        {
          name: "Blaze",
          effect:
            "When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.",
          description: "Ups FIRE moves in a pinch.",
        },
        {
          name: "Solar Power",
          effect:
            "During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.",
          description: "Boosts Sp. Atk, but lowers HP in sunshine.",
        },
      ],
      stats: {
        HP: 78,
        Attack: 84,
        Defense: 78,
        "Special Attack": 109,
        "Special Defense": 85,
        Speed: 100,
      },
      locations: [],
      color: "#b8d4da",
    },
    {
      id: 7,
      name: "Squirtle",
      genus: "Tiny Turtle Pokémon",
      description:
        "Shoots water at prey while in the water. Withdraws into its shell when in danger.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/7.webp",
      types: ["Water"],
      abilities: [
        {
          name: "Torrent",
          effect:
            "When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.",
          description: "Ups WATER moves in a pinch.",
        },
        {
          name: "Rain Dish",
          effect:
            "This Pokémon heals for 1/16 of its maximum HP after each turn during rain.",
          description: "The Pokémon gradually recovers HP in rain.",
        },
      ],
      stats: {
        HP: 44,
        Attack: 48,
        Defense: 65,
        "Special Attack": 50,
        "Special Defense": 64,
        Speed: 43,
      },
      locations: ["Vermilion City", "Pallet Town", "Lumiose City"],
      color: "#c1d7de",
    },
    {
      id: 8,
      name: "Wartortle",
      genus: "Turtle Pokémon",
      description:
        "When tapped, this POKéMON will pull in its head, but its tail will still stick out a little bit.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/8.webp",
      types: ["Water"],
      abilities: [
        {
          name: "Torrent",
          effect:
            "When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.",
          description: "Ups WATER moves in a pinch.",
        },
        {
          name: "Rain Dish",
          effect:
            "This Pokémon heals for 1/16 of its maximum HP after each turn during rain.",
          description: "The Pokémon gradually recovers HP in rain.",
        },
      ],
      stats: {
        HP: 59,
        Attack: 63,
        Defense: 80,
        "Special Attack": 65,
        "Special Defense": 80,
        Speed: 58,
      },
      locations: [],
      color: "#dfe4f0",
    },
    {
      id: 9,
      name: "Blastoise",
      genus: "Shellfish Pokémon",
      description:
        "It deliberately makes itself heavy so it can withstand the recoil of the water jets it fires.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/9.webp",
      types: ["Water"],
      abilities: [
        {
          name: "Torrent",
          effect:
            "When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.",
          description: "Ups WATER moves in a pinch.",
        },
        {
          name: "Rain Dish",
          effect:
            "This Pokémon heals for 1/16 of its maximum HP after each turn during rain.",
          description: "The Pokémon gradually recovers HP in rain.",
        },
      ],
      stats: {
        HP: 79,
        Attack: 83,
        Defense: 100,
        "Special Attack": 85,
        "Special Defense": 105,
        Speed: 78,
      },
      locations: [],
      color: "#d1dceb",
    },
    {
      id: 10,
      name: "Caterpie",
      genus: "Worm Pokémon",
      description:
        "It releases a stench from its red antenna to repel enemies. It grows by molting repeatedly.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/10.webp",
      types: ["Bug"],
      abilities: [
        {
          name: "Shield Dust",
          effect: `This Pokémon is immune to the extra effects of moves used against it.  An extra effect is a move's chance, listed as an "effect chance", to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.`,
          description: "Prevents added effects.",
        },
        {
          name: "Run Away",
          effect:
            "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
          description: "Makes escaping easier.",
        },
      ],
      stats: {
        HP: 45,
        Attack: 30,
        Defense: 35,
        "Special Attack": 20,
        "Special Defense": 20,
        Speed: 45,
      },
      locations: [
        "Eterna Forest",
        "Route 204",
        "Route 30",
        "Route 31",
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "National Park",
        "Unknown; all bugs",
        "Route 36",
        "Route 37",
        "Route 38",
        "Route 39",
        "Lake of Rage",
        "Route 26",
        "Route 27",
        "Route 2",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Pattern Bush",
        "Santalune Forest",
        "Azalea Town",
      ],
      color: "#d0e9c9",
    },
    {
      id: 11,
      name: "Metapod",
      genus: "Cocoon Pokémon",
      description:
        "This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/11.webp",
      types: ["Bug"],
      abilities: [
        {
          name: "Shed Skin",
          effect:
            "After each turn, this Pokémon has a 33% of being cured of any major status ailment.",
          description: "Heals the body by shedding.",
        },
      ],
      stats: {
        HP: 50,
        Attack: 20,
        Defense: 55,
        "Special Attack": 25,
        "Special Defense": 25,
        Speed: 30,
      },
      locations: [
        "Eterna Forest",
        "Route 30",
        "Route 31",
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "National Park",
        "Route 36",
        "Route 37",
        "Route 38",
        "Route 39",
        "Lake of Rage",
        "Route 26",
        "Route 27",
        "Route 2",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Pattern Bush",
        "Route 12",
        "Santalune Forest",
        "Azalea Town",
      ],
      color: "#cddbb9",
    },
    {
      id: 12,
      name: "Butterfree",
      genus: "Butterfly Pokémon",
      description:
        "In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/12.webp",
      types: ["Bug", "Flying"],
      abilities: [
        {
          name: "Compound Eyes",
          effect:
            "This Pokémon's moves have 1.3× their accuracy.  This ability has no effect on the one-hit KO moves (fissure, guillotine, horn drill, and sheer cold).  Overworld: If the first Pokémon in the party has this ability, the chance of a wild Pokémon holding a particular item is raised from 50%, 5%, or 1% to 60%, 20%, or 5%, respectively.",
          description: "Raises accuracy.",
        },
        {
          name: "Tinted Lens",
          effect:
            "This Pokémon deals twice as much damage with moves that are not very effective against the target.",
          description: "Powers up “not very effective” moves.",
        },
      ],
      stats: {
        HP: 60,
        Attack: 45,
        Defense: 50,
        "Special Attack": 90,
        "Special Defense": 80,
        Speed: 70,
      },
      locations: [
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "Route 36",
        "Route 37",
        "Route 38",
        "Route 39",
        "Lake of Rage",
        "Route 26",
        "Route 27",
        "Route 2",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Route 12",
        "Azalea Town",
      ],
      color: "#f9fafd",
    },
    {
      id: 13,
      name: "Weedle",
      genus: "Hairy Bug Pokémon",
      description:
        "Often found in forests, eating leaves. It has a sharp venomous stinger on its head.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/13.webp",
      types: ["Bug", "Poison"],
      abilities: [
        {
          name: "Shield Dust",
          effect: `This Pokémon is immune to the extra effects of moves used against it.  An extra effect is a move's chance, listed as an "effect chance", to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.`,
          description: "Prevents added effects.",
        },
        {
          name: "Run Away",
          effect:
            "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
          description: "Makes escaping easier.",
        },
      ],
      stats: {
        HP: 40,
        Attack: 35,
        Defense: 30,
        "Special Attack": 20,
        "Special Defense": 20,
        Speed: 50,
      },
      locations: [
        "Eterna Forest",
        "Route 204",
        "Route 30",
        "Route 31",
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "National Park",
        "Unknown; all bugs",
        "Route 36",
        "Route 37",
        "Route 38",
        "Route 39",
        "Lake of Rage",
        "Route 26",
        "Route 27",
        "Route 2",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Pattern Bush",
        "Santalune Forest",
        "Azalea Town",
      ],
      color: "#dfcfbc",
    },
    {
      id: 14,
      name: "Kakuna",
      genus: "Cocoon Pokémon",
      description:
        "Almost incapable of moving, this POKéMON can only harden its shell to protect itself from predators.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/14.webp",
      types: ["Bug", "Poison"],
      abilities: [
        {
          name: "Shed Skin",
          effect:
            "After each turn, this Pokémon has a 33% of being cured of any major status ailment.",
          description: "Heals the body by shedding.",
        },
      ],
      stats: {
        HP: 45,
        Attack: 25,
        Defense: 50,
        "Special Attack": 25,
        "Special Defense": 25,
        Speed: 35,
      },
      locations: [
        "Eterna Forest",
        "Route 30",
        "Route 31",
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "National Park",
        "Route 36",
        "Route 37",
        "Route 38",
        "Route 39",
        "Lake of Rage",
        "Route 26",
        "Route 27",
        "Route 2",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Pattern Bush",
        "Route 12",
        "Santalune Forest",
        "Azalea Town",
      ],
      color: "#ece3c3",
    },
    {
      id: 15,
      name: "Beedrill",
      genus: "Poison Bee Pokémon",
      description:
        "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/15.webp",
      types: ["Bug", "Poison"],
      abilities: [
        {
          name: "Swarm",
          effect:
            "When this Pokémon has 1/3 or less of its HP remaining, its bug-type moves inflict 1.5× as much regular damage.  Overworld: If the lead Pokémon has this ability, the wild encounter rate is increased.",
          description: "Ups BUG moves in a pinch.",
        },
        {
          name: "Sniper",
          effect:
            "This Pokémon inflicts triple damage with critical hits, rather than the usual double damage.",
          description: "Powers up moves if they become critical hits.",
        },
      ],
      stats: {
        HP: 65,
        Attack: 90,
        Defense: 40,
        "Special Attack": 45,
        "Special Defense": 80,
        Speed: 75,
      },
      locations: [
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "Route 36",
        "Route 37",
        "Route 38",
        "Route 39",
        "Lake of Rage",
        "Route 26",
        "Route 27",
        "Route 2",
        "Viridian Forest",
        "Route 12",
        "Azalea Town",
      ],
      color: "#e6d7ba",
    },
    {
      id: 16,
      name: "Pidgey",
      genus: "Tiny Bird Pokémon",
      description:
        "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/16.webp",
      types: ["Normal", "Flying"],
      abilities: [
        {
          name: "Keen Eye",
          effect:
            "This Pokémon cannot have its accuracy lowered.  This ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          description: "Prevents loss of accuracy.",
        },
        {
          name: "Tangled Feet",
          effect: "When this Pokémon is confused, it has twice its evasion.",
          description: "Raises evasion if the Pokémon is confused.",
        },
        {
          name: "Big Pecks",
          effect:
            "This Pokémon's Defense cannot be lowered by other Pokémon.  This Pokémon can still be passed negative Defense modifiers through heart swap or guard swap.",
          description: "Protects the Pokémon from Defense-lowering attacks.",
        },
      ],
      stats: {
        HP: 40,
        Attack: 45,
        Defense: 40,
        "Special Attack": 35,
        "Special Defense": 35,
        Speed: 56,
      },
      locations: [
        "Route 229",
        "Route 29",
        "Route 30",
        "Route 31",
        "Route 32",
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "National Park",
        "Route 36",
        "Route 37",
        "Route 12",
        "Route 1",
        "Route 2",
        "Route 3",
        "Route 5",
        "Route 6",
        "Route 7",
        "Route 8",
        "Route 11",
        "Route 13",
        "Route 14",
        "Route 15",
        "Sea Route 21",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Berry Forest",
        "Bond Bridge",
        "Five Isle Meadow",
      ],
      color: "#e5d5bf",
    },
    {
      id: 17,
      name: "Pidgeotto",
      genus: "Bird Pokémon",
      description:
        "Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/17.webp",
      types: ["Normal", "Flying"],
      abilities: [
        {
          name: "Keen Eye",
          effect:
            "This Pokémon cannot have its accuracy lowered.  This ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          description: "Prevents loss of accuracy.",
        },
        {
          name: "Tangled Feet",
          effect: "When this Pokémon is confused, it has twice its evasion.",
          description: "Raises evasion if the Pokémon is confused.",
        },
        {
          name: "Big Pecks",
          effect:
            "This Pokémon's Defense cannot be lowered by other Pokémon.  This Pokémon can still be passed negative Defense modifiers through heart swap or guard swap.",
          description: "Protects the Pokémon from Defense-lowering attacks.",
        },
      ],
      stats: {
        HP: 63,
        Attack: 60,
        Defense: 55,
        "Special Attack": 50,
        "Special Defense": 50,
        Speed: 71,
      },
      locations: [
        "Route 37",
        "Route 38",
        "Route 39",
        "Route 43",
        "Route 12",
        "Route 2",
        "Route 5",
        "Route 6",
        "Route 7",
        "Route 8",
        "Route 11",
        "Route 13",
        "Route 14",
        "Route 15",
        "Sea Route 21",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Berry Forest",
        "Bond Bridge",
        "Five Isle Meadow",
      ],
      color: "#e7d8dc",
    },
    {
      id: 18,
      name: "Pidgeot",
      genus: "Bird Pokémon",
      description:
        "When hunting, it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/18.webp",
      types: ["Normal", "Flying"],
      abilities: [
        {
          name: "Keen Eye",
          effect:
            "This Pokémon cannot have its accuracy lowered.  This ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          description: "Prevents loss of accuracy.",
        },
        {
          name: "Tangled Feet",
          effect: "When this Pokémon is confused, it has twice its evasion.",
          description: "Raises evasion if the Pokémon is confused.",
        },
        {
          name: "Big Pecks",
          effect:
            "This Pokémon's Defense cannot be lowered by other Pokémon.  This Pokémon can still be passed negative Defense modifiers through heart swap or guard swap.",
          description: "Protects the Pokémon from Defense-lowering attacks.",
        },
      ],
      stats: {
        HP: 83,
        Attack: 80,
        Defense: 75,
        "Special Attack": 70,
        "Special Defense": 70,
        Speed: 101,
      },
      locations: [],
      color: "#f8f3e2",
    },
    {
      id: 19,
      name: "Rattata",
      genus: "Mouse Pokémon",
      description:
        "Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/19.webp",
      types: ["Normal"],
      abilities: [
        {
          name: "Run Away",
          effect:
            "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
          description: "Makes escaping easier.",
        },
        {
          name: "Guts",
          effect:
            "Whenever this Pokémon is asleep, burned, paralyzed, or poisoned, it has 1.5× its Attack.  This Pokémon is not affected by the usual Attack cut from a burn.  This bonus does not count as a stat modifier.",
          description: "Ups ATTACK if suffering.",
        },
        {
          name: "Hustle",
          effect:
            "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.  Special moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.  Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
          description: "Trades accuracy for power.",
        },
      ],
      stats: {
        HP: 30,
        Attack: 56,
        Defense: 35,
        "Special Attack": 25,
        "Special Defense": 35,
        Speed: 72,
      },
      locations: [
        "Route 225",
        "Sea Route 226",
        "Route 29",
        "Route 30",
        "Route 31",
        "Sprout Tower",
        "Route 32",
        "Union Cave",
        "Route 33",
        "Route 34",
        "Burned Tower",
        "Bell Tower",
        "Route 38",
        "Route 39",
        "Route 42",
        "Mt. Mortar",
        "Route 46",
        "Unknown; all Rattata",
        "Route 1",
        "Route 2",
        "Route 3",
        "Route 4",
        "Route 5",
        "Route 6",
        "Route 7",
        "Route 8",
        "Route 9",
        "Route 10",
        "Route 11",
        "Route 16",
        "Route 17",
        "Route 18",
        "Sea Route 21",
        "Route 22",
        "Tohjo Falls",
        "Pokémon Mansion",
        "Castelia City",
        "Castelia Sewers",
        "Relic Passage",
      ],
      color: "#d8ccdd",
    },
    {
      id: 20,
      name: "Raticate",
      genus: "Mouse Pokémon",
      description:
        "It uses its whiskers to maintain its balance. It apparently slows down if they are cut off.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/20.webp",
      types: ["Normal"],
      abilities: [
        {
          name: "Run Away",
          effect:
            "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
          description: "Makes escaping easier.",
        },
        {
          name: "Guts",
          effect:
            "Whenever this Pokémon is asleep, burned, paralyzed, or poisoned, it has 1.5× its Attack.  This Pokémon is not affected by the usual Attack cut from a burn.  This bonus does not count as a stat modifier.",
          description: "Ups ATTACK if suffering.",
        },
        {
          name: "Hustle",
          effect:
            "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.  Special moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.  Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
          description: "Trades accuracy for power.",
        },
      ],
      stats: {
        HP: 55,
        Attack: 81,
        Defense: 60,
        "Special Attack": 50,
        "Special Defense": 70,
        Speed: 97,
      },
      locations: [
        "Route 225",
        "Sea Route 226",
        "Union Cave",
        "Burned Tower",
        "Route 38",
        "Route 39",
        "Route 42",
        "Mt. Mortar",
        "Route 43",
        "Route 47",
        "Route 26",
        "Route 27",
        "Route 1",
        "Route 3",
        "Route 4",
        "Route 6",
        "Route 7",
        "Route 9",
        "Route 10",
        "Route 11",
        "Route 16",
        "Route 17",
        "Route 18",
        "Sea Route 21",
        "Tohjo Falls",
        "Pokémon Mansion",
        "Dreamyard",
        "Strange House",
        "Relic Passage",
      ],
      color: "#d3c2b0",
    },
    {
      id: 21,
      name: "Spearow",
      genus: "Tiny Bird Pokémon",
      description:
        "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/21.webp",
      types: ["Normal", "Flying"],
      abilities: [
        {
          name: "Keen Eye",
          effect:
            "This Pokémon cannot have its accuracy lowered.  This ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          description: "Prevents loss of accuracy.",
        },
        {
          name: "Sniper",
          effect:
            "This Pokémon inflicts triple damage with critical hits, rather than the usual double damage.",
          description: "Powers up moves if they become critical hits.",
        },
      ],
      stats: {
        HP: 40,
        Attack: 60,
        Defense: 30,
        "Special Attack": 31,
        "Special Defense": 31,
        Speed: 70,
      },
      locations: [
        "Route 225",
        "Sea Route 226",
        "Route 29",
        "Route 30",
        "Route 31",
        "Route 32",
        "Route 33",
        "Route 42",
        "Route 43",
        "Route 44",
        "Route 45",
        "Route 46",
        "Route 47",
        "Route 3",
        "Route 4",
        "Route 7",
        "Route 9",
        "Route 10",
        "Route 11",
        "Route 16",
        "Route 17",
        "Route 18",
        "Route 22",
        "Route 23",
        "Mt. Ember",
        "Kindle Road",
        "Treasure Beach",
        "Cape Brink",
        "Water Path",
        "Ruin Valley",
        "Canyon Entrance",
        "Goldenrod City",
        "Azalea Town",
      ],
      color: "#edc5c3",
    },
    {
      id: 22,
      name: "Fearow",
      genus: "Beak Pokémon",
      description:
        "With its huge and magnificent wings, it can keep aloft without ever having to land for rest.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/22.webp",
      types: ["Normal", "Flying"],
      abilities: [
        {
          name: "Keen Eye",
          effect:
            "This Pokémon cannot have its accuracy lowered.  This ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          description: "Prevents loss of accuracy.",
        },
        {
          name: "Sniper",
          effect:
            "This Pokémon inflicts triple damage with critical hits, rather than the usual double damage.",
          description: "Powers up moves if they become critical hits.",
        },
      ],
      stats: {
        HP: 65,
        Attack: 90,
        Defense: 65,
        "Special Attack": 61,
        "Special Defense": 61,
        Speed: 100,
      },
      locations: [
        "Stark Mountain",
        "Route 225",
        "Route 227",
        "Sea Route 226",
        "Route 42",
        "Route 47",
        "Route 48",
        "Route 9",
        "Route 10",
        "Route 16",
        "Route 17",
        "Route 18",
        "Route 22",
        "Route 23",
        "Mt. Ember",
        "Kindle Road",
        "Treasure Beach",
        "Cape Brink",
        "Water Path",
        "Ruin Valley",
        "Canyon Entrance",
        "Sevault Canyon",
        "Route 15",
      ],
      color: "#dcc8b8",
    },
    {
      id: 23,
      name: "Ekans",
      genus: "Snake Pokémon",
      description:
        "Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/23.webp",
      types: ["Poison"],
      abilities: [
        {
          name: "Intimidate",
          effect:
            "When this Pokémon enters battle, the opponent's Attack is lowered by one stage.  In a double battle, both opponents are affected.  This ability also takes effect when acquired during a battle, but will not take effect again if lost and reobtained without leaving battle.  This ability has no effect on an opponent that has a substitute.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          description: "Lowers the foe's ATTACK.",
        },
        {
          name: "Shed Skin",
          effect:
            "After each turn, this Pokémon has a 33% of being cured of any major status ailment.",
          description: "Heals the body by shedding.",
        },
        {
          name: "Unnerve",
          effect:
            "Opposing Pokémon cannot eat held Berries while this Pokémon is in battle.  Affected Pokémon can still use bug bite or pluck to eat a target's Berry.",
          description: "Makes the foe nervous and unable to eat Berries.",
        },
      ],
      stats: {
        HP: 35,
        Attack: 60,
        Defense: 44,
        "Special Attack": 40,
        "Special Defense": 54,
        Speed: 55,
      },
      locations: [
        "Route 212",
        "Route 32",
        "Route 33",
        "Route 42",
        "Route 26",
        "Route 27",
        "Route 3",
        "Route 4",
        "Route 8",
        "Route 9",
        "Route 10",
        "Route 11",
        "Route 23",
        "Azalea Town",
      ],
      color: "#cfbfcb",
    },
    {
      id: 24,
      name: "Arbok",
      genus: "Cobra Pokémon",
      description:
        "It is rumored that the ferocious warning markings on its belly differ from area to area.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/24.webp",
      types: ["Poison"],
      abilities: [
        {
          name: "Intimidate",
          effect:
            "When this Pokémon enters battle, the opponent's Attack is lowered by one stage.  In a double battle, both opponents are affected.  This ability also takes effect when acquired during a battle, but will not take effect again if lost and reobtained without leaving battle.  This ability has no effect on an opponent that has a substitute.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          description: "Lowers the foe's ATTACK.",
        },
        {
          name: "Shed Skin",
          effect:
            "After each turn, this Pokémon has a 33% of being cured of any major status ailment.",
          description: "Heals the body by shedding.",
        },
        {
          name: "Unnerve",
          effect:
            "Opposing Pokémon cannot eat held Berries while this Pokémon is in battle.  Affected Pokémon can still use bug bite or pluck to eat a target's Berry.",
          description: "Makes the foe nervous and unable to eat Berries.",
        },
      ],
      stats: {
        HP: 60,
        Attack: 95,
        Defense: 69,
        "Special Attack": 65,
        "Special Defense": 79,
        Speed: 80,
      },
      locations: [
        "Great Marsh",
        "Route 42",
        "Mt. Silver",
        "Route 26",
        "Route 27",
        "Route 28",
        "Route 3",
        "Route 4",
        "Cerulean Cave",
        "Route 23",
        "Victory Road",
      ],
      color: "#c7c3c7",
    },
    {
      id: 25,
      name: "Pikachu",
      genus: "Mouse Pokémon",
      description:
        "When several of these POKéMON gather, their electricity could build and cause lightning storms.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/25.webp",
      types: ["Electric"],
      abilities: [
        {
          name: "Static",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed.  Pokémon that are immune to electric-type moves can still be paralyzed by this ability.  Overworld: If the lead Pokémon has this ability, there is a 50% chance that encounters will be with an electric Pokémon, if applicable.",
          description: "Paralyzes on contact.",
        },
        {
          name: "Lightning Rod",
          effect:
            "All other Pokémon's single-target electric-type moves are redirected to this Pokémon if it is an eligible target.  Other Pokémon's Electric moves raise this Pokémon's Special Attack one stage, negating any other effect on it, and cannot miss it.  If the move's intended target also has this ability, the move is not redirected.  When multiple Pokémon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pokémon.  follow me takes precedence over this ability.  If the Pokémon is a ground-type and thus immune to Electric moves, its immunity prevents the Special Attack boost.",
          description: "Draws electrical moves.",
        },
      ],
      stats: {
        HP: 35,
        Attack: 55,
        Defense: 40,
        "Special Attack": 50,
        "Special Defense": 50,
        Speed: 90,
      },
      locations: [
        "Trophy Garden",
        "Pallet Town",
        "Route 2",
        "Viridian Forest",
        "Power Plant",
        "Safari Zone",
        "Route 3",
        "Santalune Forest",
        "Slateport City",
        "Verdanturf Town",
        "Fallarbor Town",
        "Lilycove City",
      ],
      color: "#faefca",
    },
    {
      id: 26,
      name: "Raichu",
      genus: "Mouse Pokémon",
      description:
        "Its tail discharges electricity into the ground, protecting it from getting shocked.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/26.webp",
      types: ["Electric"],
      abilities: [
        {
          name: "Static",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed.  Pokémon that are immune to electric-type moves can still be paralyzed by this ability.  Overworld: If the lead Pokémon has this ability, there is a 50% chance that encounters will be with an electric Pokémon, if applicable.",
          description: "Paralyzes on contact.",
        },
        {
          name: "Lightning Rod",
          effect:
            "All other Pokémon's single-target electric-type moves are redirected to this Pokémon if it is an eligible target.  Other Pokémon's Electric moves raise this Pokémon's Special Attack one stage, negating any other effect on it, and cannot miss it.  If the move's intended target also has this ability, the move is not redirected.  When multiple Pokémon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pokémon.  follow me takes precedence over this ability.  If the Pokémon is a ground-type and thus immune to Electric moves, its immunity prevents the Special Attack boost.",
          description: "Draws electrical moves.",
        },
      ],
      stats: {
        HP: 60,
        Attack: 90,
        Defense: 55,
        "Special Attack": 90,
        "Special Defense": 80,
        Speed: 110,
      },
      locations: ["Cerulean Cave", "Power Plant"],
      color: "#f8e3be",
    },
    {
      id: 27,
      name: "Sandshrew",
      genus: "Mouse Pokémon",
      description:
        "Burrows deep underground in arid locations far from water. It only emerges to hunt for food.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/27.webp",
      types: ["Ground"],
      abilities: [
        {
          name: "Sand Veil",
          effect:
            "During a sandstorm, this Pokémon has 1.25× its evasion, and it does not take sandstorm damage regardless of type.  The evasion bonus does not count as a stat modifier.  Overworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
          description: "Ups evasion in a sandstorm.",
        },
        {
          name: "Sand Rush",
          effect:
            "This Pokémon's Speed is doubled during a sandstorm, and it does not take sandstorm damage, regardless of type.",
          description: "Boosts the Pokémon's Speed in a sandstorm.",
        },
      ],
      stats: {
        HP: 50,
        Attack: 75,
        Defense: 85,
        "Special Attack": 20,
        "Special Defense": 30,
        Speed: 40,
      },
      locations: [
        "Wayward Cave",
        "Union Cave",
        "Mt. Moon",
        "Route 3",
        "Route 4",
        "Route 8",
        "Route 9",
        "Route 10",
        "Route 11",
        "Route 23",
        "Route 111",
        "Route 113",
        "Mirage Tower",
        "Desert Resort",
        "Relic Castle",
      ],
      color: "#f5e9c9",
    },
    {
      id: 28,
      name: "Sandslash",
      genus: "Mouse Pokémon",
      description:
        "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/28.webp",
      types: ["Ground"],
      abilities: [
        {
          name: "Sand Veil",
          effect:
            "During a sandstorm, this Pokémon has 1.25× its evasion, and it does not take sandstorm damage regardless of type.  The evasion bonus does not count as a stat modifier.  Overworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
          description: "Ups evasion in a sandstorm.",
        },
        {
          name: "Sand Rush",
          effect:
            "This Pokémon's Speed is doubled during a sandstorm, and it does not take sandstorm damage, regardless of type.",
          description: "Boosts the Pokémon's Speed in a sandstorm.",
        },
      ],
      stats: {
        HP: 75,
        Attack: 100,
        Defense: 110,
        "Special Attack": 45,
        "Special Defense": 55,
        Speed: 65,
      },
      locations: [
        "Route 228",
        "Route 26",
        "Route 27",
        "Mt. Moon",
        "Victory Road",
        "Cerulean Cave",
        "Route 23",
        "Relic Castle",
        "Route 15",
        "Route 18",
        "Terminus Cave",
      ],
      color: "#f3e5c4",
    },
    {
      id: 29,
      name: "Nidoran♀",
      genus: "Poison Pin Pokémon",
      description:
        "Although small, its venomous barbs render this POKéMON dangerous. The female has smaller horns.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/29.webp",
      types: ["Poison"],
      abilities: [
        {
          name: "Poison Point",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
          description: "Poisons foe on contact.",
        },
        {
          name: "Rivalry",
          effect:
            "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.  If either Pokémon is genderless, damage is unaffected.",
          description: "Raises Attack if the foe is of the same gender.",
        },
        {
          name: "Hustle",
          effect:
            "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.  Special moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.  Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
          description: "Trades accuracy for power.",
        },
      ],
      stats: {
        HP: 55,
        Attack: 47,
        Defense: 52,
        "Special Attack": 40,
        "Special Defense": 40,
        Speed: 41,
      },
      locations: [
        "Route 201",
        "Route 35",
        "National Park",
        "Route 36",
        "Route 2",
        "Route 3",
        "Route 9",
        "Route 10",
        "Route 22",
        "Safari Zone",
      ],
      color: "#e4e9f5",
    },
    {
      id: 30,
      name: "Nidorina",
      genus: "Poison Pin Pokémon",
      description:
        "The female's horn develops slowly. Prefers physical attacks such as clawing and biting.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/30.webp",
      types: ["Poison"],
      abilities: [
        {
          name: "Poison Point",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
          description: "Poisons foe on contact.",
        },
        {
          name: "Rivalry",
          effect:
            "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.  If either Pokémon is genderless, damage is unaffected.",
          description: "Raises Attack if the foe is of the same gender.",
        },
        {
          name: "Hustle",
          effect:
            "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.  Special moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.  Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
          description: "Trades accuracy for power.",
        },
      ],
      stats: {
        HP: 70,
        Attack: 62,
        Defense: 67,
        "Special Attack": 55,
        "Special Defense": 55,
        Speed: 56,
      },
      locations: [
        "Valor Lakefront",
        "Route 221",
        "Route 9",
        "Route 13",
        "Route 14",
        "Route 15",
        "Route 23",
        "Safari Zone",
        "Route 11",
      ],
      color: "#e6eff1",
    },
    {
      id: 31,
      name: "Nidoqueen",
      genus: "Drill Pokémon",
      description:
        "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/31.webp",
      types: ["Poison", "Ground"],
      abilities: [
        {
          name: "Poison Point",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
          description: "Poisons foe on contact.",
        },
        {
          name: "Rivalry",
          effect:
            "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.  If either Pokémon is genderless, damage is unaffected.",
          description: "Raises Attack if the foe is of the same gender.",
        },
        {
          name: "Sheer Force",
          effect:
            "This Pokémon's moves with extra effects have 1.3× their power, but lose their extra effects.  An effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect. For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.  Moves that lower the user's stats are unaffected.",
          description: "Removes added effects to increase move damage.",
        },
      ],
      stats: {
        HP: 90,
        Attack: 92,
        Defense: 87,
        "Special Attack": 75,
        "Special Defense": 85,
        Speed: 76,
      },
      locations: [],
      color: "#c1d0de",
    },
    {
      id: 32,
      name: "Nidoran♂",
      genus: "Poison Pin Pokémon",
      description:
        "Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/32.webp",
      types: ["Poison"],
      abilities: [
        {
          name: "Poison Point",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
          description: "Poisons foe on contact.",
        },
        {
          name: "Rivalry",
          effect:
            "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.  If either Pokémon is genderless, damage is unaffected.",
          description: "Raises Attack if the foe is of the same gender.",
        },
        {
          name: "Hustle",
          effect:
            "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.  Special moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.  Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
          description: "Trades accuracy for power.",
        },
      ],
      stats: {
        HP: 46,
        Attack: 57,
        Defense: 40,
        "Special Attack": 40,
        "Special Defense": 40,
        Speed: 50,
      },
      locations: [
        "Route 201",
        "Route 35",
        "National Park",
        "Route 36",
        "Route 2",
        "Route 3",
        "Route 9",
        "Route 10",
        "Route 22",
        "Safari Zone",
      ],
      color: "#d7c6d7",
    },
    {
      id: 33,
      name: "Nidorino",
      genus: "Poison Pin Pokémon",
      description:
        "An aggressive POKéMON that is quick to attack. The horn on its head secretes a powerful venom.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/33.webp",
      types: ["Poison"],
      abilities: [
        {
          name: "Poison Point",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
          description: "Poisons foe on contact.",
        },
        {
          name: "Rivalry",
          effect:
            "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.  If either Pokémon is genderless, damage is unaffected.",
          description: "Raises Attack if the foe is of the same gender.",
        },
        {
          name: "Hustle",
          effect:
            "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.  Special moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.  Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
          description: "Trades accuracy for power.",
        },
      ],
      stats: {
        HP: 61,
        Attack: 72,
        Defense: 57,
        "Special Attack": 55,
        "Special Defense": 55,
        Speed: 65,
      },
      locations: [
        "Valor Lakefront",
        "Route 221",
        "Route 9",
        "Route 13",
        "Route 14",
        "Route 15",
        "Route 23",
        "Safari Zone",
        "Route 11",
      ],
      color: "#e6d9e8",
    },
    {
      id: 34,
      name: "Nidoking",
      genus: "Drill Pokémon",
      description:
        "One swing of its mighty tail can snap a telephone pole as if it were a matchstick.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/34.webp",
      types: ["Poison", "Ground"],
      abilities: [
        {
          name: "Poison Point",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
          description: "Poisons foe on contact.",
        },
        {
          name: "Rivalry",
          effect:
            "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.  If either Pokémon is genderless, damage is unaffected.",
          description: "Raises Attack if the foe is of the same gender.",
        },
        {
          name: "Sheer Force",
          effect:
            "This Pokémon's moves with extra effects have 1.3× their power, but lose their extra effects.  An effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect. For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.  Moves that lower the user's stats are unaffected.",
          description: "Removes added effects to increase move damage.",
        },
      ],
      stats: {
        HP: 81,
        Attack: 102,
        Defense: 77,
        "Special Attack": 85,
        "Special Defense": 75,
        Speed: 85,
      },
      locations: [],
      color: "#decbde",
    },
    {
      id: 35,
      name: "Clefairy",
      genus: "Fairy Pokémon",
      description:
        "Its magical and cute appeal has many admirers. It is rare and found only in certain areas.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/35.webp",
      types: ["Fairy"],
      abilities: [
        {
          name: "Cute Charm",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being infatuated.  Overworld: If the first Pokémon in the party has this ability, any wild Pokémon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
          description: "Infatuates on contact.",
        },
        {
          name: "Magic Guard",
          effect:
            "This Pokémon is immune to damage not directly caused by a move.  For example, this Pokémon takes no damage from from weather, recoil, status ailments, or spikes, but it still suffers from the Attack cut when burned, and a life orb will still power up this Pokémon's moves without damaging it.  Anything that directly depends on such damage will also not happen; for example, leech seed will neither hurt this Pokémon nor heal the opponent, and Pokémon with a jaboca berry or rowap berry will not consume the berry when hit by this Pokémon.  The following are unaffected: struggle, pain split (whether used by or against this Pokémon), belly drum, substitute, curse, moves that knock the user out, and damage from confusion.  This Pokémon will neither lose nor regain HP if it drains HP from a Pokémon with liquid ooze.  If this Pokémon is badly poisoned, the poison counter is still increased each turn; if the Pokémon loses this ability, it will begin taking as much damage as it would be if it had been taking increasing damage each turn.",
          description: "The Pokémon only takes damage from attacks.",
        },
        {
          name: "Friend Guard",
          effect:
            "All friendly Pokémon take 0.75× as much direct damage from moves while this Pokémon is in battle.  This effect stacks if multiple allied Pokémon have it.",
          description: "Reduces damage done to allies.",
        },
      ],
      stats: {
        HP: 70,
        Attack: 45,
        Defense: 48,
        "Special Attack": 60,
        "Special Defense": 65,
        Speed: 35,
      },
      locations: [
        "Mt. Coronet",
        "Mt. Moon",
        "Route 3",
        "Route 4",
        "Giant Chasm",
      ],
      color: "#fcebed",
    },
    {
      id: 36,
      name: "Clefable",
      genus: "Fairy Pokémon",
      description:
        "A timid fairy POKéMON that is rarely seen. It will run and hide the moment it senses people.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/36.webp",
      types: ["Fairy"],
      abilities: [
        {
          name: "Cute Charm",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being infatuated.  Overworld: If the first Pokémon in the party has this ability, any wild Pokémon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
          description: "Infatuates on contact.",
        },
        {
          name: "Magic Guard",
          effect:
            "This Pokémon is immune to damage not directly caused by a move.  For example, this Pokémon takes no damage from from weather, recoil, status ailments, or spikes, but it still suffers from the Attack cut when burned, and a life orb will still power up this Pokémon's moves without damaging it.  Anything that directly depends on such damage will also not happen; for example, leech seed will neither hurt this Pokémon nor heal the opponent, and Pokémon with a jaboca berry or rowap berry will not consume the berry when hit by this Pokémon.  The following are unaffected: struggle, pain split (whether used by or against this Pokémon), belly drum, substitute, curse, moves that knock the user out, and damage from confusion.  This Pokémon will neither lose nor regain HP if it drains HP from a Pokémon with liquid ooze.  If this Pokémon is badly poisoned, the poison counter is still increased each turn; if the Pokémon loses this ability, it will begin taking as much damage as it would be if it had been taking increasing damage each turn.",
          description: "The Pokémon only takes damage from attacks.",
        },
        {
          name: "Unaware",
          effect:
            "This Pokémon ignores other Pokémon's stat modifiers for the purposes of damage and accuracy calculation.  Effectively, this affects modifiers of every stat except Speed.  The power of punishment and stored power is calculated as usual.  When this Pokémon hurts itself in confusion, its stat modifiers affect damage as usual.",
          description: "Ignores any change in ability by the foe.",
        },
      ],
      stats: {
        HP: 95,
        Attack: 70,
        Defense: 73,
        "Special Attack": 95,
        "Special Defense": 90,
        Speed: 60,
      },
      locations: ["Giant Chasm"],
      color: "#faefec",
    },
    {
      id: 37,
      name: "Vulpix",
      genus: "Fox Pokémon",
      description:
        "At the time of birth, it has just one tail. The tail splits from its tip as it grows older.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/37.webp",
      types: ["Fire"],
      abilities: [
        {
          name: "Flash Fire",
          effect:
            "This Pokémon is immune to fire-type moves.  Once this Pokémon has been hit by a Fire move, its own Fire moves will inflict 1.5× as much damage until it leaves battle.  This ability has no effect while the Pokémon is frozen.  The Fire damage bonus is retained even if the Pokémon is frozen and thawed or the ability is lost or disabled.  Fire moves will ignore this Pokémon's substitute.  This ability takes effect even on non-damaging moves, i.e. will o wisp.",
          description: "Powers up if hit by fire.",
        },
        {
          name: "Drought",
          effect:
            "The weather changes to strong sunlight when this Pokémon enters battle and does not end unless cancelled by another weather condition.  If multiple Pokémon with this ability, drizzle, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
          description: "Summons sunlight in battle.",
        },
      ],
      stats: {
        HP: 38,
        Attack: 41,
        Defense: 40,
        "Special Attack": 50,
        "Special Defense": 65,
        Speed: 65,
      },
      locations: [
        "Route 209",
        "Route 214",
        "Route 36",
        "Route 37",
        "Route 48",
        "Route 7",
        "Route 8",
        "Pokémon Mansion",
        "Mt. Pyre",
        "Abundant Shrine",
      ],
      color: "#e6cfc5",
    },
    {
      id: 38,
      name: "Ninetales",
      genus: "Fox Pokémon",
      description:
        "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/38.webp",
      types: ["Fire"],
      abilities: [
        {
          name: "Flash Fire",
          effect:
            "This Pokémon is immune to fire-type moves.  Once this Pokémon has been hit by a Fire move, its own Fire moves will inflict 1.5× as much damage until it leaves battle.  This ability has no effect while the Pokémon is frozen.  The Fire damage bonus is retained even if the Pokémon is frozen and thawed or the ability is lost or disabled.  Fire moves will ignore this Pokémon's substitute.  This ability takes effect even on non-damaging moves, i.e. will o wisp.",
          description: "Powers up if hit by fire.",
        },
        {
          name: "Drought",
          effect:
            "The weather changes to strong sunlight when this Pokémon enters battle and does not end unless cancelled by another weather condition.  If multiple Pokémon with this ability, drizzle, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
          description: "Summons sunlight in battle.",
        },
      ],
      stats: {
        HP: 73,
        Attack: 76,
        Defense: 75,
        "Special Attack": 81,
        "Special Defense": 100,
        Speed: 100,
      },
      locations: ["Abundant Shrine"],
      color: "#f9f4d9",
    },
    {
      id: 39,
      name: "Jigglypuff",
      genus: "Balloon Pokémon",
      description:
        "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/39.webp",
      types: ["Normal", "Fairy"],
      abilities: [
        {
          name: "Cute Charm",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being infatuated.  Overworld: If the first Pokémon in the party has this ability, any wild Pokémon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
          description: "Infatuates on contact.",
        },
        {
          name: "Competitive",
          effect:
            "Raises Special Attack by two stages upon having any stat lowered.",
          description: "Boosts the Sp. Atk stat when a stat is lowered.",
        },
        {
          name: "Friend Guard",
          effect:
            "All friendly Pokémon take 0.75× as much direct damage from moves while this Pokémon is in battle.  This effect stacks if multiple allied Pokémon have it.",
          description: "Reduces damage done to allies.",
        },
      ],
      stats: {
        HP: 115,
        Attack: 45,
        Defense: 20,
        "Special Attack": 45,
        "Special Defense": 25,
        Speed: 20,
      },
      locations: [
        "Route 34",
        "Route 35",
        "Route 46",
        "Route 3",
        "Route 4",
        "Route 5",
        "Route 6",
        "Route 7",
        "Route 8",
        "Route 115",
        "Dreamyard",
        "Route 1",
        "Route 2",
        "Route 14",
        "Route 20",
        "Pokémon Village",
      ],
      color: "#f9ebee",
    },
    {
      id: 40,
      name: "Wigglytuff",
      genus: "Balloon Pokémon",
      description:
        "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/40.webp",
      types: ["Normal", "Fairy"],
      abilities: [
        {
          name: "Cute Charm",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being infatuated.  Overworld: If the first Pokémon in the party has this ability, any wild Pokémon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
          description: "Infatuates on contact.",
        },
        {
          name: "Competitive",
          effect:
            "Raises Special Attack by two stages upon having any stat lowered.",
          description: "Boosts the Sp. Atk stat when a stat is lowered.",
        },
        {
          name: "Frisk",
          effect:
            "When this Pokémon enters battle, it reveals an opposing Pokémon's held item to all participating trainers.  In a double battle, if one opponent has an item, this Pokémon will Frisk that Pokémon; if both have an item, it will Frisk one at random.",
          description: "The Pokémon can check the foe's held item.",
        },
      ],
      stats: {
        HP: 140,
        Attack: 70,
        Defense: 45,
        "Special Attack": 85,
        "Special Defense": 50,
        Speed: 45,
      },
      locations: [
        "Cerulean Cave",
        "Dreamyard",
        "Route 1",
        "Route 2",
        "Route 14",
      ],
      color: "#faf7fa",
    },
    {
      id: 41,
      name: "Zubat",
      genus: "Bat Pokémon",
      description:
        "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/41.webp",
      types: ["Poison", "Flying"],
      abilities: [
        {
          name: "Inner Focus",
          effect: "This Pokémon cannot flinch.",
          description: "Prevents flinching.",
        },
        {
          name: "Infiltrator",
          effect:
            "This Pokémon's moves ignore light screen, reflect, and safeguard.",
          description: "Passes through the foe's barrier and strikes.",
        },
      ],
      stats: {
        HP: 40,
        Attack: 45,
        Defense: 35,
        "Special Attack": 30,
        "Special Defense": 40,
        Speed: 55,
      },
      locations: [
        "Oreburgh Mine",
        "Mt. Coronet",
        "Ravaged Path",
        "Oreburgh Gate",
        "Wayward Cave",
        "Iron Island",
        "Acuity Lakefront",
        "Route 203",
        "Route 204",
        "Route 206",
        "Route 207",
        "Route 208",
        "Route 209",
        "Lost Tower",
        "Route 211",
        "Route 214",
        "Route 216",
        "Route 217",
        "Route 30",
        "Route 31",
        "Route 32",
        "Union Cave",
        "Route 33",
        "Slowpoke Well",
        "Ilex Forest",
        "Burned Tower",
        "Whirl Islands",
        "Route 42",
        "Mt. Mortar",
        "Ice Path",
        "Dark Cave",
        "Seafoam Islands",
        "Route 47",
        "Mt. Moon",
        "Rock Tunnel",
        "Route 3",
        "Route 4",
        "Route 9",
        "Route 10",
        "Tohjo Falls",
        "Victory Road",
        "Meteor Falls",
        "Granite Cave",
        "Seafloor Cavern",
        "Cave of Origin",
        "Shoal Cave",
        "Altering Cave",
        "Icefall Cave",
        "Lost Cave",
        "Castelia Sewers",
        "Connecting Cave",
      ],
      color: "#dac5db",
    },
    {
      id: 42,
      name: "Golbat",
      genus: "Bat Pokémon",
      description:
        "Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/42.webp",
      types: ["Poison", "Flying"],
      abilities: [
        {
          name: "Inner Focus",
          effect: "This Pokémon cannot flinch.",
          description: "Prevents flinching.",
        },
        {
          name: "Infiltrator",
          effect:
            "This Pokémon's moves ignore light screen, reflect, and safeguard.",
          description: "Passes through the foe's barrier and strikes.",
        },
      ],
      stats: {
        HP: 75,
        Attack: 80,
        Defense: 70,
        "Special Attack": 65,
        "Special Defense": 75,
        Speed: 90,
      },
      locations: [
        "Mt. Coronet",
        "Victory Road",
        "Ravaged Path",
        "Oreburgh Gate",
        "Stark Mountain",
        "Sendoff Spring",
        "Turnback Cave",
        "Snowpoint Temple",
        "Iron Island",
        "Lost Tower",
        "Route 227",
        "Union Cave",
        "Slowpoke Well",
        "Whirl Islands",
        "Route 42",
        "Mt. Mortar",
        "Ice Path",
        "Dark Cave",
        "Seafoam Islands",
        "Mt. Silver",
        "Route 47",
        "Route 28",
        "Rock Tunnel",
        "Tohjo Falls",
        "Cerulean Cave",
        "Meteor Falls",
        "Seafloor Cavern",
        "Cave of Origin",
        "Shoal Cave",
        "Sky Pillar",
        "Icefall Cave",
        "Lost Cave",
        "Dreamyard",
        "Giant Chasm",
        "Celestial Tower",
        "Route 13",
        "Strange House",
      ],
      color: "#a6a7a7",
    },
    {
      id: 43,
      name: "Oddish",
      genus: "Weed Pokémon",
      description:
        "During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/43.webp",
      types: ["Grass", "Poison"],
      abilities: [
        {
          name: "Chlorophyll",
          effect:
            "This Pokémon's Speed is doubled during strong sunlight.  This bonus does not count as a stat modifier.",
          description: "Raises SPEED in sunshine.",
        },
        {
          name: "Run Away",
          effect:
            "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
          description: "Makes escaping easier.",
        },
      ],
      stats: {
        HP: 45,
        Attack: 50,
        Defense: 55,
        "Special Attack": 75,
        "Special Defense": 65,
        Speed: 30,
      },
      locations: [
        "Route 224",
        "Route 229",
        "Sea Route 230",
        "Ilex Forest",
        "Route 12",
        "Route 5",
        "Route 6",
        "Route 7",
        "Route 13",
        "Route 14",
        "Route 15",
        "Route 24",
        "Route 25",
        "Route 110",
        "Route 117",
        "Route 119",
        "Route 120",
        "Route 121",
        "Route 123",
        "Safari Zone",
        "Berry Forest",
        "Cape Brink",
        "Bond Bridge",
        "Water Path",
      ],
      color: "#b9dbb5",
    },
    {
      id: 44,
      name: "Gloom",
      genus: "Weed Pokémon",
      description:
        "It secretes a sticky, drool-like honey. Although sweet, it smells too repulsive to get very close.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/44.webp",
      types: ["Grass", "Poison"],
      abilities: [
        {
          name: "Chlorophyll",
          effect:
            "This Pokémon's Speed is doubled during strong sunlight.  This bonus does not count as a stat modifier.",
          description: "Raises SPEED in sunshine.",
        },
        {
          name: "Stench",
          effect:
            "This Pokémon's damaging moves have a 10% chance to make the target flinch with each hit if they do not already cause flinching as a secondary effect.  This ability does not stack with a held item.  Overworld: The wild encounter rate is halved while this Pokémon is first in the party.",
          description: "Helps repel wild POKéMON.",
        },
      ],
      stats: {
        HP: 60,
        Attack: 65,
        Defense: 70,
        "Special Attack": 85,
        "Special Defense": 75,
        Speed: 40,
      },
      locations: [
        "Route 224",
        "Route 229",
        "Sea Route 230",
        "Route 47",
        "Route 12",
        "Route 48",
        "Route 5",
        "Route 13",
        "Route 14",
        "Route 15",
        "Route 24",
        "Cerulean Cave",
        "Route 121",
        "Route 123",
        "Safari Zone",
        "Berry Forest",
        "Cape Brink",
        "Bond Bridge",
        "Water Path",
      ],
      color: "#e3c1b5",
    },
    {
      id: 45,
      name: "Vileplume",
      genus: "Flower Pokémon",
      description:
        "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/45.webp",
      types: ["Grass", "Poison"],
      abilities: [
        {
          name: "Chlorophyll",
          effect:
            "This Pokémon's Speed is doubled during strong sunlight.  This bonus does not count as a stat modifier.",
          description: "Raises SPEED in sunshine.",
        },
        {
          name: "Effect Spore",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed, poisoned, or put to sleep, chosen at random.  Nothing is done to compensate if the move's user is immune to one of these ailments; there is simply a lower chance that the move's user will be affected.",
          description: "Leaves spores on contact.",
        },
      ],
      stats: {
        HP: 75,
        Attack: 80,
        Defense: 85,
        "Special Attack": 110,
        "Special Defense": 90,
        Speed: 50,
      },
      locations: [],
      color: "#f1d6db",
    },
    {
      id: 46,
      name: "Paras",
      genus: "Mushroom Pokémon",
      description:
        "Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/46.webp",
      types: ["Bug", "Grass"],
      abilities: [
        {
          name: "Effect Spore",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed, poisoned, or put to sleep, chosen at random.  Nothing is done to compensate if the move's user is immune to one of these ailments; there is simply a lower chance that the move's user will be affected.",
          description: "Leaves spores on contact.",
        },
        {
          name: "Dry Skin",
          effect:
            "This Pokémon takes 1/8 of its maximum HP in damage after each turn during strong sunlight, but it heals for 1/8 of its HP each turn during rain.  This Pokémon takes 1.25× as much damage from fire-type moves, but whenever a water move hits it, it heals for 1/4 its maximum HP instead.",
          description: "Reduces HP if it is hot. Water restores HP.",
        },
        {
          name: "Damp",
          effect:
            "While this Pokémon is in battle, self destruct and explosion will fail and aftermath will not take effect.",
          description: "Prevents self-destruction.",
        },
      ],
      stats: {
        HP: 35,
        Attack: 70,
        Defense: 55,
        "Special Attack": 45,
        "Special Defense": 55,
        Speed: 25,
      },
      locations: ["Ilex Forest", "Mt. Moon", "Safari Zone"],
      color: "#f6d7be",
    },
    {
      id: 47,
      name: "Parasect",
      genus: "Mushroom Pokémon",
      description:
        "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/47.webp",
      types: ["Bug", "Grass"],
      abilities: [
        {
          name: "Effect Spore",
          effect:
            "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed, poisoned, or put to sleep, chosen at random.  Nothing is done to compensate if the move's user is immune to one of these ailments; there is simply a lower chance that the move's user will be affected.",
          description: "Leaves spores on contact.",
        },
        {
          name: "Dry Skin",
          effect:
            "This Pokémon takes 1/8 of its maximum HP in damage after each turn during strong sunlight, but it heals for 1/8 of its HP each turn during rain.  This Pokémon takes 1.25× as much damage from fire-type moves, but whenever a water move hits it, it heals for 1/4 its maximum HP instead.",
          description: "Reduces HP if it is hot. Water restores HP.",
        },
        {
          name: "Damp",
          effect:
            "While this Pokémon is in battle, self destruct and explosion will fail and aftermath will not take effect.",
          description: "Prevents self-destruction.",
        },
      ],
      stats: {
        HP: 60,
        Attack: 95,
        Defense: 80,
        "Special Attack": 60,
        "Special Defense": 80,
        Speed: 30,
      },
      locations: ["Mt. Silver", "Cerulean Cave", "Safari Zone"],
      color: "#dabfcb",
    },
    {
      id: 48,
      name: "Venonat",
      genus: "Insect Pokémon",
      description:
        "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/48.webp",
      types: ["Bug", "Poison"],
      abilities: [
        {
          name: "Compound Eyes",
          effect:
            "This Pokémon's moves have 1.3× their accuracy.  This ability has no effect on the one-hit KO moves (fissure, guillotine, horn drill, and sheer cold).  Overworld: If the first Pokémon in the party has this ability, the chance of a wild Pokémon holding a particular item is raised from 50%, 5%, or 1% to 60%, 20%, or 5%, respectively.",
          description: "Raises accuracy.",
        },
        {
          name: "Tinted Lens",
          effect:
            "This Pokémon deals twice as much damage with moves that are not very effective against the target.",
          description: "Powers up “not very effective” moves.",
        },
        {
          name: "Run Away",
          effect:
            "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
          description: "Makes escaping easier.",
        },
      ],
      stats: {
        HP: 60,
        Attack: 55,
        Defense: 50,
        "Special Attack": 40,
        "Special Defense": 55,
        Speed: 45,
      },
      locations: [
        "Route 229",
        "Ilex Forest",
        "National Park",
        "Route 43",
        "Lake of Rage",
        "Route 12",
        "Route 9",
        "Route 10",
        "Route 13",
        "Route 14",
        "Route 15",
        "Route 24",
        "Route 25",
        "Safari Zone",
        "Berry Forest",
        "Bond Bridge",
      ],
      color: "#c8c6df",
    },
    {
      id: 49,
      name: "Venomoth",
      genus: "Poison Moth Pokémon",
      description:
        "The dust-like scales covering its wings are color coded to indicate the kinds of poison it has.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/49.webp",
      types: ["Bug", "Poison"],
      abilities: [
        {
          name: "Shield Dust",
          effect: `This Pokémon is immune to the extra effects of moves used against it.  An extra effect is a move's chance, listed as an "effect chance", to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.`,
          description: "Prevents added effects.",
        },
        {
          name: "Tinted Lens",
          effect:
            "This Pokémon deals twice as much damage with moves that are not very effective against the target.",
          description: "Powers up “not very effective” moves.",
        },
        {
          name: "Wonder Skin",
          effect:
            "Non-damaging moves have exactly 50% base accuracy against this Pokémon.",
          description: "Makes status-changing moves more likely to miss.",
        },
      ],
      stats: {
        HP: 70,
        Attack: 65,
        Defense: 60,
        "Special Attack": 90,
        "Special Defense": 75,
        Speed: 90,
      },
      locations: [
        "Route 229",
        "Route 43",
        "Route 9",
        "Route 10",
        "Route 13",
        "Route 14",
        "Route 15",
        "Route 24",
        "Route 25",
        "Cerulean Cave",
        "Victory Road",
        "Safari Zone",
        "Berry Forest",
        "Dreamyard",
      ],
      color: "#f4eff7",
    },
    {
      id: 50,
      name: "Diglett",
      genus: "Mole Pokémon",
      description:
        "Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.",
      imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/50.webp",
      types: ["Ground"],
      abilities: [
        {
          name: "Sand Veil",
          effect:
            "During a sandstorm, this Pokémon has 1.25× its evasion, and it does not take sandstorm damage regardless of type.  The evasion bonus does not count as a stat modifier.  Overworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
          description: "Ups evasion in a sandstorm.",
        },
        {
          name: "Arena Trap",
          effect:
            "While this Pokémon is in battle, opposing Pokémon cannot flee or switch out.  flying-type Pokémon and Pokémon in the air, e.g. due to levitate or magnet rise, are unaffected.  Pokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.  Overworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.",
          description: "Prevents fleeing.",
        },
        {
          name: "Sand Force",
          effect:
            "During a sandstorm, this Pokémon's rock-, ground-, and steel-type moves have 1.3× their base power.  This Pokémon does not take sandstorm damage, regardless of type.",
          description: "Boosts certain moves' power in a sandstorm.",
        },
      ],
      stats: {
        HP: 10,
        Attack: 55,
        Defense: 25,
        "Special Attack": 35,
        "Special Defense": 45,
        Speed: 95,
      },
      locations: ["Route 228", "Vermilion City", "Route 48", "Diglett's Cave"],
      color: "#ddd1c9",
    },
  ],
  ac = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };
var sc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ka = nt.createContext && nt.createContext(sc),
  Ud = ["attr", "size", "title"];
function Hd(e, t) {
  if (e == null) return {};
  var n = Bd(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Bd(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function to() {
  return (
    (to = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    to.apply(this, arguments)
  );
}
function Ga(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function no(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ga(Object(n), !0).forEach(function (r) {
          Wd(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ga(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Wd(e, t, n) {
  return (
    (t = Vd(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Vd(e) {
  var t = bd(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bd(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function uc(e) {
  return (
    e &&
    e.map((t, n) =>
      nt.createElement(t.tag, no({ key: n }, t.attr), uc(t.child))
    )
  );
}
function $d(e) {
  return (t) =>
    nt.createElement(Qd, to({ attr: no({}, e.attr) }, t), uc(e.child));
}
function Qd(e) {
  var t = (n) => {
    var { attr: r, size: o, title: i } = e,
      l = Hd(e, Ud),
      a = o || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      nt.createElement(
        "svg",
        to(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          l,
          {
            className: s,
            style: no(no({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && nt.createElement("title", null, i),
        e.children
      )
    );
  };
  return Ka !== void 0
    ? nt.createElement(Ka.Consumer, null, (n) => t(n))
    : t(sc);
}
function Kd(e) {
  return $d({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z",
        },
        child: [],
      },
    ],
  })(e);
}
const Gd = (e) =>
    T.jsx(T.Fragment, {
      children: T.jsx("div", {
        className: "container",
        children: T.jsxs("div", {
          className: "model",
          children: [
            T.jsx(Kd, { className: "close", onClick: e.closeModel }),
            T.jsxs("div", {
              className: "card",
              style: { backgroundColor: e.detailPokemon.color },
              children: [
                T.jsx("img", {
                  src: e.detailPokemon.imageUrl,
                  alt: e.detailPokemon.name,
                  width: 200,
                }),
                T.jsx("h1", { children: e.detailPokemon.name }),
                T.jsx("div", {
                  className: "container-badge",
                  children: e.detailPokemon.types.map((t, n) =>
                    T.jsx(
                      "span",
                      {
                        className: "badge",
                        style: { backgroundColor: ac[t.toLowerCase()] },
                        children: t,
                      },
                      n
                    )
                  ),
                }),
              ],
            }),
            T.jsxs("div", {
              className: "card text-left",
              style: { backgroundColor: e.detailPokemon.color },
              children: [
                T.jsx("h1", { children: "Status" }),
                T.jsxs("div", { children: ["HP: ", e.detailPokemon.stats.HP] }),
                T.jsxs("div", {
                  children: ["Attack: ", e.detailPokemon.stats.Attack],
                }),
                T.jsxs("div", {
                  children: ["Defense: ", e.detailPokemon.stats.Defense],
                }),
                T.jsxs("div", {
                  children: [
                    "Special Attack: ",
                    e.detailPokemon.stats["Special Attack"],
                  ],
                }),
                T.jsxs("div", {
                  children: [
                    "Special Defense: ",
                    e.detailPokemon.stats["Special Defense"],
                  ],
                }),
                T.jsxs("div", {
                  children: ["Speed: ", e.detailPokemon.stats.Speed],
                }),
              ],
            }),
            T.jsxs("div", {
              className: "card text-left",
              style: { backgroundColor: e.detailPokemon.color },
              children: [
                T.jsx("h1", { children: "Description" }),
                T.jsx("p", { children: e.detailPokemon.description }),
              ],
            }),
            T.jsxs("div", {
              className: "card text-left",
              style: { backgroundColor: e.detailPokemon.color },
              children: [
                T.jsx("h1", { children: "Abilities" }),
                e.detailPokemon.abilities.map((t, n) =>
                  T.jsxs(
                    "div",
                    {
                      className: "card-abilities",
                      children: [
                        T.jsxs("div", {
                          children: [
                            T.jsx("strong", { children: "name" }),
                            ": ",
                            t.name,
                          ],
                        }),
                        T.jsxs("div", {
                          children: [
                            T.jsx("strong", { children: "effect" }),
                            ": ",
                            t.effect,
                          ],
                        }),
                        T.jsxs("div", {
                          children: [
                            T.jsx("strong", { children: "description" }),
                            ": ",
                            t.description,
                          ],
                        }),
                      ],
                    },
                    n
                  )
                ),
              ],
            }),
          ],
        }),
      }),
    }),
  Yd = ({ pokemon: e }) => {
    const [t, n] = Zt.useState(!1),
      r = () => n(!0),
      o = () => n(!1);
    return T.jsxs(T.Fragment, {
      children: [
        t && T.jsx(Gd, { closeModel: o, detailPokemon: e }),
        T.jsxs("div", {
          onClick: r,
          className: "pokemon-card",
          style: { backgroundColor: e.color },
          children: [
            T.jsx("img", { src: e.imageUrl, alt: e.name, width: 200 }),
            T.jsx("h1", { children: e.name }),
            T.jsx("div", {
              className: "types-container",
              children: e.types.map((i, l) =>
                T.jsx(
                  "span",
                  {
                    className: "type-badge",
                    style: { backgroundColor: ac[i.toLowerCase()] },
                    children: i,
                  },
                  l
                )
              ),
            }),
            T.jsx("p", { className: "description", children: e.description }),
          ],
        }),
      ],
    });
  },
  Xd = () => {
    const [e] = Zt.useState(Qa),
      [t, n] = Zt.useState(Qa),
      r = (o) => {
        let i = e.filter((l) => l.name.toLowerCase().includes(o.target.value));
        n(i);
      };
    return T.jsxs(T.Fragment, {
      children: [
        T.jsx("input", {
          type: "text",
          placeholder: "cari pokemon . . . ",
          className: "search",
          onChange: r,
        }),
        T.jsx("div", {
          className: "list-pokemon",
          children:
            t.length === 0
              ? T.jsx("h1", { children: "Data tidak ditemukan" })
              : t.map((o) => T.jsx(Yd, { pokemon: o }, o.id)),
        }),
      ],
    });
  },
  Zd = () =>
    T.jsx("div", {
      className: "footer",
      children: "Copyright © 2024 by Fikri Amrullah",
    });
function Jd() {
  return T.jsxs(T.Fragment, { children: [T.jsx(Xd, {}), T.jsx(Zd, {})] });
}
Yo.createRoot(document.getElementById("root")).render(
  T.jsx(nt.StrictMode, { children: T.jsx(Jd, {}) })
);
