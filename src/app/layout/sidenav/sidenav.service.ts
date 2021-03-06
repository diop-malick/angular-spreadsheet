import { Injectable } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';

@Injectable()
export class SidenavService {
  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open(): Promise<void> {
    return this.sidenav.open();
  }

  public close(): Promise<void> {
    return this.sidenav.close();
  }

  public toggle(isOpen?: boolean): Promise<void> {
    return this.sidenav.toggle(isOpen);
  }
}
