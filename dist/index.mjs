import Vn, { memo as Ze, useMemo as nt, useState as oe, useCallback as J, useRef as Ae, useEffect as me, useLayoutEffect as Wn, useId as Zr, forwardRef as Gr, createContext as hl } from "react";
import { jsxs as A, jsx as d, Fragment as hn } from "react/jsx-runtime";
import './index.css';const q = (...e) => e.filter(Boolean).join(" "), fl = "_root_1f6v0_23", pl = "_isMaximized_1f6v0_52", dl = "_divider_1f6v0_34", ml = "_identity_1f6v0_10", gl = "_logo_1f6v0_11", yl = "_logoImg_1f6v0_91", kl = "_avatar_1f6v0_12", bl = "_avatarImg_1f6v0_119", xl = "_avatarCustom_1f6v0_129", wl = "_avatarInitials_1f6v0_141", _l = "_onlineDot_1f6v0_162", vl = "_nameGroup_1f6v0_13", Cl = "_agentName_1f6v0_14", Sl = "_statusLine_1f6v0_15", Il = "_onlineStatus_1f6v0_230", El = "_onlinePip_1f6v0_240", Al = "_actions_1f6v0_16", Tl = "_iconButton_1f6v0_311", Ll = "_backButton_1f6v0_352", Nl = "_clearButton_1f6v0_17", zl = "_closeButton_1f6v0_18", Dl = "_maximizeButton_1f6v0_379", Z = {
  root: fl,
  isMaximized: pl,
  divider: dl,
  identity: ml,
  logo: gl,
  logoImg: yl,
  avatar: kl,
  avatarImg: bl,
  avatarCustom: xl,
  avatarInitials: wl,
  onlineDot: _l,
  nameGroup: vl,
  agentName: Cl,
  statusLine: Sl,
  onlineStatus: Il,
  onlinePip: El,
  actions: Al,
  iconButton: Tl,
  backButton: Ll,
  clearButton: Nl,
  closeButton: zl,
  maximizeButton: Dl
}, Pl = "_root_1k3nu_24", Bl = "_rootBubble_1k3nu_46", Rl = "_dotsBubble_1k3nu_55", Ml = "_rootInline_1k3nu_66", Fl = "_dotsInline_1k3nu_77", Ol = "_rootStandalone_1k3nu_88", Hl = "_dotsStandalone_1k3nu_102", jl = "_dots_1k3nu_9", $l = "_dot_1k3nu_9", Ul = "_dot1_1k3nu_128", Vl = "_dot2_1k3nu_131", Wl = "_dot3_1k3nu_134", ql = "_inlineLabel_1k3nu_167", Zl = "_caption_1k3nu_179", ae = {
  root: Pl,
  rootBubble: Bl,
  dotsBubble: Rl,
  rootInline: Ml,
  dotsInline: Fl,
  rootStandalone: Ol,
  dotsStandalone: Hl,
  dots: jl,
  dot: $l,
  dot1: Ul,
  dot2: Vl,
  dot3: Wl,
  inlineLabel: ql,
  caption: Zl
}, Gl = {
  bubble: "Thinking…",
  inline: "Assistant is typing",
  standalone: "Thinking…"
}, Cn = Ze(
  ({ variant: e = "bubble", label: t, caption: n, className: r }) => {
    const i = t ?? Gl[e], o = n ?? i, l = e === "bubble", a = e === "inline", s = e === "standalone";
    return /* @__PURE__ */ A(
      "span",
      {
        className: q(
          ae.root,
          l && ae.rootBubble,
          a && ae.rootInline,
          s && ae.rootStandalone,
          r
        ),
        role: "status",
        "aria-live": "polite",
        "aria-label": i,
        children: [
          /* @__PURE__ */ A(
            "span",
            {
              className: q(
                ae.dots,
                l && ae.dotsBubble,
                a && ae.dotsInline,
                s && ae.dotsStandalone
              ),
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ d("span", { className: q(ae.dot, ae.dot1) }),
                /* @__PURE__ */ d("span", { className: q(ae.dot, ae.dot2) }),
                /* @__PURE__ */ d("span", { className: q(ae.dot, ae.dot3) })
              ]
            }
          ),
          s && /* @__PURE__ */ d("span", { className: ae.caption, "aria-hidden": "true", children: o }),
          a && /* @__PURE__ */ d("span", { className: ae.inlineLabel, "aria-hidden": "true", children: "Typing…" })
        ]
      }
    );
  }
);
Cn.displayName = "TypingIndicator";
const Xl = () => /* @__PURE__ */ d(
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
), Ql = () => /* @__PURE__ */ d(
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
), Yl = () => /* @__PURE__ */ d(
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
), Kl = () => /* @__PURE__ */ d(
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
), Jl = () => /* @__PURE__ */ d(
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
), eo = ({ agentAvatar: e, agentName: t }) => {
  const n = nt(() => {
    const r = t.trim().split(/\s+/);
    return r.length === 1 ? r[0].slice(0, 2).toUpperCase() : (r[0][0] + r[1][0]).toUpperCase();
  }, [t]);
  return /* @__PURE__ */ A("span", { className: Z.avatar, "aria-hidden": "true", children: [
    typeof e == "string" ? /* @__PURE__ */ d(
      "img",
      {
        src: e,
        alt: "",
        className: Z.avatarImg,
        draggable: !1
      }
    ) : e != null ? /* @__PURE__ */ d("span", { className: Z.avatarCustom, children: e }) : /* @__PURE__ */ d("span", { className: Z.avatarInitials, children: n }),
    /* @__PURE__ */ d("span", { className: Z.onlineDot, "aria-hidden": "true" })
  ] });
}, to = ({ logo: e }) => typeof e == "string" ? /* @__PURE__ */ d("span", { className: Z.logo, "aria-hidden": "true", children: /* @__PURE__ */ d("img", { src: e, alt: "", className: Z.logoImg, draggable: !1 }) }) : /* @__PURE__ */ d("span", { className: Z.logo, "aria-hidden": "true", children: e }), Xr = Ze(
  ({
    agentName: e = "AI Assistant",
    agentAvatar: t,
    logo: n,
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
      className: q(
        Z.root,
        u && Z.isMaximized,
        s
      ),
      children: [
        o && /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: q(Z.iconButton, Z.backButton),
            onClick: o,
            "aria-label": "Go back",
            title: "Go back",
            children: /* @__PURE__ */ d(Xl, {})
          }
        ),
        /* @__PURE__ */ A("div", { className: Z.identity, children: [
          n && /* @__PURE__ */ d(to, { logo: n }),
          /* @__PURE__ */ d(eo, { agentAvatar: t, agentName: e }),
          /* @__PURE__ */ A("div", { className: Z.nameGroup, children: [
            /* @__PURE__ */ d(
              "h2",
              {
                id: a,
                className: Z.agentName,
                title: e,
                children: e
              }
            ),
            /* @__PURE__ */ d("div", { className: Z.statusLine, children: r ? /* @__PURE__ */ d(Cn, { variant: "inline" }) : /* @__PURE__ */ A(
              "span",
              {
                className: Z.onlineStatus,
                role: "status",
                "aria-label": "Assistant is online",
                children: [
                  /* @__PURE__ */ d("span", { className: Z.onlinePip, "aria-hidden": "true" }),
                  "Online"
                ]
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ A("div", { className: Z.actions, role: "group", "aria-label": "Chat controls", children: [
          l && /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: q(Z.iconButton, Z.clearButton),
              onClick: l,
              "aria-label": "Clear conversation",
              title: "Clear conversation",
              children: /* @__PURE__ */ d(Jl, {})
            }
          ),
          h && /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: q(Z.iconButton, Z.maximizeButton),
              onClick: h,
              "aria-label": u ? "Restore window size" : "Maximize window",
              title: u ? "Restore" : "Maximize",
              children: u ? /* @__PURE__ */ d(Kl, {}) : /* @__PURE__ */ d(Yl, {})
            }
          ),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: q(Z.iconButton, Z.closeButton),
              onClick: i,
              "aria-label": "Close chat",
              title: "Close chat",
              children: /* @__PURE__ */ d(Ql, {})
            }
          )
        ] }),
        /* @__PURE__ */ d("div", { className: Z.divider, "aria-hidden": "true" })
      ]
    }
  )
);
Xr.displayName = "ChatHeader";
const no = "_row_ztc08_15", ro = "_timestamp_ztc08_24", io = "_rowUser_ztc08_31", lo = "_rowAssistant_ztc08_36", oo = "_avatar_ztc08_42", ao = "_bubble_ztc08_72", so = "_bubbleUser_ztc08_102", uo = "_bubbleDone_ztc08_111", co = "_bubbleLoading_ztc08_119", ho = "_bubbleStreaming_ztc08_129", fo = "_bubbleError_ztc08_137", po = "_errorBody_ztc08_198", mo = "_errorMessage_ztc08_204", go = "_errorIcon_ztc08_212", yo = "_retryButton_ztc08_221", ko = "_timestampUser_ztc08_288", bo = "_timestampAssistant_ztc08_292", le = {
  row: no,
  timestamp: ro,
  rowUser: io,
  rowAssistant: lo,
  avatar: oo,
  bubble: ao,
  bubbleUser: so,
  bubbleDone: uo,
  bubbleLoading: co,
  bubbleStreaming: ho,
  bubbleError: fo,
  errorBody: po,
  errorMessage: mo,
  errorIcon: go,
  retryButton: yo,
  timestampUser: ko,
  timestampAssistant: bo
};
function xo(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const wo = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, _o = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, vo = {};
function qn(e, t) {
  return (vo.jsx ? _o : wo).test(e);
}
const Co = /[ \t\n\f\r]/g;
function So(e) {
  return typeof e == "object" ? e.type === "text" ? Zn(e.value) : !1 : Zn(e);
}
function Zn(e) {
  return e.replace(Co, "") === "";
}
class gt {
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
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
gt.prototype.normal = {};
gt.prototype.property = {};
gt.prototype.space = void 0;
function Qr(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new gt(n, r, t);
}
function fn(e) {
  return e.toLowerCase();
}
class ge {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
ge.prototype.attribute = "";
ge.prototype.booleanish = !1;
ge.prototype.boolean = !1;
ge.prototype.commaOrSpaceSeparated = !1;
ge.prototype.commaSeparated = !1;
ge.prototype.defined = !1;
ge.prototype.mustUseProperty = !1;
ge.prototype.number = !1;
ge.prototype.overloadedBoolean = !1;
ge.prototype.property = "";
ge.prototype.spaceSeparated = !1;
ge.prototype.space = void 0;
let Io = 0;
const O = Ge(), te = Ge(), pn = Ge(), I = Ge(), Y = Ge(), et = Ge(), be = Ge();
function Ge() {
  return 2 ** ++Io;
}
const dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: O,
  booleanish: te,
  commaOrSpaceSeparated: be,
  commaSeparated: et,
  number: I,
  overloadedBoolean: pn,
  spaceSeparated: Y
}, Symbol.toStringTag, { value: "Module" })), Zt = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(dn)
);
class Sn extends ge {
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
  constructor(t, n, r, i) {
    let o = -1;
    if (super(t, n), Gn(this, "space", i), typeof r == "number")
      for (; ++o < Zt.length; ) {
        const l = Zt[o];
        Gn(this, Zt[o], (r & dn[l]) === dn[l]);
      }
  }
}
Sn.prototype.defined = !0;
function Gn(e, t, n) {
  n && (e[t] = n);
}
function rt(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new Sn(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[fn(r)] = r, n[fn(o.attribute)] = r;
  }
  return new gt(t, n, e.space);
}
const Yr = rt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: te,
    ariaAutoComplete: null,
    ariaBusy: te,
    ariaChecked: te,
    ariaColCount: I,
    ariaColIndex: I,
    ariaColSpan: I,
    ariaControls: Y,
    ariaCurrent: null,
    ariaDescribedBy: Y,
    ariaDetails: null,
    ariaDisabled: te,
    ariaDropEffect: Y,
    ariaErrorMessage: null,
    ariaExpanded: te,
    ariaFlowTo: Y,
    ariaGrabbed: te,
    ariaHasPopup: null,
    ariaHidden: te,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Y,
    ariaLevel: I,
    ariaLive: null,
    ariaModal: te,
    ariaMultiLine: te,
    ariaMultiSelectable: te,
    ariaOrientation: null,
    ariaOwns: Y,
    ariaPlaceholder: null,
    ariaPosInSet: I,
    ariaPressed: te,
    ariaReadOnly: te,
    ariaRelevant: null,
    ariaRequired: te,
    ariaRoleDescription: Y,
    ariaRowCount: I,
    ariaRowIndex: I,
    ariaRowSpan: I,
    ariaSelected: te,
    ariaSetSize: I,
    ariaSort: null,
    ariaValueMax: I,
    ariaValueMin: I,
    ariaValueNow: I,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Kr(e, t) {
  return t in e ? e[t] : t;
}
function Jr(e, t) {
  return Kr(e, t.toLowerCase());
}
const Eo = rt({
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
    accept: et,
    acceptCharset: Y,
    accessKey: Y,
    action: null,
    allow: null,
    allowFullScreen: O,
    allowPaymentRequest: O,
    allowUserMedia: O,
    alt: null,
    as: null,
    async: O,
    autoCapitalize: null,
    autoComplete: Y,
    autoFocus: O,
    autoPlay: O,
    blocking: Y,
    capture: null,
    charSet: null,
    checked: O,
    cite: null,
    className: Y,
    cols: I,
    colSpan: null,
    content: null,
    contentEditable: te,
    controls: O,
    controlsList: Y,
    coords: I | et,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: O,
    defer: O,
    dir: null,
    dirName: null,
    disabled: O,
    download: pn,
    draggable: te,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: O,
    formTarget: null,
    headers: Y,
    height: I,
    hidden: pn,
    high: I,
    href: null,
    hrefLang: null,
    htmlFor: Y,
    httpEquiv: Y,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: O,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: O,
    itemId: null,
    itemProp: Y,
    itemRef: Y,
    itemScope: O,
    itemType: Y,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: O,
    low: I,
    manifest: null,
    max: null,
    maxLength: I,
    media: null,
    method: null,
    min: null,
    minLength: I,
    multiple: O,
    muted: O,
    name: null,
    nonce: null,
    noModule: O,
    noValidate: O,
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
    open: O,
    optimum: I,
    pattern: null,
    ping: Y,
    placeholder: null,
    playsInline: O,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: O,
    referrerPolicy: null,
    rel: Y,
    required: O,
    reversed: O,
    rows: I,
    rowSpan: I,
    sandbox: Y,
    scope: null,
    scoped: O,
    seamless: O,
    selected: O,
    shadowRootClonable: O,
    shadowRootDelegatesFocus: O,
    shadowRootMode: null,
    shape: null,
    size: I,
    sizes: null,
    slot: null,
    span: I,
    spellCheck: te,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: I,
    step: null,
    style: null,
    tabIndex: I,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: O,
    useMap: null,
    value: te,
    width: I,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Y,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: I,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: I,
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
    compact: O,
    // Lists. Use CSS to reduce space between items instead
    declare: O,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: I,
    // `<img>` and `<object>`
    leftMargin: I,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: I,
    // `<body>`
    marginWidth: I,
    // `<body>`
    noResize: O,
    // `<frame>`
    noHref: O,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: O,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: O,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: I,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: te,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: I,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: I,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: O,
    disableRemotePlayback: O,
    prefix: null,
    property: null,
    results: I,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Jr
}), Ao = rt({
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
    about: be,
    accentHeight: I,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: I,
    amplitude: I,
    arabicForm: null,
    ascent: I,
    attributeName: null,
    attributeType: null,
    azimuth: I,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: I,
    by: null,
    calcMode: null,
    capHeight: I,
    className: Y,
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
    descent: I,
    diffuseConstant: I,
    direction: null,
    display: null,
    dur: null,
    divisor: I,
    dominantBaseline: null,
    download: O,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: I,
    enableBackground: null,
    end: null,
    event: null,
    exponent: I,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: I,
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
    g1: et,
    g2: et,
    glyphName: et,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: I,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: I,
    horizOriginX: I,
    horizOriginY: I,
    id: null,
    ideographic: I,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: I,
    k: I,
    k1: I,
    k2: I,
    k3: I,
    k4: I,
    kernelMatrix: be,
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
    limitingConeAngle: I,
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
    mediaSize: I,
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
    overlinePosition: I,
    overlineThickness: I,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: I,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Y,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: I,
    pointsAtY: I,
    pointsAtZ: I,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: be,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: be,
    rev: be,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: be,
    requiredFeatures: be,
    requiredFonts: be,
    requiredFormats: be,
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
    specularConstant: I,
    specularExponent: I,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: I,
    strikethroughThickness: I,
    string: null,
    stroke: null,
    strokeDashArray: be,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: I,
    strokeOpacity: I,
    strokeWidth: null,
    style: null,
    surfaceScale: I,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: be,
    tabIndex: I,
    tableValues: null,
    target: null,
    targetX: I,
    targetY: I,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: be,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: I,
    underlineThickness: I,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: I,
    values: null,
    vAlphabetic: I,
    vMathematical: I,
    vectorEffect: null,
    vHanging: I,
    vIdeographic: I,
    version: null,
    vertAdvY: I,
    vertOriginX: I,
    vertOriginY: I,
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
    xHeight: I,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Kr
}), ei = rt({
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
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), ti = rt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Jr
}), ni = rt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), To = {
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
}, Lo = /[A-Z]/g, Xn = /-[a-z]/g, No = /^data[-\w.:]+$/i;
function zo(e, t) {
  const n = fn(t);
  let r = t, i = ge;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && No.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(Xn, Po);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!Xn.test(o)) {
        let l = o.replace(Lo, Do);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    i = Sn;
  }
  return new i(r, t);
}
function Do(e) {
  return "-" + e.toLowerCase();
}
function Po(e) {
  return e.charAt(1).toUpperCase();
}
const Bo = Qr([Yr, Eo, ei, ti, ni], "html"), In = Qr([Yr, Ao, ei, ti, ni], "svg");
function Ro(e) {
  return e.join(" ").trim();
}
var Lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ri(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var En = {}, Qn = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Mo = /\n/g, Fo = /^\s*/, Oo = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Ho = /^:\s*/, jo = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, $o = /^[;\s]*/, Uo = /^\s+|\s+$/g, Vo = `
`, Yn = "/", Kn = "*", We = "", Wo = "comment", qo = "declaration";
function Zo(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(m) {
    var b = m.match(Mo);
    b && (n += b.length);
    var w = m.lastIndexOf(Vo);
    r = ~w ? m.length - w : r + m.length;
  }
  function o() {
    var m = { line: n, column: r };
    return function(b) {
      return b.position = new l(m), u(), b;
    };
  }
  function l(m) {
    this.start = m, this.end = { line: n, column: r }, this.source = t.source;
  }
  l.prototype.content = e;
  function a(m) {
    var b = new Error(
      t.source + ":" + n + ":" + r + ": " + m
    );
    if (b.reason = m, b.filename = t.source, b.line = n, b.column = r, b.source = e, !t.silent) throw b;
  }
  function s(m) {
    var b = m.exec(e);
    if (b) {
      var w = b[0];
      return i(w), e = e.slice(w.length), b;
    }
  }
  function u() {
    s(Fo);
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
      for (var b = 2; We != e.charAt(b) && (Kn != e.charAt(b) || Yn != e.charAt(b + 1)); )
        ++b;
      if (b += 2, We === e.charAt(b - 1))
        return a("End of comment missing");
      var w = e.slice(2, b - 2);
      return r += 2, i(w), e = e.slice(b), r += 2, m({
        type: Wo,
        comment: w
      });
    }
  }
  function p() {
    var m = o(), b = s(Oo);
    if (b) {
      if (c(), !s(Ho)) return a("property missing ':'");
      var w = s(jo), k = m({
        type: qo,
        property: Jn(b[0].replace(Qn, We)),
        value: w ? Jn(w[0].replace(Qn, We)) : We
      });
      return s($o), k;
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
  return e ? e.replace(Uo, We) : We;
}
var Go = Zo, Xo = Lt && Lt.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(En, "__esModule", { value: !0 });
En.default = Yo;
const Qo = Xo(Go);
function Yo(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = (0, Qo.default)(e), i = typeof t == "function";
  return r.forEach((o) => {
    if (o.type !== "declaration")
      return;
    const { property: l, value: a } = o;
    i ? t(l, a, o) : a && (n = n || {}, n[l] = a);
  }), n;
}
var Bt = {};
Object.defineProperty(Bt, "__esModule", { value: !0 });
Bt.camelCase = void 0;
var Ko = /^--[a-zA-Z0-9_-]+$/, Jo = /-([a-z])/g, ea = /^[^-]+$/, ta = /^-(webkit|moz|ms|o|khtml)-/, na = /^-(ms)-/, ra = function(e) {
  return !e || ea.test(e) || Ko.test(e);
}, ia = function(e, t) {
  return t.toUpperCase();
}, er = function(e, t) {
  return "".concat(t, "-");
}, la = function(e, t) {
  return t === void 0 && (t = {}), ra(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(na, er) : e = e.replace(ta, er), e.replace(Jo, ia));
};
Bt.camelCase = la;
var oa = Lt && Lt.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, aa = oa(En), sa = Bt;
function mn(e, t) {
  var n = {};
  return !e || typeof e != "string" || (0, aa.default)(e, function(r, i) {
    r && i && (n[(0, sa.camelCase)(r, t)] = i);
  }), n;
}
mn.default = mn;
var ua = mn;
const ca = /* @__PURE__ */ ri(ua), ii = li("end"), An = li("start");
function li(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function ha(e) {
  const t = An(e), n = ii(e);
  if (t && n)
    return { start: t, end: n };
}
function ct(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? tr(e.position) : "start" in e || "end" in e ? tr(e) : "line" in e || "column" in e ? gn(e) : "";
}
function gn(e) {
  return nr(e && e.line) + ":" + nr(e && e.column);
}
function tr(e) {
  return gn(e && e.start) + "-" + gn(e && e.end);
}
function nr(e) {
  return e && typeof e == "number" ? e : 1;
}
class ue extends Error {
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
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", o = {}, l = !1;
    if (n && ("line" in n && "column" in n ? o = { place: n } : "start" in n && "end" in n ? o = { place: n } : "type" in n ? o = {
      ancestors: [n],
      place: n.position
    } : o = { ...n }), typeof t == "string" ? i = t : !o.cause && t && (l = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
      const s = r.indexOf(":");
      s === -1 ? o.ruleId = r : (o.source = r.slice(0, s), o.ruleId = r.slice(s + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const s = o.ancestors[o.ancestors.length - 1];
      s && (o.place = s.position);
    }
    const a = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = ct(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
ue.prototype.file = "";
ue.prototype.name = "";
ue.prototype.reason = "";
ue.prototype.message = "";
ue.prototype.stack = "";
ue.prototype.column = void 0;
ue.prototype.line = void 0;
ue.prototype.ancestors = void 0;
ue.prototype.cause = void 0;
ue.prototype.fatal = void 0;
ue.prototype.place = void 0;
ue.prototype.ruleId = void 0;
ue.prototype.source = void 0;
const Tn = {}.hasOwnProperty, fa = /* @__PURE__ */ new Map(), pa = /[A-Z]/g, da = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), ma = /* @__PURE__ */ new Set(["td", "th"]), oi = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function ga(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Ca(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = va(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? In : Bo,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = ai(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function ai(e, t, n) {
  if (t.type === "element")
    return ya(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return ka(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return xa(e, t, n);
  if (t.type === "mdxjsEsm")
    return ba(e, t);
  if (t.type === "root")
    return wa(e, t, n);
  if (t.type === "text")
    return _a(e, t);
}
function ya(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = In, e.schema = i), e.ancestors.push(t);
  const o = ui(e, t.tagName, !1), l = Sa(e, t);
  let a = Nn(e, t);
  return da.has(t.tagName) && (a = a.filter(function(s) {
    return typeof s == "string" ? !So(s) : !0;
  })), si(e, l, o, t), Ln(l, a), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function ka(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  dt(e, t.position);
}
function ba(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  dt(e, t.position);
}
function xa(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = In, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : ui(e, t.name, !0), l = Ia(e, t), a = Nn(e, t);
  return si(e, l, o, t), Ln(l, a), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function wa(e, t, n) {
  const r = {};
  return Ln(r, Nn(e, t)), e.create(t, e.Fragment, r, n);
}
function _a(e, t) {
  return t.value;
}
function si(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Ln(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function va(e, t, n) {
  return r;
  function r(i, o, l, a) {
    const u = Array.isArray(l.children) ? n : t;
    return a ? u(o, l, a) : u(o, l);
  }
}
function Ca(e, t) {
  return n;
  function n(r, i, o, l) {
    const a = Array.isArray(o.children), s = An(r);
    return t(
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
function Sa(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && Tn.call(t.properties, i)) {
      const o = Ea(e, i, t.properties[i]);
      if (o) {
        const [l, a] = o;
        e.tableCellAlignToStyle && l === "align" && typeof a == "string" && ma.has(t.tagName) ? r = a : n[l] = a;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function Ia(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const l = o.expression;
        l.type;
        const a = l.properties[0];
        a.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(a.argument)
        );
      } else
        dt(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, o = e.evaluater.evaluateExpression(a.expression);
        } else
          dt(e, t.position);
      else
        o = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return n;
}
function Nn(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : fa;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let l;
    if (e.passKeys) {
      const s = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (s) {
        const u = i.get(s) || 0;
        l = s + "-" + u, i.set(s, u + 1);
      }
    }
    const a = ai(e, o, l);
    a !== void 0 && n.push(a);
  }
  return n;
}
function Ea(e, t, n) {
  const r = zo(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? xo(n) : Ro(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Aa(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = Ta(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? To[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Aa(e, t) {
  try {
    return ca(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new ue("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = oi + "#cannot-parse-style-attribute", i;
  }
}
function ui(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
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
    r = qn(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return Tn.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  dt(e);
}
function dt(e, t) {
  const n = new ue(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = oi + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Ta(e) {
  const t = {};
  let n;
  for (n in e)
    Tn.call(e, n) && (t[La(n)] = e[n]);
  return t;
}
function La(e) {
  let t = e.replace(pa, Na);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Na(e) {
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
}, za = {};
function zn(e, t) {
  const n = za, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return ci(e, r, i);
}
function ci(e, t, n) {
  if (Da(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return rr(e.children, t, n);
  }
  return Array.isArray(e) ? rr(e, t, n) : "";
}
function rr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = ci(e[i], t, n);
  return r.join("");
}
function Da(e) {
  return !!(e && typeof e == "object");
}
const ir = document.createElement("i");
function Dn(e) {
  const t = "&" + e + ";";
  ir.innerHTML = t;
  const n = ir.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function we(e, t, n, r) {
  const i = e.length;
  let o = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4;
}
function Ce(e, t) {
  return e.length > 0 ? (we(e, e.length, 0, t), e) : t;
}
const lr = {}.hasOwnProperty;
function hi(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Pa(t, e[n]);
  return t;
}
function Pa(e, t) {
  let n;
  for (n in t) {
    const i = (lr.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let l;
    if (o)
      for (l in o) {
        lr.call(i, l) || (i[l] = []);
        const a = o[l];
        Ba(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function Ba(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  we(e, 0, 0, r);
}
function fi(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function Te(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const he = $e(/[A-Za-z]/), se = $e(/[\dA-Za-z]/), Ra = $e(/[#-'*+\--9=?A-Z^-~]/);
function Nt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const yn = $e(/\d/), Ma = $e(/[\dA-Fa-f]/), Fa = $e(/[!-/:-@[-`{-~]/);
function M(e) {
  return e !== null && e < -2;
}
function Q(e) {
  return e !== null && (e < 0 || e === 32);
}
function U(e) {
  return e === -2 || e === -1 || e === 32;
}
const Rt = $e(new RegExp("\\p{P}|\\p{S}", "u")), qe = $e(/\s/);
function $e(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function it(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let l = "";
    if (o === 37 && se(e.charCodeAt(n + 1)) && se(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const a = e.charCodeAt(n + 1);
      o < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(o, a), i = 1) : l = "�";
    } else
      l = String.fromCharCode(o);
    l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + i + 1, l = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function V(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return U(s) ? (e.enter(n), a(s)) : t(s);
  }
  function a(s) {
    return U(s) && o++ < i ? (e.consume(s), a) : (e.exit(n), t(s));
  }
}
const Oa = {
  tokenize: Ha
};
function Ha(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), V(e, t, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), o(a);
  }
  function o(a) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = s), n = s, l(a);
  }
  function l(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return M(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
  }
}
const ja = {
  tokenize: $a
}, or = {
  tokenize: Ua
};
function $a(e) {
  const t = this, n = [];
  let r = 0, i, o, l;
  return a;
  function a(C) {
    if (r < n.length) {
      const z = n[r];
      return t.containerState = z[1], e.attempt(z[0].continuation, s, u)(C);
    }
    return u(C);
  }
  function s(C) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && S();
      const z = t.events.length;
      let P = z, _;
      for (; P--; )
        if (t.events[P][0] === "exit" && t.events[P][1].type === "chunkFlow") {
          _ = t.events[P][1].end;
          break;
        }
      k(r);
      let T = z;
      for (; T < t.events.length; )
        t.events[T][1].end = {
          ..._
        }, T++;
      return we(t.events, P + 1, 0, t.events.slice(z)), t.events.length = T, u(C);
    }
    return a(C);
  }
  function u(C) {
    if (r === n.length) {
      if (!i)
        return p(C);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return m(C);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(or, h, c)(C);
  }
  function h(C) {
    return i && S(), k(r), p(C);
  }
  function c(C) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, m(C);
  }
  function p(C) {
    return t.containerState = {}, e.attempt(or, f, m)(C);
  }
  function f(C) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(C);
  }
  function m(C) {
    if (C === null) {
      i && S(), k(0), e.consume(C);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
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
    return M(C) ? (e.consume(C), w(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(C), b);
  }
  function w(C, z) {
    const P = t.sliceStream(C);
    if (z && P.push(null), C.previous = o, o && (o.next = C), o = C, i.defineSkip(C.start), i.write(P), t.parser.lazy[C.start.line]) {
      let _ = i.events.length;
      for (; _--; )
        if (
          // The token starts before the line ending…
          i.events[_][1].start.offset < l && // …and either is not ended yet…
          (!i.events[_][1].end || // …or ends after it.
          i.events[_][1].end.offset > l)
        )
          return;
      const T = t.events.length;
      let D = T, B, x;
      for (; D--; )
        if (t.events[D][0] === "exit" && t.events[D][1].type === "chunkFlow") {
          if (B) {
            x = t.events[D][1].end;
            break;
          }
          B = !0;
        }
      for (k(r), _ = T; _ < t.events.length; )
        t.events[_][1].end = {
          ...x
        }, _++;
      we(t.events, D + 1, 0, t.events.slice(T)), t.events.length = _;
    }
  }
  function k(C) {
    let z = n.length;
    for (; z-- > C; ) {
      const P = n[z];
      t.containerState = P[1], P[0].exit.call(t, e);
    }
    n.length = C;
  }
  function S() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function Ua(e, t, n) {
  return V(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function tt(e) {
  if (e === null || Q(e) || qe(e))
    return 1;
  if (Rt(e))
    return 2;
}
function Mt(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const kn = {
  name: "attention",
  resolveAll: Va,
  tokenize: Wa
};
function Va(e, t) {
  let n = -1, r, i, o, l, a, s, u, h;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const c = {
            ...e[r][1].end
          }, p = {
            ...e[n][1].start
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
              ...e[n][1].start
            },
            end: p
          }, o = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
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
          }, e[n][1].start = {
            ...a.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = Ce(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = Ce(u, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["enter", o, t]]), u = Ce(u, Mt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = Ce(u, [["exit", o, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (h = 2, u = Ce(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : h = 0, we(e, r - 1, n - r + 3, u), n = r + u.length - h - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Wa(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = tt(r);
  let o;
  return l;
  function l(s) {
    return o = s, e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === o)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), h = tt(s), c = !h || h === 2 && i || n.includes(s), p = !i || i === 2 && h || n.includes(r);
    return u._open = !!(o === 42 ? c : c && (i || !p)), u._close = !!(o === 42 ? p : p && (h || !c)), t(s);
  }
}
function ar(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const qa = {
  name: "autolink",
  tokenize: Za
};
function Za(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(f) {
    return he(f) ? (e.consume(f), l) : f === 64 ? n(f) : u(f);
  }
  function l(f) {
    return f === 43 || f === 45 || f === 46 || se(f) ? (r = 1, a(f)) : u(f);
  }
  function a(f) {
    return f === 58 ? (e.consume(f), r = 0, s) : (f === 43 || f === 45 || f === 46 || se(f)) && r++ < 32 ? (e.consume(f), a) : (r = 0, u(f));
  }
  function s(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || Nt(f) ? n(f) : (e.consume(f), s);
  }
  function u(f) {
    return f === 64 ? (e.consume(f), h) : Ra(f) ? (e.consume(f), u) : n(f);
  }
  function h(f) {
    return se(f) ? c(f) : n(f);
  }
  function c(f) {
    return f === 46 ? (e.consume(f), r = 0, h) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(f);
  }
  function p(f) {
    if ((f === 45 || se(f)) && r++ < 63) {
      const m = f === 45 ? p : c;
      return e.consume(f), m;
    }
    return n(f);
  }
}
const yt = {
  partial: !0,
  tokenize: Ga
};
function Ga(e, t, n) {
  return r;
  function r(o) {
    return U(o) ? V(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || M(o) ? t(o) : n(o);
  }
}
const pi = {
  continuation: {
    tokenize: Qa
  },
  exit: Ya,
  name: "blockQuote",
  tokenize: Xa
};
function Xa(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o;
    }
    return n(l);
  }
  function o(l) {
    return U(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function Qa(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return U(l) ? V(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l);
  }
  function o(l) {
    return e.attempt(pi, t, n)(l);
  }
}
function Ya(e) {
  e.exit("blockQuote");
}
const di = {
  name: "characterEscape",
  tokenize: Ka
};
function Ka(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return Fa(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const mi = {
  name: "characterReference",
  tokenize: Ja
};
function Ja(e, t, n) {
  const r = this;
  let i = 0, o, l;
  return a;
  function a(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), s;
  }
  function s(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, l = se, h(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = Ma, h) : (e.enter("characterReferenceValue"), o = 7, l = yn, h(c));
  }
  function h(c) {
    if (c === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return l === se && !Dn(r.sliceSerialize(p)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(c) && i++ < o ? (e.consume(c), h) : n(c);
  }
}
const sr = {
  partial: !0,
  tokenize: ts
}, ur = {
  concrete: !0,
  name: "codeFenced",
  tokenize: es
};
function es(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: P
  };
  let o = 0, l = 0, a;
  return s;
  function s(_) {
    return u(_);
  }
  function u(_) {
    const T = r.events[r.events.length - 1];
    return o = T && T[1].type === "linePrefix" ? T[2].sliceSerialize(T[1], !0).length : 0, a = _, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), h(_);
  }
  function h(_) {
    return _ === a ? (l++, e.consume(_), h) : l < 3 ? n(_) : (e.exit("codeFencedFenceSequence"), U(_) ? V(e, c, "whitespace")(_) : c(_));
  }
  function c(_) {
    return _ === null || M(_) ? (e.exit("codeFencedFence"), r.interrupt ? t(_) : e.check(sr, b, z)(_)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(_));
  }
  function p(_) {
    return _ === null || M(_) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(_)) : U(_) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), V(e, f, "whitespace")(_)) : _ === 96 && _ === a ? n(_) : (e.consume(_), p);
  }
  function f(_) {
    return _ === null || M(_) ? c(_) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(_));
  }
  function m(_) {
    return _ === null || M(_) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(_)) : _ === 96 && _ === a ? n(_) : (e.consume(_), m);
  }
  function b(_) {
    return e.attempt(i, z, w)(_);
  }
  function w(_) {
    return e.enter("lineEnding"), e.consume(_), e.exit("lineEnding"), k;
  }
  function k(_) {
    return o > 0 && U(_) ? V(e, S, "linePrefix", o + 1)(_) : S(_);
  }
  function S(_) {
    return _ === null || M(_) ? e.check(sr, b, z)(_) : (e.enter("codeFlowValue"), C(_));
  }
  function C(_) {
    return _ === null || M(_) ? (e.exit("codeFlowValue"), S(_)) : (e.consume(_), C);
  }
  function z(_) {
    return e.exit("codeFenced"), t(_);
  }
  function P(_, T, D) {
    let B = 0;
    return x;
    function x(H) {
      return _.enter("lineEnding"), _.consume(H), _.exit("lineEnding"), N;
    }
    function N(H) {
      return _.enter("codeFencedFence"), U(H) ? V(_, L, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(H) : L(H);
    }
    function L(H) {
      return H === a ? (_.enter("codeFencedFenceSequence"), $(H)) : D(H);
    }
    function $(H) {
      return H === a ? (B++, _.consume(H), $) : B >= l ? (_.exit("codeFencedFenceSequence"), U(H) ? V(_, G, "whitespace")(H) : G(H)) : D(H);
    }
    function G(H) {
      return H === null || M(H) ? (_.exit("codeFencedFence"), T(H)) : D(H);
    }
  }
}
function ts(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
const Xt = {
  name: "codeIndented",
  tokenize: rs
}, ns = {
  partial: !0,
  tokenize: is
};
function rs(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), V(e, o, "linePrefix", 5)(u);
  }
  function o(u) {
    const h = r.events[r.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? l(u) : n(u);
  }
  function l(u) {
    return u === null ? s(u) : M(u) ? e.attempt(ns, l, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || M(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function is(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? n(l) : M(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : V(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : M(l) ? i(l) : n(l);
  }
}
const ls = {
  name: "codeText",
  previous: as,
  resolve: os,
  tokenize: ss
};
function os(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function as(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function ss(e, t, n) {
  let r = 0, i, o;
  return l;
  function l(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
  }
  function a(c) {
    return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), s(c));
  }
  function s(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), s) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, h(c)) : M(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || M(c) ? (e.exit("codeTextData"), s(c)) : (e.consume(c), u);
  }
  function h(c) {
    return c === 96 ? (e.consume(c), i++, h) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (o.type = "codeTextData", u(c));
  }
}
class us {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
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
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
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
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
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
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && st(this.left, r), o.reverse();
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
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
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
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), st(this.left, t);
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
  unshift(t) {
    this.setCursor(0), this.right.push(t);
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
  unshiftMany(t) {
    this.setCursor(0), st(this.right, t.reverse());
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
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        st(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        st(this.left, n.reverse());
      }
  }
}
function st(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function gi(e) {
  const t = {};
  let n = -1, r, i, o, l, a, s, u;
  const h = new us(e);
  for (; ++n < h.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = h.get(n), n && r[1].type === "chunkFlow" && h.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content"))
      for (; ++o < s.length && s[o][1].type !== "content"; )
        s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, cs(h, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o--; )
        if (l = h.get(o), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (i && (h.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...h.get(i)[1].start
      }, a = h.slice(i, n), a.unshift(r), h.splice(i, n - i + 1, a));
    }
  }
  return we(e, 0, Number.POSITIVE_INFINITY, h.slice(0)), !u;
}
function cs(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [];
  let l = n._tokenizer;
  l || (l = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const a = l.events, s = [], u = {};
  let h, c, p = -1, f = n, m = 0, b = 0;
  const w = [b];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; )
      ;
    o.push(i), f._tokenizer || (h = r.sliceStream(f), f.next || h.push(null), c && l.defineSkip(f.start), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(h), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), c = f, f = f.next;
  }
  for (f = n; ++p < a.length; )
    // Find a void token that includes a break.
    a[p][0] === "exit" && a[p - 1][0] === "enter" && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && (b = p + 1, w.push(b), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (l.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : w.pop(), p = w.length; p--; ) {
    const k = a.slice(w[p], w[p + 1]), S = o.pop();
    s.push([S, S + k.length - 1]), e.splice(S, 2, k);
  }
  for (s.reverse(), p = -1; ++p < s.length; )
    u[m + s[p][0]] = m + s[p][1], m += s[p][1] - s[p][0] - 1;
  return u;
}
const hs = {
  resolve: ps,
  tokenize: ds
}, fs = {
  partial: !0,
  tokenize: ms
};
function ps(e) {
  return gi(e), e;
}
function ds(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : M(a) ? e.check(fs, l, o)(a) : (e.consume(a), i);
  }
  function o(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function l(a) {
    return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function ms(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), V(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || M(l))
      return n(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function yi(e, t, n, r, i, o, l, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let h = 0;
  return c;
  function c(k) {
    return k === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(k), e.exit(o), p) : k === null || k === 32 || k === 41 || Nt(k) ? n(k) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), b(k));
  }
  function p(k) {
    return k === 62 ? (e.enter(o), e.consume(k), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), f(k));
  }
  function f(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(a), p(k)) : k === null || k === 60 || M(k) ? n(k) : (e.consume(k), k === 92 ? m : f);
  }
  function m(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), f) : f(k);
  }
  function b(k) {
    return !h && (k === null || k === 41 || Q(k)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(k)) : h < u && k === 40 ? (e.consume(k), h++, b) : k === 41 ? (e.consume(k), h--, b) : k === null || k === 32 || k === 40 || Nt(k) ? n(k) : (e.consume(k), k === 92 ? w : b);
  }
  function w(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), b) : b(k);
  }
}
function ki(e, t, n, r, i, o) {
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
    f === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? n(f) : f === 93 ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : M(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), h) : (e.enter("chunkString", {
      contentType: "string"
    }), c(f));
  }
  function c(f) {
    return f === null || f === 91 || f === 93 || M(f) || a++ > 999 ? (e.exit("chunkString"), h(f)) : (e.consume(f), s || (s = !U(f)), f === 92 ? p : c);
  }
  function p(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, c) : c(f);
  }
}
function bi(e, t, n, r, i, o) {
  let l;
  return a;
  function a(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), l = p === 40 ? 41 : p, s) : n(p);
  }
  function s(p) {
    return p === l ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(o), u(p));
  }
  function u(p) {
    return p === l ? (e.exit(o), s(l)) : p === null ? n(p) : M(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), V(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), h(p));
  }
  function h(p) {
    return p === l || p === null || M(p) ? (e.exit("chunkString"), u(p)) : (e.consume(p), p === 92 ? c : h);
  }
  function c(p) {
    return p === l || p === 92 ? (e.consume(p), h) : h(p);
  }
}
function ht(e, t) {
  let n;
  return r;
  function r(i) {
    return M(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : U(i) ? V(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const gs = {
  name: "definition",
  tokenize: ks
}, ys = {
  partial: !0,
  tokenize: bs
};
function ks(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(f) {
    return e.enter("definition"), l(f);
  }
  function l(f) {
    return ki.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(f);
  }
  function a(f) {
    return i = Te(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : n(f);
  }
  function s(f) {
    return Q(f) ? ht(e, u)(f) : u(f);
  }
  function u(f) {
    return yi(
      e,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(f);
  }
  function h(f) {
    return e.attempt(ys, c, c)(f);
  }
  function c(f) {
    return U(f) ? V(e, p, "whitespace")(f) : p(f);
  }
  function p(f) {
    return f === null || M(f) ? (e.exit("definition"), r.parser.defined.push(i), t(f)) : n(f);
  }
}
function bs(e, t, n) {
  return r;
  function r(a) {
    return Q(a) ? ht(e, i)(a) : n(a);
  }
  function i(a) {
    return bi(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function o(a) {
    return U(a) ? V(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || M(a) ? t(a) : n(a);
  }
}
const xs = {
  name: "hardBreakEscape",
  tokenize: ws
};
function ws(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return M(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const _s = {
  name: "headingAtx",
  resolve: vs,
  tokenize: Cs
};
function vs(e, t) {
  let n = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, we(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function Cs(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("atxHeading"), o(h);
  }
  function o(h) {
    return e.enter("atxHeadingSequence"), l(h);
  }
  function l(h) {
    return h === 35 && r++ < 6 ? (e.consume(h), l) : h === null || Q(h) ? (e.exit("atxHeadingSequence"), a(h)) : n(h);
  }
  function a(h) {
    return h === 35 ? (e.enter("atxHeadingSequence"), s(h)) : h === null || M(h) ? (e.exit("atxHeading"), t(h)) : U(h) ? V(e, a, "whitespace")(h) : (e.enter("atxHeadingText"), u(h));
  }
  function s(h) {
    return h === 35 ? (e.consume(h), s) : (e.exit("atxHeadingSequence"), a(h));
  }
  function u(h) {
    return h === null || h === 35 || Q(h) ? (e.exit("atxHeadingText"), a(h)) : (e.consume(h), u);
  }
}
const Ss = [
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
], cr = ["pre", "script", "style", "textarea"], Is = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Ts,
  tokenize: Ls
}, Es = {
  partial: !0,
  tokenize: zs
}, As = {
  partial: !0,
  tokenize: Ns
};
function Ts(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Ls(e, t, n) {
  const r = this;
  let i, o, l, a, s;
  return u;
  function u(g) {
    return h(g);
  }
  function h(g) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), c;
  }
  function c(g) {
    return g === 33 ? (e.consume(g), p) : g === 47 ? (e.consume(g), o = !0, b) : g === 63 ? (e.consume(g), i = 3, r.interrupt ? t : y) : he(g) ? (e.consume(g), l = String.fromCharCode(g), w) : n(g);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), i = 2, f) : g === 91 ? (e.consume(g), i = 5, a = 0, m) : he(g) ? (e.consume(g), i = 4, r.interrupt ? t : y) : n(g);
  }
  function f(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? t : y) : n(g);
  }
  function m(g) {
    const ce = "CDATA[";
    return g === ce.charCodeAt(a++) ? (e.consume(g), a === ce.length ? r.interrupt ? t : L : m) : n(g);
  }
  function b(g) {
    return he(g) ? (e.consume(g), l = String.fromCharCode(g), w) : n(g);
  }
  function w(g) {
    if (g === null || g === 47 || g === 62 || Q(g)) {
      const ce = g === 47, Le = l.toLowerCase();
      return !ce && !o && cr.includes(Le) ? (i = 1, r.interrupt ? t(g) : L(g)) : Ss.includes(l.toLowerCase()) ? (i = 6, ce ? (e.consume(g), k) : r.interrupt ? t(g) : L(g)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(g) : o ? S(g) : C(g));
    }
    return g === 45 || se(g) ? (e.consume(g), l += String.fromCharCode(g), w) : n(g);
  }
  function k(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? t : L) : n(g);
  }
  function S(g) {
    return U(g) ? (e.consume(g), S) : x(g);
  }
  function C(g) {
    return g === 47 ? (e.consume(g), x) : g === 58 || g === 95 || he(g) ? (e.consume(g), z) : U(g) ? (e.consume(g), C) : x(g);
  }
  function z(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || se(g) ? (e.consume(g), z) : P(g);
  }
  function P(g) {
    return g === 61 ? (e.consume(g), _) : U(g) ? (e.consume(g), P) : C(g);
  }
  function _(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), s = g, T) : U(g) ? (e.consume(g), _) : D(g);
  }
  function T(g) {
    return g === s ? (e.consume(g), s = null, B) : g === null || M(g) ? n(g) : (e.consume(g), T);
  }
  function D(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || Q(g) ? P(g) : (e.consume(g), D);
  }
  function B(g) {
    return g === 47 || g === 62 || U(g) ? C(g) : n(g);
  }
  function x(g) {
    return g === 62 ? (e.consume(g), N) : n(g);
  }
  function N(g) {
    return g === null || M(g) ? L(g) : U(g) ? (e.consume(g), N) : n(g);
  }
  function L(g) {
    return g === 45 && i === 2 ? (e.consume(g), ie) : g === 60 && i === 1 ? (e.consume(g), X) : g === 62 && i === 4 ? (e.consume(g), pe) : g === 63 && i === 3 ? (e.consume(g), y) : g === 93 && i === 5 ? (e.consume(g), fe) : M(g) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Es, Se, $)(g)) : g === null || M(g) ? (e.exit("htmlFlowData"), $(g)) : (e.consume(g), L);
  }
  function $(g) {
    return e.check(As, G, Se)(g);
  }
  function G(g) {
    return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), H;
  }
  function H(g) {
    return g === null || M(g) ? $(g) : (e.enter("htmlFlowData"), L(g));
  }
  function ie(g) {
    return g === 45 ? (e.consume(g), y) : L(g);
  }
  function X(g) {
    return g === 47 ? (e.consume(g), l = "", ne) : L(g);
  }
  function ne(g) {
    if (g === 62) {
      const ce = l.toLowerCase();
      return cr.includes(ce) ? (e.consume(g), pe) : L(g);
    }
    return he(g) && l.length < 8 ? (e.consume(g), l += String.fromCharCode(g), ne) : L(g);
  }
  function fe(g) {
    return g === 93 ? (e.consume(g), y) : L(g);
  }
  function y(g) {
    return g === 62 ? (e.consume(g), pe) : g === 45 && i === 2 ? (e.consume(g), y) : L(g);
  }
  function pe(g) {
    return g === null || M(g) ? (e.exit("htmlFlowData"), Se(g)) : (e.consume(g), pe);
  }
  function Se(g) {
    return e.exit("htmlFlow"), t(g);
  }
}
function Ns(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return M(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : n(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function zs(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(yt, t, n);
  }
}
const Ds = {
  name: "htmlText",
  tokenize: Ps
};
function Ps(e, t, n) {
  const r = this;
  let i, o, l;
  return a;
  function a(y) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(y), s;
  }
  function s(y) {
    return y === 33 ? (e.consume(y), u) : y === 47 ? (e.consume(y), P) : y === 63 ? (e.consume(y), C) : he(y) ? (e.consume(y), D) : n(y);
  }
  function u(y) {
    return y === 45 ? (e.consume(y), h) : y === 91 ? (e.consume(y), o = 0, m) : he(y) ? (e.consume(y), S) : n(y);
  }
  function h(y) {
    return y === 45 ? (e.consume(y), f) : n(y);
  }
  function c(y) {
    return y === null ? n(y) : y === 45 ? (e.consume(y), p) : M(y) ? (l = c, X(y)) : (e.consume(y), c);
  }
  function p(y) {
    return y === 45 ? (e.consume(y), f) : c(y);
  }
  function f(y) {
    return y === 62 ? ie(y) : y === 45 ? p(y) : c(y);
  }
  function m(y) {
    const pe = "CDATA[";
    return y === pe.charCodeAt(o++) ? (e.consume(y), o === pe.length ? b : m) : n(y);
  }
  function b(y) {
    return y === null ? n(y) : y === 93 ? (e.consume(y), w) : M(y) ? (l = b, X(y)) : (e.consume(y), b);
  }
  function w(y) {
    return y === 93 ? (e.consume(y), k) : b(y);
  }
  function k(y) {
    return y === 62 ? ie(y) : y === 93 ? (e.consume(y), k) : b(y);
  }
  function S(y) {
    return y === null || y === 62 ? ie(y) : M(y) ? (l = S, X(y)) : (e.consume(y), S);
  }
  function C(y) {
    return y === null ? n(y) : y === 63 ? (e.consume(y), z) : M(y) ? (l = C, X(y)) : (e.consume(y), C);
  }
  function z(y) {
    return y === 62 ? ie(y) : C(y);
  }
  function P(y) {
    return he(y) ? (e.consume(y), _) : n(y);
  }
  function _(y) {
    return y === 45 || se(y) ? (e.consume(y), _) : T(y);
  }
  function T(y) {
    return M(y) ? (l = T, X(y)) : U(y) ? (e.consume(y), T) : ie(y);
  }
  function D(y) {
    return y === 45 || se(y) ? (e.consume(y), D) : y === 47 || y === 62 || Q(y) ? B(y) : n(y);
  }
  function B(y) {
    return y === 47 ? (e.consume(y), ie) : y === 58 || y === 95 || he(y) ? (e.consume(y), x) : M(y) ? (l = B, X(y)) : U(y) ? (e.consume(y), B) : ie(y);
  }
  function x(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || se(y) ? (e.consume(y), x) : N(y);
  }
  function N(y) {
    return y === 61 ? (e.consume(y), L) : M(y) ? (l = N, X(y)) : U(y) ? (e.consume(y), N) : B(y);
  }
  function L(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? n(y) : y === 34 || y === 39 ? (e.consume(y), i = y, $) : M(y) ? (l = L, X(y)) : U(y) ? (e.consume(y), L) : (e.consume(y), G);
  }
  function $(y) {
    return y === i ? (e.consume(y), i = void 0, H) : y === null ? n(y) : M(y) ? (l = $, X(y)) : (e.consume(y), $);
  }
  function G(y) {
    return y === null || y === 34 || y === 39 || y === 60 || y === 61 || y === 96 ? n(y) : y === 47 || y === 62 || Q(y) ? B(y) : (e.consume(y), G);
  }
  function H(y) {
    return y === 47 || y === 62 || Q(y) ? B(y) : n(y);
  }
  function ie(y) {
    return y === 62 ? (e.consume(y), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(y);
  }
  function X(y) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), ne;
  }
  function ne(y) {
    return U(y) ? V(e, fe, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(y) : fe(y);
  }
  function fe(y) {
    return e.enter("htmlTextData"), l(y);
  }
}
const Pn = {
  name: "labelEnd",
  resolveAll: Fs,
  resolveTo: Os,
  tokenize: Hs
}, Bs = {
  tokenize: js
}, Rs = {
  tokenize: $s
}, Ms = {
  tokenize: Us
};
function Fs(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && we(e, 0, e.length, n), e;
}
function Os(e, t) {
  let n = e.length, r = 0, i, o, l, a;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = n);
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
  return a = [["enter", s, t], ["enter", u, t]], a = Ce(a, e.slice(o + 1, o + r + 3)), a = Ce(a, [["enter", h, t]]), a = Ce(a, Mt(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), t)), a = Ce(a, [["exit", h, t], e[l - 2], e[l - 1], ["exit", u, t]]), a = Ce(a, e.slice(l + 1)), a = Ce(a, [["exit", s, t]]), we(e, o, e.length, a), e;
}
function Hs(e, t, n) {
  const r = this;
  let i = r.events.length, o, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(p) {
    return o ? o._inactive ? c(p) : (l = r.parser.defined.includes(Te(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(p);
  }
  function s(p) {
    return p === 40 ? e.attempt(Bs, h, l ? h : c)(p) : p === 91 ? e.attempt(Rs, h, l ? u : c)(p) : l ? h(p) : c(p);
  }
  function u(p) {
    return e.attempt(Ms, h, c)(p);
  }
  function h(p) {
    return t(p);
  }
  function c(p) {
    return o._balanced = !0, n(p);
  }
}
function js(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return Q(c) ? ht(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41 ? h(c) : yi(e, l, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function l(c) {
    return Q(c) ? ht(e, s)(c) : h(c);
  }
  function a(c) {
    return n(c);
  }
  function s(c) {
    return c === 34 || c === 39 || c === 40 ? bi(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : h(c);
  }
  function u(c) {
    return Q(c) ? ht(e, h)(c) : h(c);
  }
  function h(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function $s(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return ki.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(a);
  }
  function o(a) {
    return r.parser.defined.includes(Te(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function l(a) {
    return n(a);
  }
}
function Us(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const Vs = {
  name: "labelStartImage",
  resolveAll: Pn.resolveAll,
  tokenize: Ws
};
function Ws(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
  }
  function o(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), l) : n(a);
  }
  function l(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const qs = {
  name: "labelStartLink",
  resolveAll: Pn.resolveAll,
  tokenize: Zs
};
function Zs(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const Qt = {
  name: "lineEnding",
  tokenize: Gs
};
function Gs(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), V(e, t, "linePrefix");
  }
}
const At = {
  name: "thematicBreak",
  tokenize: Xs
};
function Xs(e, t, n) {
  let r = 0, i;
  return o;
  function o(u) {
    return e.enter("thematicBreak"), l(u);
  }
  function l(u) {
    return i = u, a(u);
  }
  function a(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || M(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), U(u) ? V(e, a, "whitespace")(u) : a(u));
  }
}
const de = {
  continuation: {
    tokenize: Js
  },
  exit: tu,
  name: "list",
  tokenize: Ks
}, Qs = {
  partial: !0,
  tokenize: nu
}, Ys = {
  partial: !0,
  tokenize: eu
};
function Ks(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return a;
  function a(f) {
    const m = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (m === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : yn(f)) {
      if (r.containerState.type || (r.containerState.type = m, e.enter(m, {
        _container: !0
      })), m === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(At, n, u)(f) : u(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(f);
    }
    return n(f);
  }
  function s(f) {
    return yn(f) && ++l < 10 ? (e.consume(f), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), u(f)) : n(f);
  }
  function u(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      yt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : h,
      e.attempt(Qs, p, c)
    );
  }
  function h(f) {
    return r.containerState.initialBlankLine = !0, o++, p(f);
  }
  function c(f) {
    return U(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), p) : n(f);
  }
  function p(f) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(f);
  }
}
function Js(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(yt, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, V(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !U(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Ys, t, l)(a));
  }
  function l(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, V(e, e.attempt(de, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function eu(e, t, n) {
  const r = this;
  return V(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function tu(e) {
  e.exit(this.containerState.type);
}
function nu(e, t, n) {
  const r = this;
  return V(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !U(o) && l && l[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const hr = {
  name: "setextUnderline",
  resolveTo: ru,
  tokenize: iu
};
function ru(e, t) {
  let n = e.length, r, i, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const l = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", l, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = l, e.push(["exit", l, t]), e;
}
function iu(e, t, n) {
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
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = u, l(u)) : n(u);
  }
  function l(u) {
    return e.enter("setextHeadingLineSequence"), a(u);
  }
  function a(u) {
    return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), U(u) ? V(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || M(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const lu = {
  tokenize: ou
};
function ou(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    yt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, V(e, e.attempt(this.parser.constructs.flow, i, e.attempt(hs, i)), "linePrefix"))
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const au = {
  resolveAll: wi()
}, su = xi("string"), uu = xi("text");
function xi(e) {
  return {
    resolveAll: wi(e === "text" ? cu : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, l, a);
    return l;
    function l(h) {
      return u(h) ? o(h) : a(h);
    }
    function a(h) {
      if (h === null) {
        n.consume(h);
        return;
      }
      return n.enter("data"), n.consume(h), s;
    }
    function s(h) {
      return u(h) ? (n.exit("data"), o(h)) : (n.consume(h), s);
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
function wi(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function cu(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
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
      if (t._contentTypeTextTrailing && n === e.length && (a = 0), a) {
        const u = {
          type: n === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
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
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2);
      }
      n++;
    }
  return e;
}
const hu = {
  42: de,
  43: de,
  45: de,
  48: de,
  49: de,
  50: de,
  51: de,
  52: de,
  53: de,
  54: de,
  55: de,
  56: de,
  57: de,
  62: pi
}, fu = {
  91: gs
}, pu = {
  [-2]: Xt,
  [-1]: Xt,
  32: Xt
}, du = {
  35: _s,
  42: At,
  45: [hr, At],
  60: Is,
  61: hr,
  95: At,
  96: ur,
  126: ur
}, mu = {
  38: mi,
  92: di
}, gu = {
  [-5]: Qt,
  [-4]: Qt,
  [-3]: Qt,
  33: Vs,
  38: mi,
  42: kn,
  60: [qa, Ds],
  91: qs,
  92: [xs, di],
  93: Pn,
  95: kn,
  96: ls
}, yu = {
  null: [kn, au]
}, ku = {
  null: [42, 95]
}, bu = {
  null: []
}, xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: ku,
  contentInitial: fu,
  disable: bu,
  document: hu,
  flow: du,
  flowInitial: pu,
  insideSpan: yu,
  string: mu,
  text: gu
}, Symbol.toStringTag, { value: "Module" }));
function wu(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, o = [];
  let l = [], a = [];
  const s = {
    attempt: T(P),
    check: T(_),
    consume: S,
    enter: C,
    exit: z,
    interrupt: T(_, {
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
  let h = t.tokenize.call(u, s);
  return t.resolveAll && o.push(t), u;
  function c(N) {
    return l = Ce(l, N), w(), l[l.length - 1] !== null ? [] : (D(t, 0), u.events = Mt(o, u.events, u), u.events);
  }
  function p(N, L) {
    return vu(f(N), L);
  }
  function f(N) {
    return _u(l, N);
  }
  function m() {
    const {
      _bufferIndex: N,
      _index: L,
      line: $,
      column: G,
      offset: H
    } = r;
    return {
      _bufferIndex: N,
      _index: L,
      line: $,
      column: G,
      offset: H
    };
  }
  function b(N) {
    i[N.line] = N.column, x();
  }
  function w() {
    let N;
    for (; r._index < l.length; ) {
      const L = l[r._index];
      if (typeof L == "string")
        for (N = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === N && r._bufferIndex < L.length; )
          k(L.charCodeAt(r._bufferIndex));
      else
        k(L);
    }
  }
  function k(N) {
    h = h(N);
  }
  function S(N) {
    M(N) ? (r.line++, r.column = 1, r.offset += N === -3 ? 2 : 1, x()) : N !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = N;
  }
  function C(N, L) {
    const $ = L || {};
    return $.type = N, $.start = m(), u.events.push(["enter", $, u]), a.push($), $;
  }
  function z(N) {
    const L = a.pop();
    return L.end = m(), u.events.push(["exit", L, u]), L;
  }
  function P(N, L) {
    D(N, L.from);
  }
  function _(N, L) {
    L.restore();
  }
  function T(N, L) {
    return $;
    function $(G, H, ie) {
      let X, ne, fe, y;
      return Array.isArray(G) ? (
        /* c8 ignore next 1 */
        Se(G)
      ) : "tokenize" in G ? (
        // Looks like a construct.
        Se([
          /** @type {Construct} */
          G
        ])
      ) : pe(G);
      function pe(re) {
        return Me;
        function Me(Ie) {
          const Fe = Ie !== null && re[Ie], Pe = Ie !== null && re.null, Xe = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Fe) ? Fe : Fe ? [Fe] : [],
            ...Array.isArray(Pe) ? Pe : Pe ? [Pe] : []
          ];
          return Se(Xe)(Ie);
        }
      }
      function Se(re) {
        return X = re, ne = 0, re.length === 0 ? ie : g(re[ne]);
      }
      function g(re) {
        return Me;
        function Me(Ie) {
          return y = B(), fe = re, re.partial || (u.currentConstruct = re), re.name && u.parser.constructs.disable.null.includes(re.name) ? Le() : re.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            L ? Object.assign(Object.create(u), L) : u,
            s,
            ce,
            Le
          )(Ie);
        }
      }
      function ce(re) {
        return N(fe, y), H;
      }
      function Le(re) {
        return y.restore(), ++ne < X.length ? g(X[ne]) : ie;
      }
    }
  }
  function D(N, L) {
    N.resolveAll && !o.includes(N) && o.push(N), N.resolve && we(u.events, L, u.events.length - L, N.resolve(u.events.slice(L), u)), N.resolveTo && (u.events = N.resolveTo(u.events, u));
  }
  function B() {
    const N = m(), L = u.previous, $ = u.currentConstruct, G = u.events.length, H = Array.from(a);
    return {
      from: G,
      restore: ie
    };
    function ie() {
      r = N, u.previous = L, u.currentConstruct = $, u.events.length = G, a = H, x();
    }
  }
  function x() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function _u(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let l;
  if (n === i)
    l = [e[n].slice(r, o)];
  else {
    if (l = e.slice(n, i), r > -1) {
      const a = l[0];
      typeof a == "string" ? l[0] = a.slice(r) : l.shift();
    }
    o > 0 && l.push(e[i].slice(0, o));
  }
  return l;
}
function vu(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
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
        l = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
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
function Cu(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      hi([xu, ...(e || {}).extensions || []])
    ),
    content: i(Oa),
    defined: [],
    document: i(ja),
    flow: i(lu),
    lazy: {},
    string: i(su),
    text: i(uu)
  };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return wu(r, o, a);
    }
  }
}
function Su(e) {
  for (; !gi(e); )
    ;
  return e;
}
const fr = /[\0\t\n\r]/g;
function Iu() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, l, a) {
    const s = [];
    let u, h, c, p, f;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), c = 0, t = "", n && (o.charCodeAt(0) === 65279 && c++, n = void 0); c < o.length; ) {
      if (fr.lastIndex = c, u = fr.exec(o), p = u && u.index !== void 0 ? u.index : o.length, f = o.charCodeAt(p), !u) {
        t = o.slice(c);
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
    return a && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const Eu = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Au(e) {
  return e.replace(Eu, Tu);
}
function Tu(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return fi(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Dn(n) || e;
}
const _i = {}.hasOwnProperty;
function Lu(e, t, n) {
  return t && typeof t == "object" && (n = t, t = void 0), Nu(n)(Su(Cu(n).document().write(Iu()(e, t, !0))));
}
function Nu(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(wt),
      autolinkProtocol: B,
      autolinkEmail: B,
      atxHeading: o(lt),
      blockQuote: o(Pe),
      characterEscape: B,
      characterReference: B,
      codeFenced: o(Xe),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: o(Xe, l),
      codeText: o(jt, l),
      codeTextData: B,
      data: B,
      codeFlowValue: B,
      definition: o($t),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: o(Ut),
      hardBreakEscape: o(bt),
      hardBreakTrailing: o(bt),
      htmlFlow: o(xt, l),
      htmlFlowData: B,
      htmlText: o(xt, l),
      htmlTextData: B,
      image: o(Qe),
      label: l,
      link: o(wt),
      listItem: o(Vt),
      listItemValue: p,
      listOrdered: o(_t, c),
      listUnordered: o(_t),
      paragraph: o(Wt),
      reference: g,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: o(lt),
      strong: o(qt),
      thematicBreak: o(Ue)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: P,
      autolink: s(),
      autolinkEmail: Fe,
      autolinkProtocol: Ie,
      blockQuote: s(),
      characterEscapeValue: x,
      characterReferenceMarkerHexadecimal: Le,
      characterReferenceMarkerNumeric: Le,
      characterReferenceValue: re,
      characterReference: Me,
      codeFenced: s(w),
      codeFencedFence: b,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: m,
      codeFlowValue: x,
      codeIndented: s(k),
      codeText: s(H),
      codeTextData: x,
      data: x,
      definition: s(),
      definitionDestinationString: z,
      definitionLabelString: S,
      definitionTitleString: C,
      emphasis: s(),
      hardBreakEscape: s(L),
      hardBreakTrailing: s(L),
      htmlFlow: s($),
      htmlFlowData: x,
      htmlText: s(G),
      htmlTextData: x,
      image: s(X),
      label: fe,
      labelText: ne,
      lineEnding: N,
      link: s(ie),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: ce,
      resourceDestinationString: y,
      resourceTitleString: pe,
      resource: Se,
      setextHeading: s(D),
      setextHeadingLineSequence: T,
      setextHeadingText: _,
      strong: s(),
      thematicBreak: s()
    }
  };
  vi(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(v) {
    let E = {
      type: "root",
      children: []
    };
    const F = {
      stack: [E],
      tokenStack: [],
      config: t,
      enter: a,
      exit: u,
      buffer: l,
      resume: h,
      data: n
    }, j = [];
    let W = -1;
    for (; ++W < v.length; )
      if (v[W][1].type === "listOrdered" || v[W][1].type === "listUnordered")
        if (v[W][0] === "enter")
          j.push(W);
        else {
          const ye = j.pop();
          W = i(v, ye, W);
        }
    for (W = -1; ++W < v.length; ) {
      const ye = t[v[W][0]];
      _i.call(ye, v[W][1].type) && ye[v[W][1].type].call(Object.assign({
        sliceSerialize: v[W][2].sliceSerialize
      }, F), v[W][1]);
    }
    if (F.tokenStack.length > 0) {
      const ye = F.tokenStack[F.tokenStack.length - 1];
      (ye[1] || pr).call(F, void 0, ye[0]);
    }
    for (E.position = {
      start: Oe(v.length > 0 ? v[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Oe(v.length > 0 ? v[v.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, W = -1; ++W < t.transforms.length; )
      E = t.transforms[W](E) || E;
    return E;
  }
  function i(v, E, F) {
    let j = E - 1, W = -1, ye = !1, ee, _e, ot, at;
    for (; ++j <= F; ) {
      const ke = v[j];
      switch (ke[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ke[0] === "enter" ? W++ : W--, at = void 0;
          break;
        }
        case "lineEndingBlank": {
          ke[0] === "enter" && (ee && !at && !W && !ot && (ot = j), at = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          at = void 0;
      }
      if (!W && ke[0] === "enter" && ke[1].type === "listItemPrefix" || W === -1 && ke[0] === "exit" && (ke[1].type === "listUnordered" || ke[1].type === "listOrdered")) {
        if (ee) {
          let Ye = j;
          for (_e = void 0; Ye--; ) {
            const Be = v[Ye];
            if (Be[1].type === "lineEnding" || Be[1].type === "lineEndingBlank") {
              if (Be[0] === "exit") continue;
              _e && (v[_e][1].type = "lineEndingBlank", ye = !0), Be[1].type = "lineEnding", _e = Ye;
            } else if (!(Be[1].type === "linePrefix" || Be[1].type === "blockQuotePrefix" || Be[1].type === "blockQuotePrefixWhitespace" || Be[1].type === "blockQuoteMarker" || Be[1].type === "listItemIndent")) break;
          }
          ot && (!_e || ot < _e) && (ee._spread = !0), ee.end = Object.assign({}, _e ? v[_e][1].start : ke[1].end), v.splice(_e || j, 0, ["exit", ee, ke[2]]), j++, F++;
        }
        if (ke[1].type === "listItemPrefix") {
          const Ye = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ke[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          ee = Ye, v.splice(j, 0, ["enter", Ye, ke[2]]), j++, F++, ot = void 0, at = !0;
        }
      }
    }
    return v[E][1]._spread = ye, F;
  }
  function o(v, E) {
    return F;
    function F(j) {
      a.call(this, v(j), j), E && E.call(this, j);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(v, E, F) {
    this.stack[this.stack.length - 1].children.push(v), this.stack.push(v), this.tokenStack.push([E, F || void 0]), v.position = {
      start: Oe(E.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(v) {
    return E;
    function E(F) {
      v && v.call(this, F), u.call(this, F);
    }
  }
  function u(v, E) {
    const F = this.stack.pop(), j = this.tokenStack.pop();
    if (j)
      j[0].type !== v.type && (E ? E.call(this, v, j[0]) : (j[1] || pr).call(this, v, j[0]));
    else throw new Error("Cannot close `" + v.type + "` (" + ct({
      start: v.start,
      end: v.end
    }) + "): it’s not open");
    F.position.end = Oe(v.end);
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
  function S(v) {
    const E = this.resume(), F = this.stack[this.stack.length - 1];
    F.label = E, F.identifier = Te(this.sliceSerialize(v)).toLowerCase();
  }
  function C() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.title = v;
  }
  function z() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.url = v;
  }
  function P(v) {
    const E = this.stack[this.stack.length - 1];
    if (!E.depth) {
      const F = this.sliceSerialize(v).length;
      E.depth = F;
    }
  }
  function _() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function T(v) {
    const E = this.stack[this.stack.length - 1];
    E.depth = this.sliceSerialize(v).codePointAt(0) === 61 ? 1 : 2;
  }
  function D() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function B(v) {
    const F = this.stack[this.stack.length - 1].children;
    let j = F[F.length - 1];
    (!j || j.type !== "text") && (j = vt(), j.position = {
      start: Oe(v.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, F.push(j)), this.stack.push(j);
  }
  function x(v) {
    const E = this.stack.pop();
    E.value += this.sliceSerialize(v), E.position.end = Oe(v.end);
  }
  function N(v) {
    const E = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const F = E.children[E.children.length - 1];
      F.position.end = Oe(v.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(E.type) && (B.call(this, v), x.call(this, v));
  }
  function L() {
    this.data.atHardBreak = !0;
  }
  function $() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = v;
  }
  function G() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = v;
  }
  function H() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = v;
  }
  function ie() {
    const v = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const E = this.data.referenceType || "shortcut";
      v.type += "Reference", v.referenceType = E, delete v.url, delete v.title;
    } else
      delete v.identifier, delete v.label;
    this.data.referenceType = void 0;
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
  function ne(v) {
    const E = this.sliceSerialize(v), F = this.stack[this.stack.length - 2];
    F.label = Au(E), F.identifier = Te(E).toLowerCase();
  }
  function fe() {
    const v = this.stack[this.stack.length - 1], E = this.resume(), F = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, F.type === "link") {
      const j = v.children;
      F.children = j;
    } else
      F.alt = E;
  }
  function y() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.url = v;
  }
  function pe() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.title = v;
  }
  function Se() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = "collapsed";
  }
  function ce(v) {
    const E = this.resume(), F = this.stack[this.stack.length - 1];
    F.label = E, F.identifier = Te(this.sliceSerialize(v)).toLowerCase(), this.data.referenceType = "full";
  }
  function Le(v) {
    this.data.characterReferenceType = v.type;
  }
  function re(v) {
    const E = this.sliceSerialize(v), F = this.data.characterReferenceType;
    let j;
    F ? (j = fi(E, F === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : j = Dn(E);
    const W = this.stack[this.stack.length - 1];
    W.value += j;
  }
  function Me(v) {
    const E = this.stack.pop();
    E.position.end = Oe(v.end);
  }
  function Ie(v) {
    x.call(this, v);
    const E = this.stack[this.stack.length - 1];
    E.url = this.sliceSerialize(v);
  }
  function Fe(v) {
    x.call(this, v);
    const E = this.stack[this.stack.length - 1];
    E.url = "mailto:" + this.sliceSerialize(v);
  }
  function Pe() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Xe() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function jt() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function $t() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Ut() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function lt() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function bt() {
    return {
      type: "break"
    };
  }
  function xt() {
    return {
      type: "html",
      value: ""
    };
  }
  function Qe() {
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
  function _t(v) {
    return {
      type: "list",
      ordered: v.type === "listOrdered",
      start: null,
      spread: v._spread,
      children: []
    };
  }
  function Vt(v) {
    return {
      type: "listItem",
      spread: v._spread,
      checked: null,
      children: []
    };
  }
  function Wt() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function qt() {
    return {
      type: "strong",
      children: []
    };
  }
  function vt() {
    return {
      type: "text",
      value: ""
    };
  }
  function Ue() {
    return {
      type: "thematicBreak"
    };
  }
}
function Oe(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function vi(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? vi(e, r) : zu(e, r);
  }
}
function zu(e, t) {
  let n;
  for (n in t)
    if (_i.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function pr(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + ct({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + ct({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + ct({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Du(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Lu(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function Pu(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Bu(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Ru(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let o = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = e.applyData(t, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(t, o), o;
}
function Mu(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Fu(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ou(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = it(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let l, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = o + 1, a += 1, e.footnoteCounts.set(r, a);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(l) }]
  };
  e.patch(t, s);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [s]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function Hu(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ju(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Ci(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function $u(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Ci(e, t);
  const i = { src: it(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function Uu(e, t) {
  const n = { src: it(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Vu(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Wu(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Ci(e, t);
  const i = { href: it(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function qu(e, t) {
  const n = { href: it(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Zu(e, t, n) {
  const r = e.all(t), i = n ? Gu(n) : Si(t), o = {}, l = [];
  if (typeof t.checked == "boolean") {
    const h = r[0];
    let c;
    h && h.type === "element" && h.tagName === "p" ? c = h : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
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
  return e.patch(t, u), e.applyData(t, u);
}
function Gu(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Si(n[r]);
  }
  return t;
}
function Si(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Xu(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const l = r[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Qu(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Yu(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Ku(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ju(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], l), i.push(l);
  }
  if (n.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, a = An(t.children[1]), s = ii(t.children[t.children.length - 1]);
    a && s && (l.position = { start: a, end: s }), i.push(l);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function ec(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, a = l ? l.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < a; ) {
    const c = t.children[s], p = {}, f = l ? l[s] : void 0;
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
  return e.patch(t, h), e.applyData(t, h);
}
function tc(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const dr = 9, mr = 32;
function nc(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      gr(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(gr(t.slice(i), i > 0, !1)), o.join("");
}
function gr(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === dr || o === mr; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === dr || o === mr; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function rc(e, t) {
  const n = { type: "text", value: nc(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function ic(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const lc = {
  blockquote: Pu,
  break: Bu,
  code: Ru,
  delete: Mu,
  emphasis: Fu,
  footnoteReference: Ou,
  heading: Hu,
  html: ju,
  imageReference: $u,
  image: Uu,
  inlineCode: Vu,
  linkReference: Wu,
  link: qu,
  listItem: Zu,
  list: Xu,
  paragraph: Qu,
  // @ts-expect-error: root is different, but hard to type.
  root: Yu,
  strong: Ku,
  table: Ju,
  tableCell: tc,
  tableRow: ec,
  text: rc,
  thematicBreak: ic,
  toml: Ct,
  yaml: Ct,
  definition: Ct,
  footnoteDefinition: Ct
};
function Ct() {
}
const Ii = -1, Ft = 0, ft = 1, zt = 2, Bn = 3, Rn = 4, Mn = 5, Fn = 6, Ei = 7, Ai = 8, yr = typeof self == "object" ? self : globalThis, oc = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, l] = t[i];
    switch (o) {
      case Ft:
      case Ii:
        return n(l, i);
      case ft: {
        const a = n([], i);
        for (const s of l)
          a.push(r(s));
        return a;
      }
      case zt: {
        const a = n({}, i);
        for (const [s, u] of l)
          a[r(s)] = r(u);
        return a;
      }
      case Bn:
        return n(new Date(l), i);
      case Rn: {
        const { source: a, flags: s } = l;
        return n(new RegExp(a, s), i);
      }
      case Mn: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [s, u] of l)
          a.set(r(s), r(u));
        return a;
      }
      case Fn: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const s of l)
          a.add(r(s));
        return a;
      }
      case Ei: {
        const { name: a, message: s } = l;
        return n(new yr[a](s), i);
      }
      case Ai:
        return n(BigInt(l), i);
      case "BigInt":
        return n(Object(BigInt(l)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(l).buffer, l);
      case "DataView": {
        const { buffer: a } = new Uint8Array(l);
        return n(new DataView(a), l);
      }
    }
    return n(new yr[o](l), i);
  };
  return r;
}, kr = (e) => oc(/* @__PURE__ */ new Map(), e)(0), Ke = "", { toString: ac } = {}, { keys: sc } = Object, ut = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Ft, t];
  const n = ac.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [ft, Ke];
    case "Object":
      return [zt, Ke];
    case "Date":
      return [Bn, Ke];
    case "RegExp":
      return [Rn, Ke];
    case "Map":
      return [Mn, Ke];
    case "Set":
      return [Fn, Ke];
    case "DataView":
      return [ft, n];
  }
  return n.includes("Array") ? [ft, n] : n.includes("Error") ? [Ei, n] : [zt, n];
}, St = ([e, t]) => e === Ft && (t === "function" || t === "symbol"), uc = (e, t, n, r) => {
  const i = (l, a) => {
    const s = r.push(l) - 1;
    return n.set(a, s), s;
  }, o = (l) => {
    if (n.has(l))
      return n.get(l);
    let [a, s] = ut(l);
    switch (a) {
      case Ft: {
        let h = l;
        switch (s) {
          case "bigint":
            a = Ai, h = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            h = null;
            break;
          case "undefined":
            return i([Ii], l);
        }
        return i([a, h], l);
      }
      case ft: {
        if (s) {
          let p = l;
          return s === "DataView" ? p = new Uint8Array(l.buffer) : s === "ArrayBuffer" && (p = new Uint8Array(l)), i([s, [...p]], l);
        }
        const h = [], c = i([a, h], l);
        for (const p of l)
          h.push(o(p));
        return c;
      }
      case zt: {
        if (s)
          switch (s) {
            case "BigInt":
              return i([s, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([s, l.valueOf()], l);
          }
        if (t && "toJSON" in l)
          return o(l.toJSON());
        const h = [], c = i([a, h], l);
        for (const p of sc(l))
          (e || !St(ut(l[p]))) && h.push([o(p), o(l[p])]);
        return c;
      }
      case Bn:
        return i([a, l.toISOString()], l);
      case Rn: {
        const { source: h, flags: c } = l;
        return i([a, { source: h, flags: c }], l);
      }
      case Mn: {
        const h = [], c = i([a, h], l);
        for (const [p, f] of l)
          (e || !(St(ut(p)) || St(ut(f)))) && h.push([o(p), o(f)]);
        return c;
      }
      case Fn: {
        const h = [], c = i([a, h], l);
        for (const p of l)
          (e || !St(ut(p))) && h.push(o(p));
        return c;
      }
    }
    const { message: u } = l;
    return i([a, { name: s, message: u }], l);
  };
  return o;
}, br = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return uc(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Dt = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? kr(br(e, t)) : structuredClone(e)
) : (e, t) => kr(br(e, t));
function cc(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function hc(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function fc(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || cc, r = e.options.footnoteBackLabel || hc, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const h = e.all(u), c = String(u.identifier).toUpperCase(), p = it(c.toLowerCase());
    let f = 0;
    const m = [], b = e.footnoteCounts.get(c);
    for (; b !== void 0 && ++f <= b; ) {
      m.length > 0 && m.push({ type: "text", value: " " });
      let S = typeof n == "string" ? n : n(s, f);
      typeof S == "string" && (S = { type: "text", value: S }), m.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + p + (f > 1 ? "-" + f : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, f),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(S) ? S : [S]
      });
    }
    const w = h[h.length - 1];
    if (w && w.type === "element" && w.tagName === "p") {
      const S = w.children[w.children.length - 1];
      S && S.type === "text" ? S.value += " " : w.children.push({ type: "text", value: " " }), w.children.push(...m);
    } else
      h.push(...m);
    const k = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + p },
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
            ...Dt(l),
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
const Ot = (
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
      return gc;
    if (typeof e == "function")
      return Ht(e);
    if (typeof e == "object")
      return Array.isArray(e) ? pc(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        dc(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return mc(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function pc(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Ot(e[n]);
  return Ht(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function dc(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Ht(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function mc(e) {
  return Ht(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Ht(e) {
  return t;
  function t(n, r, i) {
    return !!(yc(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function gc() {
  return !0;
}
function yc(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ti = [], kc = !0, bn = !1, bc = "skip";
function Li(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = Ot(i), l = r ? -1 : 1;
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
      let f = Ti, m, b, w;
      if ((!t || o(s, u, h[h.length - 1] || void 0)) && (f = xc(n(s, h)), f[0] === bn))
        return f;
      if ("children" in s && s.children) {
        const k = (
          /** @type {UnistParent} */
          s
        );
        if (k.children && f[0] !== bc)
          for (b = (r ? k.children.length : -1) + l, w = h.concat(k); b > -1 && b < k.children.length; ) {
            const S = k.children[b];
            if (m = a(S, b, w)(), m[0] === bn)
              return m;
            b = typeof m[1] == "number" ? m[1] : b + l;
          }
      }
      return f;
    }
  }
}
function xc(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [kc, e] : e == null ? Ti : [e];
}
function On(e, t, n, r) {
  let i, o, l;
  typeof t == "function" && typeof n != "function" ? (o = void 0, l = t, i = n) : (o = t, l = n, i = r), Li(e, o, a, i);
  function a(s, u) {
    const h = u[u.length - 1], c = h ? h.children.indexOf(s) : void 0;
    return l(s, c, h);
  }
}
const xn = {}.hasOwnProperty, wc = {};
function _c(e, t) {
  const n = t || wc, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = { ...lc, ...n.handlers }, a = {
    all: u,
    applyData: Cc,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: l,
    one: s,
    options: n,
    patch: vc,
    wrap: Ic
  };
  return On(e, function(h) {
    if (h.type === "definition" || h.type === "footnoteDefinition") {
      const c = h.type === "definition" ? r : i, p = String(h.identifier).toUpperCase();
      c.has(p) || c.set(p, h);
    }
  }), a;
  function s(h, c) {
    const p = h.type, f = a.handlers[p];
    if (xn.call(a.handlers, p) && f)
      return f(a, h, c);
    if (a.options.passThrough && a.options.passThrough.includes(p)) {
      if ("children" in h) {
        const { children: b, ...w } = h, k = Dt(w);
        return k.children = a.all(h), k;
      }
      return Dt(h);
    }
    return (a.options.unknownHandler || Sc)(a, h, c);
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
function vc(e, t) {
  e.position && (t.position = ha(e));
}
function Cc(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const l = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: l };
      }
    n.type === "element" && o && Object.assign(n.properties, Dt(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Sc(e, t) {
  const n = t.data || {}, r = "value" in t && !(xn.call(n, "hProperties") || xn.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Ic(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function xr(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function wr(e, t) {
  const n = _c(e, t), r = n.one(e, void 0), i = fc(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Ec(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      wr(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      wr(n, { file: r, ...e || t })
    );
  };
}
function _r(e) {
  if (e)
    throw e;
}
var Tt = Object.prototype.hasOwnProperty, Ni = Object.prototype.toString, vr = Object.defineProperty, Cr = Object.getOwnPropertyDescriptor, Sr = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Ni.call(t) === "[object Array]";
}, Ir = function(t) {
  if (!t || Ni.call(t) !== "[object Object]")
    return !1;
  var n = Tt.call(t, "constructor"), r = t.constructor && t.constructor.prototype && Tt.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || Tt.call(t, i);
}, Er = function(t, n) {
  vr && n.name === "__proto__" ? vr(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Ar = function(t, n) {
  if (n === "__proto__")
    if (Tt.call(t, n)) {
      if (Cr)
        return Cr(t, n).value;
    } else return;
  return t[n];
}, Ac = function e() {
  var t, n, r, i, o, l, a = arguments[0], s = 1, u = arguments.length, h = !1;
  for (typeof a == "boolean" && (h = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = Ar(a, n), i = Ar(t, n), a !== i && (h && i && (Ir(i) || (o = Sr(i))) ? (o ? (o = !1, l = r && Sr(r) ? r : []) : l = r && Ir(r) ? r : {}, Er(a, { name: n, newValue: e(h, l, i) })) : typeof i < "u" && Er(a, { name: n, newValue: i }));
  return a;
};
const Yt = /* @__PURE__ */ ri(Ac);
function wn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Tc() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
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
      i = u, h ? Lc(h, a)(...u) : l(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function Lc(e, t) {
  let n;
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
      if (a && n)
        throw h;
      return i(h);
    }
    a || (s && s.then && typeof s.then == "function" ? s.then(o, i) : s instanceof Error ? i(s) : o(s));
  }
  function i(l, ...a) {
    n || (n = !0, t(l, ...a));
  }
  function o(l) {
    i(null, l);
  }
}
const ze = { basename: Nc, dirname: zc, extname: Dc, join: Pc, sep: "/" };
function Nc(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  kt(e);
  let n = 0, r = -1, i = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let l = -1, a = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      l < 0 && (o = !0, l = i + 1), a > -1 && (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = l));
  return n === r ? r = l : r < 0 && (r = e.length), e.slice(n, r);
}
function zc(e) {
  if (kt(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Dc(e) {
  kt(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, l;
  for (; t--; ) {
    const a = e.codePointAt(t);
    if (a === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (l = !0, n = t + 1), a === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function Pc(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    kt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Bc(n);
}
function Bc(e) {
  kt(e);
  const t = e.codePointAt(0) === 47;
  let n = Rc(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Rc(e, t) {
  let n = "", r = 0, i = -1, o = 0, l = -1, a, s;
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
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (s = n.lastIndexOf("/"), s !== n.length - 1) {
              s < 0 ? (n = "", r = 0) : (n = n.slice(0, s), r = n.length - 1 - n.lastIndexOf("/")), i = l, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = l, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, l) : n = e.slice(i + 1, l), r = l - i - 1;
      i = l, o = 0;
    } else a === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function kt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Mc = { cwd: Fc };
function Fc() {
  return "/";
}
function _n(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Oc(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!_n(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Hc(e);
}
function Hc(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
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
class zi {
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
  constructor(t) {
    let n;
    t ? _n(t) ? n = { path: t } : typeof t == "string" || jc(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Mc.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Kt.length; ) {
      const o = Kt[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      Kt.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? ze.basename(this.path) : void 0;
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
  set basename(t) {
    en(t, "basename"), Jt(t, "basename"), this.path = ze.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? ze.dirname(this.path) : void 0;
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
  set dirname(t) {
    Tr(this.basename, "dirname"), this.path = ze.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? ze.extname(this.path) : void 0;
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
  set extname(t) {
    if (Jt(t, "extname"), Tr(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = ze.join(this.dirname, this.stem + (t || ""));
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
  set path(t) {
    _n(t) && (t = Oc(t)), en(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? ze.basename(this.path, this.extname) : void 0;
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
  set stem(t) {
    en(t, "stem"), Jt(t, "stem"), this.path = ze.join(this.dirname || "", t + (this.extname || ""));
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
  fail(t, n, r) {
    const i = this.message(t, n, r);
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
  info(t, n, r) {
    const i = this.message(t, n, r);
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
  message(t, n, r) {
    const i = new ue(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
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
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function Jt(e, t) {
  if (e && e.includes(ze.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + ze.sep + "`"
    );
}
function en(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Tr(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function jc(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const $c = (
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
), Uc = {}.hasOwnProperty;
class Hn extends $c {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Tc();
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
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Hn()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Yt(!0, {}, this.namespace)), t;
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
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (rn("data", this.frozen), this.namespace[t] = n, this) : Uc.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (rn("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
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
  parse(t) {
    this.freeze();
    const n = It(t), r = this.parser || this.Parser;
    return tn("parse", r), r(String(n), n);
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
  process(t, n) {
    const r = this;
    return this.freeze(), tn("process", this.parser || this.Parser), nn("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, l) {
      const a = It(t), s = (
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
        qc(m) ? p.value = m : p.result = m, u(
          h,
          /** @type {VFileWithOutput<CompileResult>} */
          p
        );
      });
      function u(h, c) {
        h || !c ? l(h) : o ? o(c) : n(void 0, c);
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
  processSync(t) {
    let n = !1, r;
    return this.freeze(), tn("processSync", this.parser || this.Parser), nn("processSync", this.compiler || this.Compiler), this.process(t, i), Nr("processSync", "process", n), r;
    function i(o, l) {
      n = !0, _r(o), r = l;
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
  run(t, n, r) {
    Lr(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(l, a) {
      const s = It(n);
      i.run(t, s, u);
      function u(h, c, p) {
        const f = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || t
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
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, o), Nr("runSync", "run", r), i;
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
  stringify(t, n) {
    this.freeze();
    const r = It(n), i = this.compiler || this.Compiler;
    return nn("stringify", i), Lr(t), i(t, r);
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
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (rn("use", this.frozen), t != null) if (typeof t == "function")
      s(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? a(t) : l(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
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
        wn(b) && wn(f) && (f = Yt(!0, b, f)), r[p] = [u, f, ...m];
      }
    }
  }
}
const Vc = new Hn().freeze();
function tn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function nn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function rn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Lr(e) {
  if (!wn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Nr(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function It(e) {
  return Wc(e) ? e : new zi(e);
}
function Wc(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function qc(e) {
  return typeof e == "string" || Zc(e);
}
function Zc(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Gc = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", zr = [], Dr = { allowDangerousHtml: !0 }, Xc = /^(https?|ircs?|mailto|xmpp)$/i, Qc = [
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
function Yc(e) {
  const t = Kc(e), n = Jc(e);
  return eh(t.runSync(t.parse(n), n), e);
}
function Kc(e) {
  const t = e.rehypePlugins || zr, n = e.remarkPlugins || zr, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Dr } : Dr;
  return Vc().use(Du).use(n).use(Ec, r).use(t);
}
function Jc(e) {
  const t = e.children || "", n = new zi();
  return typeof t == "string" && (n.value = t), n;
}
function eh(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, o = t.disallowedElements, l = t.skipHtml, a = t.unwrapDisallowed, s = t.urlTransform || th;
  for (const h of Qc)
    Object.hasOwn(t, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + Gc + h.id, void 0);
  return On(e, u), ga(e, {
    Fragment: hn,
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
      let f = n ? !n.includes(h.tagName) : o ? o.includes(h.tagName) : !1;
      if (!f && r && typeof c == "number" && (f = !r(h, c, p)), f && p && typeof c == "number")
        return a && h.children ? p.children.splice(c, 1, ...h.children) : p.children.splice(c, 1), c;
    }
  }
}
function th(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Xc.test(e.slice(0, t)) ? e : ""
  );
}
function Pr(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function nh(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function rh(e, t, n) {
  const i = Ot((n || {}).ignore || []), o = ih(t);
  let l = -1;
  for (; ++l < o.length; )
    Li(e, "text", a);
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
    let k = !1, S = [];
    p.lastIndex = 0;
    let C = p.exec(u.value);
    for (; C; ) {
      const z = C.index, P = {
        index: C.index,
        input: C.input,
        stack: [...h, u]
      };
      let _ = f(...C, P);
      if (typeof _ == "string" && (_ = _.length > 0 ? { type: "text", value: _ } : void 0), _ === !1 ? p.lastIndex = z + 1 : (m !== z && S.push({
        type: "text",
        value: u.value.slice(m, z)
      }), Array.isArray(_) ? S.push(..._) : _ && S.push(_), m = z + C[0].length, k = !0), !p.global)
        break;
      C = p.exec(u.value);
    }
    return k ? (m < u.value.length && S.push({ type: "text", value: u.value.slice(m) }), c.children.splice(w, 1, ...S)) : S = [u], w + S.length;
  }
}
function ih(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([lh(i[0]), oh(i[1])]);
  }
  return t;
}
function lh(e) {
  return typeof e == "string" ? new RegExp(nh(e), "g") : e;
}
function oh(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const ln = "phrasing", on = ["autolink", "link", "image", "label"];
function ah() {
  return {
    transforms: [dh],
    enter: {
      literalAutolink: uh,
      literalAutolinkEmail: an,
      literalAutolinkHttp: an,
      literalAutolinkWww: an
    },
    exit: {
      literalAutolink: ph,
      literalAutolinkEmail: fh,
      literalAutolinkHttp: ch,
      literalAutolinkWww: hh
    }
  };
}
function sh() {
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
function uh(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function an(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function ch(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function hh(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function fh(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function ph(e) {
  this.exit(e);
}
function dh(e) {
  rh(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, mh],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), gh]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function mh(e, t, n, r, i) {
  let o = "";
  if (!Di(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !yh(n)))
    return !1;
  const l = kh(n + r);
  if (!l[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: o + t + l[0],
    children: [{ type: "text", value: t + l[0] }]
  };
  return l[1] ? [a, { type: "text", value: l[1] }] : a;
}
function gh(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Di(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function yh(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function kh(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Pr(e, "(");
  let o = Pr(e, ")");
  for (; r !== -1 && i > o; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [e, n];
}
function Di(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || qe(n) || Rt(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
Pi.peek = Eh;
function bh() {
  this.buffer();
}
function xh(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function wh() {
  this.buffer();
}
function _h(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function vh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Te(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function Ch(e) {
  this.exit(e);
}
function Sh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Te(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function Ih(e) {
  this.exit(e);
}
function Eh() {
  return "[";
}
function Pi(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const l = n.enter("footnoteReference"), a = n.enter("reference");
  return o += i.move(
    n.safe(n.associationId(e), { after: "]", before: o })
  ), a(), l(), o += i.move("]"), o;
}
function Ah() {
  return {
    enter: {
      gfmFootnoteCallString: bh,
      gfmFootnoteCall: xh,
      gfmFootnoteDefinitionLabelString: wh,
      gfmFootnoteDefinition: _h
    },
    exit: {
      gfmFootnoteCallString: vh,
      gfmFootnoteCall: Ch,
      gfmFootnoteDefinitionLabelString: Sh,
      gfmFootnoteDefinition: Ih
    }
  };
}
function Th(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: Pi },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, o, l) {
    const a = o.createTracker(l);
    let s = a.move("[^");
    const u = o.enter("footnoteDefinition"), h = o.enter("label");
    return s += a.move(
      o.safe(o.associationId(r), { before: s, after: "]" })
    ), h(), s += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), s += a.move(
      (t ? `
` : " ") + o.indentLines(
        o.containerFlow(r, a.current()),
        t ? Bi : Lh
      )
    )), u(), s;
  }
}
function Lh(e, t, n) {
  return t === 0 ? e : Bi(e, t, n);
}
function Bi(e, t, n) {
  return (n ? "" : "    ") + e;
}
const Nh = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Ri.peek = Rh;
function zh() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Ph },
    exit: { strikethrough: Bh }
  };
}
function Dh() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Nh
      }
    ],
    handlers: { delete: Ri }
  };
}
function Ph(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Bh(e) {
  this.exit(e);
}
function Ri(e, t, n, r) {
  const i = n.createTracker(r), o = n.enter("strikethrough");
  let l = i.move("~~");
  return l += n.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), o(), l;
}
function Rh() {
  return "~";
}
function Mh(e) {
  return e.length;
}
function Fh(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Mh, o = [], l = [], a = [], s = [];
  let u = 0, h = -1;
  for (; ++h < e.length; ) {
    const b = [], w = [];
    let k = -1;
    for (e[h].length > u && (u = e[h].length); ++k < e[h].length; ) {
      const S = Oh(e[h][k]);
      if (n.alignDelimiters !== !1) {
        const C = i(S);
        w[k] = C, (s[k] === void 0 || C > s[k]) && (s[k] = C);
      }
      b.push(S);
    }
    l[h] = b, a[h] = w;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < u; )
      o[c] = Br(r[c]);
  else {
    const b = Br(r);
    for (; ++c < u; )
      o[c] = b;
  }
  c = -1;
  const p = [], f = [];
  for (; ++c < u; ) {
    const b = o[c];
    let w = "", k = "";
    b === 99 ? (w = ":", k = ":") : b === 108 ? w = ":" : b === 114 && (k = ":");
    let S = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[c] - w.length - k.length
    );
    const C = w + "-".repeat(S) + k;
    n.alignDelimiters !== !1 && (S = w.length + S + k.length, S > s[c] && (s[c] = S), f[c] = S), p[c] = C;
  }
  l.splice(1, 0, p), a.splice(1, 0, f), h = -1;
  const m = [];
  for (; ++h < l.length; ) {
    const b = l[h], w = a[h];
    c = -1;
    const k = [];
    for (; ++c < u; ) {
      const S = b[c] || "";
      let C = "", z = "";
      if (n.alignDelimiters !== !1) {
        const P = s[c] - (w[c] || 0), _ = o[c];
        _ === 114 ? C = " ".repeat(P) : _ === 99 ? P % 2 ? (C = " ".repeat(P / 2 + 0.5), z = " ".repeat(P / 2 - 0.5)) : (C = " ".repeat(P / 2), z = C) : z = " ".repeat(P);
      }
      n.delimiterStart !== !1 && !c && k.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && S === "") && (n.delimiterStart !== !1 || c) && k.push(" "), n.alignDelimiters !== !1 && k.push(C), k.push(S), n.alignDelimiters !== !1 && k.push(z), n.padding !== !1 && k.push(" "), (n.delimiterEnd !== !1 || c !== u - 1) && k.push("|");
    }
    m.push(
      n.delimiterEnd === !1 ? k.join("").replace(/ +$/, "") : k.join("")
    );
  }
  return m.join(`
`);
}
function Oh(e) {
  return e == null ? "" : String(e);
}
function Br(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Hh(e, t, n, r) {
  const i = n.enter("blockquote"), o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const l = n.indentLines(
    n.containerFlow(e, o.current()),
    jh
  );
  return i(), l;
}
function jh(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function $h(e, t) {
  return Rr(e, t.inConstruct, !0) && !Rr(e, t.notInConstruct, !1);
}
function Rr(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Mr(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && $h(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Uh(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, o = 0, l = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : o = 1, i = r + t.length, r = n.indexOf(t, i);
  return l;
}
function Vh(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Wh(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function qh(e, t, n, r) {
  const i = Wh(n), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (Vh(e, n)) {
    const c = n.enter("codeIndented"), p = n.indentLines(o, Zh);
    return c(), p;
  }
  const a = n.createTracker(r), s = i.repeat(Math.max(Uh(o, i) + 1, 3)), u = n.enter("codeFenced");
  let h = a.move(s);
  if (e.lang) {
    const c = n.enter(`codeFencedLang${l}`);
    h += a.move(
      n.safe(e.lang, {
        before: h,
        after: " ",
        encode: ["`"],
        ...a.current()
      })
    ), c();
  }
  if (e.lang && e.meta) {
    const c = n.enter(`codeFencedMeta${l}`);
    h += a.move(" "), h += a.move(
      n.safe(e.meta, {
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
function Zh(e, t, n) {
  return (n ? "" : "    ") + e;
}
function jn(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Gh(e, t, n, r) {
  const i = jn(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("definition");
  let a = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("[");
  return u += s.move(
    n.safe(n.associationId(e), {
      before: u,
      after: "]",
      ...s.current()
    })
  ), u += s.move("]: "), a(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (a = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...s.current()
    })
  )), a(), e.title && (a = n.enter(`title${o}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), a()), l(), u;
}
function Xh(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function mt(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Pt(e, t, n) {
  const r = tt(e), i = tt(t);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    n === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
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
Mi.peek = Qh;
function Mi(e, t, n, r) {
  const i = Xh(n), o = n.enter("emphasis"), l = n.createTracker(r), a = l.move(i);
  let s = l.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    })
  );
  const u = s.charCodeAt(0), h = Pt(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  h.inside && (s = mt(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), p = Pt(r.after.charCodeAt(0), c, i);
  p.inside && (s = s.slice(0, -1) + mt(c));
  const f = l.move(i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: h.outside
  }, a + s + f;
}
function Qh(e, t, n) {
  return n.options.emphasis || "*";
}
function Yh(e, t) {
  let n = !1;
  return On(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, bn;
  }), !!((!e.depth || e.depth < 3) && zn(e) && (t.options.setext || n));
}
function Kh(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = n.createTracker(r);
  if (Yh(e, n)) {
    const h = n.enter("headingSetext"), c = n.enter("phrasing"), p = n.containerPhrasing(e, {
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
  const l = "#".repeat(i), a = n.enter("headingAtx"), s = n.enter("phrasing");
  o.move(l + " ");
  let u = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(u) && (u = mt(u.charCodeAt(0)) + u.slice(1)), u = u ? l + " " + u : l, n.options.closeAtx && (u += " " + l), s(), a(), u;
}
Fi.peek = Jh;
function Fi(e) {
  return e.value || "";
}
function Jh() {
  return "<";
}
Oi.peek = ef;
function Oi(e, t, n, r) {
  const i = jn(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("image");
  let a = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("![");
  return u += s.move(
    n.safe(e.alt, { before: u, after: "]", ...s.current() })
  ), u += s.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (a = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), a(), e.title && (a = n.enter(`title${o}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), a()), u += s.move(")"), l(), u;
}
function ef() {
  return "!";
}
Hi.peek = tf;
function Hi(e, t, n, r) {
  const i = e.referenceType, o = n.enter("imageReference");
  let l = n.enter("label");
  const a = n.createTracker(r);
  let s = a.move("![");
  const u = n.safe(e.alt, {
    before: s,
    after: "]",
    ...a.current()
  });
  s += a.move(u + "]["), l();
  const h = n.stack;
  n.stack = [], l = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return l(), n.stack = h, o(), i === "full" || !u || u !== c ? s += a.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function tf() {
  return "!";
}
ji.peek = nf;
function ji(e, t, n) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length; ) {
    const l = n.unsafe[o], a = n.compilePattern(l);
    let s;
    if (l.atBreak)
      for (; s = a.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return i + r + i;
}
function nf() {
  return "`";
}
function $i(e, t) {
  const n = zn(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Ui.peek = rf;
function Ui(e, t, n, r) {
  const i = jn(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.createTracker(r);
  let a, s;
  if ($i(e, n)) {
    const h = n.stack;
    n.stack = [], a = n.enter("autolink");
    let c = l.move("<");
    return c += l.move(
      n.containerPhrasing(e, {
        before: c,
        after: ">",
        ...l.current()
      })
    ), c += l.move(">"), a(), n.stack = h, c;
  }
  a = n.enter("link"), s = n.enter("label");
  let u = l.move("[");
  return u += l.move(
    n.containerPhrasing(e, {
      before: u,
      after: "](",
      ...l.current()
    })
  ), u += l.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), u += l.move("<"), u += l.move(
    n.safe(e.url, { before: u, after: ">", ...l.current() })
  ), u += l.move(">")) : (s = n.enter("destinationRaw"), u += l.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), s(), e.title && (s = n.enter(`title${o}`), u += l.move(" " + i), u += l.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...l.current()
    })
  ), u += l.move(i), s()), u += l.move(")"), a(), u;
}
function rf(e, t, n) {
  return $i(e, n) ? "<" : "[";
}
Vi.peek = lf;
function Vi(e, t, n, r) {
  const i = e.referenceType, o = n.enter("linkReference");
  let l = n.enter("label");
  const a = n.createTracker(r);
  let s = a.move("[");
  const u = n.containerPhrasing(e, {
    before: s,
    after: "]",
    ...a.current()
  });
  s += a.move(u + "]["), l();
  const h = n.stack;
  n.stack = [], l = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return l(), n.stack = h, o(), i === "full" || !u || u !== c ? s += a.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function lf() {
  return "[";
}
function $n(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function of(e) {
  const t = $n(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function af(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Wi(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function sf(e, t, n, r) {
  const i = n.enter("list"), o = n.bulletCurrent;
  let l = e.ordered ? af(n) : $n(n);
  const a = e.ordered ? l === "." ? ")" : "." : of(n);
  let s = t && n.bulletLastUsed ? l === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const h = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      h && (!h.children || !h.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), Wi(n) === l && h
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
  s && (l = a), n.bulletCurrent = l;
  const u = n.containerFlow(e, r);
  return n.bulletLastUsed = l, n.bulletCurrent = o, i(), u;
}
function uf(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function cf(e, t, n, r) {
  const i = uf(n);
  let o = n.bulletCurrent || $n(n);
  t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
  let l = o.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const a = n.createTracker(r);
  a.move(o + " ".repeat(l - o.length)), a.shift(l);
  const s = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, a.current()),
    h
  );
  return s(), u;
  function h(c, p, f) {
    return p ? (f ? "" : " ".repeat(l)) + c : (f ? o : o + " ".repeat(l - o.length)) + c;
  }
}
function hf(e, t, n, r) {
  const i = n.enter("paragraph"), o = n.enter("phrasing"), l = n.containerPhrasing(e, r);
  return o(), i(), l;
}
const ff = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Ot([
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
function pf(e, t, n, r) {
  return (e.children.some(function(l) {
    return ff(l);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function df(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
qi.peek = mf;
function qi(e, t, n, r) {
  const i = df(n), o = n.enter("strong"), l = n.createTracker(r), a = l.move(i + i);
  let s = l.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    })
  );
  const u = s.charCodeAt(0), h = Pt(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  h.inside && (s = mt(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), p = Pt(r.after.charCodeAt(0), c, i);
  p.inside && (s = s.slice(0, -1) + mt(c));
  const f = l.move(i + i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: h.outside
  }, a + s + f;
}
function mf(e, t, n) {
  return n.options.strong || "*";
}
function gf(e, t, n, r) {
  return n.safe(e.value, r);
}
function yf(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function kf(e, t, n) {
  const r = (Wi(n) + (n.options.ruleSpaces ? " " : "")).repeat(yf(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Zi = {
  blockquote: Hh,
  break: Mr,
  code: qh,
  definition: Gh,
  emphasis: Mi,
  hardBreak: Mr,
  heading: Kh,
  html: Fi,
  image: Oi,
  imageReference: Hi,
  inlineCode: ji,
  link: Ui,
  linkReference: Vi,
  list: sf,
  listItem: cf,
  paragraph: hf,
  root: pf,
  strong: qi,
  text: gf,
  thematicBreak: kf
};
function bf() {
  return {
    enter: {
      table: xf,
      tableData: Fr,
      tableHeader: Fr,
      tableRow: _f
    },
    exit: {
      codeText: vf,
      table: wf,
      tableData: sn,
      tableHeader: sn,
      tableRow: sn
    }
  };
}
function xf(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function wf(e) {
  this.exit(e), this.data.inTable = void 0;
}
function _f(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function sn(e) {
  this.exit(e);
}
function Fr(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function vf(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, Cf));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function Cf(e, t) {
  return t === "|" ? t : e;
}
function Sf(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, o = n ? " " : "|";
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
    const k = c(f, b, w), S = u([k]);
    return S.slice(0, S.indexOf(`
`));
  }
  function s(f, m, b, w) {
    const k = b.enter("tableCell"), S = b.enter("phrasing"), C = b.containerPhrasing(f, {
      ...w,
      before: o,
      after: o
    });
    return S(), k(), C;
  }
  function u(f, m) {
    return Fh(f, {
      align: m,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function h(f, m, b) {
    const w = f.children;
    let k = -1;
    const S = [], C = m.enter("table");
    for (; ++k < w.length; )
      S[k] = c(w[k], m, b);
    return C(), S;
  }
  function c(f, m, b) {
    const w = f.children;
    let k = -1;
    const S = [], C = m.enter("tableRow");
    for (; ++k < w.length; )
      S[k] = s(w[k], f, m, b);
    return C(), S;
  }
  function p(f, m, b) {
    let w = Zi.inlineCode(f, m, b);
    return b.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function If() {
  return {
    exit: {
      taskListCheckValueChecked: Or,
      taskListCheckValueUnchecked: Or,
      paragraph: Af
    }
  };
}
function Ef() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Tf }
  };
}
function Or(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Af(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let o = -1, l;
      for (; ++o < i.length; ) {
        const a = i[o];
        if (a.type === "paragraph") {
          l = a;
          break;
        }
      }
      l === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function Tf(e, t, n, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  o && a.move(l);
  let s = Zi.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(h) {
    return h + l;
  }
}
function Lf() {
  return [
    ah(),
    Ah(),
    zh(),
    bf(),
    If()
  ];
}
function Nf(e) {
  return {
    extensions: [
      sh(),
      Th(e),
      Dh(),
      Sf(e),
      Ef()
    ]
  };
}
const zf = {
  tokenize: Ff,
  partial: !0
}, Gi = {
  tokenize: Of,
  partial: !0
}, Xi = {
  tokenize: Hf,
  partial: !0
}, Qi = {
  tokenize: jf,
  partial: !0
}, Df = {
  tokenize: $f,
  partial: !0
}, Yi = {
  name: "wwwAutolink",
  tokenize: Rf,
  previous: Ji
}, Ki = {
  name: "protocolAutolink",
  tokenize: Mf,
  previous: el
}, Re = {
  name: "emailAutolink",
  tokenize: Bf,
  previous: tl
}, De = {};
function Pf() {
  return {
    text: De
  };
}
let Ve = 48;
for (; Ve < 123; )
  De[Ve] = Re, Ve++, Ve === 58 ? Ve = 65 : Ve === 91 && (Ve = 97);
De[43] = Re;
De[45] = Re;
De[46] = Re;
De[95] = Re;
De[72] = [Re, Ki];
De[104] = [Re, Ki];
De[87] = [Re, Yi];
De[119] = [Re, Yi];
function Bf(e, t, n) {
  const r = this;
  let i, o;
  return l;
  function l(c) {
    return !vn(c) || !tl.call(r, r.previous) || Un(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return vn(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), s) : n(c);
  }
  function s(c) {
    return c === 46 ? e.check(Df, h, u)(c) : c === 45 || c === 95 || se(c) ? (o = !0, e.consume(c), s) : h(c);
  }
  function u(c) {
    return e.consume(c), i = !0, s;
  }
  function h(c) {
    return o && i && he(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function Rf(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !Ji.call(r, r.previous) || Un(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(zf, e.attempt(Gi, e.attempt(Xi, o), n), n)(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function Mf(e, t, n) {
  const r = this;
  let i = "", o = !1;
  return l;
  function l(c) {
    return (c === 72 || c === 104) && el.call(r, r.previous) && !Un(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : n(c);
  }
  function a(c) {
    if (he(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), a;
    if (c === 58) {
      const p = i.toLowerCase();
      if (p === "http" || p === "https")
        return e.consume(c), s;
    }
    return n(c);
  }
  function s(c) {
    return c === 47 ? (e.consume(c), o ? u : (o = !0, s)) : n(c);
  }
  function u(c) {
    return c === null || Nt(c) || Q(c) || qe(c) || Rt(c) ? n(c) : e.attempt(Gi, e.attempt(Xi, h), n)(c);
  }
  function h(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function Ff(e, t, n) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : n(l);
  }
  function o(l) {
    return l === null ? n(l) : t(l);
  }
}
function Of(e, t, n) {
  let r, i, o;
  return l;
  function l(u) {
    return u === 46 || u === 95 ? e.check(Qi, s, a)(u) : u === null || Q(u) || qe(u) || u !== 45 && Rt(u) ? s(u) : (o = !0, e.consume(u), l);
  }
  function a(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), l;
  }
  function s(u) {
    return i || r || !o ? n(u) : t(u);
  }
}
function Hf(e, t) {
  let n = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (n++, e.consume(l), i) : l === 41 && r < n ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(Qi, t, o)(l) : l === null || Q(l) || qe(l) ? t(l) : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function jf(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || Q(a) || qe(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || Q(a) || qe(a) ? t(a) : r(a);
  }
  function o(a) {
    return he(a) ? l(a) : n(a);
  }
  function l(a) {
    return a === 59 ? (e.consume(a), r) : he(a) ? (e.consume(a), l) : n(a);
  }
}
function $f(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return se(o) ? n(o) : t(o);
  }
}
function Ji(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Q(e);
}
function el(e) {
  return !he(e);
}
function tl(e) {
  return !(e === 47 || vn(e));
}
function vn(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || se(e);
}
function Un(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
const Uf = {
  tokenize: Yf,
  partial: !0
};
function Vf() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Gf,
        continuation: {
          tokenize: Xf
        },
        exit: Qf
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Zf
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Wf,
        resolveTo: qf
      }
    }
  };
}
function Wf(e, t, n) {
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
      return n(s);
    const u = Te(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function qf(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
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
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", o, t],
    ["enter", l, t],
    ["exit", l, t],
    ["exit", o, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...a), e;
}
function Zf(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, l;
  return a;
  function a(c) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(c) {
    return c !== 94 ? n(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(c) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      c === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || Q(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const p = e.exit("gfmFootnoteCallString");
      return i.includes(Te(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return Q(c) || (l = !0), o++, e.consume(c), c === 92 ? h : u;
  }
  function h(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, u) : u(c);
  }
}
function Gf(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, l = 0, a;
  return s;
  function s(m) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(m) {
    return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", h) : n(m);
  }
  function h(m) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      m === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      m === null || m === 91 || Q(m)
    )
      return n(m);
    if (m === 93) {
      e.exit("chunkString");
      const b = e.exit("gfmFootnoteDefinitionLabelString");
      return o = Te(r.sliceSerialize(b)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
    }
    return Q(m) || (a = !0), l++, e.consume(m), m === 92 ? c : h;
  }
  function c(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), l++, h) : h(m);
  }
  function p(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), i.includes(o) || i.push(o), V(e, f, "gfmFootnoteDefinitionWhitespace")) : n(m);
  }
  function f(m) {
    return t(m);
  }
}
function Xf(e, t, n) {
  return e.check(yt, t, e.attempt(Uf, t, n));
}
function Qf(e) {
  e.exit("gfmFootnoteDefinition");
}
function Yf(e, t, n) {
  const r = this;
  return V(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], !0).length === 4 ? t(o) : n(o);
  }
}
function Kf(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: o,
    resolveAll: i
  };
  return n == null && (n = !0), {
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
            f && we(p, p.length, 0, Mt(f, l.slice(u + 1, s), a)), we(p, p.length, 0, [["exit", c, a], ["enter", l[s][1], a], ["exit", l[s][1], a], ["exit", h, a]]), we(l, u - 1, s - u + 3, p), s = u + p.length - 2;
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
      const b = tt(u);
      if (m === 126)
        return c > 1 ? s(m) : (l.consume(m), c++, f);
      if (c < 2 && !n) return s(m);
      const w = l.exit("strikethroughSequenceTemporary"), k = tt(m);
      return w._open = !k || k === 2 && !!b, w._close = !b || b === 2 && !!k, a(m);
    }
  }
}
class Jf {
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
  add(t, n, r) {
    ep(this, t, n, r);
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
  consume(t) {
    if (this.map.sort(function(o, l) {
      return o[0] - l[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push(t.slice()), t.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const o of i)
        t.push(o);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function ep(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        e.map[i][1] += n, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function tp(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function np() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: rp,
        resolveAll: ip
      }
    }
  };
}
function rp(e, t, n) {
  const r = this;
  let i = 0, o = 0, l;
  return a;
  function a(x) {
    let N = r.events.length - 1;
    for (; N > -1; ) {
      const G = r.events[N][1].type;
      if (G === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      G === "linePrefix") N--;
      else break;
    }
    const L = N > -1 ? r.events[N][1].type : null, $ = L === "tableHead" || L === "tableRow" ? _ : s;
    return $ === _ && r.parser.lazy[r.now().line] ? n(x) : $(x);
  }
  function s(x) {
    return e.enter("tableHead"), e.enter("tableRow"), u(x);
  }
  function u(x) {
    return x === 124 || (l = !0, o += 1), h(x);
  }
  function h(x) {
    return x === null ? n(x) : M(x) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), f) : n(x) : U(x) ? V(e, h, "whitespace")(x) : (o += 1, l && (l = !1, i += 1), x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), l = !0, h) : (e.enter("data"), c(x)));
  }
  function c(x) {
    return x === null || x === 124 || Q(x) ? (e.exit("data"), h(x)) : (e.consume(x), x === 92 ? p : c);
  }
  function p(x) {
    return x === 92 || x === 124 ? (e.consume(x), c) : c(x);
  }
  function f(x) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(x) : (e.enter("tableDelimiterRow"), l = !1, U(x) ? V(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(x) : m(x));
  }
  function m(x) {
    return x === 45 || x === 58 ? w(x) : x === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), b) : P(x);
  }
  function b(x) {
    return U(x) ? V(e, w, "whitespace")(x) : w(x);
  }
  function w(x) {
    return x === 58 ? (o += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(x), e.exit("tableDelimiterMarker"), k) : x === 45 ? (o += 1, k(x)) : x === null || M(x) ? z(x) : P(x);
  }
  function k(x) {
    return x === 45 ? (e.enter("tableDelimiterFiller"), S(x)) : P(x);
  }
  function S(x) {
    return x === 45 ? (e.consume(x), S) : x === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(x), e.exit("tableDelimiterMarker"), C) : (e.exit("tableDelimiterFiller"), C(x));
  }
  function C(x) {
    return U(x) ? V(e, z, "whitespace")(x) : z(x);
  }
  function z(x) {
    return x === 124 ? m(x) : x === null || M(x) ? !l || i !== o ? P(x) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(x)) : P(x);
  }
  function P(x) {
    return n(x);
  }
  function _(x) {
    return e.enter("tableRow"), T(x);
  }
  function T(x) {
    return x === 124 ? (e.enter("tableCellDivider"), e.consume(x), e.exit("tableCellDivider"), T) : x === null || M(x) ? (e.exit("tableRow"), t(x)) : U(x) ? V(e, T, "whitespace")(x) : (e.enter("data"), D(x));
  }
  function D(x) {
    return x === null || x === 124 || Q(x) ? (e.exit("data"), T(x)) : (e.consume(x), x === 92 ? B : D);
  }
  function B(x) {
    return x === 92 || x === 124 ? (e.consume(x), D) : D(x);
  }
}
function ip(e, t) {
  let n = -1, r = !0, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], a = !1, s = 0, u, h, c;
  const p = new Jf();
  for (; ++n < e.length; ) {
    const f = e[n], m = f[1];
    f[0] === "enter" ? m.type === "tableHead" ? (a = !1, s !== 0 && (Hr(p, t, s, u, h), h = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, p.add(n, 0, [["enter", u, t]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, c = void 0, o = [0, 0, 0, 0], l = [0, n + 1, 0, 0], a && (a = !1, h = {
      type: "tableBody",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, p.add(n, 0, [["enter", h, t]])), i = m.type === "tableDelimiterRow" ? 2 : h ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], c = Et(p, t, o, i, void 0, c), o = [0, 0, 0, 0]), l[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (l[0] = l[1], c = Et(p, t, o, i, void 0, c)), o = l, l = [o[1], n, 0, 0])) : m.type === "tableHead" ? (a = !0, s = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (s = n, o[1] !== 0 ? (l[0] = l[1], c = Et(p, t, o, i, n, c)) : l[1] !== 0 && (c = Et(p, t, l, i, n, c)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (l[3] = n);
  }
  for (s !== 0 && Hr(p, t, s, u, h), p.consume(t.events), n = -1; ++n < t.events.length; ) {
    const f = t.events[n];
    f[0] === "enter" && f[1].type === "table" && (f[1]._align = tp(t.events, n));
  }
  return e;
}
function Et(e, t, n, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, Je(t.events, n[0])), e.add(n[0], 0, [["exit", o, t]]));
  const s = Je(t.events, n[1]);
  if (o = {
    type: l,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", o, t]]), n[2] !== 0) {
    const u = Je(t.events, n[2]), h = Je(t.events, n[3]), c = {
      type: a,
      start: Object.assign({}, u),
      end: Object.assign({}, h)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const p = t.events[n[2]], f = t.events[n[3]];
      if (p[1].end = Object.assign({}, f[1].end), p[1].type = "chunkText", p[1].contentType = "text", n[3] > n[2] + 1) {
        const m = n[2] + 1, b = n[3] - n[2] - 1;
        e.add(m, b, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, Je(t.events, i)), e.add(i, 0, [["exit", o, t]]), o = void 0), o;
}
function Hr(e, t, n, r, i) {
  const o = [], l = Je(t.events, n);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, t])), r.end = Object.assign({}, l), o.push(["exit", r, t]), e.add(n + 1, 0, o);
}
function Je(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const lp = {
  name: "tasklistCheck",
  tokenize: ap
};
function op() {
  return {
    text: {
      91: lp
    }
  };
}
function ap(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(s) {
    return Q(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : n(s);
  }
  function l(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(s);
  }
  function a(s) {
    return M(s) ? t(s) : U(s) ? e.check({
      tokenize: sp
    }, t, n)(s) : n(s);
  }
}
function sp(e, t, n) {
  return V(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function up(e) {
  return hi([
    Pf(),
    Vf(),
    Kf(e),
    np(),
    op()
  ]);
}
const cp = {};
function hp(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || cp, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(up(n)), o.push(Lf()), l.push(Nf(n));
}
const fp = "_markdown_10744_1", pp = "_codeHeader_10744_94", dp = "_copyButton_10744_105", mp = "_streamCursor_10744_183", pt = {
  markdown: fp,
  codeHeader: pp,
  copyButton: dp,
  streamCursor: mp
}, gp = () => /* @__PURE__ */ A(
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
), yp = () => /* @__PURE__ */ d(
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
), kp = ({ inline: e, className: t, children: n, ...r }) => {
  const [i, o] = oe(!1), l = /language-(\w+)/.exec(t || ""), a = l ? l[1] : "", s = J(() => {
    const u = String(n).replace(/\n$/, "");
    navigator.clipboard.writeText(u).then(() => {
      o(!0), setTimeout(() => o(!1), 2e3);
    });
  }, [n]);
  return e ? /* @__PURE__ */ d("code", { className: t, ...r, children: n }) : /* @__PURE__ */ A("div", { className: pt.codeWrapper, children: [
    /* @__PURE__ */ A("div", { className: pt.codeHeader, children: [
      /* @__PURE__ */ d("span", { children: a }),
      /* @__PURE__ */ d(
        "button",
        {
          className: pt.copyButton,
          onClick: s,
          "aria-label": "Copy code",
          children: i ? /* @__PURE__ */ A(hn, { children: [
            /* @__PURE__ */ d(yp, {}),
            /* @__PURE__ */ d("span", { children: "Copied" })
          ] }) : /* @__PURE__ */ A(hn, { children: [
            /* @__PURE__ */ d(gp, {}),
            /* @__PURE__ */ d("span", { children: "Copy" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d("pre", { className: t, children: /* @__PURE__ */ d("code", { ...r, children: n }) })
  ] });
}, bp = () => /* @__PURE__ */ d("span", { className: pt.streamCursor, "aria-hidden": "true" }), jr = ({
  content: e,
  className: t,
  isStreaming: n
}) => /* @__PURE__ */ A("div", { className: q(pt.markdown, t), children: [
  /* @__PURE__ */ d(
    Yc,
    {
      remarkPlugins: [hp],
      components: {
        code: kp,
        a: ({ ...r }) => /* @__PURE__ */ d("a", { target: "_blank", rel: "noopener noreferrer", ...r }),
        p: ({ children: r, ...i }) => /* @__PURE__ */ d("p", { ...i, children: r })
      },
      children: e
    }
  ),
  n && /* @__PURE__ */ d(bp, {})
] });
function xp(e) {
  return e.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}
const wp = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "14",
    height: "14",
    "aria-hidden": "true",
    focusable: "false",
    className: le.errorIcon,
    children: /* @__PURE__ */ d(
      "path",
      {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
        clipRule: "evenodd"
      }
    )
  }
), _p = () => /* @__PURE__ */ d(
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
), nl = Ze(
  ({ message: e, onRetry: t, className: n, agentAvatar: r, agentName: i }) => {
    const { role: o, content: l, timestamp: a, status: s } = e, u = o === "user", h = s === "loading", c = s === "streaming", p = s === "error", f = !s || s === "done", m = J(
      (S) => {
        S.stopPropagation(), t == null || t();
      },
      [t]
    ), b = nt(() => {
      const S = (i == null ? void 0 : i.trim().split(/\s+/)) || [];
      return S.length === 1 ? S[0].slice(0, 2).toUpperCase() : (S[0][0] + S[1][0]).toUpperCase();
    }, [i]), w = () => h ? /* @__PURE__ */ d(Cn, { variant: "bubble" }) : p ? /* @__PURE__ */ A("span", { className: le.errorBody, children: [
      /* @__PURE__ */ A("span", { className: le.errorMessage, children: [
        /* @__PURE__ */ d(wp, {}),
        /* @__PURE__ */ d("span", { children: l || "Something went wrong." })
      ] }),
      t && /* @__PURE__ */ A(
        "button",
        {
          type: "button",
          className: le.retryButton,
          onClick: m,
          "aria-label": "Retry message",
          children: [
            /* @__PURE__ */ d(_p, {}),
            "Retry"
          ]
        }
      )
    ] }) : c ? /* @__PURE__ */ d(jr, { content: l, isStreaming: !0 }) : /* @__PURE__ */ d(jr, { content: l }), k = !u && (h || c) ? { "aria-live": "polite", "aria-atomic": !1 } : {};
    return /* @__PURE__ */ A(
      "div",
      {
        className: q(
          le.row,
          u ? le.rowUser : le.rowAssistant,
          n
        ),
        role: "listitem",
        children: [
          !u && (i || r) && /* @__PURE__ */ d("span", { className: q(le.avatar), "aria-hidden": "false", children: r ? /* @__PURE__ */ d(
            "img",
            {
              src: r,
              alt: "",
              className: Z.avatarImg
            }
          ) : /* @__PURE__ */ d("div", { className: Z.avatarInitials, children: b }) }),
          /* @__PURE__ */ d(
            "div",
            {
              className: q(
                le.bubble,
                u && le.bubbleUser,
                h && le.bubbleLoading,
                c && le.bubbleStreaming,
                p && le.bubbleError,
                f && !u && le.bubbleDone
              ),
              ...k,
              children: w()
            }
          ),
          (f || p) && /* @__PURE__ */ d(
            "time",
            {
              className: q(
                le.timestamp,
                u ? le.timestampUser : le.timestampAssistant
              ),
              dateTime: a == null ? void 0 : a.toISOString(),
              "aria-hidden": "true",
              children: xp(a)
            }
          )
        ]
      }
    );
  }
);
nl.displayName = "MessageBubble";
const vp = "_root_1we36_8", Cp = "_scrollArea_1we36_9", Sp = "_list_1we36_10", Ip = "_listItem_1we36_93", Ep = "_sentinelItem_1we36_117", Ap = "_sentinel_1we36_11", Tp = "_emptyState_1we36_134", Lp = "_emptyIcon_1we36_151", Np = "_emptyText_1we36_177", zp = "_emptySubtext_1we36_185", Dp = "_scrollPill_1we36_13", Ee = {
  root: vp,
  scrollArea: Cp,
  list: Sp,
  listItem: Ip,
  sentinelItem: Ep,
  sentinel: Ap,
  emptyState: Tp,
  emptyIcon: Lp,
  emptyText: Np,
  emptySubtext: zp,
  scrollPill: Dp
}, Pp = () => /* @__PURE__ */ d(
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
), Bp = () => /* @__PURE__ */ A("div", { className: Ee.emptyState, "aria-hidden": "true", children: [
  /* @__PURE__ */ d("span", { className: Ee.emptyIcon, children: /* @__PURE__ */ d(
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
  /* @__PURE__ */ d("p", { className: Ee.emptyText, children: "Start the conversation" }),
  /* @__PURE__ */ d("p", { className: Ee.emptySubtext, children: "Send a message to get started" })
] }), rl = Ze(
  ({ messages: e, onRetry: t, className: n, agentAvatar: r, agentName: i }) => {
    const o = Ae(null), l = Ae(null), [a, s] = oe(!1), u = Ae(e.length);
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
    return /* @__PURE__ */ A("div", { className: q(Ee.root, n), children: [
      /* @__PURE__ */ d(
        "div",
        {
          ref: o,
          className: Ee.scrollArea,
          role: "log",
          "aria-live": "polite",
          "aria-label": "Chat messages",
          "aria-relevant": "additions",
          tabIndex: 0,
          children: p ? /* @__PURE__ */ d(Bp, {}) : (
            // Semantic list — MessageBubble uses role="listitem"
            /* @__PURE__ */ A("ul", { className: Ee.list, "aria-label": "Message history", children: [
              e.map((f) => /* @__PURE__ */ d("li", { className: Ee.listItem, children: /* @__PURE__ */ d(
                nl,
                {
                  message: f,
                  agentAvatar: r,
                  agentName: i,
                  onRetry: f.role === "assistant" && f.status === "error" ? t : void 0
                }
              ) }, f.id)),
              /* @__PURE__ */ d("li", { "aria-hidden": "true", className: Ee.sentinelItem, children: /* @__PURE__ */ d("div", { ref: l, className: Ee.sentinel }) })
            ] })
          )
        }
      ),
      a && !p && /* @__PURE__ */ A(
        "button",
        {
          type: "button",
          className: Ee.scrollPill,
          onClick: c,
          "aria-label": "Scroll to latest message",
          children: [
            /* @__PURE__ */ d(Pp, {}),
            /* @__PURE__ */ d("span", { children: "Latest" })
          ]
        }
      )
    ] });
  }
);
rl.displayName = "MessageList";
const Rp = "_root_onznd_14", Mp = "_divider_onznd_26", Fp = "_inputRow_onznd_43", Op = "_textarea_onznd_66", Hp = "_loading_onznd_126", jp = "_sendButton_onznd_133", $p = "_sendButtonActive_onznd_164", Up = "_spinner_onznd_193", Vp = "_srOnly_onznd_209", Ne = {
  root: Rp,
  divider: Mp,
  inputRow: Fp,
  textarea: Op,
  loading: Hp,
  sendButton: jp,
  sendButtonActive: $p,
  spinner: Up,
  srOnly: Vp
}, Wp = 24, qp = 18, Zp = 5, $r = Wp * Zp + qp, il = ({
  onSend: e,
  isLoading: t = !1,
  placeholder: n = "Message…",
  autoFocus: r = !1,
  className: i
}) => {
  const [o, l] = oe(""), a = Ae(null), s = Zr(), u = J(() => {
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
  const c = Ae(t);
  me(() => {
    var w;
    c.current && !t && ((w = a.current) == null || w.focus()), c.current = t;
  }, [t]);
  const p = J(() => {
    const w = o.trim();
    !w || t || (e(w), l(""), h());
  }, [o, t, e, h]), f = J(
    (w) => {
      w.key === "Enter" && !w.shiftKey && (w.preventDefault(), p());
    },
    [p]
  ), m = o.trim().length > 0 && !t, b = `${s}-input`;
  return /* @__PURE__ */ A(
    "div",
    {
      className: q(Ne.root, t && Ne.loading, i),
      role: "group",
      "aria-label": "Message input",
      children: [
        /* @__PURE__ */ d("div", { className: Ne.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ A("div", { className: Ne.inputRow, children: [
          /* @__PURE__ */ d("label", { htmlFor: b, className: Ne.srOnly, children: n }),
          /* @__PURE__ */ d(
            "textarea",
            {
              ref: a,
              id: b,
              className: Ne.textarea,
              value: o,
              onChange: (w) => l(w.target.value),
              onKeyDown: f,
              placeholder: n,
              disabled: t,
              rows: 1,
              "aria-label": n,
              "aria-disabled": t,
              "aria-multiline": "true",
              "aria-describedby": t ? `${s}-loading` : void 0,
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
              className: q(Ne.sendButton, m && Ne.sendButtonActive),
              onClick: p,
              disabled: !m,
              "aria-label": "Send message",
              "aria-disabled": !m,
              tabIndex: 0,
              children: t ? /* @__PURE__ */ d(Xp, {}) : /* @__PURE__ */ d(Gp, {})
            }
          ),
          t && /* @__PURE__ */ d(
            "span",
            {
              id: `${s}-loading`,
              className: Ne.srOnly,
              "aria-live": "polite",
              children: "Waiting for response…"
            }
          )
        ] })
      ]
    }
  );
};
il.displayName = "InputBar";
const Gp = () => /* @__PURE__ */ d(
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
), Xp = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    focusable: "false",
    className: Ne.spinner,
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
), Qp = "_panel_9k026_8", Yp = "_isMaximized_9k026_78", Kp = "_opening_9k026_15", Jp = "_closing_9k026_16", ed = "_errorBanner_9k026_137", td = "_errorBannerIcon_9k026_167", nd = "_errorBannerText_9k026_174", rd = "_errorBannerDismiss_9k026_182", He = {
  panel: Qp,
  isMaximized: Yp,
  opening: Kp,
  closing: Jp,
  errorBanner: ed,
  errorBannerIcon: td,
  errorBannerText: nd,
  errorBannerDismiss: rd
}, id = 200, ll = Gr(
  ({
    isOpen: e,
    onClose: t,
    messages: n,
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
  }, S) => {
    const [C, z] = oe(e), [P, _] = oe(!1), T = Ae(null);
    return me(() => (T.current && (clearTimeout(T.current), T.current = null), e ? (_(!1), z(!0)) : (_(!0), T.current = setTimeout(() => {
      z(!1), _(!1);
    }, id)), () => {
      T.current && clearTimeout(T.current);
    }), [e]), C ? /* @__PURE__ */ A(
      "div",
      {
        ref: S,
        id: f,
        className: q(
          He.panel,
          P ? He.closing : He.opening,
          w && He.isMaximized,
          b
        ),
        role: "dialog",
        "aria-modal": "true",
        "aria-label": s,
        "aria-labelledby": m,
        onClick: (D) => D.stopPropagation(),
        children: [
          /* @__PURE__ */ d(
            Xr,
            {
              agentName: s,
              agentAvatar: u,
              logo: h,
              isLoading: r,
              onClose: t,
              onBack: p,
              onClear: n.length > 0 ? a : void 0,
              dialogLabelId: m,
              isMaximized: w,
              onMaximizeToggle: k
            }
          ),
          /* @__PURE__ */ d(
            rl,
            {
              messages: n,
              onRetry: l,
              agentAvatar: u,
              agentName: s
            }
          ),
          /* @__PURE__ */ d(
            il,
            {
              onSend: o,
              isLoading: r,
              placeholder: c,
              autoFocus: e && !P
            }
          ),
          i && /* @__PURE__ */ A(
            "div",
            {
              className: He.errorBanner,
              role: "alert",
              "aria-live": "assertive",
              "aria-atomic": "true",
              children: [
                /* @__PURE__ */ d("span", { className: He.errorBannerIcon, "aria-hidden": "true", children: "⚠" }),
                /* @__PURE__ */ d("span", { className: He.errorBannerText, children: i }),
                /* @__PURE__ */ d(
                  "button",
                  {
                    type: "button",
                    className: He.errorBannerDismiss,
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
ll.displayName = "ChatPanel";
const ld = "_button_kpqzz_32", od = "_buttonOpen_kpqzz_100", ad = "_iconWrap_kpqzz_16", sd = "_iconSlot_kpqzz_124", ud = "_iconChat_kpqzz_15", cd = "_iconClose_kpqzz_15", hd = "_iconHidden_kpqzz_150", fd = "_logoImg_kpqzz_158", pd = "_logoNode_kpqzz_168", dd = "_unreadDot_kpqzz_47", md = "_ripple_kpqzz_47", xe = {
  button: ld,
  buttonOpen: od,
  iconWrap: ad,
  iconSlot: sd,
  iconChat: ud,
  iconClose: cd,
  iconHidden: hd,
  logoImg: fd,
  logoNode: pd,
  unreadDot: dd,
  ripple: md
}, gd = () => /* @__PURE__ */ d(
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
), yd = () => /* @__PURE__ */ d(
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
), kd = ({ logo: e }) => typeof e == "string" ? /* @__PURE__ */ d("img", { src: e, alt: "", className: xe.logoImg, draggable: !1 }) : /* @__PURE__ */ d("span", { className: xe.logoNode, children: e }), ol = Gr(
  ({
    isOpen: e,
    primaryColor: t,
    logo: n,
    messageCount: r = 0,
    className: i,
    ...o
    // aria-label, aria-expanded, aria-controls, onClick, etc.
  }, l) => {
    const a = !e && r > 0;
    return console.log(t), /* @__PURE__ */ A(
      "button",
      {
        ref: l,
        type: "button",
        className: q(xe.button, e && xe.buttonOpen, i),
        ...o,
        children: [
          /* @__PURE__ */ A("span", { className: xe.iconWrap, children: [
            /* @__PURE__ */ d(
              "span",
              {
                className: q(
                  xe.iconSlot,
                  xe.iconChat,
                  e && xe.iconHidden
                ),
                "aria-hidden": "true",
                children: n ? /* @__PURE__ */ d(kd, { logo: n }) : /* @__PURE__ */ d(gd, {})
              }
            ),
            /* @__PURE__ */ d(
              "span",
              {
                className: q(
                  xe.iconSlot,
                  xe.iconClose,
                  !e && xe.iconHidden
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ d(yd, {})
              }
            )
          ] }),
          a && /* @__PURE__ */ d("span", { className: xe.unreadDot, "aria-hidden": "true" }),
          e && /* @__PURE__ */ d("span", { className: xe.ripple, "aria-hidden": "true" })
        ]
      }
    );
  }
);
ol.displayName = "TriggerButton";
const bd = "_root_153sx_8", xd = "_header_153sx_9", wd = "_headerTop_153sx_51", _d = "_logoWrap_153sx_59", vd = "_logoImg_153sx_68", Cd = "_closeButton_153sx_76", Sd = "_welcomeHeading_153sx_107", Id = "_bodyWrapper_153sx_10", Ed = "_scrollArea_153sx_11", Ad = "_cards_153sx_12", Td = "_card_153sx_12", Ld = "_cardClickable_153sx_192", Nd = "_cardLabel_153sx_210", zd = "_recentRow_153sx_223", Dd = "_recentContent_153sx_229", Pd = "_recentMeta_153sx_234", Bd = "_recentName_153sx_242", Rd = "_recentTime_153sx_251", Md = "_recentText_153sx_257", Fd = "_avatar_153sx_272", Od = "_avatarSm_153sx_282", Hd = "_avatarImg_153sx_287", jd = "_avatarCustom_153sx_294", $d = "_avatarInitials_153sx_302", Ud = "_statusRow_153sx_318", Vd = "_statusIcon_153sx_324", Wd = "_statusContent_153sx_329", qd = "_statusTitle_153sx_334", Zd = "_statusUpdated_153sx_347", Gd = "_articlesCard_153sx_357", Xd = "_searchBar_153sx_365", Qd = "_searchInput_153sx_374", Yd = "_searchIcon_153sx_392", Kd = "_articleList_153sx_400", Jd = "_articleItem_153sx_407", em = "_articleLink_153sx_411", tm = "_articleTitle_153sx_443", nm = "_noResults_153sx_460", rm = "_ctaSection_153sx_13", im = "_ctaButton_153sx_477", lm = "_nav_153sx_14", om = "_navItem_153sx_524", am = "_navItemActive_153sx_557", sm = "_navLabel_153sx_565", R = {
  root: bd,
  header: xd,
  headerTop: wd,
  logoWrap: _d,
  logoImg: vd,
  closeButton: Cd,
  welcomeHeading: Sd,
  bodyWrapper: Id,
  scrollArea: Ed,
  cards: Ad,
  card: Td,
  cardClickable: Ld,
  cardLabel: Nd,
  recentRow: zd,
  recentContent: Dd,
  recentMeta: Pd,
  recentName: Bd,
  recentTime: Rd,
  recentText: Md,
  avatar: Fd,
  avatarSm: Od,
  avatarImg: Hd,
  avatarCustom: jd,
  avatarInitials: $d,
  statusRow: Ud,
  statusIcon: Vd,
  statusContent: Wd,
  statusTitle: qd,
  statusUpdated: Zd,
  articlesCard: Gd,
  searchBar: Xd,
  searchInput: Qd,
  searchIcon: Yd,
  articleList: Kd,
  articleItem: Jd,
  articleLink: em,
  articleTitle: tm,
  noResults: nm,
  ctaSection: rm,
  ctaButton: im,
  nav: lm,
  navItem: om,
  navItemActive: am,
  navLabel: sm
}, um = () => /* @__PURE__ */ d(
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
), cm = () => /* @__PURE__ */ A(
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
), hm = () => /* @__PURE__ */ A(
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
), fm = ({ active: e }) => /* @__PURE__ */ A(
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
), pm = () => /* @__PURE__ */ d(
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
), dm = () => /* @__PURE__ */ A(
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
), mm = () => /* @__PURE__ */ d(
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
), gm = ({
  agentAvatar: e,
  agentName: t,
  size: n = "md"
}) => {
  const r = nt(() => {
    const i = t.trim().split(/\s+/);
    return i.length === 1 ? i[0].slice(0, 2).toUpperCase() : (i[0][0] + i[1][0]).toUpperCase();
  }, [t]);
  return /* @__PURE__ */ d(
    "span",
    {
      className: q(R.avatar, n === "sm" && R.avatarSm),
      "aria-hidden": "true",
      children: typeof e == "string" ? /* @__PURE__ */ d(
        "img",
        {
          src: e,
          alt: "",
          className: R.avatarImg,
          draggable: !1
        }
      ) : e != null ? /* @__PURE__ */ d("span", { className: R.avatarCustom, children: e }) : /* @__PURE__ */ d("span", { className: R.avatarInitials, children: r })
    }
  );
}, ym = ({ logo: e }) => typeof e == "string" ? /* @__PURE__ */ d("span", { className: R.logoWrap, children: /* @__PURE__ */ d("img", { src: e, alt: "", className: R.logoImg, draggable: !1 }) }) : /* @__PURE__ */ d("span", { className: R.logoWrap, children: e }), al = Ze(
  ({
    welcomeMessage: e = `Need support?
How can we help?`,
    welcomeSubMessage: t,
    agentName: n = "AI Assistant",
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
    const [w, k] = oe(""), S = h && u && u.length > 0, C = nt(() => {
      if (!u) return [];
      if (!w.trim()) return u;
      const T = w.toLowerCase();
      return u.filter((D) => D.title.toLowerCase().includes(T));
    }, [u, w]), z = J(
      (T) => k(T.target.value),
      []
    ), P = o != null, _ = a != null;
    return /* @__PURE__ */ A("div", { className: q(R.root, b), children: [
      /* @__PURE__ */ A("div", { className: R.header, children: [
        /* @__PURE__ */ A("div", { className: R.headerTop, children: [
          i ? /* @__PURE__ */ d(ym, { logo: i }) : /* @__PURE__ */ d("span", { className: R.logoWrap, "aria-hidden": "true" }),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: R.closeButton,
              onClick: f,
              "aria-label": "Close chat",
              children: /* @__PURE__ */ d(um, {})
            }
          )
        ] }),
        /* @__PURE__ */ A("h1", { className: R.welcomeHeading, children: [
          e.split(`
`).map((T, D) => /* @__PURE__ */ A(Vn.Fragment, { children: [
            D > 0 && /* @__PURE__ */ d("br", {}),
            T
          ] }, D)),
          /* @__PURE__ */ d("br", {}),
          t == null ? void 0 : t.split(`
`).map((T, D) => /* @__PURE__ */ A(Vn.Fragment, { children: [
            D > 0 && /* @__PURE__ */ d("br", {}),
            T
          ] }, D))
        ] })
      ] }),
      /* @__PURE__ */ A("div", { className: R.bodyWrapper, children: [
        /* @__PURE__ */ A("div", { className: R.scrollArea, children: [
          /* @__PURE__ */ A("div", { className: R.cards, children: [
            P && /* @__PURE__ */ A(
              "button",
              {
                type: "button",
                className: q(R.card, R.cardClickable),
                onClick: c,
                "aria-label": "View recent conversation",
                children: [
                  /* @__PURE__ */ d("p", { className: R.cardLabel, children: "Chat history" }),
                  /* @__PURE__ */ A("div", { className: R.recentRow, children: [
                    /* @__PURE__ */ d(
                      gm,
                      {
                        agentAvatar: r,
                        agentName: n,
                        size: "sm"
                      }
                    ),
                    /* @__PURE__ */ A("div", { className: R.recentContent, children: [
                      /* @__PURE__ */ A("div", { className: R.recentMeta, children: [
                        /* @__PURE__ */ d("span", { className: R.recentName, children: n }),
                        l && /* @__PURE__ */ d("span", { className: R.recentTime, children: l })
                      ] }),
                      /* @__PURE__ */ d("p", { className: R.recentText, children: o })
                    ] })
                  ] })
                ]
              }
            ),
            _ && /* @__PURE__ */ d("div", { className: R.card, children: /* @__PURE__ */ A("div", { className: R.statusRow, children: [
              /* @__PURE__ */ d("span", { className: R.statusIcon, children: /* @__PURE__ */ d(hm, {}) }),
              /* @__PURE__ */ A("div", { className: R.statusContent, children: [
                /* @__PURE__ */ A("p", { className: R.statusTitle, children: [
                  /* @__PURE__ */ d("strong", { children: "Status: " }),
                  a
                ] }),
                s && /* @__PURE__ */ d("p", { className: R.statusUpdated, children: s })
              ] })
            ] }) }),
            S && /* @__PURE__ */ A("div", { className: R.articlesCard, children: [
              /* @__PURE__ */ A("div", { className: R.searchBar, children: [
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "search",
                    className: R.searchInput,
                    placeholder: "Search for help",
                    value: w,
                    onChange: z,
                    "aria-label": "Search help articles"
                  }
                ),
                /* @__PURE__ */ d("span", { className: R.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ d(cm, {}) })
              ] }),
              /* @__PURE__ */ d("ul", { className: R.articleList, "aria-label": "Help articles", children: C.length > 0 ? C.map((T, D) => /* @__PURE__ */ d("li", { className: R.articleItem, children: T.href ? /* @__PURE__ */ A(
                "a",
                {
                  href: T.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: R.articleLink,
                  children: [
                    /* @__PURE__ */ d("span", { className: R.articleTitle, children: T.title }),
                    /* @__PURE__ */ d(Ur, {})
                  ]
                }
              ) : /* @__PURE__ */ A(
                "button",
                {
                  type: "button",
                  className: R.articleLink,
                  onClick: () => m == null ? void 0 : m(T),
                  children: [
                    /* @__PURE__ */ d("span", { className: R.articleTitle, children: T.title }),
                    /* @__PURE__ */ d(Ur, {})
                  ]
                }
              ) }, D)) : /* @__PURE__ */ d("li", { className: R.noResults, children: "No results found" }) })
            ] })
          ] }),
          /* @__PURE__ */ d("div", { className: R.ctaSection, children: /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: R.ctaButton,
              onClick: c,
              children: [
                /* @__PURE__ */ d(mm, {}),
                "Send us a message"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ A("nav", { className: R.nav, "aria-label": "Widget navigation", children: [
          /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: q(R.navItem, R.navItemActive),
              "aria-label": "Home",
              "aria-current": "page",
              children: [
                /* @__PURE__ */ d(fm, { active: !0 }),
                /* @__PURE__ */ d("span", { className: R.navLabel, children: "Home" })
              ]
            }
          ),
          /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: R.navItem,
              onClick: c,
              "aria-label": "Messages",
              children: [
                /* @__PURE__ */ d(pm, {}),
                /* @__PURE__ */ d("span", { className: R.navLabel, children: "Messages" })
              ]
            }
          ),
          S && p && /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: R.navItem,
              onClick: p,
              "aria-label": "Help",
              children: [
                /* @__PURE__ */ d(dm, {}),
                /* @__PURE__ */ d("span", { className: R.navLabel, children: "Help" })
              ]
            }
          )
        ] })
      ] })
    ] });
  }
);
al.displayName = "WidgetHome";
const km = "_root_2tms9_8", bm = "_header_2tms9_33", xm = "_title_2tms9_45", wm = "_closeButton_2tms9_53", _m = "_headerDivider_2tms9_84", vm = "_scrollArea_2tms9_96", Cm = "_searchBarWrap_2tms9_118", Sm = "_searchBar_2tms9_118", Im = "_searchInput_2tms9_141", Em = "_searchIcon_2tms9_158", Am = "_articleList_2tms9_166", Tm = "_articleItem_2tms9_173", Lm = "_articleLink_2tms9_177", Nm = "_articleTitle_2tms9_209", zm = "_noResults_2tms9_221", Dm = "_nav_2tms9_231", Pm = "_navItem_2tms9_239", Bm = "_navItemActive_2tms9_270", Rm = "_navLabel_2tms9_277", K = {
  root: km,
  header: bm,
  title: xm,
  closeButton: wm,
  headerDivider: _m,
  scrollArea: vm,
  searchBarWrap: Cm,
  searchBar: Sm,
  searchInput: Im,
  searchIcon: Em,
  articleList: Am,
  articleItem: Tm,
  articleLink: Lm,
  articleTitle: Nm,
  noResults: zm,
  nav: Dm,
  navItem: Pm,
  navItemActive: Bm,
  navLabel: Rm
}, Mm = () => /* @__PURE__ */ d(
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
), Fm = () => /* @__PURE__ */ A(
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
), Om = () => /* @__PURE__ */ A(
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
), Hm = () => /* @__PURE__ */ d(
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
), jm = ({ active: e }) => /* @__PURE__ */ A(
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
), sl = Ze(
  ({
    helpArticles: e,
    onGoHome: t,
    onStartChat: n,
    onClose: r,
    onArticleClick: i,
    className: o
  }) => {
    const [l, a] = oe(""), s = nt(() => {
      if (!l.trim()) return e;
      const h = l.toLowerCase();
      return e.filter((c) => c.title.toLowerCase().includes(h));
    }, [e, l]), u = J(
      (h) => a(h.target.value),
      []
    );
    return /* @__PURE__ */ A("div", { className: q(K.root, o), children: [
      /* @__PURE__ */ A("header", { className: K.header, children: [
        /* @__PURE__ */ d("h1", { className: K.title, children: "Help" }),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: K.closeButton,
            onClick: r,
            "aria-label": "Close chat",
            children: /* @__PURE__ */ d(Mm, {})
          }
        ),
        /* @__PURE__ */ d("div", { className: K.headerDivider, "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ A("div", { className: K.scrollArea, children: [
        /* @__PURE__ */ d("div", { className: K.searchBarWrap, children: /* @__PURE__ */ A("div", { className: K.searchBar, children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "search",
              className: K.searchInput,
              placeholder: "Search for help",
              value: l,
              onChange: u,
              "aria-label": "Search help articles",
              autoFocus: !0
            }
          ),
          /* @__PURE__ */ d("span", { className: K.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ d(Fm, {}) })
        ] }) }),
        /* @__PURE__ */ d("ul", { className: K.articleList, "aria-label": "Help articles", children: s.length > 0 ? s.map((h, c) => /* @__PURE__ */ d("li", { className: K.articleItem, children: h.href ? /* @__PURE__ */ A(
          "a",
          {
            href: h.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: K.articleLink,
            children: [
              /* @__PURE__ */ d("span", { className: K.articleTitle, children: h.title }),
              /* @__PURE__ */ d(Vr, {})
            ]
          }
        ) : /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            className: K.articleLink,
            onClick: () => i == null ? void 0 : i(h),
            children: [
              /* @__PURE__ */ d("span", { className: K.articleTitle, children: h.title }),
              /* @__PURE__ */ d(Vr, {})
            ]
          }
        ) }, c)) : /* @__PURE__ */ A("li", { className: K.noResults, children: [
          "No articles match “",
          l,
          "”"
        ] }) })
      ] }),
      /* @__PURE__ */ A("nav", { className: K.nav, "aria-label": "Widget navigation", children: [
        /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            className: K.navItem,
            onClick: t,
            "aria-label": "Home",
            children: [
              /* @__PURE__ */ d(Om, {}),
              /* @__PURE__ */ d("span", { className: K.navLabel, children: "Home" })
            ]
          }
        ),
        /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            className: K.navItem,
            onClick: n,
            "aria-label": "Messages",
            children: [
              /* @__PURE__ */ d(Hm, {}),
              /* @__PURE__ */ d("span", { className: K.navLabel, children: "Messages" })
            ]
          }
        ),
        /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            className: q(K.navItem, K.navItemActive),
            "aria-label": "Help",
            "aria-current": "page",
            children: [
              /* @__PURE__ */ d(jm, { active: !0 }),
              /* @__PURE__ */ d("span", { className: K.navLabel, children: "Help" })
            ]
          }
        )
      ] })
    ] });
  }
);
sl.displayName = "WidgetHelp";
const $m = "_root_1tykb_1", Um = "_header_1tykb_24", Vm = "_headerRight_1tykb_35", Wm = "_iconButton_1tykb_41", qm = "_scrollArea_1tykb_68", Zm = "_contentWrapper_1tykb_90", Gm = "_title_1tykb_97", Xm = "_updatedAt_1tykb_106", Qm = "_descriptionBox_1tykb_113", Ym = "_articleContent_1tykb_123", ve = {
  root: $m,
  header: Um,
  headerRight: Vm,
  iconButton: Wm,
  scrollArea: qm,
  contentWrapper: Zm,
  title: Gm,
  updatedAt: Xm,
  descriptionBox: Qm,
  articleContent: Ym
}, Km = () => /* @__PURE__ */ d(
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
), Jm = () => /* @__PURE__ */ d(
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
), eg = () => /* @__PURE__ */ d(
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
), ul = Ze(
  ({ article: e, onBack: t, onClose: n, className: r }) => /* @__PURE__ */ A("div", { className: q(ve.root, r), children: [
    /* @__PURE__ */ A("header", { className: ve.header, children: [
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: ve.iconButton,
          onClick: t,
          "aria-label": "Go back",
          children: /* @__PURE__ */ d(Km, {})
        }
      ),
      /* @__PURE__ */ A("div", { className: ve.headerRight, children: [
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: ve.iconButton,
            "aria-label": "Expand",
            children: /* @__PURE__ */ d(Jm, {})
          }
        ),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: ve.iconButton,
            onClick: n,
            "aria-label": "Close",
            children: /* @__PURE__ */ d(eg, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ d("div", { className: ve.scrollArea, children: /* @__PURE__ */ A("div", { className: ve.contentWrapper, children: [
      /* @__PURE__ */ d("h1", { className: ve.title, children: e.title }),
      e.updatedAt && /* @__PURE__ */ d("p", { className: ve.updatedAt, children: e.updatedAt }),
      e.description && /* @__PURE__ */ d("div", { className: ve.descriptionBox, children: e.description }),
      e.content && /* @__PURE__ */ d("div", { className: ve.articleContent, children: e.content })
    ] }) })
  ] })
);
ul.displayName = "WidgetArticle";
function un() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}
function tg(e) {
  return typeof ReadableStream < "u" && e instanceof ReadableStream;
}
function ng({
  onMessage: e,
  welcomeMessage: t,
  initialMessages: n
}) {
  const r = () => n && n.length > 0 ? n : t ? [
    {
      id: un(),
      role: "assistant",
      content: t,
      timestamp: /* @__PURE__ */ new Date(),
      status: "done"
    }
  ] : [], [i, o] = oe(r), [l, a] = oe(!1), [s, u] = oe(null), h = Ae(null), c = J(
    async (w, k) => {
      const S = w.getReader(), C = new TextDecoder();
      let z = "";
      const P = (T) => {
        var x;
        const D = T.trim();
        if (!D) return "";
        const B = D.startsWith("data:") ? D.replace(/^data:\s*/, "") : D;
        try {
          const N = JSON.parse(B);
          return typeof ((x = N == null ? void 0 : N.message) == null ? void 0 : x.content) == "string" && N.message.content || typeof (N == null ? void 0 : N.content) == "string" && N.content || "";
        } catch {
          return T;
        }
      }, _ = (T) => {
        T && o(
          (D) => D.map(
            (B) => B.id === k ? { ...B, content: B.content + T } : B
          )
        );
      };
      o(
        (T) => T.map(
          (D) => D.id === k ? { ...D, status: "streaming" } : D
        )
      );
      try {
        for (; ; ) {
          const { done: B, value: x } = await S.read();
          if (B) break;
          const N = C.decode(x, { stream: !0 });
          z += N;
          const L = z.split(/\r?\n/);
          z = L.pop() ?? "";
          let $ = "";
          for (const G of L)
            $ += P(G);
          _($);
        }
        const T = C.decode();
        z += T;
        const D = P(z);
        _(D), o(
          (B) => B.map((x) => x.id === k ? { ...x, status: "done" } : x)
        );
      } catch (T) {
        throw console.log(T), o(
          (D) => D.map(
            (B) => B.id === k ? {
              ...B,
              status: "error",
              content: B.content || "Stream interrupted. Please try again."
            } : B
          )
        ), T;
      } finally {
        S.releaseLock();
      }
    },
    []
  ), p = J(
    async (w) => {
      const k = w.trim();
      if (!k || l) return;
      u(null), a(!0);
      const S = {
        id: un(),
        role: "user",
        content: k,
        timestamp: /* @__PURE__ */ new Date(),
        status: "done"
      }, C = i;
      o((_) => [..._, S]);
      const z = un(), P = {
        id: z,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        status: "loading"
      };
      o((_) => [..._, P]);
      try {
        const _ = await e(k, C);
        tg(_) ? await c(_, z) : o(
          (T) => T.map(
            (D) => D.id === z ? {
              ...D,
              content: _,
              status: "done",
              timestamp: /* @__PURE__ */ new Date()
            } : D
          )
        );
      } catch (_) {
        const T = _ instanceof Error ? _.message : "Something went wrong.";
        console.log(_), u(T), o(
          (D) => D.map(
            (B) => B.id === z ? {
              ...B,
              content: T,
              status: "error",
              timestamp: /* @__PURE__ */ new Date()
            } : B
          )
        );
      } finally {
        a(!1);
      }
    },
    [l, i, e, c]
  ), f = J(
    async (w) => {
      h.current = w.trim(), await p(w);
    },
    [p]
  ), m = J(async () => {
    const w = h.current;
    w && (o((k) => {
      const S = [...k].reverse().findIndex((z) => z.role === "assistant");
      if (S === -1) return k;
      const C = k.length - 1 - S;
      return k.filter((z, P) => P !== C);
    }), o((k) => {
      const S = [...k].reverse().findIndex((z) => z.role === "user");
      if (S === -1) return k;
      const C = k.length - 1 - S;
      return k.filter((z, P) => P !== C);
    }), u(null), await p(w));
  }, [p]), b = J(() => {
    o(r()), u(null), h.current = null;
  }, [t]);
  return {
    messages: i,
    sendMessage: f,
    isLoading: l,
    error: s,
    clearMessages: b,
    retryLast: m
  };
}
const rg = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
  "details > summary"
].join(", ");
function Wr(e) {
  return Array.from(
    e.querySelectorAll(rg)
  ).filter((t) => !t.closest("[hidden]") && t.offsetParent !== null);
}
function ig(e, t) {
  me(() => {
    if (!t || !e.current) return;
    const n = e.current, r = Wr(n);
    if (r.length > 0) {
      const i = requestAnimationFrame(() => r[0].focus());
      return () => cancelAnimationFrame(i);
    }
  }, [t, e]), me(() => {
    if (!t || !e.current) return;
    const n = e.current, r = (i) => {
      if (i.key !== "Tab") return;
      const o = Wr(n);
      if (o.length === 0) {
        i.preventDefault();
        return;
      }
      const l = o[0], a = o[o.length - 1];
      i.shiftKey ? document.activeElement === l && (i.preventDefault(), a.focus()) : document.activeElement === a && (i.preventDefault(), l.focus());
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [t, e]);
}
const cl = "(prefers-color-scheme: dark)";
function qr() {
  return typeof window > "u" || !window.matchMedia ? "light" : window.matchMedia(cl).matches ? "dark" : "light";
}
function lg(e) {
  const [t, n] = oe(() => e !== "auto" ? e : qr());
  return me(() => {
    if (e !== "auto") {
      n(e);
      return;
    }
    if (n(qr()), typeof window > "u" || !window.matchMedia)
      return;
    const r = window.matchMedia(cl), i = (o) => {
      n(o.matches ? "dark" : "light");
    };
    return r.addEventListener ? (r.addEventListener("change", i), () => r.removeEventListener("change", i)) : (r.addListener(i), () => r.removeListener(i));
  }, [e]), t;
}
function og({
  primaryColor: e
}) {
  const t = ag(e);
  return {
    "--ai-primary": e,
    "--ai-primary-fg": t,
    "--ai-user-bubble": e
  };
}
function ag(e) {
  const t = sg(e);
  if (!t) return "#ffffff";
  const [n, r, i] = t.map((s) => {
    const u = s / 255;
    return u <= 0.03928 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4);
  }), o = 0.2126 * n + 0.7152 * r + 0.0722 * i, l = (1 + 0.05) / (o + 0.05), a = (o + 0.05) / (0.05 + 0.05);
  return l >= a ? "#ffffff" : "#111827";
}
function sg(e) {
  const t = e.replace(/^#/, ""), n = t.length === 3 ? t.split("").map((i) => i + i).join("") : t;
  if (n.length !== 6) return null;
  const r = parseInt(n, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}
const ug = "_root_vmir2_25", cg = "_panelArea_vmir2_123", hg = "_isMaximized_vmir2_141", fg = "_isOpen_vmir2_169", pg = "_trigger_vmir2_194", je = {
  root: ug,
  "bottom-right": "_bottom-right_vmir2_110",
  "bottom-left": "_bottom-left_vmir2_116",
  panelArea: cg,
  isMaximized: hg,
  isOpen: fg,
  trigger: pg
}, cn = 200, dg = ({
  onMessage: e,
  agentName: t = "AI Assistant",
  agentAvatar: n,
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
  position: S = "bottom-right",
  className: C,
  style: z,
  initialMessages: P,
  showHistory: _ = !1
}) => {
  const [T, D] = oe(!1);
  me(() => D(!0), []);
  const B = w !== void 0, [x, N] = oe(!1), L = B ? w : x, $ = J(
    (ee) => {
      B || N(ee), k == null || k(ee);
    },
    [B, k]
  ), G = J(() => $(!0), [$]);
  console.log(G);
  const H = J(() => $(!1), [$]), ie = J(() => $(!L), [L, $]), [X, ne] = oe(b), [fe, y] = oe(b === "chat"), [pe, Se] = oe(null), g = Ae(null), [ce, Le] = oe(!1), re = J(() => Le((ee) => !ee), []), Me = J(() => {
    g.current && clearTimeout(g.current), ne("chat"), y(!0);
  }, []), Ie = J(() => {
    y(!1), g.current = setTimeout(
      () => ne("home"),
      cn
    );
  }, []), Fe = J(() => {
    g.current && clearTimeout(g.current), X === "chat" ? (y(!1), g.current = setTimeout(
      () => ne("help"),
      cn
    )) : ne("help");
  }, [X]), Pe = J(
    (ee) => {
      g.current && clearTimeout(g.current), Se(ee), X === "chat" ? (y(!1), g.current = setTimeout(
        () => ne("article"),
        cn
      )) : ne("article");
    },
    [X]
  ), Xe = J(() => {
    ne("home");
  }, []);
  me(() => {
    L ? X === "chat" && y(!0) : (g.current && clearTimeout(g.current), y(!1), Le(!1));
  }, [L, X]), me(() => () => {
    g.current && clearTimeout(g.current);
  }, []);
  const jt = L && X === "home" && !fe, $t = L && X === "help" && !fe, Ut = L && X === "article" && !fe && pe != null, lt = L && fe, bt = lg(i), xt = og({ primaryColor: o }), { messages: Qe, sendMessage: wt, isLoading: _t, error: Vt, clearMessages: Wt, retryLast: qt } = ng({ onMessage: e, welcomeMessage: a, initialMessages: P }), vt = _ && Qe.length > 0, Ue = Qe[Qe.length - 1], v = vt ? Ue == null ? void 0 : Ue.content : u, E = vt ? Ue ? new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  }).format(Ue.timestamp) : void 0 : h, F = Ae(null), j = Ae(null);
  ig(F, lt), me(() => {
    var ee;
    L || (ee = j.current) == null || ee.focus();
  }, [L]), me(() => {
    if (!L) return;
    const ee = (_e) => {
      _e.key === "Escape" && (_e.preventDefault(), H());
    };
    return document.addEventListener("keydown", ee), () => document.removeEventListener("keydown", ee);
  }, [L, H]);
  const W = Zr(), ye = `${W}-label`;
  return T ? /* @__PURE__ */ A(
    "div",
    {
      className: q(
        je.root,
        je[S],
        L && je.isOpen,
        ce && je.isMaximized,
        C
      ),
      style: { ...xt, ...z },
      "data-theme": bt,
      children: [
        jt && /* @__PURE__ */ d(
          al,
          {
            className: je.panelArea,
            welcomeMessage: a,
            welcomeSubMessage: s,
            agentName: t,
            agentAvatar: n,
            logo: r,
            recentMessage: v,
            recentMessageTime: E,
            statusText: c,
            statusUpdated: p,
            helpArticles: f,
            showHelpArticles: m,
            onStartChat: Me,
            onShowHelp: Fe,
            onArticleClick: Pe,
            onClose: H
          }
        ),
        $t && f && f.length > 0 && /* @__PURE__ */ d(
          sl,
          {
            className: je.panelArea,
            helpArticles: f,
            onGoHome: Ie,
            onStartChat: Me,
            onArticleClick: Pe,
            onClose: H
          }
        ),
        Ut && /* @__PURE__ */ d(
          ul,
          {
            className: je.panelArea,
            article: pe,
            onBack: Xe,
            onClose: H
          }
        ),
        /* @__PURE__ */ d(
          ll,
          {
            ref: F,
            isOpen: lt,
            onClose: H,
            onBack: Ie,
            messages: Qe,
            isLoading: _t,
            error: Vt,
            onSend: wt,
            onRetry: qt,
            onClear: Wt,
            agentName: t,
            agentAvatar: n,
            logo: r,
            placeholder: l,
            dialogId: W,
            dialogLabelId: ye,
            isMaximized: ce,
            onMaximizeToggle: re
          }
        ),
        !ce && /* @__PURE__ */ d(
          ol,
          {
            ref: j,
            className: je.trigger,
            isOpen: L,
            onClick: ie,
            primaryColor: o,
            logo: r,
            "aria-expanded": L,
            "aria-controls": W,
            "aria-label": L ? "Close chat" : "Open chat"
          }
        )
      ]
    }
  ) : null;
};
dg.displayName = "ChatWidget";
const kg = () => {
  const e = Ae(null);
  return me(() => {
  }, []), e;
}, bg = (e) => nt(() => e instanceof ReadableStream, [e]), mg = hl(null), xg = ({ config: e, children: t }) => /* @__PURE__ */ d(mg.Provider, { value: e, children: t });
export {
  xg as AIInterfaceProvider,
  Xr as ChatHeader,
  ll as ChatPanel,
  dg as ChatWidget,
  il as InputBar,
  nl as MessageBubble,
  rl as MessageList,
  ol as TriggerButton,
  Cn as TypingIndicator,
  sl as WidgetHelp,
  al as WidgetHome,
  ng as useChat,
  ig as useFocusTrap,
  kg as useScrollAnchor,
  bg as useStreamDetection,
  lg as useTheme
};
