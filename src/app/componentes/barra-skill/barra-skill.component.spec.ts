import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSkillComponent } from './barra-skill.component';

describe('BarraSkillComponent', () => {
  let component: BarraSkillComponent;
  let fixture: ComponentFixture<BarraSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarraSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
