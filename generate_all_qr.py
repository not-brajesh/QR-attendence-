import qrcode
import pandas as pd
import os

batch_folder = "Batches"
output_folder = "qr_codes"

os.makedirs(output_folder, exist_ok=True)

for file in os.listdir(batch_folder):

    if file.endswith(".csv"):

        batch_name = file.replace("_students.csv","")
        batch_path = os.path.join(batch_folder, file)

        df = pd.read_csv(batch_path)

        batch_output = os.path.join(output_folder, batch_name)
        os.makedirs(batch_output, exist_ok=True)

        for index, row in df.iterrows():

            student_id = row["sr"]
            name = row["name"]
            mobile = row["mobile"]
            branch = row["branch"]

            qr_data = f"ID:{student_id},NAME:{name},MOBILE:{mobile},BRANCH:{branch},BATCH:{batch_name}"

            img = qrcode.make(qr_data)

            file_name = f"{student_id}_{name.replace(' ','_')}.png"

            img.save(os.path.join(batch_output, file_name))

            print("QR Generated:", file_name)
