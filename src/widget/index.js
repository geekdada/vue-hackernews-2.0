import Empty from './Empty/index.vue';

const componentList = [
  Empty,
];

export default {
  install(Vue) {
    componentList.forEach(widget => {
      Vue.component(widget.name, widget);
    });
  }
};