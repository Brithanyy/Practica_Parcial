import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListaProductosComponent } from './page-lista-productos.component';

describe('PageListaProductosComponent', () => {
  let component: PageListaProductosComponent;
  let fixture: ComponentFixture<PageListaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageListaProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
