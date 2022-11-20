export interface Usuario {
  nombre: string,
  apellido: string,
  edad: number,
  nombreUsuario: string,
  contraseña: string,
  fechaNac: Date,
  genero: boolean
}

export interface usuarioID extends Usuario{
  id: number
}
