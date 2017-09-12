import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MdTabsModule,MdToolbarModule} from '@angular/material';
import {AboutInputComponent} from '../app/about-input/about-input.component';
import {AboutPreviewComponent} from '../app/about-preview/about-preview.component';
import {MdInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MdCardModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {MdButtonModule,MdDialogModule,MdSelectModule,MdIconModule,MdTooltipModule,MdProgressBarModule} from '@angular/material';
import {GlobalDataService} from './global-data';
import {pixabayService} from '../services/pixabay.service';
import {ImagesInputComponent} from '../app/images-input/images-input.component';
import {ImagesPreviewComponent} from '../app/images-preview/images-preview.component';
import {DialogOpeningHoursDialog} from '../app/openingHours-input/dialog.component';
import {OpeningHoursInputComponent} from '../app/openingHours-input/openingHours-input.component';
import {OpeningHoursPreviewComponent} from '../app/openingHours-preview/openingHours-preview.component';
import { CustomFormsModule } from 'ng2-validation';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';
import {FileUploadService} from '../services/fileUpload.service';
const routes: Routes = [

{ path: 'aboutInput', component: AboutInputComponent, outlet: 'input-route' },
{ path: 'aboutPreview', component: AboutPreviewComponent, outlet: 'preview-route' },
{ path: 'imagesInput', component: ImagesInputComponent, outlet: 'input-route' },
{ path: 'imagesPreview', component: ImagesPreviewComponent, outlet: 'preview-route' },
{ path: 'openingHoursInput', component: OpeningHoursInputComponent, outlet: 'input-route' },
{ path: 'openingHoursPreview', component: OpeningHoursPreviewComponent, outlet: 'preview-route' }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutInputComponent,
    AboutPreviewComponent,
    ImagesInputComponent,
    ImagesPreviewComponent,
    DialogOpeningHoursDialog,
    OpeningHoursInputComponent,
    OpeningHoursPreviewComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MdTabsModule,
    MdInputModule,
    FormsModule,
    MdCardModule,
    MdButtonModule,
    RouterModule.forRoot(routes),
    MdToolbarModule,
    HttpModule,
    MdDialogModule,
    MdSelectModule,
    MdIconModule,
    MdTooltipModule,
    CustomFormsModule,
    MdProgressBarModule
  ],
  entryComponents:[DialogOpeningHoursDialog],
  providers: [GlobalDataService,FileUploadService,pixabayService,{provide: LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
