//value = number of pushups. Function determines upper body score based on averages for gender and age
export function upperBodyScore(value, gender, age) {
    var score  = 0;
    if (gender === 'M') {
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
    if (gender === 'M') {
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
    if (gender === 'M') {
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

export function wallSitScore(time, gender) {
  var score = 0;
  if (gender == "M") {
    if (time < 22) {
      score = 1;
    } else if (time < 29) {
      score = 2;
    } else if (time < 40) {
      score = 3;
    } else if (time < 45) {
      score = 4;
    } else {
      score = 5;
    }
  } else {
    if (time < 13) {
      score = 1;
    } else if (time < 21) {
      score = 2;
    } else if (time < 34) {
      score = 3;
    } else if (time < 39) {
      score = 4;
    } else {
      score = 5;
    }

  }
  return score;
}

export function benchScore(gender, weight, amount) {
  var score = 0
  if (gender == "M") {
    if (weight == "<97") {

      if (amount <= 85) { score = 1; }
      else if (amount <= 100) { score = 2; }
      else if (amount <= 130) { score = 3; }
      else if (amount <= 180) { score = 4; }
      else if (amount <= 220) { score = 5; }

    } else if (weight == "97-104") {

      if (amount <= 85) { score = 1; }
      else if (amount <= 100) { score = 2; }
      else if (amount <= 130) { score = 3; }
      else if (amount <= 180) { score = 4; }
      else if (amount <= 220) { score = 5; }

    } else if (weight == "105-113") {

      if (amount <= 85) { score = 1; }
      else if (amount <= 100) { score = 2; }
      else if (amount <= 130) { score = 3; }
      else if (amount <= 180) { score = 4; }
      else if (amount <= 220) { score = 5; }

    } else if (weight == "114-122") {

      if (amount <= 85) { score = 1; }
      else if (amount <= 100) { score = 2; }
      else if (amount <= 130) { score = 3; }
      else if (amount <= 180) { score = 4; }
      else if (amount <= 220) { score = 5; }

    } else if (weight == "123-131") {

      if (amount <= 90) { score = 1; }
      else if (amount <= 115) { score = 2; }
      else if (amount <= 140) { score = 3; }
      else if (amount <= 195) { score = 4; }
      else if (amount <= 240) { score = 5; }

    } else if (weight == "132-147") {

      if (amount <= 100) { score = 1; }
      else if (amount <= 125) { score = 2; }
      else if (amount <= 155) { score = 3; }
      else if (amount <= 210) { score = 4; }
      else if (amount <= 260) { score = 5; }

    } else if (weight == "148-164") {

      if (amount <= 110) { score = 1; }
      else if (amount <= 140) { score = 2; }
      else if (amount <= 170) { score = 3; }
      else if (amount <= 235) { score = 4; }
      else if (amount <= 290) { score = 5; }

    } else if (weight == "165-180") {

      if (amount <= 120) { score = 1; }
      else if (amount <= 150) { score = 2; }
      else if (amount <= 185) { score = 3; }
      else if (amount <= 255) { score = 4; }
      else if (amount <= 320) { score = 5; }

    } else if (weight == "181-197") {

      if (amount <= 130) { score = 1; }
      else if (amount <= 165) { score = 2; }
      else if (amount <= 200) { score = 3; }
      else if (amount <= 275) { score = 4; }
      else if (amount <= 345) { score = 5; }

    } else if (weight == "198-219") {

      if (amount <= 135) { score = 1; }
      else if (amount <= 175) { score = 2; }
      else if (amount <= 215) { score = 3; }
      else if (amount <= 290) { score = 4; }
      else if (amount <= 360) { score = 5; }

    } else if (weight == "220-241") {

      if (amount <= 140) { score = 1; }
      else if (amount <= 185) { score = 2; }
      else if (amount <= 225) { score = 3; }
      else if (amount <= 305) { score = 4; }
      else if (amount <= 380) { score = 5; }

    } else if (weight == "242-275") {

      if (amount <= 145) { score = 1; }
      else if (amount <= 190) { score = 2; }
      else if (amount <= 230) { score = 3; }
      else if (amount <= 315) { score = 4; }
      else if (amount <= 395) { score = 5; }

    } else if (weight == "276-318") {

      if (amount <= 150) { score = 1; }
      else if (amount <= 195) { score = 2; }
      else if (amount <= 240) { score = 3; }
      else if (amount <= 325) { score = 4; }
      else if (amount <= 405) { score = 5; }

    } else if (weight == ">318") {

      if (amount <= 155) { score = 1; }
      else if (amount <= 200) { score = 2; }
      else if (amount <= 245) { score = 3; }
      else if (amount <= 335) { score = 4; }
      else if (amount <= 415) { score = 5; }

    }
  }
  else {
    if (weight == "<97") {

      if (amount <= 50) { score = 1; }
      else if (amount <= 65) { score = 2; }
      else if (amount <= 75) { score = 3; }
      else if (amount <= 95) { score = 4; }
      else if (amount <= 115) { score = 5; }

    } else if (weight == "97-104") {

      if (amount <= 50) { score = 1; }
      else if (amount <= 65) { score = 2; }
      else if (amount <= 75) { score = 3; }
      else if (amount <= 95) { score = 4; }
      else if (amount <= 115) { score = 5; }

    } else if (weight == "105-113") {

      if (amount <= 55) { score = 1; }
      else if (amount <= 70) { score = 2; }
      else if (amount <= 80) { score = 3; }
      else if (amount <= 100) { score = 4; }
      else if (amount <= 125) { score = 5; }

    } else if (weight == "114-122") {

      if (amount <= 60) { score = 1; }
      else if (amount <= 75) { score = 2; }
      else if (amount <= 85) { score = 3; }
      else if (amount <= 110) { score = 4; }
      else if (amount <= 135) { score = 5; }

    } else if (weight == "123-131") {

      if (amount <= 65) { score = 1; }
      else if (amount <= 80) { score = 2; }
      else if (amount <= 90) { score = 3; }
      else if (amount <= 115) { score = 4; }
      else if (amount <= 140) { score = 5; }

    } else if (weight == "132-147") {

      if (amount <= 70) { score = 1; }
      else if (amount <= 85) { score = 2; }
      else if (amount <= 95) { score = 3; }
      else if (amount <= 125) { score = 4; }
      else if (amount <= 150) { score = 5; }

    } else if (weight == "148-164") {

      if (amount <= 75) { score = 1; }
      else if (amount <= 90) { score = 2; }
      else if (amount <= 105) { score = 3; }
      else if (amount <= 135) { score = 4; }
      else if (amount <= 165) { score = 5; }

    } else if (weight == "165-180") {

      if (amount <= 80) { score = 1; }
      else if (amount <= 95) { score = 2; }
      else if (amount <= 115) { score = 3; }
      else if (amount <= 145) { score = 4; }
      else if (amount <= 185) { score = 5; }

    } else if (weight == "181-197") {

      if (amount <= 85) { score = 1; }
      else if (amount <= 110) { score = 2; }
      else if (amount <= 120) { score = 3; }
      else if (amount <= 160) { score = 4; }
      else if (amount <= 195) { score = 5; }

    } else if (weight == "198-219") {

      if (amount <= 90) { score = 1; }
      else if (amount <= 115) { score = 2; }
      else if (amount <= 130) { score = 3; }
      else if (amount <= 165) { score = 4; }
      else if (amount <= 205) { score = 5; }

    } else if (weight == "220-241") {

      if (amount <= 90) { score = 1; }
      else if (amount <= 115) { score = 2; }
      else if (amount <= 130) { score = 3; }
      else if (amount <= 165) { score = 4; }
      else if (amount <= 205) { score = 5; }

    } else if (weight == "242-275") {

      if (amount <= 90) { score = 1; }
      else if (amount <= 115) { score = 2; }
      else if (amount <= 130) { score = 3; }
      else if (amount <= 165) { score = 4; }
      else if (amount <= 205) { score = 5; }

    } else if (weight == "276-318") {

      if (amount <= 90) { score = 1; }
      else if (amount <= 115) { score = 2; }
      else if (amount <= 130) { score = 3; }
      else if (amount <= 165) { score = 4; }
      else if (amount <= 205) { score = 5; }

    } else if (weight == ">318") {

      if (amount <= 90) { score = 1; }
      else if (amount <= 115) { score = 2; }
      else if (amount <= 130) { score = 3; }
      else if (amount <= 165) { score = 4; }
      else if (amount <= 205) { score = 5; }

    }
  }
    return score;
}

export function squatScore(amount, weight, gender) {
  var score = 0;
  if (gender == 'M') {
    switch (weight) {
      case "<114":
        if (amount <= 78) { // Un-trained
          return 1;
        } else if (amount > 78 && amount <= 144) { // Novice
          return 2;
        } else if (amount > 144 && amount <= 174) { // Intermediate
          return 3;
        } else if (amount > 174 && amount <= 240) { // Advanced
          return 4;
        } else { // Elite
          return 5;
        }
      case "115-123":
        if (amount <= 84) { // Un-trained
          return 1;
        } else if (amount > 84 && amount <= 155) { // Novice
          return 2;
        } else if (amount > 155 && amount <= 190) { // Intermediate
          return 3;
        } else if (amount > 190 && amount <= 259) { // Advanced
          return 4;
        } else { // Elite
          return 5;
        }
      case "124-132":
        if (amount <= 91) { // Un-trained
          return 1;
        } else if (amount > 91 && amount <= 168) { // Novice
          return 2;
        } else if (amount > 168 && amount <= 205) { // Intermediate
          return 3;
        } else if (amount > 205 && amount <= 278) { // Advanced
          return 4;
        } else { // Elite
          return 5;
        }
      case "133-148":
        if (amount <= 101) { // Un-trained
          return 1;
        } else if (amount > 101 && amount <= 188) { // Novice
          return 2;
        } else if (amount > 188 && amount <= 230) { // Intermediate
          return 3;
        } else if (amount > 230 && amount <= 313) { // Advanced
          return 4;
        } else { // Elite
          return 5;
        }
      case "149-165":
        if (amount <= 110) { // Un-trained
          return 1;
        } else if (amount > 110 && amount <= 204) { // Novice
          return 2;
        } else if (amount > 204 && amount <= 250) { // Intermediate
          return 3;
        } else if (amount > 250 && amount <= 342) { // Advanced
          return 4;
        } else { // Elite
          return 5;
        }
      case "166-181":
        if (amount <= 119) { // Un-trained
          return 1;
        } else if (amount > 119 && amount <= 220) { // Novice
          return 2;
        } else if (amount > 220 && amount <= 269) { // Intermediate
          return 3;
        } else if (amount > 269 && amount <= 367) { // Advanced
          return 4;
        } else { // Elite
          return 5;
        }
      case "182-198":
        if (amount <= 125) { // Un-trained
          return 1;
        } else if (amount > 125 && amount <= 232) { // Novice
          return 2;
        } else if (amount > 232 && amount <= 285) { // Intermediate
          return 3;
        } else if (amount > 285 && amount <= 387) { // Advanced
          return 4;
        } else { // Elite
          return 5;
        }
      case "199-220":
        if (amount <= 132) { // Un-trained
          return 1;
        } else if (amount > 132 && amount <= 244) { // Novice
          return 2;
        } else if (amount > 244 && amount <= 301) { // Intermediate
          return 3;
        } else if (amount > 301 && amount <= 409) { // Advanced
          return 4;
        } else { // Elite
          return 5;
        }
      case "221-242":
        if (amount <= 137) { // Un-trained
          return 1;
        } else if (amount > 137 && amount <= 255) { // Novice
          return 2;
        } else if (amount > 255 && amount <= 311) { // Intermediate
          return 3;
        } else if (amount > 311 && amount <= 423) { // Advanced
          return 4;
        } else { // Elite
          return 5;
        }
      case "243-275":
        if (amount <= 141) { // Un-trained
          return 1;
        } else if (amount > 141 && amount <= 261) { // Novice
          return 2;
        } else if (amount > 261 && amount <= 319) { // Intermediate
          return 3;
        } else if (amount > 319 && amount <= 435) { // Advanced
          return 4;
        } else { // Elite
          return 5;
        }
      case "276-319":
        if (amount <= 144) { // Un-trained
          return 1;
        } else if (amount > 144 && amount <= 267) { // Novice
          return 2;
        } else if (amount > 267 && amount <= 326) { // Intermediate
          return 3;
        } else if (amount > 326 && amount <= 445) { // Advanced
          return 4;
        } else { // Elite
          return 5;
        }
      case ">320":
        if (amount <= 147) { // Un-trained
          return 1;
        } else if (amount > 147 && amount <= 272) { // Novice
          return 2;
        } else if (amount > 272 && amount <= 332) { // Intermediate
          return 3;
        } else if (amount > 332 && amount <= 454) { // Advanced
          return 4;
        } else { // Elite
          return 5;
        }
    }
  } else {
      if (weight == "<97" || weight == "97-104") {
        if (amount < 84) {
          score = 1;
        } else if (amount < 98) {
          score = 2;
        } else if (amount < 129) {
          score = 3;
        } else if (amount < 163) {
          score = 4;
        } else {
          score = 5;
        }
      } else if (weight == "105-113") {
        if (amount < 91) {
          score = 1;
        } else if (amount < 106) {
          score = 2;
        } else if (amount < 140) {
          score = 3;
        } else if (amount < 174) {
          score = 4;
        } else {
          score = 5;
        }
      } else if (weight == "114-122") {
        if (amount < 98) {
          score = 1;
        } else if (amount < 114) {
          score = 2;
        } else if (amount < 150) {
          score = 3;
        } else if (amount < 187) {
          score = 4;
        } else {
          score = 5;
        }
      } else if (weight == "123-131") {
        if (amount < 103) {
          score = 1;
        } else if (amount < 121) {
          score = 2;
        } else if (amount < 160) {
          score = 3;
        } else if (amount < 199) {
          score = 4;
        } else {
          score = 5;
        }
      } else if (weight == "132-147") {
        if (amount < 110) {
          score = 1;
        } else if (amount < 127) {
          score = 2;
        } else if (amount < 168) {
          score = 3;
        } else if (amount < 211) {
          score = 4;
        } else {
          score = 5;
        }
      } else if (weight == "148-164") {
        if (amount < 121) {
          score = 1;
        } else if (amount < 141) {
          score = 2;
        } else if (amount < 185) {
          score = 3;
        } else if (amount < 232) {
          score = 4;
        } else {
          score = 5;
        }
      } else if (weight == "165-180") {
        if (amount < 130) {
          score = 1;
        } else if (amount < 151) {
          score = 2;
        } else if (amount < 200) {
          score = 3;
        } else if (amount < 256) {
          score = 4;
        } else {
          score = 5;
        }
      } else if (weight == "181-197") {
        if (amount < 139) {
          score = 1;
        } else if (amount < 164) {
          score = 2;
        } else if (amount < 215) {
          score = 3;
        } else if (amount < 268) {
          score = 4;
        } else {
          score = 5;
        }
      } else {
        if (amount < 150) {
          score = 1;
        } else if (amount < 174) {
          score = 2;
        } else if (amount < 229) {
          score = 3;
        } else if (amount < 288) {
          score = 4;
        } else {
          score = 5;
        }
      }
  }
  return score;
}

export function pushUpScore(amount, gender, age) {
  if (gender == 'M') {
    switch (age) {
      case "20-29":
        switch (amount) {
          case amount > 54:
            return 5;
          case amount >= 45 && amount <=54:
            return 4;
          case amount >= 35 && amount <= 44:
            return 3;
          case amount >= 20 && amount <= 34:
            return 2;
          case amount < 20:
            return 1;
        }
      case "30-39":
        switch (amount) {
          case amount > 44:
            return 5;
          case amount >= 35 && amount <= 44:
            return 4;
          case amount >= 25 && amount <= 34:
            return 3;
          case amount >= 15 && amount <= 24:
            return 2;
          case amount < 15:
            return 1;
        }
      case "40-49":
        switch (amount) {
          case amount > 39:
            return 5;
          case amount >= 30 && amount <= 39:
            return 4;
          case amount >= 20 && amount <= 29:
            return 3;
          case amount >= 12 && amount <= 19:
            return 2;
          case amount < 12:
            return 1;
        }
      case "50-59":
        switch (amount) {
          case amount > 34:
            return 5;
          case amount >= 25 && amount <= 34:
            return 4;
          case amount >= 15 && amount <= 24:
            return 3;
          case amount >= 8 && amount <= 14:
            return 2;
          case amount < 8:
            return 1;
        }
      case "60+":
        switch (amount) {
          case amount > 29:
            return 5;
          case amount >= 20 && amount <= 29:
            return 4;
          case amount >= 10 && amount <= 19:
            return 3;
          case amount >= 5 && amount <= 9:
            return 2;
          case amount < 5:
            return 1;
        }
    }
  } else {
    switch (age) {
      case "20-29":
        switch (amount) {
          case amount > 48:
            return 5;
          case amount >= 34 && amount <= 48:
            return 4;
          case amount >= 17 && amount <= 33:
            return 3;
          case amount >= 6 && amount <= 16:
            return 2;
          case amount < 6:
            return 1;
        }
      case "30-39":
        switch (amount) {
          case amount > 39:
            return 5;
          case amount >= 25 && amount <= 39:
            return 4;
          case amount >= 12 && amount <= 24:
            return 3;
          case amount >= 4 && amount <= 11:
            return 2;
          case amount < 4:
            return 1;
        }
      case "40-49":
        switch (amount) {
          case amount > 34:
            return 5;
          case amount >= 20 && amount <= 34:
            return 4;
          case amount >= 8 && amount <= 19:
            return 3;
          case amount >= 3 && amount <= 7:
            return 2;
          case amount < 3:
            return 1;
        }
      case "50-59":
        switch (amount) {
          case amount > 29:
            return 5;
          case amount >= 15 && amount <= 29:
            return 4;
          case amount >= 6 && amount <= 14:
            return 3;
          case amount >= 2 && amount <= 5:
            return 2;
          case amount < 2:
            return 1;
        }
      case "60+":
        switch (amount) {
          case amount > 19:
            return 5;
          case amount >= 5 && amount <= 19:
            return 4;
          case amount >= 3 && amount <= 4:
            return 3;
          case amount >= 1 && amount <= 2:
            return 2;
          case amount < 1:
            return 1;
        }
    }
  }
}

export function plankScore(time) {
  var score = 0;
  if (time = 0) {
    score = 1;
  } else if (time < 20) {
    score = 2;
  } else if (time < 80) {
    score = 3;
  } else if (time < 100) {
    score = 4;
  } else {
    score = 5;
  }
  return score;
}


