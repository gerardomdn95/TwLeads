export class Card {
    constructor(
        public id: number,
        public user_id: number,
        public title: string,
        public description: string,
        public image_url: string,
    ) { }
}