import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pdf } from './pdf';

describe('Pdf', () => {
  let component: Pdf;
  let fixture: ComponentFixture<Pdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pdf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
