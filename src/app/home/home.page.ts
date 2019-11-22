import { Component } from '@angular/core';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string;
  role_id: number;

  constructor(private storage: Storage) {
    this.storage.get("role_id").then((role_id) => {
      this.role_id = role_id;
    });
    this.storage.get("name").then((name) => {
      this.name = name;
    });
  }
}
