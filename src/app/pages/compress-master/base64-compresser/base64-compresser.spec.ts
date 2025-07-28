import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64Compresser } from './base64-compresser';

describe('Base64Compresser', () => {
  let component: Base64Compresser;
  let fixture: ComponentFixture<Base64Compresser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Base64Compresser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Base64Compresser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
