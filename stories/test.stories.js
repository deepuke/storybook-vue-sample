import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import VueI18n from 'vue-i18n';
import HelloWorld from '../src/components/HelloWorld';

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
                subtext : "Willkommen bei Ihnen"               
            }
        }
    })
});