import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RegrecuadraticaService } from './regrecuadratica.service';

@Component({
  selector: 'app-regrecuadratica',
  templateUrl: './regrecuadratica.component.html',
  styleUrls: ['./regrecuadratica.component.css'],
})
export class RegrecuadraticaComponent {
  constructor(private fileUploadService: RegrecuadraticaService) {}

  fileName = '';
  file: File | null = null; // Variable to store file
  loading: boolean = false; // Flag variable
  llegaronDatos: boolean = false;
  base: string = 'regresioncuadratica';
  nombreX: string = '';
  nombreY: string = '';
  api: string = '';
  displayedColumns: string[] = [];
  valoresP: string = '';
  rutaImg: string = '';

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  onChange(files: any) {
    this.file = files[0];
    if (this.file) {
      this.fileName = this.file.name;
    } else {
      this.fileName = 'Suba un archivo';
    }
  }
  onUpload() {
    this.api = `${this.base}/${this.nombreY}`;
    this.loading = !this.loading;
    this.fileUploadService
      .upload(this.file!, `${this.api}`)
      .subscribe((respuesta: any) => {
        this.displayedColumns = ['Datos x', 'Datos y', 'Regresión Cuadrática'];
        console.log(respuesta.dataframe);
        this.valoresP = respuesta.valores;
        this.dataSource.data = respuesta.dataframe;
        this.dataSource.paginator = this.paginator;
        document.getElementById('hidden')!.style.display = 'block';
        this.rutaImg = 'http://34.67.213.198:3000/images/' + respuesta.grafica;
        this.llegaronDatos = true;
      });
  }

  onChangeX(nombreX: any) {
    this.nombreX = nombreX.target.value;
  }
  onChangeY(nombreY: any) {
    this.nombreY = nombreY.target.value;
  }
}