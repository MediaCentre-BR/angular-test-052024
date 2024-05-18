import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should call onAdd and trigger alert when button is clicked', () => { // Usando fit para focar neste teste específico
    spyOn(window, 'alert');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(window.alert).toHaveBeenCalledWith('Em desenvolvimento!');
  });

  it('should not trigger onAdd when other element is clicked', () => {
    spyOn(component, 'onAdd');
    const div = fixture.debugElement.nativeElement.querySelector('div');
    div.click();
    expect(component.onAdd).not.toHaveBeenCalled();
  });
});
