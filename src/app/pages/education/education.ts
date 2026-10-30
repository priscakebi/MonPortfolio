import { Component, computed, signal } from '@angular/core';
import { FORMATIONS, SKILL_CATEGORIES } from '../../data/portfolio.data';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-education',
  imports: [Reveal],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly formations = FORMATIONS;
  protected readonly categories = SKILL_CATEGORIES;

  protected readonly activeCategory = signal(SKILL_CATEGORIES[0].name);
  protected readonly skills = computed(
    () => this.categories.find((c) => c.name === this.activeCategory())?.skills ?? [],
  );
}
