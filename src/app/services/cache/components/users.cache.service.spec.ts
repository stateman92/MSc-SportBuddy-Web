import {UsersCacheService} from './users.cache.service';

describe('UsersCacheService', () => {
  let service: UsersCacheService;
  beforeEach(() => {
    service = new UsersCacheService();
  });

  it('.get() should return a null value', () => {
    // Given

    // When

    // Then

    expect(service.get()).toEqual(null);
  });

  it('.get() should return a null value and then the set user', () => {
    // Given

    const user = {
      id: null,
      name: 'name',
      email: 'email',
      password: 'password',
      profileImage: 'profileImage',
      token: null,
      chats: ['chat1', 'chat2']
    }
    expect(service.get()).toEqual(null);

    // When

    service.set([user]);

    // Then

    expect(service.get()).toEqual([user]);
  });

  it('.get() should return a null value and then the set user and then null', () => {
    // Given

    const user = {
      id: null,
      name: 'name',
      email: 'email',
      password: 'password',
      profileImage: 'profileImage',
      token: null,
      chats: ['chat1', 'chat2']
    }
    expect(service.get()).toEqual(null);

    // When

    service.set([user]);
    expect(service.get()).toEqual([user]);

    // Then

    service.remove();
    expect(service.get()).toEqual(null);
  });
});
