import { Login } from './login.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

    static DIRECCION_POST : string = "http://httpbin.org/post";

    constructor(private http: HttpClient) {

    }

    postLogin (login : Login): Observable<Object> { //El observable en esta linea es el tipo que retorno. Ver ejemplo suma()
        let respuesta: Observable<Object>

        let json_login : string = JSON.stringify (login);
        console.log("JSON a enviar: " + json_login);
        let cabecera : HttpHeaders = new HttpHeaders();
        cabecera.set('Content-type', 'application/json; charset=UTF8');
        respuesta = this.http.post(LoginService.DIRECCION_POST, json_login, {headers: cabecera, observe: "response"});

        return respuesta;
    }

}
// suma (numero1 : number, numero2 : number): number{
//    let resultado : number;
//    resultado = numero1 + numero2;
//    return resultado
// } 