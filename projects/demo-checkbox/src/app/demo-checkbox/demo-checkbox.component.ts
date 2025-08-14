/* eslint-disable @typescript-eslint/unbound-method */
import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AbstractBaseComponent, DemoBaseComponent } from "../shared/demo-base.component";
import { DemoSectionComponent } from "../shared/demo-section.component";
import { TestInputCheckboxComponent } from "../test-input-checkbox/test-input-checkbox.component";

@Component({
    selector: "demo-checkbox",
    imports: [
        DemoBaseComponent,
        DemoSectionComponent,
        TestInputCheckboxComponent,
    ],
    standalone: true,
    templateUrl: "./demo-checkbox.component.html",
    styleUrl: "./demo-checkbox.component.scss"
})
export class DemoCheckboxComponent extends AbstractBaseComponent {
  protected override createFormGroup(): FormGroup {
    return this.formBuilder.group({
      enabledTrue: [true],
      enabledFalse: [false],
      disabledTrue: [{ value: true, disabled: true }],
      disabledFalse: [{ value: false, disabled: true }],
    });
  }
}
