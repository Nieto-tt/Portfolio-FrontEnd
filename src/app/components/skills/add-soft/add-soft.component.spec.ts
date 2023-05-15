import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoftComponent } from './add-soft.component';

describe('AddSoftComponent', () => {
  let component: AddSoftComponent;
  let fixture: ComponentFixture<AddSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
