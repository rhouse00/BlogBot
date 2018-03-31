import '../sass/style.scss';

import sideBar from './modules/sidebar';
import curationPicker from './modules/curationPicker';

sideBar('.sidebarTab');
curationPicker('.button_add', '.selected_list');
