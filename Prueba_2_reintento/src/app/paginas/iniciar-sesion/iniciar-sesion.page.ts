import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {
  public formularioLogin: FormGroup;
  constructor(
    private formB: FormBuilder
    ) {
      this.formularioLogin = this.formB.group({
        'nombreUsuario': ['',Validators.required, Validators.minLength(5), Validators.maxLength(10)],
        'contraseña': ['',Validators.required, Validators.minLength(8), Validators.maxLength(16)]
      })

      }


  ngOnInit() {
  }

}
