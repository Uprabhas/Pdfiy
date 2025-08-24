import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCompress } from './image-compress';

describe('ImageCompress', () => {
  let component: ImageCompress;
  let fixture: ComponentFixture<ImageCompress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageCompress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCompress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
