import MyButton from './index.vue';

export default {
  title: 'Test/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  methods: {
    alertHandler(label){
      alert("Hello "+label)
    }
  },
  template: '<my-button @onAlert="alertHandler" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Vue Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Vue Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Vue Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Vue Button',
};
