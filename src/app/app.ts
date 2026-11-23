import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './core/footer/footer';
import { Home } from './core/home/home';
import { Header } from './core/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Prosit');
}
