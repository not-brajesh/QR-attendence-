import pandas as pd
import os

batch_folder = "Batches"

date = "16 March 2026"
time = "9:30 AM - 12:30 PM"

# Classroom mapping
classrooms = {
    "batch1_students.csv": "102",
    "batch2_students.csv": "103",
    "batch3_students.csv": "104",
    "SAP_students.csv": "105"
}

for file in os.listdir(batch_folder):

    if file.endswith(".csv"):

        path = os.path.join(batch_folder, file)

        students = pd.read_csv(path)
        students.columns = ["sr","name","mobile","branch"]

        students["Signature"] = ""

        batch_name = file.replace("_students.csv","").replace("_"," ").title()

        classroom = classrooms.get(file,"")

        output = f"{batch_name}_attendance.xlsx"

        with pd.ExcelWriter(output, engine="xlsxwriter") as writer:

            students.to_excel(writer,startrow=7,index=False)

            sheet = writer.sheets["Sheet1"]

            sheet.write("A1","AJEENKYA DY PATIL UNIVERSITY")
            sheet.write("A2","Student Progression & Corporate Relations Office")
            sheet.write("A3","Skilling up Training Program for Industry Readiness")
            sheet.write("A4",batch_name)

            sheet.write("A5",f"Date: {date}")
            sheet.write("C5",f"Time: {time}")
            sheet.write("E5",f"Classroom: {classroom}")

        print("Generated:",output)
