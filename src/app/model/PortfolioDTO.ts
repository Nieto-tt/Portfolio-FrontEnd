import { userDTO } from './userDTO';
import { EducationDTO } from './educationDTO';
import { ExperienceDTO } from './experienceDTO';
import { SkillsDTO } from './skillsDTO';
import { softskillsDTO } from './softskillsDTO';
import { ProjectsDTO } from './projectsDTO';
import { CertificationsDTO } from './certificationsDTO';

export class PortfolioDTO {
  user: userDTO;
  education: EducationDTO[];
  experience: ExperienceDTO[];
  skill: SkillsDTO[];
  soft: softskillsDTO[];
  project: ProjectsDTO[];
  certifications: CertificationsDTO[];

  constructor(
    user: userDTO,
    education: EducationDTO[],
    experience: ExperienceDTO[],
    skill: SkillsDTO[],
    soft: softskillsDTO[],
    project: ProjectsDTO[],
    certifications: CertificationsDTO[]
  ) {
    this.user = user;
    this.education = education;
    this.experience = experience;
    this.skill = skill;
    this.soft = soft;
    this.project = project;
    this.certifications = certifications;
  }
}