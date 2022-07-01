import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorviewComponent } from './actorview.component';

describe('ActorviewComponent', () => {
  let component: ActorviewComponent;
  let fixture: ComponentFixture<ActorviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
