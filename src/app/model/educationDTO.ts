export class EducationDTO {
    id?: number;
    userId: number;
    institutionName: string;
    degreeName: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
  
    constructor(
      userId: number,
      institutionName: string,
      degreeName: string,
      fieldOfStudy: string,
      startDate: string,
      endDate: string,
      imageUrl: string
    ) {
      this.userId = userId;
      this.institutionName = institutionName;
      this.degreeName = degreeName;
      this.fieldOfStudy = fieldOfStudy;
      this.startDate = startDate;
      this.endDate = endDate;
      this.imageUrl = imageUrl;
    }
  }