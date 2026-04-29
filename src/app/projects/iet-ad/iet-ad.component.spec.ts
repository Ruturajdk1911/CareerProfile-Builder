import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IETADComponent } from './iet-ad.component';

describe('IETADComponent', () => {
  let component: IETADComponent;
  let fixture: ComponentFixture<IETADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IETADComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IETADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
