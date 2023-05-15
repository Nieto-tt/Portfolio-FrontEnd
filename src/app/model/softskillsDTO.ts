export class softskillsDTO {
    softId?: number;
    userId: number;
    skillName: string;
    icon: string;
    
    constructor( 
        userId: number, 
        skillName: string,
        icon: string
    ) {
        this.userId = userId;
        this.skillName = skillName;
        this.icon = icon;
    }
}
    