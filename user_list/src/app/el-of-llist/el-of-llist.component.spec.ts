import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElOfLlistComponent } from './el-of-llist.component';

describe('ElOfLlistComponent', () => {
  let component: ElOfLlistComponent;
  let fixture: ComponentFixture<ElOfLlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElOfLlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElOfLlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
