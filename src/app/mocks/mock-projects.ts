/**
 * Created by begarco on 15/04/2017.
 */

import { Project } from '../models/project';
import { AUTHORS } from './mock-authors';

export const PROJECTS: Project[] = [
  { id: 1, title: 'Artemis', desc: 'Artemis is an automated system managing my servers', url: 'https://github.com/begarco/artemis', img: 'https://github.com/begarco/resources/raw/master/logo_artemis_05.png', contributors: [AUTHORS[0]] },
  { id: 2, title: 'WatchDogZZ', desc: 'Artemis is an automated system managing my servers', url: 'https://github.com/WatchDogZZ', img: 'https://avatars1.githubusercontent.com/u/22893853', contributors: [AUTHORS[0],AUTHORS[1]] },
  { id: 3, title: 'WordCloudZZ', desc: 'Artemis is an automated system managing my servers', url: 'https://github.com/WordCloudZZ', img: 'https://github.com/begarco/resources/raw/master/logo_artemis_05.png', contributors: [AUTHORS[0],AUTHORS[1]] },
  { id: 4, title: 'AvatarZZ', desc: 'Artemis is an automated system managing my servers', url: 'https://github.com/AvatarZZ', img: 'https://avatars3.githubusercontent.com/u/27080351', contributors: [AUTHORS[0],AUTHORS[1]] },
  { id: 5, title: 'SpectralClustering', desc: 'Artemis is an automated system managing my servers', url: 'https://github.com/ISIMA-begarco/SpectralClustering', img: 'https://github.com/begarco/resources/raw/master/logo_artemis_05.png', contributors: [AUTHORS[0]] },
  { id: 6, title: 'TaskOverflow', desc: 'Artemis is an automated system managing my servers', url: 'https://github.com/TaskOverflow', img: 'https://github.com/begarco/resources/raw/master/logo_artemis_05.png', contributors: [AUTHORS[0]] }
];
