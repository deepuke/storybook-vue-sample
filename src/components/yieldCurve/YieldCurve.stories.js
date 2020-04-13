import VueI18n from 'vue-i18n';
import YieldCurve from './YieldCurve';
import en from '../../locales/en.json';
import de from '../../locales/de.json';
import { withKnobs, array } from '@storybook/addon-knobs';
export default {
    title: 'Yield Curve',
    component: YieldCurve,
    decorators: [withKnobs]
};


export const myWorld = () => ({

    component: { YieldCurve },
    data() {
        return {
            chartData: [{ x: 1, y: 0.3 }, { x: 2, y: 1.3 }, { x: 3, y: 1 }]
        }
    },
    template: '<yield-curve :chartData="chartData" />',
    i18n: new VueI18n({
        locale: 'de',
        messages: {
            en: en,
            de: de
        }
    }),
    props: {
        chartData: {
            type: array,
            default: [{ x: 1, y: 0.3 }, { x: 2, y: 1.3 }, { x: 3, y: 1 }]
        }
    }
});