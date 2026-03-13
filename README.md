## EPTPRAVAHAA – Edu Tech Solutions Website

Full‑stack application for EPTPRAVAHAA, with a marketing site, course information (Edupravahaa), and an online enrollment flow wired to a Django REST API.

### Tech Stack

- **Frontend**: React (Create React App), React Router, React Feather Icons, React Toastify, plain CSS (no Bootstrap for navbar/hero)
- **Backend**: Django 6, Django REST Framework

---

## Project Structure

```text
EPTpravahaa_website/
├── Frontend/
│   ├── public/
│   └── src/
│       ├── components/          # Navbar, HeroSection, sections, shared components
│       ├── Pages/               # Route-level pages (Home, Enrollment, Edupravahaa, etc.)
│       ├── Contextapi/
│       │   └── RegistrationContext.jsx  # Enrollment API integration
│       ├── Routers/Routers.jsx  # All routes and page composition
│       └── styles/              # Global + component CSS (Navbar.css, HeroSection.css, etc.)
└── Backend/
    ├── backend/                 # Django project (settings, urls, wsgi/asgi)
    └── ept/                     # App with Enrollment model, API views, urls
```

---

## Running the Project

### Backend (Django)

From `Backend/`:

```bash
py -m venv venv
venv\Scripts\activate
pip install -r requirements.txt

py manage.py makemigrations
py manage.py migrate
py manage.py runserver 8001
```

The API will be available at `http://127.0.0.1:8001/`.

**Email in development**

For local development, enable console email in `Backend/ept/.env`:

```env
USE_CONSOLE_EMAIL=true
```

With this set, emails are printed to the Django console instead of using real SMTP.

### Frontend (React)

From `Frontend/`:

```bash
npm install
npm start
```

The site runs at `http://localhost:3000`.

---

## Frontend Pages & API Usage

### 1. Enrollment Page – `/enroll`

**File**: `Frontend/src/Pages/Enrollment.jsx`  
**Context**: `Frontend/src/Contextapi/RegistrationContext.jsx`

1. Local validation runs in `Enrollment.jsx`.
2. A `FormData` object is created and passed to `submitRegistration(formData)` from `RegistrationContext`.

**RegistrationContext API call** (`RegistrationContext.jsx`):

const apiUrl = "http://127.0.0.1:8001/api/enrollments/";
const response = await axios.post(apiUrl, payload);
```
The backend is responsible for:

- Validating and saving the enrollment.
- Optionally sending notification email (using settings in `backend/settings.py`).

If the API returns a non‑2xx response, `submitRegistration` throws an error which is surfaced as a toast in `Enrollment.jsx`.



## Scripts

From `Frontend/`:

- `npm start` – start React dev server
- `npm run build` – create production build

From `Backend/`:

- `py manage.py runserver 8001` – start Django dev server
- `py manage.py makemigrations` / `migrate` – manage database schema

---

## Deployment

### Fixing 404 on routes like `/contact` (Nginx)

When deployed with Nginx, direct URLs like `/contact` or `/enroll` return 404 because Nginx looks for a physical file. For React SPAs, you must serve `index.html` for all routes so React Router can handle them.

Add this to your Nginx config:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

A full example is in `nginx-spa.conf` in the project root. Update the `root` path to your build output (e.g. `Frontend/build`), then reload Nginx:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

### Netlify / Vercel

- **Netlify**: `Frontend/public/_redirects` is included; it copies to the build and enables SPA routing.
- **Vercel**: `vercel.json` rewrites all routes to `index.html`.

---

## Notes

- In development, ensure **both** servers run:
  - React: `http://localhost:3000`
  - Django API: `http://127.0.0.1:8001`
- If enrollment requests fail, check:
  - Django console for traceback (email or validation errors)
  - CORS/settings if you change ports or hosts.

