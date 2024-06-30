import BaranActivityTimeline from './components/BaranActivityTimeline.vue';
import BaranAvatarMenu from './components/BaranAvatarMenu.vue';
import BaranButton from './components/BaranButton.vue';
import BaranCard from './components/BaranCard.vue';
import BaranCarousel from './components/BaranCarousel.vue';
import BaranChartWidget from './components/BaranChartWidget.vue';
import BaranCheckbox from './components/BaranCheckbox.vue';
import BaranChips from './components/BaranChips.vue';
import BaranColorPicker from './components/BaranColorPicker.vue';
import BaranCombobox from './components/BaranCombobox.vue';
import BaranDatePicker from './components/BaranDatePicker.vue';
import BaranDialog from './components/BaranDialog.vue';
import BaranExpansionPanel from './components/BaranExpansionPanel.vue';
import BaranFileInput from './components/BaranFileInput.vue';
import BaranList from './components/BaranList.vue';
import BaranNumberInput from './components/BaranNumberInput.vue';
import BaranOTPInput from './components/BaranOTPInput.vue';
import BaranRadio from './components/BaranRadio.vue';
import BaranSelect from './components/BaranSelect.vue';
import BaranSidebar from './components/BaranSidebar.vue';
import BaranSpeedDial from './components/BaranSpeedDial.vue';
import BaranSwitch from './components/BaranSwitch.vue';
import BaranTable from './components/BaranTable.vue';
import BaranTextbox from './components/BaranTextbox.vue';
import BaranTabs from './components/BaranTabs.vue';

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
    BaranActivityTimeline,
    BaranCard,
    BaranChips,
    BaranColorPicker,
    BaranDatePicker,
    BaranDialog,
    BaranExpansionPanel,
    BaranFileInput,
    BaranList,
    BaranNumberInput,
    BaranOTPInput,
    BaranRadio,
    BaranSelect,
    BaranSidebar,
    BaranSwitch,
    BaranTabs
};

export default {
    install: (app, options) => {
        Object.entries(components).forEach(([name, component]) => {
            app.component(name, component);
        });
    }
};