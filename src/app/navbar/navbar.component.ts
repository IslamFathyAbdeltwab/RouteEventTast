import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const darkBtn = document.getElementById('darkModeToggle');
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const html = document.documentElement;

    if (darkBtn) {
      this.renderer.listen(darkBtn, 'click', () => {
        html.classList.toggle('dark');
      });
    }

    if (menuBtn && mobileMenu) {
      this.renderer.listen(menuBtn, 'click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }
}
