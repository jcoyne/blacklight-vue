import Search from './components/Search';
import ShowPage from './components/ShowPage';
import VueProgressBar from 'vue-progressbar'
import VueResource from 'vue-resource'

const progressOptions = {
  color: '#e62117',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  inverse: false
}

// This is your plugin object. It can be exported to be used anywhere.
const Blacklight = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue, options) {
    Vue.use(VueProgressBar, progressOptions)
    Vue.use(VueResource)

    Vue.prototype.$titleField = 'title_tesim'

    // We call Vue.mixin() here to inject functionality into all components.
  	Vue.mixin({
      install(Vue, options) {
        Vue.component(Search.name, Search)
        Vue.component(ShowPage.name, ShowPage)
      }
    });
  }
};

export default Blacklight;
