import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogandregComponent } from './logandreg.component';

describe('LogandregComponent', () => {
  let component: LogandregComponent;
  let fixture: ComponentFixture<LogandregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogandregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogandregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
