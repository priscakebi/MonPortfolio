import { Component, DOCUMENT, DestroyRef, afterNextRender, inject, signal } from '@angular/core';

import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { Education } from './pages/education/education';
import { NAV_LINKS, PROFILE } from './data/portfolio.data';

type Theme = 'light' | 'dark';

@Component({
  selector: 'app-root',
  imports: [Home, Projects, Contact, Education],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class App {
  private readonly document = inject(DOCUMENT);

  protected readonly links = NAV_LINKS;
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();

  protected readonly scrolled = signal(false);
  protected readonly progress = signal(0);
  protected readonly menuOpen = signal(false);
  protected readonly activeSection = signal(NAV_LINKS[0].id);
  protected readonly theme = signal<Theme>('light');

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      this.theme.set(this.document.documentElement.dataset['theme'] === 'dark' ? 'dark' : 'light');
      this.onScroll();

      // Met en surbrillance le lien de la section au centre de l'écran
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.find((entry) => entry.isIntersecting);
          if (visible) this.activeSection.set(visible.target.id);
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const link of this.links) {
        const section = this.document.getElementById(link.id);
        if (section) observer.observe(section);
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected onScroll(): void {
    const root = this.document.documentElement;
    const max = root.scrollHeight - root.clientHeight;
    this.scrolled.set(root.scrollTop > 10);
    this.progress.set(max > 0 ? root.scrollTop / max : 0);
  }

  protected toggleTheme(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    this.document.documentElement.dataset['theme'] = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // stockage indisponible (navigation privée…) : le thème ne sera pas mémorisé
    }
  }
}
