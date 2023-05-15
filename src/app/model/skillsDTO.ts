export class SkillsDTO {
    skillId?: number;
    userId: number;
    skillName: string;
    proficiencyLevel: string;
    icon: string;
    
    constructor( 
        userId: number, 
        skillName: string, 
        proficiencyLevel: string, 
        icon: string
    ) {
        this.userId = userId;
        this.skillName = skillName;
        this.proficiencyLevel = proficiencyLevel;
        this.icon = icon;
    }
}
    
    
    
    
    