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
import BaranExpansionPanels from './components/BaranExpansionPanels.vue';
import BaranExpansionPanel from './components/BaranExpansionPanel.vue';
import BaranFileInput from './components/BaranFileInput.vue';
import BaranList from './components/BaranList.vue';
import BaranListItem from './components/BaranListItem.vue';
import BaranNumberInput from './components/BaranNumberInput.vue';
import BaranOTPInput from './components/BaranOTPInput.vue';
import BaranRadioGroup from './components/BaranRadioGroup.vue';
import BaranRadio from './components/BaranRadio.vue';
import BaranSelect from './components/BaranSelect.vue';
import BaranSidebar from './components/BaranSidebar.vue';
import BaranSpeedDial from './components/BaranSpeedDial.vue';
import BaranSwitch from './components/BaranSwitch.vue';
import BaranTable from './components/BaranTable.vue';
import BaranTextbox from './components/BaranTextbox.vue';
import BaranTabs from './components/BaranTabs.vue';
// P2
import BaranAlert from './components/BaranAlert.vue';
import BaranAvatar from './components/BaranAvatar.vue';
import BaranBadge from './components/BaranBadge.vue';
import BaranBanner from './components/BaranBanner.vue';
import BaranBreadcrumbs from './components/BaranBreadcrumbs.vue';
import BaranHover from './components/BaranHover.vue';
import BaranInfiniteScroll from './components/BaranInfiniteScroll.vue';
import BaranPagination from './components/BaranPagination.vue';
import BaranProgressCircular from './components/BaranProgressCircular.vue';
import BaranProgressLinear from './components/BaranProgressLinear.vue';
import BaranRating from './components/BaranRating.vue';
import BaranServersideTable from './components/BaranServersideTable.vue';
import BaranSkeletonLoader from './components/BaranSkeletonLoader.vue';
import BaranSlider from './components/BaranSlider.vue';
import BaranSnackbar from './components/BaranSnackbar.vue';
import BaranSparkline from './components/BaranSparkline.vue';
import BaranTextarea from './components/BaranTextarea.vue';
import BaranTimeline from './components/BaranTimeline.vue';
import BaranTimelineItem from './components/BaranTimelineItem.vue';
import BaranTooltip from './components/BaranTooltip.vue';

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
    BaranExpansionPanels,
    BaranExpansionPanel,
    BaranFileInput,
    BaranList,
    BaranListItem,
    BaranNumberInput,
    BaranOTPInput,
    BaranRadioGroup,
    BaranRadio,
    BaranSelect,
    BaranSidebar,
    BaranSwitch,
    BaranTabs,
    BaranAlert,
    BaranAvatar,
    BaranBadge,
    BaranBanner,
    BaranBreadcrumbs,
    BaranHover,
    BaranInfiniteScroll,
    BaranPagination,
    BaranProgressCircular,
    BaranProgressLinear,
    BaranRating,
    BaranServersideTable,
    BaranSkeletonLoader,
    BaranSlider,
    BaranSnackbar,
    BaranSparkline,
    BaranTextarea,
    BaranTimeline,
    BaranTimelineItem,
    BaranTooltip,
};

export default {
    install: (app, options) => {
        Object.entries(components).forEach(([name, component]) => {
            app.component(name, component);
        });
    }
};