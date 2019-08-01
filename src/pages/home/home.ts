import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IpagecepProvider} from '../../providers/ipagecep/ipagecep';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	private cep;
	private endereco:any = {};
	vazio = "";
	
  constructor(public navCtrl: NavController, private ipagecep: IpagecepProvider) {}
	
	getEndereco(){
		this.ipagecep.callService(this.cep)
		.subscribe(
        data =>{
		this.endereco = data;
		console.log(data);
        }
      );
	}
	

    
}
