import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  productsData = [
    {
      title: 'Some text',
      description: 'Short description about this product',
      price: 5.55,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi dignissimos dolorem dolorum ' +
        'eaque eos eum illo incidunt iste minima mollitia non quae repellat repellendus sit suscipit tenetur ullam, veniam!',
      show_detail: false,
      left: 0
    },
    {
      title: 'Hello world',
      description: 'Short descr of another item',
      price: 6.20,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis illo in ipsam ipsum, ' +
        'nesciunt nobis tempore. Ab corporis dolorum eos iste molestiae nemo numquam officiis. Accusantium laudantium natus perspiciatis.',
      show_detail: false,
      left:1
    },
    {
      title: 'Jijna',
      description: 'Jijna description',
      price: 6.20,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis illo in ipsam ipsum, ' +
        'nesciunt nobis tempore. Ab corporis dolorum eos iste molestiae nemo numquam officiis. Accusantium laudantium natus perspiciatis.',
      show_detail: false,
      left: 3
    }
  ]

}
