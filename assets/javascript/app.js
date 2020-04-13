
	var train = {
		frequency: 0,
		currentTime: "",
		nextArrival: "",
		init(frequency, currentTime) {
			this.frequency = frequency,
			this.currentTime = currentTime,
			this.getNextTrain()
		},
		getNextTrain() {
			var currentMin = moment(this.currentTime, "h:mm A").minute();
			var remainder = currentMin % this.frequency;
			var minAway = this.frequency - remainder;
			var nextTrain = moment(this.currentTime, "h:mm A").add(minAway, "m");
			this.nextArrival = nextTrain.format("h:mm A");
		}
	}
    // firebase data
    config firebaseConfig = {
        apiKey: "AIzaSyC3LOThCw74UoaujBPP78RbNovAh9io2aM",
        authDomain: "school-jnm.firebaseapp.com",
        databaseURL: "https://school-jnm.firebaseio.com",
        projectId: "school-jnm",
        storageBucket: "school-jnm.appspot.com",
        messagingSenderId: "1684451610",
        appId: "1:1684451610:web:69965710323daa3857fca3",
        measurementId: "G-JWNBQKD5CF"
    }

