class hadarComp1 {
  template = `
        <h1>{{value}}</h1>
        <button (click)='increment()'>Increment</button>
        <button (click)='decrement()'>Decrement</button>
    `;

  onChange = (value: any) => {};

  onTouched = () => {};

  value = 0;

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
}

class hadarComp2 {
  template = `
        <input type="file" class="file-input" (change)="onFileSelected($event)" #fileUpload>

        <div>
            <input class="form-control" [disabled]="true" [value]="value">
            <button class="btn btn-primary" (click)="onClick(fileUpload)" [disabled]="disabled">Attach File</button>
        </div>
    `;

  onChange = (value: any) => {};

  onTouched = () => {};

  value = '';

  disabled = false;

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
}

module.exports = [hadarComp1, hadarComp2]