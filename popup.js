var PopupController = function () {
    this.enbutton_ = document.getElementById("enCrypt");
    this.debutton_ = document.getElementById("deCrypt");
    this.password_ = document.getElementById("input");
    this.search_ = document.getElementById("search");
    this.enListener_();
    this.deListener_();
};

PopupController.prototype = {

    //constructor
    enbutton_: null,
    debutton_: null,
    password_: null,
    search_: null,


    enListener_: function () {
        this.enbutton_.addEventListener("click", this.handleClick_.bind(this));
    },

    deListener_: function () {
        this.debutton_.addEventListener("click", this.handleClick_.bind(this));
    },

    //Actual button function
    handleClick_: function () {
        if (this.password_.value === "") {
            alert("Error, no password entered.");
        }
        else {
            var success = document.createElement("div");
            success.classList.add("overlay");
            success.setAttribute("role", "alert");
            success.textContent = "Password has been processed: " + this.password_.value;
            document.body.appendChild(success);
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    window.PC = new PopupController();
});