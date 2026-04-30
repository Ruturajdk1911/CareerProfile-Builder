import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfProjectListComponent } from './self-project-list.component';

describe('SelfProjectListComponent', () => {
  let component: SelfProjectListComponent;
  let fixture: ComponentFixture<SelfProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfProjectListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfProjectListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
