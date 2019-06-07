import convert from '.';

export default function (target: any, prop: string, desc: PropertyDescriptor) {
  const original = desc.value;
  // eslint-disable-next-line no-param-reassign
  desc.value = function wrap(...args: any[]) {
    const res = original.apply(this, args);
    if (typeof (res) !== 'string') return res;
    return convert(res);
  };
}
