[![npm version](https://badge.fury.io/js/totsuzen-text.svg)](https://badge.fury.io/js/totsuzen-text) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# What is this?
My Purpose is generate text like '突然の死'.

See [here](https://dic.pixiv.net/a/%E7%AA%81%E7%84%B6%E3%81%AE%E6%AD%BB)
for details.

## Example
```ts
import totsuzen from 'totsuzen-text';

console.log(totsuzen('hello world'));
/*
＿人人人人人人＿
＞ hello world ＜
￣ＹＹＹＹＹＹ￣
*/
```

### Decorators
I prepared a decorator!

```typescript
import totsuzen from 'totsuzen-text/lib/decorator';

class Sample {
  @totsuzen
  shout() {
    return '5000兆円ほしい！';
  }
}

const text = new Sample().shout();
console.log(text);
/*
＿人人人人人人人人人＿
＞ 5000兆円ほしい！ ＜
￣ＹＹＹＹＹＹＹＹＹ￣
*/
```

## Command Line

```
ttzn 'command line!'
↓
＿人人人人人人人＿
＞ command line! ＜
￣ＹＹＹＹＹＹＹ￣
```

# LICENSE
MIT
