
import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'hadar-comp1',
  template: `
    
        <h1>{{value}}</h1>
        <button (click)='increment()'>Increment</button>
        <button (click)='decrement()'>Decrement</button>
    
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: hadarComp1
    }
  ]
})
export class hadarComp1 implements ControlValueAccessor {

onChange = (value: any) => { }
onTouched = () => { }
value = 0
disabled = false 

increment() {
        this.value++;
        this.onChange(this.value);
        this.onTouched();
    }
decrement() {
        this.value--;
        this.onChange(this.value);
        this.onTouched();
    }

writeValue(value: any) {
    this.value = value
  }
  
  registerOnChange(onChange: any) {
    this.onChange = onChange
  }
  
  registerOnTouched(onTouched: any){
    this.onTouched = onTouched
  }
  
  setDisabledState(disabled: boolean): void {
    this.disabled = disabled
  }
}
