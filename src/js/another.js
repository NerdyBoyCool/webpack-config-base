import $ from 'jquery';
import velocity from 'velocity-animate';

console.log('another');

$('body').append('<p>Another</p>');
velocity($('h1'), 'fadeIn', { duration: 2000, loop: true });
