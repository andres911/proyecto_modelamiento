import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { PromediomovilComponent } from './pronostico/promediomovil/promediomovil.component';
import { SuavizamientoComponent } from './pronostico/suavizamiento/suavizamiento.component';
import { RegrelinealComponent } from './pronostico/regrelineal/regrelineal.component';
import { RegrecuadraticaComponent } from './pronostico/regrecuadratica/regrecuadratica.component';
import { MontecarloComponent } from './simulacion/montecarlo/montecarlo.component';

const routes: Routes = [
    { path: 'promedio_movil', component: PromediomovilComponent},
    { path: 'suavizamiento', component: SuavizamientoComponent},
    { path: 'regre_lineal', component: RegrelinealComponent},
    { path: 'regre_cuadratica', component: RegrecuadraticaComponent},
    { path: 'montecarlo', component: MontecarloComponent},
    { path: 'perfil', component: PerfilComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}