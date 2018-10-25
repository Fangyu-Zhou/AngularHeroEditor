import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROS } from "./mock-heros";
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageSerive: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageSerive.add("HeroService, fetched heroes");
    return of(HEROS);
  }

  getHero(id: number): Observable<Hero> {
    this.messageSerive.add(`HeroService: fetched hero id=${id}`);
    return of(HEROS.find(hero=>hero.id === id));
  }
}
