'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PerfectScrollbar = _interopDefault(require('perfect-scrollbar'));

var PerfectScrollbar$1 = {
  name: 'PerfectScrollbar',
  props: {
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
    tag: {
      type: String,
      required: false,
      default: 'div'
    }
  },
  data () {
    return {
      ps: null
    }
  },
  mounted () {
    if (!(this.ps && this.$isServer)) {
      this.ps = new PerfectScrollbar(this.$refs.container, this.options);
    }
  },
  updated () {
    this.update();
  },
  methods: {
    update () {
      if (this.ps) {
        this.ps.update();
      }
    }
  },
  render (h) {
    return h(this.tag,
      {
        ref: 'container',
        on: this.$listeners
      },
      this.$slots.default)
  }
};

function install (Vue, settings) {
  if (settings) {
    if (settings.name && typeof settings.name === 'string') {
      PerfectScrollbar$1.name = settings.name;
    }

    if (settings.options && typeof settings.options === 'object') {
      PerfectScrollbar$1.props.options.default = () => {
        return settings.options
      };
    }

    if (settings.tag && typeof settings.tag === 'string') {
      PerfectScrollbar$1.props.tag.default = settings.tag;
    }
  }

  Vue.component(
    PerfectScrollbar$1.name,
    PerfectScrollbar$1
  );
}

exports.install = install;
exports.PerfectScrollbar = PerfectScrollbar$1;
exports.default = install;
