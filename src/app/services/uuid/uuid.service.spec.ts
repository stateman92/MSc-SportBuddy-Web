import {UuidService} from './uuid.service';
import {RegexService} from '../regex/regex.service';

describe('UuidService', () => {
  let service: UuidService;
  beforeEach(() => {
    service = new UuidService(new RegexService());
  });

  it('.get should return a valid uuid value', () => {
    // Given

    const regex = new RegExp('^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$');

    // When

    // Then

    expect(service.get()).toMatch(regex);
  });
});
