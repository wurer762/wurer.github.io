# GradingDino Database Design

This document explains the complete database structure for the GradingDino grade management system.

---

## MCD (Modèle Conceptuel de Données) - Conceptual Model

### Entities and Relationships

```
┌─────────────┐
│    USER     │ (Django built-in + extended)
│ user_type   │
└──────┬──────┘
       │
       │ "is a" (inheritance)
       ├──────────────────┬──────────────────┐
       │                  │                  │
┌──────▼──────┐    ┌──────▼──────┐   ┌──────▼──────┐
│   STUDENT   │    │   TEACHER   │   │    ADMIN    │
│ student_id  │    │ employee_id │   │             │
└──────┬──────┘    └──────┬──────┘   └─────────────┘
       │                  │
       │                  │
       │ "is assigned to" │ "teaches"
       │      (M:1)       │  (M:N)
       │                  │
       ▼                  ▼
┌─────────────┐    ┌─────────────┐
│    CLASS    │◄───┤   SUBJECT   │
│ class_name  │    │ subject_name│
│ school_year │    └──────┬──────┘
└──────┬──────┘           │
       │                  │
       │ "enrolls in"     │ "is part of"
       │    (M:N)         │   (M:1)
       │      ▼           ▼
       │    ┌─────────────────┐
       └───►│     COURSE      │
            │ code, semester  │
            └────────┬────────┘
                     │
                     │ "receives grade in"
                     │      (1:N)
                     ▼
            ┌─────────────────┐
            │      GRADE      │
            │ points, letter  │
            │ comments        │
            └────────┬────────┘
                     │
                     │ "uses"
                     │ (M:1)
                     ▼
            ┌─────────────────┐
            │  GRADING_SCALE  │
            │ 20pt/60pt/Letter│
            └─────────────────┘

┌─────────────────┐         ┌─────────────────┐
│  STUDENT_NOTE   │         │  TEACHER_NOTE   │
│ (personal)      │         │ (observations)  │
└─────────────────┘         └─────────────────┘
```

### Relationship Descriptions (with verbs):

1. **USER "is a" STUDENT/TEACHER/ADMIN** (1:1 inheritance)
2. **STUDENT "is assigned to" CLASS** (M:1) - A student belongs to one class per year
3. **STUDENT "enrolls in" COURSE** (M:N via Enrollment) - A student takes multiple courses
4. **TEACHER "teaches" SUBJECT** (M:N) - A teacher can teach multiple subjects
5. **CLASS "contains" COURSE** (1:N) - A class has multiple courses (subjects)
6. **SUBJECT "is part of" COURSE** (M:1) - Each course teaches one subject
7. **STUDENT "receives" GRADE** (1:N) - A student has many grades
8. **TEACHER "assigns" GRADE** (1:N) - A teacher gives many grades
9. **COURSE "generates" GRADE** (1:N) - Each course has many grade entries
10. **COURSE "uses" GRADING_SCALE** (M:1) - Each course uses one grading scale
11. **STUDENT "writes" STUDENT_NOTE** (1:N) - Personal notes
12. **TEACHER "writes" TEACHER_NOTE** (1:N) - Observations about students

### Cardinalities:
- **1:1** = One to One
- **1:N** = One to Many
- **M:N** = Many to Many (requires junction table)

---

## MLD (Modèle Logique de Données) - Logical Model

### Table: `auth_user` (Django built-in, extended)
**Purpose:** Authentication and user management

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique user ID |
| username | VARCHAR(150) | UNIQUE, NOT NULL | Login username |
| email | VARCHAR(254) | UNIQUE | User email |
| password | VARCHAR(128) | NOT NULL | Argon2 hashed password |
| first_name | VARCHAR(150) | | User first name |
| last_name | VARCHAR(150) | | User last name |
| is_staff | BOOLEAN | DEFAULT FALSE | Can access admin panel |
| is_active | BOOLEAN | DEFAULT TRUE | Account is active |
| date_joined | DATETIME | NOT NULL | Account creation date |

**Indexes:** username, email

---

### Table: `grades_student`
**Purpose:** Student-specific information

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique student record ID |
| user_id | INTEGER | FOREIGN KEY → auth_user.id, UNIQUE | Link to User account |
| student_id | VARCHAR(50) | UNIQUE, NOT NULL | Student number (e.g., "S12345") |
| current_class_id | INTEGER | FOREIGN KEY → grades_class.id, NULL | Current class assignment |
| created_at | DATETIME | NOT NULL | Record creation timestamp |
| updated_at | DATETIME | NOT NULL | Last update timestamp |

**Foreign Keys:**
- user_id → auth_user(id) ON DELETE CASCADE
- current_class_id → grades_class(id) ON DELETE SET NULL

**Indexes:** student_id, user_id, current_class_id

---

### Table: `grades_teacher`
**Purpose:** Teacher-specific information

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique teacher record ID |
| user_id | INTEGER | FOREIGN KEY → auth_user.id, UNIQUE | Link to User account |
| employee_id | VARCHAR(50) | UNIQUE, NOT NULL | Employee number |
| department | VARCHAR(100) | | Department (e.g., "BTS", "Primary School") |
| created_at | DATETIME | NOT NULL | Record creation timestamp |
| updated_at | DATETIME | NOT NULL | Last update timestamp |

**Foreign Keys:**
- user_id → auth_user(id) ON DELETE CASCADE

**Indexes:** employee_id, user_id

---

### Table: `grades_class`
**Purpose:** Class/Grade level (e.g., "5ème A", "BTS Year 1")

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique class ID |
| class_name | VARCHAR(100) | NOT NULL | Class name (e.g., "5ème A", "BTS1") |
| school_year | VARCHAR(20) | NOT NULL | Academic year (e.g., "2024-2025") |
| level | VARCHAR(50) | | Educational level (Primary/Secondary/BTS) |
| created_at | DATETIME | NOT NULL | Record creation timestamp |

**Unique Together:** (class_name, school_year)

**Indexes:** class_name, school_year

---

### Table: `grades_subject`
**Purpose:** Subjects taught (Math, Biology, History, etc.)

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique subject ID |
| subject_name | VARCHAR(100) | UNIQUE, NOT NULL | Subject name (e.g., "Mathematics") |
| subject_code | VARCHAR(20) | UNIQUE | Short code (e.g., "MATH") |
| description | TEXT | NULL | Subject description |
| created_at | DATETIME | NOT NULL | Record creation timestamp |

**Indexes:** subject_name, subject_code

---

### Table: `grades_teacher_subjects` (Junction Table)
**Purpose:** Many-to-Many relationship between teachers and subjects

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique assignment ID |
| teacher_id | INTEGER | FOREIGN KEY → grades_teacher.id | Teacher reference |
| subject_id | INTEGER | FOREIGN KEY → grades_subject.id | Subject reference |

**Foreign Keys:**
- teacher_id → grades_teacher(id) ON DELETE CASCADE
- subject_id → grades_subject(id) ON DELETE CASCADE

**Unique Together:** (teacher_id, subject_id)

**Indexes:** teacher_id, subject_id

---

### Table: `grades_gradingscale`
**Purpose:** Grading scales (20-point, 60-point, Letter grades)

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique scale ID |
| scale_name | VARCHAR(50) | UNIQUE, NOT NULL | Scale name (e.g., "20-point BTS") |
| scale_type | VARCHAR(20) | NOT NULL | Type: "NUMERIC" or "LETTER" |
| min_value | DECIMAL(5,2) | NOT NULL | Minimum value (e.g., 0) |
| max_value | DECIMAL(5,2) | NOT NULL | Maximum value (e.g., 20, 60, 100) |
| passing_grade | DECIMAL(5,2) | | Minimum to pass |
| created_at | DATETIME | NOT NULL | Record creation timestamp |

**Indexes:** scale_name

**Examples:**
- BTS: scale_name="20-point", min_value=0, max_value=20
- Standard: scale_name="60-point", min_value=0, max_value=60
- Primary: scale_name="Letter A-F", scale_type="LETTER"

---

### Table: `grades_course`
**Purpose:** Specific course instance (e.g., "Math for Class 5A, Fall 2024")

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique course ID |
| course_code | VARCHAR(50) | UNIQUE, NOT NULL | Course code (e.g., "MATH-5A-2024") |
| course_name | VARCHAR(200) | NOT NULL | Full course name |
| subject_id | INTEGER | FOREIGN KEY → grades_subject.id | Subject being taught |
| teacher_id | INTEGER | FOREIGN KEY → grades_teacher.id | Assigned teacher |
| class_id | INTEGER | FOREIGN KEY → grades_class.id | Class taking this course |
| grading_scale_id | INTEGER | FOREIGN KEY → grades_gradingscale.id | Grading scale used |
| semester | VARCHAR(50) | | Semester/Term |
| school_year | VARCHAR(20) | NOT NULL | Academic year |
| created_at | DATETIME | NOT NULL | Record creation timestamp |
| updated_at | DATETIME | NOT NULL | Last update timestamp |

**Foreign Keys:**
- subject_id → grades_subject(id) ON DELETE PROTECT
- teacher_id → grades_teacher(id) ON DELETE PROTECT
- class_id → grades_class(id) ON DELETE PROTECT
- grading_scale_id → grades_gradingscale(id) ON DELETE PROTECT

**Indexes:** course_code, teacher_id, class_id, school_year

---

### Table: `grades_enrollment`
**Purpose:** Student enrollment in courses (M:N relationship)

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique enrollment ID |
| student_id | INTEGER | FOREIGN KEY → grades_student.id | Student reference |
| course_id | INTEGER | FOREIGN KEY → grades_course.id | Course reference |
| enrollment_date | DATE | NOT NULL | Date enrolled |
| status | VARCHAR(20) | DEFAULT 'ACTIVE' | ACTIVE, DROPPED, COMPLETED |

**Foreign Keys:**
- student_id → grades_student(id) ON DELETE CASCADE
- course_id → grades_course(id) ON DELETE CASCADE

**Unique Together:** (student_id, course_id)

**Indexes:** student_id, course_id, status

---

### Table: `grades_grade`
**Purpose:** Individual grade entries for assessments

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique grade ID |
| student_id | INTEGER | FOREIGN KEY → grades_student.id | Student who received grade |
| course_id | INTEGER | FOREIGN KEY → grades_course.id | Course for this grade |
| teacher_id | INTEGER | FOREIGN KEY → grades_teacher.id | Teacher who assigned grade |
| assessment_name | VARCHAR(200) | NOT NULL | Name (e.g., "Midterm Exam") |
| points_earned | DECIMAL(6,2) | NOT NULL | Points student earned |
| max_points | DECIMAL(6,2) | NOT NULL | Maximum possible points |
| percentage | DECIMAL(5,2) | | Calculated: (points_earned/max_points)*100 |
| letter_grade | VARCHAR(5) | NULL | Converted letter grade (A, B, C, etc.) |
| teacher_comments | TEXT | NULL | Teacher's comments/feedback |
| created_at | DATETIME | NOT NULL | When grade was created |
| updated_at | DATETIME | NOT NULL | Last modification timestamp |

**Foreign Keys:**
- student_id → grades_student(id) ON DELETE CASCADE
- course_id → grades_course(id) ON DELETE CASCADE
- teacher_id → grades_teacher(id) ON DELETE CASCADE

**Indexes:** student_id, course_id, teacher_id, created_at

---

### Table: `grades_studentnote`
**Purpose:** Personal notes written by students (private)

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique note ID |
| student_id | INTEGER | FOREIGN KEY → grades_student.id | Note author |
| title | VARCHAR(200) | NOT NULL | Note title |
| content | TEXT | NOT NULL | Note content |
| created_at | DATETIME | NOT NULL | Creation timestamp |
| updated_at | DATETIME | NOT NULL | Last update timestamp |

**Foreign Keys:**
- student_id → grades_student(id) ON DELETE CASCADE

**Indexes:** student_id, created_at

---

### Table: `grades_teachernote`
**Purpose:** Teacher observations about students (teacher-only visible)

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique note ID |
| teacher_id | INTEGER | FOREIGN KEY → grades_teacher.id | Note author |
| student_id | INTEGER | FOREIGN KEY → grades_student.id | Student being observed |
| course_id | INTEGER | FOREIGN KEY → grades_course.id, NULL | Related course (optional) |
| title | VARCHAR(200) | NOT NULL | Note title |
| content | TEXT | NOT NULL | Observation content |
| created_at | DATETIME | NOT NULL | Creation timestamp |
| updated_at | DATETIME | NOT NULL | Last update timestamp |

**Foreign Keys:**
- teacher_id → grades_teacher(id) ON DELETE CASCADE
- student_id → grades_student(id) ON DELETE CASCADE
- course_id → grades_course(id) ON DELETE SET NULL

**Indexes:** teacher_id, student_id, created_at

---

## Key Features Explained

### 1. Grade History by Class and Year
- Each **Student** is assigned to a **Class** (current_class_id)
- **Classes** have a `school_year` field (e.g., "2023-2024", "2024-2025")
- **Courses** are linked to **Classes** and have `school_year`
- **Grades** are linked to **Courses**
- **Query for history:** Filter grades by course → class → school_year

**Example:** Show all grades for Student "José" in "BTS Year 1" during "2023-2024"

### 2. Teacher Dashboard Filtering
- Teachers can filter by:
  - **Class:** via `course.class_id`
  - **Subject:** via `course.subject_id`
  - **School Year:** via `course.school_year`
- **Permissions:** Teachers see only courses they teach (checked via `course.teacher_id`)

### 3. Multiple Grading Scales
- **BTS** uses 20-point scale
- **Standard** uses 60-point scale
- **Primary School** uses Letter grades (A-F)
- Each **Course** links to a **GradingScale**
- **Grade** model has method to convert `points_earned` to `letter_grade` based on course's scale

### 4. Subject-Based Teaching
- **Subjects** are separate entities (Math, Biology, etc.)
- **Teachers** can teach multiple subjects (via `grades_teacher_subjects` junction table)
- **Courses** teach one subject but can have different teachers across classes

---

## Example Queries for Presentation

### Query 1: Get all grades for a student in current year
```sql
SELECT g.*, c.course_name, s.subject_name, cl.class_name
FROM grades_grade g
JOIN grades_course c ON g.course_id = c.id
JOIN grades_subject s ON c.subject_id = s.id
JOIN grades_class cl ON c.class_id = cl.id
WHERE g.student_id = <student_id>
  AND c.school_year = '2024-2025'
ORDER BY g.created_at DESC;
```

### Query 2: Get all students in a teacher's class
```sql
SELECT DISTINCT st.*, u.first_name, u.last_name, cl.class_name
FROM grades_student st
JOIN auth_user u ON st.user_id = u.id
JOIN grades_enrollment e ON st.id = e.student_id
JOIN grades_course c ON e.course_id = c.id
JOIN grades_class cl ON c.class_id = cl.id
WHERE c.teacher_id = <teacher_id>
  AND e.status = 'ACTIVE';
```

### Query 3: Grade history across years for one student
```sql
SELECT c.school_year, cl.class_name, s.subject_name, g.points_earned, g.max_points, g.letter_grade
FROM grades_grade g
JOIN grades_course c ON g.course_id = c.id
JOIN grades_class cl ON c.class_id = cl.id
JOIN grades_subject s ON c.subject_id = s.id
WHERE g.student_id = <student_id>
ORDER BY c.school_year DESC, s.subject_name;
```

---

## AI Contribution Notice

**This document was created by:**
- **AI Contributions (Claude Code):**
  - Complete MCD/MLD structure and diagrams
  - Table schema definitions with detailed explanations
  - SQL query examples
  - Educational comments for student understanding
  - Documentation organization

- **Human Decisions:**
  - Requirement for Class and Subject separation
  - Grade history by year requirement
  - Teacher filtering by class/subject
  - Academic year tracking
  - Multi-scale grading system requirements

**Purpose:** Academic documentation for database design presentation and implementation reference.