import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  //Records fetched/Get through json server(db.json)
//  skills: any[] = [];
 
//    constructor(private sharedService: SharedService){
 
//    } 
 
//   ngOnInit(): void {
//     //  this.sharedService.getSkillList().subscribe(data => {
//     //    this.skills = data;
//     //  });
//    }


   //If json server(db.json) is not available uncomment the below code and comment the above code from line no 14 to 24

skills = [
  {
    category: 'Programming Languages',
    items: ['C', 'C#', 'HTML 4/5', 'CSS', 'Javascript', 'TypeScript']
  },
  {
    category: 'Frontend Technologies/Libraries',
    items: ['Angular 12 to 19', 'Angular Material', 'Bootstarp 5', 'jQuery', 'Ajax', 'Kendo UI']
  },
  {
    category: 'Database',
    items: ['Microsoft SQL Server', 'PostgreSQL', 'SSRS (SQL Server Reporting Services)']
  },
  {
    category: 'Version Control Tools',
    items: ['GitHub Desktop', 'TortoiseSVN', 'Jira']
  },
  {
    category: 'Operating System',
    items: ['Windows', 'Linux']
  },
  {
    category: 'Tool/Editor',
    items: ['Visual Studio 2019/2022/2026', 'Visual Studio Code', 'Postman', 'SSMS (SQL Server Management Studio)']
  },
  {
    category: 'FrameWorks',
    items: ['ASP.NET', '.NET Framework 4.6/4.8', '.NET Core 6.0/8.0/10.0', 'Entity Framework Core', 'MVC' , 'Web API', 'Windows Forms', 'Windows Services', 'Nunit Testing Framework']
  },
  {
    category: 'Other skills',
    items: ['Web Accessibility', 'Azure Functions', 'Power Automate', 'Power Apps']
  }
];

}
