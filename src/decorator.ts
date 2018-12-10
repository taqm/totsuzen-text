import convert from './';

export default function (target: any, prop: string, desc: PropertyDescriptor) {
  const original = desc.value;
  desc.value = function (...args: any[]) {
    const res = original.apply(this, args);
    if (typeof(res) !== 'string') return res;
    return convert(res);
  };
}
