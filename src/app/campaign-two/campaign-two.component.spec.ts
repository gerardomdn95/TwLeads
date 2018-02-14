import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignTwoComponent } from './campaign-two.component';

describe('CampaignTwoComponent', () => {
  let component: CampaignTwoComponent;
  let fixture: ComponentFixture<CampaignTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
