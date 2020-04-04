import{ BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule }from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { rxStompConfig } from './rx-stomp.config';
import { MatCheckboxModule, MatCardModule } from '@angular/material';

@NgModule({
declarations: [
AppComponent,

],
imports: [
BrowserModule,
HttpClientModule,
BrowserAnimationsModule,
FormsModule,
MatToolbarModule,
MatSelectModule,
MatButtonModule,
MatIconModule,
MatTabsModule,
MatProgressSpinnerModule,
MatSnackBarModule,
MatDialogModule,
MatExpansionModule,
MatCheckboxModule,
MatCardModule
],
providers: [
{
provide: InjectableRxStompConfig,
useValue: rxStompConfig
},
{
provide: RxStompService,
useFactory: rxStompServiceFactory,
deps: [InjectableRxStompConfig]
}
],
schemas: [CUSTOM_ELEMENTS_SCHEMA],
bootstrap: [AppComponent],
entryComponents: []
})
export class AppModule {

}
