var age = document.getElementById("age");
        var height = document.getElementById("height");
        var weight = document.getElementById("weight");
        var male = document.getElementById("male");
        var female = document.getElementById("female");
        var resultArea = document.querySelector(".comment");

        function calculate() {
            if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)) {
                alert("Incomplete Mission! Fill in all the details to unlock your full HMI potential.");
            } else {
                countBmi();
            }
        }

        function countBmi() {
            var p = [age.value, height.value, weight.value];
            if (male.checked) {
                p.push("male");
            } else if (female.checked) {
                p.push("female");
            } console.log(p)

            var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);
            var result = '';

            if (bmi < 18.5) {
                result = 'Starving Struggler! (Underweight)';
            } else if (18.5 <= bmi && bmi <= 24.9) {
                result = 'Golden Hero! (Ideal)';
            } else if (25 <= bmi && bmi <= 29.9) {
                result = 'Bulk Up Hero! (Overweight)';
            } else if (30 <= bmi && bmi <= 34.9) {
                result = 'Titan! (Obese)';
            } else if (35 <= bmi) {
                result = 'Cosmic Colossus! (Extremely Obese)';
            } console.log(bmi)

            resultArea.style.display = "block";
            document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
            document.querySelector("#result").innerText = bmi.toFixed(2);
        }

        function textImt() {
            var bmi = Number(document.querySelector("#result").innerText);
            var result = '';

            if (bmi < 18.5) {
                result = 'Starving Struggler! Your power levels are low. Fuel up with a balanced diet designed for heroes like you. Talk to a registered dietitian to craft a plan that unleashes your full potential.';
            } else if (18.5 <= bmi && bmi <= 24.9) {
                result = 'Golden Hero! You are at peak performance! Keep up the stellar work with a healthy diet and fitness routine. The world needs heroes in top form!';
            } else if (25 <= bmi && bmi <= 29.9) {
                result = 'Bulk Up Hero! You have got incredible might, but remember, agility is key too! Consider adding some healthy exercise to your routine. A well-rounded hero is unstoppable!';
            } else if (30 <= bmi && bmi <= 34.9) {
                result = 'Titan! Your resilience is off the charts! To truly master your power, consider incorporating regular exercise with your diet. A trained powerhouse is a force to be reckoned with!';
            } else if (35 <= bmi) {
                result = 'Cosmic Colossus! Your size is awe-inspiring! To optimize your health and hero potential, consult a doctor to create a personalized plan for a healthy diet and exercise. Remember, even giants need to take care of themselves!';
            }

            document.querySelector(".keterangan").innerHTML = `<span id="keterangan">${result}</span>`;
        }