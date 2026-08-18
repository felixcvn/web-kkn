# Website KKN 2026 — Design & Development Brief

## 1. Project Overview

**Project:** Website KKN 2026  
**Concept:** Interactive KKN Journey  
**Style:** Modern Editorial × Soft Pastel × Interactive

The website is a digital storytelling experience for the KKN group. It should feel like a visual journey rather than a conventional organization/profile website.

### Main Goals
- Modern and visually distinctive
- Interactive but not excessive
- Warm, human, and documentary
- Editorial and contemporary
- Responsive across desktop, tablet, and mobile
- Avoid generic AI-generated/template-like UI
- Prioritize real KKN photography and storytelling

---

## 2. Core Design Concept

### Main Message

> **Satu Tim, Banyak Cerita. Bersama, Memberi Makna.**

The website presents the KKN experience as a journey:

**Who We Are → Where We Go → What We Do → What We Experience → Who We Become**

The visual language combines:
- Editorial web design
- Modern team/SaaS composition
- Soft pastel colors
- Documentary photography
- Curved/organic compositions
- Smooth micro-interactions

The final result should feel like an **interactive digital archive of the KKN journey**.

---

# 3. Visual Direction

## Design Keywords

- Warm
- Editorial
- Human
- Modern
- Soft
- Natural
- Documentary
- Interactive
- Playful but mature
- Premium but approachable

## Main Visual References

### Travel Editorial Reference
Take inspiration from:
- Large typography
- Image-driven hero
- Rounded image cards
- Minimal navigation
- Strong visual hierarchy
- Editorial spacing
- Section numbering
- Storytelling through imagery

### Modern Team / SaaS Reference
Take inspiration from:
- Warm cream background
- Pastel palette
- Portrait carousel
- Curved composition
- Floating cards
- Clean typography
- Spacious layout
- Subtle interactions

### Important

Do **not** copy either reference directly.

Use the visual principles and reinterpret them specifically for a KKN story.

---

# 4. Color Palette

The palette should feel natural, warm, and slightly earthy.

| Role | Color | Hex |
|---|---|---|
| Primary Background | Warm Cream | `#F8F3E9` |
| Primary Text | Soft Black | `#181817` |
| Primary Accent | Sage Green | `#68795A` |
| Secondary Accent | Dusty Peach | `#E8C6AA` |
| Secondary Accent | Soft Pink | `#E6B9B8` |
| Secondary Accent | Muted Lavender | `#D7D0DC` |
| Neutral | Warm White | `#FFFDF8` |

### Color Usage

Approximate visual balance:

- 70% Warm Cream / Neutral
- 15% Black / Dark Text
- 10% Sage Green
- 5% Peach / Pink / Lavender

Do not use every accent color simultaneously.

The overall design should remain calm and mature.

---

# 5. Typography

## Heading Font

Recommended primary font:

**DM Serif Display**

Alternatives:
- Playfair Display
- Cormorant Garamond

Use for:
- Hero headline
- Editorial statements
- Large section headings
- Quotes
- Emotional statements

## Body Font

Recommended:

**Manrope**

Alternatives:
- Plus Jakarta Sans
- DM Sans
- Inter

Manrope is preferred because it feels modern and clean without looking overly generic.

## Typography Combination

Use a serif + sans-serif pairing.

Example:

**Satu Tim, Banyak Cerita.**  
*Bersama, Memberi Makna.*

Serif = emotional/editorial  
Sans-serif = information/interface

## Suggested Scale

### Desktop
- Hero: 72–96px
- Section heading: 48–64px
- Subheading: 28–36px
- Card heading: 20–24px
- Body: 15–18px
- Caption: 12–14px
- Navigation: 13–15px

### Mobile
- Hero: 42–56px
- Section heading: 34–42px
- Subheading: 24–28px
- Body: 14–16px

Typography must maintain strong hierarchy and generous whitespace.

---

# 6. Homepage Structure

The homepage should follow a storytelling flow.

```text
NAVIGATION
    ↓
HERO
    ↓
QUICK FACTS
    ↓
ABOUT / THE PLACE
    ↓
PROGRAMS
    ↓
FIELD NOTES / ACTIVITIES
    ↓
THE PEOPLE
    ↓
GALLERY
    ↓
CLOSING CTA
```

---

# 7. Navigation

Minimal and clean.

Example:

```text
[LOGO]    Beranda   Tentang Kami   Program   Kegiatan   Galeri   Kontak
                                                        [Ikuti Perjalanan Kami →]
```

Behavior:
- Transparent over hero
- Sticky on scroll
- Changes to warm cream/solid background after scrolling
- Smooth transition
- Mobile navigation uses a clean menu/sheet

CTA should be pill-shaped but used sparingly.

---

# 8. Hero Section

The hero is the main visual signature.

Suggested copy:

```text
KKN 2026 BALUNG LOR

Satu Tim, Banyak Cerita.
Bersama, Memberi Makna.

Kami hadir untuk belajar,
berbagi, dan tumbuh bersama masyarakat.

[ Ikuti Perjalanan Kami → ]
```

## Hero Visual

Use a portrait carousel arranged in a soft curved/3D arc.

Concept:

```text
      [side] [photo] [PHOTO] [PHOTO] [photo] [side]
                    ↑
               main focus
```

Characteristics:
- Center cards are larger
- Side cards are smaller
- Side cards are slightly angled
- Outer cards can have reduced opacity
- Rounded corners
- Subtle depth
- Warm background

The hero carousel is the primary signature interaction.

---

# 9. Hero Interaction

### On Load
- Portraits appear with staggered animation
- Headline reveals smoothly
- CTA enters after headline

### Hover
- Portrait scales slightly
- Shadow/depth increases
- Brightness or overlay changes subtly

### Carousel
- Can auto-move slowly
- Supports drag/swipe
- Desktop: mouse drag
- Mobile: horizontal touch swipe

Animation must remain subtle.

---

# 10. Quick Facts

Immediately after the hero.

Example:

```text
Lokasi
Balung Lor, Jember

Durasi
45 Hari

Anggota
12 Orang

Program
8 Program Kerja
```

Use:
- Simple outline icons
- Circular pastel icon backgrounds
- Dark text
- Generous spacing

Avoid colorful icon collections.

---

# 11. About / The Place

Suggested heading:

> **Kami hadir, bukan hanya untuk menjalankan program.**

Layout:

```text
TEXT                         IMAGE
─────────────────            ┌───────────────────┐
Kami hadir untuk             │                   │
belajar, berbagi,            │      PHOTO        │
dan tumbuh                   │                   │
bersama masyarakat.          └───────────────────┘
```

Use:
- One strong documentary photo
- Short paragraph
- Optional floating quote card

Example quote:

> Bergerak bersama, bermakna selamanya.

---

# 12. Program Kerja

Suggested heading:

> **Program yang kami jalankan untuk memberi dampak nyata.**

Use a horizontal card carousel.

Example programs:
- Edukasi & Literasi
- Digitalisasi Desa
- Pengembangan UMKM
- Lingkungan & Kesehatan
- Sosialisasi & Pelatihan

Card structure:

```text
[ IMAGE ]

Program Title

Short description...

→
```

Characteristics:
- Large image
- Rounded corners
- Small pastel category badge
- Short description
- Small arrow interaction

Do not make these cards look like dashboard widgets.

---

# 13. Field Notes / Activities

Suggested heading:

> **Setiap momen, menjadi kenangan.**

Use an editorial/masonry gallery.

Do not make every image the same size.

Example:

```text
┌──────────┐  ┌─────────────────┐
│          │  │                 │
│  PHOTO   │  │      PHOTO      │
│          │  │                 │
└──────────┘  └─────────────────┘

       ┌──────────────┐
       │              │
       │     PHOTO    │
       │              │
       └──────────────┘
```

On hover:
- Slight image zoom
- Caption overlay
- Date
- Activity category

Clicking an image opens a fullscreen lightbox.

---

# 14. The People

Suggested heading:

> **Orang-orang di balik perjalanan ini.**

Show members as portrait-focused elements instead of conventional profile cards.

Example:

```text
[PHOTO] [PHOTO] [PHOTO] [PHOTO]

 Name     Name     Name     Name
```

Hover:
- Slight zoom
- Name
- Role
- Small metadata

Optional detail modal:
- Name
- Role
- Short bio
- Program responsibility
- Instagram/social link

---

# 15. Gallery

The gallery should feel like an editorial photo archive.

Use:
- Masonry layout
- Different image sizes
- Large featured image
- Small supporting images
- Fullscreen lightbox
- Caption/date/category

Real KKN photography should dominate the website.

Avoid stock photography whenever possible.

---

# 16. Closing Section

Suggested headline:

> **Perjalanan ini belum selesai.**

Supporting text:

> Ikuti terus cerita kami, dan jadilah bagian dari perjalanan yang berdampak.

CTA:

**Ikuti Kami di Instagram →**

Possible background:
- Soft sage green
- Warm cream
- Large photo
- Subtle texture/grain

The ending should feel emotional and memorable rather than like a generic footer CTA.

---

# 17. Animation Direction

Animations should support storytelling.

## Recommended
- Fade up
- Fade in
- Stagger
- Image reveal
- Scale on hover
- Light parallax
- Horizontal scroll
- Text reveal
- Cursor interaction
- Smooth section transitions

## Avoid
- Excessive bounce
- Spinning elements
- Excessive floating
- Animating every card
- Unnecessary loading animations
- Heavy motion on mobile

Principle:

> **Animation should support storytelling, not distract from it.**

---

# 18. Signature Interactions

At minimum, implement these three:

## 01 — Hero Portrait Carousel
The main visual signature.

## 02 — Program Carousel
Horizontal drag/scroll interaction.

## 03 — Editorial Gallery
Masonry layout + hover + fullscreen viewer.

These three are enough to make the website feel highly interactive without becoming overwhelming.

---

# 19. Responsive Design

## Desktop
- Large typography
- Wide compositions
- Multi-column layouts
- Curved portrait carousel
- Horizontal interactions
- Large documentary images

## Tablet
- Reduced typography
- 2-column layouts
- Smaller carousel
- Simplified spacing

## Mobile
Hero:

```text
KKN 2026

Satu Tim,
Banyak Cerita.

[PHOTO]
[PHOTO]
[PHOTO]

[Ikuti Perjalanan Kami]
```

Behavior:
- Portrait carousel becomes horizontal swipe
- Program carousel remains horizontally scrollable
- Gallery becomes 2-column masonry
- Navigation becomes mobile menu
- Reduce animation complexity
- Maintain generous whitespace

---

# 20. Design System

## Border Radius

Recommended:
- Cards: 20–28px
- Images: 20–28px
- Buttons: 999px
- Badges: 999px

Maintain consistency.

## Shadow

Use very soft shadows.

Avoid:
- Hard shadows
- Neon glow
- Excessive drop shadows

## Icons

Recommended library:

**Lucide Icons**

Style:
- Outline
- 1.5–2px stroke
- Simple
- Minimal

---

# 21. Image Direction

Photography is a major design element.

Prioritize:
1. Group photos
2. Interaction with community
3. Program activities
4. Village/environment
5. Program documentation
6. Member portraits

Photo characteristics:
- Natural
- Warm
- Human
- Documentary
- Authentic
- Not overly posed

Use consistent image treatment across the website.

---

# 22. Anti-AI-Slop Rules

These rules are mandatory.

## Avoid

- Generic gradient hero
- Excessive glassmorphism
- Repeated 3-column cards
- Every element being pill-shaped
- Huge colorful icons
- Excessive rounded corners
- Gradient text everywhere
- Generic SaaS copywriting
- Excessive animation
- Same layout repeated in every section
- Stock photos as the primary visual
- Overuse of UI components

## Prefer

- Real photography
- Strong typography
- Asymmetric layouts
- Editorial composition
- Generous whitespace
- Different layouts per section
- Purposeful interactions
- Personal copywriting
- Consistent visual identity
- Subtle texture/grain
- Human-centered storytelling

---

# 23. Recommended Tech Stack

## Frontend

### Next.js
Purpose:
- Routing
- Rendering
- SEO
- Image optimization
- Application structure

### TypeScript
Purpose:
- Type safety
- Maintainability
- Data models
- Component props

### Tailwind CSS
Purpose:
- Layout
- Responsive styling
- Spacing
- Typography
- Custom design system

### Motion
Purpose:
- Entrance animation
- Scroll animation
- Hero carousel
- Hover interaction
- Page transitions
- Image reveal

### Lenis (Optional)
Purpose:
- Smooth scrolling
- More polished scroll experience

Use only if performance remains good, especially on mobile.

### shadcn/ui
Use only as UI primitives:
- Button
- Dialog
- Sheet
- Tooltip
- Navigation

Components must be customized to match the KKN design system.

---

# 24. Backend

## Supabase

Use Supabase for:

### PostgreSQL
Store:
- Members
- Programs
- Activities
- Gallery
- Articles
- Settings

### Storage
Store:
- Member photos
- Activity photos
- Program photos
- Gallery images

### Auth
Admin authentication.

---

# 25. Admin Dashboard

The public website should prioritize visual storytelling.

An admin dashboard can be provided separately.

```text
/admin

Dashboard
├── Members
├── Programs
├── Activities
├── Gallery
├── Articles
└── Settings
```

Admin capabilities:
- Add/edit/delete members
- Add/edit/delete programs
- Add/edit/delete activities
- Upload gallery photos
- Manage articles
- Update website information

The admin UI does not need to share the exact editorial visual style of the public website. It can prioritize usability.

---

# 26. Database Structure

## members

```text
id
name
role
photo
bio
instagram
created_at
```

## programs

```text
id
title
description
category
image
order
created_at
```

## activities

```text
id
title
description
date
location
cover_image
created_at
```

## gallery

```text
id
activity_id
image
caption
created_at
```

## articles

```text
id
title
slug
content
cover_image
published_at
created_at
```

---

# 27. Deployment

Recommended architecture:

```text
GitHub
   ↓
Vercel
   ↓
Next.js

Supabase
   ├── PostgreSQL
   ├── Storage
   └── Auth
```

GitHub:
- Version control
- Collaboration
- Branch management

Vercel:
- Frontend deployment
- Preview deployments
- Production deployment

Supabase:
- Database
- Storage
- Authentication

---

# 28. Suggested Project Structure

```text
app/
├── page.tsx
├── about/
├── programs/
├── activities/
├── gallery/
├── contact/
└── admin/

components/
├── navbar/
├── hero/
├── portrait-carousel/
├── quick-facts/
├── about/
├── program-carousel/
├── activities/
├── gallery/
├── members/
└── footer/

lib/
├── supabase/
└── utils/

data/
└── constants/

public/
├── images/
└── fonts/
```

Components should be modular and reusable.

---

# 29. Development Workflow

## Phase 01 — Design

1. Finalize visual identity
2. Finalize colors
3. Finalize typography
4. Design navbar
5. Design hero
6. Design component system
7. Design responsive layouts
8. Create Figma design

## Phase 02 — Frontend Foundation

1. Setup Next.js
2. Setup TypeScript
3. Setup Tailwind
4. Configure fonts
5. Create design tokens
6. Build base components
7. Build navbar
8. Build hero

## Phase 03 — Main Sections

1. Quick facts
2. About
3. Program carousel
4. Activities
5. People
6. Gallery
7. Closing CTA
8. Footer

## Phase 04 — Interaction

1. Hero carousel
2. Scroll reveal
3. Program drag/scroll
4. Hover interactions
5. Gallery lightbox
6. Image reveal
7. Smooth scrolling

## Phase 05 — Backend

1. Create Supabase project
2. Create database tables
3. Configure Storage
4. Configure Auth
5. Connect Next.js
6. Build admin CRUD

## Phase 06 — Content

1. Add members
2. Add programs
3. Add activities
4. Upload photos
5. Add gallery
6. Add articles/content

## Phase 07 — Optimization

1. Responsive testing
2. Performance testing
3. Image optimization
4. SEO
5. Accessibility
6. Mobile testing
7. Cross-browser testing
8. Production deployment

---

# 30. Final Tech Stack

```text
FRONTEND
├── Next.js
├── TypeScript
├── Tailwind CSS
├── shadcn/ui
├── Motion
└── Lenis (optional)

BACKEND
├── Supabase
├── PostgreSQL
├── Supabase Storage
└── Supabase Auth

DEVELOPMENT
├── Figma
├── Git
└── GitHub

DEPLOYMENT
└── Vercel
```

---

# 31. Final Design Statement

The KKN 2026 website should be an **interactive digital storytelling experience**, not a conventional KKN profile website.

The visual system combines:

**Warm Cream + Sage Green + Dusty Peach + Soft Pink + Muted Lavender**

with:

**Editorial Serif + Modern Sans-serif**

The hero should feature a **curved portrait carousel** as the primary visual signature.

The rest of the website should use:
- Documentary photography
- Editorial layouts
- Horizontal program interactions
- Masonry gallery
- Subtle motion
- Strong typography
- Generous whitespace

The final experience should communicate:

> **A warm digital archive of our KKN journey.**

The website should never feel like:
- A generic organization website
- A dashboard
- A SaaS landing page
- A template
- An AI-generated UI

The goal is for visitors to feel like they are **following the journey of a real group of people who lived, worked, connected, and created memories in a community.**
