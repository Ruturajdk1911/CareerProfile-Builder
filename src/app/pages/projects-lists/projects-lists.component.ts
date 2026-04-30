import { Component } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-projects',
    imports: [RouterOutlet],
    templateUrl: './projects-lists.component.html',
    styleUrl: './projects-lists.component.css'
})
export class ProjectsComponent {
activeTab: string = 'Project 1';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const currentPath = this.router.url;
    if (currentPath === '/companyProject' || currentPath === '/companyProject/') {
      this.setActiveTab('Project 1');
    } else {
      this.setTabFromUrl(currentPath);
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    const normalizedRoute = tab.toLowerCase().replace(/\s+/g, '');
    this.router.navigate([`companyProject/${normalizedRoute}`]);
  }

  setTabFromUrl(url: string): void {
    const route = url.split('/').pop();
    switch (route) {
      case 'project1':
        this.activeTab = 'Project 1';
        break;
      case 'project2':
        this.activeTab = 'Project 2';
        break;
      case 'project3':
        this.activeTab = 'Project 3';
        break;
      case 'project4':
        this.activeTab = 'Project 4';
        break;
      case 'project5':
        this.activeTab = 'Project 5';
        break;
        case 'project6':
        this.activeTab = 'Project 6';
        break;
    }
  }
}
