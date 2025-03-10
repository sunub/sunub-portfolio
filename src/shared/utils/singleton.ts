/* eslint-disable */
declare global {
  var __singleton: Map<string, any> | undefined;
  interface Global {
    __singleton: Map<string, any> | undefined;
  }
}

const singleton = <T>(name: string, value: () => T): T => {
  const thusly = globalThis as typeof globalThis & Global;
  thusly.__singleton ??= new Map();
  if (!thusly.__singleton.has(name)) {
    thusly.__singleton.set(name, value());
  }
  return thusly.__singleton.get(name) as T;
};

export { singleton };
