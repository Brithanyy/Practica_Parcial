import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAgregarProductoComponent } from './formulario-agregar-producto.component';

describe('FormularioAgregarProductoComponent', () => {
  let component: FormularioAgregarProductoComponent;
  let fixture: ComponentFixture<FormularioAgregarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAgregarProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAgregarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
