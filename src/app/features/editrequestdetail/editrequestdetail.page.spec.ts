import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditrequestdetailPage } from './editrequestdetail.page';

describe('EditrequestdetailPage', () => {
  let component: EditrequestdetailPage;
  let fixture: ComponentFixture<EditrequestdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrequestdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditrequestdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
