import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { PandasComponent } from './unidad1/pandas/pandas.component';
import { EstadisticaComponent } from './unidad2/estadistica/estadistica.component';

const routes: Routes = [
    { path: 'unidad1', component: PandasComponent},
    { path: 'unidad2', component: EstadisticaComponent},
    { path: 'perfil', component: PerfilComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}