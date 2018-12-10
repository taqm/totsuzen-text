import totsuzen from './src';
import totsuDec from './src/decorator';

console.log(totsuzen('hello world'));
console.log(totsuzen('hoge \n fuga!'));

class Sample {
  constructor(private message: string) {}

  @totsuDec
  shout() {
    return this.message;
  }
}

console.log(
  new Sample('5000兆円ほしい！').shout(),
);
