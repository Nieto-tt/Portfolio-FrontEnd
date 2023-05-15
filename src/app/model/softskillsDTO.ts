export class softskillsDTO {
    private id?: number;
    private userId: number;
    private skillName: string;
    private icon: string;
    
    constructor( 
        userId: number, 
        skillName: string,
        icon: string) {
        this.userId = userId;
        this.skillName = skillName;
        this.icon = icon;
    }
}
    