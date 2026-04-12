import Oe, { memo as _e, useMemo as Be, useCallback as D, useRef as le, useState as Y, useEffect as K, useLayoutEffect as ut, useId as xt, forwardRef as gt, createContext as Gt } from "react";
var Ke = { exports: {} }, ke = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Kt() {
  if (dt) return ke;
  dt = 1;
  var n = Oe, s = Symbol.for("react.element"), d = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(h, c, g) {
    var v, p = {}, j = null, A = null;
    g !== void 0 && (j = "" + g), c.key !== void 0 && (j = "" + c.key), c.ref !== void 0 && (A = c.ref);
    for (v in c) l.call(c, v) && !f.hasOwnProperty(v) && (p[v] = c[v]);
    if (h && h.defaultProps) for (v in c = h.defaultProps, c) p[v] === void 0 && (p[v] = c[v]);
    return { $$typeof: s, type: h, key: j, ref: A, props: p, _owner: a.current };
  }
  return ke.Fragment = d, ke.jsx = _, ke.jsxs = _, ke;
}
var Se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function Jt() {
  return ht || (ht = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Oe, s = Symbol.for("react.element"), d = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), h = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), O = Symbol.iterator, $ = "@@iterator";
    function i(t) {
      if (t === null || typeof t != "object")
        return null;
      var r = O && t[O] || t[$];
      return typeof r == "function" ? r : null;
    }
    var I = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(t) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), m = 1; m < r; m++)
          o[m - 1] = arguments[m];
        B("error", t, o);
      }
    }
    function B(t, r, o) {
      {
        var m = I.ReactDebugCurrentFrame, N = m.getStackAddendum();
        N !== "" && (r += "%s", o = o.concat([N]));
        var T = o.map(function(w) {
          return String(w);
        });
        T.unshift("Warning: " + r), Function.prototype.apply.call(console[t], console, T);
      }
    }
    var H = !1, S = !1, E = !1, x = !1, y = !1, J;
    J = Symbol.for("react.module.reference");
    function R(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === l || t === f || y || t === a || t === g || t === v || x || t === A || H || S || E || typeof t == "object" && t !== null && (t.$$typeof === j || t.$$typeof === p || t.$$typeof === _ || t.$$typeof === h || t.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === J || t.getModuleId !== void 0));
    }
    function se(t, r, o) {
      var m = t.displayName;
      if (m)
        return m;
      var N = r.displayName || r.name || "";
      return N !== "" ? o + "(" + N + ")" : o;
    }
    function ee(t) {
      return t.displayName || "Context";
    }
    function te(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case l:
          return "Fragment";
        case d:
          return "Portal";
        case f:
          return "Profiler";
        case a:
          return "StrictMode";
        case g:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case h:
            var r = t;
            return ee(r) + ".Consumer";
          case _:
            var o = t;
            return ee(o._context) + ".Provider";
          case c:
            return se(t, t.render, "ForwardRef");
          case p:
            var m = t.displayName || null;
            return m !== null ? m : te(t.type) || "Memo";
          case j: {
            var N = t, T = N._payload, w = N._init;
            try {
              return te(w(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, X = 0, ce, ie, je, Ee, U, we, ye;
    function Le() {
    }
    Le.__reactDisabledLog = !0;
    function Ae() {
      {
        if (X === 0) {
          ce = console.log, ie = console.info, je = console.warn, Ee = console.error, U = console.group, we = console.groupCollapsed, ye = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        X++;
      }
    }
    function ze() {
      {
        if (X--, X === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, t, {
              value: ce
            }),
            info: F({}, t, {
              value: ie
            }),
            warn: F({}, t, {
              value: je
            }),
            error: F({}, t, {
              value: Ee
            }),
            group: F({}, t, {
              value: U
            }),
            groupCollapsed: F({}, t, {
              value: we
            }),
            groupEnd: F({}, t, {
              value: ye
            })
          });
        }
        X < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ce = I.ReactCurrentDispatcher, Ne;
    function me(t, r, o) {
      {
        if (Ne === void 0)
          try {
            throw Error();
          } catch (N) {
            var m = N.stack.trim().match(/\n( *(at )?)/);
            Ne = m && m[1] || "";
          }
        return `
` + Ne + t;
      }
    }
    var pe = !1, ve;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new Me();
    }
    function $e(t, r) {
      if (!t || pe)
        return "";
      {
        var o = ve.get(t);
        if (o !== void 0)
          return o;
      }
      var m;
      pe = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = Ce.current, Ce.current = null, Ae();
      try {
        if (r) {
          var w = function() {
            throw Error();
          };
          if (Object.defineProperty(w.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(w, []);
            } catch (G) {
              m = G;
            }
            Reflect.construct(t, [], w);
          } else {
            try {
              w.call();
            } catch (G) {
              m = G;
            }
            t.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            m = G;
          }
          t();
        }
      } catch (G) {
        if (G && m && typeof G.stack == "string") {
          for (var b = G.stack.split(`
`), q = m.stack.split(`
`), z = b.length - 1, W = q.length - 1; z >= 1 && W >= 0 && b[z] !== q[W]; )
            W--;
          for (; z >= 1 && W >= 0; z--, W--)
            if (b[z] !== q[W]) {
              if (z !== 1 || W !== 1)
                do
                  if (z--, W--, W < 0 || b[z] !== q[W]) {
                    var ne = `
` + b[z].replace(" at new ", " at ");
                    return t.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", t.displayName)), typeof t == "function" && ve.set(t, ne), ne;
                  }
                while (z >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        pe = !1, Ce.current = T, ze(), Error.prepareStackTrace = N;
      }
      var be = t ? t.displayName || t.name : "", he = be ? me(be) : "";
      return typeof t == "function" && ve.set(t, he), he;
    }
    function We(t, r, o) {
      return $e(t, !1);
    }
    function He(t) {
      var r = t.prototype;
      return !!(r && r.isReactComponent);
    }
    function xe(t, r, o) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return $e(t, He(t));
      if (typeof t == "string")
        return me(t);
      switch (t) {
        case g:
          return me("Suspense");
        case v:
          return me("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return We(t.render);
          case p:
            return xe(t.type, r, o);
          case j: {
            var m = t, N = m._payload, T = m._init;
            try {
              return xe(T(N), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, Pe = {}, Ie = I.ReactDebugCurrentFrame;
    function de(t) {
      if (t) {
        var r = t._owner, o = xe(t.type, t._source, r ? r.type : null);
        Ie.setExtraStackFrame(o);
      } else
        Ie.setExtraStackFrame(null);
    }
    function Re(t, r, o, m, N) {
      {
        var T = Function.call.bind(ue);
        for (var w in t)
          if (T(t, w)) {
            var b = void 0;
            try {
              if (typeof t[w] != "function") {
                var q = Error((m || "React class") + ": " + o + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw q.name = "Invariant Violation", q;
              }
              b = t[w](r, w, m, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              b = z;
            }
            b && !(b instanceof Error) && (de(N), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", o, w, typeof b), de(null)), b instanceof Error && !(b.message in Pe) && (Pe[b.message] = !0, de(N), C("Failed %s type: %s", o, b.message), de(null));
          }
      }
    }
    var Fe = Array.isArray;
    function Z(t) {
      return Fe(t);
    }
    function De(t) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return o;
      }
    }
    function Tt(t) {
      try {
        return Xe(t), !1;
      } catch {
        return !0;
      }
    }
    function Xe(t) {
      return "" + t;
    }
    function Qe(t) {
      if (Tt(t))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", De(t)), Xe(t);
    }
    var et = I.ReactCurrentOwner, Bt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tt, nt;
    function Et(t) {
      if (ue.call(t, "ref")) {
        var r = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Lt(t) {
      if (ue.call(t, "key")) {
        var r = Object.getOwnPropertyDescriptor(t, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function At(t, r) {
      typeof t.ref == "string" && et.current;
    }
    function $t(t, r) {
      {
        var o = function() {
          tt || (tt = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Pt(t, r) {
      {
        var o = function() {
          nt || (nt = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Dt = function(t, r, o, m, N, T, w) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: t,
        key: r,
        ref: o,
        props: w,
        // Record the component responsible for creating this element.
        _owner: T
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Ot(t, r, o, m, N) {
      {
        var T, w = {}, b = null, q = null;
        o !== void 0 && (Qe(o), b = "" + o), Lt(r) && (Qe(r.key), b = "" + r.key), Et(r) && (q = r.ref, At(r, N));
        for (T in r)
          ue.call(r, T) && !Bt.hasOwnProperty(T) && (w[T] = r[T]);
        if (t && t.defaultProps) {
          var z = t.defaultProps;
          for (T in z)
            w[T] === void 0 && (w[T] = z[T]);
        }
        if (b || q) {
          var W = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          b && $t(w, W), q && Pt(w, W);
        }
        return Dt(t, b, q, N, m, et.current, w);
      }
    }
    var Ue = I.ReactCurrentOwner, rt = I.ReactDebugCurrentFrame;
    function ge(t) {
      if (t) {
        var r = t._owner, o = xe(t.type, t._source, r ? r.type : null);
        rt.setExtraStackFrame(o);
      } else
        rt.setExtraStackFrame(null);
    }
    var Ve;
    Ve = !1;
    function qe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === s;
    }
    function st() {
      {
        if (Ue.current) {
          var t = te(Ue.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function zt(t) {
      return "";
    }
    var at = {};
    function Mt(t) {
      {
        var r = st();
        if (!r) {
          var o = typeof t == "string" ? t : t.displayName || t.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function ot(t, r) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var o = Mt(r);
        if (at[o])
          return;
        at[o] = !0;
        var m = "";
        t && t._owner && t._owner !== Ue.current && (m = " It was passed a child from " + te(t._owner.type) + "."), ge(t), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, m), ge(null);
      }
    }
    function lt(t, r) {
      {
        if (typeof t != "object")
          return;
        if (Z(t))
          for (var o = 0; o < t.length; o++) {
            var m = t[o];
            qe(m) && ot(m, r);
          }
        else if (qe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var N = i(t);
          if (typeof N == "function" && N !== t.entries)
            for (var T = N.call(t), w; !(w = T.next()).done; )
              qe(w.value) && ot(w.value, r);
        }
      }
    }
    function Wt(t) {
      {
        var r = t.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === p))
          o = r.propTypes;
        else
          return;
        if (o) {
          var m = te(r);
          Re(o, t.props, "prop", m, t);
        } else if (r.PropTypes !== void 0 && !Ve) {
          Ve = !0;
          var N = te(r);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ht(t) {
      {
        for (var r = Object.keys(t.props), o = 0; o < r.length; o++) {
          var m = r[o];
          if (m !== "children" && m !== "key") {
            ge(t), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), ge(null);
            break;
          }
        }
        t.ref !== null && (ge(t), C("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var it = {};
    function ct(t, r, o, m, N, T) {
      {
        var w = R(t);
        if (!w) {
          var b = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var q = zt();
          q ? b += q : b += st();
          var z;
          t === null ? z = "null" : Z(t) ? z = "array" : t !== void 0 && t.$$typeof === s ? (z = "<" + (te(t.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : z = typeof t, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, b);
        }
        var W = Ot(t, r, o, N, T);
        if (W == null)
          return W;
        if (w) {
          var ne = r.children;
          if (ne !== void 0)
            if (m)
              if (Z(ne)) {
                for (var be = 0; be < ne.length; be++)
                  lt(ne[be], t);
                Object.freeze && Object.freeze(ne);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lt(ne, t);
        }
        if (ue.call(r, "key")) {
          var he = te(t), G = Object.keys(r).filter(function(Zt) {
            return Zt !== "key";
          }), Ye = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!it[he + Ye]) {
            var Yt = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ye, he, Yt, he), it[he + Ye] = !0;
          }
        }
        return t === l ? Ht(W) : Wt(W), W;
      }
    }
    function Ft(t, r, o) {
      return ct(t, r, o, !0);
    }
    function Ut(t, r, o) {
      return ct(t, r, o, !1);
    }
    var Vt = Ut, qt = Ft;
    Se.Fragment = l, Se.jsx = Vt, Se.jsxs = qt;
  }()), Se;
}
process.env.NODE_ENV === "production" ? Ke.exports = Kt() : Ke.exports = Jt();
var e = Ke.exports;
const k = (...n) => n.filter(Boolean).join(" "), Xt = "_root_h0f38_23", Qt = "_divider_h0f38_31", en = "_identity_h0f38_10", tn = "_logo_h0f38_11", nn = "_logoImg_h0f38_82", rn = "_avatar_h0f38_12", sn = "_avatarImg_h0f38_110", an = "_avatarCustom_h0f38_120", on = "_avatarInitials_h0f38_132", ln = "_onlineDot_h0f38_152", cn = "_nameGroup_h0f38_13", un = "_agentName_h0f38_14", dn = "_statusLine_h0f38_15", hn = "_onlineStatus_h0f38_210", fn = "_onlinePip_h0f38_219", _n = "_actions_h0f38_16", mn = "_iconButton_h0f38_278", pn = "_backButton_h0f38_319", vn = "_clearButton_h0f38_17", xn = "_closeButton_h0f38_18", P = {
  root: Xt,
  divider: Qt,
  identity: en,
  logo: tn,
  logoImg: nn,
  avatar: rn,
  avatarImg: sn,
  avatarCustom: an,
  avatarInitials: on,
  onlineDot: ln,
  nameGroup: cn,
  agentName: un,
  statusLine: dn,
  onlineStatus: hn,
  onlinePip: fn,
  actions: _n,
  iconButton: mn,
  backButton: pn,
  clearButton: vn,
  closeButton: xn
}, gn = "_root_s9umv_24", bn = "_rootBubble_s9umv_46", jn = "_dotsBubble_s9umv_55", wn = "_rootInline_s9umv_66", yn = "_dotsInline_s9umv_77", Cn = "_rootStandalone_s9umv_88", Nn = "_dotsStandalone_s9umv_102", In = "_dots_s9umv_9", Rn = "_dot_s9umv_9", kn = "_dot1_s9umv_133", Sn = "_dot2_s9umv_134", Tn = "_dot3_s9umv_135", Bn = "_inlineLabel_s9umv_165", En = "_caption_s9umv_177", V = {
  root: gn,
  rootBubble: bn,
  dotsBubble: jn,
  rootInline: wn,
  dotsInline: yn,
  rootStandalone: Cn,
  dotsStandalone: Nn,
  dots: In,
  dot: Rn,
  dot1: kn,
  dot2: Sn,
  dot3: Tn,
  inlineLabel: Bn,
  caption: En
}, Ln = {
  bubble: "Thinking…",
  inline: "Assistant is typing",
  standalone: "Thinking…"
}, Je = _e(
  ({
    variant: n = "bubble",
    label: s,
    caption: d,
    className: l
  }) => {
    const a = s ?? Ln[n], f = d ?? a, _ = n === "bubble", h = n === "inline", c = n === "standalone";
    return /* @__PURE__ */ e.jsxs(
      "span",
      {
        className: k(
          V.root,
          _ && V.rootBubble,
          h && V.rootInline,
          c && V.rootStandalone,
          l
        ),
        role: "status",
        "aria-live": "polite",
        "aria-label": a,
        children: [
          /* @__PURE__ */ e.jsxs(
            "span",
            {
              className: k(
                V.dots,
                _ && V.dotsBubble,
                h && V.dotsInline,
                c && V.dotsStandalone
              ),
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ e.jsx("span", { className: k(V.dot, V.dot1) }),
                /* @__PURE__ */ e.jsx("span", { className: k(V.dot, V.dot2) }),
                /* @__PURE__ */ e.jsx("span", { className: k(V.dot, V.dot3) })
              ]
            }
          ),
          c && /* @__PURE__ */ e.jsx("span", { className: V.caption, "aria-hidden": "true", children: f }),
          h && /* @__PURE__ */ e.jsx("span", { className: V.inlineLabel, "aria-hidden": "true", children: "Typing…" })
        ]
      }
    );
  }
);
Je.displayName = "TypingIndicator";
const An = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
      }
    )
  }
), $n = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e.jsx("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  }
), Pn = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "15",
    height: "15",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z",
        clipRule: "evenodd"
      }
    )
  }
), Dn = ({ agentAvatar: n, agentName: s }) => {
  const d = Be(() => {
    const l = s.trim().split(/\s+/);
    return l.length === 1 ? l[0].slice(0, 2).toUpperCase() : (l[0][0] + l[1][0]).toUpperCase();
  }, [s]);
  return /* @__PURE__ */ e.jsxs("span", { className: P.avatar, "aria-hidden": "true", children: [
    typeof n == "string" ? /* @__PURE__ */ e.jsx(
      "img",
      {
        src: n,
        alt: "",
        className: P.avatarImg,
        draggable: !1
      }
    ) : n != null ? /* @__PURE__ */ e.jsx("span", { className: P.avatarCustom, children: n }) : /* @__PURE__ */ e.jsx("span", { className: P.avatarInitials, children: d }),
    /* @__PURE__ */ e.jsx("span", { className: P.onlineDot, "aria-hidden": "true" })
  ] });
}, On = ({ logo: n }) => typeof n == "string" ? /* @__PURE__ */ e.jsx("span", { className: P.logo, "aria-hidden": "true", children: /* @__PURE__ */ e.jsx("img", { src: n, alt: "", className: P.logoImg, draggable: !1 }) }) : /* @__PURE__ */ e.jsx("span", { className: P.logo, "aria-hidden": "true", children: n }), bt = _e(
  ({
    agentName: n = "AI Assistant",
    agentAvatar: s,
    logo: d,
    isLoading: l = !1,
    onClose: a,
    onBack: f,
    onClear: _,
    dialogLabelId: h,
    className: c
  }) => /* @__PURE__ */ e.jsxs("header", { className: k(P.root, c), children: [
    f && /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: k(P.iconButton, P.backButton),
        onClick: f,
        "aria-label": "Go back",
        title: "Go back",
        children: /* @__PURE__ */ e.jsx(An, {})
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: P.identity, children: [
      d && /* @__PURE__ */ e.jsx(On, { logo: d }),
      /* @__PURE__ */ e.jsx(Dn, { agentAvatar: s, agentName: n }),
      /* @__PURE__ */ e.jsxs("div", { className: P.nameGroup, children: [
        /* @__PURE__ */ e.jsx(
          "h2",
          {
            id: h,
            className: P.agentName,
            title: n,
            children: n
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: P.statusLine, children: l ? /* @__PURE__ */ e.jsx(Je, { variant: "inline" }) : /* @__PURE__ */ e.jsxs(
          "span",
          {
            className: P.onlineStatus,
            role: "status",
            "aria-label": "Assistant is online",
            children: [
              /* @__PURE__ */ e.jsx("span", { className: P.onlinePip, "aria-hidden": "true" }),
              "Online"
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: P.actions, role: "group", "aria-label": "Chat controls", children: [
      _ && /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          className: k(P.iconButton, P.clearButton),
          onClick: _,
          "aria-label": "Clear conversation",
          title: "Clear conversation",
          children: /* @__PURE__ */ e.jsx(Pn, {})
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          className: k(P.iconButton, P.closeButton),
          onClick: a,
          "aria-label": "Close chat",
          title: "Close chat",
          children: /* @__PURE__ */ e.jsx($n, {})
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: P.divider, "aria-hidden": "true" })
  ] })
);
bt.displayName = "ChatHeader";
const zn = "_row_le3r9_15", Mn = "_timestamp_le3r9_24", Wn = "_rowUser_le3r9_31", Hn = "_rowAssistant_le3r9_36", Fn = "_avatar_le3r9_42", Un = "_avatarPulse_le3r9_56", Vn = "_bubble_le3r9_67", qn = "_bubbleUser_le3r9_95", Yn = "_bubbleDone_le3r9_104", Zn = "_bubbleLoading_le3r9_112", Gn = "_bubbleStreaming_le3r9_122", Kn = "_bubbleError_le3r9_130", Jn = "_text_le3r9_139", Xn = "_streamCursor_le3r9_178", Qn = "_errorBody_le3r9_196", er = "_errorMessage_le3r9_202", tr = "_errorIcon_le3r9_210", nr = "_retryButton_le3r9_218", rr = "_timestampUser_le3r9_284", sr = "_timestampAssistant_le3r9_288", M = {
  row: zn,
  timestamp: Mn,
  rowUser: Wn,
  rowAssistant: Hn,
  avatar: Fn,
  avatarPulse: Un,
  bubble: Vn,
  bubbleUser: qn,
  bubbleDone: Yn,
  bubbleLoading: Zn,
  bubbleStreaming: Gn,
  bubbleError: Kn,
  text: Jn,
  streamCursor: Xn,
  errorBody: Qn,
  errorMessage: er,
  errorIcon: tr,
  retryButton: nr,
  timestampUser: rr,
  timestampAssistant: sr
};
function ar(n) {
  return n.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}
const or = () => /* @__PURE__ */ e.jsx("span", { className: M.streamCursor, "aria-hidden": "true" }), lr = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "14",
    height: "14",
    "aria-hidden": "true",
    focusable: "false",
    className: M.errorIcon,
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
        clipRule: "evenodd"
      }
    )
  }
), ir = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "12",
    height: "12",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.389Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z",
        clipRule: "evenodd"
      }
    )
  }
), jt = _e(
  ({ message: n, onRetry: s, className: d }) => {
    const { role: l, content: a, timestamp: f, status: _ } = n, h = l === "user", c = _ === "loading", g = _ === "streaming", v = _ === "error", p = !_ || _ === "done", j = D(
      ($) => {
        $.stopPropagation(), s == null || s();
      },
      [s]
    ), A = () => c ? /* @__PURE__ */ e.jsx(Je, { variant: "bubble" }) : v ? /* @__PURE__ */ e.jsxs("span", { className: M.errorBody, children: [
      /* @__PURE__ */ e.jsxs("span", { className: M.errorMessage, children: [
        /* @__PURE__ */ e.jsx(lr, {}),
        /* @__PURE__ */ e.jsx("span", { children: a || "Something went wrong." })
      ] }),
      s && /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          className: M.retryButton,
          onClick: j,
          "aria-label": "Retry message",
          children: [
            /* @__PURE__ */ e.jsx(ir, {}),
            "Retry"
          ]
        }
      )
    ] }) : g ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("span", { className: M.text, children: a }),
      /* @__PURE__ */ e.jsx(or, {})
    ] }) : /* @__PURE__ */ e.jsx("span", { className: M.text, children: a }), O = !h && (c || g) ? { "aria-live": "polite", "aria-atomic": !1 } : {};
    return /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: k(
          M.row,
          h ? M.rowUser : M.rowAssistant,
          d
        ),
        role: "listitem",
        children: [
          !h && /* @__PURE__ */ e.jsx(
            "span",
            {
              className: k(M.avatar, c && M.avatarPulse),
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: k(
                M.bubble,
                h && M.bubbleUser,
                c && M.bubbleLoading,
                g && M.bubbleStreaming,
                v && M.bubbleError,
                p && !h && M.bubbleDone
              ),
              ...O,
              children: A()
            }
          ),
          (p || v) && /* @__PURE__ */ e.jsx(
            "time",
            {
              className: k(
                M.timestamp,
                h ? M.timestampUser : M.timestampAssistant
              ),
              dateTime: f.toISOString(),
              "aria-hidden": "true",
              children: ar(f)
            }
          )
        ]
      }
    );
  }
);
jt.displayName = "MessageBubble";
const cr = "_root_oqiw7_8", ur = "_scrollArea_oqiw7_9", dr = "_list_oqiw7_10", hr = "_listItem_oqiw7_93", fr = "_sentinelItem_oqiw7_117", _r = "_sentinel_oqiw7_11", mr = "_emptyState_oqiw7_134", pr = "_emptyIcon_oqiw7_151", vr = "_emptyText_oqiw7_172", xr = "_emptySubtext_oqiw7_180", gr = "_scrollPill_oqiw7_13", oe = {
  root: cr,
  scrollArea: ur,
  list: dr,
  listItem: hr,
  sentinelItem: fr,
  sentinel: _r,
  emptyState: mr,
  emptyIcon: pr,
  emptyText: vr,
  emptySubtext: xr,
  scrollPill: gr
}, br = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd"
      }
    )
  }
), jr = () => /* @__PURE__ */ e.jsxs("div", { className: oe.emptyState, "aria-hidden": "true", children: [
  /* @__PURE__ */ e.jsx("span", { className: oe.emptyIcon, children: /* @__PURE__ */ e.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      width: "36",
      height: "36",
      "aria-hidden": "true",
      children: /* @__PURE__ */ e.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
    }
  ) }),
  /* @__PURE__ */ e.jsx("p", { className: oe.emptyText, children: "Start the conversation" }),
  /* @__PURE__ */ e.jsx("p", { className: oe.emptySubtext, children: "Send a message to get started" })
] }), wt = _e(
  ({ messages: n, onRetry: s, className: d }) => {
    const l = le(null), a = le(null), [f, _] = Y(!1), h = le(n.length);
    K(() => {
      const p = a.current;
      if (!p) return;
      const j = new IntersectionObserver(
        ([A]) => {
          _(!A.isIntersecting);
        },
        {
          root: l.current,
          threshold: 0.1
          // 10% of the sentinel must be visible to count
        }
      );
      return j.observe(p), () => j.disconnect();
    }, []);
    const c = D((p = "smooth") => {
      var j;
      (j = a.current) == null || j.scrollIntoView({ behavior: p, block: "nearest" });
    }, []);
    ut(() => {
      if (f) return;
      const p = n.length, j = n[n.length - 1], A = p > h.current, O = (j == null ? void 0 : j.status) === "streaming" || (j == null ? void 0 : j.status) === "loading";
      (A || O) && c("smooth"), h.current = p;
    }, [n, f, c]), ut(() => {
      c("instant");
    }, []);
    const g = D(() => {
      c("smooth"), _(!1);
    }, [c]), v = n.length === 0;
    return /* @__PURE__ */ e.jsxs("div", { className: k(oe.root, d), children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          ref: l,
          className: oe.scrollArea,
          role: "log",
          "aria-live": "polite",
          "aria-label": "Chat messages",
          "aria-relevant": "additions",
          tabIndex: 0,
          children: v ? /* @__PURE__ */ e.jsx(jr, {}) : (
            // Semantic list — MessageBubble uses role="listitem"
            /* @__PURE__ */ e.jsxs("ul", { className: oe.list, "aria-label": "Message history", children: [
              n.map((p) => /* @__PURE__ */ e.jsx("li", { className: oe.listItem, children: /* @__PURE__ */ e.jsx(
                jt,
                {
                  message: p,
                  onRetry: p.role === "assistant" && p.status === "error" ? s : void 0
                }
              ) }, p.id)),
              /* @__PURE__ */ e.jsx("li", { "aria-hidden": "true", className: oe.sentinelItem, children: /* @__PURE__ */ e.jsx("div", { ref: a, className: oe.sentinel }) })
            ] })
          )
        }
      ),
      f && !v && /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          className: oe.scrollPill,
          onClick: g,
          "aria-label": "Scroll to latest message",
          children: [
            /* @__PURE__ */ e.jsx(br, {}),
            /* @__PURE__ */ e.jsx("span", { children: "Latest" })
          ]
        }
      )
    ] });
  }
);
wt.displayName = "MessageList";
const wr = "_root_5synd_14", yr = "_divider_5synd_25", Cr = "_textareaRow_5synd_5", Nr = "_textarea_5synd_5", Ir = "_loading_5synd_87", Rr = "_actionBar_5synd_6", kr = "_sendButton_5synd_104", Sr = "_sendButtonActive_5synd_132", Tr = "_spinner_5synd_161", Br = "_srOnly_5synd_172", ae = {
  root: wr,
  divider: yr,
  textareaRow: Cr,
  textarea: Nr,
  loading: Ir,
  actionBar: Rr,
  sendButton: kr,
  sendButtonActive: Sr,
  spinner: Tr,
  srOnly: Br
}, Er = 22, Lr = 20, Ar = 5, ft = Er * Ar + Lr, yt = ({
  onSend: n,
  isLoading: s = !1,
  placeholder: d = "Type a message…",
  autoFocus: l = !1,
  className: a
}) => {
  const [f, _] = Y(""), h = le(null), c = xt(), g = D(() => {
    const i = h.current;
    i && (i.style.height = "auto", i.style.height = `${Math.min(i.scrollHeight, ft)}px`, i.style.overflowY = i.scrollHeight > ft ? "auto" : "hidden");
  }, []), v = D(() => {
    const i = h.current;
    i && (i.style.height = "auto", i.style.overflowY = "hidden");
  }, []);
  K(() => {
    g();
  }, [f, g]), K(() => {
    if (l && h.current) {
      const i = requestAnimationFrame(() => {
        var I;
        (I = h.current) == null || I.focus();
      });
      return () => cancelAnimationFrame(i);
    }
  }, [l]);
  const p = le(s);
  K(() => {
    var i;
    p.current && !s && ((i = h.current) == null || i.focus()), p.current = s;
  }, [s]);
  const j = D(() => {
    const i = f.trim();
    !i || s || (n(i), _(""), v());
  }, [f, s, n, v]), A = D(
    (i) => {
      i.key === "Enter" && !i.shiftKey && (i.preventDefault(), j());
    },
    [j]
  ), O = f.trim().length > 0 && !s, $ = `${c}-input`;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: k(ae.root, s && ae.loading, a),
      role: "group",
      "aria-label": "Message input",
      children: [
        /* @__PURE__ */ e.jsx("div", { className: ae.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ e.jsxs("div", { className: ae.textareaRow, children: [
          /* @__PURE__ */ e.jsx("label", { htmlFor: $, className: ae.srOnly, children: d }),
          /* @__PURE__ */ e.jsx(
            "textarea",
            {
              ref: h,
              id: $,
              className: ae.textarea,
              value: f,
              onChange: (i) => _(i.target.value),
              onKeyDown: A,
              placeholder: d,
              disabled: s,
              rows: 1,
              "aria-label": d,
              "aria-disabled": s,
              "aria-multiline": "true",
              "aria-describedby": s ? `${c}-loading` : void 0,
              autoComplete: "off",
              autoCorrect: "on",
              autoCapitalize: "sentences",
              spellCheck: !0
            }
          ),
          s && /* @__PURE__ */ e.jsx("span", { id: `${c}-loading`, className: ae.srOnly, "aria-live": "polite", children: "Waiting for response…" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: ae.actionBar, children: /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            className: k(ae.sendButton, O && ae.sendButtonActive),
            onClick: j,
            disabled: !O,
            "aria-label": "Send message",
            "aria-disabled": !O,
            tabIndex: 0,
            children: s ? /* @__PURE__ */ e.jsx(Pr, {}) : /* @__PURE__ */ e.jsx($r, {})
          }
        ) })
      ]
    }
  );
};
yt.displayName = "InputBar";
const $r = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e.jsx("path", { d: "M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" })
  }
), Pr = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    className: ae.spinner,
    children: /* @__PURE__ */ e.jsx(
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "9",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeDasharray: "40 20"
      }
    )
  }
), Dr = "_panel_hphv5_8", Or = "_opening_hphv5_15", zr = "_closing_hphv5_16", Mr = "_errorBanner_hphv5_125", Wr = "_errorBannerIcon_hphv5_155", Hr = "_errorBannerText_hphv5_162", Fr = "_errorBannerDismiss_hphv5_170", fe = {
  panel: Dr,
  opening: Or,
  closing: zr,
  errorBanner: Mr,
  errorBannerIcon: Wr,
  errorBannerText: Hr,
  errorBannerDismiss: Fr
}, Ur = 200, Ct = gt(
  ({
    isOpen: n,
    onClose: s,
    messages: d,
    isLoading: l,
    error: a,
    onSend: f,
    onRetry: _,
    onClear: h,
    agentName: c = "AI Assistant",
    agentAvatar: g,
    logo: v,
    placeholder: p,
    onBack: j,
    dialogId: A,
    dialogLabelId: O,
    className: $
  }, i) => {
    const [I, C] = Y(n), [B, H] = Y(!1), S = le(null);
    return K(() => (S.current && (clearTimeout(S.current), S.current = null), n ? (H(!1), C(!0)) : (H(!0), S.current = setTimeout(() => {
      C(!1), H(!1);
    }, Ur)), () => {
      S.current && clearTimeout(S.current);
    }), [n]), I ? /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: i,
        id: A,
        className: k(
          fe.panel,
          B ? fe.closing : fe.opening,
          $
        ),
        role: "dialog",
        "aria-modal": "true",
        "aria-label": c,
        "aria-labelledby": O,
        onClick: (E) => E.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsx(
            bt,
            {
              agentName: c,
              agentAvatar: g,
              logo: v,
              isLoading: l,
              onClose: s,
              onBack: j,
              onClear: d.length > 0 ? h : void 0,
              dialogLabelId: O
            }
          ),
          /* @__PURE__ */ e.jsx(
            wt,
            {
              messages: d,
              onRetry: _
            }
          ),
          /* @__PURE__ */ e.jsx(
            yt,
            {
              onSend: f,
              isLoading: l,
              placeholder: p,
              autoFocus: n && !B
            }
          ),
          a && /* @__PURE__ */ e.jsxs(
            "div",
            {
              className: fe.errorBanner,
              role: "alert",
              "aria-live": "assertive",
              "aria-atomic": "true",
              children: [
                /* @__PURE__ */ e.jsx("span", { className: fe.errorBannerIcon, "aria-hidden": "true", children: "⚠" }),
                /* @__PURE__ */ e.jsx("span", { className: fe.errorBannerText, children: a }),
                /* @__PURE__ */ e.jsx(
                  "button",
                  {
                    type: "button",
                    className: fe.errorBannerDismiss,
                    onClick: _,
                    "aria-label": "Retry last message",
                    children: "Retry"
                  }
                )
              ]
            }
          )
        ]
      }
    ) : null;
  }
);
Ct.displayName = "ChatPanel";
const Vr = "_button_zs89q_32", qr = "_buttonOpen_zs89q_98", Yr = "_iconWrap_zs89q_16", Zr = "_iconSlot_zs89q_122", Gr = "_iconChat_zs89q_15", Kr = "_iconClose_zs89q_15", Jr = "_iconHidden_zs89q_148", Xr = "_logoImg_zs89q_156", Qr = "_logoNode_zs89q_166", es = "_unreadDot_zs89q_45", ts = "_ripple_zs89q_45", Q = {
  button: Vr,
  buttonOpen: qr,
  iconWrap: Yr,
  iconSlot: Zr,
  iconChat: Gr,
  iconClose: Kr,
  iconHidden: Jr,
  logoImg: Xr,
  logoNode: Qr,
  unreadDot: es,
  ripple: ts
}, ns = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223Z",
        clipRule: "evenodd"
      }
    )
  }
), rs = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd"
      }
    )
  }
), ss = ({ logo: n }) => typeof n == "string" ? /* @__PURE__ */ e.jsx(
  "img",
  {
    src: n,
    alt: "",
    className: Q.logoImg,
    draggable: !1
  }
) : /* @__PURE__ */ e.jsx("span", { className: Q.logoNode, children: n }), Nt = gt(
  ({
    isOpen: n,
    primaryColor: s,
    logo: d,
    messageCount: l = 0,
    className: a,
    ...f
    // aria-label, aria-expanded, aria-controls, onClick, etc.
  }, _) => {
    const h = !n && l > 0;
    return /* @__PURE__ */ e.jsxs(
      "button",
      {
        ref: _,
        type: "button",
        className: k(
          Q.button,
          n && Q.buttonOpen,
          a
        ),
        ...f,
        children: [
          /* @__PURE__ */ e.jsxs("span", { className: Q.iconWrap, children: [
            /* @__PURE__ */ e.jsx(
              "span",
              {
                className: k(
                  Q.iconSlot,
                  Q.iconChat,
                  n && Q.iconHidden
                ),
                "aria-hidden": "true",
                children: d ? /* @__PURE__ */ e.jsx(ss, { logo: d }) : /* @__PURE__ */ e.jsx(ns, {})
              }
            ),
            /* @__PURE__ */ e.jsx(
              "span",
              {
                className: k(
                  Q.iconSlot,
                  Q.iconClose,
                  !n && Q.iconHidden
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ e.jsx(rs, {})
              }
            )
          ] }),
          h && /* @__PURE__ */ e.jsx(
            "span",
            {
              className: Q.unreadDot,
              "aria-hidden": "true"
            }
          ),
          n && /* @__PURE__ */ e.jsx("span", { className: Q.ripple, "aria-hidden": "true" })
        ]
      }
    );
  }
);
Nt.displayName = "TriggerButton";
const as = "_root_zd8o3_8", os = "_header_zd8o3_9", ls = "_headerTop_zd8o3_51", is = "_logoWrap_zd8o3_59", cs = "_logoImg_zd8o3_68", us = "_closeButton_zd8o3_76", ds = "_welcomeHeading_zd8o3_107", hs = "_bodyWrapper_zd8o3_10", fs = "_scrollArea_zd8o3_11", _s = "_cards_zd8o3_12", ms = "_card_zd8o3_12", ps = "_cardClickable_zd8o3_192", vs = "_cardLabel_zd8o3_210", xs = "_recentRow_zd8o3_223", gs = "_recentContent_zd8o3_229", bs = "_recentMeta_zd8o3_234", js = "_recentName_zd8o3_242", ws = "_recentTime_zd8o3_251", ys = "_recentText_zd8o3_257", Cs = "_avatar_zd8o3_272", Ns = "_avatarSm_zd8o3_282", Is = "_avatarImg_zd8o3_287", Rs = "_avatarCustom_zd8o3_294", ks = "_avatarInitials_zd8o3_302", Ss = "_statusRow_zd8o3_318", Ts = "_statusIcon_zd8o3_324", Bs = "_statusContent_zd8o3_329", Es = "_statusTitle_zd8o3_334", Ls = "_statusUpdated_zd8o3_347", As = "_articlesCard_zd8o3_357", $s = "_searchBar_zd8o3_365", Ps = "_searchInput_zd8o3_374", Ds = "_searchIcon_zd8o3_392", Os = "_articleList_zd8o3_400", zs = "_articleItem_zd8o3_407", Ms = "_articleLink_zd8o3_411", Ws = "_articleTitle_zd8o3_441", Hs = "_noResults_zd8o3_458", Fs = "_ctaSection_zd8o3_13", Us = "_ctaButton_zd8o3_475", Vs = "_nav_zd8o3_14", qs = "_navItem_zd8o3_522", Ys = "_navItemActive_zd8o3_553", Zs = "_navLabel_zd8o3_561", u = {
  root: as,
  header: os,
  headerTop: ls,
  logoWrap: is,
  logoImg: cs,
  closeButton: us,
  welcomeHeading: ds,
  bodyWrapper: hs,
  scrollArea: fs,
  cards: _s,
  card: ms,
  cardClickable: ps,
  cardLabel: vs,
  recentRow: xs,
  recentContent: gs,
  recentMeta: bs,
  recentName: js,
  recentTime: ws,
  recentText: ys,
  avatar: Cs,
  avatarSm: Ns,
  avatarImg: Is,
  avatarCustom: Rs,
  avatarInitials: ks,
  statusRow: Ss,
  statusIcon: Ts,
  statusContent: Bs,
  statusTitle: Es,
  statusUpdated: Ls,
  articlesCard: As,
  searchBar: $s,
  searchInput: Ps,
  searchIcon: Ds,
  articleList: Os,
  articleItem: zs,
  articleLink: Ms,
  articleTitle: Ws,
  noResults: Hs,
  ctaSection: Fs,
  ctaButton: Us,
  nav: Vs,
  navItem: qs,
  navItemActive: Ys,
  navLabel: Zs
}, Gs = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), Ks = () => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ e.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ e.jsx("path", { d: "m21 21-4.35-4.35" })
    ]
  }
), _t = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "14",
    height: "14",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), Js = () => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ e.jsx("circle", { cx: "12", cy: "12", r: "12", fill: "#22c55e" }),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M7 12.5l3.5 3.5 6.5-7",
          stroke: "#fff",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none"
        }
      )
    ]
  }
), Xs = ({ active: n }) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    focusable: "false",
    fill: n ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ e.jsx("path", { d: "M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" }),
      /* @__PURE__ */ e.jsx("path", { d: "M9 21V12h6v9" })
    ]
  }
), Qs = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    focusable: "false",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /* @__PURE__ */ e.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
  }
), ea = () => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    focusable: "false",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ e.jsx("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
      /* @__PURE__ */ e.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
    ]
  }
), ta = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /* @__PURE__ */ e.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
  }
), na = ({ agentAvatar: n, agentName: s, size: d = "md" }) => {
  const l = Be(() => {
    const a = s.trim().split(/\s+/);
    return a.length === 1 ? a[0].slice(0, 2).toUpperCase() : (a[0][0] + a[1][0]).toUpperCase();
  }, [s]);
  return /* @__PURE__ */ e.jsx("span", { className: k(u.avatar, d === "sm" && u.avatarSm), "aria-hidden": "true", children: typeof n == "string" ? /* @__PURE__ */ e.jsx("img", { src: n, alt: "", className: u.avatarImg, draggable: !1 }) : n != null ? /* @__PURE__ */ e.jsx("span", { className: u.avatarCustom, children: n }) : /* @__PURE__ */ e.jsx("span", { className: u.avatarInitials, children: l }) });
}, ra = ({ logo: n }) => typeof n == "string" ? /* @__PURE__ */ e.jsx("span", { className: u.logoWrap, children: /* @__PURE__ */ e.jsx("img", { src: n, alt: "", className: u.logoImg, draggable: !1 }) }) : /* @__PURE__ */ e.jsx("span", { className: u.logoWrap, children: n }), It = _e(({
  welcomeMessage: n = `Need support?
How can we help?`,
  welcomeSubMessage: s,
  agentName: d = "AI Assistant",
  agentAvatar: l,
  logo: a,
  recentMessage: f,
  recentMessageTime: _,
  statusText: h,
  statusUpdated: c,
  helpArticles: g,
  showHelpArticles: v = !1,
  onStartChat: p,
  onShowHelp: j,
  onClose: A,
  onArticleClick: O,
  className: $
}) => {
  const [i, I] = Y(""), C = v && g && g.length > 0, B = Be(() => {
    if (!g) return [];
    if (!i.trim()) return g;
    const x = i.toLowerCase();
    return g.filter((y) => y.title.toLowerCase().includes(x));
  }, [g, i]), H = D(
    (x) => I(x.target.value),
    []
  ), S = f != null, E = h != null;
  return /* @__PURE__ */ e.jsxs("div", { className: k(u.root, $), children: [
    /* @__PURE__ */ e.jsxs("div", { className: u.header, children: [
      /* @__PURE__ */ e.jsxs("div", { className: u.headerTop, children: [
        a ? /* @__PURE__ */ e.jsx(ra, { logo: a }) : /* @__PURE__ */ e.jsx("span", { className: u.logoWrap, "aria-hidden": "true" }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            className: u.closeButton,
            onClick: A,
            "aria-label": "Close chat",
            children: /* @__PURE__ */ e.jsx(Gs, {})
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("h1", { className: u.welcomeHeading, children: [
        n.split(`
`).map((x, y) => /* @__PURE__ */ e.jsxs(Oe.Fragment, { children: [
          y > 0 && /* @__PURE__ */ e.jsx("br", {}),
          x
        ] }, y)),
        /* @__PURE__ */ e.jsx("br", {}),
        s == null ? void 0 : s.split(`
`).map((x, y) => /* @__PURE__ */ e.jsxs(Oe.Fragment, { children: [
          y > 0 && /* @__PURE__ */ e.jsx("br", {}),
          x
        ] }, y))
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: u.bodyWrapper, children: [
      /* @__PURE__ */ e.jsxs("div", { className: u.scrollArea, children: [
        /* @__PURE__ */ e.jsxs("div", { className: u.cards, children: [
          S && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              className: k(u.card, u.cardClickable),
              onClick: p,
              "aria-label": "View recent conversation",
              children: [
                /* @__PURE__ */ e.jsx("p", { className: u.cardLabel, children: "Recent message" }),
                /* @__PURE__ */ e.jsxs("div", { className: u.recentRow, children: [
                  /* @__PURE__ */ e.jsx(na, { agentAvatar: l, agentName: d, size: "sm" }),
                  /* @__PURE__ */ e.jsxs("div", { className: u.recentContent, children: [
                    /* @__PURE__ */ e.jsxs("div", { className: u.recentMeta, children: [
                      /* @__PURE__ */ e.jsx("span", { className: u.recentName, children: d }),
                      _ && /* @__PURE__ */ e.jsx("span", { className: u.recentTime, children: _ })
                    ] }),
                    /* @__PURE__ */ e.jsx("p", { className: u.recentText, children: f })
                  ] })
                ] })
              ]
            }
          ),
          E && /* @__PURE__ */ e.jsx("div", { className: u.card, children: /* @__PURE__ */ e.jsxs("div", { className: u.statusRow, children: [
            /* @__PURE__ */ e.jsx("span", { className: u.statusIcon, children: /* @__PURE__ */ e.jsx(Js, {}) }),
            /* @__PURE__ */ e.jsxs("div", { className: u.statusContent, children: [
              /* @__PURE__ */ e.jsxs("p", { className: u.statusTitle, children: [
                /* @__PURE__ */ e.jsx("strong", { children: "Status: " }),
                h
              ] }),
              c && /* @__PURE__ */ e.jsx("p", { className: u.statusUpdated, children: c })
            ] })
          ] }) }),
          C && /* @__PURE__ */ e.jsxs("div", { className: u.articlesCard, children: [
            /* @__PURE__ */ e.jsxs("div", { className: u.searchBar, children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "search",
                  className: u.searchInput,
                  placeholder: "Search for help",
                  value: i,
                  onChange: H,
                  "aria-label": "Search help articles"
                }
              ),
              /* @__PURE__ */ e.jsx("span", { className: u.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e.jsx(Ks, {}) })
            ] }),
            /* @__PURE__ */ e.jsx("ul", { className: u.articleList, "aria-label": "Help articles", children: B.length > 0 ? B.map((x, y) => /* @__PURE__ */ e.jsx("li", { className: u.articleItem, children: x.href ? /* @__PURE__ */ e.jsxs(
              "a",
              {
                href: x.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: u.articleLink,
                children: [
                  /* @__PURE__ */ e.jsx("span", { className: u.articleTitle, children: x.title }),
                  /* @__PURE__ */ e.jsx(_t, {})
                ]
              }
            ) : /* @__PURE__ */ e.jsxs(
              "button",
              {
                type: "button",
                className: u.articleLink,
                onClick: () => O == null ? void 0 : O(x),
                children: [
                  /* @__PURE__ */ e.jsx("span", { className: u.articleTitle, children: x.title }),
                  /* @__PURE__ */ e.jsx(_t, {})
                ]
              }
            ) }, y)) : /* @__PURE__ */ e.jsx("li", { className: u.noResults, children: "No results found" }) })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: u.ctaSection, children: /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            className: u.ctaButton,
            onClick: p,
            children: [
              /* @__PURE__ */ e.jsx(ta, {}),
              "Send us a message"
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ e.jsxs("nav", { className: u.nav, "aria-label": "Widget navigation", children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            className: k(u.navItem, u.navItemActive),
            "aria-label": "Home",
            "aria-current": "page",
            children: [
              /* @__PURE__ */ e.jsx(Xs, { active: !0 }),
              /* @__PURE__ */ e.jsx("span", { className: u.navLabel, children: "Home" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            className: u.navItem,
            onClick: p,
            "aria-label": "Messages",
            children: [
              /* @__PURE__ */ e.jsx(Qs, {}),
              /* @__PURE__ */ e.jsx("span", { className: u.navLabel, children: "Messages" })
            ]
          }
        ),
        C && j && /* @__PURE__ */ e.jsxs(
          "button",
          {
            type: "button",
            className: u.navItem,
            onClick: j,
            "aria-label": "Help",
            children: [
              /* @__PURE__ */ e.jsx(ea, {}),
              /* @__PURE__ */ e.jsx("span", { className: u.navLabel, children: "Help" })
            ]
          }
        )
      ] })
    ] })
  ] });
});
It.displayName = "WidgetHome";
const sa = "_root_1n96l_8", aa = "_header_1n96l_27", oa = "_title_1n96l_39", la = "_closeButton_1n96l_47", ia = "_headerDivider_1n96l_74", ca = "_scrollArea_1n96l_86", ua = "_searchBarWrap_1n96l_104", da = "_searchBar_1n96l_104", ha = "_searchInput_1n96l_125", fa = "_searchIcon_1n96l_138", _a = "_articleList_1n96l_146", ma = "_articleItem_1n96l_153", pa = "_articleLink_1n96l_155", va = "_articleTitle_1n96l_183", xa = "_noResults_1n96l_192", ga = "_nav_1n96l_202", ba = "_navItem_1n96l_210", ja = "_navItemActive_1n96l_234", wa = "_navLabel_1n96l_237", L = {
  root: sa,
  header: aa,
  title: oa,
  closeButton: la,
  headerDivider: ia,
  scrollArea: ca,
  searchBarWrap: ua,
  searchBar: da,
  searchInput: ha,
  searchIcon: fa,
  articleList: _a,
  articleItem: ma,
  articleLink: pa,
  articleTitle: va,
  noResults: xa,
  nav: ga,
  navItem: ba,
  navItemActive: ja,
  navLabel: wa
}, ya = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), Ca = () => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ e.jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ e.jsx("path", { d: "m21 21-4.35-4.35" })
    ]
  }
), mt = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "14",
    height: "14",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), Na = () => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    focusable: "false",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ e.jsx("path", { d: "M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" }),
      /* @__PURE__ */ e.jsx("path", { d: "M9 21V12h6v9" })
    ]
  }
), Ia = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    focusable: "false",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /* @__PURE__ */ e.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
  }
), Ra = ({ active: n }) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    focusable: "false",
    fill: n ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ e.jsx("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
      /* @__PURE__ */ e.jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
    ]
  }
), Rt = _e(({
  helpArticles: n,
  onGoHome: s,
  onStartChat: d,
  onClose: l,
  onArticleClick: a,
  className: f
}) => {
  const [_, h] = Y(""), c = Be(() => {
    if (!_.trim()) return n;
    const v = _.toLowerCase();
    return n.filter((p) => p.title.toLowerCase().includes(v));
  }, [n, _]), g = D(
    (v) => h(v.target.value),
    []
  );
  return /* @__PURE__ */ e.jsxs("div", { className: k(L.root, f), children: [
    /* @__PURE__ */ e.jsxs("header", { className: L.header, children: [
      /* @__PURE__ */ e.jsx("h1", { className: L.title, children: "Help" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          className: L.closeButton,
          onClick: l,
          "aria-label": "Close chat",
          children: /* @__PURE__ */ e.jsx(ya, {})
        }
      ),
      /* @__PURE__ */ e.jsx("div", { className: L.headerDivider, "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: L.scrollArea, children: [
      /* @__PURE__ */ e.jsx("div", { className: L.searchBarWrap, children: /* @__PURE__ */ e.jsxs("div", { className: L.searchBar, children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "search",
            className: L.searchInput,
            placeholder: "Search for help",
            value: _,
            onChange: g,
            "aria-label": "Search help articles",
            autoFocus: !0
          }
        ),
        /* @__PURE__ */ e.jsx("span", { className: L.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e.jsx(Ca, {}) })
      ] }) }),
      /* @__PURE__ */ e.jsx("ul", { className: L.articleList, "aria-label": "Help articles", children: c.length > 0 ? c.map((v, p) => /* @__PURE__ */ e.jsx("li", { className: L.articleItem, children: v.href ? /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: v.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: L.articleLink,
          children: [
            /* @__PURE__ */ e.jsx("span", { className: L.articleTitle, children: v.title }),
            /* @__PURE__ */ e.jsx(mt, {})
          ]
        }
      ) : /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          className: L.articleLink,
          onClick: () => a == null ? void 0 : a(v),
          children: [
            /* @__PURE__ */ e.jsx("span", { className: L.articleTitle, children: v.title }),
            /* @__PURE__ */ e.jsx(mt, {})
          ]
        }
      ) }, p)) : /* @__PURE__ */ e.jsxs("li", { className: L.noResults, children: [
        "No articles match “",
        _,
        "”"
      ] }) })
    ] }),
    /* @__PURE__ */ e.jsxs("nav", { className: L.nav, "aria-label": "Widget navigation", children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          className: L.navItem,
          onClick: s,
          "aria-label": "Home",
          children: [
            /* @__PURE__ */ e.jsx(Na, {}),
            /* @__PURE__ */ e.jsx("span", { className: L.navLabel, children: "Home" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          className: L.navItem,
          onClick: d,
          "aria-label": "Messages",
          children: [
            /* @__PURE__ */ e.jsx(Ia, {}),
            /* @__PURE__ */ e.jsx("span", { className: L.navLabel, children: "Messages" })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          type: "button",
          className: k(L.navItem, L.navItemActive),
          "aria-label": "Help",
          "aria-current": "page",
          children: [
            /* @__PURE__ */ e.jsx(Ra, { active: !0 }),
            /* @__PURE__ */ e.jsx("span", { className: L.navLabel, children: "Help" })
          ]
        }
      )
    ] })
  ] });
});
Rt.displayName = "WidgetHelp";
const ka = "_root_ft1za_1", Sa = "_header_ft1za_24", Ta = "_headerRight_ft1za_35", Ba = "_iconButton_ft1za_41", Ea = "_scrollArea_ft1za_66", La = "_contentWrapper_ft1za_88", Aa = "_title_ft1za_95", $a = "_updatedAt_ft1za_104", Pa = "_descriptionBox_ft1za_111", Da = "_articleContent_ft1za_121", re = {
  root: ka,
  header: Sa,
  headerRight: Ta,
  iconButton: Ba,
  scrollArea: Ea,
  contentWrapper: La,
  title: Aa,
  updatedAt: $a,
  descriptionBox: Pa,
  articleContent: Da
}, Oa = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /* @__PURE__ */ e.jsx("path", { d: "M15 18l-6-6 6-6" })
  }
), za = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "currentColor",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 4h6v6h-2V7.41l-4.29 4.3-1.42-1.42L16.59 6H14V4zm-4 16H4v-6h2v2.59l4.29-4.3 1.42 1.42L7.41 18H10v2z"
      }
    )
  }
), Ma = () => /* @__PURE__ */ e.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), kt = _e(({
  article: n,
  onBack: s,
  onClose: d,
  className: l
}) => /* @__PURE__ */ e.jsxs("div", { className: k(re.root, l), children: [
  /* @__PURE__ */ e.jsxs("header", { className: re.header, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: re.iconButton,
        onClick: s,
        "aria-label": "Go back",
        children: /* @__PURE__ */ e.jsx(Oa, {})
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: re.headerRight, children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          className: re.iconButton,
          "aria-label": "Expand",
          children: /* @__PURE__ */ e.jsx(za, {})
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          className: re.iconButton,
          onClick: d,
          "aria-label": "Close",
          children: /* @__PURE__ */ e.jsx(Ma, {})
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ e.jsx("div", { className: re.scrollArea, children: /* @__PURE__ */ e.jsxs("div", { className: re.contentWrapper, children: [
    /* @__PURE__ */ e.jsx("h1", { className: re.title, children: n.title }),
    n.updatedAt && /* @__PURE__ */ e.jsx("p", { className: re.updatedAt, children: n.updatedAt }),
    n.description && /* @__PURE__ */ e.jsx("div", { className: re.descriptionBox, children: n.description }),
    n.content && /* @__PURE__ */ e.jsx("div", { className: re.articleContent, children: n.content })
  ] }) })
] }));
kt.displayName = "WidgetArticle";
function Ze() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}
function Wa(n) {
  return typeof ReadableStream < "u" && n instanceof ReadableStream;
}
function Ha({
  onMessage: n,
  welcomeMessage: s
}) {
  const d = () => s ? [
    {
      id: Ze(),
      role: "assistant",
      content: s,
      timestamp: /* @__PURE__ */ new Date(),
      status: "done"
    }
  ] : [], [l, a] = Y(d), [f, _] = Y(!1), [h, c] = Y(null), g = le(null), v = D(
    async ($, i) => {
      const I = $.getReader(), C = new TextDecoder();
      let B = "";
      const H = (E) => {
        var J;
        const x = E.trim();
        if (!x) return "";
        const y = x.startsWith("data:") ? x.replace(/^data:\s*/, "") : x;
        try {
          const R = JSON.parse(y);
          return typeof ((J = R == null ? void 0 : R.message) == null ? void 0 : J.content) == "string" && R.message.content || typeof (R == null ? void 0 : R.content) == "string" && R.content || "";
        } catch {
          return E;
        }
      }, S = (E) => {
        E && a(
          (x) => x.map(
            (y) => y.id === i ? { ...y, content: y.content + E } : y
          )
        );
      };
      a(
        (E) => E.map(
          (x) => x.id === i ? { ...x, status: "streaming" } : x
        )
      );
      try {
        for (; ; ) {
          const { done: y, value: J } = await I.read();
          if (y) break;
          const R = C.decode(J, { stream: !0 });
          B += R;
          const se = B.split(/\r?\n/);
          B = se.pop() ?? "";
          let ee = "";
          for (const te of se)
            ee += H(te);
          S(ee);
        }
        const E = C.decode();
        B += E;
        const x = H(B);
        S(x), a(
          (y) => y.map(
            (J) => J.id === i ? { ...J, status: "done" } : J
          )
        );
      } catch (E) {
        throw console.log(E), a(
          (x) => x.map(
            (y) => y.id === i ? {
              ...y,
              status: "error",
              content: y.content || "Stream interrupted. Please try again."
            } : y
          )
        ), E;
      } finally {
        I.releaseLock();
      }
    },
    []
  ), p = D(
    async ($) => {
      const i = $.trim();
      if (!i || f) return;
      c(null), _(!0);
      const I = {
        id: Ze(),
        role: "user",
        content: i,
        timestamp: /* @__PURE__ */ new Date(),
        status: "done"
      }, C = l;
      a((S) => [...S, I]);
      const B = Ze(), H = {
        id: B,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        status: "loading"
      };
      a((S) => [...S, H]);
      try {
        const S = await n(i, C);
        Wa(S) ? await v(S, B) : a(
          (E) => E.map(
            (x) => x.id === B ? {
              ...x,
              content: S,
              status: "done",
              timestamp: /* @__PURE__ */ new Date()
            } : x
          )
        );
      } catch (S) {
        const E = S instanceof Error ? S.message : "Something went wrong.";
        console.log(S), c(E), a(
          (x) => x.map(
            (y) => y.id === B ? {
              ...y,
              content: E,
              status: "error",
              timestamp: /* @__PURE__ */ new Date()
            } : y
          )
        );
      } finally {
        _(!1);
      }
    },
    [f, l, n, v]
  ), j = D(
    async ($) => {
      g.current = $.trim(), await p($);
    },
    [p]
  ), A = D(async () => {
    const $ = g.current;
    $ && (a((i) => {
      const I = [...i].reverse().findIndex((B) => B.role === "assistant");
      if (I === -1) return i;
      const C = i.length - 1 - I;
      return i.filter((B, H) => H !== C);
    }), a((i) => {
      const I = [...i].reverse().findIndex((B) => B.role === "user");
      if (I === -1) return i;
      const C = i.length - 1 - I;
      return i.filter((B, H) => H !== C);
    }), c(null), await p($));
  }, [p]), O = D(() => {
    a(d()), c(null), g.current = null;
  }, [s]);
  return {
    messages: l,
    sendMessage: j,
    isLoading: f,
    error: h,
    clearMessages: O,
    retryLast: A
  };
}
const Fa = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
  "details > summary"
].join(", ");
function pt(n) {
  return Array.from(n.querySelectorAll(Fa)).filter(
    (s) => !s.closest("[hidden]") && s.offsetParent !== null
  );
}
function Ua(n, s) {
  K(() => {
    if (!s || !n.current) return;
    const d = n.current, l = pt(d);
    if (l.length > 0) {
      const a = requestAnimationFrame(() => l[0].focus());
      return () => cancelAnimationFrame(a);
    }
  }, [s, n]), K(() => {
    if (!s || !n.current) return;
    const d = n.current, l = (a) => {
      if (a.key !== "Tab") return;
      const f = pt(d);
      if (f.length === 0) {
        a.preventDefault();
        return;
      }
      const _ = f[0], h = f[f.length - 1];
      a.shiftKey ? document.activeElement === _ && (a.preventDefault(), h.focus()) : document.activeElement === h && (a.preventDefault(), _.focus());
    };
    return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, [s, n]);
}
const St = "(prefers-color-scheme: dark)";
function vt() {
  return typeof window > "u" ? "light" : window.matchMedia(St).matches ? "dark" : "light";
}
function Va(n) {
  const [s, d] = Y(() => n !== "auto" ? n : vt());
  return K(() => {
    if (n !== "auto") {
      d(n);
      return;
    }
    d(vt());
    const l = window.matchMedia(St), a = (f) => {
      d(f.matches ? "dark" : "light");
    };
    return l.addEventListener ? (l.addEventListener("change", a), () => l.removeEventListener("change", a)) : (l.addListener(a), () => l.removeListener(a));
  }, [n]), s;
}
function qa({
  primaryColor: n
}) {
  const s = Ya(n);
  return {
    "--ai-primary": n,
    "--ai-primary-fg": s,
    "--ai-user-bubble": n
  };
}
function Ya(n) {
  const s = Za(n);
  if (!s) return "#ffffff";
  const [d, l, a] = s.map((c) => {
    const g = c / 255;
    return g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  }), f = 0.2126 * d + 0.7152 * l + 0.0722 * a, _ = (1 + 0.05) / (f + 0.05), h = (f + 0.05) / (0.05 + 0.05);
  return _ >= h ? "#ffffff" : "#111827";
}
function Za(n) {
  const s = n.replace(/^#/, ""), d = s.length === 3 ? s.split("").map((a) => a + a).join("") : s;
  if (d.length !== 6) return null;
  const l = parseInt(d, 16);
  return [l >> 16 & 255, l >> 8 & 255, l & 255];
}
const Ga = "_root_ejnbt_25", Ka = "_panelArea_ejnbt_116", Te = {
  root: Ga,
  "bottom-right": "_bottom-right_ejnbt_103",
  "bottom-left": "_bottom-left_ejnbt_109",
  panelArea: Ka
}, Ge = 200, Ja = ({
  onMessage: n,
  agentName: s = "AI Assistant",
  agentAvatar: d,
  logo: l,
  theme: a = "auto",
  primaryColor: f = "#2563EB",
  placeholder: _ = "Type a message…",
  welcomeMessage: h,
  welcomeSubMessage: c,
  recentMessage: g,
  recentMessageTime: v,
  statusText: p,
  statusUpdated: j,
  helpArticles: A,
  showHelpArticles: O = !1,
  defaultView: $ = "home",
  isOpen: i,
  onOpenChange: I,
  position: C = "bottom-right",
  className: B,
  style: H
}) => {
  const [S, E] = Y(!1);
  K(() => E(!0), []);
  const x = i !== void 0, [y, J] = Y(!1), R = x ? i : y, se = D(
    (Z) => {
      x || J(Z), I == null || I(Z);
    },
    [x, I]
  );
  D(() => se(!0), [se]);
  const ee = D(() => se(!1), [se]), te = D(() => se(!R), [R, se]), [F, X] = Y($), [ce, ie] = Y($ === "chat"), [je, Ee] = Y(null), U = le(null), we = D(() => {
    U.current && clearTimeout(U.current), X("chat"), ie(!0);
  }, []), ye = D(() => {
    ie(!1), U.current = setTimeout(() => X("home"), Ge);
  }, []), Le = D(() => {
    U.current && clearTimeout(U.current), F === "chat" ? (ie(!1), U.current = setTimeout(() => X("help"), Ge)) : X("help");
  }, [F]), Ae = D((Z) => {
    U.current && clearTimeout(U.current), Ee(Z), F === "chat" ? (ie(!1), U.current = setTimeout(() => X("article"), Ge)) : X("article");
  }, [F]), ze = D(() => {
    X("home");
  }, []);
  K(() => {
    R ? F === "chat" && ie(!0) : (U.current && clearTimeout(U.current), ie(!1));
  }, [R, F]), K(() => () => {
    U.current && clearTimeout(U.current);
  }, []);
  const Ce = R && F === "home" && !ce, Ne = R && F === "help" && !ce, me = R && F === "article" && !ce && je != null, pe = R && ce, ve = Va(a), Me = qa({ primaryColor: f }), { messages: $e, sendMessage: We, isLoading: He, error: xe, clearMessages: ue, retryLast: Pe } = Ha({ onMessage: n, welcomeMessage: h }), Ie = le(null), de = le(null);
  Ua(Ie, pe), K(() => {
    var Z;
    R || (Z = de.current) == null || Z.focus();
  }, [R]), K(() => {
    if (!R) return;
    const Z = (De) => {
      De.key === "Escape" && (De.preventDefault(), ee());
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
  }, [R, ee]);
  const Re = xt(), Fe = `${Re}-label`;
  return S ? /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: k(Te.root, Te[C], B),
      style: { ...Me, ...H },
      "data-theme": ve,
      children: [
        Ce && /* @__PURE__ */ e.jsx(
          It,
          {
            className: Te.panelArea,
            welcomeMessage: h,
            welcomeSubMessage: c,
            agentName: s,
            agentAvatar: d,
            logo: l,
            recentMessage: g,
            recentMessageTime: v,
            statusText: p,
            statusUpdated: j,
            helpArticles: A,
            showHelpArticles: O,
            onStartChat: we,
            onShowHelp: Le,
            onArticleClick: Ae,
            onClose: ee
          }
        ),
        Ne && A && A.length > 0 && /* @__PURE__ */ e.jsx(
          Rt,
          {
            className: Te.panelArea,
            helpArticles: A,
            onGoHome: ye,
            onStartChat: we,
            onArticleClick: Ae,
            onClose: ee
          }
        ),
        me && /* @__PURE__ */ e.jsx(
          kt,
          {
            className: Te.panelArea,
            article: je,
            onBack: ze,
            onClose: ee
          }
        ),
        /* @__PURE__ */ e.jsx(
          Ct,
          {
            ref: Ie,
            isOpen: pe,
            onClose: ee,
            onBack: ye,
            messages: $e,
            isLoading: He,
            error: xe,
            onSend: We,
            onRetry: Pe,
            onClear: ue,
            agentName: s,
            agentAvatar: d,
            logo: l,
            placeholder: _,
            dialogId: Re,
            dialogLabelId: Fe
          }
        ),
        /* @__PURE__ */ e.jsx(
          Nt,
          {
            ref: de,
            isOpen: R,
            onClick: te,
            primaryColor: f,
            logo: l,
            "aria-expanded": R,
            "aria-controls": Re,
            "aria-label": R ? "Close chat" : "Open chat"
          }
        )
      ]
    }
  ) : null;
};
Ja.displayName = "ChatWidget";
const eo = () => {
  const n = le(null);
  return K(() => {
  }, []), n;
}, to = (n) => Be(() => n instanceof ReadableStream, [n]), Xa = Gt(null), no = ({ config: n, children: s }) => /* @__PURE__ */ e.jsx(Xa.Provider, { value: n, children: s });
export {
  no as AIInterfaceProvider,
  bt as ChatHeader,
  Ct as ChatPanel,
  Ja as ChatWidget,
  yt as InputBar,
  jt as MessageBubble,
  wt as MessageList,
  Nt as TriggerButton,
  Je as TypingIndicator,
  Rt as WidgetHelp,
  It as WidgetHome,
  Ha as useChat,
  Ua as useFocusTrap,
  eo as useScrollAnchor,
  to as useStreamDetection,
  Va as useTheme
};
