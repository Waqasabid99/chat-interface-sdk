import me, { memo as Q, useMemo as J, useCallback as C, useRef as q, useState as H, useEffect as W, useLayoutEffect as pe, useId as ye, forwardRef as Ne, createContext as Ke } from "react";
import { jsxs as a, jsx as e, Fragment as Qe } from "react/jsx-runtime";
import './index.css';const b = (...t) => t.filter(Boolean).join(" "), Xe = "_root_y08et_23", Ye = "_divider_y08et_31", Je = "_identity_y08et_10", et = "_logo_y08et_11", tt = "_logoImg_y08et_82", nt = "_avatar_y08et_12", at = "_avatarImg_y08et_110", st = "_avatarCustom_y08et_120", rt = "_avatarInitials_y08et_132", ot = "_onlineDot_y08et_152", lt = "_nameGroup_y08et_13", ct = "_agentName_y08et_14", it = "_statusLine_y08et_15", dt = "_onlineStatus_y08et_215", ut = "_onlinePip_y08et_224", ht = "_actions_y08et_16", _t = "_iconButton_y08et_291", mt = "_backButton_y08et_332", pt = "_clearButton_y08et_17", vt = "_closeButton_y08et_18", x = {
  root: Xe,
  divider: Ye,
  identity: Je,
  logo: et,
  logoImg: tt,
  avatar: nt,
  avatarImg: at,
  avatarCustom: st,
  avatarInitials: rt,
  onlineDot: ot,
  nameGroup: lt,
  agentName: ct,
  statusLine: it,
  onlineStatus: dt,
  onlinePip: ut,
  actions: ht,
  iconButton: _t,
  backButton: mt,
  clearButton: pt,
  closeButton: vt
}, gt = "_root_1k3nu_24", bt = "_rootBubble_1k3nu_46", ft = "_dotsBubble_1k3nu_55", wt = "_rootInline_1k3nu_66", yt = "_dotsInline_1k3nu_77", Nt = "_rootStandalone_1k3nu_88", kt = "_dotsStandalone_1k3nu_102", It = "_dots_1k3nu_9", xt = "_dot_1k3nu_9", Ct = "_dot1_1k3nu_128", Bt = "_dot2_1k3nu_131", Lt = "_dot3_1k3nu_134", St = "_inlineLabel_1k3nu_167", Tt = "_caption_1k3nu_179", M = {
  root: gt,
  rootBubble: bt,
  dotsBubble: ft,
  rootInline: wt,
  dotsInline: yt,
  rootStandalone: Nt,
  dotsStandalone: kt,
  dots: It,
  dot: xt,
  dot1: Ct,
  dot2: Bt,
  dot3: Lt,
  inlineLabel: St,
  caption: Tt
}, At = {
  bubble: "Thinking…",
  inline: "Assistant is typing",
  standalone: "Thinking…"
}, re = Q(
  ({ variant: t = "bubble", label: n, caption: c, className: r }) => {
    const s = n ?? At[t], i = c ?? s, d = t === "bubble", u = t === "inline", h = t === "standalone";
    return /* @__PURE__ */ a(
      "span",
      {
        className: b(
          M.root,
          d && M.rootBubble,
          u && M.rootInline,
          h && M.rootStandalone,
          r
        ),
        role: "status",
        "aria-live": "polite",
        "aria-label": s,
        children: [
          /* @__PURE__ */ a(
            "span",
            {
              className: b(
                M.dots,
                d && M.dotsBubble,
                u && M.dotsInline,
                h && M.dotsStandalone
              ),
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ e("span", { className: b(M.dot, M.dot1) }),
                /* @__PURE__ */ e("span", { className: b(M.dot, M.dot2) }),
                /* @__PURE__ */ e("span", { className: b(M.dot, M.dot3) })
              ]
            }
          ),
          h && /* @__PURE__ */ e("span", { className: M.caption, "aria-hidden": "true", children: i }),
          u && /* @__PURE__ */ e("span", { className: M.inlineLabel, "aria-hidden": "true", children: "Typing…" })
        ]
      }
    );
  }
);
re.displayName = "TypingIndicator";
const Rt = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
      }
    )
  }
), $t = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" })
  }
), Mt = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "15",
    height: "15",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z",
        clipRule: "evenodd"
      }
    )
  }
), Ht = ({ agentAvatar: t, agentName: n }) => {
  const c = J(() => {
    const r = n.trim().split(/\s+/);
    return r.length === 1 ? r[0].slice(0, 2).toUpperCase() : (r[0][0] + r[1][0]).toUpperCase();
  }, [n]);
  return /* @__PURE__ */ a("span", { className: x.avatar, "aria-hidden": "true", children: [
    typeof t == "string" ? /* @__PURE__ */ e(
      "img",
      {
        src: t,
        alt: "",
        className: x.avatarImg,
        draggable: !1
      }
    ) : t != null ? /* @__PURE__ */ e("span", { className: x.avatarCustom, children: t }) : /* @__PURE__ */ e("span", { className: x.avatarInitials, children: c }),
    /* @__PURE__ */ e("span", { className: x.onlineDot, "aria-hidden": "true" })
  ] });
}, Wt = ({ logo: t }) => typeof t == "string" ? /* @__PURE__ */ e("span", { className: x.logo, "aria-hidden": "true", children: /* @__PURE__ */ e("img", { src: t, alt: "", className: x.logoImg, draggable: !1 }) }) : /* @__PURE__ */ e("span", { className: x.logo, "aria-hidden": "true", children: t }), ke = Q(
  ({
    agentName: t = "AI Assistant",
    agentAvatar: n,
    logo: c,
    isLoading: r = !1,
    onClose: s,
    onBack: i,
    onClear: d,
    dialogLabelId: u,
    className: h
  }) => /* @__PURE__ */ a("header", { className: b(x.root, h), children: [
    i && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: b(x.iconButton, x.backButton),
        onClick: i,
        "aria-label": "Go back",
        title: "Go back",
        children: /* @__PURE__ */ e(Rt, {})
      }
    ),
    /* @__PURE__ */ a("div", { className: x.identity, children: [
      c && /* @__PURE__ */ e(Wt, { logo: c }),
      /* @__PURE__ */ e(Ht, { agentAvatar: n, agentName: t }),
      /* @__PURE__ */ a("div", { className: x.nameGroup, children: [
        /* @__PURE__ */ e(
          "h2",
          {
            id: u,
            className: x.agentName,
            title: t,
            children: t
          }
        ),
        /* @__PURE__ */ e("div", { className: x.statusLine, children: r ? /* @__PURE__ */ e(re, { variant: "inline" }) : /* @__PURE__ */ a(
          "span",
          {
            className: x.onlineStatus,
            role: "status",
            "aria-label": "Assistant is online",
            children: [
              /* @__PURE__ */ e("span", { className: x.onlinePip, "aria-hidden": "true" }),
              "Online"
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: x.actions, role: "group", "aria-label": "Chat controls", children: [
      d && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: b(x.iconButton, x.clearButton),
          onClick: d,
          "aria-label": "Clear conversation",
          title: "Clear conversation",
          children: /* @__PURE__ */ e(Mt, {})
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: b(x.iconButton, x.closeButton),
          onClick: s,
          "aria-label": "Close chat",
          title: "Close chat",
          children: /* @__PURE__ */ e($t, {})
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: x.divider, "aria-hidden": "true" })
  ] })
);
ke.displayName = "ChatHeader";
const Dt = "_row_175k2_15", Et = "_timestamp_175k2_24", zt = "_rowUser_175k2_31", Ut = "_rowAssistant_175k2_36", Pt = "_avatar_175k2_42", qt = "_avatarPulse_175k2_56", Vt = "_bubble_175k2_72", Zt = "_bubbleUser_175k2_100", jt = "_bubbleDone_175k2_109", Ot = "_bubbleLoading_175k2_117", Ft = "_bubbleStreaming_175k2_127", Gt = "_bubbleError_175k2_135", Kt = "_text_175k2_144", Qt = "_streamCursor_175k2_191", Xt = "_errorBody_175k2_214", Yt = "_errorMessage_175k2_220", Jt = "_errorIcon_175k2_228", en = "_retryButton_175k2_236", tn = "_timestampUser_175k2_302", nn = "_timestampAssistant_175k2_306", S = {
  row: Dt,
  timestamp: Et,
  rowUser: zt,
  rowAssistant: Ut,
  avatar: Pt,
  avatarPulse: qt,
  bubble: Vt,
  bubbleUser: Zt,
  bubbleDone: jt,
  bubbleLoading: Ot,
  bubbleStreaming: Ft,
  bubbleError: Gt,
  text: Kt,
  streamCursor: Qt,
  errorBody: Xt,
  errorMessage: Yt,
  errorIcon: Jt,
  retryButton: en,
  timestampUser: tn,
  timestampAssistant: nn
};
function an(t) {
  return t.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}
const sn = () => /* @__PURE__ */ e("span", { className: S.streamCursor, "aria-hidden": "true" }), rn = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "14",
    height: "14",
    "aria-hidden": "true",
    focusable: "false",
    className: S.errorIcon,
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
        clipRule: "evenodd"
      }
    )
  }
), on = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "12",
    height: "12",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.389Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z",
        clipRule: "evenodd"
      }
    )
  }
), Ie = Q(
  ({ message: t, onRetry: n, className: c }) => {
    const { role: r, content: s, timestamp: i, status: d } = t, u = r === "user", h = d === "loading", v = d === "streaming", g = d === "error", m = !d || d === "done", f = C(
      (L) => {
        L.stopPropagation(), n == null || n();
      },
      [n]
    ), T = () => h ? /* @__PURE__ */ e(re, { variant: "bubble" }) : g ? /* @__PURE__ */ a("span", { className: S.errorBody, children: [
      /* @__PURE__ */ a("span", { className: S.errorMessage, children: [
        /* @__PURE__ */ e(rn, {}),
        /* @__PURE__ */ e("span", { children: s || "Something went wrong." })
      ] }),
      n && /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: S.retryButton,
          onClick: f,
          "aria-label": "Retry message",
          children: [
            /* @__PURE__ */ e(on, {}),
            "Retry"
          ]
        }
      )
    ] }) : v ? /* @__PURE__ */ a(Qe, { children: [
      /* @__PURE__ */ e("span", { className: S.text, children: s }),
      /* @__PURE__ */ e(sn, {})
    ] }) : /* @__PURE__ */ e("span", { className: S.text, children: s }), A = !u && (h || v) ? { "aria-live": "polite", "aria-atomic": !1 } : {};
    return /* @__PURE__ */ a(
      "div",
      {
        className: b(
          S.row,
          u ? S.rowUser : S.rowAssistant,
          c
        ),
        role: "listitem",
        children: [
          !u && /* @__PURE__ */ e(
            "span",
            {
              className: b(S.avatar, h && S.avatarPulse),
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: b(
                S.bubble,
                u && S.bubbleUser,
                h && S.bubbleLoading,
                v && S.bubbleStreaming,
                g && S.bubbleError,
                m && !u && S.bubbleDone
              ),
              ...A,
              children: T()
            }
          ),
          (m || g) && /* @__PURE__ */ e(
            "time",
            {
              className: b(
                S.timestamp,
                u ? S.timestampUser : S.timestampAssistant
              ),
              dateTime: i.toISOString(),
              "aria-hidden": "true",
              children: an(i)
            }
          )
        ]
      }
    );
  }
);
Ie.displayName = "MessageBubble";
const ln = "_root_1we36_8", cn = "_scrollArea_1we36_9", dn = "_list_1we36_10", un = "_listItem_1we36_93", hn = "_sentinelItem_1we36_117", _n = "_sentinel_1we36_11", mn = "_emptyState_1we36_134", pn = "_emptyIcon_1we36_151", vn = "_emptyText_1we36_177", gn = "_emptySubtext_1we36_185", bn = "_scrollPill_1we36_13", P = {
  root: ln,
  scrollArea: cn,
  list: dn,
  listItem: un,
  sentinelItem: hn,
  sentinel: _n,
  emptyState: mn,
  emptyIcon: pn,
  emptyText: vn,
  emptySubtext: gn,
  scrollPill: bn
}, fn = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd"
      }
    )
  }
), wn = () => /* @__PURE__ */ a("div", { className: P.emptyState, "aria-hidden": "true", children: [
  /* @__PURE__ */ e("span", { className: P.emptyIcon, children: /* @__PURE__ */ e(
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
      children: /* @__PURE__ */ e("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
    }
  ) }),
  /* @__PURE__ */ e("p", { className: P.emptyText, children: "Start the conversation" }),
  /* @__PURE__ */ e("p", { className: P.emptySubtext, children: "Send a message to get started" })
] }), xe = Q(
  ({ messages: t, onRetry: n, className: c }) => {
    const r = q(null), s = q(null), [i, d] = H(!1), u = q(t.length);
    W(() => {
      const m = s.current;
      if (!m) return;
      const f = new IntersectionObserver(
        ([T]) => {
          d(!T.isIntersecting);
        },
        {
          root: r.current,
          threshold: 0.1
          // 10% of the sentinel must be visible to count
        }
      );
      return f.observe(m), () => f.disconnect();
    }, []);
    const h = C(
      (m = "smooth") => {
        var f;
        (f = s.current) == null || f.scrollIntoView({ behavior: m, block: "nearest" });
      },
      []
    );
    pe(() => {
      if (i) return;
      const m = t.length, f = t[t.length - 1], T = m > u.current, A = (f == null ? void 0 : f.status) === "streaming" || (f == null ? void 0 : f.status) === "loading";
      (T || A) && h("smooth"), u.current = m;
    }, [t, i, h]), pe(() => {
      h("instant");
    }, []);
    const v = C(() => {
      h("smooth"), d(!1);
    }, [h]), g = t.length === 0;
    return /* @__PURE__ */ a("div", { className: b(P.root, c), children: [
      /* @__PURE__ */ e(
        "div",
        {
          ref: r,
          className: P.scrollArea,
          role: "log",
          "aria-live": "polite",
          "aria-label": "Chat messages",
          "aria-relevant": "additions",
          tabIndex: 0,
          children: g ? /* @__PURE__ */ e(wn, {}) : (
            // Semantic list — MessageBubble uses role="listitem"
            /* @__PURE__ */ a("ul", { className: P.list, "aria-label": "Message history", children: [
              t.map((m) => /* @__PURE__ */ e("li", { className: P.listItem, children: /* @__PURE__ */ e(
                Ie,
                {
                  message: m,
                  onRetry: m.role === "assistant" && m.status === "error" ? n : void 0
                }
              ) }, m.id)),
              /* @__PURE__ */ e("li", { "aria-hidden": "true", className: P.sentinelItem, children: /* @__PURE__ */ e("div", { ref: s, className: P.sentinel }) })
            ] })
          )
        }
      ),
      i && !g && /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: P.scrollPill,
          onClick: v,
          "aria-label": "Scroll to latest message",
          children: [
            /* @__PURE__ */ e(fn, {}),
            /* @__PURE__ */ e("span", { children: "Latest" })
          ]
        }
      )
    ] });
  }
);
xe.displayName = "MessageList";
const yn = "_root_z2ws1_14", Nn = "_divider_z2ws1_25", kn = "_textareaRow_z2ws1_5", In = "_textarea_z2ws1_5", xn = "_loading_z2ws1_91", Cn = "_actionBar_z2ws1_6", Bn = "_sendButton_z2ws1_108", Ln = "_sendButtonActive_z2ws1_136", Sn = "_spinner_z2ws1_165", Tn = "_srOnly_z2ws1_180", U = {
  root: yn,
  divider: Nn,
  textareaRow: kn,
  textarea: In,
  loading: xn,
  actionBar: Cn,
  sendButton: Bn,
  sendButtonActive: Ln,
  spinner: Sn,
  srOnly: Tn
}, An = 22, Rn = 20, $n = 5, ve = An * $n + Rn, Ce = ({
  onSend: t,
  isLoading: n = !1,
  placeholder: c = "Type a message…",
  autoFocus: r = !1,
  className: s
}) => {
  const [i, d] = H(""), u = q(null), h = ye(), v = C(() => {
    const o = u.current;
    o && (o.style.height = "auto", o.style.height = `${Math.min(o.scrollHeight, ve)}px`, o.style.overflowY = o.scrollHeight > ve ? "auto" : "hidden");
  }, []), g = C(() => {
    const o = u.current;
    o && (o.style.height = "auto", o.style.overflowY = "hidden");
  }, []);
  W(() => {
    v();
  }, [i, v]), W(() => {
    if (r && u.current) {
      const o = requestAnimationFrame(() => {
        var B;
        (B = u.current) == null || B.focus();
      });
      return () => cancelAnimationFrame(o);
    }
  }, [r]);
  const m = q(n);
  W(() => {
    var o;
    m.current && !n && ((o = u.current) == null || o.focus()), m.current = n;
  }, [n]);
  const f = C(() => {
    const o = i.trim();
    !o || n || (t(o), d(""), g());
  }, [i, n, t, g]), T = C(
    (o) => {
      o.key === "Enter" && !o.shiftKey && (o.preventDefault(), f());
    },
    [f]
  ), A = i.trim().length > 0 && !n, L = `${h}-input`;
  return /* @__PURE__ */ a(
    "div",
    {
      className: b(U.root, n && U.loading, s),
      role: "group",
      "aria-label": "Message input",
      children: [
        /* @__PURE__ */ e("div", { className: U.divider, "aria-hidden": "true" }),
        /* @__PURE__ */ a("div", { className: U.textareaRow, children: [
          /* @__PURE__ */ e("label", { htmlFor: L, className: U.srOnly, children: c }),
          /* @__PURE__ */ e(
            "textarea",
            {
              ref: u,
              id: L,
              className: U.textarea,
              value: i,
              onChange: (o) => d(o.target.value),
              onKeyDown: T,
              placeholder: c,
              disabled: n,
              rows: 1,
              "aria-label": c,
              "aria-disabled": n,
              "aria-multiline": "true",
              "aria-describedby": n ? `${h}-loading` : void 0,
              autoComplete: "off",
              autoCorrect: "on",
              autoCapitalize: "sentences",
              spellCheck: !0
            }
          ),
          n && /* @__PURE__ */ e(
            "span",
            {
              id: `${h}-loading`,
              className: U.srOnly,
              "aria-live": "polite",
              children: "Waiting for response…"
            }
          )
        ] }),
        /* @__PURE__ */ e("div", { className: U.actionBar, children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: b(U.sendButton, A && U.sendButtonActive),
            onClick: f,
            disabled: !A,
            "aria-label": "Send message",
            "aria-disabled": !A,
            tabIndex: 0,
            children: n ? /* @__PURE__ */ e(Hn, {}) : /* @__PURE__ */ e(Mn, {})
          }
        ) })
      ]
    }
  );
};
Ce.displayName = "InputBar";
const Mn = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e("path", { d: "M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" })
  }
), Hn = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    className: U.spinner,
    children: /* @__PURE__ */ e(
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
), Wn = "_panel_7aasy_8", Dn = "_opening_7aasy_15", En = "_closing_7aasy_16", zn = "_errorBanner_7aasy_126", Un = "_errorBannerIcon_7aasy_156", Pn = "_errorBannerText_7aasy_163", qn = "_errorBannerDismiss_7aasy_171", K = {
  panel: Wn,
  opening: Dn,
  closing: En,
  errorBanner: zn,
  errorBannerIcon: Un,
  errorBannerText: Pn,
  errorBannerDismiss: qn
}, Vn = 200, Be = Ne(
  ({
    isOpen: t,
    onClose: n,
    messages: c,
    isLoading: r,
    error: s,
    onSend: i,
    onRetry: d,
    onClear: u,
    agentName: h = "AI Assistant",
    agentAvatar: v,
    logo: g,
    placeholder: m,
    onBack: f,
    dialogId: T,
    dialogLabelId: A,
    className: L
  }, o) => {
    const [B, R] = H(t), [k, $] = H(!1), y = q(null);
    return W(() => (y.current && (clearTimeout(y.current), y.current = null), t ? ($(!1), R(!0)) : ($(!0), y.current = setTimeout(() => {
      R(!1), $(!1);
    }, Vn)), () => {
      y.current && clearTimeout(y.current);
    }), [t]), B ? /* @__PURE__ */ a(
      "div",
      {
        ref: o,
        id: T,
        className: b(
          K.panel,
          k ? K.closing : K.opening,
          L
        ),
        role: "dialog",
        "aria-modal": "true",
        "aria-label": h,
        "aria-labelledby": A,
        onClick: (I) => I.stopPropagation(),
        children: [
          /* @__PURE__ */ e(
            ke,
            {
              agentName: h,
              agentAvatar: v,
              logo: g,
              isLoading: r,
              onClose: n,
              onBack: f,
              onClear: c.length > 0 ? u : void 0,
              dialogLabelId: A
            }
          ),
          /* @__PURE__ */ e(xe, { messages: c, onRetry: d }),
          /* @__PURE__ */ e(
            Ce,
            {
              onSend: i,
              isLoading: r,
              placeholder: m,
              autoFocus: t && !k
            }
          ),
          s && /* @__PURE__ */ a(
            "div",
            {
              className: K.errorBanner,
              role: "alert",
              "aria-live": "assertive",
              "aria-atomic": "true",
              children: [
                /* @__PURE__ */ e("span", { className: K.errorBannerIcon, "aria-hidden": "true", children: "⚠" }),
                /* @__PURE__ */ e("span", { className: K.errorBannerText, children: s }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    className: K.errorBannerDismiss,
                    onClick: d,
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
Be.displayName = "ChatPanel";
const Zn = "_button_kpqzz_32", jn = "_buttonOpen_kpqzz_100", On = "_iconWrap_kpqzz_16", Fn = "_iconSlot_kpqzz_124", Gn = "_iconChat_kpqzz_15", Kn = "_iconClose_kpqzz_15", Qn = "_iconHidden_kpqzz_150", Xn = "_logoImg_kpqzz_158", Yn = "_logoNode_kpqzz_168", Jn = "_unreadDot_kpqzz_47", ea = "_ripple_kpqzz_47", E = {
  button: Zn,
  buttonOpen: jn,
  iconWrap: On,
  iconSlot: Fn,
  iconChat: Gn,
  iconClose: Kn,
  iconHidden: Qn,
  logoImg: Xn,
  logoNode: Yn,
  unreadDot: Jn,
  ripple: ea
}, ta = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223Z",
        clipRule: "evenodd"
      }
    )
  }
), na = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd"
      }
    )
  }
), aa = ({ logo: t }) => typeof t == "string" ? /* @__PURE__ */ e("img", { src: t, alt: "", className: E.logoImg, draggable: !1 }) : /* @__PURE__ */ e("span", { className: E.logoNode, children: t }), Le = Ne(
  ({
    isOpen: t,
    primaryColor: n,
    logo: c,
    messageCount: r = 0,
    className: s,
    ...i
    // aria-label, aria-expanded, aria-controls, onClick, etc.
  }, d) => {
    const u = !t && r > 0;
    return console.log(n), /* @__PURE__ */ a(
      "button",
      {
        ref: d,
        type: "button",
        className: b(E.button, t && E.buttonOpen, s),
        ...i,
        children: [
          /* @__PURE__ */ a("span", { className: E.iconWrap, children: [
            /* @__PURE__ */ e(
              "span",
              {
                className: b(
                  E.iconSlot,
                  E.iconChat,
                  t && E.iconHidden
                ),
                "aria-hidden": "true",
                children: c ? /* @__PURE__ */ e(aa, { logo: c }) : /* @__PURE__ */ e(ta, {})
              }
            ),
            /* @__PURE__ */ e(
              "span",
              {
                className: b(
                  E.iconSlot,
                  E.iconClose,
                  !t && E.iconHidden
                ),
                "aria-hidden": "true",
                children: /* @__PURE__ */ e(na, {})
              }
            )
          ] }),
          u && /* @__PURE__ */ e("span", { className: E.unreadDot, "aria-hidden": "true" }),
          t && /* @__PURE__ */ e("span", { className: E.ripple, "aria-hidden": "true" })
        ]
      }
    );
  }
);
Le.displayName = "TriggerButton";
const sa = "_root_153sx_8", ra = "_header_153sx_9", oa = "_headerTop_153sx_51", la = "_logoWrap_153sx_59", ca = "_logoImg_153sx_68", ia = "_closeButton_153sx_76", da = "_welcomeHeading_153sx_107", ua = "_bodyWrapper_153sx_10", ha = "_scrollArea_153sx_11", _a = "_cards_153sx_12", ma = "_card_153sx_12", pa = "_cardClickable_153sx_192", va = "_cardLabel_153sx_210", ga = "_recentRow_153sx_223", ba = "_recentContent_153sx_229", fa = "_recentMeta_153sx_234", wa = "_recentName_153sx_242", ya = "_recentTime_153sx_251", Na = "_recentText_153sx_257", ka = "_avatar_153sx_272", Ia = "_avatarSm_153sx_282", xa = "_avatarImg_153sx_287", Ca = "_avatarCustom_153sx_294", Ba = "_avatarInitials_153sx_302", La = "_statusRow_153sx_318", Sa = "_statusIcon_153sx_324", Ta = "_statusContent_153sx_329", Aa = "_statusTitle_153sx_334", Ra = "_statusUpdated_153sx_347", $a = "_articlesCard_153sx_357", Ma = "_searchBar_153sx_365", Ha = "_searchInput_153sx_374", Wa = "_searchIcon_153sx_392", Da = "_articleList_153sx_400", Ea = "_articleItem_153sx_407", za = "_articleLink_153sx_411", Ua = "_articleTitle_153sx_443", Pa = "_noResults_153sx_460", qa = "_ctaSection_153sx_13", Va = "_ctaButton_153sx_477", Za = "_nav_153sx_14", ja = "_navItem_153sx_524", Oa = "_navItemActive_153sx_557", Fa = "_navLabel_153sx_565", l = {
  root: sa,
  header: ra,
  headerTop: oa,
  logoWrap: la,
  logoImg: ca,
  closeButton: ia,
  welcomeHeading: da,
  bodyWrapper: ua,
  scrollArea: ha,
  cards: _a,
  card: ma,
  cardClickable: pa,
  cardLabel: va,
  recentRow: ga,
  recentContent: ba,
  recentMeta: fa,
  recentName: wa,
  recentTime: ya,
  recentText: Na,
  avatar: ka,
  avatarSm: Ia,
  avatarImg: xa,
  avatarCustom: Ca,
  avatarInitials: Ba,
  statusRow: La,
  statusIcon: Sa,
  statusContent: Ta,
  statusTitle: Aa,
  statusUpdated: Ra,
  articlesCard: $a,
  searchBar: Ma,
  searchInput: Ha,
  searchIcon: Wa,
  articleList: Da,
  articleItem: Ea,
  articleLink: za,
  articleTitle: Ua,
  noResults: Pa,
  ctaSection: qa,
  ctaButton: Va,
  nav: Za,
  navItem: ja,
  navItemActive: Oa,
  navLabel: Fa
}, Ga = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), Ka = () => /* @__PURE__ */ a(
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
      /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ e("path", { d: "m21 21-4.35-4.35" })
    ]
  }
), ge = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "14",
    height: "14",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), Qa = () => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    "aria-hidden": "true",
    focusable: "false",
    children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "12", fill: "#22c55e" }),
      /* @__PURE__ */ e(
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
), Xa = ({ active: t }) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    focusable: "false",
    fill: t ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ e("path", { d: "M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" }),
      /* @__PURE__ */ e("path", { d: "M9 21V12h6v9" })
    ]
  }
), Ya = () => /* @__PURE__ */ e(
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
    children: /* @__PURE__ */ e("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
  }
), Ja = () => /* @__PURE__ */ a(
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
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ e("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
      /* @__PURE__ */ e("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
    ]
  }
), es = () => /* @__PURE__ */ e(
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
    children: /* @__PURE__ */ e("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
  }
), ts = ({
  agentAvatar: t,
  agentName: n,
  size: c = "md"
}) => {
  const r = J(() => {
    const s = n.trim().split(/\s+/);
    return s.length === 1 ? s[0].slice(0, 2).toUpperCase() : (s[0][0] + s[1][0]).toUpperCase();
  }, [n]);
  return /* @__PURE__ */ e(
    "span",
    {
      className: b(l.avatar, c === "sm" && l.avatarSm),
      "aria-hidden": "true",
      children: typeof t == "string" ? /* @__PURE__ */ e(
        "img",
        {
          src: t,
          alt: "",
          className: l.avatarImg,
          draggable: !1
        }
      ) : t != null ? /* @__PURE__ */ e("span", { className: l.avatarCustom, children: t }) : /* @__PURE__ */ e("span", { className: l.avatarInitials, children: r })
    }
  );
}, ns = ({ logo: t }) => typeof t == "string" ? /* @__PURE__ */ e("span", { className: l.logoWrap, children: /* @__PURE__ */ e("img", { src: t, alt: "", className: l.logoImg, draggable: !1 }) }) : /* @__PURE__ */ e("span", { className: l.logoWrap, children: t }), Se = Q(
  ({
    welcomeMessage: t = `Need support?
How can we help?`,
    welcomeSubMessage: n,
    agentName: c = "AI Assistant",
    agentAvatar: r,
    logo: s,
    recentMessage: i,
    recentMessageTime: d,
    statusText: u,
    statusUpdated: h,
    helpArticles: v,
    showHelpArticles: g = !1,
    onStartChat: m,
    onShowHelp: f,
    onClose: T,
    onArticleClick: A,
    className: L
  }) => {
    const [o, B] = H(""), R = g && v && v.length > 0, k = J(() => {
      if (!v) return [];
      if (!o.trim()) return v;
      const _ = o.toLowerCase();
      return v.filter((p) => p.title.toLowerCase().includes(_));
    }, [v, o]), $ = C(
      (_) => B(_.target.value),
      []
    ), y = i != null, I = u != null;
    return /* @__PURE__ */ a("div", { className: b(l.root, L), children: [
      /* @__PURE__ */ a("div", { className: l.header, children: [
        /* @__PURE__ */ a("div", { className: l.headerTop, children: [
          s ? /* @__PURE__ */ e(ns, { logo: s }) : /* @__PURE__ */ e("span", { className: l.logoWrap, "aria-hidden": "true" }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: l.closeButton,
              onClick: T,
              "aria-label": "Close chat",
              children: /* @__PURE__ */ e(Ga, {})
            }
          )
        ] }),
        /* @__PURE__ */ a("h1", { className: l.welcomeHeading, children: [
          t.split(`
`).map((_, p) => /* @__PURE__ */ a(me.Fragment, { children: [
            p > 0 && /* @__PURE__ */ e("br", {}),
            _
          ] }, p)),
          /* @__PURE__ */ e("br", {}),
          n == null ? void 0 : n.split(`
`).map((_, p) => /* @__PURE__ */ a(me.Fragment, { children: [
            p > 0 && /* @__PURE__ */ e("br", {}),
            _
          ] }, p))
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: l.bodyWrapper, children: [
        /* @__PURE__ */ a("div", { className: l.scrollArea, children: [
          /* @__PURE__ */ a("div", { className: l.cards, children: [
            y && /* @__PURE__ */ a(
              "button",
              {
                type: "button",
                className: b(l.card, l.cardClickable),
                onClick: m,
                "aria-label": "View recent conversation",
                children: [
                  /* @__PURE__ */ e("p", { className: l.cardLabel, children: "Recent message" }),
                  /* @__PURE__ */ a("div", { className: l.recentRow, children: [
                    /* @__PURE__ */ e(
                      ts,
                      {
                        agentAvatar: r,
                        agentName: c,
                        size: "sm"
                      }
                    ),
                    /* @__PURE__ */ a("div", { className: l.recentContent, children: [
                      /* @__PURE__ */ a("div", { className: l.recentMeta, children: [
                        /* @__PURE__ */ e("span", { className: l.recentName, children: c }),
                        d && /* @__PURE__ */ e("span", { className: l.recentTime, children: d })
                      ] }),
                      /* @__PURE__ */ e("p", { className: l.recentText, children: i })
                    ] })
                  ] })
                ]
              }
            ),
            I && /* @__PURE__ */ e("div", { className: l.card, children: /* @__PURE__ */ a("div", { className: l.statusRow, children: [
              /* @__PURE__ */ e("span", { className: l.statusIcon, children: /* @__PURE__ */ e(Qa, {}) }),
              /* @__PURE__ */ a("div", { className: l.statusContent, children: [
                /* @__PURE__ */ a("p", { className: l.statusTitle, children: [
                  /* @__PURE__ */ e("strong", { children: "Status: " }),
                  u
                ] }),
                h && /* @__PURE__ */ e("p", { className: l.statusUpdated, children: h })
              ] })
            ] }) }),
            R && /* @__PURE__ */ a("div", { className: l.articlesCard, children: [
              /* @__PURE__ */ a("div", { className: l.searchBar, children: [
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "search",
                    className: l.searchInput,
                    placeholder: "Search for help",
                    value: o,
                    onChange: $,
                    "aria-label": "Search help articles"
                  }
                ),
                /* @__PURE__ */ e("span", { className: l.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(Ka, {}) })
              ] }),
              /* @__PURE__ */ e("ul", { className: l.articleList, "aria-label": "Help articles", children: k.length > 0 ? k.map((_, p) => /* @__PURE__ */ e("li", { className: l.articleItem, children: _.href ? /* @__PURE__ */ a(
                "a",
                {
                  href: _.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: l.articleLink,
                  children: [
                    /* @__PURE__ */ e("span", { className: l.articleTitle, children: _.title }),
                    /* @__PURE__ */ e(ge, {})
                  ]
                }
              ) : /* @__PURE__ */ a(
                "button",
                {
                  type: "button",
                  className: l.articleLink,
                  onClick: () => A == null ? void 0 : A(_),
                  children: [
                    /* @__PURE__ */ e("span", { className: l.articleTitle, children: _.title }),
                    /* @__PURE__ */ e(ge, {})
                  ]
                }
              ) }, p)) : /* @__PURE__ */ e("li", { className: l.noResults, children: "No results found" }) })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: l.ctaSection, children: /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: l.ctaButton,
              onClick: m,
              children: [
                /* @__PURE__ */ e(es, {}),
                "Send us a message"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ a("nav", { className: l.nav, "aria-label": "Widget navigation", children: [
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: b(l.navItem, l.navItemActive),
              "aria-label": "Home",
              "aria-current": "page",
              children: [
                /* @__PURE__ */ e(Xa, { active: !0 }),
                /* @__PURE__ */ e("span", { className: l.navLabel, children: "Home" })
              ]
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: l.navItem,
              onClick: m,
              "aria-label": "Messages",
              children: [
                /* @__PURE__ */ e(Ya, {}),
                /* @__PURE__ */ e("span", { className: l.navLabel, children: "Messages" })
              ]
            }
          ),
          R && f && /* @__PURE__ */ a(
            "button",
            {
              type: "button",
              className: l.navItem,
              onClick: f,
              "aria-label": "Help",
              children: [
                /* @__PURE__ */ e(Ja, {}),
                /* @__PURE__ */ e("span", { className: l.navLabel, children: "Help" })
              ]
            }
          )
        ] })
      ] })
    ] });
  }
);
Se.displayName = "WidgetHome";
const as = "_root_2tms9_8", ss = "_header_2tms9_33", rs = "_title_2tms9_45", os = "_closeButton_2tms9_53", ls = "_headerDivider_2tms9_84", cs = "_scrollArea_2tms9_96", is = "_searchBarWrap_2tms9_118", ds = "_searchBar_2tms9_118", us = "_searchInput_2tms9_141", hs = "_searchIcon_2tms9_158", _s = "_articleList_2tms9_166", ms = "_articleItem_2tms9_173", ps = "_articleLink_2tms9_177", vs = "_articleTitle_2tms9_209", gs = "_noResults_2tms9_221", bs = "_nav_2tms9_231", fs = "_navItem_2tms9_239", ws = "_navItemActive_2tms9_270", ys = "_navLabel_2tms9_277", N = {
  root: as,
  header: ss,
  title: rs,
  closeButton: os,
  headerDivider: ls,
  scrollArea: cs,
  searchBarWrap: is,
  searchBar: ds,
  searchInput: us,
  searchIcon: hs,
  articleList: _s,
  articleItem: ms,
  articleLink: ps,
  articleTitle: vs,
  noResults: gs,
  nav: bs,
  navItem: fs,
  navItemActive: ws,
  navLabel: ys
}, Ns = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), ks = () => /* @__PURE__ */ a(
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
      /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ e("path", { d: "m21 21-4.35-4.35" })
    ]
  }
), be = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    width: "14",
    height: "14",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), Is = () => /* @__PURE__ */ a(
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
      /* @__PURE__ */ e("path", { d: "M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" }),
      /* @__PURE__ */ e("path", { d: "M9 21V12h6v9" })
    ]
  }
), xs = () => /* @__PURE__ */ e(
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
    children: /* @__PURE__ */ e("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
  }
), Cs = ({ active: t }) => /* @__PURE__ */ a(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "22",
    height: "22",
    "aria-hidden": "true",
    focusable: "false",
    fill: t ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ e("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
      /* @__PURE__ */ e("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
    ]
  }
), Te = Q(
  ({
    helpArticles: t,
    onGoHome: n,
    onStartChat: c,
    onClose: r,
    onArticleClick: s,
    className: i
  }) => {
    const [d, u] = H(""), h = J(() => {
      if (!d.trim()) return t;
      const g = d.toLowerCase();
      return t.filter((m) => m.title.toLowerCase().includes(g));
    }, [t, d]), v = C(
      (g) => u(g.target.value),
      []
    );
    return /* @__PURE__ */ a("div", { className: b(N.root, i), children: [
      /* @__PURE__ */ a("header", { className: N.header, children: [
        /* @__PURE__ */ e("h1", { className: N.title, children: "Help" }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: N.closeButton,
            onClick: r,
            "aria-label": "Close chat",
            children: /* @__PURE__ */ e(Ns, {})
          }
        ),
        /* @__PURE__ */ e("div", { className: N.headerDivider, "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ a("div", { className: N.scrollArea, children: [
        /* @__PURE__ */ e("div", { className: N.searchBarWrap, children: /* @__PURE__ */ a("div", { className: N.searchBar, children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "search",
              className: N.searchInput,
              placeholder: "Search for help",
              value: d,
              onChange: v,
              "aria-label": "Search help articles",
              autoFocus: !0
            }
          ),
          /* @__PURE__ */ e("span", { className: N.searchIcon, "aria-hidden": "true", children: /* @__PURE__ */ e(ks, {}) })
        ] }) }),
        /* @__PURE__ */ e("ul", { className: N.articleList, "aria-label": "Help articles", children: h.length > 0 ? h.map((g, m) => /* @__PURE__ */ e("li", { className: N.articleItem, children: g.href ? /* @__PURE__ */ a(
          "a",
          {
            href: g.href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: N.articleLink,
            children: [
              /* @__PURE__ */ e("span", { className: N.articleTitle, children: g.title }),
              /* @__PURE__ */ e(be, {})
            ]
          }
        ) : /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: N.articleLink,
            onClick: () => s == null ? void 0 : s(g),
            children: [
              /* @__PURE__ */ e("span", { className: N.articleTitle, children: g.title }),
              /* @__PURE__ */ e(be, {})
            ]
          }
        ) }, m)) : /* @__PURE__ */ a("li", { className: N.noResults, children: [
          "No articles match “",
          d,
          "”"
        ] }) })
      ] }),
      /* @__PURE__ */ a("nav", { className: N.nav, "aria-label": "Widget navigation", children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: N.navItem,
            onClick: n,
            "aria-label": "Home",
            children: [
              /* @__PURE__ */ e(Is, {}),
              /* @__PURE__ */ e("span", { className: N.navLabel, children: "Home" })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: N.navItem,
            onClick: c,
            "aria-label": "Messages",
            children: [
              /* @__PURE__ */ e(xs, {}),
              /* @__PURE__ */ e("span", { className: N.navLabel, children: "Messages" })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            className: b(N.navItem, N.navItemActive),
            "aria-label": "Help",
            "aria-current": "page",
            children: [
              /* @__PURE__ */ e(Cs, { active: !0 }),
              /* @__PURE__ */ e("span", { className: N.navLabel, children: "Help" })
            ]
          }
        )
      ] })
    ] });
  }
);
Te.displayName = "WidgetHelp";
const Bs = "_root_1tykb_1", Ls = "_header_1tykb_24", Ss = "_headerRight_1tykb_35", Ts = "_iconButton_1tykb_41", As = "_scrollArea_1tykb_68", Rs = "_contentWrapper_1tykb_90", $s = "_title_1tykb_97", Ms = "_updatedAt_1tykb_106", Hs = "_descriptionBox_1tykb_113", Ws = "_articleContent_1tykb_123", z = {
  root: Bs,
  header: Ls,
  headerRight: Ss,
  iconButton: Ts,
  scrollArea: As,
  contentWrapper: Rs,
  title: $s,
  updatedAt: Ms,
  descriptionBox: Hs,
  articleContent: Ws
}, Ds = () => /* @__PURE__ */ e(
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
    children: /* @__PURE__ */ e("path", { d: "M15 18l-6-6 6-6" })
  }
), Es = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "currentColor",
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 4h6v6h-2V7.41l-4.29 4.3-1.42-1.42L16.59 6H14V4zm-4 16H4v-6h2v2.59l4.29-4.3 1.42 1.42L7.41 18H10v2z"
      }
    )
  }
), zs = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    width: "18",
    height: "18",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      }
    )
  }
), Ae = Q(
  ({ article: t, onBack: n, onClose: c, className: r }) => /* @__PURE__ */ a("div", { className: b(z.root, r), children: [
    /* @__PURE__ */ a("header", { className: z.header, children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: z.iconButton,
          onClick: n,
          "aria-label": "Go back",
          children: /* @__PURE__ */ e(Ds, {})
        }
      ),
      /* @__PURE__ */ a("div", { className: z.headerRight, children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: z.iconButton,
            "aria-label": "Expand",
            children: /* @__PURE__ */ e(Es, {})
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: z.iconButton,
            onClick: c,
            "aria-label": "Close",
            children: /* @__PURE__ */ e(zs, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: z.scrollArea, children: /* @__PURE__ */ a("div", { className: z.contentWrapper, children: [
      /* @__PURE__ */ e("h1", { className: z.title, children: t.title }),
      t.updatedAt && /* @__PURE__ */ e("p", { className: z.updatedAt, children: t.updatedAt }),
      t.description && /* @__PURE__ */ e("div", { className: z.descriptionBox, children: t.description }),
      t.content && /* @__PURE__ */ e("div", { className: z.articleContent, children: t.content })
    ] }) })
  ] })
);
Ae.displayName = "WidgetArticle";
function ae() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}
function Us(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
function Ps({
  onMessage: t,
  welcomeMessage: n
}) {
  const c = () => n ? [
    {
      id: ae(),
      role: "assistant",
      content: n,
      timestamp: /* @__PURE__ */ new Date(),
      status: "done"
    }
  ] : [], [r, s] = H(c), [i, d] = H(!1), [u, h] = H(null), v = q(null), g = C(
    async (L, o) => {
      const B = L.getReader(), R = new TextDecoder();
      let k = "";
      const $ = (I) => {
        var V;
        const _ = I.trim();
        if (!_) return "";
        const p = _.startsWith("data:") ? _.replace(/^data:\s*/, "") : _;
        try {
          const w = JSON.parse(p);
          return typeof ((V = w == null ? void 0 : w.message) == null ? void 0 : V.content) == "string" && w.message.content || typeof (w == null ? void 0 : w.content) == "string" && w.content || "";
        } catch {
          return I;
        }
      }, y = (I) => {
        I && s(
          (_) => _.map(
            (p) => p.id === o ? { ...p, content: p.content + I } : p
          )
        );
      };
      s(
        (I) => I.map(
          (_) => _.id === o ? { ..._, status: "streaming" } : _
        )
      );
      try {
        for (; ; ) {
          const { done: p, value: V } = await B.read();
          if (p) break;
          const w = R.decode(V, { stream: !0 });
          k += w;
          const j = k.split(/\r?\n/);
          k = j.pop() ?? "";
          let ee = "";
          for (const F of j)
            ee += $(F);
          y(ee);
        }
        const I = R.decode();
        k += I;
        const _ = $(k);
        y(_), s(
          (p) => p.map((V) => V.id === o ? { ...V, status: "done" } : V)
        );
      } catch (I) {
        throw console.log(I), s(
          (_) => _.map(
            (p) => p.id === o ? {
              ...p,
              status: "error",
              content: p.content || "Stream interrupted. Please try again."
            } : p
          )
        ), I;
      } finally {
        B.releaseLock();
      }
    },
    []
  ), m = C(
    async (L) => {
      const o = L.trim();
      if (!o || i) return;
      h(null), d(!0);
      const B = {
        id: ae(),
        role: "user",
        content: o,
        timestamp: /* @__PURE__ */ new Date(),
        status: "done"
      }, R = r;
      s((y) => [...y, B]);
      const k = ae(), $ = {
        id: k,
        role: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        status: "loading"
      };
      s((y) => [...y, $]);
      try {
        const y = await t(o, R);
        Us(y) ? await g(y, k) : s(
          (I) => I.map(
            (_) => _.id === k ? {
              ..._,
              content: y,
              status: "done",
              timestamp: /* @__PURE__ */ new Date()
            } : _
          )
        );
      } catch (y) {
        const I = y instanceof Error ? y.message : "Something went wrong.";
        console.log(y), h(I), s(
          (_) => _.map(
            (p) => p.id === k ? {
              ...p,
              content: I,
              status: "error",
              timestamp: /* @__PURE__ */ new Date()
            } : p
          )
        );
      } finally {
        d(!1);
      }
    },
    [i, r, t, g]
  ), f = C(
    async (L) => {
      v.current = L.trim(), await m(L);
    },
    [m]
  ), T = C(async () => {
    const L = v.current;
    L && (s((o) => {
      const B = [...o].reverse().findIndex((k) => k.role === "assistant");
      if (B === -1) return o;
      const R = o.length - 1 - B;
      return o.filter((k, $) => $ !== R);
    }), s((o) => {
      const B = [...o].reverse().findIndex((k) => k.role === "user");
      if (B === -1) return o;
      const R = o.length - 1 - B;
      return o.filter((k, $) => $ !== R);
    }), h(null), await m(L));
  }, [m]), A = C(() => {
    s(c()), h(null), v.current = null;
  }, [n]);
  return {
    messages: r,
    sendMessage: f,
    isLoading: i,
    error: u,
    clearMessages: A,
    retryLast: T
  };
}
const qs = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
  "details > summary"
].join(", ");
function fe(t) {
  return Array.from(
    t.querySelectorAll(qs)
  ).filter((n) => !n.closest("[hidden]") && n.offsetParent !== null);
}
function Vs(t, n) {
  W(() => {
    if (!n || !t.current) return;
    const c = t.current, r = fe(c);
    if (r.length > 0) {
      const s = requestAnimationFrame(() => r[0].focus());
      return () => cancelAnimationFrame(s);
    }
  }, [n, t]), W(() => {
    if (!n || !t.current) return;
    const c = t.current, r = (s) => {
      if (s.key !== "Tab") return;
      const i = fe(c);
      if (i.length === 0) {
        s.preventDefault();
        return;
      }
      const d = i[0], u = i[i.length - 1];
      s.shiftKey ? document.activeElement === d && (s.preventDefault(), u.focus()) : document.activeElement === u && (s.preventDefault(), d.focus());
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [n, t]);
}
const Re = "(prefers-color-scheme: dark)";
function we() {
  return typeof window > "u" || !window.matchMedia ? "light" : window.matchMedia(Re).matches ? "dark" : "light";
}
function Zs(t) {
  const [n, c] = H(() => t !== "auto" ? t : we());
  return W(() => {
    if (t !== "auto") {
      c(t);
      return;
    }
    if (c(we()), typeof window > "u" || !window.matchMedia)
      return;
    const r = window.matchMedia(Re), s = (i) => {
      c(i.matches ? "dark" : "light");
    };
    return r.addEventListener ? (r.addEventListener("change", s), () => r.removeEventListener("change", s)) : (r.addListener(s), () => r.removeListener(s));
  }, [t]), n;
}
function js({
  primaryColor: t
}) {
  const n = Os(t);
  return {
    "--ai-primary": t,
    "--ai-primary-fg": n,
    "--ai-user-bubble": t
  };
}
function Os(t) {
  const n = Fs(t);
  if (!n) return "#ffffff";
  const [c, r, s] = n.map((h) => {
    const v = h / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  }), i = 0.2126 * c + 0.7152 * r + 0.0722 * s, d = (1 + 0.05) / (i + 0.05), u = (i + 0.05) / (0.05 + 0.05);
  return d >= u ? "#ffffff" : "#111827";
}
function Fs(t) {
  const n = t.replace(/^#/, ""), c = n.length === 3 ? n.split("").map((s) => s + s).join("") : n;
  if (c.length !== 6) return null;
  const r = parseInt(c, 16);
  return [r >> 16 & 255, r >> 8 & 255, r & 255];
}
const Gs = "_root_gq4qc_25", Ks = "_panelArea_gq4qc_117", Y = {
  root: Gs,
  "bottom-right": "_bottom-right_gq4qc_104",
  "bottom-left": "_bottom-left_gq4qc_110",
  panelArea: Ks
}, se = 200, Qs = ({
  onMessage: t,
  agentName: n = "AI Assistant",
  agentAvatar: c,
  logo: r,
  theme: s = "auto",
  primaryColor: i = "#2563EB",
  placeholder: d = "Type a message…",
  welcomeMessage: u,
  welcomeSubMessage: h,
  recentMessage: v,
  recentMessageTime: g,
  statusText: m,
  statusUpdated: f,
  helpArticles: T,
  showHelpArticles: A = !1,
  defaultView: L = "home",
  isOpen: o,
  onOpenChange: B,
  position: R = "bottom-right",
  className: k,
  style: $
}) => {
  const [y, I] = H(!1);
  W(() => I(!0), []);
  const _ = o !== void 0, [p, V] = H(!1), w = _ ? o : p, j = C(
    (Z) => {
      _ || V(Z), B == null || B(Z);
    },
    [_, B]
  ), ee = C(() => j(!0), [j]);
  console.log(ee);
  const F = C(() => j(!1), [j]), $e = C(() => j(!w), [w, j]), [O, G] = H(L), [te, X] = H(L === "chat"), [oe, Me] = H(null), D = q(null), le = C(() => {
    D.current && clearTimeout(D.current), G("chat"), X(!0);
  }, []), ce = C(() => {
    X(!1), D.current = setTimeout(
      () => G("home"),
      se
    );
  }, []), He = C(() => {
    D.current && clearTimeout(D.current), O === "chat" ? (X(!1), D.current = setTimeout(
      () => G("help"),
      se
    )) : G("help");
  }, [O]), ie = C(
    (Z) => {
      D.current && clearTimeout(D.current), Me(Z), O === "chat" ? (X(!1), D.current = setTimeout(
        () => G("article"),
        se
      )) : G("article");
    },
    [O]
  ), We = C(() => {
    G("home");
  }, []);
  W(() => {
    w ? O === "chat" && X(!0) : (D.current && clearTimeout(D.current), X(!1));
  }, [w, O]), W(() => () => {
    D.current && clearTimeout(D.current);
  }, []);
  const De = w && O === "home" && !te, Ee = w && O === "help" && !te, ze = w && O === "article" && !te && oe != null, de = w && te, Ue = Zs(s), Pe = js({ primaryColor: i }), { messages: qe, sendMessage: Ve, isLoading: Ze, error: je, clearMessages: Oe, retryLast: Fe } = Ps({ onMessage: t, welcomeMessage: u }), ue = q(null), he = q(null);
  Vs(ue, de), W(() => {
    var Z;
    w || (Z = he.current) == null || Z.focus();
  }, [w]), W(() => {
    if (!w) return;
    const Z = (_e) => {
      _e.key === "Escape" && (_e.preventDefault(), F());
    };
    return document.addEventListener("keydown", Z), () => document.removeEventListener("keydown", Z);
  }, [w, F]);
  const ne = ye(), Ge = `${ne}-label`;
  return y ? /* @__PURE__ */ a(
    "div",
    {
      className: b(Y.root, Y[R], k),
      style: { ...Pe, ...$ },
      "data-theme": Ue,
      children: [
        De && /* @__PURE__ */ e(
          Se,
          {
            className: Y.panelArea,
            welcomeMessage: u,
            welcomeSubMessage: h,
            agentName: n,
            agentAvatar: c,
            logo: r,
            recentMessage: v,
            recentMessageTime: g,
            statusText: m,
            statusUpdated: f,
            helpArticles: T,
            showHelpArticles: A,
            onStartChat: le,
            onShowHelp: He,
            onArticleClick: ie,
            onClose: F
          }
        ),
        Ee && T && T.length > 0 && /* @__PURE__ */ e(
          Te,
          {
            className: Y.panelArea,
            helpArticles: T,
            onGoHome: ce,
            onStartChat: le,
            onArticleClick: ie,
            onClose: F
          }
        ),
        ze && /* @__PURE__ */ e(
          Ae,
          {
            className: Y.panelArea,
            article: oe,
            onBack: We,
            onClose: F
          }
        ),
        /* @__PURE__ */ e(
          Be,
          {
            ref: ue,
            isOpen: de,
            onClose: F,
            onBack: ce,
            messages: qe,
            isLoading: Ze,
            error: je,
            onSend: Ve,
            onRetry: Fe,
            onClear: Oe,
            agentName: n,
            agentAvatar: c,
            logo: r,
            placeholder: d,
            dialogId: ne,
            dialogLabelId: Ge
          }
        ),
        /* @__PURE__ */ e(
          Le,
          {
            ref: he,
            isOpen: w,
            onClick: $e,
            primaryColor: i,
            logo: r,
            "aria-expanded": w,
            "aria-controls": ne,
            "aria-label": w ? "Close chat" : "Open chat"
          }
        )
      ]
    }
  ) : null;
};
Qs.displayName = "ChatWidget";
const er = () => {
  const t = q(null);
  return W(() => {
  }, []), t;
}, tr = (t) => J(() => t instanceof ReadableStream, [t]), Xs = Ke(null), nr = ({ config: t, children: n }) => /* @__PURE__ */ e(Xs.Provider, { value: t, children: n });
export {
  nr as AIInterfaceProvider,
  ke as ChatHeader,
  Be as ChatPanel,
  Qs as ChatWidget,
  Ce as InputBar,
  Ie as MessageBubble,
  xe as MessageList,
  Le as TriggerButton,
  re as TypingIndicator,
  Te as WidgetHelp,
  Se as WidgetHome,
  Ps as useChat,
  Vs as useFocusTrap,
  er as useScrollAnchor,
  tr as useStreamDetection,
  Zs as useTheme
};
