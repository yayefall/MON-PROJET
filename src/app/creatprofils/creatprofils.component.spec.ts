import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatprofilsComponent } from './creatprofils.component';

describe('CreatprofilsComponent', () => {
  let component: CreatprofilsComponent;
  let fixture: ComponentFixture<CreatprofilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatprofilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatprofilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
