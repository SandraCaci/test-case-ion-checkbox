import { Component, input, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonCheckbox } from "@ionic/angular/standalone";

@Component({
    selector: "demo-test-input-checkbox",
    standalone: true,
    encapsulation: ViewEncapsulation.ShadowDom,
    imports: [FormsModule, IonCheckbox, ReactiveFormsModule],
    template: `
    <div class="test-input-container" [formGroup]="formGrp()">
        <ion-checkbox
          alignment="center"
          class="ion-focusable"
          [formControlName]="formCtrlName()"
          justify="start"
          labelPlacement="end"
        >
            {{ label() }}
        </ion-checkbox>
    </div>
  `,
    styles: [
        `
      .test-input-container {
        margin-bottom: 1rem;
      }
    `,
    ]
})
export class TestInputCheckboxComponent {
  formGrp = input.required<FormGroup>(); 
  formCtrlName = input.required<string>(); 
  label = input.required<string>();
}
