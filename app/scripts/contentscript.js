'use strict';

console.log('Sop extension start...');

var prependBlockToMain = function () {
    var sopStartElement = document.createElement('div');
    var refElement = document.querySelector('#web');
    sopStartElement.id = 'sop-block';
    document.querySelector('#main').insertBefore(sopStartElement, refElement);
};

prependBlockToMain();