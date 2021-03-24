import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPreviewComponent } from './quick-preview.component';

describe('QuickPreviewComponent', () => {
  let component: QuickPreviewComponent;
  let fixture: ComponentFixture<QuickPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
