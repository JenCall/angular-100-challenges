import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentDocumentationComponent } from './component-documentation/component-documentation.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { SharedModule } from '../shared/shared.module';
import { COMPONENTS_ROUTES } from './components.routes';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { LinkedinPostComponent } from './linkedin-post/linkedin-post.component';
import { BannerCutOutComponent } from './banner-cut-out/banner-cut-out.component';
import { OverlayComponent } from './overlay/overlay.component';
import { QuoteComponent } from './quote/quote.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { TabsComponent } from './tabs/tabs.component';
import { PagingComponent } from './paging/paging.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [ComponentDocumentationComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    FooterComponent,
    ModalComponent,
    ButtonToggleComponent,
    BottomSheetComponent,
    CountdownTimerComponent,
    LinkedinPostComponent,
    BannerCutOutComponent,
    OverlayComponent,
    QuoteComponent,
    ToggleComponent,
    TwitterPostComponent,
    TabsComponent,
    PagingComponent,
    DebounceSearchComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(COMPONENTS_ROUTES)
  ]
})
export class ComponentsModule { }