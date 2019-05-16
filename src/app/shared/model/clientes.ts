export class Clientes {
   
   data:
   {
   
    identificador?: number;
    nombre?: string;
    apellido?: string;
    rut?: string;
    correo?: string;
    numeroContacto?: string;
    fax?: string;
    domicilio?: string;
    clienteActivo?: boolean;
    comuna?: {
        id?: number;
        codigo?: string;
        comuna?: string;
        provincia?: string;
        created_at?: Date,
        updated_at?: Date
        }
    ciudad?: {
        id?: number,
        nombre?: string,
        created_at?: Date
        updated_at?: Date
        }
    fechaIngreso?: Date
    fechaActualizacion?: DataCue
    }
}