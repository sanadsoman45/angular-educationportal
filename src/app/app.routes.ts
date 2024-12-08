import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrainingComponent } from './components/training/training.component';
import { CanidateSpaceComponent } from './components/canidate-space/canidate-space.component';

export const routes: Routes = [

    { path: '', component: DashboardComponent },
    {path:'training', component: TrainingComponent},
    {path:'candidate-space', component: CanidateSpaceComponent}
];
