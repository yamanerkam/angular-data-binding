import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent {
  salary: number = 0
  updateSalary() {
    console.log('update salary ' + this.salary)
  }

  onChange() {

    console.log("on change " + this.salary)
  }


}
