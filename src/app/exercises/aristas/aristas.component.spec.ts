import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AristasComponent } from './aristas.component';

describe('AristasComponent', () => {
  let component: AristasComponent;
  let fixture: ComponentFixture<AristasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AristasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AristasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
