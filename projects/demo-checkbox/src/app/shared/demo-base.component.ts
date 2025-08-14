import { Component, inject, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

/**
 * Concrete component that provides the demo page layout.
 * Used as <demo-base> in templates.
 */
@Component({
    selector: "demo-base",
    imports: [],
    standalone: true,
    template: `
    <div class="demo-container">
      <div class="demo-content">
        <h2>{{ title }}</h2>
        <ng-content></ng-content>
      </div>
    </div>
  `,
    styles: `
    .demo-container {
      display: flex;
      gap: 2rem;
      position: relative;
    }

    .demo-content {
      flex: 1;
      max-width: 100%;
    }
  `
})
export class DemoBaseComponent {
  @Input({ required: true }) title!: string;
}

/**
 * Abstract base class for demo components to eliminate code duplication.
 * Provides common functionality like FormBuilder injection and form group setup.
 */
@Component({
  template: "",
  standalone: true,
})
export abstract class AbstractBaseComponent implements OnInit {
  protected readonly formBuilder = inject(FormBuilder);
  protected demoFormGroup!: FormGroup;

  ngOnInit(): void {
    this.demoFormGroup = this.createFormGroup();
  }

  /**
   * Override this method in child components to define form controls
   */
  protected abstract createFormGroup(): FormGroup;
}
