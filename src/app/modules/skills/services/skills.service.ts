import { Injectable } from "@angular/core";

import { Skill } from "../../../shared/models/skill";
import { Level } from "../../../shared/types/level.enum";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SkillsService {
  skills: Skill[] = [
    {
      id: 0,
      name: "Web Development Fundatmentals/ HTML, CSS, JS",
      level: Level.FiveStars,
    },
    {
      id: 1,
      name: "Python",
      level: Level.ThreeStars,
    },
    {
      id: 2,
      name: "Java",
      level: Level.ThreeStars,
    },
    {
      id: 3,
      name: "Angular",
      level: Level.FourStars,
    },
  ];

  getSkills = (): Observable<Skill[]> => {
    return of(this.skills);
  };
}
