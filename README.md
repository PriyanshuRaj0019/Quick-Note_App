# 📝 QuickNote - Full Stack Note Taking Application

A modern **Full Stack Note Taking Application** built using **Flask, SQLite, HTML, CSS, and JavaScript**. Users can create, search, view, and delete notes through a clean and responsive interface. The application demonstrates complete frontend-backend communication using REST APIs and persistent data storage with SQLite.

---

## 📌 Project Overview

QuickNote is a single-page web application developed as an internship project to demonstrate the fundamentals of full-stack web development.

The project focuses on:

- REST API development with Flask
- Database integration using SQLite & SQLAlchemy
- CRUD operations
- Fetch API communication
- Responsive UI design
- Modern frontend development with Vanilla JavaScript

---

## 🚀 Features

- ✍️ Create new notes
- 📄 View saved notes
- 🗑️ Delete notes
- 🔍 Live search functionality
- 💾 Persistent SQLite database
- ⚡ Real-time UI updates
- ✅ Input validation
- 📢 Success & error notifications
- 🎨 Modern responsive UI
- 📱 Mobile-friendly design

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- Google Fonts
- Font Awesome

### Backend

- Python
- Flask
- Flask-CORS
- Flask-SQLAlchemy

### Database

- SQLite
- SQLAlchemy ORM

### Tools

- Visual Studio Code
- Git
- GitHub

---

## 📂 Project Structure

```text
Quick-Note_App/
│
├── backend/
│   ├── app.py
│   ├── database.py
│   ├── models.py
│   ├── routes.py
│   ├── database.db
│   └── __pycache__/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── requirements.txt
├── README.md
├── LICENSE
└── .gitignore
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Quick-Note_App.git
```

```bash
cd Quick-Note_App
```

---

### 2. Create a Virtual Environment

**Windows**

```bash
python -m venv .venv
```

Activate the environment:

```bash
.venv\Scripts\activate
```

**macOS/Linux**

```bash
python3 -m venv .venv
```

Activate the environment:

```bash
source .venv/bin/activate
```

---

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 4. Run the Backend

```bash
cd backend
```

```bash
python app.py
```

The backend server starts at:

```
http://127.0.0.1:5000
```

---

### 5. Run the Frontend

Open the `frontend` folder using **Live Server** in Visual Studio Code.

The application is now ready to use.

---

# 🔗 API Endpoints

### Home

```
GET /
```

Returns:

```
QuickNote Backend is Running!
```

---

### Get All Notes

```
GET /notes
```

Example Response

```json
[
  {
    "id": 1,
    "note": "Complete Internship Project",
    "created_at": "28-06-2026 15:20"
  }
]
```

---

### Add Note

```
POST /notes
```

Request Body

```json
{
    "note": "Learn Flask APIs"
}
```

---

### Delete Note

```
DELETE /notes/<id>
```

Example

```
DELETE /notes/5
```

---

## 🗄️ Database Schema

| Field | Type |
|-------|------|
| id | Integer |
| note | Text |
| created_at | DateTime |

---

## 📚 Key Learning Outcomes

- Flask Application Development
- REST API Design
- SQLAlchemy ORM
- SQLite Database Integration
- CRUD Operations
- Fetch API
- Frontend-Backend Communication
- Responsive Web Design
- Error Handling
- DOM Manipulation
- Git Version Control

---

## 🚀 Future Enhancements

- ✏️ Edit existing notes
- 📌 Pin important notes
- 🌙 Dark mode
- 🏷️ Categories
- 🎨 Color labels
- 📄 Export notes
- ☁️ Cloud database integration
- 🔐 User authentication
- 📅 Sorting & filtering
- 📱 Progressive Web App (PWA)

---

## ✅ Testing Checklist

- Create Note
- Read Notes
- Delete Note
- Search Notes
- Empty Note Validation
- Responsive Layout
- API Testing
- Database Persistence

---

## 💼 Skills Demonstrated

- Full Stack Development
- Python Programming
- Flask Framework
- SQLAlchemy ORM
- SQLite
- RESTful APIs
- JavaScript (ES6)
- HTML5
- CSS3
- Fetch API
- Responsive UI Design
- Git & GitHub

---

## 👨‍💻 Author

**Priyanshu Raj**

- GitHub: https://github.com/PriyanshuRaj0019
- LinkedIn: www.linkedin.com/in/priyanshu-raj-ml

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, consider giving it a star.
