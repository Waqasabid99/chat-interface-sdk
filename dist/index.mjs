import Vn, { memo as Xe, useMemo as rt, useState as ue, useCallback as J, useRef as de, useEffect as me, useLayoutEffect as Wn, useId as Xr, forwardRef as Qr, createContext as dl } from "react";
import { jsxs as A, jsx as d, Fragment as cn } from "react/jsx-runtime";
import './index.css';const Z = (...e) => e.filter(Boolean).join(" "), ml = "_root_1f6v0_23", gl = "_isMaximized_1f6v0_52", yl = "_divider_1f6v0_34", kl = "_identity_1f6v0_10", bl = "_logo_1f6v0_11", xl = "_logoImg_1f6v0_91", wl = "_avatar_1f6v0_12", _l = "_avatarImg_1f6v0_119", vl = "_avatarCustom_1f6v0_129", Cl = "_avatarInitials_1f6v0_141", Sl = "_onlineDot_1f6v0_162", Il = "_nameGroup_1f6v0_13", El = "_agentName_1f6v0_14", Al = "_statusLine_1f6v0_15", Tl = "_onlineStatus_1f6v0_230", Ll = "_onlinePip_1f6v0_240", Nl = "_actions_1f6v0_16", zl = "_iconButton_1f6v0_311", Dl = "_backButton_1f6v0_352", Pl = "_clearButton_1f6v0_17", Rl = "_closeButton_1f6v0_18", Bl = "_maximizeButton_1f6v0_379", Q = {
  root: ml,
  isMaximized: gl,
  divider: yl,
  identity: kl,
  logo: bl,
  logoImg: xl,
  avatar: wl,
  avatarImg: _l,
  avatarCustom: vl,
  avatarInitials: Cl,
  onlineDot: Sl,
  nameGroup: Il,
  agentName: El,
  statusLine: Al,
  onlineStatus: Tl,
  onlinePip: Ll,
  actions: Nl,
  iconButton: zl,
  backButton: Dl,
  clearButton: Pl,
  closeButton: Rl,
  maximizeButton: Bl
}, Ml = "_root_1k3nu_24", Fl = "_rootBubble_1k3nu_46", Ol = "_dotsBubble_1k3nu_55", Hl = "_rootInline_1k3nu_66", jl = "_dotsInline_1k3nu_77", $l = "_rootStandalone_1k3nu_88", Ul = "_dotsStandalone_1k3nu_102", Vl = "_dots_1k3nu_9", Wl = "_dot_1k3nu_9", ql = "_dot1_1k3nu_128", Zl = "_dot2_1k3nu_131", Gl = "_dot3_1k3nu_134", Xl = "_inlineLabel_1k3nu_167", Ql = "_caption_1k3nu_179", he = {
  root: Ml,
  rootBubble: Fl,
  dotsBubble: Ol,
  rootInline: Hl,
  dotsInline: jl,
  rootStandalone: $l,
  dotsStandalone: Ul,
  dots: Vl,
  dot: Wl,
  dot1: ql,
  dot2: Zl,
  dot3: Gl,
  inlineLabel: Xl,
  caption: Ql
}, Yl = {
  bubble: "Thinking…",
  inline: "Assistant is typing",
  standalone: "Thinking…"
}, Cn = Xe(
  ({ variant: e = "bubble", label: n, caption: t, className: r }) => {
    const i = n ?? Yl[e], o = t ?? i, l = e === "bubble", a = e === "inline", s = e === "standalone";
    return /* @__PURE__ */ A(
      "span",
      {
        className: Z(
          he.root,
          l && he.rootBubble,
          a && he.rootInline,
          s && he.rootStandalone,
          r
        ),
        role: "status",
        "aria-live": "polite",
        "aria-label": i,
        children: [
          /* @__PURE__ */ A(
            "span",
            {
              className: Z(
                he.dots,
                l && he.dotsBubble,
                a && he.dotsInline,
                s && he.dotsStandalone
              ),
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ d("span", { className: Z(he.dot, he.dot1) }),
                /* @__PURE__ */ d("span", { className: Z(he.dot, he.dot2) }),
                /* @__PURE__ */ d("span", { className: Z(he.dot, he.dot3) })
              ]
            }
          ),
          s && /* @__PURE__ */ d("span", { className: he.caption, "aria-hidden": "true", children: o }),
          a && /* @__PURE__ */ d("span", { className: he.inlineLabel, "aria-hidden": "true", children: "Typing…" })
        ]
      }
    );
  }
);
Cn.displayName = "TypingIndicator";
const Kl = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
      }
    )
  }
), Jl = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  }
), eo = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d("path", { d: "M3.25 3.5a.75.75 0 0 0 0 1.5h4.69l-5.22 5.22a.75.75 0 1 0 1.06 1.06l5.22-5.22v4.69a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75h-6.5ZM16.75 16.5a.75.75 0 0 0 0-1.5h-4.69l5.22-5.22a.75.75 0 0 0-1.06-1.06l-5.22 5.22v-4.69a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 .75.75h6.5Z" })
  }
), to = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d("path", { d: "M7.75 2.75a.75.75 0 0 0-1.5 0v4.69l-5.22-5.22a.75.75 0 0 0-1.06 1.06l5.22 5.22H.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 .75-.75v-6.5ZM19.5 12.25a.75.75 0 0 0 0 1.5h-4.69l5.22 5.22a.75.75 0 1 1-1.06 1.06l-5.22-5.22v4.69a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 .75-.75h6.5Z" })
  }
), no = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "15",
    height: "15",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        d: "M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z",
        clipRule: "evenodd"
      }
    )
  }
), ro = ({ agentAvatar: e, agentName: n }) => {
  const t = rt(() => {
    const r = n.trim().split(/\s+/);
    return r.length === 1 ? r[0].slice(0, 2).toUpperCase() : (r[0][0] + r[1][0]).toUpperCase();
  }, [n]);
  return /* @__PURE__ */ A("span", { className: Q.avatar, "aria-hidden": "true", children: [
    typeof e == "string" ? /* @__PURE__ */ d(
      "img",
      {
        src: e,
        alt: "",
        className: Q.avatarImg,
        draggable: !1
      }
    ) : e != null ? /* @__PURE__ */ d("span", { className: Q.avatarCustom, children: e }) : /* @__PURE__ */ d("span", { className: Q.avatarInitials, children: t }),
    /* @__PURE__ */ d("span", { className: Q.onlineDot, "aria-hidden": "true" })
  ] });
}, io = ({ logo: e }) => typeof e == "string" ? /* @__PURE__ */ d("span", { className: Q.logo, "aria-hidden": "true", children: /* @__PURE__ */ d("img", { src: e, alt: "", className: Q.logoImg, draggable: !1 }) }) : /* @__PURE__ */ d("span", { className: Q.logo, "aria-hidden": "true", children: e }), Yr = Xe(
  ({
    agentName: e = "AI Assistant",
    agentAvatar: n,
    logo: t,
    isLoading: r = !1,
    onClose: i,
    onBack: o,
    onClear: l,
    dialogLabelId: a,
    className: s,
    isMaximized: u,
    onMaximizeToggle: h
  }) => /* @__PURE__ */ A(
    "header",
    {
      className: Z(
        Q.root,
        u && Q.isMaximized,
        s
      ),
      children: [
        o && /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: Z(Q.iconButton, Q.backButton),
            onClick: o,
            "aria-label": "Go back",
            title: "Go back",
            children: /* @__PURE__ */ d(Kl, {})
          }
        ),
        /* @__PURE__ */ A("div", { className: Q.identity, children: [
          t && /* @__PURE__ */ d(io, { logo: t }),
          /* @__PURE__ */ d(ro, { agentAvatar: n, agentName: e }),
          /* @__PURE__ */ A("div", { className: Q.nameGroup, children: [
            /* @__PURE__ */ d(
              "h2",
              {
                id: a,
                className: Q.agentName,
                title: e,
                children: e
              }
            ),
            /* @__PURE__ */ d("div", { className: Q.statusLine, children: r ? /* @__PURE__ */ d(Cn, { variant: "inline" }) : /* @__PURE__ */ A(
              "span",
              {
                className: Q.onlineStatus,
                role: "status",
                "aria-label": "Assistant is online",
                children: [
                  /* @__PURE__ */ d("span", { className: Q.onlinePip, "aria-hidden": "true" }),
                  "Online"
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ A("div", { className: Q.actions, role: "group", "aria-label": "Chat controls", children: [
          l && /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: Z(Q.iconButton, Q.clearButton),
              onClick: l,
              "aria-label": "Clear conversation",
              title: "Clear conversation",
              children: /* @__PURE__ */ d(no, {})
            }
          ),
          h && /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: Z(Q.iconButton, Q.maximizeButton),
              onClick: h,
              "aria-label": u ? "Restore window size" : "Maximize window",
              title: u ? "Restore" : "Maximize",
              children: u ? /* @__PURE__ */ d(to, {}) : /* @__PURE__ */ d(eo, {})
            }
          ),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: Z(Q.iconButton, Q.closeButton),
              onClick: i,
              "aria-label": "Close chat",
              title: "Close chat",
              children: /* @__PURE__ */ d(Jl, {})
            }
          )
        ] }),
        /* @__PURE__ */ d("div", { className: Q.divider, "aria-hidden": "true" })
      ]
    }
  )
);
Yr.displayName = "ChatHeader";
const lo = "_row_ztc08_15", oo = "_timestamp_ztc08_24", ao = "_rowUser_ztc08_31", so = "_rowAssistant_ztc08_36", uo = "_avatar_ztc08_42", co = "_bubble_ztc08_72", ho = "_bubbleUser_ztc08_102", fo = "_bubbleDone_ztc08_111", po = "_bubbleLoading_ztc08_119", mo = "_bubbleStreaming_ztc08_129", go = "_bubbleError_ztc08_137", yo = "_errorBody_ztc08_198", ko = "_errorMessage_ztc08_204", bo = "_errorIcon_ztc08_212", xo = "_retryButton_ztc08_221", wo = "_timestampUser_ztc08_288", _o = "_timestampAssistant_ztc08_292", se = {
  row: lo,
  timestamp: oo,
  rowUser: ao,
  rowAssistant: so,
  avatar: uo,
  bubble: co,
  bubbleUser: ho,
  bubbleDone: fo,
  bubbleLoading: po,
  bubbleStreaming: mo,
  bubbleError: go,
  errorBody: yo,
  errorMessage: ko,
  errorIcon: bo,
  retryButton: xo,
  timestampUser: wo,
  timestampAssistant: _o
};
function vo(e, n) {
  const t = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")
  ).trim();
}
const Co = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, So = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Io = {};
function qn(e, n) {
  return (Io.jsx ? So : Co).test(e);
}
const Eo = /[ \t\n\f\r]/g;
function Ao(e) {
  return typeof e == "object" ? e.type === "text" ? Zn(e.value) : !1 : Zn(e);
}
function Zn(e) {
  return e.replace(Eo, "") === "";
}
class mt {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(n, t, r) {
    this.normal = t, this.property = n, r && (this.space = r);
  }
}
mt.prototype.normal = {};
mt.prototype.property = {};
mt.prototype.space = void 0;
function Kr(e, n) {
  const t = {}, r = {};
  for (const i of e)
    Object.assign(t, i.property), Object.assign(r, i.normal);
  return new mt(t, r, n);
}
function hn(e) {
  return e.toLowerCase();
}
class be {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(n, t) {
    this.attribute = t, this.property = n;
  }
}
be.prototype.attribute = "";
be.prototype.booleanish = !1;
be.prototype.boolean = !1;
be.prototype.commaOrSpaceSeparated = !1;
be.prototype.commaSeparated = !1;
be.prototype.defined = !1;
be.prototype.mustUseProperty = !1;
be.prototype.number = !1;
be.prototype.overloadedBoolean = !1;
be.prototype.property = "";
be.prototype.spaceSeparated = !1;
be.prototype.space = void 0;
let To = 0;
const j = Qe(), oe = Qe(), fn = Qe(), S = Qe(), K = Qe(), tt = Qe(), _e = Qe();
function Qe() {
  return 2 ** ++To;
}
const pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: j,
  booleanish: oe,
  commaOrSpaceSeparated: _e,
  commaSeparated: tt,
  number: S,
  overloadedBoolean: fn,
  spaceSeparated: K
}, Symbol.toStringTag, { value: "Module" })), Zt = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(pn)
);
class Sn extends be {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(n, t, r, i) {
    let o = -1;
    if (super(n, t), Gn(this, "space", i), typeof r == "number")
      for (; ++o < Zt.length; ) {
        const l = Zt[o];
        Gn(this, Zt[o], (r & pn[l]) === pn[l]);
      }
  }
}
Sn.prototype.defined = !0;
function Gn(e, n, t) {
  t && (e[n] = t);
}
function it(e) {
  const n = {}, t = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new Sn(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), n[r] = o, t[hn(r)] = r, t[hn(o.attribute)] = r;
  }
  return new mt(n, t, e.space);
}
const Jr = it({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: oe,
    ariaAutoComplete: null,
    ariaBusy: oe,
    ariaChecked: oe,
    ariaColCount: S,
    ariaColIndex: S,
    ariaColSpan: S,
    ariaControls: K,
    ariaCurrent: null,
    ariaDescribedBy: K,
    ariaDetails: null,
    ariaDisabled: oe,
    ariaDropEffect: K,
    ariaErrorMessage: null,
    ariaExpanded: oe,
    ariaFlowTo: K,
    ariaGrabbed: oe,
    ariaHasPopup: null,
    ariaHidden: oe,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: K,
    ariaLevel: S,
    ariaLive: null,
    ariaModal: oe,
    ariaMultiLine: oe,
    ariaMultiSelectable: oe,
    ariaOrientation: null,
    ariaOwns: K,
    ariaPlaceholder: null,
    ariaPosInSet: S,
    ariaPressed: oe,
    ariaReadOnly: oe,
    ariaRelevant: null,
    ariaRequired: oe,
    ariaRoleDescription: K,
    ariaRowCount: S,
    ariaRowIndex: S,
    ariaRowSpan: S,
    ariaSelected: oe,
    ariaSetSize: S,
    ariaSort: null,
    ariaValueMax: S,
    ariaValueMin: S,
    ariaValueNow: S,
    ariaValueText: null,
    role: null
  },
  transform(e, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  }
});
function ei(e, n) {
  return n in e ? e[n] : n;
}
function ti(e, n) {
  return ei(e, n.toLowerCase());
}
const Lo = it({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: tt,
    acceptCharset: K,
    accessKey: K,
    action: null,
    allow: null,
    allowFullScreen: j,
    allowPaymentRequest: j,
    allowUserMedia: j,
    alt: null,
    as: null,
    async: j,
    autoCapitalize: null,
    autoComplete: K,
    autoFocus: j,
    autoPlay: j,
    blocking: K,
    capture: null,
    charSet: null,
    checked: j,
    cite: null,
    className: K,
    cols: S,
    colSpan: null,
    content: null,
    contentEditable: oe,
    controls: j,
    controlsList: K,
    coords: S | tt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: j,
    defer: j,
    dir: null,
    dirName: null,
    disabled: j,
    download: fn,
    draggable: oe,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: j,
    formTarget: null,
    headers: K,
    height: S,
    hidden: fn,
    high: S,
    href: null,
    hrefLang: null,
    htmlFor: K,
    httpEquiv: K,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: j,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: j,
    itemId: null,
    itemProp: K,
    itemRef: K,
    itemScope: j,
    itemType: K,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: j,
    low: S,
    manifest: null,
    max: null,
    maxLength: S,
    media: null,
    method: null,
    min: null,
    minLength: S,
    multiple: j,
    muted: j,
    name: null,
    nonce: null,
    noModule: j,
    noValidate: j,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: j,
    optimum: S,
    pattern: null,
    ping: K,
    placeholder: null,
    playsInline: j,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: j,
    referrerPolicy: null,
    rel: K,
    required: j,
    reversed: j,
    rows: S,
    rowSpan: S,
    sandbox: K,
    scope: null,
    scoped: j,
    seamless: j,
    selected: j,
    shadowRootClonable: j,
    shadowRootDelegatesFocus: j,
    shadowRootMode: null,
    shape: null,
    size: S,
    sizes: null,
    slot: null,
    span: S,
    spellCheck: oe,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: S,
    step: null,
    style: null,
    tabIndex: S,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: j,
    useMap: null,
    value: oe,
    width: S,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: K,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: S,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: S,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: j,
    // Lists. Use CSS to reduce space between items instead
    declare: j,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: S,
    // `<img>` and `<object>`
    leftMargin: S,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: S,
    // `<body>`
    marginWidth: S,
    // `<body>`
    noResize: j,
    // `<frame>`
    noHref: j,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: j,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: j,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: S,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: oe,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: S,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: S,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: j,
    disableRemotePlayback: j,
    prefix: null,
    property: null,
    results: S,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: ti
}), No = it({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: _e,
    accentHeight: S,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: S,
    amplitude: S,
    arabicForm: null,
    ascent: S,
    attributeName: null,
    attributeType: null,
    azimuth: S,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: S,
    by: null,
    calcMode: null,
    capHeight: S,
    className: K,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: S,
    diffuseConstant: S,
    direction: null,
    display: null,
    dur: null,
    divisor: S,
    dominantBaseline: null,
    download: j,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: S,
    enableBackground: null,
    end: null,
    event: null,
    exponent: S,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: S,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: tt,
    g2: tt,
    glyphName: tt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: S,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: S,
    horizOriginX: S,
    horizOriginY: S,
    id: null,
    ideographic: S,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: S,
    k: S,
    k1: S,
    k2: S,
    k3: S,
    k4: S,
    kernelMatrix: _e,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: S,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: S,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: S,
    overlineThickness: S,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: S,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: K,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: S,
    pointsAtY: S,
    pointsAtZ: S,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: _e,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: _e,
    rev: _e,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: _e,
    requiredFeatures: _e,
    requiredFonts: _e,
    requiredFormats: _e,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: S,
    specularExponent: S,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: S,
    strikethroughThickness: S,
    string: null,
    stroke: null,
    strokeDashArray: _e,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: S,
    strokeOpacity: S,
    strokeWidth: null,
    style: null,
    surfaceScale: S,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: _e,
    tabIndex: S,
    tableValues: null,
    target: null,
    targetX: S,
    targetY: S,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: _e,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: S,
    underlineThickness: S,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: S,
    values: null,
    vAlphabetic: S,
    vMathematical: S,
    vectorEffect: null,
    vHanging: S,
    vIdeographic: S,
    version: null,
    vertAdvY: S,
    vertOriginX: S,
    vertOriginY: S,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: S,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: ei
}), ni = it({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, n) {
    return "xlink:" + n.slice(5).toLowerCase();
  }
}), ri = it({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: ti
}), ii = it({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, n) {
    return "xml:" + n.slice(3).toLowerCase();
  }
}), zo = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Do = /[A-Z]/g, Xn = /-[a-z]/g, Po = /^data[-\w.:]+$/i;
function Ro(e, n) {
  const t = hn(n);
  let r = n, i = be;
  if (t in e.normal)
    return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && Po.test(n)) {
    if (n.charAt(4) === "-") {
      const o = n.slice(5).replace(Xn, Mo);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = n.slice(4);
      if (!Xn.test(o)) {
        let l = o.replace(Do, Bo);
        l.charAt(0) !== "-" && (l = "-" + l), n = "data" + l;
      }
    }
    i = Sn;
  }
  return new i(r, n);
}
function Bo(e) {
  return "-" + e.toLowerCase();
}
function Mo(e) {
  return e.charAt(1).toUpperCase();
}
const Fo = Kr([Jr, Lo, ni, ri, ii], "html"), In = Kr([Jr, No, ni, ri, ii], "svg");
function Oo(e) {
  return e.join(" ").trim();
}
var At = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function li(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var En = {}, Qn = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Ho = /\n/g, jo = /^\s*/, $o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Uo = /^:\s*/, Vo = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Wo = /^[;\s]*/, qo = /^\s+|\s+$/g, Zo = `
`, Yn = "/", Kn = "*", Ze = "", Go = "comment", Xo = "declaration";
function Qo(e, n) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  n = n || {};
  var t = 1, r = 1;
  function i(m) {
    var b = m.match(Ho);
    b && (t += b.length);
    var w = m.lastIndexOf(Zo);
    r = ~w ? m.length - w : r + m.length;
  }
  function o() {
    var m = { line: t, column: r };
    return function(b) {
      return b.position = new l(m), u(), b;
    };
  }
  function l(m) {
    this.start = m, this.end = { line: t, column: r }, this.source = n.source;
  }
  l.prototype.content = e;
  function a(m) {
    var b = new Error(
      n.source + ":" + t + ":" + r + ": " + m
    );
    if (b.reason = m, b.filename = n.source, b.line = t, b.column = r, b.source = e, !n.silent) throw b;
  }
  function s(m) {
    var b = m.exec(e);
    if (b) {
      var w = b[0];
      return i(w), e = e.slice(w.length), b;
    }
  }
  function u() {
    s(jo);
  }
  function h(m) {
    var b;
    for (m = m || []; b = c(); )
      b !== !1 && m.push(b);
    return m;
  }
  function c() {
    var m = o();
    if (!(Yn != e.charAt(0) || Kn != e.charAt(1))) {
      for (var b = 2; Ze != e.charAt(b) && (Kn != e.charAt(b) || Yn != e.charAt(b + 1)); )
        ++b;
      if (b += 2, Ze === e.charAt(b - 1))
        return a("End of comment missing");
      var w = e.slice(2, b - 2);
      return r += 2, i(w), e = e.slice(b), r += 2, m({
        type: Go,
        comment: w
      });
    }
  }
  function p() {
    var m = o(), b = s($o);
    if (b) {
      if (c(), !s(Uo)) return a("property missing ':'");
      var w = s(Vo), k = m({
        type: Xo,
        property: Jn(b[0].replace(Qn, Ze)),
        value: w ? Jn(w[0].replace(Qn, Ze)) : Ze
      });
      return s(Wo), k;
    }
  }
  function f() {
    var m = [];
    h(m);
    for (var b; b = p(); )
      b !== !1 && (m.push(b), h(m));
    return m;
  }
  return u(), f();
}
function Jn(e) {
  return e ? e.replace(qo, Ze) : Ze;
}
var Yo = Qo, Ko = At && At.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(En, "__esModule", { value: !0 });
En.default = ea;
const Jo = Ko(Yo);
function ea(e, n) {
  let t = null;
  if (!e || typeof e != "string")
    return t;
  const r = (0, Jo.default)(e), i = typeof n == "function";
  return r.forEach((o) => {
    if (o.type !== "declaration")
      return;
    const { property: l, value: a } = o;
    i ? n(l, a, o) : a && (t = t || {}, t[l] = a);
  }), t;
}
var Dt = {};
Object.defineProperty(Dt, "__esModule", { value: !0 });
Dt.camelCase = void 0;
var ta = /^--[a-zA-Z0-9_-]+$/, na = /-([a-z])/g, ra = /^[^-]+$/, ia = /^-(webkit|moz|ms|o|khtml)-/, la = /^-(ms)-/, oa = function(e) {
  return !e || ra.test(e) || ta.test(e);
}, aa = function(e, n) {
  return n.toUpperCase();
}, er = function(e, n) {
  return "".concat(n, "-");
}, sa = function(e, n) {
  return n === void 0 && (n = {}), oa(e) ? e : (e = e.toLowerCase(), n.reactCompat ? e = e.replace(la, er) : e = e.replace(ia, er), e.replace(na, aa));
};
Dt.camelCase = sa;
var ua = At && At.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, ca = ua(En), ha = Dt;
function dn(e, n) {
  var t = {};
  return !e || typeof e != "string" || (0, ca.default)(e, function(r, i) {
    r && i && (t[(0, ha.camelCase)(r, n)] = i);
  }), t;
}
dn.default = dn;
var fa = dn;
const pa = /* @__PURE__ */ li(fa), oi = ai("end"), An = ai("start");
function ai(e) {
  return n;
  function n(t) {
    const r = t && t.position && t.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function da(e) {
  const n = An(e), t = oi(e);
  if (n && t)
    return { start: n, end: t };
}
function ut(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? tr(e.position) : "start" in e || "end" in e ? tr(e) : "line" in e || "column" in e ? mn(e) : "";
}
function mn(e) {
  return nr(e && e.line) + ":" + nr(e && e.column);
}
function tr(e) {
  return mn(e && e.start) + "-" + mn(e && e.end);
}
function nr(e) {
  return e && typeof e == "number" ? e : 1;
}
class pe extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(n, t, r) {
    super(), typeof t == "string" && (r = t, t = void 0);
    let i = "", o = {}, l = !1;
    if (t && ("line" in t && "column" in t ? o = { place: t } : "start" in t && "end" in t ? o = { place: t } : "type" in t ? o = {
      ancestors: [t],
      place: t.position
    } : o = { ...t }), typeof n == "string" ? i = n : !o.cause && n && (l = !0, i = n.message, o.cause = n), !o.ruleId && !o.source && typeof r == "string") {
      const s = r.indexOf(":");
      s === -1 ? o.ruleId = r : (o.source = r.slice(0, s), o.ruleId = r.slice(s + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const s = o.ancestors[o.ancestors.length - 1];
      s && (o.place = s.position);
    }
    const a = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = ut(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
pe.prototype.file = "";
pe.prototype.name = "";
pe.prototype.reason = "";
pe.prototype.message = "";
pe.prototype.stack = "";
pe.prototype.column = void 0;
pe.prototype.line = void 0;
pe.prototype.ancestors = void 0;
pe.prototype.cause = void 0;
pe.prototype.fatal = void 0;
pe.prototype.place = void 0;
pe.prototype.ruleId = void 0;
pe.prototype.source = void 0;
const Tn = {}.hasOwnProperty, ma = /* @__PURE__ */ new Map(), ga = /[A-Z]/g, ya = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), ka = /* @__PURE__ */ new Set(["td", "th"]), si = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function ba(e, n) {
  if (!n || n.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const t = n.filePath || void 0;
  let r;
  if (n.development) {
    if (typeof n.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Ea(t, n.jsxDEV);
  } else {
    if (typeof n.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof n.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Ia(t, n.jsx, n.jsxs);
  }
  const i = {
    Fragment: n.Fragment,
    ancestors: [],
    components: n.components || {},
    create: r,
    elementAttributeNameCase: n.elementAttributeNameCase || "react",
    evaluater: n.createEvaluater ? n.createEvaluater() : void 0,
    filePath: t,
    ignoreInvalidStyle: n.ignoreInvalidStyle || !1,
    passKeys: n.passKeys !== !1,
    passNode: n.passNode || !1,
    schema: n.space === "svg" ? In : Fo,
    stylePropertyNameCase: n.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: n.tableCellAlignToStyle !== !1
  }, o = ui(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function ui(e, n, t) {
  if (n.type === "element")
    return xa(e, n, t);
  if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression")
    return wa(e, n);
  if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement")
    return va(e, n, t);
  if (n.type === "mdxjsEsm")
    return _a(e, n);
  if (n.type === "root")
    return Ca(e, n, t);
  if (n.type === "text")
    return Sa(e, n);
}
function xa(e, n, t) {
  const r = e.schema;
  let i = r;
  n.tagName.toLowerCase() === "svg" && r.space === "html" && (i = In, e.schema = i), e.ancestors.push(n);
  const o = hi(e, n.tagName, !1), l = Aa(e, n);
  let a = Nn(e, n);
  return ya.has(n.tagName) && (a = a.filter(function(s) {
    return typeof s == "string" ? !Ao(s) : !0;
  })), ci(e, l, o, n), Ln(l, a), e.ancestors.pop(), e.schema = r, e.create(n, o, l, t);
}
function wa(e, n) {
  if (n.data && n.data.estree && e.evaluater) {
    const r = n.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  pt(e, n.position);
}
function _a(e, n) {
  if (n.data && n.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(n.data.estree)
    );
  pt(e, n.position);
}
function va(e, n, t) {
  const r = e.schema;
  let i = r;
  n.name === "svg" && r.space === "html" && (i = In, e.schema = i), e.ancestors.push(n);
  const o = n.name === null ? e.Fragment : hi(e, n.name, !0), l = Ta(e, n), a = Nn(e, n);
  return ci(e, l, o, n), Ln(l, a), e.ancestors.pop(), e.schema = r, e.create(n, o, l, t);
}
function Ca(e, n, t) {
  const r = {};
  return Ln(r, Nn(e, n)), e.create(n, e.Fragment, r, t);
}
function Sa(e, n) {
  return n.value;
}
function ci(e, n, t, r) {
  typeof t != "string" && t !== e.Fragment && e.passNode && (n.node = r);
}
function Ln(e, n) {
  if (n.length > 0) {
    const t = n.length > 1 ? n : n[0];
    t && (e.children = t);
  }
}
function Ia(e, n, t) {
  return r;
  function r(i, o, l, a) {
    const u = Array.isArray(l.children) ? t : n;
    return a ? u(o, l, a) : u(o, l);
  }
}
function Ea(e, n) {
  return t;
  function t(r, i, o, l) {
    const a = Array.isArray(o.children), s = An(r);
    return n(
      i,
      o,
      l,
      a,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0
      },
      void 0
    );
  }
}
function Aa(e, n) {
  const t = {};
  let r, i;
  for (i in n.properties)
    if (i !== "children" && Tn.call(n.properties, i)) {
      const o = La(e, i, n.properties[i]);
      if (o) {
        const [l, a] = o;
        e.tableCellAlignToStyle && l === "align" && typeof a == "string" && ka.has(n.tagName) ? r = a : t[l] = a;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      t.style || (t.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return t;
}
function Ta(e, n) {
  const t = {};
  for (const r of n.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const l = o.expression;
        l.type;
        const a = l.properties[0];
        a.type, Object.assign(
          t,
          e.evaluater.evaluateExpression(a.argument)
        );
      } else
        pt(e, n.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, o = e.evaluater.evaluateExpression(a.expression);
        } else
          pt(e, n.position);
      else
        o = r.value === null ? !0 : r.value;
      t[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return t;
}
function Nn(e, n) {
  const t = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : ma;
  for (; ++r < n.children.length; ) {
    const o = n.children[r];
    let l;
    if (e.passKeys) {
      const s = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (s) {
        const u = i.get(s) || 0;
        l = s + "-" + u, i.set(s, u + 1);
      }
    }
    const a = ui(e, o, l);
    a !== void 0 && t.push(a);
  }
  return t;
}
function La(e, n, t) {
  const r = Ro(e.schema, n);
  if (!(t == null || typeof t == "number" && Number.isNaN(t))) {
    if (Array.isArray(t) && (t = r.commaSeparated ? vo(t) : Oo(t)), r.property === "style") {
      let i = typeof t == "object" ? t : Na(e, String(t));
      return e.stylePropertyNameCase === "css" && (i = za(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? zo[r.property] || r.property : r.attribute,
      t
    ];
  }
}
function Na(e, n) {
  try {
    return pa(n, { reactCompat: !0 });
  } catch (t) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      t
    ), i = new pe("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = si + "#cannot-parse-style-attribute", i;
  }
}
function hi(e, n, t) {
  let r;
  if (!t)
    r = { type: "Literal", value: n };
  else if (n.includes(".")) {
    const i = n.split(".");
    let o = -1, l;
    for (; ++o < i.length; ) {
      const a = qn(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: a,
        computed: !!(o && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = l;
  } else
    r = qn(n) && !/^[a-z]/.test(n) ? { type: "Identifier", name: n } : { type: "Literal", value: n };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return Tn.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  pt(e);
}
function pt(e, n) {
  const t = new pe(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: n,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw t.file = e.filePath || void 0, t.url = si + "#cannot-handle-mdx-estrees-without-createevaluater", t;
}
function za(e) {
  const n = {};
  let t;
  for (t in e)
    Tn.call(e, t) && (n[Da(t)] = e[t]);
  return n;
}
function Da(e) {
  let n = e.replace(ga, Pa);
  return n.slice(0, 3) === "ms-" && (n = "-" + n), n;
}
function Pa(e) {
  return "-" + e.toLowerCase();
}
const Gt = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, Ra = {};
function zn(e, n) {
  const t = Ra, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0, i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
  return fi(e, r, i);
}
function fi(e, n, t) {
  if (Ba(e)) {
    if ("value" in e)
      return e.type === "html" && !t ? "" : e.value;
    if (n && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return rr(e.children, n, t);
  }
  return Array.isArray(e) ? rr(e, n, t) : "";
}
function rr(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = fi(e[i], n, t);
  return r.join("");
}
function Ba(e) {
  return !!(e && typeof e == "object");
}
const ir = document.createElement("i");
function Dn(e) {
  const n = "&" + e + ";";
  ir.innerHTML = n;
  const t = ir.textContent;
  return t.charCodeAt(t.length - 1) === 59 && e !== "semi" || t === n ? !1 : t;
}
function Ce(e, n, t, r) {
  const i = e.length;
  let o = 0, l;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(n, t), e.splice(...l);
  else
    for (t && e.splice(n, t); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(n, 0), e.splice(...l), o += 1e4, n += 1e4;
}
function Ie(e, n) {
  return e.length > 0 ? (Ce(e, e.length, 0, n), e) : n;
}
const lr = {}.hasOwnProperty;
function pi(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; )
    Ma(n, e[t]);
  return n;
}
function Ma(e, n) {
  let t;
  for (t in n) {
    const i = (lr.call(e, t) ? e[t] : void 0) || (e[t] = {}), o = n[t];
    let l;
    if (o)
      for (l in o) {
        lr.call(i, l) || (i[l] = []);
        const a = o[l];
        Fa(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function Fa(e, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; )
    (n[t].add === "after" ? e : r).push(n[t]);
  Ce(e, 0, 0, r);
}
function di(e, n) {
  const t = Number.parseInt(e, n);
  return (
    // C0 except for HT, LF, FF, CR, space.
    t < 9 || t === 11 || t > 13 && t < 32 || // Control character (DEL) of C0, and C1 controls.
    t > 126 && t < 160 || // Lone high surrogates and low surrogates.
    t > 55295 && t < 57344 || // Noncharacters.
    t > 64975 && t < 65008 || /* eslint-disable no-bitwise */
    (t & 65535) === 65535 || (t & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    t > 1114111 ? "�" : String.fromCodePoint(t)
  );
}
function Le(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ge = Ve(/[A-Za-z]/), fe = Ve(/[\dA-Za-z]/), Oa = Ve(/[#-'*+\--9=?A-Z^-~]/);
function Tt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const gn = Ve(/\d/), Ha = Ve(/[\dA-Fa-f]/), ja = Ve(/[!-/:-@[-`{-~]/);
function B(e) {
  return e !== null && e < -2;
}
function Y(e) {
  return e !== null && (e < 0 || e === 32);
}
function U(e) {
  return e === -2 || e === -1 || e === 32;
}
const Pt = Ve(new RegExp("\\p{P}|\\p{S}", "u")), Ge = Ve(/\s/);
function Ve(e) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t));
  }
}
function lt(e) {
  const n = [];
  let t = -1, r = 0, i = 0;
  for (; ++t < e.length; ) {
    const o = e.charCodeAt(t);
    let l = "";
    if (o === 37 && fe(e.charCodeAt(t + 1)) && fe(e.charCodeAt(t + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const a = e.charCodeAt(t + 1);
      o < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(o, a), i = 1) : l = "�";
    } else
      l = String.fromCharCode(o);
    l && (n.push(e.slice(r, t), encodeURIComponent(l)), r = t + i + 1, l = ""), i && (t += i, i = 0);
  }
  return n.join("") + e.slice(r);
}
function W(e, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return U(s) ? (e.enter(t), a(s)) : n(s);
  }
  function a(s) {
    return U(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
  }
}
const $a = {
  tokenize: Ua
};
function Ua(e) {
  const n = e.attempt(this.parser.constructs.contentInitial, r, i);
  let t;
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), W(e, n, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), o(a);
  }
  function o(a) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: t
    });
    return t && (t.next = s), t = s, l(a);
  }
  function l(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return B(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
  }
}
const Va = {
  tokenize: Wa
}, or = {
  tokenize: qa
};
function Wa(e) {
  const n = this, t = [];
  let r = 0, i, o, l;
  return a;
  function a(C) {
    if (r < t.length) {
      const M = t[r];
      return n.containerState = M[1], e.attempt(M[0].continuation, s, u)(C);
    }
    return u(C);
  }
  function s(C) {
    if (r++, n.containerState._closeFlow) {
      n.containerState._closeFlow = void 0, i && I();
      const M = n.events.length;
      let F = M, _;
      for (; F--; )
        if (n.events[F][0] === "exit" && n.events[F][1].type === "chunkFlow") {
          _ = n.events[F][1].end;
          break;
        }
      k(r);
      let N = M;
      for (; N < n.events.length; )
        n.events[N][1].end = {
          ..._
        }, N++;
      return Ce(n.events, F + 1, 0, n.events.slice(M)), n.events.length = N, u(C);
    }
    return a(C);
  }
  function u(C) {
    if (r === t.length) {
      if (!i)
        return p(C);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return m(C);
      n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return n.containerState = {}, e.check(or, h, c)(C);
  }
  function h(C) {
    return i && I(), k(r), p(C);
  }
  function c(C) {
    return n.parser.lazy[n.now().line] = r !== t.length, l = n.now().offset, m(C);
  }
  function p(C) {
    return n.containerState = {}, e.attempt(or, f, m)(C);
  }
  function f(C) {
    return r++, t.push([n.currentConstruct, n.containerState]), p(C);
  }
  function m(C) {
    if (C === null) {
      i && I(), k(0), e.consume(C);
      return;
    }
    return i = i || n.parser.flow(n.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: o
    }), b(C);
  }
  function b(C) {
    if (C === null) {
      w(e.exit("chunkFlow"), !0), k(0), e.consume(C);
      return;
    }
    return B(C) ? (e.consume(C), w(e.exit("chunkFlow")), r = 0, n.interrupt = void 0, a) : (e.consume(C), b);
  }
  function w(C, M) {
    const F = n.sliceStream(C);
    if (M && F.push(null), C.previous = o, o && (o.next = C), o = C, i.defineSkip(C.start), i.write(F), n.parser.lazy[C.start.line]) {
      let _ = i.events.length;
      for (; _--; )
        if (
          // The token starts before the line ending…
          i.events[_][1].start.offset < l && // …and either is not ended yet…
          (!i.events[_][1].end || // …or ends after it.
          i.events[_][1].end.offset > l)
        )
          return;
      const N = n.events.length;
      let R = N, O, x;
      for (; R--; )
        if (n.events[R][0] === "exit" && n.events[R][1].type === "chunkFlow") {
          if (O) {
            x = n.events[R][1].end;
            break;
          }
          O = !0;
        }
      for (k(r), _ = N; _ < n.events.length; )
        n.events[_][1].end = {
          ...x
        }, _++;
      Ce(n.events, R + 1, 0, n.events.slice(N)), n.events.length = _;
    }
  }
  function k(C) {
    let M = t.length;
    for (; M-- > C; ) {
      const F = t[M];
      n.containerState = F[1], F[0].exit.call(n, e);
    }
    t.length = C;
  }
  function I() {
    i.write([null]), o = void 0, i = void 0, n.containerState._closeFlow = void 0;
  }
}
function qa(e, n, t) {
  return W(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function nt(e) {
  if (e === null || Y(e) || Ge(e))
    return 1;
  if (Pt(e))
    return 2;
}
function Rt(e, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (n = o(n, t), r.push(o));
  }
  return n;
}
const yn = {
  name: "attention",
  resolveAll: Za,
  tokenize: Ga
};
function Za(e, n) {
  let t = -1, r, i, o, l, a, s, u, h;
  for (; ++t < e.length; )
    if (e[t][0] === "enter" && e[t][1].type === "attentionSequence" && e[t][1]._close) {
      for (r = t; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[t][1]._open) && (e[t][1].end.offset - e[t][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[t][1].end.offset - e[t][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[t][1].end.offset - e[t][1].start.offset > 1 ? 2 : 1;
          const c = {
            ...e[r][1].end
          }, p = {
            ...e[t][1].start
          };
          ar(c, -s), ar(p, s), l = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
            end: {
              ...e[r][1].end
            }
          }, a = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[t][1].start
            },
            end: p
          }, o = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[t][1].start
            }
          }, i = {
            type: s > 1 ? "strong" : "emphasis",
            start: {
              ...l.start
            },
            end: {
              ...a.end
            }
          }, e[r][1].end = {
            ...l.start
          }, e[t][1].start = {
            ...a.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = Ie(u, [["enter", e[r][1], n], ["exit", e[r][1], n]])), u = Ie(u, [["enter", i, n], ["enter", l, n], ["exit", l, n], ["enter", o, n]]), u = Ie(u, Rt(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n)), u = Ie(u, [["exit", o, n], ["enter", a, n], ["exit", a, n], ["exit", i, n]]), e[t][1].end.offset - e[t][1].start.offset ? (h = 2, u = Ie(u, [["enter", e[t][1], n], ["exit", e[t][1], n]])) : h = 0, Ce(e, r - 1, t - r + 3, u), t = r + u.length - h - 2;
          break;
        }
    }
  for (t = -1; ++t < e.length; )
    e[t][1].type === "attentionSequence" && (e[t][1].type = "data");
  return e;
}
function Ga(e, n) {
  const t = this.parser.constructs.attentionMarkers.null, r = this.previous, i = nt(r);
  let o;
  return l;
  function l(s) {
    return o = s, e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === o)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), h = nt(s), c = !h || h === 2 && i || t.includes(s), p = !i || i === 2 && h || t.includes(r);
    return u._open = !!(o === 42 ? c : c && (i || !p)), u._close = !!(o === 42 ? p : p && (h || !c)), n(s);
  }
}
function ar(e, n) {
  e.column += n, e.offset += n, e._bufferIndex += n;
}
const Xa = {
  name: "autolink",
  tokenize: Qa
};
function Qa(e, n, t) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(f) {
    return ge(f) ? (e.consume(f), l) : f === 64 ? t(f) : u(f);
  }
  function l(f) {
    return f === 43 || f === 45 || f === 46 || fe(f) ? (r = 1, a(f)) : u(f);
  }
  function a(f) {
    return f === 58 ? (e.consume(f), r = 0, s) : (f === 43 || f === 45 || f === 46 || fe(f)) && r++ < 32 ? (e.consume(f), a) : (r = 0, u(f));
  }
  function s(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), n) : f === null || f === 32 || f === 60 || Tt(f) ? t(f) : (e.consume(f), s);
  }
  function u(f) {
    return f === 64 ? (e.consume(f), h) : Oa(f) ? (e.consume(f), u) : t(f);
  }
  function h(f) {
    return fe(f) ? c(f) : t(f);
  }
  function c(f) {
    return f === 46 ? (e.consume(f), r = 0, h) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), n) : p(f);
  }
  function p(f) {
    if ((f === 45 || fe(f)) && r++ < 63) {
      const m = f === 45 ? p : c;
      return e.consume(f), m;
    }
    return t(f);
  }
}
const gt = {
  partial: !0,
  tokenize: Ya
};
function Ya(e, n, t) {
  return r;
  function r(o) {
    return U(o) ? W(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || B(o) ? n(o) : t(o);
  }
}
const mi = {
  continuation: {
    tokenize: Ja
  },
  exit: es,
  name: "blockQuote",
  tokenize: Ka
};
function Ka(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o;
    }
    return t(l);
  }
  function o(l) {
    return U(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(l));
  }
}
function Ja(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return U(l) ? W(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l);
  }
  function o(l) {
    return e.attempt(mi, n, t)(l);
  }
}
function es(e) {
  e.exit("blockQuote");
}
const gi = {
  name: "characterEscape",
  tokenize: ts
};
function ts(e, n, t) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return ja(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(o);
  }
}
const yi = {
  name: "characterReference",
  tokenize: ns
};
function ns(e, n, t) {
  const r = this;
  let i = 0, o, l;
  return a;
  function a(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), s;
  }
  function s(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, l = fe, h(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = Ha, h) : (e.enter("characterReferenceValue"), o = 7, l = gn, h(c));
  }
  function h(c) {
    if (c === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return l === fe && !Dn(r.sliceSerialize(p)) ? t(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), n);
    }
    return l(c) && i++ < o ? (e.consume(c), h) : t(c);
  }
}
const sr = {
  partial: !0,
  tokenize: is
}, ur = {
  concrete: !0,
  name: "codeFenced",
  tokenize: rs
};
function rs(e, n, t) {
  const r = this, i = {
    partial: !0,
    tokenize: F
  };
  let o = 0, l = 0, a;
  return s;
  function s(_) {
    return u(_);
  }
  function u(_) {
    const N = r.events[r.events.length - 1];
    return o = N && N[1].type === "linePrefix" ? N[2].sliceSerialize(N[1], !0).length : 0, a = _, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), h(_);
  }
  function h(_) {
    return _ === a ? (l++, e.consume(_), h) : l < 3 ? t(_) : (e.exit("codeFencedFenceSequence"), U(_) ? W(e, c, "whitespace")(_) : c(_));
  }
  function c(_) {
    return _ === null || B(_) ? (e.exit("codeFencedFence"), r.interrupt ? n(_) : e.check(sr, b, M)(_)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(_));
  }
  function p(_) {
    return _ === null || B(_) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(_)) : U(_) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), W(e, f, "whitespace")(_)) : _ === 96 && _ === a ? t(_) : (e.consume(_), p);
  }
  function f(_) {
    return _ === null || B(_) ? c(_) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(_));
  }
  function m(_) {
    return _ === null || B(_) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(_)) : _ === 96 && _ === a ? t(_) : (e.consume(_), m);
  }
  function b(_) {
    return e.attempt(i, M, w)(_);
  }
  function w(_) {
    return e.enter("lineEnding"), e.consume(_), e.exit("lineEnding"), k;
  }
  function k(_) {
    return o > 0 && U(_) ? W(e, I, "linePrefix", o + 1)(_) : I(_);
  }
  function I(_) {
    return _ === null || B(_) ? e.check(sr, b, M)(_) : (e.enter("codeFlowValue"), C(_));
  }
  function C(_) {
    return _ === null || B(_) ? (e.exit("codeFlowValue"), I(_)) : (e.consume(_), C);
  }
  function M(_) {
    return e.exit("codeFenced"), n(_);
  }
  function F(_, N, R) {
    let O = 0;
    return x;
    function x(D) {
      return _.enter("lineEnding"), _.consume(D), _.exit("lineEnding"), T;
    }
    function T(D) {
      return _.enter("codeFencedFence"), U(D) ? W(_, L, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(D) : L(D);
    }
    function L(D) {
      return D === a ? (_.enter("codeFencedFenceSequence"), V(D)) : R(D);
    }
    function V(D) {
      return D === a ? (O++, _.consume(D), V) : O >= l ? (_.exit("codeFencedFenceSequence"), U(D) ? W(_, z, "whitespace")(D) : z(D)) : R(D);
    }
    function z(D) {
      return D === null || B(D) ? (_.exit("codeFencedFence"), N(D)) : R(D);
    }
  }
}
function is(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? t(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
const Xt = {
  name: "codeIndented",
  tokenize: os
}, ls = {
  partial: !0,
  tokenize: as
};
function os(e, n, t) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), W(e, o, "linePrefix", 5)(u);
  }
  function o(u) {
    const h = r.events[r.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? l(u) : t(u);
  }
  function l(u) {
    return u === null ? s(u) : B(u) ? e.attempt(ls, l, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || B(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), n(u);
  }
}
function as(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? t(l) : B(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : W(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(l) : B(l) ? i(l) : t(l);
  }
}
const ss = {
  name: "codeText",
  previous: cs,
  resolve: us,
  tokenize: hs
};
function us(e) {
  let n = e.length - 4, t = 3, r, i;
  if ((e[t][1].type === "lineEnding" || e[t][1].type === "space") && (e[n][1].type === "lineEnding" || e[n][1].type === "space")) {
    for (r = t; ++r < n; )
      if (e[r][1].type === "codeTextData") {
        e[t][1].type = "codeTextPadding", e[n][1].type = "codeTextPadding", t += 2, n -= 2;
        break;
      }
  }
  for (r = t - 1, n++; ++r <= n; )
    i === void 0 ? r !== n && e[r][1].type !== "lineEnding" && (i = r) : (r === n || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), n -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function cs(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function hs(e, n, t) {
  let r = 0, i, o;
  return l;
  function l(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
  }
  function a(c) {
    return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), s(c));
  }
  function s(c) {
    return c === null ? t(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), s) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, h(c)) : B(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || B(c) ? (e.exit("codeTextData"), s(c)) : (e.consume(c), u);
  }
  function h(c) {
    return c === 96 ? (e.consume(c), i++, h) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), n(c)) : (o.type = "codeTextData", u(c));
  }
}
class fs {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(n) {
    this.left = n ? [...n] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(n) {
    if (n < 0 || n >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + n + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return n < this.left.length ? this.left[n] : this.right[this.right.length - n + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(n, t) {
    const r = t ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(n, r) : n > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - n + this.left.length).reverse() : this.left.slice(n).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(n, t, r) {
    const i = t || 0;
    this.setCursor(Math.trunc(n));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && at(this.left, r), o.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(n) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(n) {
    this.setCursor(Number.POSITIVE_INFINITY), at(this.left, n);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(n) {
    this.setCursor(0), this.right.push(n);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(n) {
    this.setCursor(0), at(this.right, n.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(n) {
    if (!(n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0))
      if (n < this.left.length) {
        const t = this.left.splice(n, Number.POSITIVE_INFINITY);
        at(this.right, t.reverse());
      } else {
        const t = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
        at(this.left, t.reverse());
      }
  }
}
function at(e, n) {
  let t = 0;
  if (n.length < 1e4)
    e.push(...n);
  else
    for (; t < n.length; )
      e.push(...n.slice(t, t + 1e4)), t += 1e4;
}
function ki(e) {
  const n = {};
  let t = -1, r, i, o, l, a, s, u;
  const h = new fs(e);
  for (; ++t < h.length; ) {
    for (; t in n; )
      t = n[t];
    if (r = h.get(t), t && r[1].type === "chunkFlow" && h.get(t - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content"))
      for (; ++o < s.length && s[o][1].type !== "content"; )
        s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(n, ps(h, t)), t = n[t], u = !0);
    else if (r[1]._container) {
      for (o = t, i = void 0; o--; )
        if (l = h.get(o), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (i && (h.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...h.get(i)[1].start
      }, a = h.slice(i, t), a.unshift(r), h.splice(i, t - i + 1, a));
    }
  }
  return Ce(e, 0, Number.POSITIVE_INFINITY, h.slice(0)), !u;
}
function ps(e, n) {
  const t = e.get(n)[1], r = e.get(n)[2];
  let i = n - 1;
  const o = [];
  let l = t._tokenizer;
  l || (l = r.parser[t.contentType](t.start), t._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const a = l.events, s = [], u = {};
  let h, c, p = -1, f = t, m = 0, b = 0;
  const w = [b];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; )
      ;
    o.push(i), f._tokenizer || (h = r.sliceStream(f), f.next || h.push(null), c && l.defineSkip(f.start), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(h), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), c = f, f = f.next;
  }
  for (f = t; ++p < a.length; )
    // Find a void token that includes a break.
    a[p][0] === "exit" && a[p - 1][0] === "enter" && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && (b = p + 1, w.push(b), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (l.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : w.pop(), p = w.length; p--; ) {
    const k = a.slice(w[p], w[p + 1]), I = o.pop();
    s.push([I, I + k.length - 1]), e.splice(I, 2, k);
  }
  for (s.reverse(), p = -1; ++p < s.length; )
    u[m + s[p][0]] = m + s[p][1], m += s[p][1] - s[p][0] - 1;
  return u;
}
const ds = {
  resolve: gs,
  tokenize: ys
}, ms = {
  partial: !0,
  tokenize: ks
};
function gs(e) {
  return ki(e), e;
}
function ys(e, n) {
  let t;
  return r;
  function r(a) {
    return e.enter("content"), t = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : B(a) ? e.check(ms, l, o)(a) : (e.consume(a), i);
  }
  function o(a) {
    return e.exit("chunkContent"), e.exit("content"), n(a);
  }
  function l(a) {
    return e.consume(a), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
      contentType: "content",
      previous: t
    }), t = t.next, i;
  }
}
function ks(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), W(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || B(l))
      return t(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(l) : e.interrupt(r.parser.constructs.flow, t, n)(l);
  }
}
function bi(e, n, t, r, i, o, l, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let h = 0;
  return c;
  function c(k) {
    return k === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(k), e.exit(o), p) : k === null || k === 32 || k === 41 || Tt(k) ? t(k) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), b(k));
  }
  function p(k) {
    return k === 62 ? (e.enter(o), e.consume(k), e.exit(o), e.exit(i), e.exit(r), n) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), f(k));
  }
  function f(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(a), p(k)) : k === null || k === 60 || B(k) ? t(k) : (e.consume(k), k === 92 ? m : f);
  }
  function m(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), f) : f(k);
  }
  function b(k) {
    return !h && (k === null || k === 41 || Y(k)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), n(k)) : h < u && k === 40 ? (e.consume(k), h++, b) : k === 41 ? (e.consume(k), h--, b) : k === null || k === 32 || k === 40 || Tt(k) ? t(k) : (e.consume(k), k === 92 ? w : b);
  }
  function w(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), b) : b(k);
  }
}
function xi(e, n, t, r, i, o) {
  const l = this;
  let a = 0, s;
  return u;
  function u(f) {
    return e.enter(r), e.enter(i), e.consume(f), e.exit(i), e.enter(o), h;
  }
  function h(f) {
    return a > 999 || f === null || f === 91 || f === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    f === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? t(f) : f === 93 ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), n) : B(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), h) : (e.enter("chunkString", {
      contentType: "string"
    }), c(f));
  }
  function c(f) {
    return f === null || f === 91 || f === 93 || B(f) || a++ > 999 ? (e.exit("chunkString"), h(f)) : (e.consume(f), s || (s = !U(f)), f === 92 ? p : c);
  }
  function p(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, c) : c(f);
  }
}
function wi(e, n, t, r, i, o) {
  let l;
  return a;
  function a(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), l = p === 40 ? 41 : p, s) : t(p);
  }
  function s(p) {
    return p === l ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), n) : (e.enter(o), u(p));
  }
  function u(p) {
    return p === l ? (e.exit(o), s(l)) : p === null ? t(p) : B(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), W(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), h(p));
  }
  function h(p) {
    return p === l || p === null || B(p) ? (e.exit("chunkString"), u(p)) : (e.consume(p), p === 92 ? c : h);
  }
  function c(p) {
    return p === l || p === 92 ? (e.consume(p), h) : h(p);
  }
}
function ct(e, n) {
  let t;
  return r;
  function r(i) {
    return B(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t = !0, r) : U(i) ? W(e, r, t ? "linePrefix" : "lineSuffix")(i) : n(i);
  }
}
const bs = {
  name: "definition",
  tokenize: ws
}, xs = {
  partial: !0,
  tokenize: _s
};
function ws(e, n, t) {
  const r = this;
  let i;
  return o;
  function o(f) {
    return e.enter("definition"), l(f);
  }
  function l(f) {
    return xi.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(f);
  }
  function a(f) {
    return i = Le(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : t(f);
  }
  function s(f) {
    return Y(f) ? ct(e, u)(f) : u(f);
  }
  function u(f) {
    return bi(
      e,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      t,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(f);
  }
  function h(f) {
    return e.attempt(xs, c, c)(f);
  }
  function c(f) {
    return U(f) ? W(e, p, "whitespace")(f) : p(f);
  }
  function p(f) {
    return f === null || B(f) ? (e.exit("definition"), r.parser.defined.push(i), n(f)) : t(f);
  }
}
function _s(e, n, t) {
  return r;
  function r(a) {
    return Y(a) ? ct(e, i)(a) : t(a);
  }
  function i(a) {
    return wi(e, o, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function o(a) {
    return U(a) ? W(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || B(a) ? n(a) : t(a);
  }
}
const vs = {
  name: "hardBreakEscape",
  tokenize: Cs
};
function Cs(e, n, t) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return B(o) ? (e.exit("hardBreakEscape"), n(o)) : t(o);
  }
}
const Ss = {
  name: "headingAtx",
  resolve: Is,
  tokenize: Es
};
function Is(e, n) {
  let t = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), t - 2 > r && e[t][1].type === "whitespace" && (t -= 2), e[t][1].type === "atxHeadingSequence" && (r === t - 1 || t - 4 > r && e[t - 2][1].type === "whitespace") && (t -= r + 1 === t ? 2 : 4), t > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[t][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[t][1].end,
    contentType: "text"
  }, Ce(e, r, t - r + 1, [["enter", i, n], ["enter", o, n], ["exit", o, n], ["exit", i, n]])), e;
}
function Es(e, n, t) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("atxHeading"), o(h);
  }
  function o(h) {
    return e.enter("atxHeadingSequence"), l(h);
  }
  function l(h) {
    return h === 35 && r++ < 6 ? (e.consume(h), l) : h === null || Y(h) ? (e.exit("atxHeadingSequence"), a(h)) : t(h);
  }
  function a(h) {
    return h === 35 ? (e.enter("atxHeadingSequence"), s(h)) : h === null || B(h) ? (e.exit("atxHeading"), n(h)) : U(h) ? W(e, a, "whitespace")(h) : (e.enter("atxHeadingText"), u(h));
  }
  function s(h) {
    return h === 35 ? (e.consume(h), s) : (e.exit("atxHeadingSequence"), a(h));
  }
  function u(h) {
    return h === null || h === 35 || Y(h) ? (e.exit("atxHeadingText"), a(h)) : (e.consume(h), u);
  }
}
const As = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], cr = ["pre", "script", "style", "textarea"], Ts = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: zs,
  tokenize: Ds
}, Ls = {
  partial: !0,
  tokenize: Rs
}, Ns = {
  partial: !0,
  tokenize: Ps
};
function zs(e) {
  let n = e.length;
  for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); )
    ;
  return n > 1 && e[n - 2][1].type === "linePrefix" && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e;
}
function Ds(e, n, t) {
  const r = this;
  let i, o, l, a, s;
  return u;
  function u(y) {
    return h(y);
  }
  function h(y) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(y), c;
  }
  function c(y) {
    return y === 33 ? (e.consume(y), p) : y === 47 ? (e.consume(y), o = !0, b) : y === 63 ? (e.consume(y), i = 3, r.interrupt ? n : g) : ge(y) ? (e.consume(y), l = String.fromCharCode(y), w) : t(y);
  }
  function p(y) {
    return y === 45 ? (e.consume(y), i = 2, f) : y === 91 ? (e.consume(y), i = 5, a = 0, m) : ge(y) ? (e.consume(y), i = 4, r.interrupt ? n : g) : t(y);
  }
  function f(y) {
    return y === 45 ? (e.consume(y), r.interrupt ? n : g) : t(y);
  }
  function m(y) {
    const xe = "CDATA[";
    return y === xe.charCodeAt(a++) ? (e.consume(y), a === xe.length ? r.interrupt ? n : L : m) : t(y);
  }
  function b(y) {
    return ge(y) ? (e.consume(y), l = String.fromCharCode(y), w) : t(y);
  }
  function w(y) {
    if (y === null || y === 47 || y === 62 || Y(y)) {
      const xe = y === 47, re = l.toLowerCase();
      return !xe && !o && cr.includes(re) ? (i = 1, r.interrupt ? n(y) : L(y)) : As.includes(l.toLowerCase()) ? (i = 6, xe ? (e.consume(y), k) : r.interrupt ? n(y) : L(y)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(y) : o ? I(y) : C(y));
    }
    return y === 45 || fe(y) ? (e.consume(y), l += String.fromCharCode(y), w) : t(y);
  }
  function k(y) {
    return y === 62 ? (e.consume(y), r.interrupt ? n : L) : t(y);
  }
  function I(y) {
    return U(y) ? (e.consume(y), I) : x(y);
  }
  function C(y) {
    return y === 47 ? (e.consume(y), x) : y === 58 || y === 95 || ge(y) ? (e.consume(y), M) : U(y) ? (e.consume(y), C) : x(y);
  }
  function M(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || fe(y) ? (e.consume(y), M) : F(y);
  }
  function F(y) {
    return y === 61 ? (e.consume(y), _) : U(y) ? (e.consume(y), F) : C(y);
  }
  function _(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? t(y) : y === 34 || y === 39 ? (e.consume(y), s = y, N) : U(y) ? (e.consume(y), _) : R(y);
  }
  function N(y) {
    return y === s ? (e.consume(y), s = null, O) : y === null || B(y) ? t(y) : (e.consume(y), N);
  }
  function R(y) {
    return y === null || y === 34 || y === 39 || y === 47 || y === 60 || y === 61 || y === 62 || y === 96 || Y(y) ? F(y) : (e.consume(y), R);
  }
  function O(y) {
    return y === 47 || y === 62 || U(y) ? C(y) : t(y);
  }
  function x(y) {
    return y === 62 ? (e.consume(y), T) : t(y);
  }
  function T(y) {
    return y === null || B(y) ? L(y) : U(y) ? (e.consume(y), T) : t(y);
  }
  function L(y) {
    return y === 45 && i === 2 ? (e.consume(y), X) : y === 60 && i === 1 ? (e.consume(y), G) : y === 62 && i === 4 ? (e.consume(y), le) : y === 63 && i === 3 ? (e.consume(y), g) : y === 93 && i === 5 ? (e.consume(y), ne) : B(y) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Ls, ce, V)(y)) : y === null || B(y) ? (e.exit("htmlFlowData"), V(y)) : (e.consume(y), L);
  }
  function V(y) {
    return e.check(Ns, z, ce)(y);
  }
  function z(y) {
    return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), D;
  }
  function D(y) {
    return y === null || B(y) ? V(y) : (e.enter("htmlFlowData"), L(y));
  }
  function X(y) {
    return y === 45 ? (e.consume(y), g) : L(y);
  }
  function G(y) {
    return y === 47 ? (e.consume(y), l = "", te) : L(y);
  }
  function te(y) {
    if (y === 62) {
      const xe = l.toLowerCase();
      return cr.includes(xe) ? (e.consume(y), le) : L(y);
    }
    return ge(y) && l.length < 8 ? (e.consume(y), l += String.fromCharCode(y), te) : L(y);
  }
  function ne(y) {
    return y === 93 ? (e.consume(y), g) : L(y);
  }
  function g(y) {
    return y === 62 ? (e.consume(y), le) : y === 45 && i === 2 ? (e.consume(y), g) : L(y);
  }
  function le(y) {
    return y === null || B(y) ? (e.exit("htmlFlowData"), ce(y)) : (e.consume(y), le);
  }
  function ce(y) {
    return e.exit("htmlFlow"), n(y);
  }
}
function Ps(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return B(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : t(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
function Rs(e, n, t) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(gt, n, t);
  }
}
const Bs = {
  name: "htmlText",
  tokenize: Ms
};
function Ms(e, n, t) {
  const r = this;
  let i, o, l;
  return a;
  function a(g) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(g), s;
  }
  function s(g) {
    return g === 33 ? (e.consume(g), u) : g === 47 ? (e.consume(g), F) : g === 63 ? (e.consume(g), C) : ge(g) ? (e.consume(g), R) : t(g);
  }
  function u(g) {
    return g === 45 ? (e.consume(g), h) : g === 91 ? (e.consume(g), o = 0, m) : ge(g) ? (e.consume(g), I) : t(g);
  }
  function h(g) {
    return g === 45 ? (e.consume(g), f) : t(g);
  }
  function c(g) {
    return g === null ? t(g) : g === 45 ? (e.consume(g), p) : B(g) ? (l = c, G(g)) : (e.consume(g), c);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), f) : c(g);
  }
  function f(g) {
    return g === 62 ? X(g) : g === 45 ? p(g) : c(g);
  }
  function m(g) {
    const le = "CDATA[";
    return g === le.charCodeAt(o++) ? (e.consume(g), o === le.length ? b : m) : t(g);
  }
  function b(g) {
    return g === null ? t(g) : g === 93 ? (e.consume(g), w) : B(g) ? (l = b, G(g)) : (e.consume(g), b);
  }
  function w(g) {
    return g === 93 ? (e.consume(g), k) : b(g);
  }
  function k(g) {
    return g === 62 ? X(g) : g === 93 ? (e.consume(g), k) : b(g);
  }
  function I(g) {
    return g === null || g === 62 ? X(g) : B(g) ? (l = I, G(g)) : (e.consume(g), I);
  }
  function C(g) {
    return g === null ? t(g) : g === 63 ? (e.consume(g), M) : B(g) ? (l = C, G(g)) : (e.consume(g), C);
  }
  function M(g) {
    return g === 62 ? X(g) : C(g);
  }
  function F(g) {
    return ge(g) ? (e.consume(g), _) : t(g);
  }
  function _(g) {
    return g === 45 || fe(g) ? (e.consume(g), _) : N(g);
  }
  function N(g) {
    return B(g) ? (l = N, G(g)) : U(g) ? (e.consume(g), N) : X(g);
  }
  function R(g) {
    return g === 45 || fe(g) ? (e.consume(g), R) : g === 47 || g === 62 || Y(g) ? O(g) : t(g);
  }
  function O(g) {
    return g === 47 ? (e.consume(g), X) : g === 58 || g === 95 || ge(g) ? (e.consume(g), x) : B(g) ? (l = O, G(g)) : U(g) ? (e.consume(g), O) : X(g);
  }
  function x(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || fe(g) ? (e.consume(g), x) : T(g);
  }
  function T(g) {
    return g === 61 ? (e.consume(g), L) : B(g) ? (l = T, G(g)) : U(g) ? (e.consume(g), T) : O(g);
  }
  function L(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? t(g) : g === 34 || g === 39 ? (e.consume(g), i = g, V) : B(g) ? (l = L, G(g)) : U(g) ? (e.consume(g), L) : (e.consume(g), z);
  }
  function V(g) {
    return g === i ? (e.consume(g), i = void 0, D) : g === null ? t(g) : B(g) ? (l = V, G(g)) : (e.consume(g), V);
  }
  function z(g) {
    return g === null || g === 34 || g === 39 || g === 60 || g === 61 || g === 96 ? t(g) : g === 47 || g === 62 || Y(g) ? O(g) : (e.consume(g), z);
  }
  function D(g) {
    return g === 47 || g === 62 || Y(g) ? O(g) : t(g);
  }
  function X(g) {
    return g === 62 ? (e.consume(g), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(g);
  }
  function G(g) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), te;
  }
  function te(g) {
    return U(g) ? W(e, ne, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(g) : ne(g);
  }
  function ne(g) {
    return e.enter("htmlTextData"), l(g);
  }
}
const Pn = {
  name: "labelEnd",
  resolveAll: js,
  resolveTo: $s,
  tokenize: Us
}, Fs = {
  tokenize: Vs
}, Os = {
  tokenize: Ws
}, Hs = {
  tokenize: qs
};
function js(e) {
  let n = -1;
  const t = [];
  for (; ++n < e.length; ) {
    const r = e[n][1];
    if (t.push(e[n]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", n += i;
    }
  }
  return e.length !== t.length && Ce(e, 0, e.length, t), e;
}
function $s(e, n) {
  let t = e.length, r = 0, i, o, l, a;
  for (; t--; )
    if (i = e[t][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[t][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (e[t][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = t, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = t);
  const s = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[l][1].end
    }
  }, h = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[l - 2][1].start
    }
  };
  return a = [["enter", s, n], ["enter", u, n]], a = Ie(a, e.slice(o + 1, o + r + 3)), a = Ie(a, [["enter", h, n]]), a = Ie(a, Rt(n.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), n)), a = Ie(a, [["exit", h, n], e[l - 2], e[l - 1], ["exit", u, n]]), a = Ie(a, e.slice(l + 1)), a = Ie(a, [["exit", s, n]]), Ce(e, o, e.length, a), e;
}
function Us(e, n, t) {
  const r = this;
  let i = r.events.length, o, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(p) {
    return o ? o._inactive ? c(p) : (l = r.parser.defined.includes(Le(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), s) : t(p);
  }
  function s(p) {
    return p === 40 ? e.attempt(Fs, h, l ? h : c)(p) : p === 91 ? e.attempt(Os, h, l ? u : c)(p) : l ? h(p) : c(p);
  }
  function u(p) {
    return e.attempt(Hs, h, c)(p);
  }
  function h(p) {
    return n(p);
  }
  function c(p) {
    return o._balanced = !0, t(p);
  }
}
function Vs(e, n, t) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return Y(c) ? ct(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41 ? h(c) : bi(e, l, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function l(c) {
    return Y(c) ? ct(e, s)(c) : h(c);
  }
  function a(c) {
    return t(c);
  }
  function s(c) {
    return c === 34 || c === 39 || c === 40 ? wi(e, u, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : h(c);
  }
  function u(c) {
    return Y(c) ? ct(e, h)(c) : h(c);
  }
  function h(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), n) : t(c);
  }
}
function Ws(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return xi.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(a);
  }
  function o(a) {
    return r.parser.defined.includes(Le(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(a) : t(a);
  }
  function l(a) {
    return t(a);
  }
}
function qs(e, n, t) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), n) : t(o);
  }
}
const Zs = {
  name: "labelStartImage",
  resolveAll: Pn.resolveAll,
  tokenize: Gs
};
function Gs(e, n, t) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
  }
  function o(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), l) : t(a);
  }
  function l(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(a) : n(a);
  }
}
const Xs = {
  name: "labelStartLink",
  resolveAll: Pn.resolveAll,
  tokenize: Qs
};
function Qs(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(l) : n(l);
  }
}
const Qt = {
  name: "lineEnding",
  tokenize: Ys
};
function Ys(e, n) {
  return t;
  function t(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), W(e, n, "linePrefix");
  }
}
const It = {
  name: "thematicBreak",
  tokenize: Ks
};
function Ks(e, n, t) {
  let r = 0, i;
  return o;
  function o(u) {
    return e.enter("thematicBreak"), l(u);
  }
  function l(u) {
    return i = u, a(u);
  }
  function a(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || B(u)) ? (e.exit("thematicBreak"), n(u)) : t(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), U(u) ? W(e, a, "whitespace")(u) : a(u));
  }
}
const ke = {
  continuation: {
    tokenize: nu
  },
  exit: iu,
  name: "list",
  tokenize: tu
}, Js = {
  partial: !0,
  tokenize: lu
}, eu = {
  partial: !0,
  tokenize: ru
};
function tu(e, n, t) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return a;
  function a(f) {
    const m = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (m === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : gn(f)) {
      if (r.containerState.type || (r.containerState.type = m, e.enter(m, {
        _container: !0
      })), m === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(It, t, u)(f) : u(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(f);
    }
    return t(f);
  }
  function s(f) {
    return gn(f) && ++l < 10 ? (e.consume(f), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), u(f)) : t(f);
  }
  function u(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      gt,
      // Can’t be empty when interrupting.
      r.interrupt ? t : h,
      e.attempt(Js, p, c)
    );
  }
  function h(f) {
    return r.containerState.initialBlankLine = !0, o++, p(f);
  }
  function c(f) {
    return U(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), p) : t(f);
  }
  function p(f) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(f);
  }
}
function nu(e, n, t) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(gt, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, W(e, n, "listItemIndent", r.containerState.size + 1)(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !U(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(eu, n, l)(a));
  }
  function l(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, W(e, e.attempt(ke, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function ru(e, n, t) {
  const r = this;
  return W(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? n(o) : t(o);
  }
}
function iu(e) {
  e.exit(this.containerState.type);
}
function lu(e, n, t) {
  const r = this;
  return W(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !U(o) && l && l[1].type === "listItemPrefixWhitespace" ? n(o) : t(o);
  }
}
const hr = {
  name: "setextUnderline",
  resolveTo: ou,
  tokenize: au
};
function ou(e, n) {
  let t = e.length, r, i, o;
  for (; t--; )
    if (e[t][0] === "enter") {
      if (e[t][1].type === "content") {
        r = t;
        break;
      }
      e[t][1].type === "paragraph" && (i = t);
    } else
      e[t][1].type === "content" && e.splice(t, 1), !o && e[t][1].type === "definition" && (o = t);
  const l = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", l, n]), e.splice(o + 1, 0, ["exit", e[r][1], n]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = l, e.push(["exit", l, n]), e;
}
function au(e, n, t) {
  const r = this;
  let i;
  return o;
  function o(u) {
    let h = r.events.length, c;
    for (; h--; )
      if (r.events[h][1].type !== "lineEnding" && r.events[h][1].type !== "linePrefix" && r.events[h][1].type !== "content") {
        c = r.events[h][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = u, l(u)) : t(u);
  }
  function l(u) {
    return e.enter("setextHeadingLineSequence"), a(u);
  }
  function a(u) {
    return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), U(u) ? W(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || B(u) ? (e.exit("setextHeadingLine"), n(u)) : t(u);
  }
}
const su = {
  tokenize: uu
};
function uu(e) {
  const n = this, t = e.attempt(
    // Try to parse a blank line.
    gt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, W(e, e.attempt(this.parser.constructs.flow, i, e.attempt(ds, i)), "linePrefix"))
  );
  return t;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n.currentConstruct = void 0, t;
  }
}
const cu = {
  resolveAll: vi()
}, hu = _i("string"), fu = _i("text");
function _i(e) {
  return {
    resolveAll: vi(e === "text" ? pu : void 0),
    tokenize: n
  };
  function n(t) {
    const r = this, i = this.parser.constructs[e], o = t.attempt(i, l, a);
    return l;
    function l(h) {
      return u(h) ? o(h) : a(h);
    }
    function a(h) {
      if (h === null) {
        t.consume(h);
        return;
      }
      return t.enter("data"), t.consume(h), s;
    }
    function s(h) {
      return u(h) ? (t.exit("data"), o(h)) : (t.consume(h), s);
    }
    function u(h) {
      if (h === null)
        return !0;
      const c = i[h];
      let p = -1;
      if (c)
        for (; ++p < c.length; ) {
          const f = c[p];
          if (!f.previous || f.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function vi(e) {
  return n;
  function n(t, r) {
    let i = -1, o;
    for (; ++i <= t.length; )
      o === void 0 ? t[i] && t[i][1].type === "data" && (o = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== o + 2 && (t[o][1].end = t[i - 1][1].end, t.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(t, r) : t;
  }
}
function pu(e, n) {
  let t = 0;
  for (; ++t <= e.length; )
    if ((t === e.length || e[t][1].type === "lineEnding") && e[t - 1][1].type === "data") {
      const r = e[t - 1][1], i = n.sliceStream(r);
      let o = i.length, l = -1, a = 0, s;
      for (; o--; ) {
        const u = i[o];
        if (typeof u == "string") {
          for (l = u.length; u.charCodeAt(l - 1) === 32; )
            a++, l--;
          if (l) break;
          l = -1;
        } else if (u === -2)
          s = !0, a++;
        else if (u !== -1) {
          o++;
          break;
        }
      }
      if (n._contentTypeTextTrailing && t === e.length && (a = 0), a) {
        const u = {
          type: t === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? l : r.start._bufferIndex + l,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(t, 0, ["enter", u, n], ["exit", u, n]), t += 2);
      }
      t++;
    }
  return e;
}
const du = {
  42: ke,
  43: ke,
  45: ke,
  48: ke,
  49: ke,
  50: ke,
  51: ke,
  52: ke,
  53: ke,
  54: ke,
  55: ke,
  56: ke,
  57: ke,
  62: mi
}, mu = {
  91: bs
}, gu = {
  [-2]: Xt,
  [-1]: Xt,
  32: Xt
}, yu = {
  35: Ss,
  42: It,
  45: [hr, It],
  60: Ts,
  61: hr,
  95: It,
  96: ur,
  126: ur
}, ku = {
  38: yi,
  92: gi
}, bu = {
  [-5]: Qt,
  [-4]: Qt,
  [-3]: Qt,
  33: Zs,
  38: yi,
  42: yn,
  60: [Xa, Bs],
  91: Xs,
  92: [vs, gi],
  93: Pn,
  95: yn,
  96: ss
}, xu = {
  null: [yn, cu]
}, wu = {
  null: [42, 95]
}, _u = {
  null: []
}, vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: wu,
  contentInitial: mu,
  disable: _u,
  document: du,
  flow: yu,
  flowInitial: gu,
  insideSpan: xu,
  string: ku,
  text: bu
}, Symbol.toStringTag, { value: "Module" }));
function Cu(e, n, t) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: t && t.line || 1,
    column: t && t.column || 1,
    offset: t && t.offset || 0
  };
  const i = {}, o = [];
  let l = [], a = [];
  const s = {
    attempt: N(F),
    check: N(_),
    consume: I,
    enter: C,
    exit: M,
    interrupt: N(_, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: b,
    events: [],
    now: m,
    parser: e,
    previous: null,
    sliceSerialize: p,
    sliceStream: f,
    write: c
  };
  let h = n.tokenize.call(u, s);
  return n.resolveAll && o.push(n), u;
  function c(T) {
    return l = Ie(l, T), w(), l[l.length - 1] !== null ? [] : (R(n, 0), u.events = Rt(o, u.events, u), u.events);
  }
  function p(T, L) {
    return Iu(f(T), L);
  }
  function f(T) {
    return Su(l, T);
  }
  function m() {
    const {
      _bufferIndex: T,
      _index: L,
      line: V,
      column: z,
      offset: D
    } = r;
    return {
      _bufferIndex: T,
      _index: L,
      line: V,
      column: z,
      offset: D
    };
  }
  function b(T) {
    i[T.line] = T.column, x();
  }
  function w() {
    let T;
    for (; r._index < l.length; ) {
      const L = l[r._index];
      if (typeof L == "string")
        for (T = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === T && r._bufferIndex < L.length; )
          k(L.charCodeAt(r._bufferIndex));
      else
        k(L);
    }
  }
  function k(T) {
    h = h(T);
  }
  function I(T) {
    B(T) ? (r.line++, r.column = 1, r.offset += T === -3 ? 2 : 1, x()) : T !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = T;
  }
  function C(T, L) {
    const V = L || {};
    return V.type = T, V.start = m(), u.events.push(["enter", V, u]), a.push(V), V;
  }
  function M(T) {
    const L = a.pop();
    return L.end = m(), u.events.push(["exit", L, u]), L;
  }
  function F(T, L) {
    R(T, L.from);
  }
  function _(T, L) {
    L.restore();
  }
  function N(T, L) {
    return V;
    function V(z, D, X) {
      let G, te, ne, g;
      return Array.isArray(z) ? (
        /* c8 ignore next 1 */
        ce(z)
      ) : "tokenize" in z ? (
        // Looks like a construct.
        ce([
          /** @type {Construct} */
          z
        ])
      ) : le(z);
      function le(ie) {
        return Oe;
        function Oe(Ne) {
          const Re = Ne !== null && ie[Ne], Be = Ne !== null && ie.null, Ye = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Re) ? Re : Re ? [Re] : [],
            ...Array.isArray(Be) ? Be : Be ? [Be] : []
          ];
          return ce(Ye)(Ne);
        }
      }
      function ce(ie) {
        return G = ie, te = 0, ie.length === 0 ? X : y(ie[te]);
      }
      function y(ie) {
        return Oe;
        function Oe(Ne) {
          return g = O(), ne = ie, ie.partial || (u.currentConstruct = ie), ie.name && u.parser.constructs.disable.null.includes(ie.name) ? re() : ie.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            L ? Object.assign(Object.create(u), L) : u,
            s,
            xe,
            re
          )(Ne);
        }
      }
      function xe(ie) {
        return T(ne, g), D;
      }
      function re(ie) {
        return g.restore(), ++te < G.length ? y(G[te]) : X;
      }
    }
  }
  function R(T, L) {
    T.resolveAll && !o.includes(T) && o.push(T), T.resolve && Ce(u.events, L, u.events.length - L, T.resolve(u.events.slice(L), u)), T.resolveTo && (u.events = T.resolveTo(u.events, u));
  }
  function O() {
    const T = m(), L = u.previous, V = u.currentConstruct, z = u.events.length, D = Array.from(a);
    return {
      from: z,
      restore: X
    };
    function X() {
      r = T, u.previous = L, u.currentConstruct = V, u.events.length = z, a = D, x();
    }
  }
  function x() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Su(e, n) {
  const t = n.start._index, r = n.start._bufferIndex, i = n.end._index, o = n.end._bufferIndex;
  let l;
  if (t === i)
    l = [e[t].slice(r, o)];
  else {
    if (l = e.slice(t, i), r > -1) {
      const a = l[0];
      typeof a == "string" ? l[0] = a.slice(r) : l.shift();
    }
    o > 0 && l.push(e[i].slice(0, o));
  }
  return l;
}
function Iu(e, n) {
  let t = -1;
  const r = [];
  let i;
  for (; ++t < e.length; ) {
    const o = e[t];
    let l;
    if (typeof o == "string")
      l = o;
    else switch (o) {
      case -5: {
        l = "\r";
        break;
      }
      case -4: {
        l = `
`;
        break;
      }
      case -3: {
        l = `\r
`;
        break;
      }
      case -2: {
        l = n ? " " : "	";
        break;
      }
      case -1: {
        if (!n && i) continue;
        l = " ";
        break;
      }
      default:
        l = String.fromCharCode(o);
    }
    i = o === -2, r.push(l);
  }
  return r.join("");
}
function Eu(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      pi([vu, ...(e || {}).extensions || []])
    ),
    content: i($a),
    defined: [],
    document: i(Va),
    flow: i(su),
    lazy: {},
    string: i(hu),
    text: i(fu)
  };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return Cu(r, o, a);
    }
  }
}
function Au(e) {
  for (; !ki(e); )
    ;
  return e;
}
const fr = /[\0\t\n\r]/g;
function Tu() {
  let e = 1, n = "", t = !0, r;
  return i;
  function i(o, l, a) {
    const s = [];
    let u, h, c, p, f;
    for (o = n + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), c = 0, n = "", t && (o.charCodeAt(0) === 65279 && c++, t = void 0); c < o.length; ) {
      if (fr.lastIndex = c, u = fr.exec(o), p = u && u.index !== void 0 ? u.index : o.length, f = o.charCodeAt(p), !u) {
        n = o.slice(c);
        break;
      }
      if (f === 10 && c === p && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), c < p && (s.push(o.slice(c, p)), e += p - c), f) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (h = Math.ceil(e / 4) * 4, s.push(-2); e++ < h; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      c = p + 1;
    }
    return a && (r && s.push(-5), n && s.push(n), s.push(null)), s;
  }
}
const Lu = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Nu(e) {
  return e.replace(Lu, zu);
}
function zu(e, n, t) {
  if (n)
    return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1), o = i === 120 || i === 88;
    return di(t.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Dn(t) || e;
}
const Ci = {}.hasOwnProperty;
function Du(e, n, t) {
  return n && typeof n == "object" && (t = n, n = void 0), Pu(t)(Au(Eu(t).document().write(Tu()(e, n, !0))));
}
function Pu(e) {
  const n = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(wt),
      autolinkProtocol: O,
      autolinkEmail: O,
      atxHeading: o(bt),
      blockQuote: o(Be),
      characterEscape: O,
      characterReference: O,
      codeFenced: o(Ye),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: o(Ye, l),
      codeText: o(kt, l),
      codeTextData: O,
      data: O,
      codeFlowValue: O,
      definition: o(Ot),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: o(Ht),
      hardBreakEscape: o(xt),
      hardBreakTrailing: o(xt),
      htmlFlow: o(ot, l),
      htmlFlowData: O,
      htmlText: o(ot, l),
      htmlTextData: O,
      image: o(jt),
      label: l,
      link: o(wt),
      listItem: o($t),
      listItemValue: p,
      listOrdered: o(We, c),
      listUnordered: o(We),
      paragraph: o(Ut),
      reference: y,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: o(bt),
      strong: o(Vt),
      thematicBreak: o(qt)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: F,
      autolink: s(),
      autolinkEmail: Re,
      autolinkProtocol: Ne,
      blockQuote: s(),
      characterEscapeValue: x,
      characterReferenceMarkerHexadecimal: re,
      characterReferenceMarkerNumeric: re,
      characterReferenceValue: ie,
      characterReference: Oe,
      codeFenced: s(w),
      codeFencedFence: b,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: m,
      codeFlowValue: x,
      codeIndented: s(k),
      codeText: s(D),
      codeTextData: x,
      data: x,
      definition: s(),
      definitionDestinationString: M,
      definitionLabelString: I,
      definitionTitleString: C,
      emphasis: s(),
      hardBreakEscape: s(L),
      hardBreakTrailing: s(L),
      htmlFlow: s(V),
      htmlFlowData: x,
      htmlText: s(z),
      htmlTextData: x,
      image: s(G),
      label: ne,
      labelText: te,
      lineEnding: T,
      link: s(X),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: xe,
      resourceDestinationString: g,
      resourceTitleString: le,
      resource: ce,
      setextHeading: s(R),
      setextHeadingLineSequence: N,
      setextHeadingText: _,
      strong: s(),
      thematicBreak: s()
    }
  };
  Si(n, (e || {}).mdastExtensions || []);
  const t = {};
  return r;
  function r(v) {
    let E = {
      type: "root",
      children: []
    };
    const H = {
      stack: [E],
      tokenStack: [],
      config: n,
      enter: a,
      exit: u,
      buffer: l,
      resume: h,
      data: t
    }, $ = [];
    let q = -1;
    for (; ++q < v.length; )
      if (v[q][1].type === "listOrdered" || v[q][1].type === "listUnordered")
        if (v[q][0] === "enter")
          $.push(q);
        else {
          const ye = $.pop();
          q = i(v, ye, q);
        }
    for (q = -1; ++q < v.length; ) {
      const ye = n[v[q][0]];
      Ci.call(ye, v[q][1].type) && ye[v[q][1].type].call(Object.assign({
        sliceSerialize: v[q][2].sliceSerialize
      }, H), v[q][1]);
    }
    if (H.tokenStack.length > 0) {
      const ye = H.tokenStack[H.tokenStack.length - 1];
      (ye[1] || pr).call(H, void 0, ye[0]);
    }
    for (E.position = {
      start: je(v.length > 0 ? v[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: je(v.length > 0 ? v[v.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, q = -1; ++q < n.transforms.length; )
      E = n.transforms[q](E) || E;
    return E;
  }
  function i(v, E, H) {
    let $ = E - 1, q = -1, ye = !1, Ee, Ae, ae, He;
    for (; ++$ <= H; ) {
      const we = v[$];
      switch (we[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          we[0] === "enter" ? q++ : q--, He = void 0;
          break;
        }
        case "lineEndingBlank": {
          we[0] === "enter" && (Ee && !He && !q && !ae && (ae = $), He = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          He = void 0;
      }
      if (!q && we[0] === "enter" && we[1].type === "listItemPrefix" || q === -1 && we[0] === "exit" && (we[1].type === "listUnordered" || we[1].type === "listOrdered")) {
        if (Ee) {
          let Ke = $;
          for (Ae = void 0; Ke--; ) {
            const Me = v[Ke];
            if (Me[1].type === "lineEnding" || Me[1].type === "lineEndingBlank") {
              if (Me[0] === "exit") continue;
              Ae && (v[Ae][1].type = "lineEndingBlank", ye = !0), Me[1].type = "lineEnding", Ae = Ke;
            } else if (!(Me[1].type === "linePrefix" || Me[1].type === "blockQuotePrefix" || Me[1].type === "blockQuotePrefixWhitespace" || Me[1].type === "blockQuoteMarker" || Me[1].type === "listItemIndent")) break;
          }
          ae && (!Ae || ae < Ae) && (Ee._spread = !0), Ee.end = Object.assign({}, Ae ? v[Ae][1].start : we[1].end), v.splice(Ae || $, 0, ["exit", Ee, we[2]]), $++, H++;
        }
        if (we[1].type === "listItemPrefix") {
          const Ke = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, we[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Ee = Ke, v.splice($, 0, ["enter", Ke, we[2]]), $++, H++, ae = void 0, He = !0;
        }
      }
    }
    return v[E][1]._spread = ye, H;
  }
  function o(v, E) {
    return H;
    function H($) {
      a.call(this, v($), $), E && E.call(this, $);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(v, E, H) {
    this.stack[this.stack.length - 1].children.push(v), this.stack.push(v), this.tokenStack.push([E, H || void 0]), v.position = {
      start: je(E.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(v) {
    return E;
    function E(H) {
      v && v.call(this, H), u.call(this, H);
    }
  }
  function u(v, E) {
    const H = this.stack.pop(), $ = this.tokenStack.pop();
    if ($)
      $[0].type !== v.type && (E ? E.call(this, v, $[0]) : ($[1] || pr).call(this, v, $[0]));
    else throw new Error("Cannot close `" + v.type + "` (" + ut({
      start: v.start,
      end: v.end
    }) + "): it’s not open");
    H.position.end = je(v.end);
  }
  function h() {
    return zn(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(v) {
    if (this.data.expectingFirstListItemValue) {
      const E = this.stack[this.stack.length - 2];
      E.start = Number.parseInt(this.sliceSerialize(v), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function f() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.lang = v;
  }
  function m() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.meta = v;
  }
  function b() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function w() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = v.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function k() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = v.replace(/(\r?\n|\r)$/g, "");
  }
  function I(v) {
    const E = this.resume(), H = this.stack[this.stack.length - 1];
    H.label = E, H.identifier = Le(this.sliceSerialize(v)).toLowerCase();
  }
  function C() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.title = v;
  }
  function M() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.url = v;
  }
  function F(v) {
    const E = this.stack[this.stack.length - 1];
    if (!E.depth) {
      const H = this.sliceSerialize(v).length;
      E.depth = H;
    }
  }
  function _() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function N(v) {
    const E = this.stack[this.stack.length - 1];
    E.depth = this.sliceSerialize(v).codePointAt(0) === 61 ? 1 : 2;
  }
  function R() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function O(v) {
    const H = this.stack[this.stack.length - 1].children;
    let $ = H[H.length - 1];
    (!$ || $.type !== "text") && ($ = Wt(), $.position = {
      start: je(v.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, H.push($)), this.stack.push($);
  }
  function x(v) {
    const E = this.stack.pop();
    E.value += this.sliceSerialize(v), E.position.end = je(v.end);
  }
  function T(v) {
    const E = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const H = E.children[E.children.length - 1];
      H.position.end = je(v.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && n.canContainEols.includes(E.type) && (O.call(this, v), x.call(this, v));
  }
  function L() {
    this.data.atHardBreak = !0;
  }
  function V() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = v;
  }
  function z() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = v;
  }
  function D() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = v;
  }
  function X() {
    const v = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const E = this.data.referenceType || "shortcut";
      v.type += "Reference", v.referenceType = E, delete v.url, delete v.title;
    } else
      delete v.identifier, delete v.label;
    this.data.referenceType = void 0;
  }
  function G() {
    const v = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const E = this.data.referenceType || "shortcut";
      v.type += "Reference", v.referenceType = E, delete v.url, delete v.title;
    } else
      delete v.identifier, delete v.label;
    this.data.referenceType = void 0;
  }
  function te(v) {
    const E = this.sliceSerialize(v), H = this.stack[this.stack.length - 2];
    H.label = Nu(E), H.identifier = Le(E).toLowerCase();
  }
  function ne() {
    const v = this.stack[this.stack.length - 1], E = this.resume(), H = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, H.type === "link") {
      const $ = v.children;
      H.children = $;
    } else
      H.alt = E;
  }
  function g() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.url = v;
  }
  function le() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.title = v;
  }
  function ce() {
    this.data.inReference = void 0;
  }
  function y() {
    this.data.referenceType = "collapsed";
  }
  function xe(v) {
    const E = this.resume(), H = this.stack[this.stack.length - 1];
    H.label = E, H.identifier = Le(this.sliceSerialize(v)).toLowerCase(), this.data.referenceType = "full";
  }
  function re(v) {
    this.data.characterReferenceType = v.type;
  }
  function ie(v) {
    const E = this.sliceSerialize(v), H = this.data.characterReferenceType;
    let $;
    H ? ($ = di(E, H === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : $ = Dn(E);
    const q = this.stack[this.stack.length - 1];
    q.value += $;
  }
  function Oe(v) {
    const E = this.stack.pop();
    E.position.end = je(v.end);
  }
  function Ne(v) {
    x.call(this, v);
    const E = this.stack[this.stack.length - 1];
    E.url = this.sliceSerialize(v);
  }
  function Re(v) {
    x.call(this, v);
    const E = this.stack[this.stack.length - 1];
    E.url = "mailto:" + this.sliceSerialize(v);
  }
  function Be() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Ye() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function kt() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Ot() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Ht() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function bt() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function xt() {
    return {
      type: "break"
    };
  }
  function ot() {
    return {
      type: "html",
      value: ""
    };
  }
  function jt() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function wt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function We(v) {
    return {
      type: "list",
      ordered: v.type === "listOrdered",
      start: null,
      spread: v._spread,
      children: []
    };
  }
  function $t(v) {
    return {
      type: "listItem",
      spread: v._spread,
      checked: null,
      children: []
    };
  }
  function Ut() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Vt() {
    return {
      type: "strong",
      children: []
    };
  }
  function Wt() {
    return {
      type: "text",
      value: ""
    };
  }
  function qt() {
    return {
      type: "thematicBreak"
    };
  }
}
function je(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Si(e, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? Si(e, r) : Ru(e, r);
  }
}
function Ru(e, n) {
  let t;
  for (t in n)
    if (Ci.call(n, t))
      switch (t) {
        case "canContainEols": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "transforms": {
          const r = n[t];
          r && e[t].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = n[t];
          r && Object.assign(e[t], r);
          break;
        }
      }
}
function pr(e, n) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + ut({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + n.type + "`, " + ut({
    start: n.start,
    end: n.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + ut({
    start: n.start,
    end: n.end
  }) + ") is still open");
}
function Bu(e) {
  const n = this;
  n.parser = t;
  function t(r) {
    return Du(r, {
      ...n.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: n.data("micromarkExtensions") || [],
      mdastExtensions: n.data("fromMarkdownExtensions") || []
    });
  }
}
function Mu(e, n) {
  const t = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(n), !0)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Fu(e, n) {
  const t = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(n, t), [e.applyData(n, t), { type: "text", value: `
` }];
}
function Ou(e, n) {
  const t = n.value ? n.value + `
` : "", r = {}, i = n.lang ? n.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let o = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: t }]
  };
  return n.meta && (o.data = { meta: n.meta }), e.patch(n, o), o = e.applyData(n, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(n, o), o;
}
function Hu(e, n) {
  const t = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function ju(e, n) {
  const t = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function $u(e, n) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(n.identifier).toUpperCase(), i = lt(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let l, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = o + 1, a += 1, e.footnoteCounts.set(r, a);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + t + "fn-" + i,
      id: t + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(l) }]
  };
  e.patch(n, s);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [s]
  };
  return e.patch(n, u), e.applyData(n, u);
}
function Uu(e, n) {
  const t = {
    type: "element",
    tagName: "h" + n.depth,
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function Vu(e, n) {
  if (e.options.allowDangerousHtml) {
    const t = { type: "raw", value: n.value };
    return e.patch(n, t), e.applyData(n, t);
  }
}
function Ii(e, n) {
  const t = n.referenceType;
  let r = "]";
  if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference")
    return [{ type: "text", value: "![" + n.alt + r }];
  const i = e.all(n), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function Wu(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return Ii(e, n);
  const i = { src: lt(r.url || ""), alt: n.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(n, o), e.applyData(n, o);
}
function qu(e, n) {
  const t = { src: lt(n.url) };
  n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: "element", tagName: "img", properties: t, children: [] };
  return e.patch(n, r), e.applyData(n, r);
}
function Zu(e, n) {
  const t = { type: "text", value: n.value.replace(/\r?\n|\r/g, " ") };
  e.patch(n, t);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [t]
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Gu(e, n) {
  const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
  if (!r)
    return Ii(e, n);
  const i = { href: lt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(n)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function Xu(e, n) {
  const t = { href: lt(n.url) };
  n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: t,
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Qu(e, n, t) {
  const r = e.all(n), i = t ? Yu(t) : Ei(n), o = {}, l = [];
  if (typeof n.checked == "boolean") {
    const h = r[0];
    let c;
    h && h.type === "element" && h.tagName === "p" ? c = h : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: n.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const h = r[a];
    (i || a !== 0 || h.type !== "element" || h.tagName !== "p") && l.push({ type: "text", value: `
` }), h.type === "element" && h.tagName === "p" && !i ? l.push(...h.children) : l.push(h);
  }
  const s = r[r.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && l.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: o, children: l };
  return e.patch(n, u), e.applyData(n, u);
}
function Yu(e) {
  let n = !1;
  if (e.type === "list") {
    n = e.spread || !1;
    const t = e.children;
    let r = -1;
    for (; !n && ++r < t.length; )
      n = Ei(t[r]);
  }
  return n;
}
function Ei(e) {
  const n = e.spread;
  return n ?? e.children.length > 1;
}
function Ku(e, n) {
  const t = {}, r = e.all(n);
  let i = -1;
  for (typeof n.start == "number" && n.start !== 1 && (t.start = n.start); ++i < r.length; ) {
    const l = r[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      t.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: n.ordered ? "ol" : "ul",
    properties: t,
    children: e.wrap(r, !0)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function Ju(e, n) {
  const t = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function ec(e, n) {
  const t = { type: "root", children: e.wrap(e.all(n)) };
  return e.patch(n, t), e.applyData(n, t);
}
function tc(e, n) {
  const t = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
function nc(e, n) {
  const t = e.all(n), r = t.shift(), i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(n.children[0], l), i.push(l);
  }
  if (t.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(t, !0)
    }, a = An(n.children[1]), s = oi(n.children[n.children.length - 1]);
    a && s && (l.position = { start: a, end: s }), i.push(l);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(n, o), e.applyData(n, o);
}
function rc(e, n, t) {
  const r = t ? t.children : void 0, o = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td", l = t && t.type === "table" ? t.align : void 0, a = l ? l.length : n.children.length;
  let s = -1;
  const u = [];
  for (; ++s < a; ) {
    const c = n.children[s], p = {}, f = l ? l[s] : void 0;
    f && (p.align = f);
    let m = { type: "element", tagName: o, properties: p, children: [] };
    c && (m.children = e.all(c), e.patch(c, m), m = e.applyData(c, m)), u.push(m);
  }
  const h = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(n, h), e.applyData(n, h);
}
function ic(e, n) {
  const t = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, t), e.applyData(n, t);
}
const dr = 9, mr = 32;
function lc(e) {
  const n = String(e), t = /\r?\n|\r/g;
  let r = t.exec(n), i = 0;
  const o = [];
  for (; r; )
    o.push(
      gr(n.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = t.exec(n);
  return o.push(gr(n.slice(i), i > 0, !1)), o.join("");
}
function gr(e, n, t) {
  let r = 0, i = e.length;
  if (n) {
    let o = e.codePointAt(r);
    for (; o === dr || o === mr; )
      r++, o = e.codePointAt(r);
  }
  if (t) {
    let o = e.codePointAt(i - 1);
    for (; o === dr || o === mr; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function oc(e, n) {
  const t = { type: "text", value: lc(String(n.value)) };
  return e.patch(n, t), e.applyData(n, t);
}
function ac(e, n) {
  const t = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(n, t), e.applyData(n, t);
}
const sc = {
  blockquote: Mu,
  break: Fu,
  code: Ou,
  delete: Hu,
  emphasis: ju,
  footnoteReference: $u,
  heading: Uu,
  html: Vu,
  imageReference: Wu,
  image: qu,
  inlineCode: Zu,
  linkReference: Gu,
  link: Xu,
  listItem: Qu,
  list: Ku,
  paragraph: Ju,
  // @ts-expect-error: root is different, but hard to type.
  root: ec,
  strong: tc,
  table: nc,
  tableCell: ic,
  tableRow: rc,
  text: oc,
  thematicBreak: ac,
  toml: _t,
  yaml: _t,
  definition: _t,
  footnoteDefinition: _t
};
function _t() {
}
const Ai = -1, Bt = 0, ht = 1, Lt = 2, Rn = 3, Bn = 4, Mn = 5, Fn = 6, Ti = 7, Li = 8, yr = typeof self == "object" ? self : globalThis, uc = (e, n) => {
  const t = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, l] = n[i];
    switch (o) {
      case Bt:
      case Ai:
        return t(l, i);
      case ht: {
        const a = t([], i);
        for (const s of l)
          a.push(r(s));
        return a;
      }
      case Lt: {
        const a = t({}, i);
        for (const [s, u] of l)
          a[r(s)] = r(u);
        return a;
      }
      case Rn:
        return t(new Date(l), i);
      case Bn: {
        const { source: a, flags: s } = l;
        return t(new RegExp(a, s), i);
      }
      case Mn: {
        const a = t(/* @__PURE__ */ new Map(), i);
        for (const [s, u] of l)
          a.set(r(s), r(u));
        return a;
      }
      case Fn: {
        const a = t(/* @__PURE__ */ new Set(), i);
        for (const s of l)
          a.add(r(s));
        return a;
      }
      case Ti: {
        const { name: a, message: s } = l;
        return t(new yr[a](s), i);
      }
      case Li:
        return t(BigInt(l), i);
      case "BigInt":
        return t(Object(BigInt(l)), i);
      case "ArrayBuffer":
        return t(new Uint8Array(l).buffer, l);
      case "DataView": {
        const { buffer: a } = new Uint8Array(l);
        return t(new DataView(a), l);
      }
    }
    return t(new yr[o](l), i);
  };
  return r;
}, kr = (e) => uc(/* @__PURE__ */ new Map(), e)(0), Je = "", { toString: cc } = {}, { keys: hc } = Object, st = (e) => {
  const n = typeof e;
  if (n !== "object" || !e)
    return [Bt, n];
  const t = cc.call(e).slice(8, -1);
  switch (t) {
    case "Array":
      return [ht, Je];
    case "Object":
      return [Lt, Je];
    case "Date":
      return [Rn, Je];
    case "RegExp":
      return [Bn, Je];
    case "Map":
      return [Mn, Je];
    case "Set":
      return [Fn, Je];
    case "DataView":
      return [ht, t];
  }
  return t.includes("Array") ? [ht, t] : t.includes("Error") ? [Ti, t] : [Lt, t];
}, vt = ([e, n]) => e === Bt && (n === "function" || n === "symbol"), fc = (e, n, t, r) => {
  const i = (l, a) => {
    const s = r.push(l) - 1;
    return t.set(a, s), s;
  }, o = (l) => {
    if (t.has(l))
      return t.get(l);
    let [a, s] = st(l);
    switch (a) {
      case Bt: {
        let h = l;
        switch (s) {
          case "bigint":
            a = Li, h = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            h = null;
            break;
          case "undefined":
            return i([Ai], l);
        }
        return i([a, h], l);
      }
      case ht: {
        if (s) {
          let p = l;
          return s === "DataView" ? p = new Uint8Array(l.buffer) : s === "ArrayBuffer" && (p = new Uint8Array(l)), i([s, [...p]], l);
        }
        const h = [], c = i([a, h], l);
        for (const p of l)
          h.push(o(p));
        return c;
      }
      case Lt: {
        if (s)
          switch (s) {
            case "BigInt":
              return i([s, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([s, l.valueOf()], l);
          }
        if (n && "toJSON" in l)
          return o(l.toJSON());
        const h = [], c = i([a, h], l);
        for (const p of hc(l))
          (e || !vt(st(l[p]))) && h.push([o(p), o(l[p])]);
        return c;
      }
      case Rn:
        return i([a, l.toISOString()], l);
      case Bn: {
        const { source: h, flags: c } = l;
        return i([a, { source: h, flags: c }], l);
      }
      case Mn: {
        const h = [], c = i([a, h], l);
        for (const [p, f] of l)
          (e || !(vt(st(p)) || vt(st(f)))) && h.push([o(p), o(f)]);
        return c;
      }
      case Fn: {
        const h = [], c = i([a, h], l);
        for (const p of l)
          (e || !vt(st(p))) && h.push(o(p));
        return c;
      }
    }
    const { message: u } = l;
    return i([a, { name: s, message: u }], l);
  };
  return o;
}, br = (e, { json: n, lossy: t } = {}) => {
  const r = [];
  return fc(!(n || t), !!n, /* @__PURE__ */ new Map(), r)(e), r;
}, Nt = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, n) => n && ("json" in n || "lossy" in n) ? kr(br(e, n)) : structuredClone(e)
) : (e, n) => kr(br(e, n));
function pc(e, n) {
  const t = [{ type: "text", value: "↩" }];
  return n > 1 && t.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(n) }]
  }), t;
}
function dc(e, n) {
  return "Back to reference " + (e + 1) + (n > 1 ? "-" + n : "");
}
function mc(e) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", t = e.options.footnoteBackContent || pc, r = e.options.footnoteBackLabel || dc, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const h = e.all(u), c = String(u.identifier).toUpperCase(), p = lt(c.toLowerCase());
    let f = 0;
    const m = [], b = e.footnoteCounts.get(c);
    for (; b !== void 0 && ++f <= b; ) {
      m.length > 0 && m.push({ type: "text", value: " " });
      let I = typeof t == "string" ? t : t(s, f);
      typeof I == "string" && (I = { type: "text", value: I }), m.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + n + "fnref-" + p + (f > 1 ? "-" + f : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, f),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(I) ? I : [I]
      });
    }
    const w = h[h.length - 1];
    if (w && w.type === "element" && w.tagName === "p") {
      const I = w.children[w.children.length - 1];
      I && I.type === "text" ? I.value += " " : w.children.push({ type: "text", value: " " }), w.children.push(...m);
    } else
      h.push(...m);
    const k = {
      type: "element",
      tagName: "li",
      properties: { id: n + "fn-" + p },
      children: e.wrap(h, !0)
    };
    e.patch(u, k), a.push(k);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...Nt(l),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Mt = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return bc;
    if (typeof e == "function")
      return Ft(e);
    if (typeof e == "object")
      return Array.isArray(e) ? gc(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        yc(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return kc(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function gc(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = Mt(e[t]);
  return Ft(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; )
      if (n[o].apply(this, i)) return !0;
    return !1;
  }
}
function yc(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Ft(t);
  function t(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== n[o]) return !1;
    return !0;
  }
}
function kc(e) {
  return Ft(n);
  function n(t) {
    return t && t.type === e;
  }
}
function Ft(e) {
  return n;
  function n(t, r, i) {
    return !!(xc(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function bc() {
  return !0;
}
function xc(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ni = [], wc = !0, kn = !1, _c = "skip";
function zi(e, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
  const o = Mt(i), l = r ? -1 : 1;
  a(e, void 0, [])();
  function a(s, u, h) {
    const c = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof c.type == "string") {
      const f = (
        // `hast`
        typeof c.tagName == "string" ? c.tagName : (
          // `xast`
          typeof c.name == "string" ? c.name : void 0
        )
      );
      Object.defineProperty(p, "name", {
        value: "node (" + (s.type + (f ? "<" + f + ">" : "")) + ")"
      });
    }
    return p;
    function p() {
      let f = Ni, m, b, w;
      if ((!n || o(s, u, h[h.length - 1] || void 0)) && (f = vc(t(s, h)), f[0] === kn))
        return f;
      if ("children" in s && s.children) {
        const k = (
          /** @type {UnistParent} */
          s
        );
        if (k.children && f[0] !== _c)
          for (b = (r ? k.children.length : -1) + l, w = h.concat(k); b > -1 && b < k.children.length; ) {
            const I = k.children[b];
            if (m = a(I, b, w)(), m[0] === kn)
              return m;
            b = typeof m[1] == "number" ? m[1] : b + l;
          }
      }
      return f;
    }
  }
}
function vc(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [wc, e] : e == null ? Ni : [e];
}
function On(e, n, t, r) {
  let i, o, l;
  typeof n == "function" && typeof t != "function" ? (o = void 0, l = n, i = t) : (o = n, l = t, i = r), zi(e, o, a, i);
  function a(s, u) {
    const h = u[u.length - 1], c = h ? h.children.indexOf(s) : void 0;
    return l(s, c, h);
  }
}
const bn = {}.hasOwnProperty, Cc = {};
function Sc(e, n) {
  const t = n || Cc, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = { ...sc, ...t.handlers }, a = {
    all: u,
    applyData: Ec,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: l,
    one: s,
    options: t,
    patch: Ic,
    wrap: Tc
  };
  return On(e, function(h) {
    if (h.type === "definition" || h.type === "footnoteDefinition") {
      const c = h.type === "definition" ? r : i, p = String(h.identifier).toUpperCase();
      c.has(p) || c.set(p, h);
    }
  }), a;
  function s(h, c) {
    const p = h.type, f = a.handlers[p];
    if (bn.call(a.handlers, p) && f)
      return f(a, h, c);
    if (a.options.passThrough && a.options.passThrough.includes(p)) {
      if ("children" in h) {
        const { children: b, ...w } = h, k = Nt(w);
        return k.children = a.all(h), k;
      }
      return Nt(h);
    }
    return (a.options.unknownHandler || Ac)(a, h, c);
  }
  function u(h) {
    const c = [];
    if ("children" in h) {
      const p = h.children;
      let f = -1;
      for (; ++f < p.length; ) {
        const m = a.one(p[f], h);
        if (m) {
          if (f && p[f - 1].type === "break" && (!Array.isArray(m) && m.type === "text" && (m.value = xr(m.value)), !Array.isArray(m) && m.type === "element")) {
            const b = m.children[0];
            b && b.type === "text" && (b.value = xr(b.value));
          }
          Array.isArray(m) ? c.push(...m) : c.push(m);
        }
      }
    }
    return c;
  }
}
function Ic(e, n) {
  e.position && (n.position = da(e));
}
function Ec(e, n) {
  let t = n;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (t.type === "element")
        t.tagName = r;
      else {
        const l = "children" in t ? t.children : [t];
        t = { type: "element", tagName: r, properties: {}, children: l };
      }
    t.type === "element" && o && Object.assign(t.properties, Nt(o)), "children" in t && t.children && i !== null && i !== void 0 && (t.children = i);
  }
  return t;
}
function Ac(e, n) {
  const t = n.data || {}, r = "value" in n && !(bn.call(t, "hProperties") || bn.call(t, "hChildren")) ? { type: "text", value: n.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(n)
  };
  return e.patch(n, r), e.applyData(n, r);
}
function Tc(e, n) {
  const t = [];
  let r = -1;
  for (n && t.push({ type: "text", value: `
` }); ++r < e.length; )
    r && t.push({ type: "text", value: `
` }), t.push(e[r]);
  return n && e.length > 0 && t.push({ type: "text", value: `
` }), t;
}
function xr(e) {
  let n = 0, t = e.charCodeAt(n);
  for (; t === 9 || t === 32; )
    n++, t = e.charCodeAt(n);
  return e.slice(n);
}
function wr(e, n) {
  const t = Sc(e, n), r = t.one(e, void 0), i = mc(t), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Lc(e, n) {
  return e && "run" in e ? async function(t, r) {
    const i = (
      /** @type {HastRoot} */
      wr(t, { file: r, ...n })
    );
    await e.run(i, r);
  } : function(t, r) {
    return (
      /** @type {HastRoot} */
      wr(t, { file: r, ...e || n })
    );
  };
}
function _r(e) {
  if (e)
    throw e;
}
var Et = Object.prototype.hasOwnProperty, Di = Object.prototype.toString, vr = Object.defineProperty, Cr = Object.getOwnPropertyDescriptor, Sr = function(n) {
  return typeof Array.isArray == "function" ? Array.isArray(n) : Di.call(n) === "[object Array]";
}, Ir = function(n) {
  if (!n || Di.call(n) !== "[object Object]")
    return !1;
  var t = Et.call(n, "constructor"), r = n.constructor && n.constructor.prototype && Et.call(n.constructor.prototype, "isPrototypeOf");
  if (n.constructor && !t && !r)
    return !1;
  var i;
  for (i in n)
    ;
  return typeof i > "u" || Et.call(n, i);
}, Er = function(n, t) {
  vr && t.name === "__proto__" ? vr(n, t.name, {
    enumerable: !0,
    configurable: !0,
    value: t.newValue,
    writable: !0
  }) : n[t.name] = t.newValue;
}, Ar = function(n, t) {
  if (t === "__proto__")
    if (Et.call(n, t)) {
      if (Cr)
        return Cr(n, t).value;
    } else return;
  return n[t];
}, Nc = function e() {
  var n, t, r, i, o, l, a = arguments[0], s = 1, u = arguments.length, h = !1;
  for (typeof a == "boolean" && (h = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s)
    if (n = arguments[s], n != null)
      for (t in n)
        r = Ar(a, t), i = Ar(n, t), a !== i && (h && i && (Ir(i) || (o = Sr(i))) ? (o ? (o = !1, l = r && Sr(r) ? r : []) : l = r && Ir(r) ? r : {}, Er(a, { name: t, newValue: e(h, l, i) })) : typeof i < "u" && Er(a, { name: t, newValue: i }));
  return a;
};
const Yt = /* @__PURE__ */ li(Nc);
function xn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function zc() {
  const e = [], n = { run: t, use: r };
  return n;
  function t(...i) {
    let o = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    a(null, ...i);
    function a(s, ...u) {
      const h = e[++o];
      let c = -1;
      if (s) {
        l(s);
        return;
      }
      for (; ++c < i.length; )
        (u[c] === null || u[c] === void 0) && (u[c] = i[c]);
      i = u, h ? Dc(h, a)(...u) : l(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), n;
  }
}
function Dc(e, n) {
  let t;
  return r;
  function r(...l) {
    const a = e.length > l.length;
    let s;
    a && l.push(i);
    try {
      s = e.apply(this, l);
    } catch (u) {
      const h = (
        /** @type {Error} */
        u
      );
      if (a && t)
        throw h;
      return i(h);
    }
    a || (s && s.then && typeof s.then == "function" ? s.then(o, i) : s instanceof Error ? i(s) : o(s));
  }
  function i(l, ...a) {
    t || (t = !0, n(l, ...a));
  }
  function o(l) {
    i(null, l);
  }
}
const De = { basename: Pc, dirname: Rc, extname: Bc, join: Mc, sep: "/" };
function Pc(e, n) {
  if (n !== void 0 && typeof n != "string")
    throw new TypeError('"ext" argument must be a string');
  yt(e);
  let t = 0, r = -1, i = e.length, o;
  if (n === void 0 || n.length === 0 || n.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          t = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(t, r);
  }
  if (n === e)
    return "";
  let l = -1, a = n.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        t = i + 1;
        break;
      }
    } else
      l < 0 && (o = !0, l = i + 1), a > -1 && (e.codePointAt(i) === n.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = l));
  return t === r ? r = l : r < 0 && (r = e.length), e.slice(t, r);
}
function Rc(e) {
  if (yt(e), e.length === 0)
    return ".";
  let n = -1, t = e.length, r;
  for (; --t; )
    if (e.codePointAt(t) === 47) {
      if (r) {
        n = t;
        break;
      }
    } else r || (r = !0);
  return n < 0 ? e.codePointAt(0) === 47 ? "/" : "." : n === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, n);
}
function Bc(e) {
  yt(e);
  let n = e.length, t = -1, r = 0, i = -1, o = 0, l;
  for (; n--; ) {
    const a = e.codePointAt(n);
    if (a === 47) {
      if (l) {
        r = n + 1;
        break;
      }
      continue;
    }
    t < 0 && (l = !0, t = n + 1), a === 46 ? i < 0 ? i = n : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || t < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === t - 1 && i === r + 1 ? "" : e.slice(i, t);
}
function Mc(...e) {
  let n = -1, t;
  for (; ++n < e.length; )
    yt(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
  return t === void 0 ? "." : Fc(t);
}
function Fc(e) {
  yt(e);
  const n = e.codePointAt(0) === 47;
  let t = Oc(e, !n);
  return t.length === 0 && !n && (t = "."), t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"), n ? "/" + t : t;
}
function Oc(e, n) {
  let t = "", r = 0, i = -1, o = 0, l = -1, a, s;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      a = e.codePointAt(l);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === l - 1 || o === 1)) if (i !== l - 1 && o === 2) {
        if (t.length < 2 || r !== 2 || t.codePointAt(t.length - 1) !== 46 || t.codePointAt(t.length - 2) !== 46) {
          if (t.length > 2) {
            if (s = t.lastIndexOf("/"), s !== t.length - 1) {
              s < 0 ? (t = "", r = 0) : (t = t.slice(0, s), r = t.length - 1 - t.lastIndexOf("/")), i = l, o = 0;
              continue;
            }
          } else if (t.length > 0) {
            t = "", r = 0, i = l, o = 0;
            continue;
          }
        }
        n && (t = t.length > 0 ? t + "/.." : "..", r = 2);
      } else
        t.length > 0 ? t += "/" + e.slice(i + 1, l) : t = e.slice(i + 1, l), r = l - i - 1;
      i = l, o = 0;
    } else a === 46 && o > -1 ? o++ : o = -1;
  }
  return t;
}
function yt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Hc = { cwd: jc };
function jc() {
  return "/";
}
function wn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function $c(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!wn(e)) {
    const n = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw n.code = "ERR_INVALID_ARG_TYPE", n;
  }
  if (e.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file");
    throw n.code = "ERR_INVALID_URL_SCHEME", n;
  }
  return Uc(e);
}
function Uc(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const n = e.pathname;
  let t = -1;
  for (; ++t < n.length; )
    if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
      const r = n.codePointAt(t + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(n);
}
const Kt = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class Pi {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(n) {
    let t;
    n ? wn(n) ? t = { path: n } : typeof n == "string" || Vc(n) ? t = { value: n } : t = n : t = {}, this.cwd = "cwd" in t ? "" : Hc.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Kt.length; ) {
      const o = Kt[r];
      o in t && t[o] !== void 0 && t[o] !== null && (this[o] = o === "history" ? [...t[o]] : t[o]);
    }
    let i;
    for (i in t)
      Kt.includes(i) || (this[i] = t[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? De.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(n) {
    en(n, "basename"), Jt(n, "basename"), this.path = De.join(this.dirname || "", n);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? De.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(n) {
    Tr(this.basename, "dirname"), this.path = De.join(n || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? De.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(n) {
    if (Jt(n, "extname"), Tr(this.dirname, "extname"), n) {
      if (n.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (n.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = De.join(this.dirname, this.stem + (n || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(n) {
    wn(n) && (n = $c(n)), en(n, "path"), this.path !== n && this.history.push(n);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? De.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(n) {
    en(n, "stem"), Jt(n, "stem"), this.path = De.join(this.dirname || "", n + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(n, t, r) {
    const i = this.message(n, t, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(n, t, r) {
    const i = this.message(n, t, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(n, t, r) {
    const i = new pe(
      // @ts-expect-error: the overloads are fine.
      n,
      t,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(n) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(n || void 0).decode(this.value);
  }
}
function Jt(e, n) {
  if (e && e.includes(De.sep))
    throw new Error(
      "`" + n + "` cannot be a path: did not expect `" + De.sep + "`"
    );
}
function en(e, n) {
  if (!e)
    throw new Error("`" + n + "` cannot be empty");
}
function Tr(e, n) {
  if (!e)
    throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function Vc(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Wc = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }
), qc = {}.hasOwnProperty;
class Hn extends Wc {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = zc();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const n = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Hn()
    );
    let t = -1;
    for (; ++t < this.attachers.length; ) {
      const r = this.attachers[t];
      n.use(...r);
    }
    return n.data(Yt(!0, {}, this.namespace)), n;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(n, t) {
    return typeof n == "string" ? arguments.length === 2 ? (rn("data", this.frozen), this.namespace[n] = t, this) : qc.call(this.namespace, n) && this.namespace[n] || void 0 : n ? (rn("data", this.frozen), this.namespace = n, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const n = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [t, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = t.call(n, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(n) {
    this.freeze();
    const t = Ct(n), r = this.parser || this.Parser;
    return tn("parse", r), r(String(t), t);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(n, t) {
    const r = this;
    return this.freeze(), tn("process", this.parser || this.Parser), nn("process", this.compiler || this.Compiler), t ? i(void 0, t) : new Promise(i);
    function i(o, l) {
      const a = Ct(n), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(s, a, function(h, c, p) {
        if (h || !c || !p)
          return u(h);
        const f = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), m = r.stringify(f, p);
        Xc(m) ? p.value = m : p.result = m, u(
          h,
          /** @type {VFileWithOutput<CompileResult>} */
          p
        );
      });
      function u(h, c) {
        h || !c ? l(h) : o ? o(c) : t(void 0, c);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(n) {
    let t = !1, r;
    return this.freeze(), tn("processSync", this.parser || this.Parser), nn("processSync", this.compiler || this.Compiler), this.process(n, i), Nr("processSync", "process", t), r;
    function i(o, l) {
      t = !0, _r(o), r = l;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(n, t, r) {
    Lr(n), this.freeze();
    const i = this.transformers;
    return !r && typeof t == "function" && (r = t, t = void 0), r ? o(void 0, r) : new Promise(o);
    function o(l, a) {
      const s = Ct(t);
      i.run(n, s, u);
      function u(h, c, p) {
        const f = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || n
        );
        h ? a(h) : l ? l(f) : r(void 0, f, p);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(n, t) {
    let r = !1, i;
    return this.run(n, t, o), Nr("runSync", "run", r), i;
    function o(l, a) {
      _r(l), i = a, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(n, t) {
    this.freeze();
    const r = Ct(t), i = this.compiler || this.Compiler;
    return nn("stringify", i), Lr(n), i(n, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(n, ...t) {
    const r = this.attachers, i = this.namespace;
    if (rn("use", this.frozen), n != null) if (typeof n == "function")
      s(n, t);
    else if (typeof n == "object")
      Array.isArray(n) ? a(n) : l(n);
    else
      throw new TypeError("Expected usable value, not `" + n + "`");
    return this;
    function o(u) {
      if (typeof u == "function")
        s(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [h, ...c] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          s(h, c);
        } else
          l(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function l(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(u.plugins), u.settings && (i.settings = Yt(!0, i.settings, u.settings));
    }
    function a(u) {
      let h = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++h < u.length; ) {
          const c = u[h];
          o(c);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function s(u, h) {
      let c = -1, p = -1;
      for (; ++c < r.length; )
        if (r[c][0] === u) {
          p = c;
          break;
        }
      if (p === -1)
        r.push([u, ...h]);
      else if (h.length > 0) {
        let [f, ...m] = h;
        const b = r[p][1];
        xn(b) && xn(f) && (f = Yt(!0, b, f)), r[p] = [u, f, ...m];
      }
    }
  }
}
const Zc = new Hn().freeze();
function tn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function nn(e, n) {
  if (typeof n != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function rn(e, n) {
  if (n)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Lr(e) {
  if (!xn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Nr(e, n, t) {
  if (!t)
    throw new Error(
      "`" + e + "` finished async. Use `" + n + "` instead"
    );
}
function Ct(e) {
  return Gc(e) ? e : new Pi(e);
}
function Gc(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Xc(e) {
  return typeof e == "string" || Qc(e);
}
function Qc(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Yc = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", zr = [], Dr = { allowDangerousHtml: !0 }, Kc = /^(https?|ircs?|mailto|xmpp)$/i, Jc = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function eh(e) {
  const n = th(e), t = nh(e);
  return rh(n.runSync(n.parse(t), t), e);
}
function th(e) {
  const n = e.rehypePlugins || zr, t = e.remarkPlugins || zr, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Dr } : Dr;
  return Zc().use(Bu).use(t).use(Lc, r).use(n);
}
function nh(e) {
  const n = e.children || "", t = new Pi();
  return typeof n == "string" && (t.value = n), t;
}
function rh(e, n) {
  const t = n.allowedElements, r = n.allowElement, i = n.components, o = n.disallowedElements, l = n.skipHtml, a = n.unwrapDisallowed, s = n.urlTransform || ih;
  for (const h of Jc)
    Object.hasOwn(n, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + Yc + h.id, void 0);
  return On(e, u), ba(e, {
    Fragment: cn,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: d,
    jsxs: A,
    passKeys: !0,
    passNode: !0
  });
  function u(h, c, p) {
    if (h.type === "raw" && p && typeof c == "number")
      return l ? p.children.splice(c, 1) : p.children[c] = { type: "text", value: h.value }, c;
    if (h.type === "element") {
      let f;
      for (f in Gt)
        if (Object.hasOwn(Gt, f) && Object.hasOwn(h.properties, f)) {
          const m = h.properties[f], b = Gt[f];
          (b === null || b.includes(h.tagName)) && (h.properties[f] = s(String(m || ""), f, h));
        }
    }
    if (h.type === "element") {
      let f = t ? !t.includes(h.tagName) : o ? o.includes(h.tagName) : !1;
      if (!f && r && typeof c == "number" && (f = !r(h, c, p)), f && p && typeof c == "number")
        return a && h.children ? p.children.splice(c, 1, ...h.children) : p.children.splice(c, 1), c;
    }
  }
}
function ih(e) {
  const n = e.indexOf(":"), t = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    n === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && n > i || t !== -1 && n > t || r !== -1 && n > r || // It is a protocol, it should be allowed.
    Kc.test(e.slice(0, n)) ? e : ""
  );
}
function Pr(e, n) {
  const t = String(e);
  if (typeof n != "string")
    throw new TypeError("Expected character");
  let r = 0, i = t.indexOf(n);
  for (; i !== -1; )
    r++, i = t.indexOf(n, i + n.length);
  return r;
}
function lh(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function oh(e, n, t) {
  const i = Mt((t || {}).ignore || []), o = ah(n);
  let l = -1;
  for (; ++l < o.length; )
    zi(e, "text", a);
  function a(u, h) {
    let c = -1, p;
    for (; ++c < h.length; ) {
      const f = h[c], m = p ? p.children : void 0;
      if (i(
        f,
        m ? m.indexOf(f) : void 0,
        p
      ))
        return;
      p = f;
    }
    if (p)
      return s(u, h);
  }
  function s(u, h) {
    const c = h[h.length - 1], p = o[l][0], f = o[l][1];
    let m = 0;
    const w = c.children.indexOf(u);
    let k = !1, I = [];
    p.lastIndex = 0;
    let C = p.exec(u.value);
    for (; C; ) {
      const M = C.index, F = {
        index: C.index,
        input: C.input,
        stack: [...h, u]
      };
      let _ = f(...C, F);
      if (typeof _ == "string" && (_ = _.length > 0 ? { type: "text", value: _ } : void 0), _ === !1 ? p.lastIndex = M + 1 : (m !== M && I.push({
        type: "text",
        value: u.value.slice(m, M)
      }), Array.isArray(_) ? I.push(..._) : _ && I.push(_), m = M + C[0].length, k = !0), !p.global)
        break;
      C = p.exec(u.value);
    }
    return k ? (m < u.value.length && I.push({ type: "text", value: u.value.slice(m) }), c.children.splice(w, 1, ...I)) : I = [u], w + I.length;
  }
}
function ah(e) {
  const n = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const t = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < t.length; ) {
    const i = t[r];
    n.push([sh(i[0]), uh(i[1])]);
  }
  return n;
}
function sh(e) {
  return typeof e == "string" ? new RegExp(lh(e), "g") : e;
}
function uh(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const ln = "phrasing", on = ["autolink", "link", "image", "label"];
function ch() {
  return {
    transforms: [yh],
    enter: {
      literalAutolink: fh,
      literalAutolinkEmail: an,
      literalAutolinkHttp: an,
      literalAutolinkWww: an
    },
    exit: {
      literalAutolink: gh,
      literalAutolinkEmail: mh,
      literalAutolinkHttp: ph,
      literalAutolinkWww: dh
    }
  };
}
function hh() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: ln,
        notInConstruct: on
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: ln,
        notInConstruct: on
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: ln,
        notInConstruct: on
      }
    ]
  };
}
function fh(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function an(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function ph(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function dh(e) {
  this.config.exit.data.call(this, e);
  const n = this.stack[this.stack.length - 1];
  n.type, n.url = "http://" + this.sliceSerialize(e);
}
function mh(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function gh(e) {
  this.exit(e);
}
function yh(e) {
  oh(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, kh],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), bh]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function kh(e, n, t, r, i) {
  let o = "";
  if (!Ri(i) || (/^w/i.test(n) && (t = n + t, n = "", o = "http://"), !xh(t)))
    return !1;
  const l = wh(t + r);
  if (!l[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: o + n + l[0],
    children: [{ type: "text", value: n + l[0] }]
  };
  return l[1] ? [a, { type: "text", value: l[1] }] : a;
}
function bh(e, n, t, r) {
  return (
    // Not an expected previous character.
    !Ri(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(t) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + n + "@" + t,
      children: [{ type: "text", value: n + "@" + t }]
    }
  );
}
function xh(e) {
  const n = e.split(".");
  return !(n.length < 2 || n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1])) || n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])));
}
function wh(e) {
  const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!n)
    return [e, void 0];
  e = e.slice(0, n.index);
  let t = n[0], r = t.indexOf(")");
  const i = Pr(e, "(");
  let o = Pr(e, ")");
  for (; r !== -1 && i > o; )
    e += t.slice(0, r + 1), t = t.slice(r + 1), r = t.indexOf(")"), o++;
  return [e, t];
}
function Ri(e, n) {
  const t = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ge(t) || Pt(t)) && // If it’s an email, the previous character should not be a slash.
  (!n || t !== 47);
}
Bi.peek = Lh;
function _h() {
  this.buffer();
}
function vh(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function Ch() {
  this.buffer();
}
function Sh(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function Ih(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.identifier = Le(
    this.sliceSerialize(e)
  ).toLowerCase(), t.label = n;
}
function Eh(e) {
  this.exit(e);
}
function Ah(e) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.identifier = Le(
    this.sliceSerialize(e)
  ).toLowerCase(), t.label = n;
}
function Th(e) {
  this.exit(e);
}
function Lh() {
  return "[";
}
function Bi(e, n, t, r) {
  const i = t.createTracker(r);
  let o = i.move("[^");
  const l = t.enter("footnoteReference"), a = t.enter("reference");
  return o += i.move(
    t.safe(t.associationId(e), { after: "]", before: o })
  ), a(), l(), o += i.move("]"), o;
}
function Nh() {
  return {
    enter: {
      gfmFootnoteCallString: _h,
      gfmFootnoteCall: vh,
      gfmFootnoteDefinitionLabelString: Ch,
      gfmFootnoteDefinition: Sh
    },
    exit: {
      gfmFootnoteCallString: Ih,
      gfmFootnoteCall: Eh,
      gfmFootnoteDefinitionLabelString: Ah,
      gfmFootnoteDefinition: Th
    }
  };
}
function zh(e) {
  let n = !1;
  return e && e.firstLineBlank && (n = !0), {
    handlers: { footnoteDefinition: t, footnoteReference: Bi },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function t(r, i, o, l) {
    const a = o.createTracker(l);
    let s = a.move("[^");
    const u = o.enter("footnoteDefinition"), h = o.enter("label");
    return s += a.move(
      o.safe(o.associationId(r), { before: s, after: "]" })
    ), h(), s += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), s += a.move(
      (n ? `
` : " ") + o.indentLines(
        o.containerFlow(r, a.current()),
        n ? Mi : Dh
      )
    )), u(), s;
  }
}
function Dh(e, n, t) {
  return n === 0 ? e : Mi(e, n, t);
}
function Mi(e, n, t) {
  return (t ? "" : "    ") + e;
}
const Ph = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Fi.peek = Oh;
function Rh() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Mh },
    exit: { strikethrough: Fh }
  };
}
function Bh() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Ph
      }
    ],
    handlers: { delete: Fi }
  };
}
function Mh(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Fh(e) {
  this.exit(e);
}
function Fi(e, n, t, r) {
  const i = t.createTracker(r), o = t.enter("strikethrough");
  let l = i.move("~~");
  return l += t.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), o(), l;
}
function Oh() {
  return "~";
}
function Hh(e) {
  return e.length;
}
function jh(e, n) {
  const t = n || {}, r = (t.align || []).concat(), i = t.stringLength || Hh, o = [], l = [], a = [], s = [];
  let u = 0, h = -1;
  for (; ++h < e.length; ) {
    const b = [], w = [];
    let k = -1;
    for (e[h].length > u && (u = e[h].length); ++k < e[h].length; ) {
      const I = $h(e[h][k]);
      if (t.alignDelimiters !== !1) {
        const C = i(I);
        w[k] = C, (s[k] === void 0 || C > s[k]) && (s[k] = C);
      }
      b.push(I);
    }
    l[h] = b, a[h] = w;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < u; )
      o[c] = Rr(r[c]);
  else {
    const b = Rr(r);
    for (; ++c < u; )
      o[c] = b;
  }
  c = -1;
  const p = [], f = [];
  for (; ++c < u; ) {
    const b = o[c];
    let w = "", k = "";
    b === 99 ? (w = ":", k = ":") : b === 108 ? w = ":" : b === 114 && (k = ":");
    let I = t.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[c] - w.length - k.length
    );
    const C = w + "-".repeat(I) + k;
    t.alignDelimiters !== !1 && (I = w.length + I + k.length, I > s[c] && (s[c] = I), f[c] = I), p[c] = C;
  }
  l.splice(1, 0, p), a.splice(1, 0, f), h = -1;
  const m = [];
  for (; ++h < l.length; ) {
    const b = l[h], w = a[h];
    c = -1;
    const k = [];
    for (; ++c < u; ) {
      const I = b[c] || "";
      let C = "", M = "";
      if (t.alignDelimiters !== !1) {
        const F = s[c] - (w[c] || 0), _ = o[c];
        _ === 114 ? C = " ".repeat(F) : _ === 99 ? F % 2 ? (C = " ".repeat(F / 2 + 0.5), M = " ".repeat(F / 2 - 0.5)) : (C = " ".repeat(F / 2), M = C) : M = " ".repeat(F);
      }
      t.delimiterStart !== !1 && !c && k.push("|"), t.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(t.alignDelimiters === !1 && I === "") && (t.delimiterStart !== !1 || c) && k.push(" "), t.alignDelimiters !== !1 && k.push(C), k.push(I), t.alignDelimiters !== !1 && k.push(M), t.padding !== !1 && k.push(" "), (t.delimiterEnd !== !1 || c !== u - 1) && k.push("|");
    }
    m.push(
      t.delimiterEnd === !1 ? k.join("").replace(/ +$/, "") : k.join("")
    );
  }
  return m.join(`
`);
}
function $h(e) {
  return e == null ? "" : String(e);
}
function Rr(e) {
  const n = typeof e == "string" ? e.codePointAt(0) : 0;
  return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
}
function Uh(e, n, t, r) {
  const i = t.enter("blockquote"), o = t.createTracker(r);
  o.move("> "), o.shift(2);
  const l = t.indentLines(
    t.containerFlow(e, o.current()),
    Vh
  );
  return i(), l;
}
function Vh(e, n, t) {
  return ">" + (t ? "" : " ") + e;
}
function Wh(e, n) {
  return Br(e, n.inConstruct, !0) && !Br(e, n.notInConstruct, !1);
}
function Br(e, n, t) {
  if (typeof n == "string" && (n = [n]), !n || n.length === 0)
    return t;
  let r = -1;
  for (; ++r < n.length; )
    if (e.includes(n[r]))
      return !0;
  return !1;
}
function Mr(e, n, t, r) {
  let i = -1;
  for (; ++i < t.unsafe.length; )
    if (t.unsafe[i].character === `
` && Wh(t.stack, t.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function qh(e, n) {
  const t = String(e);
  let r = t.indexOf(n), i = r, o = 0, l = 0;
  if (typeof n != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : o = 1, i = r + n.length, r = t.indexOf(n, i);
  return l;
}
function Zh(e, n) {
  return !!(n.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Gh(e) {
  const n = e.options.fence || "`";
  if (n !== "`" && n !== "~")
    throw new Error(
      "Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return n;
}
function Xh(e, n, t, r) {
  const i = Gh(t), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (Zh(e, t)) {
    const c = t.enter("codeIndented"), p = t.indentLines(o, Qh);
    return c(), p;
  }
  const a = t.createTracker(r), s = i.repeat(Math.max(qh(o, i) + 1, 3)), u = t.enter("codeFenced");
  let h = a.move(s);
  if (e.lang) {
    const c = t.enter(`codeFencedLang${l}`);
    h += a.move(
      t.safe(e.lang, {
        before: h,
        after: " ",
        encode: ["`"],
        ...a.current()
      })
    ), c();
  }
  if (e.lang && e.meta) {
    const c = t.enter(`codeFencedMeta${l}`);
    h += a.move(" "), h += a.move(
      t.safe(e.meta, {
        before: h,
        after: `
`,
        encode: ["`"],
        ...a.current()
      })
    ), c();
  }
  return h += a.move(`
`), o && (h += a.move(o + `
`)), h += a.move(s), u(), h;
}
function Qh(e, n, t) {
  return (t ? "" : "    ") + e;
}
function jn(e) {
  const n = e.options.quote || '"';
  if (n !== '"' && n !== "'")
    throw new Error(
      "Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`"
    );
  return n;
}
function Yh(e, n, t, r) {
  const i = jn(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("definition");
  let a = t.enter("label");
  const s = t.createTracker(r);
  let u = s.move("[");
  return u += s.move(
    t.safe(t.associationId(e), {
      before: u,
      after: "]",
      ...s.current()
    })
  ), u += s.move("]: "), a(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = t.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    t.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (a = t.enter("destinationRaw"), u += s.move(
    t.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...s.current()
    })
  )), a(), e.title && (a = t.enter(`title${o}`), u += s.move(" " + i), u += s.move(
    t.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), a()), l(), u;
}
function Kh(e) {
  const n = e.options.emphasis || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return n;
}
function dt(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function zt(e, n, t) {
  const r = nt(e), i = nt(n);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    t === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
Oi.peek = Jh;
function Oi(e, n, t, r) {
  const i = Kh(t), o = t.enter("emphasis"), l = t.createTracker(r), a = l.move(i);
  let s = l.move(
    t.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    })
  );
  const u = s.charCodeAt(0), h = zt(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  h.inside && (s = dt(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), p = zt(r.after.charCodeAt(0), c, i);
  p.inside && (s = s.slice(0, -1) + dt(c));
  const f = l.move(i);
  return o(), t.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: h.outside
  }, a + s + f;
}
function Jh(e, n, t) {
  return t.options.emphasis || "*";
}
function ef(e, n) {
  let t = !1;
  return On(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return t = !0, kn;
  }), !!((!e.depth || e.depth < 3) && zn(e) && (n.options.setext || t));
}
function tf(e, n, t, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = t.createTracker(r);
  if (ef(e, t)) {
    const h = t.enter("headingSetext"), c = t.enter("phrasing"), p = t.containerPhrasing(e, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return c(), h(), p + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      p.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(p.lastIndexOf("\r"), p.lastIndexOf(`
`)) + 1)
    );
  }
  const l = "#".repeat(i), a = t.enter("headingAtx"), s = t.enter("phrasing");
  o.move(l + " ");
  let u = t.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(u) && (u = dt(u.charCodeAt(0)) + u.slice(1)), u = u ? l + " " + u : l, t.options.closeAtx && (u += " " + l), s(), a(), u;
}
Hi.peek = nf;
function Hi(e) {
  return e.value || "";
}
function nf() {
  return "<";
}
ji.peek = rf;
function ji(e, n, t, r) {
  const i = jn(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("image");
  let a = t.enter("label");
  const s = t.createTracker(r);
  let u = s.move("![");
  return u += s.move(
    t.safe(e.alt, { before: u, after: "]", ...s.current() })
  ), u += s.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = t.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    t.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (a = t.enter("destinationRaw"), u += s.move(
    t.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), a(), e.title && (a = t.enter(`title${o}`), u += s.move(" " + i), u += s.move(
    t.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), a()), u += s.move(")"), l(), u;
}
function rf() {
  return "!";
}
$i.peek = lf;
function $i(e, n, t, r) {
  const i = e.referenceType, o = t.enter("imageReference");
  let l = t.enter("label");
  const a = t.createTracker(r);
  let s = a.move("![");
  const u = t.safe(e.alt, {
    before: s,
    after: "]",
    ...a.current()
  });
  s += a.move(u + "]["), l();
  const h = t.stack;
  t.stack = [], l = t.enter("reference");
  const c = t.safe(t.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return l(), t.stack = h, o(), i === "full" || !u || u !== c ? s += a.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function lf() {
  return "!";
}
Ui.peek = of;
function Ui(e, n, t) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < t.unsafe.length; ) {
    const l = t.unsafe[o], a = t.compilePattern(l);
    let s;
    if (l.atBreak)
      for (; s = a.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return i + r + i;
}
function of() {
  return "`";
}
function Vi(e, n) {
  const t = zn(e);
  return !!(!n.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (t === e.url || "mailto:" + t === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Wi.peek = af;
function Wi(e, n, t, r) {
  const i = jn(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.createTracker(r);
  let a, s;
  if (Vi(e, t)) {
    const h = t.stack;
    t.stack = [], a = t.enter("autolink");
    let c = l.move("<");
    return c += l.move(
      t.containerPhrasing(e, {
        before: c,
        after: ">",
        ...l.current()
      })
    ), c += l.move(">"), a(), t.stack = h, c;
  }
  a = t.enter("link"), s = t.enter("label");
  let u = l.move("[");
  return u += l.move(
    t.containerPhrasing(e, {
      before: u,
      after: "](",
      ...l.current()
    })
  ), u += l.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = t.enter("destinationLiteral"), u += l.move("<"), u += l.move(
    t.safe(e.url, { before: u, after: ">", ...l.current() })
  ), u += l.move(">")) : (s = t.enter("destinationRaw"), u += l.move(
    t.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), s(), e.title && (s = t.enter(`title${o}`), u += l.move(" " + i), u += l.move(
    t.safe(e.title, {
      before: u,
      after: i,
      ...l.current()
    })
  ), u += l.move(i), s()), u += l.move(")"), a(), u;
}
function af(e, n, t) {
  return Vi(e, t) ? "<" : "[";
}
qi.peek = sf;
function qi(e, n, t, r) {
  const i = e.referenceType, o = t.enter("linkReference");
  let l = t.enter("label");
  const a = t.createTracker(r);
  let s = a.move("[");
  const u = t.containerPhrasing(e, {
    before: s,
    after: "]",
    ...a.current()
  });
  s += a.move(u + "]["), l();
  const h = t.stack;
  t.stack = [], l = t.enter("reference");
  const c = t.safe(t.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return l(), t.stack = h, o(), i === "full" || !u || u !== c ? s += a.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function sf() {
  return "[";
}
function $n(e) {
  const n = e.options.bullet || "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return n;
}
function uf(e) {
  const n = $n(e), t = e.options.bulletOther;
  if (!t)
    return n === "*" ? "-" : "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (t === n)
    throw new Error(
      "Expected `bullet` (`" + n + "`) and `bulletOther` (`" + t + "`) to be different"
    );
  return t;
}
function cf(e) {
  const n = e.options.bulletOrdered || ".";
  if (n !== "." && n !== ")")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return n;
}
function Zi(e) {
  const n = e.options.rule || "*";
  if (n !== "*" && n !== "-" && n !== "_")
    throw new Error(
      "Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return n;
}
function hf(e, n, t, r) {
  const i = t.enter("list"), o = t.bulletCurrent;
  let l = e.ordered ? cf(t) : $n(t);
  const a = e.ordered ? l === "." ? ")" : "." : uf(t);
  let s = n && t.bulletLastUsed ? l === t.bulletLastUsed : !1;
  if (!e.ordered) {
    const h = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      h && (!h.children || !h.children[0]) && // Directly in two other list items:
      t.stack[t.stack.length - 1] === "list" && t.stack[t.stack.length - 2] === "listItem" && t.stack[t.stack.length - 3] === "list" && t.stack[t.stack.length - 4] === "listItem" && // That are each the first child.
      t.indexStack[t.indexStack.length - 1] === 0 && t.indexStack[t.indexStack.length - 2] === 0 && t.indexStack[t.indexStack.length - 3] === 0 && (s = !0), Zi(t) === l && h
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const p = e.children[c];
        if (p && p.type === "listItem" && p.children && p.children[0] && p.children[0].type === "thematicBreak") {
          s = !0;
          break;
        }
      }
    }
  }
  s && (l = a), t.bulletCurrent = l;
  const u = t.containerFlow(e, r);
  return t.bulletLastUsed = l, t.bulletCurrent = o, i(), u;
}
function ff(e) {
  const n = e.options.listItemIndent || "one";
  if (n !== "tab" && n !== "one" && n !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return n;
}
function pf(e, n, t, r) {
  const i = ff(t);
  let o = t.bulletCurrent || $n(t);
  n && n.type === "list" && n.ordered && (o = (typeof n.start == "number" && n.start > -1 ? n.start : 1) + (t.options.incrementListMarker === !1 ? 0 : n.children.indexOf(e)) + o);
  let l = o.length + 1;
  (i === "tab" || i === "mixed" && (n && n.type === "list" && n.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const a = t.createTracker(r);
  a.move(o + " ".repeat(l - o.length)), a.shift(l);
  const s = t.enter("listItem"), u = t.indentLines(
    t.containerFlow(e, a.current()),
    h
  );
  return s(), u;
  function h(c, p, f) {
    return p ? (f ? "" : " ".repeat(l)) + c : (f ? o : o + " ".repeat(l - o.length)) + c;
  }
}
function df(e, n, t, r) {
  const i = t.enter("paragraph"), o = t.enter("phrasing"), l = t.containerPhrasing(e, r);
  return o(), i(), l;
}
const mf = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Mt([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function gf(e, n, t, r) {
  return (e.children.some(function(l) {
    return mf(l);
  }) ? t.containerPhrasing : t.containerFlow).call(t, e, r);
}
function yf(e) {
  const n = e.options.strong || "*";
  if (n !== "*" && n !== "_")
    throw new Error(
      "Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`"
    );
  return n;
}
Gi.peek = kf;
function Gi(e, n, t, r) {
  const i = yf(t), o = t.enter("strong"), l = t.createTracker(r), a = l.move(i + i);
  let s = l.move(
    t.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    })
  );
  const u = s.charCodeAt(0), h = zt(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  h.inside && (s = dt(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), p = zt(r.after.charCodeAt(0), c, i);
  p.inside && (s = s.slice(0, -1) + dt(c));
  const f = l.move(i + i);
  return o(), t.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: h.outside
  }, a + s + f;
}
function kf(e, n, t) {
  return t.options.strong || "*";
}
function bf(e, n, t, r) {
  return t.safe(e.value, r);
}
function xf(e) {
  const n = e.options.ruleRepetition || 3;
  if (n < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + n + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return n;
}
function wf(e, n, t) {
  const r = (Zi(t) + (t.options.ruleSpaces ? " " : "")).repeat(xf(t));
  return t.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Xi = {
  blockquote: Uh,
  break: Mr,
  code: Xh,
  definition: Yh,
  emphasis: Oi,
  hardBreak: Mr,
  heading: tf,
  html: Hi,
  image: ji,
  imageReference: $i,
  inlineCode: Ui,
  link: Wi,
  linkReference: qi,
  list: hf,
  listItem: pf,
  paragraph: df,
  root: gf,
  strong: Gi,
  text: bf,
  thematicBreak: wf
};
function _f() {
  return {
    enter: {
      table: vf,
      tableData: Fr,
      tableHeader: Fr,
      tableRow: Sf
    },
    exit: {
      codeText: If,
      table: Cf,
      tableData: sn,
      tableHeader: sn,
      tableRow: sn
    }
  };
}
function vf(e) {
  const n = e._align;
  this.enter(
    {
      type: "table",
      align: n.map(function(t) {
        return t === "none" ? null : t;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function Cf(e) {
  this.exit(e), this.data.inTable = void 0;
}
function Sf(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function sn(e) {
  this.exit(e);
}
function Fr(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function If(e) {
  let n = this.resume();
  this.data.inTable && (n = n.replace(/\\([\\|])/g, Ef));
  const t = this.stack[this.stack.length - 1];
  t.type, t.value = n, this.exit(e);
}
function Ef(e, n) {
  return n === "|" ? n : e;
}
function Af(e) {
  const n = e || {}, t = n.tableCellPadding, r = n.tablePipeAlign, i = n.stringLength, o = t ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: p,
      table: l,
      tableCell: s,
      tableRow: a
    }
  };
  function l(f, m, b, w) {
    return u(h(f, b, w), f.align);
  }
  function a(f, m, b, w) {
    const k = c(f, b, w), I = u([k]);
    return I.slice(0, I.indexOf(`
`));
  }
  function s(f, m, b, w) {
    const k = b.enter("tableCell"), I = b.enter("phrasing"), C = b.containerPhrasing(f, {
      ...w,
      before: o,
      after: o
    });
    return I(), k(), C;
  }
  function u(f, m) {
    return jh(f, {
      align: m,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: t,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function h(f, m, b) {
    const w = f.children;
    let k = -1;
    const I = [], C = m.enter("table");
    for (; ++k < w.length; )
      I[k] = c(w[k], m, b);
    return C(), I;
  }
  function c(f, m, b) {
    const w = f.children;
    let k = -1;
    const I = [], C = m.enter("tableRow");
    for (; ++k < w.length; )
      I[k] = s(w[k], f, m, b);
    return C(), I;
  }
  function p(f, m, b) {
    let w = Xi.inlineCode(f, m, b);
    return b.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function Tf() {
  return {
    exit: {
      taskListCheckValueChecked: Or,
      taskListCheckValueUnchecked: Or,
      paragraph: Nf
    }
  };
}
function Lf() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: zf }
  };
}
function Or(e) {
  const n = this.stack[this.stack.length - 2];
  n.type, n.checked = e.type === "taskListCheckValueChecked";
}
function Nf(e) {
  const n = this.stack[this.stack.length - 2];
  if (n && n.type === "listItem" && typeof n.checked == "boolean") {
    const t = this.stack[this.stack.length - 1];
    t.type;
    const r = t.children[0];
    if (r && r.type === "text") {
      const i = n.children;
      let o = -1, l;
      for (; ++o < i.length; ) {
        const a = i[o];
        if (a.type === "paragraph") {
          l = a;
          break;
        }
      }
      l === t && (r.value = r.value.slice(1), r.value.length === 0 ? t.children.shift() : t.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, t.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function zf(e, n, t, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = t.createTracker(r);
  o && a.move(l);
  let s = Xi.listItem(e, n, t, {
    ...r,
    ...a.current()
  });
  return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(h) {
    return h + l;
  }
}
function Df() {
  return [
    ch(),
    Nh(),
    Rh(),
    _f(),
    Tf()
  ];
}
function Pf(e) {
  return {
    extensions: [
      hh(),
      zh(e),
      Bh(),
      Af(e),
      Lf()
    ]
  };
}
const Rf = {
  tokenize: jf,
  partial: !0
}, Qi = {
  tokenize: $f,
  partial: !0
}, Yi = {
  tokenize: Uf,
  partial: !0
}, Ki = {
  tokenize: Vf,
  partial: !0
}, Bf = {
  tokenize: Wf,
  partial: !0
}, Ji = {
  name: "wwwAutolink",
  tokenize: Of,
  previous: tl
}, el = {
  name: "protocolAutolink",
  tokenize: Hf,
  previous: nl
}, Fe = {
  name: "emailAutolink",
  tokenize: Ff,
  previous: rl
}, Pe = {};
function Mf() {
  return {
    text: Pe
  };
}
let qe = 48;
for (; qe < 123; )
  Pe[qe] = Fe, qe++, qe === 58 ? qe = 65 : qe === 91 && (qe = 97);
Pe[43] = Fe;
Pe[45] = Fe;
Pe[46] = Fe;
Pe[95] = Fe;
Pe[72] = [Fe, el];
Pe[104] = [Fe, el];
Pe[87] = [Fe, Ji];
Pe[119] = [Fe, Ji];
function Ff(e, n, t) {
  const r = this;
  let i, o;
  return l;
  function l(c) {
    return !_n(c) || !rl.call(r, r.previous) || Un(r.events) ? t(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return _n(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), s) : t(c);
  }
  function s(c) {
    return c === 46 ? e.check(Bf, h, u)(c) : c === 45 || c === 95 || fe(c) ? (o = !0, e.consume(c), s) : h(c);
  }
  function u(c) {
    return e.consume(c), i = !0, s;
  }
  function h(c) {
    return o && i && ge(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), n(c)) : t(c);
  }
}
function Of(e, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !tl.call(r, r.previous) || Un(r.events) ? t(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Rf, e.attempt(Qi, e.attempt(Yi, o), t), t)(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), n(l);
  }
}
function Hf(e, n, t) {
  const r = this;
  let i = "", o = !1;
  return l;
  function l(c) {
    return (c === 72 || c === 104) && nl.call(r, r.previous) && !Un(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : t(c);
  }
  function a(c) {
    if (ge(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), a;
    if (c === 58) {
      const p = i.toLowerCase();
      if (p === "http" || p === "https")
        return e.consume(c), s;
    }
    return t(c);
  }
  function s(c) {
    return c === 47 ? (e.consume(c), o ? u : (o = !0, s)) : t(c);
  }
  function u(c) {
    return c === null || Tt(c) || Y(c) || Ge(c) || Pt(c) ? t(c) : e.attempt(Qi, e.attempt(Yi, h), t)(c);
  }
  function h(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), n(c);
  }
}
function jf(e, n, t) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : t(l);
  }
  function o(l) {
    return l === null ? t(l) : n(l);
  }
}
function $f(e, n, t) {
  let r, i, o;
  return l;
  function l(u) {
    return u === 46 || u === 95 ? e.check(Ki, s, a)(u) : u === null || Y(u) || Ge(u) || u !== 45 && Pt(u) ? s(u) : (o = !0, e.consume(u), l);
  }
  function a(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), l;
  }
  function s(u) {
    return i || r || !o ? t(u) : n(u);
  }
}
function Uf(e, n) {
  let t = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (t++, e.consume(l), i) : l === 41 && r < t ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(Ki, n, o)(l) : l === null || Y(l) || Ge(l) ? n(l) : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function Vf(e, n, t) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || Y(a) || Ge(a) ? n(a) : t(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || Y(a) || Ge(a) ? n(a) : r(a);
  }
  function o(a) {
    return ge(a) ? l(a) : t(a);
  }
  function l(a) {
    return a === 59 ? (e.consume(a), r) : ge(a) ? (e.consume(a), l) : t(a);
  }
}
function Wf(e, n, t) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return fe(o) ? t(o) : n(o);
  }
}
function tl(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Y(e);
}
function nl(e) {
  return !ge(e);
}
function rl(e) {
  return !(e === 47 || _n(e));
}
function _n(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || fe(e);
}
function Un(e) {
  let n = e.length, t = !1;
  for (; n--; ) {
    const r = e[n][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      t = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      t = !1;
      break;
    }
  }
  return e.length > 0 && !t && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), t;
}
const qf = {
  tokenize: ep,
  partial: !0
};
function Zf() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Yf,
        continuation: {
          tokenize: Kf
        },
        exit: Jf
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Qf
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Gf,
        resolveTo: Xf
      }
    }
  };
}
function Gf(e, n, t) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l;
  for (; i--; ) {
    const s = r.events[i][1];
    if (s.type === "labelImage") {
      l = s;
      break;
    }
    if (s.type === "gfmFootnoteCall" || s.type === "labelLink" || s.type === "label" || s.type === "image" || s.type === "link")
      break;
  }
  return a;
  function a(s) {
    if (!l || !l._balanced)
      return t(s);
    const u = Le(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? t(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), n(s));
  }
}
function Xf(e, n) {
  let t = e.length;
  for (; t--; )
    if (e[t][1].type === "labelImage" && e[t][0] === "enter") {
      e[t][1];
      break;
    }
  e[t + 1][1].type = "data", e[t + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[t + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[t + 3][1].end),
    end: Object.assign({}, e[t + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, l = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
  }, a = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[t + 1],
    e[t + 2],
    ["enter", r, n],
    // The `[`
    e[t + 3],
    e[t + 4],
    // The `^`.
    ["enter", i, n],
    ["exit", i, n],
    // Everything in between.
    ["enter", o, n],
    ["enter", l, n],
    ["exit", l, n],
    ["exit", o, n],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, n]
  ];
  return e.splice(t, e.length - t + 1, ...a), e;
}
function Qf(e, n, t) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, l;
  return a;
  function a(c) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(c) {
    return c !== 94 ? t(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(c) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      c === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || Y(c)
    )
      return t(c);
    if (c === 93) {
      e.exit("chunkString");
      const p = e.exit("gfmFootnoteCallString");
      return i.includes(Le(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), n) : t(c);
    }
    return Y(c) || (l = !0), o++, e.consume(c), c === 92 ? h : u;
  }
  function h(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, u) : u(c);
  }
}
function Yf(e, n, t) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, l = 0, a;
  return s;
  function s(m) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(m) {
    return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", h) : t(m);
  }
  function h(m) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      m === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      m === null || m === 91 || Y(m)
    )
      return t(m);
    if (m === 93) {
      e.exit("chunkString");
      const b = e.exit("gfmFootnoteDefinitionLabelString");
      return o = Le(r.sliceSerialize(b)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
    }
    return Y(m) || (a = !0), l++, e.consume(m), m === 92 ? c : h;
  }
  function c(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), l++, h) : h(m);
  }
  function p(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), i.includes(o) || i.push(o), W(e, f, "gfmFootnoteDefinitionWhitespace")) : t(m);
  }
  function f(m) {
    return n(m);
  }
}
function Kf(e, n, t) {
  return e.check(gt, n, e.attempt(qf, n, t));
}
function Jf(e) {
  e.exit("gfmFootnoteDefinition");
}
function ep(e, n, t) {
  const r = this;
  return W(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], !0).length === 4 ? n(o) : t(o);
  }
}
function tp(e) {
  let t = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: o,
    resolveAll: i
  };
  return t == null && (t = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(l, a) {
    let s = -1;
    for (; ++s < l.length; )
      if (l[s][0] === "enter" && l[s][1].type === "strikethroughSequenceTemporary" && l[s][1]._close) {
        let u = s;
        for (; u--; )
          if (l[u][0] === "exit" && l[u][1].type === "strikethroughSequenceTemporary" && l[u][1]._open && // If the sizes are the same:
          l[s][1].end.offset - l[s][1].start.offset === l[u][1].end.offset - l[u][1].start.offset) {
            l[s][1].type = "strikethroughSequence", l[u][1].type = "strikethroughSequence";
            const h = {
              type: "strikethrough",
              start: Object.assign({}, l[u][1].start),
              end: Object.assign({}, l[s][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, l[u][1].end),
              end: Object.assign({}, l[s][1].start)
            }, p = [["enter", h, a], ["enter", l[u][1], a], ["exit", l[u][1], a], ["enter", c, a]], f = a.parser.constructs.insideSpan.null;
            f && Ce(p, p.length, 0, Rt(f, l.slice(u + 1, s), a)), Ce(p, p.length, 0, [["exit", c, a], ["enter", l[s][1], a], ["exit", l[s][1], a], ["exit", h, a]]), Ce(l, u - 1, s - u + 3, p), s = u + p.length - 2;
            break;
          }
      }
    for (s = -1; ++s < l.length; )
      l[s][1].type === "strikethroughSequenceTemporary" && (l[s][1].type = "data");
    return l;
  }
  function o(l, a, s) {
    const u = this.previous, h = this.events;
    let c = 0;
    return p;
    function p(m) {
      return u === 126 && h[h.length - 1][1].type !== "characterEscape" ? s(m) : (l.enter("strikethroughSequenceTemporary"), f(m));
    }
    function f(m) {
      const b = nt(u);
      if (m === 126)
        return c > 1 ? s(m) : (l.consume(m), c++, f);
      if (c < 2 && !t) return s(m);
      const w = l.exit("strikethroughSequenceTemporary"), k = nt(m);
      return w._open = !k || k === 2 && !!b, w._close = !b || b === 2 && !!k, a(m);
    }
  }
}
class np {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(n, t, r) {
    rp(this, n, t, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(n) {
    if (this.map.sort(function(o, l) {
      return o[0] - l[0];
    }), this.map.length === 0)
      return;
    let t = this.map.length;
    const r = [];
    for (; t > 0; )
      t -= 1, r.push(n.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), n.length = this.map[t][0];
    r.push(n.slice()), n.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const o of i)
        n.push(o);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function rp(e, n, t, r) {
  let i = 0;
  if (!(t === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === n) {
        e.map[i][1] += t, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([n, t, r]);
  }
}
function ip(e, n) {
  let t = !1;
  const r = [];
  for (; n < e.length; ) {
    const i = e[n];
    if (t) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[n + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[n - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (t = !0);
    n += 1;
  }
  return r;
}
function lp() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: op,
        resolveAll: ap
      }
    }
  };
}
function op(e, n, t) {
  const r = this;
  let i = 0, o = 0, l;
  return a;
  function a(x) {
    let T = r.events.length - 1;
    for (; T > -1; ) {
      const z = r.events[T][1].type;
      if (z === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      z === "linePrefix") T--;
      else break;
    }
    const L = T > -1 ? r.events[T][1].type : null, V = L === "tableHead" || L === "tableRow" ? _ : s;
    return V === _ && r.parser.lazy[r.now().line] ? t(x) : V(x);
  }
  function s(x) {
    return e.enter("tableHead"), e.enter("tableRow"), u(x);
  }
  function u(x) {
    return x === 124 || (l = !0, o += 1), h(x);
  }
  function h(x) {
    return x === null ? t(x) : B(x) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), f) : t(x) : U(x) ? W(e, h, "whitespace")(x) : (o += 1, l && (l = !1, i += 1), x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), l = !0, h) : (e.enter("data"), c(x)));
  }
  function c(x) {
    return x === null || x === 124 || Y(x) ? (e.exit("data"), h(x)) : (e.consume(x), x === 92 ? p : c);
  }
  function p(x) {
    return x === 92 || x === 124 ? (e.consume(x), c) : c(x);
  }
  function f(x) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? t(x) : (e.enter("tableDelimiterRow"), l = !1, U(x) ? W(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(x) : m(x));
  }
  function m(x) {
    return x === 45 || x === 58 ? w(x) : x === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), b) : F(x);
  }
  function b(x) {
    return U(x) ? W(e, w, "whitespace")(x) : w(x);
  }
  function w(x) {
    return x === 58 ? (o += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(x), e.exit("tableDelimiterMarker"), k) : x === 45 ? (o += 1, k(x)) : x === null || B(x) ? M(x) : F(x);
  }
  function k(x) {
    return x === 45 ? (e.enter("tableDelimiterFiller"), I(x)) : F(x);
  }
  function I(x) {
    return x === 45 ? (e.consume(x), I) : x === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(x), e.exit("tableDelimiterMarker"), C) : (e.exit("tableDelimiterFiller"), C(x));
  }
  function C(x) {
    return U(x) ? W(e, M, "whitespace")(x) : M(x);
  }
  function M(x) {
    return x === 124 ? m(x) : x === null || B(x) ? !l || i !== o ? F(x) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), n(x)) : F(x);
  }
  function F(x) {
    return t(x);
  }
  function _(x) {
    return e.enter("tableRow"), N(x);
  }
  function N(x) {
    return x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), N) : x === null || B(x) ? (e.exit("tableRow"), n(x)) : U(x) ? W(e, N, "whitespace")(x) : (e.enter("data"), R(x));
  }
  function R(x) {
    return x === null || x === 124 || Y(x) ? (e.exit("data"), N(x)) : (e.consume(x), x === 92 ? O : R);
  }
  function O(x) {
    return x === 92 || x === 124 ? (e.consume(x), R) : R(x);
  }
}
function ap(e, n) {
  let t = -1, r = !0, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], a = !1, s = 0, u, h, c;
  const p = new np();
  for (; ++t < e.length; ) {
    const f = e[t], m = f[1];
    f[0] === "enter" ? m.type === "tableHead" ? (a = !1, s !== 0 && (Hr(p, n, s, u, h), h = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, p.add(t, 0, [["enter", u, n]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, c = void 0, o = [0, 0, 0, 0], l = [0, t + 1, 0, 0], a && (a = !1, h = {
      type: "tableBody",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, p.add(t, 0, [["enter", h, n]])), i = m.type === "tableDelimiterRow" ? 2 : h ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], c = St(p, n, o, i, void 0, c), o = [0, 0, 0, 0]), l[2] = t)) : m.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (l[0] = l[1], c = St(p, n, o, i, void 0, c)), o = l, l = [o[1], t, 0, 0])) : m.type === "tableHead" ? (a = !0, s = t) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (s = t, o[1] !== 0 ? (l[0] = l[1], c = St(p, n, o, i, t, c)) : l[1] !== 0 && (c = St(p, n, l, i, t, c)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (l[3] = t);
  }
  for (s !== 0 && Hr(p, n, s, u, h), p.consume(n.events), t = -1; ++t < n.events.length; ) {
    const f = n.events[t];
    f[0] === "enter" && f[1].type === "table" && (f[1]._align = ip(n.events, t));
  }
  return e;
}
function St(e, n, t, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  t[0] !== 0 && (o.end = Object.assign({}, et(n.events, t[0])), e.add(t[0], 0, [["exit", o, n]]));
  const s = et(n.events, t[1]);
  if (o = {
    type: l,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(t[1], 0, [["enter", o, n]]), t[2] !== 0) {
    const u = et(n.events, t[2]), h = et(n.events, t[3]), c = {
      type: a,
      start: Object.assign({}, u),
      end: Object.assign({}, h)
    };
    if (e.add(t[2], 0, [["enter", c, n]]), r !== 2) {
      const p = n.events[t[2]], f = n.events[t[3]];
      if (p[1].end = Object.assign({}, f[1].end), p[1].type = "chunkText", p[1].contentType = "text", t[3] > t[2] + 1) {
        const m = t[2] + 1, b = t[3] - t[2] - 1;
        e.add(m, b, []);
      }
    }
    e.add(t[3] + 1, 0, [["exit", c, n]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, et(n.events, i)), e.add(i, 0, [["exit", o, n]]), o = void 0), o;
}
function Hr(e, n, t, r, i) {
  const o = [], l = et(n.events, t);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, n])), r.end = Object.assign({}, l), o.push(["exit", r, n]), e.add(t + 1, 0, o);
}
function et(e, n) {
  const t = e[n], r = t[0] === "enter" ? "start" : "end";
  return t[1][r];
}
const sp = {
  name: "tasklistCheck",
  tokenize: cp
};
function up() {
  return {
    text: {
      91: sp
    }
  };
}
function cp(e, n, t) {
  const r = this;
  return i;
  function i(s) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? t(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(s) {
    return Y(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : t(s);
  }
  function l(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : t(s);
  }
  function a(s) {
    return B(s) ? n(s) : U(s) ? e.check({
      tokenize: hp
    }, n, t)(s) : t(s);
  }
}
function hp(e, n, t) {
  return W(e, r, "whitespace");
  function r(i) {
    return i === null ? t(i) : n(i);
  }
}
function fp(e) {
  return pi([
    Mf(),
    Zf(),
    tp(e),
    lp(),
    up()
  ]);
}
const pp = {};
function dp(e) {
  const n = (
    /** @type {Processor<Root>} */
    this
  ), t = e || pp, r = n.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(fp(t)), o.push(Df()), l.push(Pf(t));
}
const mp = "_markdown_10744_1", gp = "_codeHeader_10744_94", yp = "_copyButton_10744_105", kp = "_streamCursor_10744_183", ft = {
  markdown: mp,
  codeHeader: gp,
  copyButton: yp,
  streamCursor: kp
}, bp = () => /* @__PURE__ */ A(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ d("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
      /* @__PURE__ */ d("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
    ]
  }
), xp = () => /* @__PURE__ */ d(
  "svg",
  {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /* @__PURE__ */ d("polyline", { points: "20 6 9 17 4 12" })
  }
), wp = ({ inline: e, className: n, children: t, ...r }) => {
  const [i, o] = ue(!1), l = /language-(\w+)/.exec(n || ""), a = l ? l[1] : "", s = J(() => {
    const u = String(t).replace(/\n$/, "");
    navigator.clipboard.writeText(u).then(() => {
      o(!0), setTimeout(() => o(!1), 2e3);
    });
  }, [t]);
  return e ? /* @__PURE__ */ d("code", { className: n, ...r, children: t }) : /* @__PURE__ */ A("div", { className: ft.codeWrapper, children: [
    /* @__PURE__ */ A("div", { className: ft.codeHeader, children: [
      /* @__PURE__ */ d("span", { children: a }),
      /* @__PURE__ */ d(
        "button",
        {
          className: ft.copyButton,
          onClick: s,
          "aria-label": "Copy code",
          children: i ? /* @__PURE__ */ A(cn, { children: [
            /* @__PURE__ */ d(xp, {}),
            /* @__PURE__ */ d("span", { children: "Copied" })
          ] }) : /* @__PURE__ */ A(cn, { children: [
            /* @__PURE__ */ d(bp, {}),
            /* @__PURE__ */ d("span", { children: "Copy" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d("pre", { className: n, children: /* @__PURE__ */ d("code", { ...r, children: t }) })
  ] });
}, _p = () => /* @__PURE__ */ d("span", { className: ft.streamCursor, "aria-hidden": "true" }), jr = ({
  content: e,
  className: n,
  isStreaming: t
}) => /* @__PURE__ */ A("div", { className: Z(ft.markdown, n), children: [
  /* @__PURE__ */ d(
    eh,
    {
      remarkPlugins: [dp],
      components: {
        code: wp,
        a: ({ ...r }) => /* @__PURE__ */ d("a", { target: "_blank", rel: "noopener noreferrer", ...r }),
        p: ({ children: r, ...i }) => /* @__PURE__ */ d("p", { ...i, children: r })
      },
      children: e
    }
  ),
  t && /* @__PURE__ */ d(_p, {})
] });
function vp(e) {
  return e.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}
const Cp = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "14",
    height: "14",
    "aria-hidden": "true",
    focusable: "false",
    className: se.errorIcon,
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
        clipRule: "evenodd"
      }
    )
  }
), Sp = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "12",
    height: "12",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        d: "M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.389Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z",
        clipRule: "evenodd"
      }
    )
  }
), il = Xe(
  ({ message: e, onRetry: n, className: t, agentAvatar: r, agentName: i }) => {
    const { role: o, content: l, timestamp: a, status: s } = e, u = o === "user", h = s === "loading", c = s === "streaming", p = s === "error", f = !s || s === "done", m = J(
      (I) => {
        I.stopPropagation(), n == null || n();
      },
      [n]
    ), b = rt(() => {
      const I = (i == null ? void 0 : i.trim().split(/\s+/)) || [];
      return I.length === 1 ? I[0].slice(0, 2).toUpperCase() : (I[0][0] + I[1][0]).toUpperCase();
    }, [i]), w = () => h ? /* @__PURE__ */ d(Cn, { variant: "bubble" }) : p ? /* @__PURE__ */ A("span", { className: se.errorBody, children: [
      /* @__PURE__ */ A("span", { className: se.errorMessage, children: [
        /* @__PURE__ */ d(Cp, {}),
        /* @__PURE__ */ d("span", { children: l || "Something went wrong." })
      ] }),
      n && /* @__PURE__ */ A(
        "button",
        {
          type: "button",
          className: se.retryButton,
          onClick: m,
          "aria-label": "Retry message",
          children: [
            /* @__PURE__ */ d(Sp, {}),
            "Retry"
          ]
        }
      )
    ] }) : c ? /* @__PURE__ */ d(jr, { content: l, isStreaming: !0 }) : /* @__PURE__ */ d(jr, { content: l }), k = !u && (h || c) ? { "aria-live": "polite", "aria-atomic": !1 } : {};
    return /* @__PURE__ */ A(
      "div",
      {
        className: Z(
          se.row,
          u ? se.rowUser : se.rowAssistant,
          t
        ),
        role: "listitem",
        children: [
          !u && (i || r) && /* @__PURE__ */ d("span", { className: Z(se.avatar), "aria-hidden": "false", children: r ? /* @__PURE__ */ d(
            "img",
            {
              src: r,
              alt: "",
              className: Q.avatarImg
            }
          ) : /* @__PURE__ */ d("div", { className: Q.avatarInitials, children: b }) }),
          /* @__PURE__ */ d(
            "div",
            {
              className: Z(
                se.bubble,
                u && se.bubbleUser,
                h && se.bubbleLoading,
                c && se.bubbleStreaming,
                p && se.bubbleError,
                f && !u && se.bubbleDone
              ),
              ...k,
              children: w()
            }
          ),
          (f || p) && /* @__PURE__ */ d(
            "time",
            {
              className: Z(
                se.timestamp,
                u ? se.timestampUser : se.timestampAssistant
              ),
              dateTime: a == null ? void 0 : a.toISOString(),
              "aria-hidden": "true",
              children: vp(a)
            }
          )
        ]
      }
    );
  }
);
il.displayName = "MessageBubble";
const Ip = "_root_1we36_8", Ep = "_scrollArea_1we36_9", Ap = "_list_1we36_10", Tp = "_listItem_1we36_93", Lp = "_sentinelItem_1we36_117", Np = "_sentinel_1we36_11", zp = "_emptyState_1we36_134", Dp = "_emptyIcon_1we36_151", Pp = "_emptyText_1we36_177", Rp = "_emptySubtext_1we36_185", Bp = "_scrollPill_1we36_13", Te = {
  root: Ip,
  scrollArea: Ep,
  list: Ap,
  listItem: Tp,
  sentinelItem: Lp,
  sentinel: Np,
  emptyState: zp,
  emptyIcon: Dp,
  emptyText: Pp,
  emptySubtext: Rp,
  scrollPill: Bp
}, Mp = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd"
      }
    )
  }
), Fp = () => /* @__PURE__ */ A("div", { className: Te.emptyState, "aria-hidden": "true", children: [
  /* @__PURE__ */ d("span", { className: Te.emptyIcon, children: /* @__PURE__ */ d(
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
      children: /* @__PURE__ */ d("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
    }
  ) }),
  /* @__PURE__ */ d("p", { className: Te.emptyText, children: "Start the conversation" }),
  /* @__PURE__ */ d("p", { className: Te.emptySubtext, children: "Send a message to get started" })
] }), ll = Xe(
  ({ messages: e, onRetry: n, className: t, agentAvatar: r, agentName: i }) => {
    const o = de(null), l = de(null), [a, s] = ue(!1), u = de(e.length);
    me(() => {
      const f = l.current;
      if (!f) return;
      const m = new IntersectionObserver(
        ([b]) => {
          s(!b.isIntersecting);
        },
        {
          root: o.current,
          threshold: 0.1
          // 10% of the sentinel must be visible to count
        }
      );
      return m.observe(f), () => m.disconnect();
    }, []);
    const h = J(
      (f = "smooth") => {
        var m;
        (m = l.current) == null || m.scrollIntoView({ behavior: f, block: "nearest" });
      },
      []
    );
    Wn(() => {
      if (a) return;
      const f = e.length, m = e[e.length - 1], b = f > u.current, w = (m == null ? void 0 : m.status) === "streaming" || (m == null ? void 0 : m.status) === "loading";
      (b || w) && h("smooth"), u.current = f;
    }, [e, a, h]), Wn(() => {
      h("instant");
    }, []);
    const c = J(() => {
      h("smooth"), s(!1);
    }, [h]), p = e.length === 0;
    return /* @__PURE__ */ A("div", { className: Z(Te.root, t), children: [
      /* @__PURE__ */ d(
        "div",
        {
          ref: o,
          className: Te.scrollArea,
          role: "log",
          "aria-live": "polite",
          "aria-label": "Chat messages",
          "aria-relevant": "additions",
          tabIndex: 0,
          children: p ? /* @__PURE__ */ d(Fp, {}) : (
            // Semantic list — MessageBubble uses role="listitem"
            /* @__PURE__ */ A("ul", { className: Te.list, "aria-label": "Message history", children: [
              e.map((f) => /* @__PURE__ */ d("li", { className: Te.listItem, children: /* @__PURE__ */ d(
                il,
                {
                  message: f,
                  agentAvatar: r,
                  agentName: i,
                  onRetry: f.role === "assistant" && f.status === "error" ? n : void 0
                }
              ) }, f.id)),
              /* @__PURE__ */ d("li", { "aria-hidden": "true", className: Te.sentinelItem, children: /* @__PURE__ */ d("div", { ref: l, className: Te.sentinel }) })
            ] })
          )
        }
      ),
      a && !p && /* @__PURE__ */ A(
        "button",
        {
          type: "button",
          className: Te.scrollPill,
          onClick: c,
          "aria-label": "Scroll to latest message",
          children: [
            /* @__PURE__ */ d(Mp, {}),
            /* @__PURE__ */ d("span", { children: "Latest" })
          ]
        }
      )
    ] });
  }
);
ll.displayName = "MessageList";
const Op = "_root_onznd_14", Hp = "_divider_onznd_26", jp = "_inputRow_onznd_43", $p = "_textarea_onznd_66", Up = "_loading_onznd_126", Vp = "_sendButton_onznd_133", Wp = "_sendButtonActive_onznd_164", qp = "_spinner_onznd_193", Zp = "_srOnly_onznd_209", ze = {
  root: Op,
  divider: Hp,
  inputRow: jp,
  textarea: $p,
  loading: Up,
  sendButton: Vp,
  sendButtonActive: Wp,
  spinner: qp,
  srOnly: Zp
}, Gp = 24, Xp = 18, Qp = 5, $r = Gp * Qp + Xp, ol = ({
  onSend: e,
  isLoading: n = !1,
  placeholder: t = "Message…",
  autoFocus: r = !1,
  className: i
}) => {
  const [o, l] = ue(""), a = de(null), s = Xr(), u = J(() => {
    const w = a.current;
    if (!w) return;
    w.style.height = "auto";
    const k = Math.min(w.scrollHeight, $r);
    w.style.height = `${k}px`, w.style.overflowY = w.scrollHeight > $r ? "auto" : "hidden";
  }, []), h = J(() => {
    const w = a.current;
    w && (w.style.height = "auto", w.style.overflowY = "hidden");
  }, []);
  me(() => {
    u();
  }, [o, u]), me(() => {
    if (r && a.current) {
      const w = requestAnimationFrame(() => {
        var k;
        (k = a.current) == null || k.focus();
      });
      return () => cancelAnimationFrame(w);
    }
  }, [r]);
  const c = de(n);
  me(() => {
    var w;
    c.current && !n && ((w = a.current) == null || w.focus()), c.current = n;
  }, [n]);
  const p = J(() => {
    const w = o.trim();
    !w || n || (e(w), l(""), h());
  }, [o, n, e, h]), f = J(
    (w) => {
      w.key === "Enter" && !w.shiftKey && (w.preventDefault(), p());
    },
    [p]
  ), m = o.trim().length > 0 && !n, b = `${s}-input`;
  return /* @__PURE__ */ A(
    "div",
    {
      className: Z(ze.root, n && ze.loading, i),
      role: "group",
      "aria-label": "Message input",
      children: [
        /* @__PURE__ */ d("div", { className: ze.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ A("div", { className: ze.inputRow, children: [
          /* @__PURE__ */ d("label", { htmlFor: b, className: ze.srOnly, children: t }),
          /* @__PURE__ */ d(
            "textarea",
            {
              ref: a,
              id: b,
              className: ze.textarea,
              value: o,
              onChange: (w) => l(w.target.value),
              onKeyDown: f,
              placeholder: t,
              disabled: n,
              rows: 1,
              "aria-label": t,
              "aria-disabled": n,
              "aria-multiline": "true",
              "aria-describedby": n ? `${s}-loading` : void 0,
              autoComplete: "off",
              autoCorrect: "on",
              autoCapitalize: "sentences",
              spellCheck: !0
            }
          ),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: Z(ze.sendButton, m && ze.sendButtonActive),
              onClick: p,
              disabled: !m,
              "aria-label": "Send message",
              "aria-disabled": !m,
              tabIndex: 0,
              children: n ? /* @__PURE__ */ d(Kp, {}) : /* @__PURE__ */ d(Yp, {})
            }
          ),
          n && /* @__PURE__ */ d(
            "span",
            {
              id: `${s}-loading`,
              className: ze.srOnly,
              "aria-live": "polite",
              children: "Waiting for response…"
            }
          )
        ] })
      ]
    }
  );
};
ol.displayName = "InputBar";
const Yp = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 2.25a.75.75 0 0 1 .574.268l7.5 9a.75.75 0 0 1-.574 1.232H13.5V21a.75.75 0 0 1-1.5 0v-8.25H4.5a.75.75 0 0 1-.574-1.232l7.5-9A.75.75 0 0 1 12 2.25Z"
      }
    )
  }
), Kp = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    focusable: "false",
    className: ze.spinner,
    children: /* @__PURE__ */ d(
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
), Jp = "_panel_9k026_8", ed = "_isMaximized_9k026_78", td = "_opening_9k026_15", nd = "_closing_9k026_16", rd = "_errorBanner_9k026_137", id = "_errorBannerIcon_9k026_167", ld = "_errorBannerText_9k026_174", od = "_errorBannerDismiss_9k026_182", $e = {
  panel: Jp,
  isMaximized: ed,
  opening: td,
  closing: nd,
  errorBanner: rd,
  errorBannerIcon: id,
  errorBannerText: ld,
  errorBannerDismiss: od
}, ad = 200, al = Qr(
  ({
    isOpen: e,
    onClose: n,
    messages: t,
    isLoading: r,
    error: i,
    onSend: o,
    onRetry: l,
    onClear: a,
    agentName: s = "AI Assistant",
    agentAvatar: u,
    logo: h,
    placeholder: c,
    onBack: p,
    dialogId: f,
    dialogLabelId: m,
    className: b,
    isMaximized: w,
    onMaximizeToggle: k
  }, I) => {
    const [C, M] = ue(e), [F, _] = ue(!1), N = de(null);
    return me(() => (N.current && (clearTimeout(N.current), N.current = null), e ? (_(!1), M(!0)) : (_(!0), N.current = setTimeout(() => {
      M(!1), _(!1);
    }, ad)), () => {
      N.current && clearTimeout(N.current);
    }), [e]), C ? /* @__PURE__ */ A(
      "div",
      {
        ref: I,
        id: f,
        className: Z(
          $e.panel,
          F ? $e.closing : $e.opening,
          w && $e.isMaximized,
          b
        ),
        role: "dialog",
        "aria-modal": "true",
        "aria-label": s,
        "aria-labelledby": m,
        onClick: (R) => R.stopPropagation(),
        children: [
          /* @__PURE__ */ d(
            Yr,
            {
              agentName: s,
              agentAvatar: u,
              logo: h,
              isLoading: r,
              onClose: n,
              onBack: p,
              onClear: t.length > 0 ? a : void 0,
              dialogLabelId: m,
              isMaximized: w,
              onMaximizeToggle: k
            }
          ),
          /* @__PURE__ */ d(
            ll,
            {
              messages: t,
              onRetry: l,
              agentAvatar: u,
              agentName: s
            }
          ),
          /* @__PURE__ */ d(
            ol,
            {
              onSend: o,
              isLoading: r,
              placeholder: c,
              autoFocus: e && !F
            }
          ),
          i && /* @__PURE__ */ A(
            "div",
            {
              className: $e.errorBanner,
              role: "alert",
              "aria-live": "assertive",
              "aria-atomic": "true",
              children: [
                /* @__PURE__ */ d("span", { className: $e.errorBannerIcon, "aria-hidden": "true", children: "⚠" }),
                /* @__PURE__ */ d("span", { className: $e.errorBannerText, children: i }),
                /* @__PURE__ */ d(
                  "button",
                  {
                    type: "button",
                    className: $e.errorBannerDismiss,
                    onClick: l,
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
al.displayName = "ChatPanel";
const sd = "_button_kpqzz_32", ud = "_buttonOpen_kpqzz_100", cd = "_iconWrap_kpqzz_16", hd = "_iconSlot_kpqzz_124", fd = "_iconChat_kpqzz_15", pd = "_iconClose_kpqzz_15", dd = "_iconHidden_kpqzz_150", md = "_logoImg_kpqzz_158", gd = "_logoNode_kpqzz_168", yd = "_unreadDot_kpqzz_47", kd = "_ripple_kpqzz_47", ve = {
  button: sd,
  buttonOpen: ud,
  iconWrap: cd,
  iconSlot: hd,
  iconChat: fd,
  iconClose: pd,
  iconHidden: dd,
  logoImg: md,
  logoNode: gd,
  unreadDot: yd,
  ripple: kd
}, bd = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223Z",
        clipRule: "evenodd"
      }
    )
  }
), xd = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd"
      }
    )
  }
), wd = ({ logo: e }) => typeof e == "string" ? /* @__PURE__ */ d("img", { src: e, alt: "", className: ve.logoImg, draggable: !1 }) : /* @__PURE__ */ d("span", { className: ve.logoNode, children: e }), sl = Qr(
  ({
    isOpen: e,
    primaryColor: n,
    logo: t,
    messageCount: r = 0,
    className: i,
    ...o
    // aria-label, aria-expanded, aria-controls, onClick, etc.
  }, l) => {
    const a = !e && r > 0;
    return console.log(n), /* @__PURE__ */ A(
      "button",
      {
        ref: l,
        type: "button",
        className: Z(ve.button, e && ve.buttonOpen, i),
        ...o,
        children: [
          /* @__PURE__ */ A("span", { className: ve.iconWrap, children: [
            /* @__PURE__ */ d(
              "span",
              {
                className: Z(
                  ve.iconSlot,
                  ve.iconChat,
                  e && ve.iconHidden
                ),
                "aria-hidden": "true",
                children: t ? /* @__PURE__ */ d(wd, { logo: t }) : /* @__PURE__ */ d(bd, {})
              }
            ),
            /* @__PURE__ */ d(
              "span",
              {
                className: Z(
                  ve.iconSlot,
                  ve.iconClose,
                  !e && ve.iconHidden
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ d(xd, {})
              }
            )
          ] }),
          a && /* @__PURE__ */ d("span", { className: ve.unreadDot, "aria-hidden": "true" }),
          e && /* @__PURE__ */ d("span", { className: ve.ripple, "aria-hidden": "true" })
        ]
      }
    );
  }
);
sl.displayName = "TriggerButton";
const _d = "_root_153sx_8", vd = "_header_153sx_9", Cd = "_headerTop_153sx_51", Sd = "_logoWrap_153sx_59", Id = "_logoImg_153sx_68", Ed = "_closeButton_153sx_76", Ad = "_welcomeHeading_153sx_107", Td = "_bodyWrapper_153sx_10", Ld = "_scrollArea_153sx_11", Nd = "_cards_153sx_12", zd = "_card_153sx_12", Dd = "_cardClickable_153sx_192", Pd = "_cardLabel_153sx_210", Rd = "_recentRow_153sx_223", Bd = "_recentContent_153sx_229", Md = "_recentMeta_153sx_234", Fd = "_recentName_153sx_242", Od = "_recentTime_153sx_251", Hd = "_recentText_153sx_257", jd = "_avatar_153sx_272", $d = "_avatarSm_153sx_282", Ud = "_avatarImg_153sx_287", Vd = "_avatarCustom_153sx_294", Wd = "_avatarInitials_153sx_302", qd = "_statusRow_153sx_318", Zd = "_statusIcon_153sx_324", Gd = "_statusContent_153sx_329", Xd = "_statusTitle_153sx_334", Qd = "_statusUpdated_153sx_347", Yd = "_articlesCard_153sx_357", Kd = "_searchBar_153sx_365", Jd = "_searchInput_153sx_374", em = "_searchIcon_153sx_392", tm = "_articleList_153sx_400", nm = "_articleItem_153sx_407", rm = "_articleLink_153sx_411", im = "_articleTitle_153sx_443", lm = "_noResults_153sx_460", om = "_ctaSection_153sx_13", am = "_ctaButton_153sx_477", sm = "_nav_153sx_14", um = "_navItem_153sx_524", cm = "_navItemActive_153sx_557", hm = "_navLabel_153sx_565", P = {
  root: _d,
  header: vd,
  headerTop: Cd,
  logoWrap: Sd,
  logoImg: Id,
  closeButton: Ed,
  welcomeHeading: Ad,
  bodyWrapper: Td,
  scrollArea: Ld,
  cards: Nd,
  card: zd,
  cardClickable: Dd,
  cardLabel: Pd,
  recentRow: Rd,
  recentContent: Bd,
  recentMeta: Md,
  recentName: Fd,
  recentTime: Od,
  recentText: Hd,
  avatar: jd,
  avatarSm: $d,
  avatarImg: Ud,
  avatarCustom: Vd,
  avatarInitials: Wd,
  statusRow: qd,
  statusIcon: Zd,
  statusContent: Gd,
  statusTitle: Xd,
  statusUpdated: Qd,
  articlesCard: Yd,
  searchBar: Kd,
  searchInput: Jd,
  searchIcon: em,
  articleList: tm,
  articleItem: nm,
  articleLink: rm,
  articleTitle: im,
  noResults: lm,
  ctaSection: om,
  ctaButton: am,
  nav: sm,
  navItem: um,
  navItemActive: cm,
  navLabel: hm
}, fm = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), pm = () => /* @__PURE__ */ A(
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
      /* @__PURE__ */ d("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ d("path", { d: "m21 21-4.35-4.35" })
    ]
  }
), Ur = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "14",
    height: "14",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), dm = () => /* @__PURE__ */ A(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ d("circle", { cx: "12", cy: "12", r: "12", fill: "#22c55e" }),
      /* @__PURE__ */ d(
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
), mm = ({ active: e }) => /* @__PURE__ */ A(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    focusable: "false",
    fill: e ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ d("path", { d: "M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" }),
      /* @__PURE__ */ d("path", { d: "M9 21V12h6v9" })
    ]
  }
), gm = () => /* @__PURE__ */ d(
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
    children: /* @__PURE__ */ d("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
  }
), ym = () => /* @__PURE__ */ A(
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
      /* @__PURE__ */ d("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ d("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
      /* @__PURE__ */ d("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
    ]
  }
), km = () => /* @__PURE__ */ d(
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
    children: /* @__PURE__ */ d("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
  }
), bm = ({
  agentAvatar: e,
  agentName: n,
  size: t = "md"
}) => {
  const r = rt(() => {
    const i = n.trim().split(/\s+/);
    return i.length === 1 ? i[0].slice(0, 2).toUpperCase() : (i[0][0] + i[1][0]).toUpperCase();
  }, [n]);
  return /* @__PURE__ */ d(
    "span",
    {
      className: Z(P.avatar, t === "sm" && P.avatarSm),
      "aria-hidden": "true",
      children: typeof e == "string" ? /* @__PURE__ */ d(
        "img",
        {
          src: e,
          alt: "",
          className: P.avatarImg,
          draggable: !1
        }
      ) : e != null ? /* @__PURE__ */ d("span", { className: P.avatarCustom, children: e }) : /* @__PURE__ */ d("span", { className: P.avatarInitials, children: r })
    }
  );
}, xm = ({ logo: e }) => typeof e == "string" ? /* @__PURE__ */ d("span", { className: P.logoWrap, children: /* @__PURE__ */ d("img", { src: e, alt: "", className: P.logoImg, draggable: !1 }) }) : /* @__PURE__ */ d("span", { className: P.logoWrap, children: e }), ul = Xe(
  ({
    welcomeMessage: e = `Need support?
How can we help?`,
    welcomeSubMessage: n,
    agentName: t = "AI Assistant",
    agentAvatar: r,
    logo: i,
    recentMessage: o,
    recentMessageTime: l,
    statusText: a,
    statusUpdated: s,
    helpArticles: u,
    showHelpArticles: h = !1,
    onStartChat: c,
    onShowHelp: p,
    onClose: f,
    onArticleClick: m,
    className: b
  }) => {
    const [w, k] = ue(""), I = h && u && u.length > 0, C = rt(() => {
      if (!u) return [];
      if (!w.trim()) return u;
      const N = w.toLowerCase();
      return u.filter((R) => R.title.toLowerCase().includes(N));
    }, [u, w]), M = J(
      (N) => k(N.target.value),
      []
    ), F = o != null, _ = a != null;
    return /* @__PURE__ */ A("div", { className: Z(P.root, b), children: [
      /* @__PURE__ */ A("div", { className: P.header, children: [
        /* @__PURE__ */ A("div", { className: P.headerTop, children: [
          i ? /* @__PURE__ */ d(xm, { logo: i }) : /* @__PURE__ */ d("span", { className: P.logoWrap, "aria-hidden": "true" }),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: P.closeButton,
              onClick: f,
              "aria-label": "Close chat",
              children: /* @__PURE__ */ d(fm, {})
            }
          )
        ] }),
        /* @__PURE__ */ A("h1", { className: P.welcomeHeading, children: [
          e.split(`
`).map((N, R) => /* @__PURE__ */ A(Vn.Fragment, { children: [
            R > 0 && /* @__PURE__ */ d("br", {}),
            N
          ] }, R)),
          /* @__PURE__ */ d("br", {}),
          n == null ? void 0 : n.split(`
`).map((N, R) => /* @__PURE__ */ A(Vn.Fragment, { children: [
            R > 0 && /* @__PURE__ */ d("br", {}),
            N
          ] }, R))
        ] })
      ] }),
      /* @__PURE__ */ A("div", { className: P.bodyWrapper, children: [
        /* @__PURE__ */ A("div", { className: P.scrollArea, children: [
          /* @__PURE__ */ A("div", { className: P.cards, children: [
            F && /* @__PURE__ */ A(
              "button",
              {
                type: "button",
                className: Z(P.card, P.cardClickable),
                onClick: c,
                "aria-label": "View recent conversation",
                children: [
                  /* @__PURE__ */ d("p", { className: P.cardLabel, children: "Chat history" }),
                  /* @__PURE__ */ A("div", { className: P.recentRow, children: [
                    /* @__PURE__ */ d(
                      bm,
                      {
                        agentAvatar: r,
                        agentName: t,
                        size: "sm"
                      }
                    ),
                    /* @__PURE__ */ A("div", { className: P.recentContent, children: [
                      /* @__PURE__ */ A("div", { className: P.recentMeta, children: [
                        /* @__PURE__ */ d("span", { className: P.recentName, children: t }),
                        l && /* @__PURE__ */ d("span", { className: P.recentTime, children: l })
                      ] }),
                      /* @__PURE__ */ d("p", { className: P.recentText, children: o })
                    ] })
                  ] })
                ]
              }
            ),
            _ && /* @__PURE__ */ d("div", { className: P.card, children: /* @__PURE__ */ A("div", { className: P.statusRow, children: [
              /* @__PURE__ */ d("span", { className: P.statusIcon, children: /* @__PURE__ */ d(dm, {}) }),
              /* @__PURE__ */ A("div", { className: P.statusContent, children: [
                /* @__PURE__ */ A("p", { className: P.statusTitle, children: [
                  /* @__PURE__ */ d("strong", { children: "Status: " }),
                  a
                ] }),
                s && /* @__PURE__ */ d("p", { className: P.statusUpdated, children: s })
              ] })
            ] }) }),
            I && /* @__PURE__ */ A("div", { className: P.articlesCard, children: [
              /* @__PURE__ */ A("div", { className: P.searchBar, children: [
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "search",
                    className: P.searchInput,
                    placeholder: "Search for help",
                    value: w,
                    onChange: M,
                    "aria-label": "Search help articles"
                  }
                ),
                /* @__PURE__ */ d("span", { className: P.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ d(pm, {}) })
              ] }),
              /* @__PURE__ */ d("ul", { className: P.articleList, "aria-label": "Help articles", children: C.length > 0 ? C.map((N, R) => /* @__PURE__ */ d("li", { className: P.articleItem, children: N.href ? /* @__PURE__ */ A(
                "a",
                {
                  href: N.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: P.articleLink,
                  children: [
                    /* @__PURE__ */ d("span", { className: P.articleTitle, children: N.title }),
                    /* @__PURE__ */ d(Ur, {})
                  ]
                }
              ) : /* @__PURE__ */ A(
                "button",
                {
                  type: "button",
                  className: P.articleLink,
                  onClick: () => m == null ? void 0 : m(N),
                  children: [
                    /* @__PURE__ */ d("span", { className: P.articleTitle, children: N.title }),
                    /* @__PURE__ */ d(Ur, {})
                  ]
                }
              ) }, R)) : /* @__PURE__ */ d("li", { className: P.noResults, children: "No results found" }) })
            ] })
          ] }),
          /* @__PURE__ */ d("div", { className: P.ctaSection, children: /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: P.ctaButton,
              onClick: c,
              children: [
                /* @__PURE__ */ d(km, {}),
                "Send us a message"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ A("nav", { className: P.nav, "aria-label": "Widget navigation", children: [
          /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: Z(P.navItem, P.navItemActive),
              "aria-label": "Home",
              "aria-current": "page",
              children: [
                /* @__PURE__ */ d(mm, { active: !0 }),
                /* @__PURE__ */ d("span", { className: P.navLabel, children: "Home" })
              ]
            }
          ),
          /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: P.navItem,
              onClick: c,
              "aria-label": "Messages",
              children: [
                /* @__PURE__ */ d(gm, {}),
                /* @__PURE__ */ d("span", { className: P.navLabel, children: "Messages" })
              ]
            }
          ),
          I && p && /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: P.navItem,
              onClick: p,
              "aria-label": "Help",
              children: [
                /* @__PURE__ */ d(ym, {}),
                /* @__PURE__ */ d("span", { className: P.navLabel, children: "Help" })
              ]
            }
          )
        ] })
      ] })
    ] });
  }
);
ul.displayName = "WidgetHome";
const wm = "_root_2tms9_8", _m = "_header_2tms9_33", vm = "_title_2tms9_45", Cm = "_closeButton_2tms9_53", Sm = "_headerDivider_2tms9_84", Im = "_scrollArea_2tms9_96", Em = "_searchBarWrap_2tms9_118", Am = "_searchBar_2tms9_118", Tm = "_searchInput_2tms9_141", Lm = "_searchIcon_2tms9_158", Nm = "_articleList_2tms9_166", zm = "_articleItem_2tms9_173", Dm = "_articleLink_2tms9_177", Pm = "_articleTitle_2tms9_209", Rm = "_noResults_2tms9_221", Bm = "_nav_2tms9_231", Mm = "_navItem_2tms9_239", Fm = "_navItemActive_2tms9_270", Om = "_navLabel_2tms9_277", ee = {
  root: wm,
  header: _m,
  title: vm,
  closeButton: Cm,
  headerDivider: Sm,
  scrollArea: Im,
  searchBarWrap: Em,
  searchBar: Am,
  searchInput: Tm,
  searchIcon: Lm,
  articleList: Nm,
  articleItem: zm,
  articleLink: Dm,
  articleTitle: Pm,
  noResults: Rm,
  nav: Bm,
  navItem: Mm,
  navItemActive: Fm,
  navLabel: Om
}, Hm = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), jm = () => /* @__PURE__ */ A(
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
      /* @__PURE__ */ d("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ d("path", { d: "m21 21-4.35-4.35" })
    ]
  }
), Vr = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "14",
    height: "14",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), $m = () => /* @__PURE__ */ A(
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
      /* @__PURE__ */ d("path", { d: "M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" }),
      /* @__PURE__ */ d("path", { d: "M9 21V12h6v9" })
    ]
  }
), Um = () => /* @__PURE__ */ d(
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
    children: /* @__PURE__ */ d("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
  }
), Vm = ({ active: e }) => /* @__PURE__ */ A(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    focusable: "false",
    fill: e ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ d("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ d("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
      /* @__PURE__ */ d("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
    ]
  }
), cl = Xe(
  ({
    helpArticles: e,
    onGoHome: n,
    onStartChat: t,
    onClose: r,
    onArticleClick: i,
    className: o
  }) => {
    const [l, a] = ue(""), s = rt(() => {
      if (!l.trim()) return e;
      const h = l.toLowerCase();
      return e.filter((c) => c.title.toLowerCase().includes(h));
    }, [e, l]), u = J(
      (h) => a(h.target.value),
      []
    );
    return /* @__PURE__ */ A("div", { className: Z(ee.root, o), children: [
      /* @__PURE__ */ A("header", { className: ee.header, children: [
        /* @__PURE__ */ d("h1", { className: ee.title, children: "Help" }),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: ee.closeButton,
            onClick: r,
            "aria-label": "Close chat",
            children: /* @__PURE__ */ d(Hm, {})
          }
        ),
        /* @__PURE__ */ d("div", { className: ee.headerDivider, "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ A("div", { className: ee.scrollArea, children: [
        /* @__PURE__ */ d("div", { className: ee.searchBarWrap, children: /* @__PURE__ */ A("div", { className: ee.searchBar, children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "search",
              className: ee.searchInput,
              placeholder: "Search for help",
              value: l,
              onChange: u,
              "aria-label": "Search help articles",
              autoFocus: !0
            }
          ),
          /* @__PURE__ */ d("span", { className: ee.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ d(jm, {}) })
        ] }) }),
        /* @__PURE__ */ d("ul", { className: ee.articleList, "aria-label": "Help articles", children: s.length > 0 ? s.map((h, c) => /* @__PURE__ */ d("li", { className: ee.articleItem, children: h.href ? /* @__PURE__ */ A(
          "a",
          {
            href: h.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: ee.articleLink,
            children: [
              /* @__PURE__ */ d("span", { className: ee.articleTitle, children: h.title }),
              /* @__PURE__ */ d(Vr, {})
            ]
          }
        ) : /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            className: ee.articleLink,
            onClick: () => i == null ? void 0 : i(h),
            children: [
              /* @__PURE__ */ d("span", { className: ee.articleTitle, children: h.title }),
              /* @__PURE__ */ d(Vr, {})
            ]
          }
        ) }, c)) : /* @__PURE__ */ A("li", { className: ee.noResults, children: [
          "No articles match “",
          l,
          "”"
        ] }) })
      ] }),
      /* @__PURE__ */ A("nav", { className: ee.nav, "aria-label": "Widget navigation", children: [
        /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            className: ee.navItem,
            onClick: n,
            "aria-label": "Home",
            children: [
              /* @__PURE__ */ d($m, {}),
              /* @__PURE__ */ d("span", { className: ee.navLabel, children: "Home" })
            ]
          }
        ),
        /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            className: ee.navItem,
            onClick: t,
            "aria-label": "Messages",
            children: [
              /* @__PURE__ */ d(Um, {}),
              /* @__PURE__ */ d("span", { className: ee.navLabel, children: "Messages" })
            ]
          }
        ),
        /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            className: Z(ee.navItem, ee.navItemActive),
            "aria-label": "Help",
            "aria-current": "page",
            children: [
              /* @__PURE__ */ d(Vm, { active: !0 }),
              /* @__PURE__ */ d("span", { className: ee.navLabel, children: "Help" })
            ]
          }
        )
      ] })
    ] });
  }
);
cl.displayName = "WidgetHelp";
const Wm = "_root_1tykb_1", qm = "_header_1tykb_24", Zm = "_headerRight_1tykb_35", Gm = "_iconButton_1tykb_41", Xm = "_scrollArea_1tykb_68", Qm = "_contentWrapper_1tykb_90", Ym = "_title_1tykb_97", Km = "_updatedAt_1tykb_106", Jm = "_descriptionBox_1tykb_113", eg = "_articleContent_1tykb_123", Se = {
  root: Wm,
  header: qm,
  headerRight: Zm,
  iconButton: Gm,
  scrollArea: Xm,
  contentWrapper: Qm,
  title: Ym,
  updatedAt: Km,
  descriptionBox: Jm,
  articleContent: eg
}, tg = () => /* @__PURE__ */ d(
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
    children: /* @__PURE__ */ d("path", { d: "M15 18l-6-6 6-6" })
  }
), ng = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "currentColor",
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 4h6v6h-2V7.41l-4.29 4.3-1.42-1.42L16.59 6H14V4zm-4 16H4v-6h2v2.59l4.29-4.3 1.42 1.42L7.41 18H10v2z"
      }
    )
  }
), rg = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), hl = Xe(
  ({ article: e, onBack: n, onClose: t, className: r }) => /* @__PURE__ */ A("div", { className: Z(Se.root, r), children: [
    /* @__PURE__ */ A("header", { className: Se.header, children: [
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: Se.iconButton,
          onClick: n,
          "aria-label": "Go back",
          children: /* @__PURE__ */ d(tg, {})
        }
      ),
      /* @__PURE__ */ A("div", { className: Se.headerRight, children: [
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: Se.iconButton,
            "aria-label": "Expand",
            children: /* @__PURE__ */ d(ng, {})
          }
        ),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: Se.iconButton,
            onClick: t,
            "aria-label": "Close",
            children: /* @__PURE__ */ d(rg, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ d("div", { className: Se.scrollArea, children: /* @__PURE__ */ A("div", { className: Se.contentWrapper, children: [
      /* @__PURE__ */ d("h1", { className: Se.title, children: e.title }),
      e.updatedAt && /* @__PURE__ */ d("p", { className: Se.updatedAt, children: e.updatedAt }),
      e.description && /* @__PURE__ */ d("div", { className: Se.descriptionBox, children: e.description }),
      e.content && /* @__PURE__ */ d("div", { className: Se.articleContent, children: e.content })
    ] }) })
  ] })
);
hl.displayName = "WidgetArticle";
function vn() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}
function ig(e) {
  return typeof ReadableStream < "u" && e instanceof ReadableStream;
}
function fl(e, n) {
  return n && n.length > 0 ? n : e ? [
    {
      id: vn(),
      role: "assistant",
      content: e,
      timestamp: /* @__PURE__ */ new Date(),
      status: "done"
    }
  ] : [];
}
function lg(e, n, t, r = /* @__PURE__ */ new Date()) {
  return [
    ...e,
    {
      id: t,
      role: "user",
      content: n.trim(),
      timestamp: r,
      status: "done"
    }
  ];
}
function og(e, n, t = /* @__PURE__ */ new Date()) {
  return [
    ...e,
    {
      id: n,
      role: "assistant",
      content: "",
      timestamp: t,
      status: "loading"
    }
  ];
}
function ag(e, n) {
  return e.map(
    (t) => t.id === n ? { ...t, status: "streaming" } : t
  );
}
function Wr(e, n, t) {
  return t ? e.map(
    (r) => r.id === n ? { ...r, content: r.content + t } : r
  ) : e;
}
function qr(e, n, t, r, i = /* @__PURE__ */ new Date()) {
  return e.map(
    (o) => o.id === n ? {
      ...o,
      content: t,
      status: r,
      timestamp: i
    } : o
  );
}
function sg(e, n) {
  return e.map(
    (t) => t.id === n ? { ...t, status: "done" } : t
  );
}
function ug(e, n, t) {
  return e.map(
    (r) => r.id === n ? {
      ...r,
      status: "error",
      content: r.content || t
    } : r
  );
}
function cg(e) {
  const n = [...e].reverse().findIndex((i) => i.role === "assistant");
  let t = e;
  if (n !== -1) {
    const i = e.length - 1 - n;
    t = e.filter((o, l) => l !== i);
  }
  const r = [...t].reverse().findIndex((i) => i.role === "user");
  if (r !== -1) {
    const i = t.length - 1 - r;
    t = t.filter((o, l) => l !== i);
  }
  return t;
}
function hg(e, n) {
  return fl(e, n);
}
function fg({
  onMessage: e,
  welcomeMessage: n,
  initialMessages: t,
  messages: r,
  onMessagesChange: i
}) {
  const o = r !== void 0, l = de(!1);
  me(() => {
    process.env.NODE_ENV !== "production" && !l.current && o && t !== void 0 && (l.current = !0, console.warn(
      'useChat: Both "messages" (controlled) and "initialMessages" (uncontrolled) were passed. "initialMessages" will be ignored.'
    ));
  }, [o, t]);
  const [a, s] = ue(
    () => o ? [] : fl(n, t)
  ), [u, h] = ue(!1), [c, p] = ue(null), f = o ? r || [] : a, m = de(f);
  m.current = f;
  const b = de(r), w = de(null);
  r !== b.current && (b.current = r, w.current = null);
  const k = J(
    (R) => {
      if (o) {
        const O = w.current ?? m.current, x = R(O);
        w.current = x, i == null || i(x);
      } else
        s(R);
    },
    [o, i]
  ), I = de(null), C = J(
    async (R, O) => {
      const x = R.getReader(), T = new TextDecoder();
      let L = "";
      const V = (z) => {
        var G;
        const D = z.trim();
        if (!D) return "";
        const X = D.startsWith("data:") ? D.replace(/^data:\s*/, "") : D;
        try {
          const te = JSON.parse(X);
          return typeof ((G = te == null ? void 0 : te.message) == null ? void 0 : G.content) == "string" && te.message.content || typeof (te == null ? void 0 : te.content) == "string" && te.content || "";
        } catch {
          return z;
        }
      };
      k((z) => ag(z, O));
      try {
        for (; ; ) {
          const { done: X, value: G } = await x.read();
          if (X) break;
          const te = T.decode(G, { stream: !0 });
          L += te;
          const ne = L.split(/\r?\n/);
          L = ne.pop() ?? "";
          let g = "";
          for (const le of ne)
            g += V(le);
          g && k(
            (le) => Wr(le, O, g)
          );
        }
        const z = T.decode();
        L += z;
        const D = V(L);
        D && k(
          (X) => Wr(X, O, D)
        ), k((X) => sg(X, O));
      } catch (z) {
        throw k(
          (D) => ug(
            D,
            O,
            "Stream interrupted. Please try again."
          )
        ), z;
      } finally {
        x.releaseLock();
      }
    },
    [k]
  ), M = J(
    async (R) => {
      const O = R.trim();
      if (!O || u) return;
      p(null), h(!0);
      const x = vn(), T = vn(), L = /* @__PURE__ */ new Date(), V = m.current;
      k((z) => {
        const D = lg(z, O, x, L);
        return og(D, T, L);
      });
      try {
        const z = await e(O, V);
        ig(z) ? await C(z, T) : k(
          (D) => qr(D, T, z, "done")
        );
      } catch (z) {
        const D = z instanceof Error ? z.message : "Something went wrong.";
        p(D), k(
          (X) => qr(X, T, D, "error")
        );
      } finally {
        h(!1);
      }
    },
    [u, e, C, k]
  ), F = J(
    async (R) => {
      I.current = R.trim(), await M(R);
    },
    [M]
  ), _ = J(async () => {
    const R = I.current;
    R && (k((O) => cg(O)), p(null), await M(R));
  }, [M, k]), N = J(() => {
    k(
      () => hg(n, o ? void 0 : t)
    ), p(null), I.current = null;
  }, [n, o, t, k]);
  return {
    messages: f,
    sendMessage: F,
    isLoading: u,
    error: c,
    clearMessages: N,
    retryLast: _
  };
}
const pg = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
  "details > summary"
].join(", ");
function Zr(e) {
  return Array.from(
    e.querySelectorAll(pg)
  ).filter((n) => !n.closest("[hidden]") && n.offsetParent !== null);
}
function dg(e, n) {
  me(() => {
    if (!n || !e.current) return;
    const t = e.current, r = Zr(t);
    if (r.length > 0) {
      const i = requestAnimationFrame(() => r[0].focus());
      return () => cancelAnimationFrame(i);
    }
  }, [n, e]), me(() => {
    if (!n || !e.current) return;
    const t = e.current, r = (i) => {
      if (i.key !== "Tab") return;
      const o = Zr(t);
      if (o.length === 0) {
        i.preventDefault();
        return;
      }
      const l = o[0], a = o[o.length - 1];
      i.shiftKey ? document.activeElement === l && (i.preventDefault(), a.focus()) : document.activeElement === a && (i.preventDefault(), l.focus());
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [n, e]);
}
const pl = "(prefers-color-scheme: dark)";
function Gr() {
  return typeof window > "u" || !window.matchMedia ? "light" : window.matchMedia(pl).matches ? "dark" : "light";
}
function mg(e) {
  const [n, t] = ue(() => e !== "auto" ? e : Gr());
  return me(() => {
    if (e !== "auto") {
      t(e);
      return;
    }
    if (t(Gr()), typeof window > "u" || !window.matchMedia)
      return;
    const r = window.matchMedia(pl), i = (o) => {
      t(o.matches ? "dark" : "light");
    };
    return r.addEventListener ? (r.addEventListener("change", i), () => r.removeEventListener("change", i)) : (r.addListener(i), () => r.removeListener(i));
  }, [e]), n;
}
function gg({
  primaryColor: e
}) {
  const n = yg(e);
  return {
    "--ai-primary": e,
    "--ai-primary-fg": n,
    "--ai-user-bubble": e
  };
}
function yg(e) {
  const n = kg(e);
  if (!n) return "#ffffff";
  const [t, r, i] = n.map((s) => {
    const u = s / 255;
    return u <= 0.03928 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4);
  }), o = 0.2126 * t + 0.7152 * r + 0.0722 * i, l = (1 + 0.05) / (o + 0.05), a = (o + 0.05) / (0.05 + 0.05);
  return l >= a ? "#ffffff" : "#111827";
}
function kg(e) {
  const n = e.replace(/^#/, ""), t = n.length === 3 ? n.split("").map((i) => i + i).join("") : n;
  if (t.length !== 6) return null;
  const r = parseInt(t, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}
const bg = "_root_vmir2_25", xg = "_panelArea_vmir2_123", wg = "_isMaximized_vmir2_141", _g = "_isOpen_vmir2_169", vg = "_trigger_vmir2_194", Ue = {
  root: bg,
  "bottom-right": "_bottom-right_vmir2_110",
  "bottom-left": "_bottom-left_vmir2_116",
  panelArea: xg,
  isMaximized: wg,
  isOpen: _g,
  trigger: vg
}, un = 200, Cg = ({
  onMessage: e,
  agentName: n = "AI Assistant",
  agentAvatar: t,
  logo: r,
  theme: i = "auto",
  primaryColor: o = "#2563EB",
  placeholder: l = "Type a message…",
  welcomeMessage: a,
  welcomeSubMessage: s,
  recentMessage: u,
  recentMessageTime: h,
  statusText: c,
  statusUpdated: p,
  helpArticles: f,
  showHelpArticles: m = !1,
  defaultView: b = "home",
  isOpen: w,
  onOpenChange: k,
  position: I = "bottom-right",
  className: C,
  style: M,
  initialMessages: F,
  showHistory: _ = !1,
  messages: N,
  onMessagesChange: R
}) => {
  const [O, x] = ue(!1);
  me(() => x(!0), []);
  const T = w !== void 0, [L, V] = ue(!1), z = T ? w : L, D = J(
    (ae) => {
      T || V(ae), k == null || k(ae);
    },
    [T, k]
  ), X = J(() => D(!0), [D]);
  console.log(X);
  const G = J(() => D(!1), [D]), te = J(() => D(!z), [z, D]), [ne, g] = ue(b), [le, ce] = ue(b === "chat"), [y, xe] = ue(null), re = de(null), [ie, Oe] = ue(!1), Ne = J(() => Oe((ae) => !ae), []), Re = J(() => {
    re.current && clearTimeout(re.current), g("chat"), ce(!0);
  }, []), Be = J(() => {
    ce(!1), re.current = setTimeout(
      () => g("home"),
      un
    );
  }, []), Ye = J(() => {
    re.current && clearTimeout(re.current), ne === "chat" ? (ce(!1), re.current = setTimeout(
      () => g("help"),
      un
    )) : g("help");
  }, [ne]), kt = J(
    (ae) => {
      re.current && clearTimeout(re.current), xe(ae), ne === "chat" ? (ce(!1), re.current = setTimeout(
        () => g("article"),
        un
      )) : g("article");
    },
    [ne]
  ), Ot = J(() => {
    g("home");
  }, []);
  me(() => {
    z ? ne === "chat" && ce(!0) : (re.current && clearTimeout(re.current), ce(!1), Oe(!1));
  }, [z, ne]), me(() => () => {
    re.current && clearTimeout(re.current);
  }, []);
  const Ht = z && ne === "home" && !le, bt = z && ne === "help" && !le, xt = z && ne === "article" && !le && y != null, ot = z && le, jt = mg(i), wt = gg({ primaryColor: o }), { messages: We, sendMessage: $t, isLoading: Ut, error: Vt, clearMessages: Wt, retryLast: qt } = fg({
    onMessage: e,
    welcomeMessage: a,
    initialMessages: F,
    messages: N,
    onMessagesChange: R
  }), v = _ && We.length > 0, E = We[We.length - 1], H = v ? E == null ? void 0 : E.content : u, $ = v ? E ? new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  }).format(E.timestamp) : void 0 : h, q = de(null), ye = de(null);
  dg(q, ot), me(() => {
    var ae;
    z || (ae = ye.current) == null || ae.focus();
  }, [z]), me(() => {
    if (!z) return;
    const ae = (He) => {
      He.key === "Escape" && (He.preventDefault(), G());
    };
    return document.addEventListener("keydown", ae), () => document.removeEventListener("keydown", ae);
  }, [z, G]);
  const Ee = Xr(), Ae = `${Ee}-label`;
  return O ? /* @__PURE__ */ A(
    "div",
    {
      className: Z(
        Ue.root,
        Ue[I],
        z && Ue.isOpen,
        ie && Ue.isMaximized,
        C
      ),
      style: { ...wt, ...M },
      "data-theme": jt,
      children: [
        Ht && /* @__PURE__ */ d(
          ul,
          {
            className: Ue.panelArea,
            welcomeMessage: a,
            welcomeSubMessage: s,
            agentName: n,
            agentAvatar: t,
            logo: r,
            recentMessage: H,
            recentMessageTime: $,
            statusText: c,
            statusUpdated: p,
            helpArticles: f,
            showHelpArticles: m,
            onStartChat: Re,
            onShowHelp: Ye,
            onArticleClick: kt,
            onClose: G
          }
        ),
        bt && f && f.length > 0 && /* @__PURE__ */ d(
          cl,
          {
            className: Ue.panelArea,
            helpArticles: f,
            onGoHome: Be,
            onStartChat: Re,
            onArticleClick: kt,
            onClose: G
          }
        ),
        xt && /* @__PURE__ */ d(
          hl,
          {
            className: Ue.panelArea,
            article: y,
            onBack: Ot,
            onClose: G
          }
        ),
        /* @__PURE__ */ d(
          al,
          {
            ref: q,
            isOpen: ot,
            onClose: G,
            onBack: Be,
            messages: We,
            isLoading: Ut,
            error: Vt,
            onSend: $t,
            onRetry: qt,
            onClear: Wt,
            agentName: n,
            agentAvatar: t,
            logo: r,
            placeholder: l,
            dialogId: Ee,
            dialogLabelId: Ae,
            isMaximized: ie,
            onMaximizeToggle: Ne
          }
        ),
        !ie && /* @__PURE__ */ d(
          sl,
          {
            ref: ye,
            className: Ue.trigger,
            isOpen: z,
            onClick: te,
            primaryColor: o,
            logo: r,
            "aria-expanded": z,
            "aria-controls": Ee,
            "aria-label": z ? "Close chat" : "Open chat"
          }
        )
      ]
    }
  ) : null;
};
Cg.displayName = "ChatWidget";
const Ag = () => {
  const e = de(null);
  return me(() => {
  }, []), e;
}, Tg = (e) => rt(() => e instanceof ReadableStream, [e]), Sg = dl(null), Lg = ({ config: e, children: n }) => /* @__PURE__ */ d(Sg.Provider, { value: e, children: n });
export {
  Lg as AIInterfaceProvider,
  Yr as ChatHeader,
  al as ChatPanel,
  Cg as ChatWidget,
  ol as InputBar,
  il as MessageBubble,
  ll as MessageList,
  sl as TriggerButton,
  Cn as TypingIndicator,
  cl as WidgetHelp,
  ul as WidgetHome,
  fg as useChat,
  dg as useFocusTrap,
  Ag as useScrollAnchor,
  Tg as useStreamDetection,
  mg as useTheme
};
