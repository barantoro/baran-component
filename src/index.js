import BButton from './components/BButton.vue';
import BCheckBox from './components/BCheckBox.vue';
import BComboBox from './components/BComboBox.vue';
import BTable from './components/BTable.vue';
import BTextBox from './components/BTextBox.vue';

// export { BButton, BCheckBox, BComboBox, BTable, BTextBox };

export default {
    install: (app, options) =>{
        app.component("BButton", BButton);
        app.component("BCheckBox", BCheckBox);
        app.component("BComboBox", BComboBox);
        app.component("BTable", BTable);
        app.component("BTextBox", BTextBox);
    }
}

 
