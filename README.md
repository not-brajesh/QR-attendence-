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

```

qr-attendence/
│
├── index.html           # QR scanner page
├── app.js               # Scanner logic
├── db.js                # Attendance storage
├── manifest.json        # PWA configuration
├── service-worker.js    # Offline support
├── icon.png             # App icon
│
├── students.csv         # Student dataset
├── generate_qr.py       # QR code generator
│
└── qr_codes/            # Generated QR codes

```

---

# How to Run the Scanner

Open the scanner by running:

```

index.html

```

Or deploy the website using:

- GitHub Pages
- Netlify
- Vercel

Faculty can then:

1. Open the website
2. Add it to **Home Screen**
3. Scan student QR codes
4. Export attendance

---

# Generate Student QR Codes

Create a dataset file:

```

students.csv

```

Example:

```

id,name,branch
101,Brajesh Kumar,AI&DS
102,Pragati Dubey,AI&DS
103,Adarsh Jha,AI&DS

```

Install dependencies:

```

pip install qrcode pillow

```

Run the QR generator:

```

python generate_qr.py

```

QR codes will be created inside:

```

qr_codes/

```

Send each student their QR code.

---

# Attendance Flow

Student shows QR → Faculty scans → Attendance saved → Export data

---

# Future Improvements

- Prevent duplicate attendance
- Attendance dashboard
- Cloud storage
- Student name display on scan

---

# TO RUN THIS ON YOUR PHONE AS AN APPLICATION FOLLOW THESE STEPS ↴

STEP 1 > OPEN THIS WEBSITE ON YOUR PHONE: 
```
https://not-brajesh.github.io/QR-attendence-/
```

STEP 2 > TAP ON SHARE 

STEP 3 > ADD TO HOME SCREEN



