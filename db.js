let db

let request = indexedDB.open("attendanceDB", 1)

request.onupgradeneeded = function (e) {

    db = e.target.result

    db.createObjectStore("attendance", { autoIncrement: true })

}

request.onsuccess = function (e) {

    db = e.target.result

}

function saveAttendance(data) {

    let tx = db.transaction("attendance", "readwrite")

    let store = tx.objectStore("attendance")

    store.add(data)

}

function exportData() {

    let tx = db.transaction("attendance", "readonly")

    let store = tx.objectStore("attendance")

    let req = store.getAll()

    req.onsuccess = function () {

        let data = req.result

        let csv = "Student,Date,Time\n"

        data.forEach(r => {
            csv += `${r.student},${r.date},${r.time}\n`
        })

        let blob = new Blob([csv], { type: "text/csv" })

        let url = URL.createObjectURL(blob)

        let a = document.createElement("a")

        a.href = url
        a.download = "attendance.csv"
        a.click()

    }

}