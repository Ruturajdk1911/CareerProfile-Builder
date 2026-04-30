import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-self-project-list',
  imports: [RouterOutlet],
  templateUrl: './self-project-list.component.html',
  styleUrl: './self-project-list.component.css',
})
export class SelfProjectListComponent {
activeTab: string = 'Resume Portfolio';

  constructor(private router: Router) {}

ngOnInit(): void {
  const currentPath = this.router.url;
  // Change 'Selfproject' to 'selfProject'
  if (currentPath.includes('selfProject')) { 
    this.setTabFromUrl(currentPath);
  }
}

setActiveTab(tab: string): void {
  this.activeTab = tab;
  if (tab === 'Resume Portfolio') {
    // Ensure the path is exactly 'selfProject/resumeportfolio'
    this.router.navigate(['/selfProject/resumeportfolio']);
  }
}

  setTabFromUrl(url: string): void {
    const route = url.split('/').pop();
    switch (route) {
      case 'resumeportfolio':
        this.activeTab = 'Resume Portfolio';
        break;
    }
  }
}
