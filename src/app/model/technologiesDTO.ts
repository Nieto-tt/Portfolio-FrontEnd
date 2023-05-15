export class technologiesDTO {
    technologyId?: number;
    name: string;
  
    constructor(technologyId: number, name: string) {
      this.technologyId = technologyId;
      this.name = name;
    }
  }