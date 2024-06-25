import { Component, Input } from '@angular/core';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FloatingLabelModule  } from '@progress/kendo-angular-label';
import { LayoutModule } from "@progress/kendo-angular-layout";

@Component({
  selector: 'codezen-textbox',
  standalone: true,
  imports: [InputsModule, FloatingLabelModule, LayoutModule ],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss'
})
export class TextboxComponent {
  @Input() label!: string;
  @Input() readonly!: boolean;
  @Input() required!: boolean
}
