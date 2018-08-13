
// Ripple Effect on Buttons

import {MDCRipple} from '@material/ripple';
const primaryButtonRipple = new MDCRipple(document.querySelector('.button-primary'));
const secondaryButtonRipple = new MDCRipple(document.querySelector('.button-secondary'));

// Top App Bar

import {MDCTopAppBar} from '@material/top-app-bar/index';
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);