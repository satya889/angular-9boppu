import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product12!: Product;
  notify() {
    window.alert(
      'Notification done' +
        this.product12.name +
        ' ' +
        this.product12.description
    );
  }
}
