export class User {
    constructor(
        public Id: number,
        public Email: string,
        public FirstName?: string,
        public LastName?: string,
        public Age?: number
    ) {}
}
