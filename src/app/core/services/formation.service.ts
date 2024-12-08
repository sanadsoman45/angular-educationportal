import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Formation {
  id: number;
  titre: string;
  description: string;
  chargeHoraire: number;
  niveau: string;
  programme: string;
  tags: string[];
  categories: string[];
}

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private apiUrl = 'http://localhost:3000/formations'; // URL for the formations endpoint

  constructor(private http: HttpClient) {}

  // Fetch all formations from the API
  getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.apiUrl);
  }

  // Fetch unique formation categories and category count as an array of objects
  getUniqueCategoriesWithCount(): Observable<{ category: string, count: number }[]> {
    return this.http.get<Formation[]>(this.apiUrl).pipe(
      map(formations => {
        // Initialize an empty array to hold category counts
        const categoryCounts: { category: string, count: number }[] = [];

        // Loop through the formations and count occurrences of each category
        formations.forEach(formation => {
          formation.categories.forEach(category => {
            // Check if the category already exists in the categoryCounts array
            const existingCategory = categoryCounts.find(item => item.category === category);
            if (existingCategory) {
              existingCategory.count++;
            } else {
              // Add a new entry for the category if it doesn't exist
              categoryCounts.push({ category, count: 1 });
            }
          });
        });

        return categoryCounts;
      })
    );
  }
}
