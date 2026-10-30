import { Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';
import { Reveal } from '../../shared/reveal.directive';

const ALL = 'Tous';

@Component({
  selector: 'app-projects',
  imports: [Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly filters = [ALL, ...new Set(PROJECTS.flatMap((p) => p.tags))];
  protected readonly activeFilter = signal(ALL);

  protected readonly projects = computed(() => {
    const filter = this.activeFilter();
    return filter === ALL ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter));
  });

  /** Effet de halo qui suit la souris sur une carte. */
  protected trackPointer(event: PointerEvent): void {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }
}
