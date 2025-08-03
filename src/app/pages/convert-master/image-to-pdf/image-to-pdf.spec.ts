import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToPdf } from './image-to-pdf';

describe('ImageToPdf', () => {
  let component: ImageToPdf;
  let fixture: ComponentFixture<ImageToPdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageToPdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageToPdf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
