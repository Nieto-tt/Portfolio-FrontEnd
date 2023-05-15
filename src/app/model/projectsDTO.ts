export class ProjectsDTO {
    projectId?: number;
    userId: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
    liveUrl: string;
    
    constructor(
        userId: number,
        title: string,
        description: string,
        startDate: string,
        endDate: string,
        imageUrl: string,
        liveUrl: string
    ) {
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.imageUrl = imageUrl;
        this.liveUrl = liveUrl;
    }
}