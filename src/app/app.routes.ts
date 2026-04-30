import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { ProjectsComponent } from './pages/projects-lists/projects-lists.component';
import { IETAdamsComponent } from './projects/iet-adams/iet-adams.component';
import { IETADComponent } from './projects/iet-ad/iet-ad.component';
import { IFITComponent } from './projects/i-fit/i-fit.component';
import { RtlsComponent } from './projects/rtls/rtls.component';
import { PsaComponent } from './projects/psa/psa.component';
import { IetBauSupportComponent } from './projects/iet-bau-support/iet-bau-support.component';
import { ResumePortfolioComponent } from './selfProjects/resume-portfolio/resume-portfolio.component';
import { SelfProjectListComponent } from './pages/self-Projects-list/self-project-list/self-project-list.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent, title: 'Home'},
    {path:'about', component:AboutComponent, title: 'About Me'},
    {path:'skills', component:SkillsComponent, title: 'Skills'},
    {path:'education', component:EducationComponent, title: 'Education'},
    {path:'experience', component:ExperienceComponent, title: 'Experience'},
    {path:'certifications', component:CertificationsComponent, title: 'Certifications'},
    {path:'personal-info', component:PersonalInfoComponent, title: 'Personal Profile'},
    {
    path: 'companyProject',
    component: ProjectsComponent,
    title: 'companyProject',
    children: [
      { path: '', redirectTo: 'project1', pathMatch: 'full' },
      { path: 'project1', component: IetBauSupportComponent, title: 'Projects 1' },
      { path: 'project2', component: IETAdamsComponent, title: 'Projects 2' },
      { path: 'project3', component: IETADComponent, title: 'Projects 3' },
      { path: 'project4', component: IFITComponent, title: 'Projects 4' },
      { path: 'project5', component: RtlsComponent, title: 'Projects 5' },
      { path: 'project6', component: PsaComponent, title: 'Projects 6' },
    ],
  },
  {
  path: 'selfProject',
  component: SelfProjectListComponent, // Use the list component as the parent
  title: 'selfProject',
  children: [
    { path: '', redirectTo: 'resumeportfolio', pathMatch: 'full' },
    { path: 'resumeportfolio', component: ResumePortfolioComponent, title: 'Resume Portfolio' },
  ],
},
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
