import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePortfolioComponent } from './resume-portfolio.component';

describe('ResumePortfolioComponent', () => {
  let component: ResumePortfolioComponent;
  let fixture: ComponentFixture<ResumePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumePortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumePortfolioComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
