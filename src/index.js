import registerServiceWorker from './registerServiceWorker';
import state from './redux/state';
import {renderEntireTree} from './render';

renderEntireTree(state);

registerServiceWorker();
