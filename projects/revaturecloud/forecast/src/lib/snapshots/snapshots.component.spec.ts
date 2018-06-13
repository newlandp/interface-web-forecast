import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapshotsComponent } from './snapshots.component';
import { ChartsModule } from 'ng2-charts';


describe('SnapshotsComponent', () => {
  let component: SnapshotsComponent;
  let fixture: ComponentFixture<SnapshotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapshotsComponent ],
      imports: [ ChartsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapshotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
