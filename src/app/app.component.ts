import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "src/environments/environment";
import { getBoolean, getRemoteConfig } from "firebase/remote-config";
import { getValue } from "firebase/remote-config";
import { fetchAndActivate, fetchConfig } from "firebase/remote-config";
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  showElement: boolean = false;

  constructor(private socket: Socket) {
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

    this.getMessage();
  }

  // Eviar mensagem via Socket.io
  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

  // Ler mensagem recebida via Socket.io
  getMessage() {
    this.socket.fromEvent("test-message").subscribe(r => {
      console.log(r);
    });
  }

}
