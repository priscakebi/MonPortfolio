import { Component } from '@angular/core';

// 🔥 IMPORTER TES COMPOSANTS
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { Education } from './pages/education/education';

@Component({
  selector: 'app-root',
  standalone: true,

  // ✅ TRÈS IMPORTANT → tableau []
  imports: [
    Home,
    Projects,
    Contact,
    Education
  ],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}