import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreaterequestdetailPage } from './createrequestdetail.page';

describe('CreaterequestdetailPage', () => {
  let component: CreaterequestdetailPage;
  let fixture: ComponentFixture<CreaterequestdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterequestdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreaterequestdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
