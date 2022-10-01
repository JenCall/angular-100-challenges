import { Component, OnInit } from '@angular/core';
import { AccordionItem } from '../../components/accordion/accordion-item.interface';
import { ButtonMeta } from '../button-toggle/button-meta.model'

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent {

  title = 'angular-100-challenges';

  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false,
    }
  ];

  public progressValue = 25;

  public buttonToggleOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' }),
  ];

  public isShownOverlay = false;
  
  public loaded = false;

  public toggleValue = false;

  public tabs: { title: string, active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];
  public selectedTab = 0;

  public debounceExampleMethod(value: string): void {
    console.log('Component Documentation', value);
  }
}
