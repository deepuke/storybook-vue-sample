import VueI18n from 'vue-i18n';
import HelloWorld from './HelloWorld';

export default {
    title: 'Application',
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
            en: {
                subtext: "Welcome to Your"
            },
            de: {
                subtext: "Willkommen bei Ihnen"
            }
        }
    })
});