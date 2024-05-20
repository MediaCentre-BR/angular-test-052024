import { trigger, state, style, transition, animate } from '@angular/animations';

export const growInOut = trigger('growInOut', [
    state('void', style({
        height: '0',
        opacity: 0,
        transform: 'scaleY(0)',
    })),
    transition(':enter', [
        style({ height: '0', opacity: 0, transform: 'scaleY(0)' }),
        animate('200ms ease-out', style({
            height: '*',
            opacity: 1,
            transform: 'scaleY(1)',
        }))
    ]),
    transition(':leave', [
        animate('200ms ease-in', style({
            height: '0',
            opacity: 0,
            transform: 'scaleY(0)',
        }))
    ])
])