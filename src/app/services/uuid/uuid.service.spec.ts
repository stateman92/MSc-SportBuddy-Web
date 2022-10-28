import {UuidService} from "./uuid.service";

describe('UuidService', () => {
  let service: UuidService;
  beforeEach(() => {
    service = new UuidService();
  });

  it('.get should return a valid uuid value', () => {
    const regex = new RegExp('^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$');
    expect(service.get()).toMatch(regex);
  });
});
