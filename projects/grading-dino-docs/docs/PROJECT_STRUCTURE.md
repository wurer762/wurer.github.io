# GradingDino Project Structure Guide

This document explains every folder and important file in the GradingDino project, what they do, and which ones we modified.

---

## 📁 Root Level Structure

```
GradingDino/
├── agents/              # AI agent configuration files
├── app/                 # Django application code (WE MODIFIED)
├── assets/              # Project assets (logos, images)
├── docs/                # All project documentation (WE MODIFIED)
├── scripts/             # Utility scripts
├── docker-compose.yml   # Docker orchestration (WE CREATED)
└── README.md            # Project overview
```

---

## 🤖 agents/ - AI Agent Files

**Purpose:** Configuration files for AI assistants (like Claude Code) working on this project.

**Files:**
- `project-agent.md` - Main agent file with academic requirements, deadlines, tech stack decisions
- `CLAUDE.md` - Quick reference guide for Claude Code with commands and architecture info

**Status:** ✅ Created and customized by us

**Why we need this:**
- Helps AI understand our project requirements
- Documents our academic constraints (deadlines, grading criteria)
- Ensures AI-generated code includes educational comments
- Makes future AI sessions more productive

---

## 💻 app/ - Django Application (WE MODIFIED)

**Purpose:** Contains all the Django web application code.

### Main Files:

#### `Dockerfile` ✅ (WE CREATED)
- **What it does:** Instructions to build the Django container image
- **Key features:**
  - Uses Python 3.11 base image
  - Installs PostgreSQL client libraries
  - Copies requirements.txt and installs Python packages
  - Auto-creates Django project on first run
- **Lines to understand:** 29 (base image), 66-73 (system packages), 106-107 (pip install)

#### `requirements.txt` ✅ (WE CREATED)
- **What it does:** Lists all Python packages our project needs
- **Key packages:**
  - `Django~=5.0.0` - Web framework
  - `psycopg2-binary>=2.9.9` - PostgreSQL database adapter
  - `argon2-cffi>=23.1.0` - Secure password hashing (University of Luxembourg!)
  - `python-decouple>=3.8` - Environment variable management

#### `manage.py` (Django auto-generated)
- **What it does:** Command-line tool for Django administrative tasks
- **How to use:** `python manage.py <command>`
- **Common commands:** `migrate`, `runserver`, `createsuperuser`, `makemigrations`

### Subdirectories:

#### `app/gradingdino/` - Django Project Settings
**Purpose:** Main configuration for the entire Django project

**Files:**
- `settings.py` ✅ (WE MODIFIED)
  - **What:** Main Django configuration
  - **What we changed:**
    - Lines 79-90: PostgreSQL database connection (instead of SQLite)
    - Lines 97-102: Argon2 password hashing configuration
  - **Environment variables used:** DB_ENGINE, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT

- `urls.py` (Default Django)
  - **What:** Root URL routing - maps URLs to views
  - **Status:** Not modified yet, will connect to grades app URLs later

- `wsgi.py` (Default Django)
  - **What:** WSGI (Web Server Gateway Interface) entry point for production deployment
  - **Status:** Default, no changes needed

- `asgi.py` (Default Django)
  - **What:** ASGI (Async) entry point for async/websocket support
  - **Status:** Default, not using async features currently

#### `app/grades/` - Main Application (Currently Empty)
**Purpose:** Django app for managing students, professors, and grades

**Files (all auto-generated, not modified yet):**
- `models.py` - Database models (Student, Professor, Grade) - TO DO
- `views.py` - View logic (display grades, create grades) - TO DO
- `admin.py` - Admin panel configuration - TO DO
- `tests.py` - Unit tests - TO DO
- `apps.py` - App configuration (auto-generated)
- `migrations/` - Database migration files (auto-created when we add models)

---

## 📚 docs/ - Project Documentation

**Purpose:** All planning, research, and reflection documents for academic submission.

### Subdirectories:

#### `docs/instructions/` (Original)
**Purpose:** Contains the original project assignment PDF from the professor
**Status:** ✅ Original files, do not modify

#### `docs/planning/` (TO DO - 30 points!)
**Purpose:** Planning documentation required for submission
**Required content:**
- Personas (student and professor personas)
- User Stories (minimum 12 with acceptance criteria)
- MoSCoW prioritization
- System architecture diagrams
- ER (Entity-Relationship) database diagram

**Status:** ⏳ In progress
**Deadline:** November 17, 2025 - 16:30
**Grade weight:** 30 points

#### `docs/research/` ✅ (WE CREATED)
**Purpose:** Research and technology justification documents

**Files:**
- `TECH_STACK.md` ✅
  - **What:** Detailed comparison of Django vs Flask vs FastAPI
  - **Why we chose Django:** Built-in admin, authentication, forms, security
  - **Other decisions:** PostgreSQL, Argon2, Pico.css, server-side rendering
  - **Status:** Complete, ready for submission

**Status:** ⏳ Partially complete
**Grade weight:** Part of 20 points for research documentation

#### `docs/planner/` (TO DO - 10 points!)
**Purpose:** MS Planner board exports showing task management
**Required content:**
- Screenshots or exports of MS Planner board
- Shows task workflow: Backlog → Ready → In Progress → Review → Done
- Demonstrates team collaboration

**Status:** ⏳ Not started
**Grade weight:** 10 points

#### `docs/reflection/` (TO DO - 10 points!)
**Purpose:** Post-project reflection document
**Required content:**
- Team collaboration experiences
- Challenges faced and how we solved them
- Lessons learned
- What we would do differently

**Status:** ⏳ To be completed after project
**Grade weight:** Part of Demo & Reflection (10 points)
**Deadline:** Before presentation on November 24, 2025

---

## 🎨 assets/ - Project Assets

**Purpose:** Images, logos, icons for the project

**Status:** Contains project logo/branding
**Note:** May add more images later for documentation or UI

---

## 🔧 scripts/ - Utility Scripts

**Purpose:** Helper scripts for development or deployment

**Current structure:**
```
scripts/
└── postgresql/
    └── .gitkeep
```

**Status:** Placeholder for future database scripts (like seed data, backups, etc.)

---

## 🐳 docker-compose.yml ✅ (WE CREATED)

**Purpose:** Orchestrates multiple Docker containers (database + web app)

**What it defines:**

### Services:
1. **db service** (PostgreSQL 16)
   - Container name: `gradingdino_postgres`
   - Database: `gradingdino_db`
   - User: `gradingdino_user`
   - Port: 5432
   - Health checks to ensure it's ready before Django starts
   - Persistent data volume: `gradingdino_postgres_data`

2. **web service** (Django)
   - Container name: `gradingdino_django`
   - Built from `app/Dockerfile`
   - Port: 8000
   - Depends on database health
   - Auto-runs migrations and creates admin user on startup
   - Live code reloading with volume mount `./app:/app`

### Environment Variables:
- `DEBUG=True` - Development mode
- `DB_ENGINE`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT` - Database connection
- `SECRET_KEY` - Django secret (change in production!)

### Volumes:
- `gradingdino_postgres_data` - Persists database data even when containers stop
- `./app:/app` - Maps local code to container for live reloading

**Key commands explained in file:** Lines 197-232

---

## 📄 README.md

**Purpose:** Project overview and basic information

**Current content:**
```
# 🦕GradingDino
### A Python + Docker web app for managing grades
Students can view their results, and professors can create or update them.
```

**Status:** Basic, could be expanded with setup instructions later

---

## 🗂️ Files We Modified vs Default Django

### ✅ Created by Us:
- `docker-compose.yml` - Container orchestration
- `app/Dockerfile` - Django container build instructions
- `app/requirements.txt` - Python dependencies
- `app/gradingdino/settings.py` (lines 79-90, 97-102) - Database and Argon2 config
- `docs/research/TECH_STACK.md` - Technology research
- `agents/project-agent.md` - AI agent configuration
- `agents/CLAUDE.md` - Claude Code quick reference

### 📋 Django Auto-Generated (Not Modified):
- `app/manage.py`
- `app/gradingdino/urls.py`
- `app/gradingdino/wsgi.py`
- `app/gradingdino/asgi.py`
- `app/grades/models.py` (empty)
- `app/grades/views.py` (empty)
- `app/grades/admin.py` (empty)
- `app/grades/tests.py` (empty)

### ⏳ To Be Created:
- Database models in `app/grades/models.py`
- Views in `app/grades/views.py`
- URL routing in `app/grades/urls.py`
- Templates in `app/grades/templates/grades/`
- Admin configuration in `app/grades/admin.py`
- Planning documents in `docs/planning/`
- MS Planner exports in `docs/planner/`
- Reflection document in `docs/reflection/`

---

## 🎯 Quick Reference: What to Work On Next

**Priority 1 (URGENT - Due Nov 17):**
1. ✅ ~~Technology stack selection~~
2. ✅ ~~Docker setup~~
3. ⏳ **Planning documentation** (30 points)
   - Personas
   - 12+ User Stories with acceptance criteria
   - MoSCoW prioritization
   - System architecture
   - ER diagram
4. ⏳ **Research documentation** (20 points)
   - ✅ Tech stack justification complete
   - Still need: More research on specific technologies

**Priority 2 (Before Nov 17):**
5. ⏳ **Implementation** (30 points)
   - Create database models
   - Build views and templates
   - Configure admin panel
   - Test functionality
6. ⏳ **MS Planner board** (10 points)

**Priority 3 (Before Nov 24):**
7. ⏳ **Reflection document**
8. ⏳ **Presentation preparation** (10 points)

---

## 📊 Grading Breakdown Reminder

| Component | Points | Status |
|-----------|--------|--------|
| Planning Documentation | 30 | ⏳ In Progress |
| Research Documentation | 20 | ✅ Partially Complete |
| Implementation & Code | 30 | ⏳ To Do |
| MS Planner Board | 10 | ⏳ To Do |
| Demo & Reflection | 10 | ⏳ To Do |
| **TOTAL** | **100** | |

---

## 🤖 AI Contribution Notice

**This document was created by:**
- **AI Contributions (Claude Code):**
  - Document structure and organization
  - Detailed explanations of each folder/file
  - Technical descriptions
  - Educational comments and context

- **Human Decisions:**
  - Request for this documentation
  - Project structure choices
  - Technology selections
  - What to prioritize explaining

**Purpose:** Help students understand the project structure for presentation and technical questions.
