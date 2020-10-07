import { animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';

export const routeAnimations = trigger('scaleIn', [
    transition('home => *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
            }),
        ], { optional: true }),
        group([
            query(':enter', [
                animate('300ms ease', keyframes([
                    style({ opacity: 1, transform: 'scale(0)', offset: 0 }),
                    style({ opacity: 1, transform: 'scale(0.5)', offset: 0.3 }),
                    style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
                ])),
            ], { optional: true }),
            query(':leave', [
                animate('300ms ease', keyframes([
                    style({ opacity: 1, transform: 'scale(1)', offset: 0 }),
                    style({ opacity: 0.5, transform: 'scale(1)', offset: 0.35 }),
                    style({ opacity: 0, transform: 'scale(1)', offset: 1 }),
                ])),
            ], { optional: true })
        ])

    ]),
    transition('* => home', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
            }),
        ], { optional: true }),
        group([
            query(':enter', [
                animate('300ms ease', keyframes([
                    style({ opacity: 1, transform: 'scale(4)', offset: 0 }),
                    style({ opacity: 1, transform: 'scale(2)', offset: 0.3 }),
                    style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
                ])),
            ], { optional: true }),
            query(':leave', [
                animate('300ms ease', keyframes([
                    style({ opacity: 1, transform: 'scale(1)', offset: 0 }),
                    style({ opacity: 1, transform: 'scale(0.5)', offset: 0.35 }),
                    style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
                ])),
            ], { optional: true })
        ])
    ]),
    transition('* => *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
            }),
        ], { optional: true }),
        group([
            query(':enter', [
                animate('300ms ease', keyframes([
                    style({ opacity: 1, transform: 'scale(5)', offset: 0 }),
                    style({ opacity: 1, transform: 'scale(2)', offset: 0.3 }),
                    style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
                ])),
            ], { optional: true }),
            query(':leave', [
                animate('300ms ease', keyframes([
                    style({ opacity: 1, transform: 'scale(1)', offset: 0 }),
                    style({ opacity: 0.5, transform: 'scale(4)', offset: 0.35 }),
                    style({ opacity: 0, transform: 'scale(5)', offset: 1 }),
                ])),
            ], { optional: true })
        ])

    ])
])

