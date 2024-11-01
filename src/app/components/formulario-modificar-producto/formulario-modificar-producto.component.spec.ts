import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioModificarProductoComponent } from './formulario-modificar-producto.component';

describe('FormularioModificarProductoComponent', () => {
  let component: FormularioModificarProductoComponent;
  let fixture: ComponentFixture<FormularioModificarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioModificarProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioModificarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
