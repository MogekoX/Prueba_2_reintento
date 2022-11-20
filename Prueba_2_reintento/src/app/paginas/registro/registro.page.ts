import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DirectivasService } from 'src/app/servicios/directivas.service';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public formularioRegistro: FormGroup;
  public imagenCargando = false;
  alertController: any;

  constructor(
    private formB: FormBuilder
  ) {
    this.formularioRegistro = this.formB.group({
      'nombre': ['',[Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
      'apellido': ['',[Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      'edad': ['', [Validators.required, Validators.minLength(18), Validators.maxLength(98)]],
      'nombreUsuario': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'contraseña': ['',[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      'fechaNac': ['',[Validators.required, Validators.min(1)]],
      'genero': ['', [Validators.required, Validators.min(1)]]
    })
  }
  public espacio(control: string){
    return this.formularioRegistro.get(control);
  }
  // public tocado(){
  //   return this.formularioRegistro.get(this.control).touched;
  // }
  // public manchado(control: string){
  //   return this.formularioRegistro.get(control).dirty;
  // }
  ngOnInit() {
  }
  guardar(){

  }
}
