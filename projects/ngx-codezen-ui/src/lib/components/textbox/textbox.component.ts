import { Component, Input } from '@angular/core';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';

@Component({
  selector: 'codezen-textbox',
  standalone: true,
  imports: [InputsModule, LabelModule],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss'
})
export class TextboxComponent {
  @Input() label!: string;
  @Input() readonly!: boolean;
  @Input() required!: boolean
}
