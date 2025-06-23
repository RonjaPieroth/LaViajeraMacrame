import {SkillLevel} from './skill-level';
import {Participant} from './participant';

export interface Course {
  id: string;
  picture: string;
  name: string;
  skillLevel: SkillLevel;
  duration: string;
  nextGroupClass: Date|null;
  priceGroupClass: number;
  pricePrivatClass: number;
  participants: Participant[];
}
