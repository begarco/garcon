/**
 * Created by begarco on 15/04/2017.
 */

import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  @Input() project: Project;
}
