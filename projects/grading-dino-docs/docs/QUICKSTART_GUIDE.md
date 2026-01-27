# GradingDino Quick Start Guide

## ✅ What's Been Completed

### 1. Complete Database Design
- **MCD/MLD Documentation**: [docs/planning/DATABASE_DESIGN.md](planning/DATABASE_DESIGN.md)
- **10 Django Models** with full explanatory comments:
  - Student, Teacher, Class, Subject, GradingScale
  - Course, Enrollment, Grade
  - StudentNote, TeacherNote

### 2. Admin Panel Configured
- Fully functional Django admin for grade management
- Inline grade entry
- Search, filters, and autocomplete
- Teacher and student dashboards via admin

### 3. Database Migrated
- All tables created in PostgreSQL
- Ready to use!

---

## 🚀 How to Access the System

### Step 1: Start the Application

```bash
docker compose up
```

The system will be available at: **http://localhost:8000**

### Step 2: Access Admin Panel

Go to: **http://localhost:8000/admin**

**Default credentials:**
- Username: `admin`
- Password: `test..123`

---

## 📊 Database Structure Overview

### Core Entities:

1. **User** (Django built-in) - Authentication with Argon2 hashing
2. **Student** - Student profiles linked to User
3. **Teacher** - Teacher profiles linked to User
4. **Class** - Classes by school year (e.g., "5ème A 2024-2025")
5. **Subject** - Academic subjects (Math, Biology, etc.)
6. **GradingScale** - Grading scales (20-point, 60-point, Letter)
7. **Course** - Specific course instance (Subject + Teacher + Class + Year)
8. **Enrollment** - Student enrollment in courses
9. **Grade** - Individual grade entries with auto-calculation
10. **StudentNote** & **TeacherNote** - Personal/teacher notes

### Key Relationships:

```
User (1:1) → Student/Teacher
Student (M:N) → Course (via Enrollment)
Teacher (M:N) → Subject
Course (M:1) → Teacher, Subject, Class, GradingScale
Grade (M:1) → Student, Course, Teacher
```

---

## 🎓 How to Use the System

### For Admins (Superuser):

#### 1. Create Users

1. Go to **Admin Panel** → **Users** → **Add User**
2. Set username, password
3. Save

#### 2. Create Students

1. Go to **Students** → **Add Student**
2. Select the User account
3. Enter Student ID (e.g., "S12345")
4. Assign to a Class (optional)
5. Save

#### 3. Create Teachers

1. Go to **Teachers** → **Add Teacher**
2. Select the User account
3. Enter Employee ID
4. Set Department (e.g., "BTS", "Primary School")
5. Assign Subjects they can teach
6. Save

#### 4. Create Classes

1. Go to **Classes** → **Add Class**
2. Enter Class Name (e.g., "5ème A")
3. Enter School Year (e.g., "2024-2025")
4. Set Level (Primary/Secondary/BTS)
5. Save

#### 5. Create Subjects

1. Go to **Subjects** → **Add Subject**
2. Enter Subject Name (e.g., "Mathematics")
3. Enter Subject Code (e.g., "MATH")
4. Save

#### 6. Create Grading Scales

1. Go to **Grading Scales** → **Add Grading Scale**
2. Examples:
   - **BTS**: Name="20-point", Min=0, Max=20
   - **Standard**: Name="60-point", Min=0, Max=60
   - **Primary**: Name="Letter A-F", Type=LETTER

#### 7. Create Courses

1. Go to **Courses** → **Add Course**
2. Enter Course Code (e.g., "MATH-5A-2024")
3. Enter Course Name
4. Select Subject (what's being taught)
5. Select Teacher (who's teaching)
6. Select Class (which students)
7. Select Grading Scale
8. Enter School Year and Semester
9. **Enroll Students** (inline section at bottom)
10. Save

### For Teachers:

#### 1. View Your Courses

1. Log in to Admin Panel
2. Go to **Courses**
3. Filter by your name

#### 2. Enter Grades

**Method 1: Via Course** (Recommended)
1. Open a Course
2. Scroll to "Grades" section
3. Click "Add another Grade"
4. Select Student
5. Enter Assessment Name (e.g., "Midterm Exam")
6. Enter Points Earned and Max Points
7. Percentage and Letter Grade calculate automatically!
8. Add Comments (optional)
9. Save

**Method 2: Direct Grade Entry**
1. Go to **Grades** → **Add Grade**
2. Select Course and Student
3. Enter grade details
4. Save

#### 3. Filter and Search

- **Filter by Class**: Use sidebar filter
- **Filter by Subject**: Use sidebar filter
- **Filter by School Year**: See history
- **Search Students**: Type student name/ID

### For Students:

Students can view grades via custom views (to be implemented) or through admin if given read-only access.

---

## 💡 Key Features

### Automatic Grade Calculations

When you enter a grade:
1. **Percentage** is automatically calculated: `(points_earned / max_points) * 100`
2. **Letter Grade** is automatically assigned:
   - A: 90-100%
   - B: 80-89%
   - C: 70-79%
   - D: 60-69%
   - F: Below 60%

### Multiple Grading Scales

Each course can use a different grading scale:
- **BTS courses**: 20-point scale
- **Standard courses**: 60-point scale
- **Primary courses**: Letter grades

### Grade History by Year

- Filter grades by school year
- See student progress across years
- Track which class student was in

### Teacher Dashboard Features

- View all your courses
- Quick grade entry
- See enrolled students
- Add teacher notes about students

---

## 📝 Example Workflow

### Complete Setup Example:

```
1. Admin creates User "jose_gustavo"
2. Admin creates Teacher profile:
   - Employee ID: T001
   - Department: BTS
   - Subjects: Mathematics

3. Admin creates Subject "Mathematics" (MATH)

4. Admin creates Class "BTS Year 1" for "2024-2025"

5. Admin creates 20-point Grading Scale

6. Admin creates Course:
   - Code: MATH-BTS1-2024
   - Name: Mathematics for BTS Year 1
   - Teacher: José Gustavo
   - Class: BTS Year 1
   - Grading Scale: 20-point

7. Admin enrolls students in the course

8. José logs in, opens his course, enters grades:
   - Student: Lea Simon (S001)
   - Assessment: Midterm Exam
   - Points: 16/20
   - Auto-calculated: 80% = B
```

---

## 🔧 Common Admin Tasks

### Check Database Status

```bash
docker compose exec web python manage.py showmigrations
```

### Create a New Superuser

```bash
docker compose exec web python manage.py createsuperuser
```

### Access Django Shell

```bash
docker compose exec web python manage.py shell
```

### View Logs

```bash
docker compose logs -f web
```

### Reset Database (WARNING: Deletes all data!)

```bash
docker compose down -v
docker compose up
```

---

## 📂 File Locations

- **Models**: [app/grades/models.py](../app/grades/models.py)
- **Admin Config**: [app/grades/admin.py](../app/grades/admin.py)
- **Database Design**: [docs/planning/DATABASE_DESIGN.md](planning/DATABASE_DESIGN.md)
- **Migrations**: `app/grades/migrations/`

---

## 🎯 For Your Presentation

### Key Points to Explain:

1. **Database Design**:
   - Show MCD diagram with relationships
   - Explain MLD with table structures
   - Highlight Class and Subject separation

2. **Models**:
   - Explain how Student/Teacher extend User
   - Show automatic grade calculation in Grade model
   - Demonstrate One-to-One, One-to-Many, Many-to-Many relationships

3. **Admin Panel**:
   - Demonstrate quick grade entry
   - Show filters and search
   - Explain inline editing

4. **Features**:
   - Multiple grading scales support
   - Grade history by year
   - Automatic calculations
   - Teacher/Student notes

5. **Security**:
   - Argon2 password hashing (University of Luxembourg!)
   - Django's built-in CSRF protection
   - Role-based access control

---

## ✅ What's Ready for Presentation

- ✅ Complete database schema (MCD/MLD)
- ✅ All models with full documentation
- ✅ Fully functional admin panel
- ✅ Automatic grade calculations
- ✅ Multiple grading scales
- ✅ Grade history by year and class
- ✅ Teacher/Subject management
- ✅ Student/Teacher notes

---

## ⏳ What's Next (Optional)

If you have time:
- Custom student dashboard view (instead of admin)
- Custom teacher dashboard with better filtering
- PDF export for grade reports
- Email notifications
- Bulk grade import via CSV

---

## 🤖 AI Contribution Notice

**This guide was created by:**
- **AI Contributions (Claude Code):**
  - Documentation structure
  - Usage instructions
  - Example workflows
  - Administrative procedures

- **Human Decisions:**
  - System requirements
  - Feature priorities
  - Academic context
  - Presentation focus

**All code has extensive comments for student learning and presentation preparation.**

---

## 🎓 Good Luck with Your Presentation!

You now have a fully functional grade management system with:
- Professional database design
- Clean, documented code
- Easy-to-use admin interface
- All required features from personas and user stories

**Remember**: You can explain every part of this system because every file has detailed comments explaining WHAT it does, WHY it was written that way, and HOW it works!
