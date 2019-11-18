import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditrequestPage } from './editrequest.page';

describe('EditrequestPage', () => {
  let component: EditrequestPage;
  let fixture: ComponentFixture<EditrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
