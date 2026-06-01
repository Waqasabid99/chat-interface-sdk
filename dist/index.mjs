import Un, { memo as Ge, useMemo as gt, useState as ae, useCallback as J, useRef as Ie, useEffect as fe, useLayoutEffect as qn, useId as Wr, forwardRef as Gr, createContext as hl } from "react";
import { jsxs as A, jsx as d, Fragment as cn } from "react/jsx-runtime";
import './index.css';const V = (...e) => e.filter(Boolean).join(" "), fl = "_root_y08et_23", pl = "_divider_y08et_31", dl = "_identity_y08et_10", ml = "_logo_y08et_11", gl = "_logoImg_y08et_82", yl = "_avatar_y08et_12", bl = "_avatarImg_y08et_110", kl = "_avatarCustom_y08et_120", xl = "_avatarInitials_y08et_132", wl = "_onlineDot_y08et_152", _l = "_nameGroup_y08et_13", vl = "_agentName_y08et_14", Cl = "_statusLine_y08et_15", Sl = "_onlineStatus_y08et_215", Il = "_onlinePip_y08et_224", El = "_actions_y08et_16", Al = "_iconButton_y08et_291", Tl = "_backButton_y08et_332", Ll = "_clearButton_y08et_17", Nl = "_closeButton_y08et_18", ee = {
  root: fl,
  divider: pl,
  identity: dl,
  logo: ml,
  logoImg: gl,
  avatar: yl,
  avatarImg: bl,
  avatarCustom: kl,
  avatarInitials: xl,
  onlineDot: wl,
  nameGroup: _l,
  agentName: vl,
  statusLine: Cl,
  onlineStatus: Sl,
  onlinePip: Il,
  actions: El,
  iconButton: Al,
  backButton: Tl,
  clearButton: Ll,
  closeButton: Nl
}, Pl = "_root_1k3nu_24", Dl = "_rootBubble_1k3nu_46", Rl = "_dotsBubble_1k3nu_55", zl = "_rootInline_1k3nu_66", Bl = "_dotsInline_1k3nu_77", Ml = "_rootStandalone_1k3nu_88", Fl = "_dotsStandalone_1k3nu_102", Ol = "_dots_1k3nu_9", Hl = "_dot_1k3nu_9", jl = "_dot1_1k3nu_128", $l = "_dot2_1k3nu_131", Ul = "_dot3_1k3nu_134", ql = "_inlineLabel_1k3nu_167", Vl = "_caption_1k3nu_179", oe = {
  root: Pl,
  rootBubble: Dl,
  dotsBubble: Rl,
  rootInline: zl,
  dotsInline: Bl,
  rootStandalone: Ml,
  dotsStandalone: Fl,
  dots: Ol,
  dot: Hl,
  dot1: jl,
  dot2: $l,
  dot3: Ul,
  inlineLabel: ql,
  caption: Vl
}, Wl = {
  bubble: "Thinking…",
  inline: "Assistant is typing",
  standalone: "Thinking…"
}, vn = Ge(
  ({ variant: e = "bubble", label: t, caption: n, className: r }) => {
    const i = t ?? Wl[e], o = n ?? i, l = e === "bubble", a = e === "inline", s = e === "standalone";
    return /* @__PURE__ */ A(
      "span",
      {
        className: V(
          oe.root,
          l && oe.rootBubble,
          a && oe.rootInline,
          s && oe.rootStandalone,
          r
        ),
        role: "status",
        "aria-live": "polite",
        "aria-label": i,
        children: [
          /* @__PURE__ */ A(
            "span",
            {
              className: V(
                oe.dots,
                l && oe.dotsBubble,
                a && oe.dotsInline,
                s && oe.dotsStandalone
              ),
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ d("span", { className: V(oe.dot, oe.dot1) }),
                /* @__PURE__ */ d("span", { className: V(oe.dot, oe.dot2) }),
                /* @__PURE__ */ d("span", { className: V(oe.dot, oe.dot3) })
              ]
            }
          ),
          s && /* @__PURE__ */ d("span", { className: oe.caption, "aria-hidden": "true", children: o }),
          a && /* @__PURE__ */ d("span", { className: oe.inlineLabel, "aria-hidden": "true", children: "Typing…" })
        ]
      }
    );
  }
);
vn.displayName = "TypingIndicator";
const Gl = () => /* @__PURE__ */ d(
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
), Xl = () => /* @__PURE__ */ d(
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
), Ql = () => /* @__PURE__ */ d(
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
), Yl = ({ agentAvatar: e, agentName: t }) => {
  const n = gt(() => {
    const r = t.trim().split(/\s+/);
    return r.length === 1 ? r[0].slice(0, 2).toUpperCase() : (r[0][0] + r[1][0]).toUpperCase();
  }, [t]);
  return /* @__PURE__ */ A("span", { className: ee.avatar, "aria-hidden": "true", children: [
    typeof e == "string" ? /* @__PURE__ */ d(
      "img",
      {
        src: e,
        alt: "",
        className: ee.avatarImg,
        draggable: !1
      }
    ) : e != null ? /* @__PURE__ */ d("span", { className: ee.avatarCustom, children: e }) : /* @__PURE__ */ d("span", { className: ee.avatarInitials, children: n }),
    /* @__PURE__ */ d("span", { className: ee.onlineDot, "aria-hidden": "true" })
  ] });
}, Zl = ({ logo: e }) => typeof e == "string" ? /* @__PURE__ */ d("span", { className: ee.logo, "aria-hidden": "true", children: /* @__PURE__ */ d("img", { src: e, alt: "", className: ee.logoImg, draggable: !1 }) }) : /* @__PURE__ */ d("span", { className: ee.logo, "aria-hidden": "true", children: e }), Xr = Ge(
  ({
    agentName: e = "AI Assistant",
    agentAvatar: t,
    logo: n,
    isLoading: r = !1,
    onClose: i,
    onBack: o,
    onClear: l,
    dialogLabelId: a,
    className: s
  }) => /* @__PURE__ */ A("header", { className: V(ee.root, s), children: [
    o && /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: V(ee.iconButton, ee.backButton),
        onClick: o,
        "aria-label": "Go back",
        title: "Go back",
        children: /* @__PURE__ */ d(Gl, {})
      }
    ),
    /* @__PURE__ */ A("div", { className: ee.identity, children: [
      n && /* @__PURE__ */ d(Zl, { logo: n }),
      /* @__PURE__ */ d(Yl, { agentAvatar: t, agentName: e }),
      /* @__PURE__ */ A("div", { className: ee.nameGroup, children: [
        /* @__PURE__ */ d(
          "h2",
          {
            id: a,
            className: ee.agentName,
            title: e,
            children: e
          }
        ),
        /* @__PURE__ */ d("div", { className: ee.statusLine, children: r ? /* @__PURE__ */ d(vn, { variant: "inline" }) : /* @__PURE__ */ A(
          "span",
          {
            className: ee.onlineStatus,
            role: "status",
            "aria-label": "Assistant is online",
            children: [
              /* @__PURE__ */ d("span", { className: ee.onlinePip, "aria-hidden": "true" }),
              "Online"
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ A("div", { className: ee.actions, role: "group", "aria-label": "Chat controls", children: [
      l && /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: V(ee.iconButton, ee.clearButton),
          onClick: l,
          "aria-label": "Clear conversation",
          title: "Clear conversation",
          children: /* @__PURE__ */ d(Ql, {})
        }
      ),
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: V(ee.iconButton, ee.closeButton),
          onClick: i,
          "aria-label": "Close chat",
          title: "Close chat",
          children: /* @__PURE__ */ d(Xl, {})
        }
      )
    ] }),
    /* @__PURE__ */ d("div", { className: ee.divider, "aria-hidden": "true" })
  ] })
);
Xr.displayName = "ChatHeader";
const Kl = "_row_1qwyb_15", Jl = "_timestamp_1qwyb_24", eo = "_rowUser_1qwyb_31", to = "_rowAssistant_1qwyb_36", no = "_avatar_1qwyb_42", ro = "_avatarPulse_1qwyb_56", io = "_bubble_1qwyb_72", lo = "_bubbleUser_1qwyb_99", oo = "_bubbleDone_1qwyb_108", ao = "_bubbleLoading_1qwyb_116", so = "_bubbleStreaming_1qwyb_126", uo = "_bubbleError_1qwyb_134", co = "_errorBody_1qwyb_194", ho = "_errorMessage_1qwyb_200", fo = "_errorIcon_1qwyb_208", po = "_retryButton_1qwyb_216", mo = "_timestampUser_1qwyb_282", go = "_timestampAssistant_1qwyb_286", le = {
  row: Kl,
  timestamp: Jl,
  rowUser: eo,
  rowAssistant: to,
  avatar: no,
  avatarPulse: ro,
  bubble: io,
  bubbleUser: lo,
  bubbleDone: oo,
  bubbleLoading: ao,
  bubbleStreaming: so,
  bubbleError: uo,
  errorBody: co,
  errorMessage: ho,
  errorIcon: fo,
  retryButton: po,
  timestampUser: mo,
  timestampAssistant: go
};
function yo(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const bo = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ko = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, xo = {};
function Vn(e, t) {
  return (xo.jsx ? ko : bo).test(e);
}
const wo = /[ \t\n\f\r]/g;
function _o(e) {
  return typeof e == "object" ? e.type === "text" ? Wn(e.value) : !1 : Wn(e);
}
function Wn(e) {
  return e.replace(wo, "") === "";
}
class yt {
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
yt.prototype.normal = {};
yt.prototype.property = {};
yt.prototype.space = void 0;
function Qr(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new yt(n, r, t);
}
function hn(e) {
  return e.toLowerCase();
}
class pe {
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
pe.prototype.attribute = "";
pe.prototype.booleanish = !1;
pe.prototype.boolean = !1;
pe.prototype.commaOrSpaceSeparated = !1;
pe.prototype.commaSeparated = !1;
pe.prototype.defined = !1;
pe.prototype.mustUseProperty = !1;
pe.prototype.number = !1;
pe.prototype.overloadedBoolean = !1;
pe.prototype.property = "";
pe.prototype.spaceSeparated = !1;
pe.prototype.space = void 0;
let vo = 0;
const O = Xe(), ne = Xe(), fn = Xe(), S = Xe(), X = Xe(), Je = Xe(), ge = Xe();
function Xe() {
  return 2 ** ++vo;
}
const pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: O,
  booleanish: ne,
  commaOrSpaceSeparated: ge,
  commaSeparated: Je,
  number: S,
  overloadedBoolean: fn,
  spaceSeparated: X
}, Symbol.toStringTag, { value: "Module" })), Wt = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(pn)
);
class Cn extends pe {
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
      for (; ++o < Wt.length; ) {
        const l = Wt[o];
        Gn(this, Wt[o], (r & pn[l]) === pn[l]);
      }
  }
}
Cn.prototype.defined = !0;
function Gn(e, t, n) {
  n && (e[t] = n);
}
function tt(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new Cn(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[hn(r)] = r, n[hn(o.attribute)] = r;
  }
  return new yt(t, n, e.space);
}
const Yr = tt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ne,
    ariaAutoComplete: null,
    ariaBusy: ne,
    ariaChecked: ne,
    ariaColCount: S,
    ariaColIndex: S,
    ariaColSpan: S,
    ariaControls: X,
    ariaCurrent: null,
    ariaDescribedBy: X,
    ariaDetails: null,
    ariaDisabled: ne,
    ariaDropEffect: X,
    ariaErrorMessage: null,
    ariaExpanded: ne,
    ariaFlowTo: X,
    ariaGrabbed: ne,
    ariaHasPopup: null,
    ariaHidden: ne,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: X,
    ariaLevel: S,
    ariaLive: null,
    ariaModal: ne,
    ariaMultiLine: ne,
    ariaMultiSelectable: ne,
    ariaOrientation: null,
    ariaOwns: X,
    ariaPlaceholder: null,
    ariaPosInSet: S,
    ariaPressed: ne,
    ariaReadOnly: ne,
    ariaRelevant: null,
    ariaRequired: ne,
    ariaRoleDescription: X,
    ariaRowCount: S,
    ariaRowIndex: S,
    ariaRowSpan: S,
    ariaSelected: ne,
    ariaSetSize: S,
    ariaSort: null,
    ariaValueMax: S,
    ariaValueMin: S,
    ariaValueNow: S,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Zr(e, t) {
  return t in e ? e[t] : t;
}
function Kr(e, t) {
  return Zr(e, t.toLowerCase());
}
const Co = tt({
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
    accept: Je,
    acceptCharset: X,
    accessKey: X,
    action: null,
    allow: null,
    allowFullScreen: O,
    allowPaymentRequest: O,
    allowUserMedia: O,
    alt: null,
    as: null,
    async: O,
    autoCapitalize: null,
    autoComplete: X,
    autoFocus: O,
    autoPlay: O,
    blocking: X,
    capture: null,
    charSet: null,
    checked: O,
    cite: null,
    className: X,
    cols: S,
    colSpan: null,
    content: null,
    contentEditable: ne,
    controls: O,
    controlsList: X,
    coords: S | Je,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: O,
    defer: O,
    dir: null,
    dirName: null,
    disabled: O,
    download: fn,
    draggable: ne,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: O,
    formTarget: null,
    headers: X,
    height: S,
    hidden: fn,
    high: S,
    href: null,
    hrefLang: null,
    htmlFor: X,
    httpEquiv: X,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: O,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: O,
    itemId: null,
    itemProp: X,
    itemRef: X,
    itemScope: O,
    itemType: X,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: O,
    low: S,
    manifest: null,
    max: null,
    maxLength: S,
    media: null,
    method: null,
    min: null,
    minLength: S,
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
    optimum: S,
    pattern: null,
    ping: X,
    placeholder: null,
    playsInline: O,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: O,
    referrerPolicy: null,
    rel: X,
    required: O,
    reversed: O,
    rows: S,
    rowSpan: S,
    sandbox: X,
    scope: null,
    scoped: O,
    seamless: O,
    selected: O,
    shadowRootClonable: O,
    shadowRootDelegatesFocus: O,
    shadowRootMode: null,
    shape: null,
    size: S,
    sizes: null,
    slot: null,
    span: S,
    spellCheck: ne,
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
    typeMustMatch: O,
    useMap: null,
    value: ne,
    width: S,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: X,
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
    rightMargin: S,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ne,
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
    disablePictureInPicture: O,
    disableRemotePlayback: O,
    prefix: null,
    property: null,
    results: S,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Kr
}), So = tt({
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
    about: ge,
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
    className: X,
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
    download: O,
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
    g1: Je,
    g2: Je,
    glyphName: Je,
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
    kernelMatrix: ge,
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
    ping: X,
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
    property: ge,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: ge,
    rev: ge,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: ge,
    requiredFeatures: ge,
    requiredFonts: ge,
    requiredFormats: ge,
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
    strokeDashArray: ge,
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
    systemLanguage: ge,
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
    typeOf: ge,
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
  transform: Zr
}), Jr = tt({
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
}), ei = tt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Kr
}), ti = tt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Io = {
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
}, Eo = /[A-Z]/g, Xn = /-[a-z]/g, Ao = /^data[-\w.:]+$/i;
function To(e, t) {
  const n = hn(t);
  let r = t, i = pe;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Ao.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(Xn, No);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!Xn.test(o)) {
        let l = o.replace(Eo, Lo);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    i = Cn;
  }
  return new i(r, t);
}
function Lo(e) {
  return "-" + e.toLowerCase();
}
function No(e) {
  return e.charAt(1).toUpperCase();
}
const Po = Qr([Yr, Co, Jr, ei, ti], "html"), Sn = Qr([Yr, So, Jr, ei, ti], "svg");
function Do(e) {
  return e.join(" ").trim();
}
var Lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ni(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var In = {}, Qn = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Ro = /\n/g, zo = /^\s*/, Bo = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Mo = /^:\s*/, Fo = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Oo = /^[;\s]*/, Ho = /^\s+|\s+$/g, jo = `
`, Yn = "/", Zn = "*", Ve = "", $o = "comment", Uo = "declaration";
function qo(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(m) {
    var x = m.match(Ro);
    x && (n += x.length);
    var w = m.lastIndexOf(jo);
    r = ~w ? m.length - w : r + m.length;
  }
  function o() {
    var m = { line: n, column: r };
    return function(x) {
      return x.position = new l(m), u(), x;
    };
  }
  function l(m) {
    this.start = m, this.end = { line: n, column: r }, this.source = t.source;
  }
  l.prototype.content = e;
  function a(m) {
    var x = new Error(
      t.source + ":" + n + ":" + r + ": " + m
    );
    if (x.reason = m, x.filename = t.source, x.line = n, x.column = r, x.source = e, !t.silent) throw x;
  }
  function s(m) {
    var x = m.exec(e);
    if (x) {
      var w = x[0];
      return i(w), e = e.slice(w.length), x;
    }
  }
  function u() {
    s(zo);
  }
  function h(m) {
    var x;
    for (m = m || []; x = c(); )
      x !== !1 && m.push(x);
    return m;
  }
  function c() {
    var m = o();
    if (!(Yn != e.charAt(0) || Zn != e.charAt(1))) {
      for (var x = 2; Ve != e.charAt(x) && (Zn != e.charAt(x) || Yn != e.charAt(x + 1)); )
        ++x;
      if (x += 2, Ve === e.charAt(x - 1))
        return a("End of comment missing");
      var w = e.slice(2, x - 2);
      return r += 2, i(w), e = e.slice(x), r += 2, m({
        type: $o,
        comment: w
      });
    }
  }
  function p() {
    var m = o(), x = s(Bo);
    if (x) {
      if (c(), !s(Mo)) return a("property missing ':'");
      var w = s(Fo), k = m({
        type: Uo,
        property: Kn(x[0].replace(Qn, Ve)),
        value: w ? Kn(w[0].replace(Qn, Ve)) : Ve
      });
      return s(Oo), k;
    }
  }
  function f() {
    var m = [];
    h(m);
    for (var x; x = p(); )
      x !== !1 && (m.push(x), h(m));
    return m;
  }
  return u(), f();
}
function Kn(e) {
  return e ? e.replace(Ho, Ve) : Ve;
}
var Vo = qo, Wo = Lt && Lt.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(In, "__esModule", { value: !0 });
In.default = Xo;
const Go = Wo(Vo);
function Xo(e, t) {
  let n = null;
  if (!e || typeof e != "string")
    return n;
  const r = (0, Go.default)(e), i = typeof t == "function";
  return r.forEach((o) => {
    if (o.type !== "declaration")
      return;
    const { property: l, value: a } = o;
    i ? t(l, a, o) : a && (n = n || {}, n[l] = a);
  }), n;
}
var zt = {};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.camelCase = void 0;
var Qo = /^--[a-zA-Z0-9_-]+$/, Yo = /-([a-z])/g, Zo = /^[^-]+$/, Ko = /^-(webkit|moz|ms|o|khtml)-/, Jo = /^-(ms)-/, ea = function(e) {
  return !e || Zo.test(e) || Qo.test(e);
}, ta = function(e, t) {
  return t.toUpperCase();
}, Jn = function(e, t) {
  return "".concat(t, "-");
}, na = function(e, t) {
  return t === void 0 && (t = {}), ea(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(Jo, Jn) : e = e.replace(Ko, Jn), e.replace(Yo, ta));
};
zt.camelCase = na;
var ra = Lt && Lt.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, ia = ra(In), la = zt;
function dn(e, t) {
  var n = {};
  return !e || typeof e != "string" || (0, ia.default)(e, function(r, i) {
    r && i && (n[(0, la.camelCase)(r, t)] = i);
  }), n;
}
dn.default = dn;
var oa = dn;
const aa = /* @__PURE__ */ ni(oa), ri = ii("end"), En = ii("start");
function ii(e) {
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
function sa(e) {
  const t = En(e), n = ri(e);
  if (t && n)
    return { start: t, end: n };
}
function ct(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? er(e.position) : "start" in e || "end" in e ? er(e) : "line" in e || "column" in e ? mn(e) : "";
}
function mn(e) {
  return tr(e && e.line) + ":" + tr(e && e.column);
}
function er(e) {
  return mn(e && e.start) + "-" + mn(e && e.end);
}
function tr(e) {
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
const An = {}.hasOwnProperty, ua = /* @__PURE__ */ new Map(), ca = /[A-Z]/g, ha = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), fa = /* @__PURE__ */ new Set(["td", "th"]), li = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function pa(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = wa(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = xa(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? Sn : Po,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = oi(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function oi(e, t, n) {
  if (t.type === "element")
    return da(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return ma(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return ya(e, t, n);
  if (t.type === "mdxjsEsm")
    return ga(e, t);
  if (t.type === "root")
    return ba(e, t, n);
  if (t.type === "text")
    return ka(e, t);
}
function da(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Sn, e.schema = i), e.ancestors.push(t);
  const o = si(e, t.tagName, !1), l = _a(e, t);
  let a = Ln(e, t);
  return ha.has(t.tagName) && (a = a.filter(function(s) {
    return typeof s == "string" ? !_o(s) : !0;
  })), ai(e, l, o, t), Tn(l, a), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function ma(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  dt(e, t.position);
}
function ga(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  dt(e, t.position);
}
function ya(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = Sn, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : si(e, t.name, !0), l = va(e, t), a = Ln(e, t);
  return ai(e, l, o, t), Tn(l, a), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function ba(e, t, n) {
  const r = {};
  return Tn(r, Ln(e, t)), e.create(t, e.Fragment, r, n);
}
function ka(e, t) {
  return t.value;
}
function ai(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Tn(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function xa(e, t, n) {
  return r;
  function r(i, o, l, a) {
    const u = Array.isArray(l.children) ? n : t;
    return a ? u(o, l, a) : u(o, l);
  }
}
function wa(e, t) {
  return n;
  function n(r, i, o, l) {
    const a = Array.isArray(o.children), s = En(r);
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
function _a(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && An.call(t.properties, i)) {
      const o = Ca(e, i, t.properties[i]);
      if (o) {
        const [l, a] = o;
        e.tableCellAlignToStyle && l === "align" && typeof a == "string" && fa.has(t.tagName) ? r = a : n[l] = a;
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
function va(e, t) {
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
function Ln(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : ua;
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
    const a = oi(e, o, l);
    a !== void 0 && n.push(a);
  }
  return n;
}
function Ca(e, t, n) {
  const r = To(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? yo(n) : Do(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Sa(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = Ia(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Io[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Sa(e, t) {
  try {
    return aa(t, { reactCompat: !0 });
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
    throw i.file = e.filePath || void 0, i.url = li + "#cannot-parse-style-attribute", i;
  }
}
function si(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, l;
    for (; ++o < i.length; ) {
      const a = Vn(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
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
    r = Vn(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return An.call(e.components, i) ? e.components[i] : i;
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
  throw n.file = e.filePath || void 0, n.url = li + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Ia(e) {
  const t = {};
  let n;
  for (n in e)
    An.call(e, n) && (t[Ea(n)] = e[n]);
  return t;
}
function Ea(e) {
  let t = e.replace(ca, Aa);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Aa(e) {
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
}, Ta = {};
function Nn(e, t) {
  const n = Ta, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return ui(e, r, i);
}
function ui(e, t, n) {
  if (La(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return nr(e.children, t, n);
  }
  return Array.isArray(e) ? nr(e, t, n) : "";
}
function nr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = ui(e[i], t, n);
  return r.join("");
}
function La(e) {
  return !!(e && typeof e == "object");
}
const rr = document.createElement("i");
function Pn(e) {
  const t = "&" + e + ";";
  rr.innerHTML = t;
  const n = rr.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function be(e, t, n, r) {
  const i = e.length;
  let o = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4;
}
function ve(e, t) {
  return e.length > 0 ? (be(e, e.length, 0, t), e) : t;
}
const ir = {}.hasOwnProperty;
function ci(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Na(t, e[n]);
  return t;
}
function Na(e, t) {
  let n;
  for (n in t) {
    const i = (ir.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let l;
    if (o)
      for (l in o) {
        ir.call(i, l) || (i[l] = []);
        const a = o[l];
        Pa(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function Pa(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  be(e, 0, 0, r);
}
function hi(e, t) {
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
function Ee(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ce = Oe(/[A-Za-z]/), se = Oe(/[\dA-Za-z]/), Da = Oe(/[#-'*+\--9=?A-Z^-~]/);
function Nt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const gn = Oe(/\d/), Ra = Oe(/[\dA-Fa-f]/), za = Oe(/[!-/:-@[-`{-~]/);
function B(e) {
  return e !== null && e < -2;
}
function G(e) {
  return e !== null && (e < 0 || e === 32);
}
function j(e) {
  return e === -2 || e === -1 || e === 32;
}
const Bt = Oe(new RegExp("\\p{P}|\\p{S}", "u")), We = Oe(/\s/);
function Oe(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function nt(e) {
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
function q(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(s) {
    return j(s) ? (e.enter(n), a(s)) : t(s);
  }
  function a(s) {
    return j(s) && o++ < i ? (e.consume(s), a) : (e.exit(n), t(s));
  }
}
const Ba = {
  tokenize: Ma
};
function Ma(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), q(e, t, "linePrefix");
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
    return B(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
  }
}
const Fa = {
  tokenize: Oa
}, lr = {
  tokenize: Ha
};
function Oa(e) {
  const t = this, n = [];
  let r = 0, i, o, l;
  return a;
  function a(C) {
    if (r < n.length) {
      const R = n[r];
      return t.containerState = R[1], e.attempt(R[0].continuation, s, u)(C);
    }
    return u(C);
  }
  function s(C) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && I();
      const R = t.events.length;
      let N = R, _;
      for (; N--; )
        if (t.events[N][0] === "exit" && t.events[N][1].type === "chunkFlow") {
          _ = t.events[N][1].end;
          break;
        }
      k(r);
      let T = R;
      for (; T < t.events.length; )
        t.events[T][1].end = {
          ..._
        }, T++;
      return be(t.events, N + 1, 0, t.events.slice(R)), t.events.length = T, u(C);
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
    return t.containerState = {}, e.check(lr, h, c)(C);
  }
  function h(C) {
    return i && I(), k(r), p(C);
  }
  function c(C) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, m(C);
  }
  function p(C) {
    return t.containerState = {}, e.attempt(lr, f, m)(C);
  }
  function f(C) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(C);
  }
  function m(C) {
    if (C === null) {
      i && I(), k(0), e.consume(C);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: o
    }), x(C);
  }
  function x(C) {
    if (C === null) {
      w(e.exit("chunkFlow"), !0), k(0), e.consume(C);
      return;
    }
    return B(C) ? (e.consume(C), w(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(C), x);
  }
  function w(C, R) {
    const N = t.sliceStream(C);
    if (R && N.push(null), C.previous = o, o && (o.next = C), o = C, i.defineSkip(C.start), i.write(N), t.parser.lazy[C.start.line]) {
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
      let D = T, H, b;
      for (; D--; )
        if (t.events[D][0] === "exit" && t.events[D][1].type === "chunkFlow") {
          if (H) {
            b = t.events[D][1].end;
            break;
          }
          H = !0;
        }
      for (k(r), _ = T; _ < t.events.length; )
        t.events[_][1].end = {
          ...b
        }, _++;
      be(t.events, D + 1, 0, t.events.slice(T)), t.events.length = _;
    }
  }
  function k(C) {
    let R = n.length;
    for (; R-- > C; ) {
      const N = n[R];
      t.containerState = N[1], N[0].exit.call(t, e);
    }
    n.length = C;
  }
  function I() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function Ha(e, t, n) {
  return q(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function et(e) {
  if (e === null || G(e) || We(e))
    return 1;
  if (Bt(e))
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
const yn = {
  name: "attention",
  resolveAll: ja,
  tokenize: $a
};
function ja(e, t) {
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
          or(c, -s), or(p, s), l = {
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
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = ve(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = ve(u, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["enter", o, t]]), u = ve(u, Mt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = ve(u, [["exit", o, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (h = 2, u = ve(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : h = 0, be(e, r - 1, n - r + 3, u), n = r + u.length - h - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function $a(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = et(r);
  let o;
  return l;
  function l(s) {
    return o = s, e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === o)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), h = et(s), c = !h || h === 2 && i || n.includes(s), p = !i || i === 2 && h || n.includes(r);
    return u._open = !!(o === 42 ? c : c && (i || !p)), u._close = !!(o === 42 ? p : p && (h || !c)), t(s);
  }
}
function or(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Ua = {
  name: "autolink",
  tokenize: qa
};
function qa(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(f) {
    return ce(f) ? (e.consume(f), l) : f === 64 ? n(f) : u(f);
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
    return f === 64 ? (e.consume(f), h) : Da(f) ? (e.consume(f), u) : n(f);
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
const bt = {
  partial: !0,
  tokenize: Va
};
function Va(e, t, n) {
  return r;
  function r(o) {
    return j(o) ? q(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || B(o) ? t(o) : n(o);
  }
}
const fi = {
  continuation: {
    tokenize: Ga
  },
  exit: Xa,
  name: "blockQuote",
  tokenize: Wa
};
function Wa(e, t, n) {
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
    return j(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function Ga(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return j(l) ? q(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l);
  }
  function o(l) {
    return e.attempt(fi, t, n)(l);
  }
}
function Xa(e) {
  e.exit("blockQuote");
}
const pi = {
  name: "characterEscape",
  tokenize: Qa
};
function Qa(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return za(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const di = {
  name: "characterReference",
  tokenize: Ya
};
function Ya(e, t, n) {
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
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = Ra, h) : (e.enter("characterReferenceValue"), o = 7, l = gn, h(c));
  }
  function h(c) {
    if (c === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return l === se && !Pn(r.sliceSerialize(p)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(c) && i++ < o ? (e.consume(c), h) : n(c);
  }
}
const ar = {
  partial: !0,
  tokenize: Ka
}, sr = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Za
};
function Za(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: N
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
    return _ === a ? (l++, e.consume(_), h) : l < 3 ? n(_) : (e.exit("codeFencedFenceSequence"), j(_) ? q(e, c, "whitespace")(_) : c(_));
  }
  function c(_) {
    return _ === null || B(_) ? (e.exit("codeFencedFence"), r.interrupt ? t(_) : e.check(ar, x, R)(_)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(_));
  }
  function p(_) {
    return _ === null || B(_) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(_)) : j(_) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), q(e, f, "whitespace")(_)) : _ === 96 && _ === a ? n(_) : (e.consume(_), p);
  }
  function f(_) {
    return _ === null || B(_) ? c(_) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(_));
  }
  function m(_) {
    return _ === null || B(_) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(_)) : _ === 96 && _ === a ? n(_) : (e.consume(_), m);
  }
  function x(_) {
    return e.attempt(i, R, w)(_);
  }
  function w(_) {
    return e.enter("lineEnding"), e.consume(_), e.exit("lineEnding"), k;
  }
  function k(_) {
    return o > 0 && j(_) ? q(e, I, "linePrefix", o + 1)(_) : I(_);
  }
  function I(_) {
    return _ === null || B(_) ? e.check(ar, x, R)(_) : (e.enter("codeFlowValue"), C(_));
  }
  function C(_) {
    return _ === null || B(_) ? (e.exit("codeFlowValue"), I(_)) : (e.consume(_), C);
  }
  function R(_) {
    return e.exit("codeFenced"), t(_);
  }
  function N(_, T, D) {
    let H = 0;
    return b;
    function b(M) {
      return _.enter("lineEnding"), _.consume(M), _.exit("lineEnding"), L;
    }
    function L(M) {
      return _.enter("codeFencedFence"), j(M) ? q(_, P, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(M) : P(M);
    }
    function P(M) {
      return M === a ? (_.enter("codeFencedFenceSequence"), $(M)) : D(M);
    }
    function $(M) {
      return M === a ? (H++, _.consume(M), $) : H >= l ? (_.exit("codeFencedFenceSequence"), j(M) ? q(_, Q, "whitespace")(M) : Q(M)) : D(M);
    }
    function Q(M) {
      return M === null || B(M) ? (_.exit("codeFencedFence"), T(M)) : D(M);
    }
  }
}
function Ka(e, t, n) {
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
  tokenize: es
}, Ja = {
  partial: !0,
  tokenize: ts
};
function es(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), q(e, o, "linePrefix", 5)(u);
  }
  function o(u) {
    const h = r.events[r.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? l(u) : n(u);
  }
  function l(u) {
    return u === null ? s(u) : B(u) ? e.attempt(Ja, l, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || B(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function ts(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? n(l) : B(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : q(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : B(l) ? i(l) : n(l);
  }
}
const ns = {
  name: "codeText",
  previous: is,
  resolve: rs,
  tokenize: ls
};
function rs(e) {
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
function is(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function ls(e, t, n) {
  let r = 0, i, o;
  return l;
  function l(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
  }
  function a(c) {
    return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), s(c));
  }
  function s(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), s) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, h(c)) : B(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || B(c) ? (e.exit("codeTextData"), s(c)) : (e.consume(c), u);
  }
  function h(c) {
    return c === 96 ? (e.consume(c), i++, h) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (o.type = "codeTextData", u(c));
  }
}
class os {
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
function mi(e) {
  const t = {};
  let n = -1, r, i, o, l, a, s, u;
  const h = new os(e);
  for (; ++n < h.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = h.get(n), n && r[1].type === "chunkFlow" && h.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content"))
      for (; ++o < s.length && s[o][1].type !== "content"; )
        s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, as(h, n)), n = t[n], u = !0);
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
  return be(e, 0, Number.POSITIVE_INFINITY, h.slice(0)), !u;
}
function as(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [];
  let l = n._tokenizer;
  l || (l = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const a = l.events, s = [], u = {};
  let h, c, p = -1, f = n, m = 0, x = 0;
  const w = [x];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; )
      ;
    o.push(i), f._tokenizer || (h = r.sliceStream(f), f.next || h.push(null), c && l.defineSkip(f.start), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(h), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), c = f, f = f.next;
  }
  for (f = n; ++p < a.length; )
    // Find a void token that includes a break.
    a[p][0] === "exit" && a[p - 1][0] === "enter" && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && (x = p + 1, w.push(x), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (l.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : w.pop(), p = w.length; p--; ) {
    const k = a.slice(w[p], w[p + 1]), I = o.pop();
    s.push([I, I + k.length - 1]), e.splice(I, 2, k);
  }
  for (s.reverse(), p = -1; ++p < s.length; )
    u[m + s[p][0]] = m + s[p][1], m += s[p][1] - s[p][0] - 1;
  return u;
}
const ss = {
  resolve: cs,
  tokenize: hs
}, us = {
  partial: !0,
  tokenize: fs
};
function cs(e) {
  return mi(e), e;
}
function hs(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : B(a) ? e.check(us, l, o)(a) : (e.consume(a), i);
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
function fs(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), q(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || B(l))
      return n(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function gi(e, t, n, r, i, o, l, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let h = 0;
  return c;
  function c(k) {
    return k === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(k), e.exit(o), p) : k === null || k === 32 || k === 41 || Nt(k) ? n(k) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), x(k));
  }
  function p(k) {
    return k === 62 ? (e.enter(o), e.consume(k), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), f(k));
  }
  function f(k) {
    return k === 62 ? (e.exit("chunkString"), e.exit(a), p(k)) : k === null || k === 60 || B(k) ? n(k) : (e.consume(k), k === 92 ? m : f);
  }
  function m(k) {
    return k === 60 || k === 62 || k === 92 ? (e.consume(k), f) : f(k);
  }
  function x(k) {
    return !h && (k === null || k === 41 || G(k)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(k)) : h < u && k === 40 ? (e.consume(k), h++, x) : k === 41 ? (e.consume(k), h--, x) : k === null || k === 32 || k === 40 || Nt(k) ? n(k) : (e.consume(k), k === 92 ? w : x);
  }
  function w(k) {
    return k === 40 || k === 41 || k === 92 ? (e.consume(k), x) : x(k);
  }
}
function yi(e, t, n, r, i, o) {
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
    f === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? n(f) : f === 93 ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : B(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), h) : (e.enter("chunkString", {
      contentType: "string"
    }), c(f));
  }
  function c(f) {
    return f === null || f === 91 || f === 93 || B(f) || a++ > 999 ? (e.exit("chunkString"), h(f)) : (e.consume(f), s || (s = !j(f)), f === 92 ? p : c);
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
    return p === l ? (e.exit(o), s(l)) : p === null ? n(p) : B(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), q(e, u, "linePrefix")) : (e.enter("chunkString", {
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
function ht(e, t) {
  let n;
  return r;
  function r(i) {
    return B(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : j(i) ? q(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const ps = {
  name: "definition",
  tokenize: ms
}, ds = {
  partial: !0,
  tokenize: gs
};
function ms(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(f) {
    return e.enter("definition"), l(f);
  }
  function l(f) {
    return yi.call(
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
    return i = Ee(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : n(f);
  }
  function s(f) {
    return G(f) ? ht(e, u)(f) : u(f);
  }
  function u(f) {
    return gi(
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
    return e.attempt(ds, c, c)(f);
  }
  function c(f) {
    return j(f) ? q(e, p, "whitespace")(f) : p(f);
  }
  function p(f) {
    return f === null || B(f) ? (e.exit("definition"), r.parser.defined.push(i), t(f)) : n(f);
  }
}
function gs(e, t, n) {
  return r;
  function r(a) {
    return G(a) ? ht(e, i)(a) : n(a);
  }
  function i(a) {
    return bi(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function o(a) {
    return j(a) ? q(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || B(a) ? t(a) : n(a);
  }
}
const ys = {
  name: "hardBreakEscape",
  tokenize: bs
};
function bs(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return B(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const ks = {
  name: "headingAtx",
  resolve: xs,
  tokenize: ws
};
function xs(e, t) {
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
  }, be(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function ws(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("atxHeading"), o(h);
  }
  function o(h) {
    return e.enter("atxHeadingSequence"), l(h);
  }
  function l(h) {
    return h === 35 && r++ < 6 ? (e.consume(h), l) : h === null || G(h) ? (e.exit("atxHeadingSequence"), a(h)) : n(h);
  }
  function a(h) {
    return h === 35 ? (e.enter("atxHeadingSequence"), s(h)) : h === null || B(h) ? (e.exit("atxHeading"), t(h)) : j(h) ? q(e, a, "whitespace")(h) : (e.enter("atxHeadingText"), u(h));
  }
  function s(h) {
    return h === 35 ? (e.consume(h), s) : (e.exit("atxHeadingSequence"), a(h));
  }
  function u(h) {
    return h === null || h === 35 || G(h) ? (e.exit("atxHeadingText"), a(h)) : (e.consume(h), u);
  }
}
const _s = [
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
], ur = ["pre", "script", "style", "textarea"], vs = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Is,
  tokenize: Es
}, Cs = {
  partial: !0,
  tokenize: Ts
}, Ss = {
  partial: !0,
  tokenize: As
};
function Is(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Es(e, t, n) {
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
    return y === 33 ? (e.consume(y), p) : y === 47 ? (e.consume(y), o = !0, x) : y === 63 ? (e.consume(y), i = 3, r.interrupt ? t : g) : ce(y) ? (e.consume(y), l = String.fromCharCode(y), w) : n(y);
  }
  function p(y) {
    return y === 45 ? (e.consume(y), i = 2, f) : y === 91 ? (e.consume(y), i = 5, a = 0, m) : ce(y) ? (e.consume(y), i = 4, r.interrupt ? t : g) : n(y);
  }
  function f(y) {
    return y === 45 ? (e.consume(y), r.interrupt ? t : g) : n(y);
  }
  function m(y) {
    const de = "CDATA[";
    return y === de.charCodeAt(a++) ? (e.consume(y), a === de.length ? r.interrupt ? t : P : m) : n(y);
  }
  function x(y) {
    return ce(y) ? (e.consume(y), l = String.fromCharCode(y), w) : n(y);
  }
  function w(y) {
    if (y === null || y === 47 || y === 62 || G(y)) {
      const de = y === 47, Ae = l.toLowerCase();
      return !de && !o && ur.includes(Ae) ? (i = 1, r.interrupt ? t(y) : P(y)) : _s.includes(l.toLowerCase()) ? (i = 6, de ? (e.consume(y), k) : r.interrupt ? t(y) : P(y)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(y) : o ? I(y) : C(y));
    }
    return y === 45 || se(y) ? (e.consume(y), l += String.fromCharCode(y), w) : n(y);
  }
  function k(y) {
    return y === 62 ? (e.consume(y), r.interrupt ? t : P) : n(y);
  }
  function I(y) {
    return j(y) ? (e.consume(y), I) : b(y);
  }
  function C(y) {
    return y === 47 ? (e.consume(y), b) : y === 58 || y === 95 || ce(y) ? (e.consume(y), R) : j(y) ? (e.consume(y), C) : b(y);
  }
  function R(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || se(y) ? (e.consume(y), R) : N(y);
  }
  function N(y) {
    return y === 61 ? (e.consume(y), _) : j(y) ? (e.consume(y), N) : C(y);
  }
  function _(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? n(y) : y === 34 || y === 39 ? (e.consume(y), s = y, T) : j(y) ? (e.consume(y), _) : D(y);
  }
  function T(y) {
    return y === s ? (e.consume(y), s = null, H) : y === null || B(y) ? n(y) : (e.consume(y), T);
  }
  function D(y) {
    return y === null || y === 34 || y === 39 || y === 47 || y === 60 || y === 61 || y === 62 || y === 96 || G(y) ? N(y) : (e.consume(y), D);
  }
  function H(y) {
    return y === 47 || y === 62 || j(y) ? C(y) : n(y);
  }
  function b(y) {
    return y === 62 ? (e.consume(y), L) : n(y);
  }
  function L(y) {
    return y === null || B(y) ? P(y) : j(y) ? (e.consume(y), L) : n(y);
  }
  function P(y) {
    return y === 45 && i === 2 ? (e.consume(y), K) : y === 60 && i === 1 ? (e.consume(y), te) : y === 62 && i === 4 ? (e.consume(y), Y) : y === 63 && i === 3 ? (e.consume(y), g) : y === 93 && i === 5 ? (e.consume(y), ke) : B(y) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Cs, xe, $)(y)) : y === null || B(y) ? (e.exit("htmlFlowData"), $(y)) : (e.consume(y), P);
  }
  function $(y) {
    return e.check(Ss, Q, xe)(y);
  }
  function Q(y) {
    return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), M;
  }
  function M(y) {
    return y === null || B(y) ? $(y) : (e.enter("htmlFlowData"), P(y));
  }
  function K(y) {
    return y === 45 ? (e.consume(y), g) : P(y);
  }
  function te(y) {
    return y === 47 ? (e.consume(y), l = "", ie) : P(y);
  }
  function ie(y) {
    if (y === 62) {
      const de = l.toLowerCase();
      return ur.includes(de) ? (e.consume(y), Y) : P(y);
    }
    return ce(y) && l.length < 8 ? (e.consume(y), l += String.fromCharCode(y), ie) : P(y);
  }
  function ke(y) {
    return y === 93 ? (e.consume(y), g) : P(y);
  }
  function g(y) {
    return y === 62 ? (e.consume(y), Y) : y === 45 && i === 2 ? (e.consume(y), g) : P(y);
  }
  function Y(y) {
    return y === null || B(y) ? (e.exit("htmlFlowData"), xe(y)) : (e.consume(y), Y);
  }
  function xe(y) {
    return e.exit("htmlFlow"), t(y);
  }
}
function As(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return B(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : n(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function Ts(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(bt, t, n);
  }
}
const Ls = {
  name: "htmlText",
  tokenize: Ns
};
function Ns(e, t, n) {
  const r = this;
  let i, o, l;
  return a;
  function a(g) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(g), s;
  }
  function s(g) {
    return g === 33 ? (e.consume(g), u) : g === 47 ? (e.consume(g), N) : g === 63 ? (e.consume(g), C) : ce(g) ? (e.consume(g), D) : n(g);
  }
  function u(g) {
    return g === 45 ? (e.consume(g), h) : g === 91 ? (e.consume(g), o = 0, m) : ce(g) ? (e.consume(g), I) : n(g);
  }
  function h(g) {
    return g === 45 ? (e.consume(g), f) : n(g);
  }
  function c(g) {
    return g === null ? n(g) : g === 45 ? (e.consume(g), p) : B(g) ? (l = c, te(g)) : (e.consume(g), c);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), f) : c(g);
  }
  function f(g) {
    return g === 62 ? K(g) : g === 45 ? p(g) : c(g);
  }
  function m(g) {
    const Y = "CDATA[";
    return g === Y.charCodeAt(o++) ? (e.consume(g), o === Y.length ? x : m) : n(g);
  }
  function x(g) {
    return g === null ? n(g) : g === 93 ? (e.consume(g), w) : B(g) ? (l = x, te(g)) : (e.consume(g), x);
  }
  function w(g) {
    return g === 93 ? (e.consume(g), k) : x(g);
  }
  function k(g) {
    return g === 62 ? K(g) : g === 93 ? (e.consume(g), k) : x(g);
  }
  function I(g) {
    return g === null || g === 62 ? K(g) : B(g) ? (l = I, te(g)) : (e.consume(g), I);
  }
  function C(g) {
    return g === null ? n(g) : g === 63 ? (e.consume(g), R) : B(g) ? (l = C, te(g)) : (e.consume(g), C);
  }
  function R(g) {
    return g === 62 ? K(g) : C(g);
  }
  function N(g) {
    return ce(g) ? (e.consume(g), _) : n(g);
  }
  function _(g) {
    return g === 45 || se(g) ? (e.consume(g), _) : T(g);
  }
  function T(g) {
    return B(g) ? (l = T, te(g)) : j(g) ? (e.consume(g), T) : K(g);
  }
  function D(g) {
    return g === 45 || se(g) ? (e.consume(g), D) : g === 47 || g === 62 || G(g) ? H(g) : n(g);
  }
  function H(g) {
    return g === 47 ? (e.consume(g), K) : g === 58 || g === 95 || ce(g) ? (e.consume(g), b) : B(g) ? (l = H, te(g)) : j(g) ? (e.consume(g), H) : K(g);
  }
  function b(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || se(g) ? (e.consume(g), b) : L(g);
  }
  function L(g) {
    return g === 61 ? (e.consume(g), P) : B(g) ? (l = L, te(g)) : j(g) ? (e.consume(g), L) : H(g);
  }
  function P(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), i = g, $) : B(g) ? (l = P, te(g)) : j(g) ? (e.consume(g), P) : (e.consume(g), Q);
  }
  function $(g) {
    return g === i ? (e.consume(g), i = void 0, M) : g === null ? n(g) : B(g) ? (l = $, te(g)) : (e.consume(g), $);
  }
  function Q(g) {
    return g === null || g === 34 || g === 39 || g === 60 || g === 61 || g === 96 ? n(g) : g === 47 || g === 62 || G(g) ? H(g) : (e.consume(g), Q);
  }
  function M(g) {
    return g === 47 || g === 62 || G(g) ? H(g) : n(g);
  }
  function K(g) {
    return g === 62 ? (e.consume(g), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(g);
  }
  function te(g) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), ie;
  }
  function ie(g) {
    return j(g) ? q(e, ke, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(g) : ke(g);
  }
  function ke(g) {
    return e.enter("htmlTextData"), l(g);
  }
}
const Dn = {
  name: "labelEnd",
  resolveAll: zs,
  resolveTo: Bs,
  tokenize: Ms
}, Ps = {
  tokenize: Fs
}, Ds = {
  tokenize: Os
}, Rs = {
  tokenize: Hs
};
function zs(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && be(e, 0, e.length, n), e;
}
function Bs(e, t) {
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
  return a = [["enter", s, t], ["enter", u, t]], a = ve(a, e.slice(o + 1, o + r + 3)), a = ve(a, [["enter", h, t]]), a = ve(a, Mt(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), t)), a = ve(a, [["exit", h, t], e[l - 2], e[l - 1], ["exit", u, t]]), a = ve(a, e.slice(l + 1)), a = ve(a, [["exit", s, t]]), be(e, o, e.length, a), e;
}
function Ms(e, t, n) {
  const r = this;
  let i = r.events.length, o, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(p) {
    return o ? o._inactive ? c(p) : (l = r.parser.defined.includes(Ee(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(p);
  }
  function s(p) {
    return p === 40 ? e.attempt(Ps, h, l ? h : c)(p) : p === 91 ? e.attempt(Ds, h, l ? u : c)(p) : l ? h(p) : c(p);
  }
  function u(p) {
    return e.attempt(Rs, h, c)(p);
  }
  function h(p) {
    return t(p);
  }
  function c(p) {
    return o._balanced = !0, n(p);
  }
}
function Fs(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return G(c) ? ht(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41 ? h(c) : gi(e, l, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function l(c) {
    return G(c) ? ht(e, s)(c) : h(c);
  }
  function a(c) {
    return n(c);
  }
  function s(c) {
    return c === 34 || c === 39 || c === 40 ? bi(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : h(c);
  }
  function u(c) {
    return G(c) ? ht(e, h)(c) : h(c);
  }
  function h(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function Os(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return yi.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(a);
  }
  function o(a) {
    return r.parser.defined.includes(Ee(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function l(a) {
    return n(a);
  }
}
function Hs(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const js = {
  name: "labelStartImage",
  resolveAll: Dn.resolveAll,
  tokenize: $s
};
function $s(e, t, n) {
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
const Us = {
  name: "labelStartLink",
  resolveAll: Dn.resolveAll,
  tokenize: qs
};
function qs(e, t, n) {
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
  tokenize: Vs
};
function Vs(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), q(e, t, "linePrefix");
  }
}
const At = {
  name: "thematicBreak",
  tokenize: Ws
};
function Ws(e, t, n) {
  let r = 0, i;
  return o;
  function o(u) {
    return e.enter("thematicBreak"), l(u);
  }
  function l(u) {
    return i = u, a(u);
  }
  function a(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || B(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), j(u) ? q(e, a, "whitespace")(u) : a(u));
  }
}
const he = {
  continuation: {
    tokenize: Ys
  },
  exit: Ks,
  name: "list",
  tokenize: Qs
}, Gs = {
  partial: !0,
  tokenize: Js
}, Xs = {
  partial: !0,
  tokenize: Zs
};
function Qs(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return a;
  function a(f) {
    const m = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (m === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : gn(f)) {
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
    return gn(f) && ++l < 10 ? (e.consume(f), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), u(f)) : n(f);
  }
  function u(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      bt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : h,
      e.attempt(Gs, p, c)
    );
  }
  function h(f) {
    return r.containerState.initialBlankLine = !0, o++, p(f);
  }
  function c(f) {
    return j(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), p) : n(f);
  }
  function p(f) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(f);
  }
}
function Ys(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(bt, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, q(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !j(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Xs, t, l)(a));
  }
  function l(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, q(e, e.attempt(he, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function Zs(e, t, n) {
  const r = this;
  return q(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function Ks(e) {
  e.exit(this.containerState.type);
}
function Js(e, t, n) {
  const r = this;
  return q(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !j(o) && l && l[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const cr = {
  name: "setextUnderline",
  resolveTo: eu,
  tokenize: tu
};
function eu(e, t) {
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
function tu(e, t, n) {
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
    return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), j(u) ? q(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || B(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const nu = {
  tokenize: ru
};
function ru(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    bt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, q(e, e.attempt(this.parser.constructs.flow, i, e.attempt(ss, i)), "linePrefix"))
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
const iu = {
  resolveAll: xi()
}, lu = ki("string"), ou = ki("text");
function ki(e) {
  return {
    resolveAll: xi(e === "text" ? au : void 0),
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
function xi(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function au(e, t) {
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
const su = {
  42: he,
  43: he,
  45: he,
  48: he,
  49: he,
  50: he,
  51: he,
  52: he,
  53: he,
  54: he,
  55: he,
  56: he,
  57: he,
  62: fi
}, uu = {
  91: ps
}, cu = {
  [-2]: Xt,
  [-1]: Xt,
  32: Xt
}, hu = {
  35: ks,
  42: At,
  45: [cr, At],
  60: vs,
  61: cr,
  95: At,
  96: sr,
  126: sr
}, fu = {
  38: di,
  92: pi
}, pu = {
  [-5]: Qt,
  [-4]: Qt,
  [-3]: Qt,
  33: js,
  38: di,
  42: yn,
  60: [Ua, Ls],
  91: Us,
  92: [ys, pi],
  93: Dn,
  95: yn,
  96: ns
}, du = {
  null: [yn, iu]
}, mu = {
  null: [42, 95]
}, gu = {
  null: []
}, yu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: mu,
  contentInitial: uu,
  disable: gu,
  document: su,
  flow: hu,
  flowInitial: cu,
  insideSpan: du,
  string: fu,
  text: pu
}, Symbol.toStringTag, { value: "Module" }));
function bu(e, t, n) {
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
    attempt: T(N),
    check: T(_),
    consume: I,
    enter: C,
    exit: R,
    interrupt: T(_, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: x,
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
  function c(L) {
    return l = ve(l, L), w(), l[l.length - 1] !== null ? [] : (D(t, 0), u.events = Mt(o, u.events, u), u.events);
  }
  function p(L, P) {
    return xu(f(L), P);
  }
  function f(L) {
    return ku(l, L);
  }
  function m() {
    const {
      _bufferIndex: L,
      _index: P,
      line: $,
      column: Q,
      offset: M
    } = r;
    return {
      _bufferIndex: L,
      _index: P,
      line: $,
      column: Q,
      offset: M
    };
  }
  function x(L) {
    i[L.line] = L.column, b();
  }
  function w() {
    let L;
    for (; r._index < l.length; ) {
      const P = l[r._index];
      if (typeof P == "string")
        for (L = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === L && r._bufferIndex < P.length; )
          k(P.charCodeAt(r._bufferIndex));
      else
        k(P);
    }
  }
  function k(L) {
    h = h(L);
  }
  function I(L) {
    B(L) ? (r.line++, r.column = 1, r.offset += L === -3 ? 2 : 1, b()) : L !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = L;
  }
  function C(L, P) {
    const $ = P || {};
    return $.type = L, $.start = m(), u.events.push(["enter", $, u]), a.push($), $;
  }
  function R(L) {
    const P = a.pop();
    return P.end = m(), u.events.push(["exit", P, u]), P;
  }
  function N(L, P) {
    D(L, P.from);
  }
  function _(L, P) {
    P.restore();
  }
  function T(L, P) {
    return $;
    function $(Q, M, K) {
      let te, ie, ke, g;
      return Array.isArray(Q) ? (
        /* c8 ignore next 1 */
        xe(Q)
      ) : "tokenize" in Q ? (
        // Looks like a construct.
        xe([
          /** @type {Construct} */
          Q
        ])
      ) : Y(Q);
      function Y(re) {
        return He;
        function He(Te) {
          const Me = Te !== null && re[Te], De = Te !== null && re.null, Qe = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Me) ? Me : Me ? [Me] : [],
            ...Array.isArray(De) ? De : De ? [De] : []
          ];
          return xe(Qe)(Te);
        }
      }
      function xe(re) {
        return te = re, ie = 0, re.length === 0 ? K : y(re[ie]);
      }
      function y(re) {
        return He;
        function He(Te) {
          return g = H(), ke = re, re.partial || (u.currentConstruct = re), re.name && u.parser.constructs.disable.null.includes(re.name) ? Ae() : re.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            P ? Object.assign(Object.create(u), P) : u,
            s,
            de,
            Ae
          )(Te);
        }
      }
      function de(re) {
        return L(ke, g), M;
      }
      function Ae(re) {
        return g.restore(), ++ie < te.length ? y(te[ie]) : K;
      }
    }
  }
  function D(L, P) {
    L.resolveAll && !o.includes(L) && o.push(L), L.resolve && be(u.events, P, u.events.length - P, L.resolve(u.events.slice(P), u)), L.resolveTo && (u.events = L.resolveTo(u.events, u));
  }
  function H() {
    const L = m(), P = u.previous, $ = u.currentConstruct, Q = u.events.length, M = Array.from(a);
    return {
      from: Q,
      restore: K
    };
    function K() {
      r = L, u.previous = P, u.currentConstruct = $, u.events.length = Q, a = M, b();
    }
  }
  function b() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function ku(e, t) {
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
function xu(e, t) {
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
function wu(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      ci([yu, ...(e || {}).extensions || []])
    ),
    content: i(Ba),
    defined: [],
    document: i(Fa),
    flow: i(nu),
    lazy: {},
    string: i(lu),
    text: i(ou)
  };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return bu(r, o, a);
    }
  }
}
function _u(e) {
  for (; !mi(e); )
    ;
  return e;
}
const hr = /[\0\t\n\r]/g;
function vu() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, l, a) {
    const s = [];
    let u, h, c, p, f;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), c = 0, t = "", n && (o.charCodeAt(0) === 65279 && c++, n = void 0); c < o.length; ) {
      if (hr.lastIndex = c, u = hr.exec(o), p = u && u.index !== void 0 ? u.index : o.length, f = o.charCodeAt(p), !u) {
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
const Cu = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Su(e) {
  return e.replace(Cu, Iu);
}
function Iu(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return hi(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Pn(n) || e;
}
const wi = {}.hasOwnProperty;
function Eu(e, t, n) {
  return t && typeof t == "object" && (n = t, t = void 0), Au(n)(_u(wu(n).document().write(vu()(e, t, !0))));
}
function Au(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(rt),
      autolinkProtocol: H,
      autolinkEmail: H,
      atxHeading: o(xt),
      blockQuote: o(De),
      characterEscape: H,
      characterReference: H,
      codeFenced: o(Qe),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: o(Qe, l),
      codeText: o(jt, l),
      codeTextData: H,
      data: H,
      codeFlowValue: H,
      definition: o($t),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: o(Ut),
      hardBreakEscape: o(wt),
      hardBreakTrailing: o(wt),
      htmlFlow: o(_t, l),
      htmlFlowData: H,
      htmlText: o(_t, l),
      htmlTextData: H,
      image: o(qt),
      label: l,
      link: o(rt),
      listItem: o(lt),
      listItemValue: p,
      listOrdered: o(it, c),
      listUnordered: o(it),
      paragraph: o(Vt),
      reference: y,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: o(xt),
      strong: o(we),
      thematicBreak: o(cl)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: N,
      autolink: s(),
      autolinkEmail: Me,
      autolinkProtocol: Te,
      blockQuote: s(),
      characterEscapeValue: b,
      characterReferenceMarkerHexadecimal: Ae,
      characterReferenceMarkerNumeric: Ae,
      characterReferenceValue: re,
      characterReference: He,
      codeFenced: s(w),
      codeFencedFence: x,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: m,
      codeFlowValue: b,
      codeIndented: s(k),
      codeText: s(M),
      codeTextData: b,
      data: b,
      definition: s(),
      definitionDestinationString: R,
      definitionLabelString: I,
      definitionTitleString: C,
      emphasis: s(),
      hardBreakEscape: s(P),
      hardBreakTrailing: s(P),
      htmlFlow: s($),
      htmlFlowData: b,
      htmlText: s(Q),
      htmlTextData: b,
      image: s(te),
      label: ke,
      labelText: ie,
      lineEnding: L,
      link: s(K),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: de,
      resourceDestinationString: g,
      resourceTitleString: Y,
      resource: xe,
      setextHeading: s(D),
      setextHeadingLineSequence: T,
      setextHeadingText: _,
      strong: s(),
      thematicBreak: s()
    }
  };
  _i(t, (e || {}).mdastExtensions || []);
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
    }, U = [];
    let W = -1;
    for (; ++W < v.length; )
      if (v[W][1].type === "listOrdered" || v[W][1].type === "listUnordered")
        if (v[W][0] === "enter")
          U.push(W);
        else {
          const Ce = U.pop();
          W = i(v, Ce, W);
        }
    for (W = -1; ++W < v.length; ) {
      const Ce = t[v[W][0]];
      wi.call(Ce, v[W][1].type) && Ce[v[W][1].type].call(Object.assign({
        sliceSerialize: v[W][2].sliceSerialize
      }, F), v[W][1]);
    }
    if (F.tokenStack.length > 0) {
      const Ce = F.tokenStack[F.tokenStack.length - 1];
      (Ce[1] || fr).call(F, void 0, Ce[0]);
    }
    for (E.position = {
      start: Fe(v.length > 0 ? v[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Fe(v.length > 0 ? v[v.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, W = -1; ++W < t.transforms.length; )
      E = t.transforms[W](E) || E;
    return E;
  }
  function i(v, E, F) {
    let U = E - 1, W = -1, Ce = !1, je, Re, ot, at;
    for (; ++U <= F; ) {
      const me = v[U];
      switch (me[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          me[0] === "enter" ? W++ : W--, at = void 0;
          break;
        }
        case "lineEndingBlank": {
          me[0] === "enter" && (je && !at && !W && !ot && (ot = U), at = void 0);
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
      if (!W && me[0] === "enter" && me[1].type === "listItemPrefix" || W === -1 && me[0] === "exit" && (me[1].type === "listUnordered" || me[1].type === "listOrdered")) {
        if (je) {
          let Ye = U;
          for (Re = void 0; Ye--; ) {
            const ze = v[Ye];
            if (ze[1].type === "lineEnding" || ze[1].type === "lineEndingBlank") {
              if (ze[0] === "exit") continue;
              Re && (v[Re][1].type = "lineEndingBlank", Ce = !0), ze[1].type = "lineEnding", Re = Ye;
            } else if (!(ze[1].type === "linePrefix" || ze[1].type === "blockQuotePrefix" || ze[1].type === "blockQuotePrefixWhitespace" || ze[1].type === "blockQuoteMarker" || ze[1].type === "listItemIndent")) break;
          }
          ot && (!Re || ot < Re) && (je._spread = !0), je.end = Object.assign({}, Re ? v[Re][1].start : me[1].end), v.splice(Re || U, 0, ["exit", je, me[2]]), U++, F++;
        }
        if (me[1].type === "listItemPrefix") {
          const Ye = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, me[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          je = Ye, v.splice(U, 0, ["enter", Ye, me[2]]), U++, F++, ot = void 0, at = !0;
        }
      }
    }
    return v[E][1]._spread = Ce, F;
  }
  function o(v, E) {
    return F;
    function F(U) {
      a.call(this, v(U), U), E && E.call(this, U);
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
      start: Fe(E.start),
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
    const F = this.stack.pop(), U = this.tokenStack.pop();
    if (U)
      U[0].type !== v.type && (E ? E.call(this, v, U[0]) : (U[1] || fr).call(this, v, U[0]));
    else throw new Error("Cannot close `" + v.type + "` (" + ct({
      start: v.start,
      end: v.end
    }) + "): it’s not open");
    F.position.end = Fe(v.end);
  }
  function h() {
    return Nn(this.stack.pop());
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
  function x() {
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
    const E = this.resume(), F = this.stack[this.stack.length - 1];
    F.label = E, F.identifier = Ee(this.sliceSerialize(v)).toLowerCase();
  }
  function C() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.title = v;
  }
  function R() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.url = v;
  }
  function N(v) {
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
  function H(v) {
    const F = this.stack[this.stack.length - 1].children;
    let U = F[F.length - 1];
    (!U || U.type !== "text") && (U = vt(), U.position = {
      start: Fe(v.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, F.push(U)), this.stack.push(U);
  }
  function b(v) {
    const E = this.stack.pop();
    E.value += this.sliceSerialize(v), E.position.end = Fe(v.end);
  }
  function L(v) {
    const E = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const F = E.children[E.children.length - 1];
      F.position.end = Fe(v.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(E.type) && (H.call(this, v), b.call(this, v));
  }
  function P() {
    this.data.atHardBreak = !0;
  }
  function $() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = v;
  }
  function Q() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = v;
  }
  function M() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = v;
  }
  function K() {
    const v = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const E = this.data.referenceType || "shortcut";
      v.type += "Reference", v.referenceType = E, delete v.url, delete v.title;
    } else
      delete v.identifier, delete v.label;
    this.data.referenceType = void 0;
  }
  function te() {
    const v = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const E = this.data.referenceType || "shortcut";
      v.type += "Reference", v.referenceType = E, delete v.url, delete v.title;
    } else
      delete v.identifier, delete v.label;
    this.data.referenceType = void 0;
  }
  function ie(v) {
    const E = this.sliceSerialize(v), F = this.stack[this.stack.length - 2];
    F.label = Su(E), F.identifier = Ee(E).toLowerCase();
  }
  function ke() {
    const v = this.stack[this.stack.length - 1], E = this.resume(), F = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, F.type === "link") {
      const U = v.children;
      F.children = U;
    } else
      F.alt = E;
  }
  function g() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.url = v;
  }
  function Y() {
    const v = this.resume(), E = this.stack[this.stack.length - 1];
    E.title = v;
  }
  function xe() {
    this.data.inReference = void 0;
  }
  function y() {
    this.data.referenceType = "collapsed";
  }
  function de(v) {
    const E = this.resume(), F = this.stack[this.stack.length - 1];
    F.label = E, F.identifier = Ee(this.sliceSerialize(v)).toLowerCase(), this.data.referenceType = "full";
  }
  function Ae(v) {
    this.data.characterReferenceType = v.type;
  }
  function re(v) {
    const E = this.sliceSerialize(v), F = this.data.characterReferenceType;
    let U;
    F ? (U = hi(E, F === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : U = Pn(E);
    const W = this.stack[this.stack.length - 1];
    W.value += U;
  }
  function He(v) {
    const E = this.stack.pop();
    E.position.end = Fe(v.end);
  }
  function Te(v) {
    b.call(this, v);
    const E = this.stack[this.stack.length - 1];
    E.url = this.sliceSerialize(v);
  }
  function Me(v) {
    b.call(this, v);
    const E = this.stack[this.stack.length - 1];
    E.url = "mailto:" + this.sliceSerialize(v);
  }
  function De() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Qe() {
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
  function xt() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function wt() {
    return {
      type: "break"
    };
  }
  function _t() {
    return {
      type: "html",
      value: ""
    };
  }
  function qt() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function rt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function it(v) {
    return {
      type: "list",
      ordered: v.type === "listOrdered",
      start: null,
      spread: v._spread,
      children: []
    };
  }
  function lt(v) {
    return {
      type: "listItem",
      spread: v._spread,
      checked: null,
      children: []
    };
  }
  function Vt() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function we() {
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
  function cl() {
    return {
      type: "thematicBreak"
    };
  }
}
function Fe(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function _i(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? _i(e, r) : Tu(e, r);
  }
}
function Tu(e, t) {
  let n;
  for (n in t)
    if (wi.call(t, n))
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
function fr(e, t) {
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
function Lu(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Eu(r, {
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
function Nu(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Pu(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Du(e, t) {
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
function Ru(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function zu(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Bu(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = nt(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
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
function Mu(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Fu(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function vi(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function Ou(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return vi(e, t);
  const i = { src: nt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function Hu(e, t) {
  const n = { src: nt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function ju(e, t) {
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
function $u(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return vi(e, t);
  const i = { href: nt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Uu(e, t) {
  const n = { href: nt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function qu(e, t, n) {
  const r = e.all(t), i = n ? Vu(n) : Ci(t), o = {}, l = [];
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
function Vu(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Ci(n[r]);
  }
  return t;
}
function Ci(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Wu(e, t) {
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
function Gu(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Xu(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Qu(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Yu(e, t) {
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
    }, a = En(t.children[1]), s = ri(t.children[t.children.length - 1]);
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
function Zu(e, t, n) {
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
function Ku(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const pr = 9, dr = 32;
function Ju(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      mr(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(mr(t.slice(i), i > 0, !1)), o.join("");
}
function mr(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === pr || o === dr; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === pr || o === dr; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function ec(e, t) {
  const n = { type: "text", value: Ju(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function tc(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const nc = {
  blockquote: Nu,
  break: Pu,
  code: Du,
  delete: Ru,
  emphasis: zu,
  footnoteReference: Bu,
  heading: Mu,
  html: Fu,
  imageReference: Ou,
  image: Hu,
  inlineCode: ju,
  linkReference: $u,
  link: Uu,
  listItem: qu,
  list: Wu,
  paragraph: Gu,
  // @ts-expect-error: root is different, but hard to type.
  root: Xu,
  strong: Qu,
  table: Yu,
  tableCell: Ku,
  tableRow: Zu,
  text: ec,
  thematicBreak: tc,
  toml: Ct,
  yaml: Ct,
  definition: Ct,
  footnoteDefinition: Ct
};
function Ct() {
}
const Si = -1, Ft = 0, ft = 1, Pt = 2, Rn = 3, zn = 4, Bn = 5, Mn = 6, Ii = 7, Ei = 8, gr = typeof self == "object" ? self : globalThis, rc = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, l] = t[i];
    switch (o) {
      case Ft:
      case Si:
        return n(l, i);
      case ft: {
        const a = n([], i);
        for (const s of l)
          a.push(r(s));
        return a;
      }
      case Pt: {
        const a = n({}, i);
        for (const [s, u] of l)
          a[r(s)] = r(u);
        return a;
      }
      case Rn:
        return n(new Date(l), i);
      case zn: {
        const { source: a, flags: s } = l;
        return n(new RegExp(a, s), i);
      }
      case Bn: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [s, u] of l)
          a.set(r(s), r(u));
        return a;
      }
      case Mn: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const s of l)
          a.add(r(s));
        return a;
      }
      case Ii: {
        const { name: a, message: s } = l;
        return n(new gr[a](s), i);
      }
      case Ei:
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
    return n(new gr[o](l), i);
  };
  return r;
}, yr = (e) => rc(/* @__PURE__ */ new Map(), e)(0), Ze = "", { toString: ic } = {}, { keys: lc } = Object, ut = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Ft, t];
  const n = ic.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [ft, Ze];
    case "Object":
      return [Pt, Ze];
    case "Date":
      return [Rn, Ze];
    case "RegExp":
      return [zn, Ze];
    case "Map":
      return [Bn, Ze];
    case "Set":
      return [Mn, Ze];
    case "DataView":
      return [ft, n];
  }
  return n.includes("Array") ? [ft, n] : n.includes("Error") ? [Ii, n] : [Pt, n];
}, St = ([e, t]) => e === Ft && (t === "function" || t === "symbol"), oc = (e, t, n, r) => {
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
            a = Ei, h = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            h = null;
            break;
          case "undefined":
            return i([Si], l);
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
      case Pt: {
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
        for (const p of lc(l))
          (e || !St(ut(l[p]))) && h.push([o(p), o(l[p])]);
        return c;
      }
      case Rn:
        return i([a, l.toISOString()], l);
      case zn: {
        const { source: h, flags: c } = l;
        return i([a, { source: h, flags: c }], l);
      }
      case Bn: {
        const h = [], c = i([a, h], l);
        for (const [p, f] of l)
          (e || !(St(ut(p)) || St(ut(f)))) && h.push([o(p), o(f)]);
        return c;
      }
      case Mn: {
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
  return oc(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Dt = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? yr(br(e, t)) : structuredClone(e)
) : (e, t) => yr(br(e, t));
function ac(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function sc(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function uc(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || ac, r = e.options.footnoteBackLabel || sc, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const h = e.all(u), c = String(u.identifier).toUpperCase(), p = nt(c.toLowerCase());
    let f = 0;
    const m = [], x = e.footnoteCounts.get(c);
    for (; x !== void 0 && ++f <= x; ) {
      m.length > 0 && m.push({ type: "text", value: " " });
      let I = typeof n == "string" ? n : n(s, f);
      typeof I == "string" && (I = { type: "text", value: I }), m.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + p + (f > 1 ? "-" + f : ""),
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
      return pc;
    if (typeof e == "function")
      return Ht(e);
    if (typeof e == "object")
      return Array.isArray(e) ? cc(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        hc(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return fc(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function cc(e) {
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
function hc(e) {
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
function fc(e) {
  return Ht(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Ht(e) {
  return t;
  function t(n, r, i) {
    return !!(dc(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function pc() {
  return !0;
}
function dc(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ai = [], mc = !0, bn = !1, gc = "skip";
function Ti(e, t, n, r) {
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
      let f = Ai, m, x, w;
      if ((!t || o(s, u, h[h.length - 1] || void 0)) && (f = yc(n(s, h)), f[0] === bn))
        return f;
      if ("children" in s && s.children) {
        const k = (
          /** @type {UnistParent} */
          s
        );
        if (k.children && f[0] !== gc)
          for (x = (r ? k.children.length : -1) + l, w = h.concat(k); x > -1 && x < k.children.length; ) {
            const I = k.children[x];
            if (m = a(I, x, w)(), m[0] === bn)
              return m;
            x = typeof m[1] == "number" ? m[1] : x + l;
          }
      }
      return f;
    }
  }
}
function yc(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [mc, e] : e == null ? Ai : [e];
}
function Fn(e, t, n, r) {
  let i, o, l;
  typeof t == "function" && typeof n != "function" ? (o = void 0, l = t, i = n) : (o = t, l = n, i = r), Ti(e, o, a, i);
  function a(s, u) {
    const h = u[u.length - 1], c = h ? h.children.indexOf(s) : void 0;
    return l(s, c, h);
  }
}
const kn = {}.hasOwnProperty, bc = {};
function kc(e, t) {
  const n = t || bc, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = { ...nc, ...n.handlers }, a = {
    all: u,
    applyData: wc,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: l,
    one: s,
    options: n,
    patch: xc,
    wrap: vc
  };
  return Fn(e, function(h) {
    if (h.type === "definition" || h.type === "footnoteDefinition") {
      const c = h.type === "definition" ? r : i, p = String(h.identifier).toUpperCase();
      c.has(p) || c.set(p, h);
    }
  }), a;
  function s(h, c) {
    const p = h.type, f = a.handlers[p];
    if (kn.call(a.handlers, p) && f)
      return f(a, h, c);
    if (a.options.passThrough && a.options.passThrough.includes(p)) {
      if ("children" in h) {
        const { children: x, ...w } = h, k = Dt(w);
        return k.children = a.all(h), k;
      }
      return Dt(h);
    }
    return (a.options.unknownHandler || _c)(a, h, c);
  }
  function u(h) {
    const c = [];
    if ("children" in h) {
      const p = h.children;
      let f = -1;
      for (; ++f < p.length; ) {
        const m = a.one(p[f], h);
        if (m) {
          if (f && p[f - 1].type === "break" && (!Array.isArray(m) && m.type === "text" && (m.value = kr(m.value)), !Array.isArray(m) && m.type === "element")) {
            const x = m.children[0];
            x && x.type === "text" && (x.value = kr(x.value));
          }
          Array.isArray(m) ? c.push(...m) : c.push(m);
        }
      }
    }
    return c;
  }
}
function xc(e, t) {
  e.position && (t.position = sa(e));
}
function wc(e, t) {
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
function _c(e, t) {
  const n = t.data || {}, r = "value" in t && !(kn.call(n, "hProperties") || kn.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function vc(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function kr(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function xr(e, t) {
  const n = kc(e, t), r = n.one(e, void 0), i = uc(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Cc(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      xr(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      xr(n, { file: r, ...e || t })
    );
  };
}
function wr(e) {
  if (e)
    throw e;
}
var Tt = Object.prototype.hasOwnProperty, Li = Object.prototype.toString, _r = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, Cr = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Li.call(t) === "[object Array]";
}, Sr = function(t) {
  if (!t || Li.call(t) !== "[object Object]")
    return !1;
  var n = Tt.call(t, "constructor"), r = t.constructor && t.constructor.prototype && Tt.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || Tt.call(t, i);
}, Ir = function(t, n) {
  _r && n.name === "__proto__" ? _r(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Er = function(t, n) {
  if (n === "__proto__")
    if (Tt.call(t, n)) {
      if (vr)
        return vr(t, n).value;
    } else return;
  return t[n];
}, Sc = function e() {
  var t, n, r, i, o, l, a = arguments[0], s = 1, u = arguments.length, h = !1;
  for (typeof a == "boolean" && (h = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s)
    if (t = arguments[s], t != null)
      for (n in t)
        r = Er(a, n), i = Er(t, n), a !== i && (h && i && (Sr(i) || (o = Cr(i))) ? (o ? (o = !1, l = r && Cr(r) ? r : []) : l = r && Sr(r) ? r : {}, Ir(a, { name: n, newValue: e(h, l, i) })) : typeof i < "u" && Ir(a, { name: n, newValue: i }));
  return a;
};
const Yt = /* @__PURE__ */ ni(Sc);
function xn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ic() {
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
      i = u, h ? Ec(h, a)(...u) : l(null, ...u);
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
function Ec(e, t) {
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
const Ne = { basename: Ac, dirname: Tc, extname: Lc, join: Nc, sep: "/" };
function Ac(e, t) {
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
function Tc(e) {
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
function Lc(e) {
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
function Nc(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    kt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Pc(n);
}
function Pc(e) {
  kt(e);
  const t = e.codePointAt(0) === 47;
  let n = Dc(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Dc(e, t) {
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
const Rc = { cwd: zc };
function zc() {
  return "/";
}
function wn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Bc(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!wn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Mc(e);
}
function Mc(e) {
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
const Zt = (
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
class Ni {
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
    t ? wn(t) ? n = { path: t } : typeof t == "string" || Fc(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Rc.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Zt.length; ) {
      const o = Zt[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      Zt.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Ne.basename(this.path) : void 0;
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
    Jt(t, "basename"), Kt(t, "basename"), this.path = Ne.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Ne.dirname(this.path) : void 0;
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
    Ar(this.basename, "dirname"), this.path = Ne.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Ne.extname(this.path) : void 0;
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
    if (Kt(t, "extname"), Ar(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Ne.join(this.dirname, this.stem + (t || ""));
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
    wn(t) && (t = Bc(t)), Jt(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Ne.basename(this.path, this.extname) : void 0;
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
    Jt(t, "stem"), Kt(t, "stem"), this.path = Ne.join(this.dirname || "", t + (this.extname || ""));
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
function Kt(e, t) {
  if (e && e.includes(Ne.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Ne.sep + "`"
    );
}
function Jt(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Ar(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Fc(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Oc = (
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
), Hc = {}.hasOwnProperty;
class On extends Oc {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Ic();
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
      new On()
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
    return typeof t == "string" ? arguments.length === 2 ? (nn("data", this.frozen), this.namespace[t] = n, this) : Hc.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (nn("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    return en("parse", r), r(String(n), n);
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
    return this.freeze(), en("process", this.parser || this.Parser), tn("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
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
        Uc(m) ? p.value = m : p.result = m, u(
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
    return this.freeze(), en("processSync", this.parser || this.Parser), tn("processSync", this.compiler || this.Compiler), this.process(t, i), Lr("processSync", "process", n), r;
    function i(o, l) {
      n = !0, wr(o), r = l;
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
    Tr(t), this.freeze();
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
    return this.run(t, n, o), Lr("runSync", "run", r), i;
    function o(l, a) {
      wr(l), i = a, r = !0;
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
    return tn("stringify", i), Tr(t), i(t, r);
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
    if (nn("use", this.frozen), t != null) if (typeof t == "function")
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
        const x = r[p][1];
        xn(x) && xn(f) && (f = Yt(!0, x, f)), r[p] = [u, f, ...m];
      }
    }
  }
}
const jc = new On().freeze();
function en(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function tn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function nn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Tr(e) {
  if (!xn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Lr(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function It(e) {
  return $c(e) ? e : new Ni(e);
}
function $c(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Uc(e) {
  return typeof e == "string" || qc(e);
}
function qc(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Vc = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Nr = [], Pr = { allowDangerousHtml: !0 }, Wc = /^(https?|ircs?|mailto|xmpp)$/i, Gc = [
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
function Xc(e) {
  const t = Qc(e), n = Yc(e);
  return Zc(t.runSync(t.parse(n), n), e);
}
function Qc(e) {
  const t = e.rehypePlugins || Nr, n = e.remarkPlugins || Nr, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Pr } : Pr;
  return jc().use(Lu).use(n).use(Cc, r).use(t);
}
function Yc(e) {
  const t = e.children || "", n = new Ni();
  return typeof t == "string" && (n.value = t), n;
}
function Zc(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, o = t.disallowedElements, l = t.skipHtml, a = t.unwrapDisallowed, s = t.urlTransform || Kc;
  for (const h of Gc)
    Object.hasOwn(t, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + Vc + h.id, void 0);
  return Fn(e, u), pa(e, {
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
          const m = h.properties[f], x = Gt[f];
          (x === null || x.includes(h.tagName)) && (h.properties[f] = s(String(m || ""), f, h));
        }
    }
    if (h.type === "element") {
      let f = n ? !n.includes(h.tagName) : o ? o.includes(h.tagName) : !1;
      if (!f && r && typeof c == "number" && (f = !r(h, c, p)), f && p && typeof c == "number")
        return a && h.children ? p.children.splice(c, 1, ...h.children) : p.children.splice(c, 1), c;
    }
  }
}
function Kc(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Wc.test(e.slice(0, t)) ? e : ""
  );
}
function Dr(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function Jc(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function eh(e, t, n) {
  const i = Ot((n || {}).ignore || []), o = th(t);
  let l = -1;
  for (; ++l < o.length; )
    Ti(e, "text", a);
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
      const R = C.index, N = {
        index: C.index,
        input: C.input,
        stack: [...h, u]
      };
      let _ = f(...C, N);
      if (typeof _ == "string" && (_ = _.length > 0 ? { type: "text", value: _ } : void 0), _ === !1 ? p.lastIndex = R + 1 : (m !== R && I.push({
        type: "text",
        value: u.value.slice(m, R)
      }), Array.isArray(_) ? I.push(..._) : _ && I.push(_), m = R + C[0].length, k = !0), !p.global)
        break;
      C = p.exec(u.value);
    }
    return k ? (m < u.value.length && I.push({ type: "text", value: u.value.slice(m) }), c.children.splice(w, 1, ...I)) : I = [u], w + I.length;
  }
}
function th(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([nh(i[0]), rh(i[1])]);
  }
  return t;
}
function nh(e) {
  return typeof e == "string" ? new RegExp(Jc(e), "g") : e;
}
function rh(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const rn = "phrasing", ln = ["autolink", "link", "image", "label"];
function ih() {
  return {
    transforms: [hh],
    enter: {
      literalAutolink: oh,
      literalAutolinkEmail: on,
      literalAutolinkHttp: on,
      literalAutolinkWww: on
    },
    exit: {
      literalAutolink: ch,
      literalAutolinkEmail: uh,
      literalAutolinkHttp: ah,
      literalAutolinkWww: sh
    }
  };
}
function lh() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: rn,
        notInConstruct: ln
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: rn,
        notInConstruct: ln
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: rn,
        notInConstruct: ln
      }
    ]
  };
}
function oh(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function on(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function ah(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function sh(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function uh(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function ch(e) {
  this.exit(e);
}
function hh(e) {
  eh(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, fh],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), ph]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function fh(e, t, n, r, i) {
  let o = "";
  if (!Pi(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !dh(n)))
    return !1;
  const l = mh(n + r);
  if (!l[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: o + t + l[0],
    children: [{ type: "text", value: t + l[0] }]
  };
  return l[1] ? [a, { type: "text", value: l[1] }] : a;
}
function ph(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Pi(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function dh(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function mh(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Dr(e, "(");
  let o = Dr(e, ")");
  for (; r !== -1 && i > o; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [e, n];
}
function Pi(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || We(n) || Bt(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
Di.peek = Ch;
function gh() {
  this.buffer();
}
function yh(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function bh() {
  this.buffer();
}
function kh(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function xh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Ee(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function wh(e) {
  this.exit(e);
}
function _h(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Ee(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function vh(e) {
  this.exit(e);
}
function Ch() {
  return "[";
}
function Di(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const l = n.enter("footnoteReference"), a = n.enter("reference");
  return o += i.move(
    n.safe(n.associationId(e), { after: "]", before: o })
  ), a(), l(), o += i.move("]"), o;
}
function Sh() {
  return {
    enter: {
      gfmFootnoteCallString: gh,
      gfmFootnoteCall: yh,
      gfmFootnoteDefinitionLabelString: bh,
      gfmFootnoteDefinition: kh
    },
    exit: {
      gfmFootnoteCallString: xh,
      gfmFootnoteCall: wh,
      gfmFootnoteDefinitionLabelString: _h,
      gfmFootnoteDefinition: vh
    }
  };
}
function Ih(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: Di },
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
        t ? Ri : Eh
      )
    )), u(), s;
  }
}
function Eh(e, t, n) {
  return t === 0 ? e : Ri(e, t, n);
}
function Ri(e, t, n) {
  return (n ? "" : "    ") + e;
}
const Ah = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
zi.peek = Dh;
function Th() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Nh },
    exit: { strikethrough: Ph }
  };
}
function Lh() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Ah
      }
    ],
    handlers: { delete: zi }
  };
}
function Nh(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Ph(e) {
  this.exit(e);
}
function zi(e, t, n, r) {
  const i = n.createTracker(r), o = n.enter("strikethrough");
  let l = i.move("~~");
  return l += n.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), o(), l;
}
function Dh() {
  return "~";
}
function Rh(e) {
  return e.length;
}
function zh(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Rh, o = [], l = [], a = [], s = [];
  let u = 0, h = -1;
  for (; ++h < e.length; ) {
    const x = [], w = [];
    let k = -1;
    for (e[h].length > u && (u = e[h].length); ++k < e[h].length; ) {
      const I = Bh(e[h][k]);
      if (n.alignDelimiters !== !1) {
        const C = i(I);
        w[k] = C, (s[k] === void 0 || C > s[k]) && (s[k] = C);
      }
      x.push(I);
    }
    l[h] = x, a[h] = w;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < u; )
      o[c] = Rr(r[c]);
  else {
    const x = Rr(r);
    for (; ++c < u; )
      o[c] = x;
  }
  c = -1;
  const p = [], f = [];
  for (; ++c < u; ) {
    const x = o[c];
    let w = "", k = "";
    x === 99 ? (w = ":", k = ":") : x === 108 ? w = ":" : x === 114 && (k = ":");
    let I = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[c] - w.length - k.length
    );
    const C = w + "-".repeat(I) + k;
    n.alignDelimiters !== !1 && (I = w.length + I + k.length, I > s[c] && (s[c] = I), f[c] = I), p[c] = C;
  }
  l.splice(1, 0, p), a.splice(1, 0, f), h = -1;
  const m = [];
  for (; ++h < l.length; ) {
    const x = l[h], w = a[h];
    c = -1;
    const k = [];
    for (; ++c < u; ) {
      const I = x[c] || "";
      let C = "", R = "";
      if (n.alignDelimiters !== !1) {
        const N = s[c] - (w[c] || 0), _ = o[c];
        _ === 114 ? C = " ".repeat(N) : _ === 99 ? N % 2 ? (C = " ".repeat(N / 2 + 0.5), R = " ".repeat(N / 2 - 0.5)) : (C = " ".repeat(N / 2), R = C) : R = " ".repeat(N);
      }
      n.delimiterStart !== !1 && !c && k.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && I === "") && (n.delimiterStart !== !1 || c) && k.push(" "), n.alignDelimiters !== !1 && k.push(C), k.push(I), n.alignDelimiters !== !1 && k.push(R), n.padding !== !1 && k.push(" "), (n.delimiterEnd !== !1 || c !== u - 1) && k.push("|");
    }
    m.push(
      n.delimiterEnd === !1 ? k.join("").replace(/ +$/, "") : k.join("")
    );
  }
  return m.join(`
`);
}
function Bh(e) {
  return e == null ? "" : String(e);
}
function Rr(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Mh(e, t, n, r) {
  const i = n.enter("blockquote"), o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const l = n.indentLines(
    n.containerFlow(e, o.current()),
    Fh
  );
  return i(), l;
}
function Fh(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Oh(e, t) {
  return zr(e, t.inConstruct, !0) && !zr(e, t.notInConstruct, !1);
}
function zr(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Br(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && Oh(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Hh(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, o = 0, l = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : o = 1, i = r + t.length, r = n.indexOf(t, i);
  return l;
}
function jh(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function $h(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Uh(e, t, n, r) {
  const i = $h(n), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (jh(e, n)) {
    const c = n.enter("codeIndented"), p = n.indentLines(o, qh);
    return c(), p;
  }
  const a = n.createTracker(r), s = i.repeat(Math.max(Hh(o, i) + 1, 3)), u = n.enter("codeFenced");
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
function qh(e, t, n) {
  return (n ? "" : "    ") + e;
}
function Hn(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Vh(e, t, n, r) {
  const i = Hn(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("definition");
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
function Wh(e) {
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
function Rt(e, t, n) {
  const r = et(e), i = et(t);
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
Bi.peek = Gh;
function Bi(e, t, n, r) {
  const i = Wh(n), o = n.enter("emphasis"), l = n.createTracker(r), a = l.move(i);
  let s = l.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    })
  );
  const u = s.charCodeAt(0), h = Rt(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  h.inside && (s = mt(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), p = Rt(r.after.charCodeAt(0), c, i);
  p.inside && (s = s.slice(0, -1) + mt(c));
  const f = l.move(i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: h.outside
  }, a + s + f;
}
function Gh(e, t, n) {
  return n.options.emphasis || "*";
}
function Xh(e, t) {
  let n = !1;
  return Fn(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, bn;
  }), !!((!e.depth || e.depth < 3) && Nn(e) && (t.options.setext || n));
}
function Qh(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = n.createTracker(r);
  if (Xh(e, n)) {
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
Mi.peek = Yh;
function Mi(e) {
  return e.value || "";
}
function Yh() {
  return "<";
}
Fi.peek = Zh;
function Fi(e, t, n, r) {
  const i = Hn(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("image");
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
function Zh() {
  return "!";
}
Oi.peek = Kh;
function Oi(e, t, n, r) {
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
function Kh() {
  return "!";
}
Hi.peek = Jh;
function Hi(e, t, n) {
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
function Jh() {
  return "`";
}
function ji(e, t) {
  const n = Nn(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
$i.peek = ef;
function $i(e, t, n, r) {
  const i = Hn(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.createTracker(r);
  let a, s;
  if (ji(e, n)) {
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
function ef(e, t, n) {
  return ji(e, n) ? "<" : "[";
}
Ui.peek = tf;
function Ui(e, t, n, r) {
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
function tf() {
  return "[";
}
function jn(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function nf(e) {
  const t = jn(e), n = e.options.bulletOther;
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
function rf(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function qi(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function lf(e, t, n, r) {
  const i = n.enter("list"), o = n.bulletCurrent;
  let l = e.ordered ? rf(n) : jn(n);
  const a = e.ordered ? l === "." ? ")" : "." : nf(n);
  let s = t && n.bulletLastUsed ? l === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const h = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      h && (!h.children || !h.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), qi(n) === l && h
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
function of(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function af(e, t, n, r) {
  const i = of(n);
  let o = n.bulletCurrent || jn(n);
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
function sf(e, t, n, r) {
  const i = n.enter("paragraph"), o = n.enter("phrasing"), l = n.containerPhrasing(e, r);
  return o(), i(), l;
}
const uf = (
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
function cf(e, t, n, r) {
  return (e.children.some(function(l) {
    return uf(l);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function hf(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
Vi.peek = ff;
function Vi(e, t, n, r) {
  const i = hf(n), o = n.enter("strong"), l = n.createTracker(r), a = l.move(i + i);
  let s = l.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    })
  );
  const u = s.charCodeAt(0), h = Rt(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  h.inside && (s = mt(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), p = Rt(r.after.charCodeAt(0), c, i);
  p.inside && (s = s.slice(0, -1) + mt(c));
  const f = l.move(i + i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: h.outside
  }, a + s + f;
}
function ff(e, t, n) {
  return n.options.strong || "*";
}
function pf(e, t, n, r) {
  return n.safe(e.value, r);
}
function df(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function mf(e, t, n) {
  const r = (qi(n) + (n.options.ruleSpaces ? " " : "")).repeat(df(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Wi = {
  blockquote: Mh,
  break: Br,
  code: Uh,
  definition: Vh,
  emphasis: Bi,
  hardBreak: Br,
  heading: Qh,
  html: Mi,
  image: Fi,
  imageReference: Oi,
  inlineCode: Hi,
  link: $i,
  linkReference: Ui,
  list: lf,
  listItem: af,
  paragraph: sf,
  root: cf,
  strong: Vi,
  text: pf,
  thematicBreak: mf
};
function gf() {
  return {
    enter: {
      table: yf,
      tableData: Mr,
      tableHeader: Mr,
      tableRow: kf
    },
    exit: {
      codeText: xf,
      table: bf,
      tableData: an,
      tableHeader: an,
      tableRow: an
    }
  };
}
function yf(e) {
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
function bf(e) {
  this.exit(e), this.data.inTable = void 0;
}
function kf(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function an(e) {
  this.exit(e);
}
function Mr(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function xf(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, wf));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function wf(e, t) {
  return t === "|" ? t : e;
}
function _f(e) {
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
  function l(f, m, x, w) {
    return u(h(f, x, w), f.align);
  }
  function a(f, m, x, w) {
    const k = c(f, x, w), I = u([k]);
    return I.slice(0, I.indexOf(`
`));
  }
  function s(f, m, x, w) {
    const k = x.enter("tableCell"), I = x.enter("phrasing"), C = x.containerPhrasing(f, {
      ...w,
      before: o,
      after: o
    });
    return I(), k(), C;
  }
  function u(f, m) {
    return zh(f, {
      align: m,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function h(f, m, x) {
    const w = f.children;
    let k = -1;
    const I = [], C = m.enter("table");
    for (; ++k < w.length; )
      I[k] = c(w[k], m, x);
    return C(), I;
  }
  function c(f, m, x) {
    const w = f.children;
    let k = -1;
    const I = [], C = m.enter("tableRow");
    for (; ++k < w.length; )
      I[k] = s(w[k], f, m, x);
    return C(), I;
  }
  function p(f, m, x) {
    let w = Wi.inlineCode(f, m, x);
    return x.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function vf() {
  return {
    exit: {
      taskListCheckValueChecked: Fr,
      taskListCheckValueUnchecked: Fr,
      paragraph: Sf
    }
  };
}
function Cf() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: If }
  };
}
function Fr(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Sf(e) {
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
function If(e, t, n, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  o && a.move(l);
  let s = Wi.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(h) {
    return h + l;
  }
}
function Ef() {
  return [
    ih(),
    Sh(),
    Th(),
    gf(),
    vf()
  ];
}
function Af(e) {
  return {
    extensions: [
      lh(),
      Ih(e),
      Lh(),
      _f(e),
      Cf()
    ]
  };
}
const Tf = {
  tokenize: zf,
  partial: !0
}, Gi = {
  tokenize: Bf,
  partial: !0
}, Xi = {
  tokenize: Mf,
  partial: !0
}, Qi = {
  tokenize: Ff,
  partial: !0
}, Lf = {
  tokenize: Of,
  partial: !0
}, Yi = {
  name: "wwwAutolink",
  tokenize: Df,
  previous: Ki
}, Zi = {
  name: "protocolAutolink",
  tokenize: Rf,
  previous: Ji
}, Be = {
  name: "emailAutolink",
  tokenize: Pf,
  previous: el
}, Pe = {};
function Nf() {
  return {
    text: Pe
  };
}
let $e = 48;
for (; $e < 123; )
  Pe[$e] = Be, $e++, $e === 58 ? $e = 65 : $e === 91 && ($e = 97);
Pe[43] = Be;
Pe[45] = Be;
Pe[46] = Be;
Pe[95] = Be;
Pe[72] = [Be, Zi];
Pe[104] = [Be, Zi];
Pe[87] = [Be, Yi];
Pe[119] = [Be, Yi];
function Pf(e, t, n) {
  const r = this;
  let i, o;
  return l;
  function l(c) {
    return !_n(c) || !el.call(r, r.previous) || $n(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return _n(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), s) : n(c);
  }
  function s(c) {
    return c === 46 ? e.check(Lf, h, u)(c) : c === 45 || c === 95 || se(c) ? (o = !0, e.consume(c), s) : h(c);
  }
  function u(c) {
    return e.consume(c), i = !0, s;
  }
  function h(c) {
    return o && i && ce(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function Df(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !Ki.call(r, r.previous) || $n(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Tf, e.attempt(Gi, e.attempt(Xi, o), n), n)(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function Rf(e, t, n) {
  const r = this;
  let i = "", o = !1;
  return l;
  function l(c) {
    return (c === 72 || c === 104) && Ji.call(r, r.previous) && !$n(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : n(c);
  }
  function a(c) {
    if (ce(c) && i.length < 5)
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
    return c === null || Nt(c) || G(c) || We(c) || Bt(c) ? n(c) : e.attempt(Gi, e.attempt(Xi, h), n)(c);
  }
  function h(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function zf(e, t, n) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : n(l);
  }
  function o(l) {
    return l === null ? n(l) : t(l);
  }
}
function Bf(e, t, n) {
  let r, i, o;
  return l;
  function l(u) {
    return u === 46 || u === 95 ? e.check(Qi, s, a)(u) : u === null || G(u) || We(u) || u !== 45 && Bt(u) ? s(u) : (o = !0, e.consume(u), l);
  }
  function a(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), l;
  }
  function s(u) {
    return i || r || !o ? n(u) : t(u);
  }
}
function Mf(e, t) {
  let n = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (n++, e.consume(l), i) : l === 41 && r < n ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(Qi, t, o)(l) : l === null || G(l) || We(l) ? t(l) : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function Ff(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || G(a) || We(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || G(a) || We(a) ? t(a) : r(a);
  }
  function o(a) {
    return ce(a) ? l(a) : n(a);
  }
  function l(a) {
    return a === 59 ? (e.consume(a), r) : ce(a) ? (e.consume(a), l) : n(a);
  }
}
function Of(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return se(o) ? n(o) : t(o);
  }
}
function Ki(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || G(e);
}
function Ji(e) {
  return !ce(e);
}
function el(e) {
  return !(e === 47 || _n(e));
}
function _n(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || se(e);
}
function $n(e) {
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
const Hf = {
  tokenize: Xf,
  partial: !0
};
function jf() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Vf,
        continuation: {
          tokenize: Wf
        },
        exit: Gf
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: qf
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: $f,
        resolveTo: Uf
      }
    }
  };
}
function $f(e, t, n) {
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
    const u = Ee(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function Uf(e, t) {
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
function qf(e, t, n) {
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
      c === null || c === 91 || G(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const p = e.exit("gfmFootnoteCallString");
      return i.includes(Ee(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return G(c) || (l = !0), o++, e.consume(c), c === 92 ? h : u;
  }
  function h(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, u) : u(c);
  }
}
function Vf(e, t, n) {
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
      m === null || m === 91 || G(m)
    )
      return n(m);
    if (m === 93) {
      e.exit("chunkString");
      const x = e.exit("gfmFootnoteDefinitionLabelString");
      return o = Ee(r.sliceSerialize(x)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
    }
    return G(m) || (a = !0), l++, e.consume(m), m === 92 ? c : h;
  }
  function c(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), l++, h) : h(m);
  }
  function p(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), i.includes(o) || i.push(o), q(e, f, "gfmFootnoteDefinitionWhitespace")) : n(m);
  }
  function f(m) {
    return t(m);
  }
}
function Wf(e, t, n) {
  return e.check(bt, t, e.attempt(Hf, t, n));
}
function Gf(e) {
  e.exit("gfmFootnoteDefinition");
}
function Xf(e, t, n) {
  const r = this;
  return q(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], !0).length === 4 ? t(o) : n(o);
  }
}
function Qf(e) {
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
            f && be(p, p.length, 0, Mt(f, l.slice(u + 1, s), a)), be(p, p.length, 0, [["exit", c, a], ["enter", l[s][1], a], ["exit", l[s][1], a], ["exit", h, a]]), be(l, u - 1, s - u + 3, p), s = u + p.length - 2;
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
      const x = et(u);
      if (m === 126)
        return c > 1 ? s(m) : (l.consume(m), c++, f);
      if (c < 2 && !n) return s(m);
      const w = l.exit("strikethroughSequenceTemporary"), k = et(m);
      return w._open = !k || k === 2 && !!x, w._close = !x || x === 2 && !!k, a(m);
    }
  }
}
class Yf {
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
    Zf(this, t, n, r);
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
function Zf(e, t, n, r) {
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
function Kf(e, t) {
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
function Jf() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: ep,
        resolveAll: tp
      }
    }
  };
}
function ep(e, t, n) {
  const r = this;
  let i = 0, o = 0, l;
  return a;
  function a(b) {
    let L = r.events.length - 1;
    for (; L > -1; ) {
      const Q = r.events[L][1].type;
      if (Q === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      Q === "linePrefix") L--;
      else break;
    }
    const P = L > -1 ? r.events[L][1].type : null, $ = P === "tableHead" || P === "tableRow" ? _ : s;
    return $ === _ && r.parser.lazy[r.now().line] ? n(b) : $(b);
  }
  function s(b) {
    return e.enter("tableHead"), e.enter("tableRow"), u(b);
  }
  function u(b) {
    return b === 124 || (l = !0, o += 1), h(b);
  }
  function h(b) {
    return b === null ? n(b) : B(b) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), f) : n(b) : j(b) ? q(e, h, "whitespace")(b) : (o += 1, l && (l = !1, i += 1), b === 124 ? (e.enter("tableCellDivider"), e.consume(b), e.exit("tableCellDivider"), l = !0, h) : (e.enter("data"), c(b)));
  }
  function c(b) {
    return b === null || b === 124 || G(b) ? (e.exit("data"), h(b)) : (e.consume(b), b === 92 ? p : c);
  }
  function p(b) {
    return b === 92 || b === 124 ? (e.consume(b), c) : c(b);
  }
  function f(b) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(b) : (e.enter("tableDelimiterRow"), l = !1, j(b) ? q(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : m(b));
  }
  function m(b) {
    return b === 45 || b === 58 ? w(b) : b === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(b), e.exit("tableCellDivider"), x) : N(b);
  }
  function x(b) {
    return j(b) ? q(e, w, "whitespace")(b) : w(b);
  }
  function w(b) {
    return b === 58 ? (o += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(b), e.exit("tableDelimiterMarker"), k) : b === 45 ? (o += 1, k(b)) : b === null || B(b) ? R(b) : N(b);
  }
  function k(b) {
    return b === 45 ? (e.enter("tableDelimiterFiller"), I(b)) : N(b);
  }
  function I(b) {
    return b === 45 ? (e.consume(b), I) : b === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(b), e.exit("tableDelimiterMarker"), C) : (e.exit("tableDelimiterFiller"), C(b));
  }
  function C(b) {
    return j(b) ? q(e, R, "whitespace")(b) : R(b);
  }
  function R(b) {
    return b === 124 ? m(b) : b === null || B(b) ? !l || i !== o ? N(b) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(b)) : N(b);
  }
  function N(b) {
    return n(b);
  }
  function _(b) {
    return e.enter("tableRow"), T(b);
  }
  function T(b) {
    return b === 124 ? (e.enter("tableCellDivider"), e.consume(b), e.exit("tableCellDivider"), T) : b === null || B(b) ? (e.exit("tableRow"), t(b)) : j(b) ? q(e, T, "whitespace")(b) : (e.enter("data"), D(b));
  }
  function D(b) {
    return b === null || b === 124 || G(b) ? (e.exit("data"), T(b)) : (e.consume(b), b === 92 ? H : D);
  }
  function H(b) {
    return b === 92 || b === 124 ? (e.consume(b), D) : D(b);
  }
}
function tp(e, t) {
  let n = -1, r = !0, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], a = !1, s = 0, u, h, c;
  const p = new Yf();
  for (; ++n < e.length; ) {
    const f = e[n], m = f[1];
    f[0] === "enter" ? m.type === "tableHead" ? (a = !1, s !== 0 && (Or(p, t, s, u, h), h = void 0, s = 0), u = {
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
  for (s !== 0 && Or(p, t, s, u, h), p.consume(t.events), n = -1; ++n < t.events.length; ) {
    const f = t.events[n];
    f[0] === "enter" && f[1].type === "table" && (f[1]._align = Kf(t.events, n));
  }
  return e;
}
function Et(e, t, n, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, Ke(t.events, n[0])), e.add(n[0], 0, [["exit", o, t]]));
  const s = Ke(t.events, n[1]);
  if (o = {
    type: l,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", o, t]]), n[2] !== 0) {
    const u = Ke(t.events, n[2]), h = Ke(t.events, n[3]), c = {
      type: a,
      start: Object.assign({}, u),
      end: Object.assign({}, h)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const p = t.events[n[2]], f = t.events[n[3]];
      if (p[1].end = Object.assign({}, f[1].end), p[1].type = "chunkText", p[1].contentType = "text", n[3] > n[2] + 1) {
        const m = n[2] + 1, x = n[3] - n[2] - 1;
        e.add(m, x, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, Ke(t.events, i)), e.add(i, 0, [["exit", o, t]]), o = void 0), o;
}
function Or(e, t, n, r, i) {
  const o = [], l = Ke(t.events, n);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, t])), r.end = Object.assign({}, l), o.push(["exit", r, t]), e.add(n + 1, 0, o);
}
function Ke(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const np = {
  name: "tasklistCheck",
  tokenize: ip
};
function rp() {
  return {
    text: {
      91: np
    }
  };
}
function ip(e, t, n) {
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
    return G(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : n(s);
  }
  function l(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(s);
  }
  function a(s) {
    return B(s) ? t(s) : j(s) ? e.check({
      tokenize: lp
    }, t, n)(s) : n(s);
  }
}
function lp(e, t, n) {
  return q(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function op(e) {
  return ci([
    Nf(),
    jf(),
    Qf(e),
    Jf(),
    rp()
  ]);
}
const ap = {};
function sp(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || ap, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(op(n)), o.push(Ef()), l.push(Af(n));
}
const up = "_markdown_ksb0p_1", cp = "_codeHeader_ksb0p_78", hp = "_copyButton_ksb0p_89", fp = "_streamCursor_ksb0p_167", pt = {
  markdown: up,
  codeHeader: cp,
  copyButton: hp,
  streamCursor: fp
}, pp = () => /* @__PURE__ */ A("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ d("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
  /* @__PURE__ */ d("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
] }), dp = () => /* @__PURE__ */ d("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ d("polyline", { points: "20 6 9 17 4 12" }) }), mp = ({ node: e, inline: t, className: n, children: r, ...i }) => {
  const [o, l] = ae(!1), a = /language-(\w+)/.exec(n || ""), s = a ? a[1] : "", u = J(() => {
    const h = String(r).replace(/\n$/, "");
    navigator.clipboard.writeText(h).then(() => {
      l(!0), setTimeout(() => l(!1), 2e3);
    });
  }, [r]);
  return t ? /* @__PURE__ */ d("code", { className: n, ...i, children: r }) : /* @__PURE__ */ A("div", { className: pt.codeWrapper, children: [
    /* @__PURE__ */ A("div", { className: pt.codeHeader, children: [
      /* @__PURE__ */ d("span", { children: s }),
      /* @__PURE__ */ d(
        "button",
        {
          className: pt.copyButton,
          onClick: u,
          "aria-label": "Copy code",
          children: o ? /* @__PURE__ */ A(cn, { children: [
            /* @__PURE__ */ d(dp, {}),
            /* @__PURE__ */ d("span", { children: "Copied" })
          ] }) : /* @__PURE__ */ A(cn, { children: [
            /* @__PURE__ */ d(pp, {}),
            /* @__PURE__ */ d("span", { children: "Copy" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d("pre", { className: n, children: /* @__PURE__ */ d("code", { ...i, children: r }) })
  ] });
}, gp = () => /* @__PURE__ */ d("span", { className: pt.streamCursor, "aria-hidden": "true" }), Hr = ({
  content: e,
  className: t,
  isStreaming: n
}) => /* @__PURE__ */ A("div", { className: V(pt.markdown, t), children: [
  /* @__PURE__ */ d(
    Xc,
    {
      remarkPlugins: [sp],
      components: {
        code: mp,
        a: ({ node: r, ...i }) => /* @__PURE__ */ d("a", { target: "_blank", rel: "noopener noreferrer", ...i }),
        p: ({ node: r, children: i, ...o }) => /* @__PURE__ */ d("p", { ...o, children: i })
      },
      children: e
    }
  ),
  n && /* @__PURE__ */ d(gp, {})
] });
function yp(e) {
  return e.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}
const bp = () => /* @__PURE__ */ d(
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
), kp = () => /* @__PURE__ */ d(
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
), tl = Ge(
  ({ message: e, onRetry: t, className: n }) => {
    const { role: r, content: i, timestamp: o, status: l } = e, a = r === "user", s = l === "loading", u = l === "streaming", h = l === "error", c = !l || l === "done", p = J(
      (x) => {
        x.stopPropagation(), t == null || t();
      },
      [t]
    ), f = () => s ? /* @__PURE__ */ d(vn, { variant: "bubble" }) : h ? /* @__PURE__ */ A("span", { className: le.errorBody, children: [
      /* @__PURE__ */ A("span", { className: le.errorMessage, children: [
        /* @__PURE__ */ d(bp, {}),
        /* @__PURE__ */ d("span", { children: i || "Something went wrong." })
      ] }),
      t && /* @__PURE__ */ A(
        "button",
        {
          type: "button",
          className: le.retryButton,
          onClick: p,
          "aria-label": "Retry message",
          children: [
            /* @__PURE__ */ d(kp, {}),
            "Retry"
          ]
        }
      )
    ] }) : u ? /* @__PURE__ */ d(Hr, { content: i, isStreaming: !0 }) : /* @__PURE__ */ d(Hr, { content: i }), m = !a && (s || u) ? { "aria-live": "polite", "aria-atomic": !1 } : {};
    return /* @__PURE__ */ A(
      "div",
      {
        className: V(
          le.row,
          a ? le.rowUser : le.rowAssistant,
          n
        ),
        role: "listitem",
        children: [
          !a && /* @__PURE__ */ d(
            "span",
            {
              className: V(le.avatar, s && le.avatarPulse),
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ d(
            "div",
            {
              className: V(
                le.bubble,
                a && le.bubbleUser,
                s && le.bubbleLoading,
                u && le.bubbleStreaming,
                h && le.bubbleError,
                c && !a && le.bubbleDone
              ),
              ...m,
              children: f()
            }
          ),
          (c || h) && /* @__PURE__ */ d(
            "time",
            {
              className: V(
                le.timestamp,
                a ? le.timestampUser : le.timestampAssistant
              ),
              dateTime: o.toISOString(),
              "aria-hidden": "true",
              children: yp(o)
            }
          )
        ]
      }
    );
  }
);
tl.displayName = "MessageBubble";
const xp = "_root_1we36_8", wp = "_scrollArea_1we36_9", _p = "_list_1we36_10", vp = "_listItem_1we36_93", Cp = "_sentinelItem_1we36_117", Sp = "_sentinel_1we36_11", Ip = "_emptyState_1we36_134", Ep = "_emptyIcon_1we36_151", Ap = "_emptyText_1we36_177", Tp = "_emptySubtext_1we36_185", Lp = "_scrollPill_1we36_13", Se = {
  root: xp,
  scrollArea: wp,
  list: _p,
  listItem: vp,
  sentinelItem: Cp,
  sentinel: Sp,
  emptyState: Ip,
  emptyIcon: Ep,
  emptyText: Ap,
  emptySubtext: Tp,
  scrollPill: Lp
}, Np = () => /* @__PURE__ */ d(
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
), Pp = () => /* @__PURE__ */ A("div", { className: Se.emptyState, "aria-hidden": "true", children: [
  /* @__PURE__ */ d("span", { className: Se.emptyIcon, children: /* @__PURE__ */ d(
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
  /* @__PURE__ */ d("p", { className: Se.emptyText, children: "Start the conversation" }),
  /* @__PURE__ */ d("p", { className: Se.emptySubtext, children: "Send a message to get started" })
] }), nl = Ge(
  ({ messages: e, onRetry: t, className: n }) => {
    const r = Ie(null), i = Ie(null), [o, l] = ae(!1), a = Ie(e.length);
    fe(() => {
      const c = i.current;
      if (!c) return;
      const p = new IntersectionObserver(
        ([f]) => {
          l(!f.isIntersecting);
        },
        {
          root: r.current,
          threshold: 0.1
          // 10% of the sentinel must be visible to count
        }
      );
      return p.observe(c), () => p.disconnect();
    }, []);
    const s = J(
      (c = "smooth") => {
        var p;
        (p = i.current) == null || p.scrollIntoView({ behavior: c, block: "nearest" });
      },
      []
    );
    qn(() => {
      if (o) return;
      const c = e.length, p = e[e.length - 1], f = c > a.current, m = (p == null ? void 0 : p.status) === "streaming" || (p == null ? void 0 : p.status) === "loading";
      (f || m) && s("smooth"), a.current = c;
    }, [e, o, s]), qn(() => {
      s("instant");
    }, []);
    const u = J(() => {
      s("smooth"), l(!1);
    }, [s]), h = e.length === 0;
    return /* @__PURE__ */ A("div", { className: V(Se.root, n), children: [
      /* @__PURE__ */ d(
        "div",
        {
          ref: r,
          className: Se.scrollArea,
          role: "log",
          "aria-live": "polite",
          "aria-label": "Chat messages",
          "aria-relevant": "additions",
          tabIndex: 0,
          children: h ? /* @__PURE__ */ d(Pp, {}) : (
            // Semantic list — MessageBubble uses role="listitem"
            /* @__PURE__ */ A("ul", { className: Se.list, "aria-label": "Message history", children: [
              e.map((c) => /* @__PURE__ */ d("li", { className: Se.listItem, children: /* @__PURE__ */ d(
                tl,
                {
                  message: c,
                  onRetry: c.role === "assistant" && c.status === "error" ? t : void 0
                }
              ) }, c.id)),
              /* @__PURE__ */ d("li", { "aria-hidden": "true", className: Se.sentinelItem, children: /* @__PURE__ */ d("div", { ref: i, className: Se.sentinel }) })
            ] })
          )
        }
      ),
      o && !h && /* @__PURE__ */ A(
        "button",
        {
          type: "button",
          className: Se.scrollPill,
          onClick: u,
          "aria-label": "Scroll to latest message",
          children: [
            /* @__PURE__ */ d(Np, {}),
            /* @__PURE__ */ d("span", { children: "Latest" })
          ]
        }
      )
    ] });
  }
);
nl.displayName = "MessageList";
const Dp = "_root_1mrxd_14", Rp = "_divider_1mrxd_26", zp = "_inputRow_1mrxd_43", Bp = "_textarea_1mrxd_64", Mp = "_loading_1mrxd_124", Fp = "_sendButton_1mrxd_131", Op = "_sendButtonActive_1mrxd_162", Hp = "_spinner_1mrxd_191", jp = "_srOnly_1mrxd_207", Le = {
  root: Dp,
  divider: Rp,
  inputRow: zp,
  textarea: Bp,
  loading: Mp,
  sendButton: Fp,
  sendButtonActive: Op,
  spinner: Hp,
  srOnly: jp
}, $p = 24, Up = 18, qp = 5, jr = $p * qp + Up, rl = ({
  onSend: e,
  isLoading: t = !1,
  placeholder: n = "Message…",
  autoFocus: r = !1,
  className: i
}) => {
  const [o, l] = ae(""), a = Ie(null), s = Wr(), u = J(() => {
    const w = a.current;
    if (!w) return;
    w.style.height = "auto";
    const k = Math.min(w.scrollHeight, jr);
    w.style.height = `${k}px`, w.style.overflowY = w.scrollHeight > jr ? "auto" : "hidden";
  }, []), h = J(() => {
    const w = a.current;
    w && (w.style.height = "auto", w.style.overflowY = "hidden");
  }, []);
  fe(() => {
    u();
  }, [o, u]), fe(() => {
    if (r && a.current) {
      const w = requestAnimationFrame(() => {
        var k;
        (k = a.current) == null || k.focus();
      });
      return () => cancelAnimationFrame(w);
    }
  }, [r]);
  const c = Ie(t);
  fe(() => {
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
  ), m = o.trim().length > 0 && !t, x = `${s}-input`;
  return /* @__PURE__ */ A(
    "div",
    {
      className: V(Le.root, t && Le.loading, i),
      role: "group",
      "aria-label": "Message input",
      children: [
        /* @__PURE__ */ d("div", { className: Le.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ A("div", { className: Le.inputRow, children: [
          /* @__PURE__ */ d("label", { htmlFor: x, className: Le.srOnly, children: n }),
          /* @__PURE__ */ d(
            "textarea",
            {
              ref: a,
              id: x,
              className: Le.textarea,
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
              className: V(Le.sendButton, m && Le.sendButtonActive),
              onClick: p,
              disabled: !m,
              "aria-label": "Send message",
              "aria-disabled": !m,
              tabIndex: 0,
              children: t ? /* @__PURE__ */ d(Wp, {}) : /* @__PURE__ */ d(Vp, {})
            }
          ),
          t && /* @__PURE__ */ d(
            "span",
            {
              id: `${s}-loading`,
              className: Le.srOnly,
              "aria-live": "polite",
              children: "Waiting for response…"
            }
          )
        ] })
      ]
    }
  );
};
rl.displayName = "InputBar";
const Vp = () => /* @__PURE__ */ d(
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
), Wp = () => /* @__PURE__ */ d(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    focusable: "false",
    className: Le.spinner,
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
), Gp = "_panel_1cc2q_8", Xp = "_opening_1cc2q_15", Qp = "_closing_1cc2q_16", Yp = "_errorBanner_1cc2q_126", Zp = "_errorBannerIcon_1cc2q_156", Kp = "_errorBannerText_1cc2q_163", Jp = "_errorBannerDismiss_1cc2q_171", Ue = {
  panel: Gp,
  opening: Xp,
  closing: Qp,
  errorBanner: Yp,
  errorBannerIcon: Zp,
  errorBannerText: Kp,
  errorBannerDismiss: Jp
}, ed = 200, il = Gr(
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
    className: x
  }, w) => {
    const [k, I] = ae(e), [C, R] = ae(!1), N = Ie(null);
    return fe(() => (N.current && (clearTimeout(N.current), N.current = null), e ? (R(!1), I(!0)) : (R(!0), N.current = setTimeout(() => {
      I(!1), R(!1);
    }, ed)), () => {
      N.current && clearTimeout(N.current);
    }), [e]), k ? /* @__PURE__ */ A(
      "div",
      {
        ref: w,
        id: f,
        className: V(
          Ue.panel,
          C ? Ue.closing : Ue.opening,
          x
        ),
        role: "dialog",
        "aria-modal": "true",
        "aria-label": s,
        "aria-labelledby": m,
        onClick: (_) => _.stopPropagation(),
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
              dialogLabelId: m
            }
          ),
          /* @__PURE__ */ d(nl, { messages: n, onRetry: l }),
          /* @__PURE__ */ d(
            rl,
            {
              onSend: o,
              isLoading: r,
              placeholder: c,
              autoFocus: e && !C
            }
          ),
          i && /* @__PURE__ */ A(
            "div",
            {
              className: Ue.errorBanner,
              role: "alert",
              "aria-live": "assertive",
              "aria-atomic": "true",
              children: [
                /* @__PURE__ */ d("span", { className: Ue.errorBannerIcon, "aria-hidden": "true", children: "⚠" }),
                /* @__PURE__ */ d("span", { className: Ue.errorBannerText, children: i }),
                /* @__PURE__ */ d(
                  "button",
                  {
                    type: "button",
                    className: Ue.errorBannerDismiss,
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
il.displayName = "ChatPanel";
const td = "_button_kpqzz_32", nd = "_buttonOpen_kpqzz_100", rd = "_iconWrap_kpqzz_16", id = "_iconSlot_kpqzz_124", ld = "_iconChat_kpqzz_15", od = "_iconClose_kpqzz_15", ad = "_iconHidden_kpqzz_150", sd = "_logoImg_kpqzz_158", ud = "_logoNode_kpqzz_168", cd = "_unreadDot_kpqzz_47", hd = "_ripple_kpqzz_47", ye = {
  button: td,
  buttonOpen: nd,
  iconWrap: rd,
  iconSlot: id,
  iconChat: ld,
  iconClose: od,
  iconHidden: ad,
  logoImg: sd,
  logoNode: ud,
  unreadDot: cd,
  ripple: hd
}, fd = () => /* @__PURE__ */ d(
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
), pd = () => /* @__PURE__ */ d(
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
), dd = ({ logo: e }) => typeof e == "string" ? /* @__PURE__ */ d("img", { src: e, alt: "", className: ye.logoImg, draggable: !1 }) : /* @__PURE__ */ d("span", { className: ye.logoNode, children: e }), ll = Gr(
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
        className: V(ye.button, e && ye.buttonOpen, i),
        ...o,
        children: [
          /* @__PURE__ */ A("span", { className: ye.iconWrap, children: [
            /* @__PURE__ */ d(
              "span",
              {
                className: V(
                  ye.iconSlot,
                  ye.iconChat,
                  e && ye.iconHidden
                ),
                "aria-hidden": "true",
                children: n ? /* @__PURE__ */ d(dd, { logo: n }) : /* @__PURE__ */ d(fd, {})
              }
            ),
            /* @__PURE__ */ d(
              "span",
              {
                className: V(
                  ye.iconSlot,
                  ye.iconClose,
                  !e && ye.iconHidden
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ d(pd, {})
              }
            )
          ] }),
          a && /* @__PURE__ */ d("span", { className: ye.unreadDot, "aria-hidden": "true" }),
          e && /* @__PURE__ */ d("span", { className: ye.ripple, "aria-hidden": "true" })
        ]
      }
    );
  }
);
ll.displayName = "TriggerButton";
const md = "_root_153sx_8", gd = "_header_153sx_9", yd = "_headerTop_153sx_51", bd = "_logoWrap_153sx_59", kd = "_logoImg_153sx_68", xd = "_closeButton_153sx_76", wd = "_welcomeHeading_153sx_107", _d = "_bodyWrapper_153sx_10", vd = "_scrollArea_153sx_11", Cd = "_cards_153sx_12", Sd = "_card_153sx_12", Id = "_cardClickable_153sx_192", Ed = "_cardLabel_153sx_210", Ad = "_recentRow_153sx_223", Td = "_recentContent_153sx_229", Ld = "_recentMeta_153sx_234", Nd = "_recentName_153sx_242", Pd = "_recentTime_153sx_251", Dd = "_recentText_153sx_257", Rd = "_avatar_153sx_272", zd = "_avatarSm_153sx_282", Bd = "_avatarImg_153sx_287", Md = "_avatarCustom_153sx_294", Fd = "_avatarInitials_153sx_302", Od = "_statusRow_153sx_318", Hd = "_statusIcon_153sx_324", jd = "_statusContent_153sx_329", $d = "_statusTitle_153sx_334", Ud = "_statusUpdated_153sx_347", qd = "_articlesCard_153sx_357", Vd = "_searchBar_153sx_365", Wd = "_searchInput_153sx_374", Gd = "_searchIcon_153sx_392", Xd = "_articleList_153sx_400", Qd = "_articleItem_153sx_407", Yd = "_articleLink_153sx_411", Zd = "_articleTitle_153sx_443", Kd = "_noResults_153sx_460", Jd = "_ctaSection_153sx_13", em = "_ctaButton_153sx_477", tm = "_nav_153sx_14", nm = "_navItem_153sx_524", rm = "_navItemActive_153sx_557", im = "_navLabel_153sx_565", z = {
  root: md,
  header: gd,
  headerTop: yd,
  logoWrap: bd,
  logoImg: kd,
  closeButton: xd,
  welcomeHeading: wd,
  bodyWrapper: _d,
  scrollArea: vd,
  cards: Cd,
  card: Sd,
  cardClickable: Id,
  cardLabel: Ed,
  recentRow: Ad,
  recentContent: Td,
  recentMeta: Ld,
  recentName: Nd,
  recentTime: Pd,
  recentText: Dd,
  avatar: Rd,
  avatarSm: zd,
  avatarImg: Bd,
  avatarCustom: Md,
  avatarInitials: Fd,
  statusRow: Od,
  statusIcon: Hd,
  statusContent: jd,
  statusTitle: $d,
  statusUpdated: Ud,
  articlesCard: qd,
  searchBar: Vd,
  searchInput: Wd,
  searchIcon: Gd,
  articleList: Xd,
  articleItem: Qd,
  articleLink: Yd,
  articleTitle: Zd,
  noResults: Kd,
  ctaSection: Jd,
  ctaButton: em,
  nav: tm,
  navItem: nm,
  navItemActive: rm,
  navLabel: im
}, lm = () => /* @__PURE__ */ d(
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
), om = () => /* @__PURE__ */ A(
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
), $r = () => /* @__PURE__ */ d(
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
), am = () => /* @__PURE__ */ A(
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
), sm = ({ active: e }) => /* @__PURE__ */ A(
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
), um = () => /* @__PURE__ */ d(
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
), cm = () => /* @__PURE__ */ A(
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
), hm = () => /* @__PURE__ */ d(
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
), fm = ({
  agentAvatar: e,
  agentName: t,
  size: n = "md"
}) => {
  const r = gt(() => {
    const i = t.trim().split(/\s+/);
    return i.length === 1 ? i[0].slice(0, 2).toUpperCase() : (i[0][0] + i[1][0]).toUpperCase();
  }, [t]);
  return /* @__PURE__ */ d(
    "span",
    {
      className: V(z.avatar, n === "sm" && z.avatarSm),
      "aria-hidden": "true",
      children: typeof e == "string" ? /* @__PURE__ */ d(
        "img",
        {
          src: e,
          alt: "",
          className: z.avatarImg,
          draggable: !1
        }
      ) : e != null ? /* @__PURE__ */ d("span", { className: z.avatarCustom, children: e }) : /* @__PURE__ */ d("span", { className: z.avatarInitials, children: r })
    }
  );
}, pm = ({ logo: e }) => typeof e == "string" ? /* @__PURE__ */ d("span", { className: z.logoWrap, children: /* @__PURE__ */ d("img", { src: e, alt: "", className: z.logoImg, draggable: !1 }) }) : /* @__PURE__ */ d("span", { className: z.logoWrap, children: e }), ol = Ge(
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
    className: x
  }) => {
    const [w, k] = ae(""), I = h && u && u.length > 0, C = gt(() => {
      if (!u) return [];
      if (!w.trim()) return u;
      const T = w.toLowerCase();
      return u.filter((D) => D.title.toLowerCase().includes(T));
    }, [u, w]), R = J(
      (T) => k(T.target.value),
      []
    ), N = o != null, _ = a != null;
    return /* @__PURE__ */ A("div", { className: V(z.root, x), children: [
      /* @__PURE__ */ A("div", { className: z.header, children: [
        /* @__PURE__ */ A("div", { className: z.headerTop, children: [
          i ? /* @__PURE__ */ d(pm, { logo: i }) : /* @__PURE__ */ d("span", { className: z.logoWrap, "aria-hidden": "true" }),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              className: z.closeButton,
              onClick: f,
              "aria-label": "Close chat",
              children: /* @__PURE__ */ d(lm, {})
            }
          )
        ] }),
        /* @__PURE__ */ A("h1", { className: z.welcomeHeading, children: [
          e.split(`
`).map((T, D) => /* @__PURE__ */ A(Un.Fragment, { children: [
            D > 0 && /* @__PURE__ */ d("br", {}),
            T
          ] }, D)),
          /* @__PURE__ */ d("br", {}),
          t == null ? void 0 : t.split(`
`).map((T, D) => /* @__PURE__ */ A(Un.Fragment, { children: [
            D > 0 && /* @__PURE__ */ d("br", {}),
            T
          ] }, D))
        ] })
      ] }),
      /* @__PURE__ */ A("div", { className: z.bodyWrapper, children: [
        /* @__PURE__ */ A("div", { className: z.scrollArea, children: [
          /* @__PURE__ */ A("div", { className: z.cards, children: [
            N && /* @__PURE__ */ A(
              "button",
              {
                type: "button",
                className: V(z.card, z.cardClickable),
                onClick: c,
                "aria-label": "View recent conversation",
                children: [
                  /* @__PURE__ */ d("p", { className: z.cardLabel, children: "Recent message" }),
                  /* @__PURE__ */ A("div", { className: z.recentRow, children: [
                    /* @__PURE__ */ d(
                      fm,
                      {
                        agentAvatar: r,
                        agentName: n,
                        size: "sm"
                      }
                    ),
                    /* @__PURE__ */ A("div", { className: z.recentContent, children: [
                      /* @__PURE__ */ A("div", { className: z.recentMeta, children: [
                        /* @__PURE__ */ d("span", { className: z.recentName, children: n }),
                        l && /* @__PURE__ */ d("span", { className: z.recentTime, children: l })
                      ] }),
                      /* @__PURE__ */ d("p", { className: z.recentText, children: o })
                    ] })
                  ] })
                ]
              }
            ),
            _ && /* @__PURE__ */ d("div", { className: z.card, children: /* @__PURE__ */ A("div", { className: z.statusRow, children: [
              /* @__PURE__ */ d("span", { className: z.statusIcon, children: /* @__PURE__ */ d(am, {}) }),
              /* @__PURE__ */ A("div", { className: z.statusContent, children: [
                /* @__PURE__ */ A("p", { className: z.statusTitle, children: [
                  /* @__PURE__ */ d("strong", { children: "Status: " }),
                  a
                ] }),
                s && /* @__PURE__ */ d("p", { className: z.statusUpdated, children: s })
              ] })
            ] }) }),
            I && /* @__PURE__ */ A("div", { className: z.articlesCard, children: [
              /* @__PURE__ */ A("div", { className: z.searchBar, children: [
                /* @__PURE__ */ d(
                  "input",
                  {
                    type: "search",
                    className: z.searchInput,
                    placeholder: "Search for help",
                    value: w,
                    onChange: R,
                    "aria-label": "Search help articles"
                  }
                ),
                /* @__PURE__ */ d("span", { className: z.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ d(om, {}) })
              ] }),
              /* @__PURE__ */ d("ul", { className: z.articleList, "aria-label": "Help articles", children: C.length > 0 ? C.map((T, D) => /* @__PURE__ */ d("li", { className: z.articleItem, children: T.href ? /* @__PURE__ */ A(
                "a",
                {
                  href: T.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: z.articleLink,
                  children: [
                    /* @__PURE__ */ d("span", { className: z.articleTitle, children: T.title }),
                    /* @__PURE__ */ d($r, {})
                  ]
                }
              ) : /* @__PURE__ */ A(
                "button",
                {
                  type: "button",
                  className: z.articleLink,
                  onClick: () => m == null ? void 0 : m(T),
                  children: [
                    /* @__PURE__ */ d("span", { className: z.articleTitle, children: T.title }),
                    /* @__PURE__ */ d($r, {})
                  ]
                }
              ) }, D)) : /* @__PURE__ */ d("li", { className: z.noResults, children: "No results found" }) })
            ] })
          ] }),
          /* @__PURE__ */ d("div", { className: z.ctaSection, children: /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: z.ctaButton,
              onClick: c,
              children: [
                /* @__PURE__ */ d(hm, {}),
                "Send us a message"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ A("nav", { className: z.nav, "aria-label": "Widget navigation", children: [
          /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: V(z.navItem, z.navItemActive),
              "aria-label": "Home",
              "aria-current": "page",
              children: [
                /* @__PURE__ */ d(sm, { active: !0 }),
                /* @__PURE__ */ d("span", { className: z.navLabel, children: "Home" })
              ]
            }
          ),
          /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: z.navItem,
              onClick: c,
              "aria-label": "Messages",
              children: [
                /* @__PURE__ */ d(um, {}),
                /* @__PURE__ */ d("span", { className: z.navLabel, children: "Messages" })
              ]
            }
          ),
          I && p && /* @__PURE__ */ A(
            "button",
            {
              type: "button",
              className: z.navItem,
              onClick: p,
              "aria-label": "Help",
              children: [
                /* @__PURE__ */ d(cm, {}),
                /* @__PURE__ */ d("span", { className: z.navLabel, children: "Help" })
              ]
            }
          )
        ] })
      ] })
    ] });
  }
);
ol.displayName = "WidgetHome";
const dm = "_root_2tms9_8", mm = "_header_2tms9_33", gm = "_title_2tms9_45", ym = "_closeButton_2tms9_53", bm = "_headerDivider_2tms9_84", km = "_scrollArea_2tms9_96", xm = "_searchBarWrap_2tms9_118", wm = "_searchBar_2tms9_118", _m = "_searchInput_2tms9_141", vm = "_searchIcon_2tms9_158", Cm = "_articleList_2tms9_166", Sm = "_articleItem_2tms9_173", Im = "_articleLink_2tms9_177", Em = "_articleTitle_2tms9_209", Am = "_noResults_2tms9_221", Tm = "_nav_2tms9_231", Lm = "_navItem_2tms9_239", Nm = "_navItemActive_2tms9_270", Pm = "_navLabel_2tms9_277", Z = {
  root: dm,
  header: mm,
  title: gm,
  closeButton: ym,
  headerDivider: bm,
  scrollArea: km,
  searchBarWrap: xm,
  searchBar: wm,
  searchInput: _m,
  searchIcon: vm,
  articleList: Cm,
  articleItem: Sm,
  articleLink: Im,
  articleTitle: Em,
  noResults: Am,
  nav: Tm,
  navItem: Lm,
  navItemActive: Nm,
  navLabel: Pm
}, Dm = () => /* @__PURE__ */ d(
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
), Rm = () => /* @__PURE__ */ A(
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
), zm = () => /* @__PURE__ */ A(
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
), Bm = () => /* @__PURE__ */ d(
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
), Mm = ({ active: e }) => /* @__PURE__ */ A(
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
), al = Ge(
  ({
    helpArticles: e,
    onGoHome: t,
    onStartChat: n,
    onClose: r,
    onArticleClick: i,
    className: o
  }) => {
    const [l, a] = ae(""), s = gt(() => {
      if (!l.trim()) return e;
      const h = l.toLowerCase();
      return e.filter((c) => c.title.toLowerCase().includes(h));
    }, [e, l]), u = J(
      (h) => a(h.target.value),
      []
    );
    return /* @__PURE__ */ A("div", { className: V(Z.root, o), children: [
      /* @__PURE__ */ A("header", { className: Z.header, children: [
        /* @__PURE__ */ d("h1", { className: Z.title, children: "Help" }),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: Z.closeButton,
            onClick: r,
            "aria-label": "Close chat",
            children: /* @__PURE__ */ d(Dm, {})
          }
        ),
        /* @__PURE__ */ d("div", { className: Z.headerDivider, "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ A("div", { className: Z.scrollArea, children: [
        /* @__PURE__ */ d("div", { className: Z.searchBarWrap, children: /* @__PURE__ */ A("div", { className: Z.searchBar, children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "search",
              className: Z.searchInput,
              placeholder: "Search for help",
              value: l,
              onChange: u,
              "aria-label": "Search help articles",
              autoFocus: !0
            }
          ),
          /* @__PURE__ */ d("span", { className: Z.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ d(Rm, {}) })
        ] }) }),
        /* @__PURE__ */ d("ul", { className: Z.articleList, "aria-label": "Help articles", children: s.length > 0 ? s.map((h, c) => /* @__PURE__ */ d("li", { className: Z.articleItem, children: h.href ? /* @__PURE__ */ A(
          "a",
          {
            href: h.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: Z.articleLink,
            children: [
              /* @__PURE__ */ d("span", { className: Z.articleTitle, children: h.title }),
              /* @__PURE__ */ d(Ur, {})
            ]
          }
        ) : /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            className: Z.articleLink,
            onClick: () => i == null ? void 0 : i(h),
            children: [
              /* @__PURE__ */ d("span", { className: Z.articleTitle, children: h.title }),
              /* @__PURE__ */ d(Ur, {})
            ]
          }
        ) }, c)) : /* @__PURE__ */ A("li", { className: Z.noResults, children: [
          "No articles match “",
          l,
          "”"
        ] }) })
      ] }),
      /* @__PURE__ */ A("nav", { className: Z.nav, "aria-label": "Widget navigation", children: [
        /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            className: Z.navItem,
            onClick: t,
            "aria-label": "Home",
            children: [
              /* @__PURE__ */ d(zm, {}),
              /* @__PURE__ */ d("span", { className: Z.navLabel, children: "Home" })
            ]
          }
        ),
        /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            className: Z.navItem,
            onClick: n,
            "aria-label": "Messages",
            children: [
              /* @__PURE__ */ d(Bm, {}),
              /* @__PURE__ */ d("span", { className: Z.navLabel, children: "Messages" })
            ]
          }
        ),
        /* @__PURE__ */ A(
          "button",
          {
            type: "button",
            className: V(Z.navItem, Z.navItemActive),
            "aria-label": "Help",
            "aria-current": "page",
            children: [
              /* @__PURE__ */ d(Mm, { active: !0 }),
              /* @__PURE__ */ d("span", { className: Z.navLabel, children: "Help" })
            ]
          }
        )
      ] })
    ] });
  }
);
al.displayName = "WidgetHelp";
const Fm = "_root_1tykb_1", Om = "_header_1tykb_24", Hm = "_headerRight_1tykb_35", jm = "_iconButton_1tykb_41", $m = "_scrollArea_1tykb_68", Um = "_contentWrapper_1tykb_90", qm = "_title_1tykb_97", Vm = "_updatedAt_1tykb_106", Wm = "_descriptionBox_1tykb_113", Gm = "_articleContent_1tykb_123", _e = {
  root: Fm,
  header: Om,
  headerRight: Hm,
  iconButton: jm,
  scrollArea: $m,
  contentWrapper: Um,
  title: qm,
  updatedAt: Vm,
  descriptionBox: Wm,
  articleContent: Gm
}, Xm = () => /* @__PURE__ */ d(
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
), Qm = () => /* @__PURE__ */ d(
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
), Ym = () => /* @__PURE__ */ d(
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
), sl = Ge(
  ({ article: e, onBack: t, onClose: n, className: r }) => /* @__PURE__ */ A("div", { className: V(_e.root, r), children: [
    /* @__PURE__ */ A("header", { className: _e.header, children: [
      /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          className: _e.iconButton,
          onClick: t,
          "aria-label": "Go back",
          children: /* @__PURE__ */ d(Xm, {})
        }
      ),
      /* @__PURE__ */ A("div", { className: _e.headerRight, children: [
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: _e.iconButton,
            "aria-label": "Expand",
            children: /* @__PURE__ */ d(Qm, {})
          }
        ),
        /* @__PURE__ */ d(
          "button",
          {
            type: "button",
            className: _e.iconButton,
            onClick: n,
            "aria-label": "Close",
            children: /* @__PURE__ */ d(Ym, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ d("div", { className: _e.scrollArea, children: /* @__PURE__ */ A("div", { className: _e.contentWrapper, children: [
      /* @__PURE__ */ d("h1", { className: _e.title, children: e.title }),
      e.updatedAt && /* @__PURE__ */ d("p", { className: _e.updatedAt, children: e.updatedAt }),
      e.description && /* @__PURE__ */ d("div", { className: _e.descriptionBox, children: e.description }),
      e.content && /* @__PURE__ */ d("div", { className: _e.articleContent, children: e.content })
    ] }) })
  ] })
);
sl.displayName = "WidgetArticle";
function sn() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}
function Zm(e) {
  return typeof ReadableStream < "u" && e instanceof ReadableStream;
}
function Km({
  onMessage: e,
  welcomeMessage: t
}) {
  const n = () => t ? [
    {
      id: sn(),
      role: "assistant",
      content: t,
      timestamp: /* @__PURE__ */ new Date(),
      status: "done"
    }
  ] : [], [r, i] = ae(n), [o, l] = ae(!1), [a, s] = ae(null), u = Ie(null), h = J(
    async (x, w) => {
      const k = x.getReader(), I = new TextDecoder();
      let C = "";
      const R = (_) => {
        var H;
        const T = _.trim();
        if (!T) return "";
        const D = T.startsWith("data:") ? T.replace(/^data:\s*/, "") : T;
        try {
          const b = JSON.parse(D);
          return typeof ((H = b == null ? void 0 : b.message) == null ? void 0 : H.content) == "string" && b.message.content || typeof (b == null ? void 0 : b.content) == "string" && b.content || "";
        } catch {
          return _;
        }
      }, N = (_) => {
        _ && i(
          (T) => T.map(
            (D) => D.id === w ? { ...D, content: D.content + _ } : D
          )
        );
      };
      i(
        (_) => _.map(
          (T) => T.id === w ? { ...T, status: "streaming" } : T
        )
      );
      try {
        for (; ; ) {
          const { done: D, value: H } = await k.read();
          if (D) break;
          const b = I.decode(H, { stream: !0 });
          C += b;
          const L = C.split(/\r?\n/);
          C = L.pop() ?? "";
          let P = "";
          for (const $ of L)
            P += R($);
          N(P);
        }
        const _ = I.decode();
        C += _;
        const T = R(C);
        N(T), i(
          (D) => D.map((H) => H.id === w ? { ...H, status: "done" } : H)
        );
      } catch (_) {
        throw console.log(_), i(
          (T) => T.map(
            (D) => D.id === w ? {
              ...D,
              status: "error",
              content: D.content || "Stream interrupted. Please try again."
            } : D
          )
        ), _;
      } finally {
        k.releaseLock();
      }
    },
    []
  ), c = J(
    async (x) => {
      const w = x.trim();
      if (!w || o) return;
      s(null), l(!0);
      const k = {
        id: sn(),
        role: "user",
        content: w,
        timestamp: /* @__PURE__ */ new Date(),
        status: "done"
      }, I = r;
      i((N) => [...N, k]);
      const C = sn(), R = {
        id: C,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        status: "loading"
      };
      i((N) => [...N, R]);
      try {
        const N = await e(w, I);
        Zm(N) ? await h(N, C) : i(
          (_) => _.map(
            (T) => T.id === C ? {
              ...T,
              content: N,
              status: "done",
              timestamp: /* @__PURE__ */ new Date()
            } : T
          )
        );
      } catch (N) {
        const _ = N instanceof Error ? N.message : "Something went wrong.";
        console.log(N), s(_), i(
          (T) => T.map(
            (D) => D.id === C ? {
              ...D,
              content: _,
              status: "error",
              timestamp: /* @__PURE__ */ new Date()
            } : D
          )
        );
      } finally {
        l(!1);
      }
    },
    [o, r, e, h]
  ), p = J(
    async (x) => {
      u.current = x.trim(), await c(x);
    },
    [c]
  ), f = J(async () => {
    const x = u.current;
    x && (i((w) => {
      const k = [...w].reverse().findIndex((C) => C.role === "assistant");
      if (k === -1) return w;
      const I = w.length - 1 - k;
      return w.filter((C, R) => R !== I);
    }), i((w) => {
      const k = [...w].reverse().findIndex((C) => C.role === "user");
      if (k === -1) return w;
      const I = w.length - 1 - k;
      return w.filter((C, R) => R !== I);
    }), s(null), await c(x));
  }, [c]), m = J(() => {
    i(n()), s(null), u.current = null;
  }, [t]);
  return {
    messages: r,
    sendMessage: p,
    isLoading: o,
    error: a,
    clearMessages: m,
    retryLast: f
  };
}
const Jm = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
  "details > summary"
].join(", ");
function qr(e) {
  return Array.from(
    e.querySelectorAll(Jm)
  ).filter((t) => !t.closest("[hidden]") && t.offsetParent !== null);
}
function eg(e, t) {
  fe(() => {
    if (!t || !e.current) return;
    const n = e.current, r = qr(n);
    if (r.length > 0) {
      const i = requestAnimationFrame(() => r[0].focus());
      return () => cancelAnimationFrame(i);
    }
  }, [t, e]), fe(() => {
    if (!t || !e.current) return;
    const n = e.current, r = (i) => {
      if (i.key !== "Tab") return;
      const o = qr(n);
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
const ul = "(prefers-color-scheme: dark)";
function Vr() {
  return typeof window > "u" || !window.matchMedia ? "light" : window.matchMedia(ul).matches ? "dark" : "light";
}
function tg(e) {
  const [t, n] = ae(() => e !== "auto" ? e : Vr());
  return fe(() => {
    if (e !== "auto") {
      n(e);
      return;
    }
    if (n(Vr()), typeof window > "u" || !window.matchMedia)
      return;
    const r = window.matchMedia(ul), i = (o) => {
      n(o.matches ? "dark" : "light");
    };
    return r.addEventListener ? (r.addEventListener("change", i), () => r.removeEventListener("change", i)) : (r.addListener(i), () => r.removeListener(i));
  }, [e]), t;
}
function ng({
  primaryColor: e
}) {
  const t = rg(e);
  return {
    "--ai-primary": e,
    "--ai-primary-fg": t,
    "--ai-user-bubble": e
  };
}
function rg(e) {
  const t = ig(e);
  if (!t) return "#ffffff";
  const [n, r, i] = t.map((s) => {
    const u = s / 255;
    return u <= 0.03928 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4);
  }), o = 0.2126 * n + 0.7152 * r + 0.0722 * i, l = (1 + 0.05) / (o + 0.05), a = (o + 0.05) / (0.05 + 0.05);
  return l >= a ? "#ffffff" : "#111827";
}
function ig(e) {
  const t = e.replace(/^#/, ""), n = t.length === 3 ? t.split("").map((i) => i + i).join("") : t;
  if (n.length !== 6) return null;
  const r = parseInt(n, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}
const lg = "_root_18veb_25", og = "_panelArea_18veb_123", ag = "_isOpen_18veb_148", sg = "_trigger_18veb_173", qe = {
  root: lg,
  "bottom-right": "_bottom-right_18veb_110",
  "bottom-left": "_bottom-left_18veb_116",
  panelArea: og,
  isOpen: ag,
  trigger: sg
}, un = 200, ug = ({
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
  defaultView: x = "home",
  isOpen: w,
  onOpenChange: k,
  position: I = "bottom-right",
  className: C,
  style: R
}) => {
  const [N, _] = ae(!1);
  fe(() => _(!0), []);
  const T = w !== void 0, [D, H] = ae(!1), b = T ? w : D, L = J(
    (we) => {
      T || H(we), k == null || k(we);
    },
    [T, k]
  ), P = J(() => L(!0), [L]);
  console.log(P);
  const $ = J(() => L(!1), [L]), Q = J(() => L(!b), [b, L]), [M, K] = ae(x), [te, ie] = ae(x === "chat"), [ke, g] = ae(null), Y = Ie(null), xe = J(() => {
    Y.current && clearTimeout(Y.current), K("chat"), ie(!0);
  }, []), y = J(() => {
    ie(!1), Y.current = setTimeout(
      () => K("home"),
      un
    );
  }, []), de = J(() => {
    Y.current && clearTimeout(Y.current), M === "chat" ? (ie(!1), Y.current = setTimeout(
      () => K("help"),
      un
    )) : K("help");
  }, [M]), Ae = J(
    (we) => {
      Y.current && clearTimeout(Y.current), g(we), M === "chat" ? (ie(!1), Y.current = setTimeout(
        () => K("article"),
        un
      )) : K("article");
    },
    [M]
  ), re = J(() => {
    K("home");
  }, []);
  fe(() => {
    b ? M === "chat" && ie(!0) : (Y.current && clearTimeout(Y.current), ie(!1));
  }, [b, M]), fe(() => () => {
    Y.current && clearTimeout(Y.current);
  }, []);
  const He = b && M === "home" && !te, Te = b && M === "help" && !te, Me = b && M === "article" && !te && ke != null, De = b && te, Qe = tg(i), jt = ng({ primaryColor: o }), { messages: $t, sendMessage: Ut, isLoading: xt, error: wt, clearMessages: _t, retryLast: qt } = Km({ onMessage: e, welcomeMessage: a }), rt = Ie(null), it = Ie(null);
  eg(rt, De), fe(() => {
    var we;
    b || (we = it.current) == null || we.focus();
  }, [b]), fe(() => {
    if (!b) return;
    const we = (vt) => {
      vt.key === "Escape" && (vt.preventDefault(), $());
    };
    return document.addEventListener("keydown", we), () => document.removeEventListener("keydown", we);
  }, [b, $]);
  const lt = Wr(), Vt = `${lt}-label`;
  return N ? /* @__PURE__ */ A(
    "div",
    {
      className: V(qe.root, qe[I], b && qe.isOpen, C),
      style: { ...jt, ...R },
      "data-theme": Qe,
      children: [
        He && /* @__PURE__ */ d(
          ol,
          {
            className: qe.panelArea,
            welcomeMessage: a,
            welcomeSubMessage: s,
            agentName: t,
            agentAvatar: n,
            logo: r,
            recentMessage: u,
            recentMessageTime: h,
            statusText: c,
            statusUpdated: p,
            helpArticles: f,
            showHelpArticles: m,
            onStartChat: xe,
            onShowHelp: de,
            onArticleClick: Ae,
            onClose: $
          }
        ),
        Te && f && f.length > 0 && /* @__PURE__ */ d(
          al,
          {
            className: qe.panelArea,
            helpArticles: f,
            onGoHome: y,
            onStartChat: xe,
            onArticleClick: Ae,
            onClose: $
          }
        ),
        Me && /* @__PURE__ */ d(
          sl,
          {
            className: qe.panelArea,
            article: ke,
            onBack: re,
            onClose: $
          }
        ),
        /* @__PURE__ */ d(
          il,
          {
            ref: rt,
            isOpen: De,
            onClose: $,
            onBack: y,
            messages: $t,
            isLoading: xt,
            error: wt,
            onSend: Ut,
            onRetry: qt,
            onClear: _t,
            agentName: t,
            agentAvatar: n,
            logo: r,
            placeholder: l,
            dialogId: lt,
            dialogLabelId: Vt
          }
        ),
        /* @__PURE__ */ d(
          ll,
          {
            ref: it,
            className: qe.trigger,
            isOpen: b,
            onClick: Q,
            primaryColor: o,
            logo: r,
            "aria-expanded": b,
            "aria-controls": lt,
            "aria-label": b ? "Close chat" : "Open chat"
          }
        )
      ]
    }
  ) : null;
};
ug.displayName = "ChatWidget";
const pg = () => {
  const e = Ie(null);
  return fe(() => {
  }, []), e;
}, dg = (e) => gt(() => e instanceof ReadableStream, [e]), cg = hl(null), mg = ({ config: e, children: t }) => /* @__PURE__ */ d(cg.Provider, { value: e, children: t });
export {
  mg as AIInterfaceProvider,
  Xr as ChatHeader,
  il as ChatPanel,
  ug as ChatWidget,
  rl as InputBar,
  tl as MessageBubble,
  nl as MessageList,
  ll as TriggerButton,
  vn as TypingIndicator,
  al as WidgetHelp,
  ol as WidgetHome,
  Km as useChat,
  eg as useFocusTrap,
  pg as useScrollAnchor,
  dg as useStreamDetection,
  tg as useTheme
};
