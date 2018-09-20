import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { VisitedUsersComponent } from '../../visited-users/visited-users.component';
import { RegisteredUsersComponent } from '../../registered-users/registered-users.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { OrderModule } from 'ngx-order-pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    NgxPaginationModule,
    OrderModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    NotificationsComponent,
    VisitedUsersComponent,
    RegisteredUsersComponent
  ]
})

export class AdminLayoutModule {}
