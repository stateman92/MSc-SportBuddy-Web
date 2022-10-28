import {LocalStorageWrapper} from "./local.storage.wrapper";

describe('LocalStorageWrapper', () => {
  let service: LocalStorageWrapper;
  beforeEach(() => {
    service = new LocalStorageWrapper();
    service.clear();
  });

  it('.getItem() should return a null value', () => {
    expect(service.getItem("key")).toBe(null);
  });

  it('.getItem() should return a null value, and after that a non-null value', () => {
    const key = "key";
    const value = "item";
    expect(service.getItem(key)).toBe(null);
    service.setItem(key, value);
    expect(service.getItem(key)).toBe(value);
  });

  it('.getItem() should return a null value, and after that a non-null value, and after that a null value', () => {
    const key = "key";
    const value = "item";
    expect(service.getItem(key)).toBe(null);
    service.setItem(key, value);
    expect(service.getItem(key)).toBe(value);
    service.removeItem(key);
    expect(service.getItem(key)).toBe(null);
  });

  it('.getItem() should return a null value, and after that a non-null value, and after that a null value', () => {
    const firstKey = "key1";
    const secondKey = "key2";
    expect(service.getItem(firstKey)).toBe(null);
    expect(service.getItem(secondKey)).toBe(null);
    const firstValue = "item1";
    const secondValue = "item2";
    service.setItem(firstKey, firstValue);
    service.setItem(secondKey, secondValue);
    expect(service.getItem(firstKey)).toBe(firstValue);
    expect(service.getItem(secondKey)).toBe(secondValue);
    service.clear();
    expect(service.getItem(firstKey)).toBe(null);
    expect(service.getItem(secondKey)).toBe(null);
  });
});
