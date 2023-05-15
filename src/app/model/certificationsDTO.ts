export class CertificationsDTO {
    id?: number;
    userId: number;
    certificationName: string;
    institutionName: string;
    dateObtained: string;
    certificationUrl: string;
    imageUrl: string;

    constructor(
        userId: number,
        certificationName: string,
        institutionName: string,
        dateObtained: string,
        certificationUrl: string,
        imageUrl: string
      ) {
        this.userId = userId;
        this.certificationName = certificationName;
        this.institutionName = institutionName;
        this.dateObtained = dateObtained;
        this.certificationUrl = certificationUrl;
        this.imageUrl = imageUrl;
      }
  }