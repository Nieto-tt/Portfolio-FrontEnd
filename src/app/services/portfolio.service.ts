import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CertificationsDTO } from '../model/certificationsDTO';
import { userDTO } from '../model/userDTO';
import { ProjectsDTO } from '../model/projectsDTO';
import { softskillsDTO } from '../model/softskillsDTO';
import { SkillsDTO } from '../model/skillsDTO';
import { ExperienceDTO } from '../model/experienceDTO';
import { EducationDTO } from '../model/educationDTO';
import { technologiesDTO } from '../model/technologiesDTO';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  urlBackend: string = "http://localhost:8080/"

  constructor(private http:HttpClient) { }

  public getData():Observable<any>{
    return this.http.get<any>(this.urlBackend + 'portfolio');
  }

  public editUser(user: userDTO) : Observable<any>{
    return this.http.put<any>(this.urlBackend + 'editUser', user);
  }

  //

  public newEducation(edu:EducationDTO): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'newEducation', edu);    
  }

  public editEducation(id: number, edu: EducationDTO): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editEducation/${id}`, edu);
  }

  public deleteEducation(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `deleteEducation/${id}`);
  }

  // ABM Experiencia //

  public newExperience(expe: ExperienceDTO): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'newExperience', expe);    
  }

  public editExperience(id: number, expe: ExperienceDTO): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editExperience/${id}`, expe);
  }

  public deleteExperience(id :number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `deleteExperience/${id}`);
  }

  // ABM Habilidad Tecnica //

  public newSkill(skill: SkillsDTO): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'newSkill', skill);    
  }

  public editSkill(id: number, skill :SkillsDTO): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editSkill/${id}`, skill);
  }

  public deleteSkill(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `deleteSkill/${id}`);
  }

  // ABM Habilidad Blanda //

  public newSoftSkill(soft: softskillsDTO): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'newSoftSkill', soft);    
  }

  public editSoftSkill(id: number, soft :softskillsDTO): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editSoftSkill/${id}`, soft);
  }

  public deleteSoftSkill(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `deleteSoftSkill/${id}`);
  }

  // ABM Proyecto //

  public newProject(project:ProjectsDTO): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'newProject', project);    
  }

  public editProject(id :number, project :ProjectsDTO): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editProject/${id}`, project);
  }

  public deleteProject(id :number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `deleteProject/${id}`);
  }

  public countProjects(): Observable<any> {
    return this.http.get<any>(this.urlBackend + `countProjects`);
  }

  // ABM Proyecto //

  public newCertification(cert:CertificationsDTO): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'newCertification', cert);    
  }

  public editCertification(id :number, cert :CertificationsDTO): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editCertification/${id}`, cert);
  }

  public deleteCertification(id :number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `deleteCertification/${id}`);
  }

  //

  public newTechnologies(techno:technologiesDTO): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'newTechnologies', techno);    
  }

  public editTechnologies(id :number, techno :technologiesDTO): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editTechnologies/${id}`, techno);
  }

  public deleteTechnologies(id :number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `deleteTechnologies/${id}`);
  }
}
