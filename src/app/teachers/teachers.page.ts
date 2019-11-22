import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';

import { CareersService } from '../careers/careers.service';
import { Careers } from '../careers/careers';
import { TeachersService } from './teachers.service';
import { Teachers } from './teachers';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss'],
})
export class TeachersPage implements OnInit {
  careers: Careers;
  teachers: Teachers;
  constructor(
    private careersService: CareersService,
    private teachersService: TeachersService,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.get_teachers();
  }

  get_teachers(){
    // this.storage.get("ACCESS_TOKEN").then((ACCESS_TOKEN)=>{
    //   this.storage.get("id").then((id) => {
    //     this.careersService.getCareersUser(ACCESS_TOKEN, id)
    //     .subscribe(careers=> {
    //       this.careers = careers;
          
    //     } );
    //   });
    // });
    this.storage.get("ACCESS_TOKEN").then((ACCESS_TOKEN)=>{
      this.teachersService.getTeachers(ACCESS_TOKEN,[1,5])
      .subscribe((teachers)=>{
        this.teachers = teachers
        console.log(JSON.stringify(this.teachers));
      }, (error)=> {
        console.log(error);
      }
      );
    });
  }

}
