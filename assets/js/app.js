
// Ripple Effect on Buttons

import {MDCRipple} from '@material/ripple';
const primaryButtonRipple = new MDCRipple(document.querySelector('.button-primary'));
const secondaryButtonRipple = new MDCRipple(document.querySelector('.button-secondary'));

// Top App Bar

import {MDCTopAppBar} from '@material/top-app-bar/index';
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// Drawer

let drawer = new mdc.drawer.MDCPersistentDrawer(document.querySelector('.mdc-drawer--persistent'));
document.querySelector('#menu').addEventListener('click', () => drawer.open = true);