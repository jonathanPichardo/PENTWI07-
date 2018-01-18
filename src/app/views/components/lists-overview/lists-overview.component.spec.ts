import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsOverviewComponent } from './lists-overview.component';

describe('ListsOverviewComponent', () => {
  let component: ListsOverviewComponent;
  let fixture: ComponentFixture<ListsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
