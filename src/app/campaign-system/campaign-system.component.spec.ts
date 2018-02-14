import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignSystemComponent } from './campaign-system.component';

describe('CampaignSystemComponent', () => {
  let component: CampaignSystemComponent;
  let fixture: ComponentFixture<CampaignSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
