'use strict';

console.log('Sop extension start...');

var prependBlockToMain = function () {
    var sopStartElement = document.createElement('div');
    var refElement = document.querySelector('#main') ? document.querySelector('#main') : document.querySelector('.reg.searchCenterMiddle');
    sopStartElement.id = 'sop-block';
    refElement.insertBefore(sopStartElement, refElement.firstChild);
};

prependBlockToMain();
