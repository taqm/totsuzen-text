# What is this?
My Purpose is generate '突然の死 like text'.

See [here](https://dic.pixiv.net/a/%E7%AA%81%E7%84%B6%E3%81%AE%E6%AD%BB)
for details.

## Example
```ts
import totsuzen from 'totsuzen-text';

console.log(totsuzen('hello world'));
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
// ＿人人人人人人人人人＿
// ＞ 5000兆円ほしい！ ＜
// ￣ＹＹＹＹＹＹＹＹＹ￣
```

# LICENSE
MIT
