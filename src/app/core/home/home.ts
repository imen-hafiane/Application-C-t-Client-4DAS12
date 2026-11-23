import { Component } from '@angular/core';
import { ConferenceList } from '../conference-list/conference-list';

@Component({
  selector: 'app-home',
  imports: [ConferenceList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  siteName = 'My App';
  conferenceName = 'Default Conference';
}
