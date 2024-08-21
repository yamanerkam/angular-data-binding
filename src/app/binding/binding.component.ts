import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  // @Input() age!: number;

  // text interpolation => field/property from the coponent class sends it to template side
  name: string = "Erkam"

  // property binding => attriribute
  photoURL: string = "https://picsum.photos/200/300"
  title: string = "developer"

  // text interpolation vs property binding
  // source diretly



}
