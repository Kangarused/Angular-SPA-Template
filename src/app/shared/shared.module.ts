/*
* This is a shared module file, all shared modules should be included in folders within this directory and injected into this module
* This module is then injected into the app module.
*/

import { module } from 'angular';

const Shared = module('app.shared', [])
    //.service('MessageService', MessageService)
    .name;

export default Shared;