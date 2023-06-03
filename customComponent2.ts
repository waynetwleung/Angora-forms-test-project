
import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'hadar-comp2',
  template: `
    
        <input type="file" class="file-input" (change)="onFileSelected($event)" #fileUpload>

        <div>
            <input class="form-control" [disabled]="true" [value]="value">
            <button class="btn btn-primary" (click)="onClick(fileUpload)" [disabled]="disabled">Attach File</button>
        </div>
    
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: hadarComp2
    }
  ]
})
export class hadarComp2 implements ControlValueAccessor {

onChange = (value: any) => { }
onTouched = () => { }
value = ''
disabled = false 

onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            this.value = file.name;
            console.log(this.value);
            this.onChange(this.value);
        }
    }
onClick(fileUpload: any) {
        this.onTouched();
        fileUpload.click();
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
