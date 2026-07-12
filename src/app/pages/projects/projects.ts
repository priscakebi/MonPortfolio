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
      // image: '',
      github: 'https://github.com/priscakebi/MonPortfolio.git',

    },
    {
      title: 'Mastering',
      description: 'Application pour la gestion de soutenances des étudiants',
      tech: 'Angular/ Spring Boot / MySQL',
      // image: '',
      github: 'https://github.com/fenMel/MasteringWeb.git',

    },
    {
    title: 'BookPro',
    description: 'Application de prise de rendez-vous',
    tech: 'PHP/ HTML / CSS/ Bootsrap/ JavaSript/ MySQL',
    // image: '',
    github: 'https://github.com/priscakebi/BooKPro_web.git',
   
  },
{
  title: 'MyCampusGYDE',
    description: "Application web 'd'accompagement' administratif des étudiants étranges",
      tech: 'Angular/ Spring Boot / MySQL',
        // image: '',
        github: '#',
    
  },

];
  
}