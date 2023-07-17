import { MessageService } from './../message-service/message.service';
import { Injectable } from '@angular/core';
import { Hero } from 'src/app/types/hero';
import { HEROES } from 'src/app/mock/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
