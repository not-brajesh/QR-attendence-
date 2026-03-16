self.addEventListener("install", function (event) {

    event.waitUntil(

        caches.open("attendance-cache").then(function (cache) {

            return cache.addAll([
                "/",
                "/index.html",
                "/app.js",
                "/db.js"
            ])

        })

    )

})
