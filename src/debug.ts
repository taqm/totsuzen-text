/* eslint-disable no-console */
import totsuzen from '.';
import totsuDec from './decorator';

console.log(totsuzen('hello world'));
console.log(totsuzen('hoge \n fuga!'));

class Sample {
  constructor(private message: string) { // eslint-disable-line
  }

  @totsuDec
  shout() {
    return this.message;
  }
}

console.log(
  new Sample('5000兆円ほしい！').shout(),
);
