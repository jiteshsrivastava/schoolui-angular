# Gurukul Academy – Angular Migration

React → Angular migration of the school website UI.

## Tech Stack
- Angular 19 (Standalone Components)
- Bootstrap 5
- TypeScript
- SCSS

## Project Structure
```
src/app/
  components/
    header/          – Responsive navbar with Angular Router links
    footer/          – Three-column footer with school info
    home/            – Welcome page with image slider + info cards
    img-slider/      – Bootstrap carousel (no external lib)
    about/           – About the school & vision
    notification/    – Admission notice + co-curricular activities
    facilities/      – Computer/Science/Library carousels
    admission/       – Admission procedure + form download
    gallery/         – Facebook embedded videos/posts
    contact/         – Address/Email/Phone cards + Google Map
    public-disclosure/ – CBSE public documents download links
```

## Getting Started

```bash
npm install
ng serve
```

Open http://localhost:4200

## Build for Production

```bash
ng build
```

Output in `dist/schoolui-angular/browser/`
