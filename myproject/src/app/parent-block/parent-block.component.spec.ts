import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBlockComponent } from './parent-block.component';

describe('ParentBlockComponent', () => {
  let component: ParentBlockComponent;
  let fixture: ComponentFixture<ParentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
