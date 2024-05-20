import { trigger, state, style, transition, animate } from '@angular/animations';

export const growFromBehind = trigger('growFromBehind', [
    state('void', style({
        height: '0',
        opacity: 0,
        transform: 'scaleY(0.5) scaleX(0.5)',
    })),
    transition(':enter', [
        style({ height: '0', opacity: 0, transform: 'scaleY(0.5) scaleX(0.5)' }),
        animate('200ms ease-out', style({
            height: '*',
            opacity: 1,
            transform: 'scaleY(1) scaleX(1)',
        }))
    ]),
    transition(':leave', [
        animate('00ms ease-in', style({
            height: '0',
            opacity: 0,
            transform: 'scaleY(0) scaleX(0)',
        }))
    ])
])