'use strict';

function openmodel() {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

function show() {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}