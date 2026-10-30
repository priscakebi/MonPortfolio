import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { PROFILE, PROJECTS, SKILL_CATEGORIES } from '../../data/portfolio.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly profile = PROFILE;
  protected readonly stats = [
    { value: PROJECTS.length, label: 'projets' },
    { value: SKILL_CATEGORIES.reduce((sum, c) => sum + c.skills.length, 0), label: 'technologies' },
    { value: 'Bac+5', label: 'en cours' },
  ];

  /** Texte affiché par l'effet machine à écrire (rôle complet côté serveur). */
  protected readonly typed = signal(PROFILE.roles[0]);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      const roles = this.profile.roles;
      let roleIndex = 0;
      let length = roles[0].length;
      let deleting = true;
      let timer: ReturnType<typeof setTimeout>;

      const tick = () => {
        const role = roles[roleIndex];
        length += deleting ? -1 : 1;
        this.typed.set(role.slice(0, length));

        let delay = deleting ? 40 : 80;
        if (!deleting && length === role.length) {
          deleting = true;
          delay = 2200;
        } else if (deleting && length === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          delay = 300;
        }
        timer = setTimeout(tick, delay);
      };

      timer = setTimeout(tick, 2200);
      destroyRef.onDestroy(() => clearTimeout(timer));
    });
  }
}
