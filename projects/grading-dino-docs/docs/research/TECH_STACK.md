# 🦖 GradingDino Technology Stack

## Stack Overview

```
Backend:        Django 5.0
Database:       PostgreSQL 16
ORM:            Django ORM
Auth:           Django Auth (built-in)
Password Hash:  Argon2
Sessions:       Django Sessions
Templates:      Django Templates (Server-Side Rendering)
Frontend:       Pico.css (No JavaScript)
Container:      Docker + Docker Compose
Language:       Python 3.11
```

---

## Framework Selection: Django vs Flask vs FastAPI

**Feature Comparison:**

| Feature | Django | Flask | FastAPI |
|---------|--------|-------|---------|
| Admin Interface | ✅ Built-in | ❌ Manual | ❌ Manual |
| Authentication | ✅ Built-in | ⚠️ Extensions | ❌ Manual |
| Forms & Validation | ✅ Built-in | ⚠️ Extensions | ❌ Manual |
| Server Templates | ✅ Built-in | ✅ Built-in | ❌ Manual |
| ORM | ✅ Built-in | ⚠️ Extensions | ⚠️ External |

✅ = Included | ⚠️ = Requires setup | ❌ = Build from scratch

---

### 🎯 Why Django

**Built-in Features:**
- **Admin Panel** → Complete grade management UI for professors without building custom interface
- **Authentication** → User roles and permissions out-of-the-box
- **Forms + Validation** → Automatic form generation and server-side validation
- **Security** → CSRF, XSS, SQL injection protection by default
- **ORM** → Type-safe database operations

**Django Philosophy:**
- "Batteries included" approach
- Convention over configuration
- Security by default
- Rapid development focus

**Perfect match for grade management system requirements.**

---

### Flask Analysis

**Characteristics:**
- Lightweight microframework
- Requires extensions: Flask-Login, Flask-WTF, Flask-SQLAlchemy
- More architectural decisions required upfront
- Greater flexibility at cost of setup time

**Best suited for:** Microservices, custom architectures, when full control is needed

---

### FastAPI Analysis

**Characteristics:**
- API-first design (built for REST/GraphQL backends)
- No template engine (not designed for server-rendered applications)
- No built-in admin interface
- Async/await patterns (unnecessary for standard CRUD operations)

**Best suited for:** Microservices, mobile/SPA backends, high-throughput APIs

---

## Component Decisions

### 🗄️ PostgreSQL

**Selected for:**
- Docker-native integration (avoids file permission issues)
- Concurrent write support (multiple professors can grade simultaneously)
- Production-ready deployment path
- Full ACID compliance for data integrity

---

### 🔐 Argon2 Password Hashing

**Selection Rationale:**
- **Security Standard**: Winner of Password Hashing Competition (2015)
- **Luxembourg Connection**: Developed at University of Luxembourg - provides strong local academic credibility
- **Django Integration**: Native support via `django.contrib.auth.hashers.Argon2PasswordHasher`
- **Modern Algorithm**: Memory-hard design, resistant to GPU/ASIC brute-force attacks (superior to bcrypt/PBKDF2)

The Luxembourg academic origin strengthens our technical justification significantly.

---

### 🎨 Pico.css + Server-Side Rendering

**Pico.css Selection:**
- Minimalist single-file CSS framework (~10KB)
- Semantic HTML - automatically styles standard HTML5 elements without custom classes
- Zero learning curve - just write HTML
- Professional, modern appearance by default
- Perfect for Django templates

**Server-Side Rendering Decision:**
- Django's native and recommended approach
- Security: All validation and logic server-side
- Simplicity: Standard HTTP POST → Process → Render cycle
- No JavaScript complexity
- Django CSRF protection works seamlessly with forms

---

### 🐳 Docker + Docker Compose

**Project Requirements:**
- System must start with single `docker compose up` command
- PostgreSQL + Django in isolated containers
- Environment consistency across team members
- Production-like architecture from start

---

## Constraint Analysis

| Constraint | Impact | Solution |
|------------|--------|----------|
| **Limited development time** | Need maximum efficiency | Django built-in features |
| **Team experience level** | Minimize complexity | Server-side rendering |
| **Admin interface required** | Professors need grade management | Django admin panel |
| **Security requirements** | Password hashing, auth, CSRF | Django security + Argon2 |
| **Docker requirement** | Container orchestration | Docker Compose |
| **CRUD operations focus** | Core functionality | Django admin + forms |

---

## Decision Summary

**Django** delivers a complete, secure grade management system with minimal custom development required.

**Flask** would require more manual implementation of features Django provides by default.

**FastAPI** is optimized for API backends, not server-rendered web applications.

**Our conclusion: Django is the optimal choice for this project's specific requirements and constraints.**

---

## Technology Justifications

**Core Stack:**
- **Django**: Complete admin panel, authentication, and form system in one framework
- **PostgreSQL**: Docker-native, concurrent-safe, production-ready relational database
- **Argon2**: Most secure password hashing with Luxembourg academic provenance (University of Luxembourg)
- **Django ORM**: Integrated, type-safe database layer with SQL injection prevention
- **Pico.css**: Minimal CSS framework requiring no custom classes
- **Server-Side Rendering**: Django's default approach - simpler development, stronger security
- **Docker + Compose**: Project requirement ensuring environment consistency

---

## Security Architecture

**Server-Side Rendering Benefits:**
- ✅ Minimal client-side attack surface
- ✅ Server-side validation cannot be bypassed
- ✅ Django CSRF protection on all forms
- ✅ No exposed API endpoints
- ✅ Secure session management by default

**Argon2 Implementation:**
- ✅ Winner of Password Hashing Competition
- ✅ Memory-hard algorithm (GPU/ASIC resistant)
- ✅ Developed at University of Luxembourg
- ✅ Superior to bcrypt and PBKDF2

---

## 🤖 Documentation Credits

**AI Contributions (Claude Code):**
- Document structure and formatting
- Framework comparison analysis
- Security justifications and technical explanations
- Decision matrix construction
- Technical writing and organization

**Human Contributions:**
- All technology selections (Django, PostgreSQL, Pico.css, Argon2)
- Project constraint assessment
- Team capability evaluation
- Server-side rendering decision
- Recognition of Luxembourg connection for Argon2

**Collaborative Process:**
This document represents collaborative research between the development team and Claude Code AI assistant. Claude Code provided technical analysis, comparisons, and documentation structure, while all final architectural decisions were made by the human development team based on project requirements and constraints.
