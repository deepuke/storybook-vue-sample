import VueI18n from 'vue-i18n';
import HelloWorld from './HelloWorld';
import en from '../locales/en.json';
import de from '../locales/de.json';

export default {
    title: 'Hello World',
    component: HelloWorld,
};


export const myWorld = () => ({

    component: { HelloWorld },
    data() {
        return {
            msg: 'Vue.js App'
        }
    },
    template: '<hello-world :msg="msg" />',
    i18n: new VueI18n({
        locale: 'de',
        messages: {
            en: en,
            de: de
        }
    })
});