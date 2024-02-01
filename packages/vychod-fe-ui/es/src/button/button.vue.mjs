import { defineComponent as e, computed as s, openBlock as u, createElementBlock as a, normalizeClass as l, renderSlot as p } from "vue";
import "./style/index.less.mjs";
const c = e({ great: "ea-button" }), d = /* @__PURE__ */ e({
  ...c,
  __name: "button",
  props: {
    type: {}
  },
  setup(o) {
    const t = o;
    console.log("buttonProps", t);
    const n = s(() => ({ [`great-button--${t.type}`]: t.type }));
    return (r, m) => (u(), a("button", {
      class: l(["great-button", n.value])
    }, [
      p(r.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
