export class Lead {
    constructor(
        public user_id: number,
        public name: string,
        public email: string,
        public phone: string,
        public region_id: number,
        public city: string,
        public company?: string,
    ) { }
}
