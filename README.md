# QR Attendance System

A simple QR based attendance system that runs as a website and can be installed on a phone using **Add to Home Screen**.

Faculty can scan student QR codes and export attendance.

---

# Features

- QR code based attendance
- Works directly from a website
- Can be installed as a PWA (Add to Home Screen)
- Export attendance data
- Offline capable using service worker

---

# Project Structure

qr-attendance/
│
├── index.html # Main scanner page
├── app.js # QR scanning logic
├── db.js # Attendance storage
├── manifest.json # PWA configuration
├── service-worker.js # Offline support
├── icon.png # App icon
│
├── generate_qr.py # Generate QR codes for students
├── students.csv # Student dataset
│
└── qr_codes/ # Generated QR codes


---

# How to Run the Scanner

Open the website:

index.html

or deploy it on:

- GitHub Pages
- Netlify
- Vercel

Faculty can then:

1. Open the website
2. Click **Add to Home Screen**
3. Scan student QR codes
4. Export attendance

---

# Generate Student QR Codes

Create a dataset file:

students.csv


Example:

id,name,branch
101,Brajesh Kumar,AI&DS
102,Pragati Dubey,AI&DS
103,Adarsh Jha, AI&DS


Install dependencies:

pip install qrcode pillow


Run the generator:

python generate_qr.py


QR codes will be created inside:

qr_codes/


Send each student their QR code.

---

# Attendance Flow

Student shows QR → Faculty scans → Attendance saved → Export data

---

# Future Improvements

- Duplicate attendance prevention
- Attendance dashboard
- Cloud storage
- Student name auto display

