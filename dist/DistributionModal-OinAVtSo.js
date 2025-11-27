import { M as b, C as f, t as x, c as w, _ as k, r as _, o as e, a as y, w as M, b as a, d as s, e as c, F as d, n as v, f as u, g as B, h as D, i as p } from "./main-Do_UGwQZ.js";
const R = {
  name: "DistributionModal",
  components: { ModalWrapper: b, CrossArrowIcon: f },
  mixins: [x, w],
  data() {
    return {
      routeCount: 4
    };
  },
  computed: {
    getCaption() {
      return window.innerWidth > 640 ? this.$t("dexRouteInfo.caption[0]") : this.$t("dexRouteInfo.caption[1]");
    },
    getBtnText() {
      return this.routeCount === 4 ? "Show all" : "Hide all";
    }
  },
  mounted() {
  },
  methods: {
    showMore() {
      this.routeCount === 4 ? this.routeCount = 20 : this.routeCount = 4;
    },
    isSameToken(o, n) {
      return o === n;
    },
    isCrossDex(o) {
      return o.dex.length > 1;
    }
  }
}, S = { class: "distribution__scroll-block custom-scroll" }, T = { class: "distribution__tokens-list" }, N = { class: "distribution__group" }, V = { class: "distribution__dex-info" }, A = {
  key: 0,
  class: "distribution__dex-icons"
}, F = ["src", "alt"], H = ["src", "alt"], I = { class: "distribution__percentage" }, L = { class: "distribution__route-path" }, U = { key: 0 }, W = { key: 1 };
function z(o, n, E, P, m, r) {
  const h = _("CrossArrowIcon"), g = _("modal-wrapper");
  return e(), y(g, {
    title: r.getCaption,
    freeHeight: !0,
    onCloseModal: n[1] || (n[1] = (t) => o.$emit("closeDistribution"))
  }, {
    default: M(() => [
      a("div", S, [
        a("div", T, [
          (e(!0), s(d, null, c(o.getRoutes.slice(0, m.routeCount), (t, C) => (e(), s("div", {
            key: C,
            class: "distribution__flex"
          }, [
            a("div", N, [
              a("div", V, [
                t.dex.length > 1 ? (e(), s("div", A, [
                  (e(!0), s(d, null, c(t.dex, (l, i) => (e(), s("img", {
                    key: l.name,
                    src: l.imageUrl,
                    alt: l.name,
                    class: "distribution__route-image stacked",
                    style: v({ marginLeft: i === 0 ? "0px" : "-14px" })
                  }, null, 12, F))), 128))
                ])) : (e(), s("img", {
                  key: 1,
                  src: t.dex[0].imageUrl,
                  alt: t.dex[0].name,
                  class: "distribution__route-image"
                }, null, 8, H)),
                a("p", I, u(t.inputPercentage) + "%", 1)
              ])
            ]),
            a("p", L, [
              (e(!0), s(d, null, c(t.path.split(" > "), (l, i) => (e(), s("span", { key: i }, [
                B(u(l) + " ", 1),
                r.isCrossDex(t) && i < t.path.split(" > ").length - 1 && r.isSameToken(t.path.split(" > ")[i], t.path.split(" > ")[i + 1]) ? (e(), s("span", U, [
                  D(h, { class: "custom-arrow" })
                ])) : i < t.path.split(" > ").length - 1 ? (e(), s("span", W, " > ")) : p("", !0)
              ]))), 128))
            ])
          ]))), 128)),
          o.getRoutes.length > 4 ? (e(), s("button", {
            key: 0,
            class: "distribution__toggle-btn",
            onClick: n[0] || (n[0] = (...t) => r.showMore && r.showMore(...t))
          }, u(r.getBtnText), 1)) : p("", !0)
        ])
      ])
    ]),
    _: 1
  }, 8, ["title"]);
}
const j = /* @__PURE__ */ k(R, [["render", z], ["__scopeId", "data-v-9706ad80"]]);
export {
  j as default
};
