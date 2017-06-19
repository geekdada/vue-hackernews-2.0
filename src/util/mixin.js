export default {
  install(Vue) {
    Vue.mixin({
      props: {
        foo: String,
      },
    });
  },
};
