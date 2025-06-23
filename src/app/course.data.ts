import {Course} from './course';
import {SkillLevel} from './skill-level';

export  const courseData: Course[] = [
  {
    id: "1",
    picture: "Media/Images/Armband22.jpg",
    name: "Simple Macrame Bracelet",
    duration: "1h",
    skillLevel: SkillLevel.BEGINNER,
    nextGroupClass: new Date(2024, 10, 28),
    priceGroupClass: 13,
    pricePrivatClass: 30,
    participants: []
  },
  {
    id: "2",
    picture: "Media/Images/Armband3.jpg",
    name: "Intertwined Macrame Bracelet",
    duration: "1.5h",
    skillLevel: SkillLevel.BEGINNER,
    nextGroupClass: null,
    priceGroupClass: 19,
    pricePrivatClass: 40,
    participants: []
  },
  {
    id: "3",
    picture: "Media/Images/Armband 15(1).jpg",
    name: "Macrame Bracelet",
    duration: "1.5h",
    skillLevel: SkillLevel.BEGINNER,
    nextGroupClass: null,
    priceGroupClass: 19,
    pricePrivatClass: 40,
    participants: []
  },
  {
    id: "4",
    picture: "Media/Images/Armbad 8 orange-rot-grün.jpg",
    name: "Wide Macrame Bracelet",
    duration: "2h",
    skillLevel: SkillLevel.INTERMEDIATE,
    nextGroupClass: null,
    priceGroupClass: 24,
    pricePrivatClass: 50,
    participants: []
  },
  {
    id: "5",
    picture: "Media/Images/Ohrring 2 Muschel orange nicht verfügbar.jpg",
    name: "Macrame Earrings",
    duration: "2h",
    skillLevel: SkillLevel.INTERMEDIATE,
    nextGroupClass: null,
    priceGroupClass: 24,
    pricePrivatClass: 50,
    participants: []
  }
]
