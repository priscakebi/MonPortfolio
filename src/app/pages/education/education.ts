import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {

  formations = [
    {
      title: "Licence CDA (Concepteur Développeur d'Application)",
      school: 'ESIC',
      year: '2025 - 2026'
    },
    {
      title: 'BTS SIO SLAM',
      school: 'ESIC',
      year: '2023 - 2025'
    },
     {
      title: 'BTS Finance Comptabilité et Gestion et des Entreprises',
      school: 'CERCO',
      year: '2015 - 2017'
    }
  ];
}