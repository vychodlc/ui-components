import { defineComponent as e, computed as r, openBlock as l, createElementBlock as u, normalizeClass as p, renderSlot as s } from "vue";
import "./style/index.css";
const d = e({ name: "great-button" }), m = /* @__PURE__ */ e({
  ...d,
  props: {
    type: {},
    plain: { type: Boolean },
    round: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(o) {
    const t = o, n = r(() => ({
      [`great-button--${t.type}`]: t.type,
      "great-button--plain": t.plain,
      "great-button--round": t.round,
      "great-button--disabled": t.disabled
    }));
    return (a, b) => (l(), u("button", {
      class: p(["great-button", n.value])
    }, [
      s(a.$slots, "default")
    ], 2));
  }
});
export {
  m as default
};
