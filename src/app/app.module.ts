import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CertificationComponent } from './components/certification/certification.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './components/experience/add/add.component';
import { CommonModule } from '@angular/common';
import { AddProjectsComponent } from './components/projects/add-projects/add-projects.component';
import { AddEduComponent } from './components/education/add-edu/add-edu.component';
import { AddCertComponent } from './components/certification/add-cert/add-cert.component';
import { AddSoftComponent } from './components/skills/add-soft/add-soft.component';
import { AddSkillComponent } from './components/skills/add-skill/add-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CertificationComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    NavbarComponent,
    PortfolioComponent,
    ProjectsComponent,
    SkillsComponent,
    AddComponent,
    AddProjectsComponent,
    AddEduComponent,
    AddCertComponent,
    AddSoftComponent,
    AddSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
