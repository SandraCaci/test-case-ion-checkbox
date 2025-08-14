import { Component, Input } from "@angular/core";

@Component({
  selector: "demo-section",
  standalone: true,
  template: `
    <section class="demo-section" #sectionElement>
      <h3 [id]="sectionId" #sectionHeader>
        {{ title }}
      </h3>
      <ng-content></ng-content>
    </section>
  `,
  styles: `
    .demo-section {
      margin-bottom: 2rem;
    }

    h3 {
      scroll-margin-top: 120px;
      position: relative;
      margin-top: 2rem;
    }
  `,
})
export class DemoSectionComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) sectionId!: string;
}
