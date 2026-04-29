import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IFITComponent } from './i-fit.component';

describe('IFITComponent', () => {
  let component: IFITComponent;
  let fixture: ComponentFixture<IFITComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IFITComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IFITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
