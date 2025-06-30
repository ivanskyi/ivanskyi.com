import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      title: 'SeeYourRoom | 3D Visualization Services',
      description: 'SeeYourRoom offers 3D visualization services, specializing in interior and exterior visualizations, and 3D modeling of buildings/architecture.',
      link: 'https://seeyourroom.com'
    }
  ];
}
