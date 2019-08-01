import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IpagecepProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IpagecepProvider {

  constructor(public http: HttpClient) {
    console.log('Hello Ipage WebService Provider Provider');
  }
  callService(cep:String):any {
			//
			// ADQUIRA A SUA CHAVE DE ACESSO AO WEB SERVICE NO NOSSO SITE:
			// https://www.ipage.com.br/ipage/wskey/index.php#formulario
			//
      var request =  this.http.get(`https://www.ipage.com.br/ws/v1/cep/` + cep + `/json/{CHAVE SECRETA WEBSERVICE}`);
      return request;
    }

}
