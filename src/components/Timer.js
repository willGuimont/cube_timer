export default {
    data: () => {
        return {
            timerStates: Object.freeze({
                Running: "running",
                Paused: "paused",
                Reset: "reset"
            }),

            secondsPerMinutes: 60,
            timeString: "",
            timeSeconds: 0,
            state: null,
            inspectionTime: 15
        };
    },
    methods: {
        startTimer() {
            this.state = this.timerStates.Running;
            this.setInspectionTime();
            this.tick();
        },
        pauseTimer() {
            this.state = this.timerStates.Paused;
        },
        resetTimer() {
            this.state = this.timerStates.Reset;
            this.setInspectionTime();
        },
        toggleState() {
            // eslint-disable-next-line
            switch (this.state) {
                case this.timerStates.Running:
                    this.pauseTimer();
                    break;
                case this.timerStates.Paused:
                    this.resetTimer();
                    break;
                case this.timerStates.Reset:
                    this.startTimer();
                    break;
            }
        },
        isStartButtonDisabled() {
            return !(this.state === this.timerStates.Reset);
        },
        isPauseButtonDisabled() {
            return !(this.state === this.timerStates.Running);
        },
        isResetButtonDisabled() {
            return !(this.state === this.timerStates.Running || this.state === this.timerStates.Paused);
        },
        setInspectionTime() {
            this.timeSeconds = -this.inspectionTime;
            this.updateTimeString();
        },
        tick: function () {
            if (this.state === this.timerStates.Running) {
                this.updateTimeString();
                this.timeSeconds += 1;
            }
        },
        updateTimeString: function () {
            const absSeconds = Math.abs(this.timeSeconds);
            let minutes = Math.floor(
                absSeconds / this.secondsPerMinutes
            ).toString();

            if (minutes.length < 2) {
                minutes = "0" + minutes;
            }

            let seconds = (absSeconds % this.secondsPerMinutes).toString();
            if (seconds.length < 2) {
                seconds = "0" + seconds;
            }
            let signum = Math.sign(this.timeSeconds) < 0 ? '-' : '+';
            this.timeString = `${signum}${minutes}:${seconds}`;
        },
    },
    mounted: function () {
        setInterval(this.tick, 1000);
        this.setInspectionTime();
        this.state = this.timerStates.Reset;
        window.addEventListener('keydown', (e) => {
            if (e.key === ' ') {
                this.toggleState();
            }
        });
    }
};
