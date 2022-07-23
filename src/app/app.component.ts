import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "src/environments/environment";
import { getBoolean, getRemoteConfig } from "firebase/remote-config";
import { getValue } from "firebase/remote-config";
import { fetchAndActivate, fetchConfig } from "firebase/remote-config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  showElement: boolean = false;
  
  constructor(){
    const app = initializeApp(firebaseConfig);
    const remoteConfig = getRemoteConfig(app);

    remoteConfig.settings = {
      fetchTimeoutMillis: 60000,
      minimumFetchIntervalMillis: 1000
    }

    remoteConfig.defaultConfig = ({
      'teste_show_key': false
    });

    fetchAndActivate(remoteConfig).then(() => {
      const fbRC = getBoolean(remoteConfig, 'teste_show_key');
      if (fbRC) this.showElement = fbRC;
    })
  }

}
