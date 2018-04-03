import '../sass/style.scss';

import sideBar from './modules/sidebar';
import curationPicker from './modules/curationPicker';

sideBar('.sidebarTab');
curationPicker('.unselected_list', '.selected_list', 'button_remove', 'Remove');
curationPicker('.selected_list', '.unselected_list', 'button_add', 'Add');
