function onScanSuccess(decodedText) {

    let student = decodedText

    let now = new Date()

    let record = {
        student: student,
        date: now.toISOString().split("T")[0],
        time: now.toLocaleTimeString()
    }

    saveAttendance(record)

    alert("Attendance marked for " + student)

}

const html5QrCode = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: 250 }
)

html5QrCode.render(onScanSuccess)
