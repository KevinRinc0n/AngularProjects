import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  empresa = 'CampusLands'
  tasks = [
    'Instalar NodeJs',
    'Instalar Angular CLI',
    'Crear el primer proyecto'
  ]
  name = 'Kevin R';
  age = 18;
  logoNba = 'https://cdn.mos.cms.futurecdn.net/CPAhzgowLi2NtrP9HfVy9Y.png';
  persona = [
    {
      name : 'Kevin 2',
      age : 20,
      team : 'https://m.media-amazon.com/images/I/51LAfSS4UAL._AC_UF1000,1000_QL80_.jpg'
    }
  ]

clickHandler()
{
  alert("HAZ HECHO CLICK");
}

changeHandler(event : Event)
{
  console.log(event)
}

keyDownHandler(event : KeyboardEvent)
{
  const input = event.target as HTMLInputElement;
  console.log(input.value);
}
}
