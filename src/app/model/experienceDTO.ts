export class ExperienceDTO {
    id?: number;
    userId: number;
    companyName: string;
    jobTitle: string;
    startDate: string;
    endDate: string;
    jobDescription: string;
    imageUrl: string;
  
    constructor(
      userId: number,
      companyName: string,
      jobTitle: string,
      startDate: string,
      endDate: string,
      jobDescription: string,
      imageUrl: string
    ) {
      this.userId = userId;
      this.companyName = companyName;
      this.jobTitle = jobTitle;
      this.startDate = startDate;
      this.endDate = endDate;
      this.jobDescription = jobDescription;
      this.imageUrl = imageUrl;
    }
  }