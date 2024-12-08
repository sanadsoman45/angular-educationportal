import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FormationService } from '../../core/services/formation.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import Formation from '../../core/models/interfaces/formation';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, CommonModule, MatIconModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  categoryCountArr: any;
  formationsArr: Formation[] = [];

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    this.formationService.getUniqueCategoriesWithCount().subscribe({
      next: (data) => {
        this.categoryCountArr = data;
      },
      error: (error) => {
        console.error('error');
      },
      complete: () => {
        console.log('completed');
      },
    });

    this.formationService.getFormations().subscribe({
      next: (data) => {},
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
