import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <div class="warning-alert">
      Alert Alert - beware!
    </div>
  `,
  styles: [`
    .warning-alert {
      padding:20px;
      margin-bottom: 10px;
      background-color: mistyrose;
      color: red;
      font-size:16px;
    }
  `]
})
export class WarningAlertComponent {
}
