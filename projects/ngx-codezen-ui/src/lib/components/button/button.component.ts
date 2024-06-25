import { Component, Input } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
@Component({
  selector: 'codezen-button',
  standalone: true,
  imports: [ ButtonsModule ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label = 'Accept';
}
