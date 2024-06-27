import BaranButton from './components/BaranButton.vue';
import BaranCheckbox from './components/BaranCheckbox.vue';
import BaranCombobox from './components/BaranCombobox.vue';
import BaranTable from './components/BaranTable.vue';
import BaranTextbox from './components/BaranTextbox.vue';
import BaranSidebar from './components/BaranSidebar.vue';
import BaranSpeedDial from './components/BaranSpeedDial.vue';
import BaranAvatarMenu from './components/BaranAvatarMenu.vue';
import BaranChartWidget from './components/BaranChartWidget.vue';
import BaranCarousel from './components/BaranCarousel.vue';
import BaranActivityTimeline from './components/BaranActivityTimeline.vue';

const components = {
    BaranButton,
    BaranCheckbox,
    BaranCombobox,
    BaranTable,
    BaranTextbox,
    BaranSidebar,
    BaranSpeedDial,
    BaranAvatarMenu,
    BaranChartWidget,
    BaranCarousel,
    BaranActivityTimeline
};

export default {
    install: (app, options) => {
        Object.entries(components).forEach(([name, component]) => {
            app.component(name, component);
        });
    }
};