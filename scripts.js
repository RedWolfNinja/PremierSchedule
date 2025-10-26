    var gameType = [
        "No game",
        "No game",
        "Scrim",
        "Match",
        "Scrim",
        "Match",
        "Match"
    ]
    var gameSchedule = [
        "",
        "",
        "from 21:00 to 22:00",
        "from 21:00 to 22:00",
        "from 22:00 to 23:00",
        "from 22:00 to 23:00",
        "from 21:00 to 22:00"
    ]

    const date = new Date()
    document.getElementById("scheduleDisplay").innerHTML = gameType[date.getDay()] + " today " + gameSchedule[date.getDay()]
    // document.getElementById("scheduleDisplay").innerHTML = gameType[4] + " today " + gameSchedule[4]