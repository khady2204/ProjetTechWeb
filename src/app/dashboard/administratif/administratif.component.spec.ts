import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratifComponent } from './administratif.component';

describe('AdministratifComponent', () => {
  let component: AdministratifComponent;
  let fixture: ComponentFixture<AdministratifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministratifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministratifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
