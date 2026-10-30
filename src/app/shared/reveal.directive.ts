import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input, numberAttribute } from '@angular/core';

/**
 * Fait apparaître l'élément quand il entre dans l'écran.
 * Usage : `<div appReveal>` ou `<div [appReveal]="150">` pour un délai en ms.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.--reveal-delay]': 'delay() + "ms"',
  },
})
export class Reveal {
  readonly delay = input(0, {
    alias: 'appReveal',
    transform: (value: unknown) => numberAttribute(value, 0),
  });

  constructor() {
    const element: HTMLElement = inject(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
            observer.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
