import yagmail
import pandas as pd
import os

EMAIL = "attendance.spcr@gmail.com"

yag = yagmail.SMTP(EMAIL)

students = pd.read_csv("SAP_email_list.csv")

qr_folder = "qr_codes/SAP"

for index,row in students.iterrows():

    name = row["name"]
    email = row["email"]

    qr_file = name.replace(" ","_") + ".png"
    qr_path = os.path.join(qr_folder, qr_file)

    subject = "Your QR Code for Attendance"

    body = f"""
Hello {name},

Please find your QR code attached.

Use this QR code during training to mark attendance.

Regards  
Training Team
"""

    yag.send(
        to=email,
        subject=subject,
        contents=body,
        attachments=qr_path
    )

    print("Sent:",email)
