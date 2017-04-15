/**
 * Created by begarco on 15/04/2017.
 */

import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { AUTHORS } from '../mocks/mock-authors';

@Injectable()
export class AuthorService {
  getAuthors(): Promise<Author[]> {
    return Promise.resolve(AUTHORS);
  }
}
