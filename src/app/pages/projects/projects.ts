import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  projects = [
  {
    title: 'Portfolio',
    description: 'Site personnel avec Angular et Spring Boot',
    tech: 'Angular / Spring Boot',
    // image: 'assets/projects/portfolio.png',
    github: '#',
    
  },
  {
    title: 'Mastering',
    description: 'Application pour la gestion de soutenances des étudiants',
    tech: 'Angular/ Spring Boot / MySQL',
    image: 'assets/projects/mast.png',
    github: '#',
   
  },
  {
    title: 'Freeflow',
    description: 'Application pour les freelances et entrepreneurs',
    tech: 'Angular/ Spring Boot / MySQL',
    // image: 'assets/projects/todo.png',
    github: '#',
    
  },

  {
    title: 'BookPro',
    description: 'Application de prise de rendez-vous',
    tech: 'PHP/HTML/CSS/Bootsrap',
    // image: 'assets/projects/todo.png',
    github: '#',
    
  }
];
  
}