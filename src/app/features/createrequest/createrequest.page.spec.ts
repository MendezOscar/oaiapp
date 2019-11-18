import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreaterequestPage } from './createrequest.page';

describe('CreaterequestPage', () => {
  let component: CreaterequestPage;
  let fixture: ComponentFixture<CreaterequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreaterequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
