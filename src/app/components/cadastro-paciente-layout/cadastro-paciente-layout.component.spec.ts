import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPacienteLayoutComponent } from './cadastro-paciente-layout.component';

describe('CadastroPacienteLayoutComponent', () => {
  let component: CadastroPacienteLayoutComponent;
  let fixture: ComponentFixture<CadastroPacienteLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPacienteLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPacienteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
