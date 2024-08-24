import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';  // Importe as rotas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Fornece o roteamento
  ]
}).catch(err => console.error(err));
