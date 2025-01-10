import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindsComponent } from './tailwinds.component';

describe('TailwindsComponent', () => {
  let component: TailwindsComponent;
  let fixture: ComponentFixture<TailwindsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailwindsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailwindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
