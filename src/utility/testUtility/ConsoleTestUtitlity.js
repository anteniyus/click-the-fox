/* eslint-disable no-console, no-control-regex */

export const makeSpyOnConsole = () => {
  jest.spyOn(console, "error");
  jest.spyOn(console, "warn");
  jest.spyOn(console, "log");
};

export const checkConsoleSpyOnResult = () => {
  expect(console.error).not.toBeCalled();
  expect(console.warn).not.toBeCalled();
  expect(console.log).not.toBeCalled();
};
