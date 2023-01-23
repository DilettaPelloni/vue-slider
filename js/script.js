const { createApp } = Vue;

createApp({
    data() {
        return {
            current: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    active: 'active'
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    active: ''
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    active: ''
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    active: ''
                }
            ]
        }
    },
    methods: {
        nextImg: function() {
            if(this.current == this.slides.length - 1) {
                this.current = 0;
            }
            else {
                this.current++;
            }
        },
        prevImg: function() {
            if(this.current == 0) {
                this.current = this.slides.length - 1;
            }
            else {
                this.current--;
            }
        },
        isActive: function(index) {
            if (index == this.current) {
                return 'active';
            }
            else {
                return '';
            }
        }
    }
}).mount('#app')