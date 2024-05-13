// CONSEGNA
// In allegato trovate del codice di base del carosello, dovrete partire da quello! :warning:
// Partendo dal markup HTML/CSS in allegato, rifate lo slider ma usando Vue.

// MILESTONE 1:
// Rimuovete le immagini dall'HTML e inseritele tramite un ciclo v-for.
// Dovrete tenere traccia da qualche parte di qual'è la slide attiva (che sarà visibile).

// MILESTONE 2:
// Fate lo stesso con le thumbnail. In questo caso la thumb attiva sarà evidenziata.

// MILESTONE 3:
// Aggiungete gli event handler per i click sulle frecce di navigazione.


// BONUS
// Al click su una thumb, visualizzare in grande l'immagine corrispondente
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// Quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
// :magic_wand: CONSIGLI DEL GIORNO
// Riciclare ovunque possibile!
// Il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)




const { createApp } = Vue

createApp({
    data() {
        return {
            slides: [
                    {
                        image: './img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: './img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: './img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: './img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: './img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ],
                

            activeSlide: 0    
        }

        

    },
    
    methods: {
        isVisible(numero){
            if(numero == this.activeSlide){
                return 'active';
            } else {
                return ''
            }
        },
        
        loopSlideAvanti(){
            if(this.activeSlide==4){
                this.activeSlide = 0
            } else {
                this.activeSlide++
            }
        },

        loopSlideIndietro(){
            if(this.activeSlide==0){
                this.activeSlide = 4
            } else {
                this.activeSlide--
            }
        },
    },

    mounted(){
        console.log(this.slides)
    }

    

}).mount('#app')