import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IETAdamsComponent } from './iet-adams.component';

describe('IETAdamsComponent', () => {
  let component: IETAdamsComponent;
  let fixture: ComponentFixture<IETAdamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IETAdamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IETAdamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
