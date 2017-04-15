/**
 * Created by begarco on 15/04/2017.
 */

import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { PROJECTS } from '../mocks/mock-projects';

@Injectable()
export class ProjectService {
  getProjects(): Promise<Project[]> {
    return Promise.resolve(PROJECTS);
  }
}
