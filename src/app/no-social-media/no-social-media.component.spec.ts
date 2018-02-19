import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSocialMediaComponent } from './no-social-media.component';

describe('NoSocialMediaComponent', () => {
  let component: NoSocialMediaComponent;
  let fixture: ComponentFixture<NoSocialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSocialMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
