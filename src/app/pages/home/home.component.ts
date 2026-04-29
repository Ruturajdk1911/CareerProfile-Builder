import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cards: any[] = [];

  constructor(private sharedService: SharedService){

  } 

 ngOnInit(): void {
    this.sharedService.getCardsList().subscribe(data => {
      this.cards = data;
    });
  }

//If json server(db.json) is not available uncomment the below code and comment the above code from line no 14 to 24

// cards = [
//     {
//       title: 'About Me',
//       image: 'assets/images/working.png',
//       link: '/about'
//     },
//     {
//       title: 'Education',
//       image: 'assets/images/Education.png',
//       link: '/education'
//     },
//     {
//       title: 'Experience',
//       image: 'assets/images/Experience.png',
//       link: '/experience'
//     },
//     {
//       title: 'Projects Completed',
//       image: 'assets/images/Projects-Completed.png',
//       link: '/project'
//     }
//   ];
}
