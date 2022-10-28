import {UserDB} from '../../../OpenAPI';
import {CacheService} from '../cache.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UsersCacheService extends CacheService<Array<UserDB>> {
}
