import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpgToPdf } from './jpg-to-pdf';

describe('JpgToPdf', () => {
  let component: JpgToPdf;
  let fixture: ComponentFixture<JpgToPdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JpgToPdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JpgToPdf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
