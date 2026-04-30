import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core'; // Changed this
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(), // Replaced provideZoneChangeDetection
    provideRouter(routes), 
    provideHttpClient(withFetch())
  ]
};
