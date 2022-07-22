import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "src/environments/environment";
import { activate, ensureInitialized, getAll, getBoolean, getRemoteConfig, getString } from "firebase/remote-config";
import { getValue } from "firebase/remote-config";
import { fetchAndActivate, fetchConfig } from "firebase/remote-config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'RemoteConfig';

  constructor(){
    const app = initializeApp(firebaseConfig);
    const remoteConfig = getRemoteConfig(app);
    remoteConfig.settings = {
      fetchTimeoutMillis: 60000,
      minimumFetchIntervalMillis: 1
    }

    remoteConfig.defaultConfig = ({
      'teste_show_key': true
    });

    fetchAndActivate(remoteConfig).then(() => {
      const fbRC = getValue(remoteConfig, 'teste_show_key').asBoolean();
      if(fbRC){
        console.log('Ganhei desconto')
      }
    })

    const sss = getValue(remoteConfig, 'teste_show_key').asBoolean()

      console.log(sss)
    
    
  }

}
