import qrcode
import csv
import os

if not os.path.exists("qr_codes"):
    os.makedirs("qr_codes")

with open("students.csv","r") as file:
    reader = csv.DictReader(file)

    for row in reader:

        student_id = row["id"]

        img = qrcode.make(student_id)

        filename = f'qr_codes/{student_id}.png'

        img.save(filename)

        print("QR created:", filename)
