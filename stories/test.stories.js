import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import HelloWorld from '../src/components/HelloWorld';

export default {
    title: 'Application',
    component: HelloWorld,
};


export const myWorld = () => ({

    component:{HelloWorld},
    data() {
        return {
            msg: 'Hi there, how are you?'
        } 
    },
    template : '<hello-world :msg="msg" />'

});