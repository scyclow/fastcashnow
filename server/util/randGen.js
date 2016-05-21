import _ from 'lodash';
import crypto from 'crypto';

const keyWords = [
  'god',
  'sex',
  'power',
  'love',
  'wealth',
  'fast',
  'cash',
  'now',
  'money',
  'click',
  'fuck',
  'opportunity',
  'digital',
  'dream'
];

const randInsert = (original, content) => {
  const randIx = _.random(2, original.length - 1);

  return original.slice(0, randIx)
    + content
    + original.slice(randIx);
};

export function hashLen(min, max) {
  const seed = '' + Date.now() + Math.random();

  return crypto
    .createHash('sha1').update(seed).digest('base64')
    .replace('/', '!').replace('+', '$')
    .slice(0, _.random(min, max));
}

export function referalCode(len) {
  const hash = hashLen(8, 15);

  const output = [
    _.sample(keyWords),
    _.sample(keyWords).toUpperCase(),
    randInsert(hash, _.sample(keyWords).toUpperCase())
  ].join('');

  return len ? output.slice(0, len) : output;
}
