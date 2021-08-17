/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pandas',
  templateUrl: './pandas.component.html',
  styleUrls: ['./pandas.component.css']
})
export class PandasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */
import { Component, Input, OnInit } from '@angular/core';
import { PandasService } from './pandas.service';

@Component({
  selector: 'app-pandas',
  templateUrl: './pandas.component.html',
  styleUrls: ['./pandas.component.css'],
})
export class PandasComponent implements OnInit {
  constructor(private fileUploadService: PandasService) {}
  fileName = '';
  file: File | null = null; // Variable to store file
  loading: boolean = false; // Flag variable
  llegaronDatos: boolean = false;
  datosImg: string = '';
  graficaImg: string = '';

  onChange(files: any) {
    this.file = files[0];
    if (this.file) {
      this.fileName = this.file.name;
    }
  }
  onUpload() {
    this.loading = !this.loading;
    this.fileUploadService
      .upload(this.file!, `${this.api}`)
      .subscribe((respuesta: any) => {
        this.llegaronDatos = true;
        this.datosImg = 'http://34.67.213.198:3000/images/' + respuesta.datos;
        this.graficaImg =
          'http://34.67.213.198:3000/images/' + respuesta.grafica;
      });
  }
  ngOnInit(): void {}
  base: string = 'tema1';
  nombreX: string = '';
  nombreY: string = '';
  api: string = '';
  onChangeX(nombreX: any) {
    this.nombreX = nombreX.target.value;
    this.api = this.base + '/' + nombreX.target.value + '/' + this.nombreY;
  }
  onChangeY(nombreY: any) {
    this.nombreY = nombreY.target.value;
    this.api = this.base + '/' + this.nombreX + '/' + nombreY.target.value;
  }
}