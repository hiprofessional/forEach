import { TestBed } from '@angular/core/testing';

import { QuickPanelService } from './quick-panel.service';

describe('QuickPanelService', () => {
  let service: QuickPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuickPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
