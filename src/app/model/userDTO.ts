export class userDTO {
    userId: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    gitUsername: string;
    linkedinUsername: string;
    surname: string;
    imageUrl: string;
    bannerUrl: string;
    description: string;
    ocupation: string;
  
    constructor(
      userId: number,
      name: string,
      email: string,
      password: string,
      phone: string,
      gitUsername: string,
      linkedinUsername: string,
      surname: string,
      imageUrl: string,
      bannerUrl: string,
      description: string,
      ocupation: string
    ) {
      this.userId = userId;
      this.name = name;
      this.email = email;
      this.password = password;
      this.phone = phone;
      this.gitUsername = gitUsername;
      this.linkedinUsername = linkedinUsername;
      this.surname = surname;
      this.imageUrl = imageUrl;
      this.bannerUrl = bannerUrl;
      this.description = description;
      this.ocupation = ocupation;
    }
  }