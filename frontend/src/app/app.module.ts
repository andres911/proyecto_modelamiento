import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { PerfilComponent } from './perfil/perfil.component';
import { PromediomovilComponent } from './pronostico/promediomovil/promediomovil.component';
import { SuavizamientoComponent } from './pronostico/suavizamiento/suavizamiento.component';
import { RegrelinealComponent } from './pronostico/regrelineal/regrelineal.component';
import { RegrecuadraticaComponent } from './pronostico/regrecuadratica/regrecuadratica.component';
import { MontecarloComponent } from './simulacion/montecarlo/montecarlo.component';
import { InventarioComponent } from './simulacion/inventario/inventario.component';
import { LineaEsperaComponent } from './simulacion/linea-espera/linea-espera.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    PromediomovilComponent,
    SuavizamientoComponent,
    RegrelinealComponent,
    RegrecuadraticaComponent,
    MontecarloComponent,
    InventarioComponent,
    LineaEsperaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    AppRoutingModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    MatProgressBarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
