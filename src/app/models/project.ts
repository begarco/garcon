/**
 * Created by begarco on 15/04/2017.
 */

import { Author } from './author';

export class Project {
  id: number;
  title: string;
  desc: string;
  url: string;
  img: string;
  contributors: Array<Author>;
}
