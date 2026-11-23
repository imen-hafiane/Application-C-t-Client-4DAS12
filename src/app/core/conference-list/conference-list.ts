import { Component } from '@angular/core';
import { Conference } from '../../models/conference';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signal } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-conference-list',
  imports: [CommonModule, FormsModule,Card],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  x=signal(2);
  searchItem = '';
  favoriteList=signal<Conference[]>([]);
  confList=signal<Conference[]>([
  {
   id: 1,
   titre: 'Angular Workshop',
   description: 'Découvrez les nouveautés d Angular et développez vos compétences.',
   date: new Date('2026-10-15'),
   lieu: 'Tunis',
   prix: 50,
   imageUrl: 'images/conf.jpeg',
   nbPlaces: 30,
   category:'Technologie',
   nbLikes: 0
  },

  {
   id: 2,
   titre: 'Music Festival 2026',
   description: 'Un festival musical avec plusieurs artistes et groupes.',
   date: new Date('2026-10-22'),
   lieu: 'Sousse',
   prix: 80,
   imageUrl: 'images/conf.jpeg',
   nbPlaces: 500,
   category: 'Musique',
nbLikes: 0
  },

  {
   id: 3,
   titre: 'AI & Innovation Conference',
   description: 'Une conférence consacrée à l’intelligence artificielle et à l’innovation.',
   date: new Date('2026-11-18'),
   lieu: 'Hammamet',
   prix: 100,
   imageUrl: 'images/conf.jpeg',
   nbPlaces: 0,
   category: 'Technologie',
   nbLikes: 1
  },

  {
   id: 4,
   titre: 'Startup Meetup',
   description: 'Une rencontre entre entrepreneurs, étudiants et professionnels.',
   date: new Date('2026-11-05'),
   lieu: 'Tunis',
   prix: 30,
   imageUrl: 'images/conf.jpeg',
   nbPlaces: 100,
   category: 'Business',
   nbLikes: 2
  },
 ]);

constructor() {
  console.log(this.x());
  this.x.set(3);
  console.log(this.x());
  this.x.update(x => x + 1);
}



 addToFavorites(conf: Conference) {
  if (this.favoriteList().includes(conf)) {
    return alert('This conference is already in your favorites list.');
  }else {
    return this.favoriteList().push(conf);
    }
  }
  liker(conf: Conference) {
    return conf.nbLikes++;
  }

  filter(){
    return this.confList().filter(conf =>
      conf.titre.toLowerCase().includes(this.searchItem.toLowerCase()));
  }


}
