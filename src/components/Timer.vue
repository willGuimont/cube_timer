<template>
    <div>
        <h1 class="title">Cube Timer</h1>
        <h2 class="inspection-time">
            Inspection time
        </h2>
        <div class="inspect-time-container">
            <input class="inspection-input" type="number" min="0" step="1" v-model="inspectionTime" @change="setInspectionTime">
            <p>Seconds</p>
        </div>
        <h2 class="timer">{{ timeString }}</h2>
        <div class="action-buttons">
            <button :disabled="isStartButtonDisabled()" class="button is-success is-rounded action-button"
                    v-on:click="startTimer()">Start
            </button>
            <button :disabled="isPauseButtonDisabled()" class="button is-danger is-rounded action-button"
                    v-on:click="pauseTimer()">Pause
            </button>
            <button :disabled="isResetButtonDisabled()" class="button is-rounded action-button"
                    v-on:click="resetTimer()">Reset
            </button>
            <p>Press space to start/stop/reset</p>
        </div>
    </div>
</template>

<script src="./Timer.js"></script>>
<style lang="css" src="./Timer.css"></style>