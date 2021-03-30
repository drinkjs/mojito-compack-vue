import ElementUI from 'element-ui';
import Vue from "vue";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import EleButton from './index.vue';

export default {
  title: 'Element/Button',
  component: EleButton,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  // },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EleButton },
  methods: {
    alertHandler(label){
      alert("Hello Element")
    }
  },
  template: '<ele-button v-bind="$props" @onClick="alertHandler" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Element Button',
};

export const Size = Template.bind({});
Size.args = {
  label: 'Element Button',
  size: "medium"
};

export const Type = Template.bind({});
Type.args = {
  type: 'danger',
  label: 'Element Button',
};
