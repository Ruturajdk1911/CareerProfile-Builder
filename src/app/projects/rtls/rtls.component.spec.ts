import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtlsComponent } from './rtls.component';

describe('RtlsComponent', () => {
  let component: RtlsComponent;
  let fixture: ComponentFixture<RtlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RtlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
