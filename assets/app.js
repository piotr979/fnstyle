/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

import './js/chapter-navigator';
import './js/shopping-cart-manager';
import './js/custom';
import './js/search-form';

/* import './js/jquery.min.js';
import './js/jquery.uploadifive.min.js';
*/
require('bootstrap');
require('animate.css');

// start the Stimulus application
import './bootstrap';
