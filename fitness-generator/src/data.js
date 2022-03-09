
/*
 * key for equipment: 
 * BW = Bodyweight
 * DB = dumbbells
 * M = machine
 * BB = barbell
 * TB = trap bar
 * RB = resistance bands
 * P = Plate
 */
const lowerBody = [
    { name: "Box Squat", reps: "3 x 8", equipment: "BW", video: "none", category: "easy" },
    { name: "Wall Sit", reps: "3x8", equipment: "BW", video: "none", category: "easy" },
    { name: "Hip Bridge", reps: "3 x 8", equipment: "BW", video: "none", category: "easy" },
    { name: "Good Mornings", reps: "3x8", equipment: "BW", video: "none", category: "easy" },
    { name: "Romainian Deadlifts", reps: "3 x 8", equipment: "DB", video: "none", category: "easy" },
    { name: "Goblet Squat", reps: "3x8", equipment: "DB", video: "none", category: "easy" },
    { name: "Lunges", reps: "3 x 8", equipment: "DB", video: "none", category: "easy" },
    { name: "Leg Press", reps: "3x8", equipment: "M", video: "none", category: "easy" },
    { name: "Hamstring Curls / Quad Curls", reps: "2 x 6 each", equipment: "M", video: "none", category: "easy" },
    { name: "Hack Squat", reps: "3 x 8", equipment: "M", video: "none", category: "easy" },
    { name: "Cossack Squat", reps: "3x8", equipment: "DB", video: "none", category: "medium" },
    { name: "Hip Thrust", reps: "3 x 8", equipment: "BB", video: "none", category: "medium" },
    { name: "Good Mornings", reps: "3x8", equipment: "BB", video: "none", category: "medium" },
    { name: "Back Leg Lunge", reps: "3 x 8", equipment: "DB", video: "none", category: "medium" },
    { name: "Step Ups", reps: "3x8", equipment: "DB", video: "none", category: "medium" },
    { name: "Trap Bar Deadlift", reps: "3 x 8", equipment: "TB", video: "none", category: "medium" },
    { name: "Bulgarian Split Squat", reps: "3x8", equipment: "BW", video: "none", category: "medium" },
    { name: "Pistol Squat", reps: "3 x 8", equipment: "BW", video: "none", category: "hard" },
    { name: "Barbell Squat", reps: "3x8", equipment: "BB", video: "none", category: "hard" },
    { name: "Front Squat", reps: "3 x 8", equipment: "BB", video: "none", category: "hard" },
    { name: "Zercher Squat", reps: "3x8", equipment: "BB", video: "none", category: "hard" },
    { name: "Zercher Deadlift", reps: "3 x 8", equipment: "BB", video: "none", category: "hard" },
    { name: "Bulgarian Split Squat", reps: "3x8", equipment: "DB", video: "none", category: "hard" },
]

const back = [
    { name: "Seated Cable Rows", reps: "3 x 8", equipment: "M", video: "none", category: "easy" },
    { name: "Cable Face Rows", reps: "3x8", equipment: "M", video: "none", category: "easy" },
    { name: "Machine Rows", reps: "3 x 8", equipment: "M", video: "none", category: "easy" },
    { name: "Cable Lat Pulldowns", reps: "3x8", equipment: "M", video: "none", category: "easy" },
    { name: "Hyperextensions", reps: "3 x 8", equipment: "M", video: "none", category: "easy" },
    { name: "Cable Lat Pull Through", reps: "3x8", equipment: "M", video: "none", category: "easy" },
    { name: "Band Single Arm Rows", reps: "3 x 8", equipment: "RB", video: "none", category: "easy" },
    { name: "Band Rows", reps: "3x8", equipment: "RB", video: "none", category: "easy" },
    { name: "Band Face Pulls", reps: "3 x 8", equipment: "RB", video: "none", category: "easy" },
    { name: "Dead Hangs", reps: "3 x 8", equipment: "BW", video: "none", category: "easy" },
    { name: "Farmer Carry", reps: "3x8", equipment: "DB", video: "none", category: "medium" },
    { name: "Single Arm Dumbbell Rows", reps: "3 x 8", equipment: "DB", video: "none", category: "medium" },
    { name: "Incline Bench Dumbbell Rows", reps: "3x8", equipment: "DB", video: "none", category: "medium" },
    { name: "T-Bar Rows", reps: "3 x 8", equipment: "TB", video: "none", category: "medium" },
    { name: "Negative Pull-Ups", reps: "3x8", equipment: "BW", video: "none", category: "medium" },
    { name: "Pull-ups", reps: "3 x 8", equipment: "BW", video: "none", category: "hard" },
    { name: "Bodyweight Rows", reps: "3 x 8", equipment: "BW", video: "none", category: "hard" },
    { name: "Barbell Rows", reps: "3x8", equipment: "BB", video: "none", category: "hard" },
    { name: "Renegade Rows", reps: "3 x 8", equipment: "DB", video: "none", category: "hard" },
]

//note: decline barbell bench press was medium but regular is hard???? Ask Dan
const chest = [
    { name: "Cable Crossovers", reps: "3 x 8", equipment: "M", video: "none", category: "easy" },
    { name: "Machine Chest Press", reps: "3x8", equipment: "M", video: "none", category: "easy" },
    { name: "Pec Deck", reps: "3 x 8", equipment: "M", video: "none", category: "easy" },
    { name: "Floor Press", reps: "3x8", equipment: "DB", video: "none", category: "easy" },
    { name: "Svend Press", reps: "3 x 8", equipment: "DB", video: "none", category: "easy" },
    { name: "Dumbbell Chest Press", reps: "3x8", equipment: "P", video: "none", category: "easy" },
    { name: "Band Chess Press", reps: "3 x 8", equipment: "RB", video: "none", category: "easy" },
    { name: "Dumbbell Fly", reps: "3x8", equipment: "DB", video: "none", category: "medium" },
    { name: "Incline Dumbbell Bench Press", reps: "3 x 8", equipment: "DB", video: "none", category: "medium" },
    { name: "Dumbbell Pullover", reps: "3 x 8", equipment: "DB", video: "none", category: "medium" },
    { name: "Incline Dumbbell Fly", reps: "3x8", equipment: "DB", video: "none", category: "medium" },
    { name: "Push Ups", reps: "3 x 25", equipment: "BW", video: "none", category: "medium" },
    { name: "Decline Barbell Bench Press", reps: "3x8", equipment: "BB", video: "none", category: "medium" },
    { name: "Barbell Bench Press", reps: "3 x 8", equipment: "BB", video: "none", category: "hard" },
    { name: "Incline Barbell Bench Press", reps: "3x8", equipment: "BB", video: "none", category: "hard" },
    { name: "Pull-ups", reps: "3 x 8", equipment: "BB", video: "none", category: "hard" },
    { name: "Bodyweight Rows", reps: "3 x 8", equipment: "BW", video: "none", category: "hard" },
]

const shoulders = [
    { name: "Band Pull Apart", reps: "3 x 8", equipment: "RB", video: "none", category: "easy" },
    { name: "Band Overhead Press", reps: "3x8", equipment: "RB", video: "none", category: "easy" },
    { name: "Dead Hangs", reps: "3 x 8", equipment: "BW", video: "none", category: "easy" },
    { name: "Cable Lateral Raises", reps: "3x8", equipment: "M", video: "none", category: "easy" },
    { name: "Cable Front Raises", reps: "3 x 8", equipment: "M", video: "none", category: "easy" },
    { name: "Machine Shoulder Press", reps: "3x8", equipment: "M", video: "none", category: "easy" },
    { name: "Lateral Raises", reps: "3 x 8", equipment: "DB", video: "none", category: "medium" },
    { name: "Overhead Press", reps: "3x8", equipment: "DB", video: "none", category: "medium" },
    { name: "Rear Delt Fly", reps: "3 x 8", equipment: "DB", video: "none", category: "medium" },
    { name: "Front Raises", reps: "3 x 8", equipment: "DB", video: "none", category: "medium" },
    { name: "Single Arm Overhead Press", reps: "3x8", equipment: "DB", video: "none", category: "medium" },
    { name: "Z Press", reps: "3 x 8", equipment: "BB", video: "none", category: "hard" },
    { name: "Standing Shoulder Press", reps: "3x8", equipment: "BB", video: "none", category: "hard" },
    { name: "Seated Arnold Press", reps: "3 x 8", equipment: "DB", video: "none", category: "hard" },
    { name: "Standing Arnold Press", reps: "3x8", equipment: "DB", video: "none", category: "hard" },
]

const core = [
    { name: "Bent Knee Wipers", reps: "3 x 8", equipment: "BW", video: "none", category: "easy" },
    { name: "Crunches", reps: "3x8", equipment: "BW", video: "none", category: "easy" },
    { name: "Bird Dog", reps: "3 x 8", equipment: "BW", video: "none", category: "easy" },
    { name: "Superman", reps: "3x8", equipment: "BW", video: "none", category: "easy" },
    { name: "Dead Bug", reps: "3 x 8", equipment: "BW", video: "none", category: "easy" },
    { name: "Ab Crunch Machine", reps: "3x8", equipment: "M", video: "none", category: "easy" },
    { name: "Flutter Kicks", reps: "3 x 8", equipment: "BW", video: "none", category: "medium" },
    { name: "Mountain Climbers", reps: "3 x 8", equipment: "BW", video: "none", category: "medium" },
    { name: "Plank", reps: "3x8", equipment: "BW", video: "none", category: "medium" },
    { name: "Lying Leg Raises", reps: "3 x 8", equipment: "BW", video: "none", category: "medium" },
    { name: "V-Ups", reps: "3 x 8", equipment: "BW", video: "none", category: "medium" },
    { name: "Russian Twists", reps: "3x8", equipment: "DB", video: "none", category: "medium" },
    { name: "Hanging Leg Raises", reps: "3 x 8", equipment: "BW", video: "none", category: "hard" },
    { name: "Bicycle Crunch", reps: "3x8", equipment: "BW", video: "none", category: "hard" },
    { name: "Decline Sit Ups", reps: "3 x 8", equipment: "BW", video: "none", category: "hard" },
    { name: "Wood Chops", reps: "3x8", equipment: "DB", video: "none", category: "hard" },
]


const biceps = [
    { name: "Hammer Curls", reps: "3 x 8", equipment: "DB", video: "none", category: "easy" },
    { name: "Supinating Curls", reps: "3x8", equipment: "DB", video: "none", category: "easy" },
    { name: "Cable Curls", reps: "3 x 8", equipment: "M", video: "none", category: "easy" },
    { name: "Band Curls", reps: "3x8", equipment: "RB", video: "none", category: "easy" },
    { name: "Barbell Curls", reps: "3 x 8", equipment: "BB", video: "none", category: "medium" },
    { name: "Reverse Curls", reps: "3 x 8", equipment: "BB", video: "none", category: "medium" },
    { name: "Incline Curls", reps: "3x8", equipment: "DB", video: "none", category: "medium" },
    { name: "Alernating Supinating Curls", reps: "3 x 8", equipment: "DB", video: "none", category: "medium" },
    { name: "Alternating Hammer Curls", reps: "3 x 8", equipment: "DB", video: "none", category: "medium" },
    { name: "Overhead Cable Curls", reps: "3x8", equipment: "M", video: "none", category: "medium" },
    { name: "Chin Ups", reps: "3 x 8", equipment: "BW", video: "none", category: "hard" },
    { name: "Concentration Curls", reps: "3x8", equipment: "DB", video: "none", category: "hard" },
    { name: "Zottman Curls", reps: "3 x 8", equipment: "DB", video: "none", category: "hard" },
    { name: "Drag Curls", reps: "3x8", equipment: "BB", video: "none", category: "hard" },
]

const triceps = [
    { name: "Band Tricep Kickback", reps: "3 x 8", equipment: "RB", video: "none", category: "easy" },
    { name: "Tricep Machine Dip", reps: "3x8", equipment: "M", video: "none", category: "easy" },
    { name: "Cable Standing Overhead Extension", reps: "3 x 8", equipment: "M", video: "none", category: "easy" },
    { name: "Cable Tricep Kickback", reps: "3x8", equipment: "M", video: "none", category: "easy" },
    { name: "Bench Dips", reps: "3 x 8", equipment: "BW", video: "none", category: "medium" },
    { name: "Standing Overhead Extension", reps: "3 x 8", equipment: "DB", video: "none", category: "medium" },
    { name: "Lying Overhead Extension", reps: "3x8", equipment: "DB", video: "none", category: "medium" },
    { name: "Tricep Kickback", reps: "3 x 8", equipment: "DB", video: "none", category: "medium" },
    { name: "Chest Dips", reps: "3x8", equipment: "BW", video: "none", category: "hard" },
    { name: "Diamond Push Ups", reps: "3 x 8", equipment: "BW", video: "none", category: "hard" },
    { name: "Close Grip Bench Press", reps: "3x8", equipment: "BB", video: "none", category: "hard" },
]

const strengthValues = [
    { name: "Upper Body Strength", range: "0.0 - 1.0" },
    { name: "Lower Body Strength", range: "0.0 - 1.0" },
    { name: "Core Strength", range: "0.0 - 1.0" },
    { name: "Total Strength", range: "0.0 - 3.0" },
    { name: "Intensity", range: "0.0 - 3.0"}
]

export const data = {
    lowerBody,
    back,
    chest,
    shoulders,
    core,
    biceps,
    triceps,
    strengthValues
}