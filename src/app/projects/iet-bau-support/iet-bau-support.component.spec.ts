import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IetBauSupportComponent } from './iet-bau-support.component';

describe('IetBauSupportComponent', () => {
  let component: IetBauSupportComponent;
  let fixture: ComponentFixture<IetBauSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IetBauSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IetBauSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
