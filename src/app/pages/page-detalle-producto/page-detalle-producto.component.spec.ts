import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetalleProductoComponent } from './page-detalle-producto.component';

describe('PageDetalleProductoComponent', () => {
  let component: PageDetalleProductoComponent;
  let fixture: ComponentFixture<PageDetalleProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDetalleProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
