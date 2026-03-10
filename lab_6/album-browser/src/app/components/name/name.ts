import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './name.html',
  styleUrl: './name.css',
})
export class NameComponent {

}
