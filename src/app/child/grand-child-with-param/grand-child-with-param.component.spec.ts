import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildWithParamComponent } from './grand-child-with-param.component';

describe('GrandChildWithParamComponent', () => {
  let component: GrandChildWithParamComponent;
  let fixture: ComponentFixture<GrandChildWithParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChildWithParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildWithParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
