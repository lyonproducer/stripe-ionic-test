import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Stripe } from '@capacitor-community/stripe';
import { Capacitor } from '@capacitor/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {

    if (Capacitor.isPluginAvailable("Stripe")) {
      Stripe.initialize({
        publishableKey: environment.stripeKey,
      });
      
      console.log('init Capacitor Stripe');

    }


  }
}
