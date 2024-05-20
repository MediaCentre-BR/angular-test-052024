import { Component, Input } from '@angular/core';
import { User } from '../../../models/user.interface';

@Component({
  selector: '[app-table-details]',
  standalone: true,
  imports: [],
  templateUrl: './table-details.component.html',
  styleUrl: './table-details.component.scss'
})
export class TableDetailsComponent {
  
  @Input() user!: User;
}
