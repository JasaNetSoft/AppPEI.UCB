import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DtcCareersPage } from './dtc-careers.page';

describe('DtcCareersPage', () => {
  let component: DtcCareersPage;
  let fixture: ComponentFixture<DtcCareersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtcCareersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DtcCareersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
