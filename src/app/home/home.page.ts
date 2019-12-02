import { Component } from '@angular/core';

import { Storage } from '@ionic/storage';

import { Notification } from './notification'
import { NotificationsService } from './notifications.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string;
  role_id: number;
  day: string;
  hour: string;
  notifications: any;
  
  constructor(
    private storage: Storage,
    private notificationsService: NotificationsService,
    private localNotifications: LocalNotifications
    ) {
      this.storage.get("role_id").then((role_id) => {
        this.role_id = role_id;
        if(this.role_id == 2 || this.role_id == 3){
          this.getUserNotifications();
        }
      });
      this.storage.get("name").then((name) => {
        this.name = name;
      });
    }
    
  getUserNotifications(){  
    this.storage.get("ACCESS_TOKEN").then((ACCESS_TOKEN) => {
      this.storage.get("id").then((id) => {
        this.notificationsService.getUserNotifications(ACCESS_TOKEN,id)
        .subscribe(notifications=> {
          this.notifications = notifications;
          console.log(JSON.stringify(this.notifications));
          for(var _i = 0; _i < this.notifications.length; _i++){
            var date_data = new Date(this.notifications[_i].date);
            var year = date_data.getUTCFullYear()
            var month = date_data.getUTCMonth();
            var date = date_data.getUTCDate();
            var hour_data = new Date(this.notifications[_i].hour);
            var hour= hour_data.getUTCHours();
            var minute = hour_data.getUTCMinutes();
            var seconds = hour_data.getUTCSeconds();
            var date_notification = new Date(year,month,date,hour,minute,seconds,0);
            this.localNotifications.schedule({
              id: this.notifications[_i].id,
              title: "Recordatorio de Actividades sistemaPei",
              text: this.notifications[_i].affair,
              trigger: { at: date_notification },
              led: 'FF0000',
              sound: null
            });
          }
        });
      });
    });
  }
    
}
  