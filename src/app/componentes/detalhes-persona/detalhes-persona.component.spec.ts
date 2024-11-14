import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPersonaComponent } from './detalhes-persona.component';

describe('DetalhesPersonaComponent', () => {
  let component: DetalhesPersonaComponent;
  let fixture: ComponentFixture<DetalhesPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesPersonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
