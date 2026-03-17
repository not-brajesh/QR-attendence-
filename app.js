let lastScan = ""

function onScanSuccess(decodedText) {

    // avoid ultra-fast duplicate camera reads
    if (decodedText === lastScan) {
        return
    }

    lastScan = decodedText

    let parts = decodedText.split(",")

    let data = {}

    parts.forEach(p => {
        let pair = p.split(":")
        data[pair[0].trim().toLowerCase()] = pair[1].trim()
    })

    let id = data.id
    let name = data.name
    let mobile = data.mobile
    let branch = data.branch
    let batch = data.batch

    let now = new Date()

    let date = now.toISOString().split("T")[0]
    let time = now.toLocaleTimeString()

    let attendance = JSON.parse(localStorage.getItem("attendance")) || []

    // always record attendance
    let record = {
        id: id,
        name: name,
        mobile: mobile,
        branch: branch,
        batch: batch,
        date: date,
        time: time
    }

    attendance.push(record)

    localStorage.setItem("attendance", JSON.stringify(attendance))

    showPopup("✔ Attendance marked for " + name)

    setTimeout(() => {
        lastScan = ""
    }, 1500)

}

const html5QrCode = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: 250 }
)

html5QrCode.render(onScanSuccess)



function showPopup(text) {

    let box = document.createElement("div")

    box.innerText = text

    box.style.position = "fixed"
    box.style.bottom = "30px"
    box.style.left = "50%"
    box.style.transform = "translateX(-50%)"
    box.style.background = "black"
    box.style.color = "white"
    box.style.padding = "12px 24px"
    box.style.borderRadius = "8px"
    box.style.fontSize = "14px"
    box.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)"

    document.body.appendChild(box)

    setTimeout(() => {
        box.remove()
    }, 2000)

}



function exportData() {

    let attendance = JSON.parse(localStorage.getItem("attendance")) || []

    let csv = "ID,Name,Mobile,Branch,Batch,Date,Time\n"

    attendance.forEach(a => {
        csv += `${a.id},${a.name},${a.mobile},${a.branch},${a.batch},${a.date},${a.time}\n`
    })

    let blob = new Blob([csv], { type: "text/csv" })
    let url = URL.createObjectURL(blob)

    let a = document.createElement("a")

    a.href = url
    a.download = "attendance.csv"

    a.click()

}