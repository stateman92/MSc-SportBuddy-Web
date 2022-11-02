import {StorageService} from './storage.service';
import {StorageKeys} from './components/storage.keys';
import {LocalStorageWrapper} from './components/local.storage.wrapper';
import {UuidService} from '../uuid/uuid.service';
import {RegexService} from '../regex/regex.service';

describe('StorageService', () => {
  let service: StorageService;
  beforeEach(() => {
    service = new StorageService(new LocalStorageWrapper());
    service.clear();
  });

  it('.get() should return a null value', () => {
    expect(service.get(StorageKeys.token)).toBe(null);
  });

  it('.get() should return a null value, and after that a non-null value', () => {
    const key = StorageKeys.token;
    expect(service.get(key)).toBe(null);
    let uuid = (new UuidService(new RegexService())).get();
    service.set(key, uuid);
    expect(service.get(key)).toBe(uuid);
  });

  it('.get() should return a null value, and after that a non-null value, and after that a null value', () => {
    const key = StorageKeys.token;
    expect(service.get(key)).toBe(null);
    let uuid = (new UuidService(new RegexService())).get();
    service.set(key, uuid);
    expect(service.get(key)).toBe(uuid);
    service.remove(key);
    expect(service.get(key)).toBe(null);
  });

  it('.get() should return a null value, and after that a non-null value, and after that a null value', () => {
    const firstKey = StorageKeys.token;
    const secondKey = StorageKeys.user;
    expect(service.get(firstKey)).toBe(null);
    expect(service.get(secondKey)).toBe(null);
    const firstValue = 'item1';
    const secondValue = 'item2';
    service.set(firstKey, firstValue);
    service.set(secondKey, secondValue);
    expect(service.get(firstKey)).toBe(firstValue);
    expect(service.get(secondKey)).toBe(secondValue);
    service.clear();
    expect(service.get(firstKey)).toBe(null);
    expect(service.get(secondKey)).toBe(null);
  });
});
