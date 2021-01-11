import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakepollComponent } from './makepoll.component';

describe('MakepollComponent', () => {
  let component: MakepollComponent;
  let fixture: ComponentFixture<MakepollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakepollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakepollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
