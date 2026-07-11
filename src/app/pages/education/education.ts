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
  title: "Licence CDA (Concepteur Développeur d'Applications)",
  comptences: `• Concevoir l'architecture d'une application
• Développer des applications sécurisées
• Concevoir des bases de données relationnelles
• Développer des interfaces utilisateur ergonomiques
• Développer des API
• Utiliser Git pour le travail collaboratif
• Réaliser des tests fonctionnels et techniques
• Déployer une application
• Assurer la maintenance et les évolutions d'un logiciel
• Appliquer les bonnes pratiques de développement`,
  school: "ESIC",
  year: "2025 - 2026"
},
    {
      title: 'BTS SIO SLAM',
      comptences: `• Concevoir une application
• Développer une application web
• Développer une application mobile (notions)
• Administrer une base de données
• Corriger et maintenir une application
• Rédiger une documentation technique
• Participer à la gestion d'un projet informatique
• Mettre en œuvre une démarche de test`,
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