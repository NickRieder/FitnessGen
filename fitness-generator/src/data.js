//value = number of pushups. Function determines upper body score based on averages for gender and age
export function upperBodyScore(value, gender, age) {
    var score  = 0;
    if (gender == 'M') {
        if (age <= 39) {
            switch (true) {
                case (value < 8):
                    score = 1;
                    break;
                case (value >= 8 && value <= 15):
                    score = 2;
                    break;
                case (value > 15 && value <= 30):
                    score = 3;
                    break;
                case (value > 30 && value <= 40):
                    score = 4;
                    break;
                case (value > 40):
                    score = 5;
                    break;
                default:
                    score = 1;
                    break;
            }
            
        } else {
            switch (true) {
                case (value < 5):
                    score = 1;
                    break;
                case (value >= 5 && value <= 8):
                    score = 2;
                    break;
                case (value > 8 && value <= 18):
                    score = 3;
                    break;
                case (value > 18 && value <= 25):
                    score = 4;
                    break;
                case (value > 25):
                    score = 5;
                    break;
                default:
                    score = 1;
                    break;
            }
        }
    } else {
        if (age <= 39) {
            switch (true) {
                case (value < 5):
                    score = 1;
                    break;
                case (value >= 5 && value <= 9):
                    score = 2;
                    break;
                case (value > 9 && value <= 20):
                    score = 3;
                    break;
                case (value > 20 && value <= 30):
                    score = 4;
                    break;
                case (value > 30):
                    score = 5;
                    break;
                default:
                    score = 1;
                    break;
            }
        } else {
            switch (true) {
                case (value < 3):
                    score = 1;
                    break;
                case (value >= 3 && value <= 6):
                    score = 2;
                    break;
                case (value > 6 && value <= 15):
                    score = 3;
                    break;
                case (value > 15 && value <= 20):
                    score = 4;
                    break;
                case (value > 20):
                    score = 5;
                    break;
                default:
                    score = 1;
                    break;
            }
        }
    }
    return score;
}

//value = time of wall sit (in seconds). Function determines lower body score based on averages for gender and age
export function lowerBodyScore(value, gender, age) {
    var score = 0;
    if (gender == 'M') {
            switch (true) {
                case (value < 25):
                    score = 1;
                    break;
                case (value >= 25 && value <= 49):
                    score = 2;
                    break;
                case (value > 49 && value <= 75):
                    score = 3;
                    break;
                case (value > 75 && value <= 99):
                    score = 4;
                    break;
                case (value > 99):
                    score = 5;
                    break;
                default:
                    score = 1;
                    break;
            }
    } else {
       
            switch (true) {
                case (value < 20):
                    score = 1;
                    break;
                case (value >= 20 && value <= 35):
                    score = 2;
                    break;
                case (value > 35 && value <= 45):
                    score = 3;
                    break;
                case (value > 45 && value <= 60):
                    score = 4;
                    break;
                case (value > 60):
                    score = 5;
                    break;
                default:
                    score = 1;
                    break;
            }
        
    }
    return score;
}

//value = time for plank (in seconds). Function determines core score based on averages for gender and age
export function coreScore(value, gender, age) {
    var score = 0;
    if (gender == 'M') {
        if (age <= 39) {
            switch (true) {
                case (value < 35):
                    score = 1;
                    break;
                case (value >= 35 && value <= 69):
                    score = 2;
                    break;
                case (value > 69 && value <= 110):
                    score = 3;
                    break;
                case (value > 110 && value <= 150):
                    score = 4;
                    break;
                case (value > 150):
                    score = 5;
                    break;
                default:
                    score = 1;
                    break;
            }

        } else {
            switch (true) {
                case (value < 20):
                    score = 1;
                    break;
                case (value >= 20 && value <= 39):
                    score = 2;
                    break;
                case (value > 39 && value <= 80):
                    score = 3;
                    break;
                case (value > 80 && value <= 130):
                    score = 4;
                    break;
                case (value > 130):
                    score = 5;
                    break;
                default:
                    score = 1;
                    break;
            }
        }
    } else {
        if (age <= 39) {
            switch (true) {
                case (value < 25):
                    score = 1;
                    break;
                case (value >= 25 && value <= 49):
                    score = 2;
                    break;
                case (value > 49 && value <= 80):
                    score = 3;
                    break;
                case (value > 80 && value <= 120):
                    score = 4;
                    break;
                case (value > 120):
                    score = 5;
                    break;
                default:
                    score = 1;
                    break;
            }
        } else {
            switch (true) {
                case (value < 15):
                    score = 1;
                    break;
                case (value >= 15 && value <= 34):
                    score = 2;
                    break;
                case (value > 34 && value <= 70):
                    score = 3;
                    break;
                case (value > 70 && value <= 120):
                    score = 4;
                    break;
                case (value > 120):
                    score = 5;
                    break;
                default:
                    score = 1;
                    break;
            }
        }
    }
    return score;
}
