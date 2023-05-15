export class SkillsDTO {
    private id?: number;
    private userId: number;
    private skillName: string;
    private proficiencyLevel: string;
    private icon: string;
    
    constructor( 
        userId: number, 
        skillName: string, 
        proficiencyLevel: string, 
        icon: string) {
        this.userId = userId;
        this.skillName = skillName;
        this.proficiencyLevel = proficiencyLevel;
        this.icon = icon;
    }
}
    
    
    
    
    