import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAgregarProductoComponent } from './page-agregar-producto.component';

describe('PageAgregarProductoComponent', () => {
  let component: PageAgregarProductoComponent;
  let fixture: ComponentFixture<PageAgregarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAgregarProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAgregarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
