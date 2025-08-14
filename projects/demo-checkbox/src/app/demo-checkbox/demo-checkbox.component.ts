/* eslint-disable @typescript-eslint/unbound-method */
import { Component, inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonCheckbox } from "@ionic/angular/standalone";

@Component({
    selector: "demo-checkbox",
    imports: [
        FormsModule, 
        IonCheckbox, 
        ReactiveFormsModule
    ],
    standalone: true,
    templateUrl: "./demo-checkbox.component.html",
    styleUrl: "./demo-checkbox.component.scss"
})
export class DemoCheckboxComponent implements OnInit {
  protected readonly formBuilder = inject(FormBuilder);
  protected demoFormGroup!: FormGroup;
  
  label1 = "Enabled form control, default true, label from variable";
  label2 = "Enabled form control, default false, label from variable";
  label3 = "Disabled, checked by default, label from variable";
  label4 = "Disabled, unchecked by default, label from variable";

  ngOnInit(): void {
    this.demoFormGroup = this.createFormGroup();
  }

  protected createFormGroup(): FormGroup {
    return this.formBuilder.group({
      enabledTrue: [true],
      enabledFalse: [false],
      enabledFalseFixedLabel: [false],
      disabledTrue: [{ value: true, disabled: true }],
      disabledFalse: [{ value: false, disabled: true }],
    });
  }
}
