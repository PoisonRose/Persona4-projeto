import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriedadesSkillsComponent } from './propriedades-skills.component';

describe('PropriedadesSkillsComponent', () => {
  let component: PropriedadesSkillsComponent;
  let fixture: ComponentFixture<PropriedadesSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropriedadesSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropriedadesSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
