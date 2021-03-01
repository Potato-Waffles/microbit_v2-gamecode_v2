input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    control.reset()
})
input.onButtonPressed(Button.AB, function () {
    soundExpression.giggle.play()
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    Dice_Role = randint(1, 5)
    Dice_rolled = true
    basic.showNumber(Dice_Role)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(250)
})
let Question_not_answered = false
let Score = 0
let list: number[] = []
let Current_Question = 0
let Timer = 0
let Tone = 0
let Dice_rolled = false
let Dice_Role = 0
music.setBuiltInSpeakerEnabled(true)
basic.pause(100)
let Quiz_answered = true
Dice_Role = 0
soundExpression.happy.play()
basic.showString("Hi!")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (Dice_rolled) {
        if (Dice_Role == 1) {
            Dice_rolled = false
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            basic.clearScreen()
            basic.pause(100)
            Tone = 130
            Timer = 480
            for (let index = 0; index <= Timer / 5 - 3; index++) {
                basic.showString("" + (Timer - index * 5))
                basic.pause(5000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            for (let index2 = 0; index2 <= 10; index2++) {
                basic.showString("" + (10 - index2))
                basic.pause(1000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            basic.clearScreen()
            basic.showString("Times Up!")
        } else if (Dice_Role == 2) {
            Dice_rolled = false
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            basic.clearScreen()
            basic.pause(100)
            Tone = 130
            Timer = 180
            for (let index3 = 0; index3 <= Timer / 5 - 3; index3++) {
                basic.showString("" + (Timer - index3 * 5))
                basic.pause(5000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            for (let index4 = 0; index4 <= 10; index4++) {
                basic.showString("" + (10 - index4))
                basic.pause(1000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            basic.clearScreen()
            basic.showString("Times Up")
        } else if (Dice_Role == 3) {
            Dice_rolled = false
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            basic.clearScreen()
            basic.pause(100)
            Tone = 130
            Timer = 300
            for (let index5 = 0; index5 <= Timer / 5 - 3; index5++) {
                basic.showString("" + (Timer - index5 * 5))
                basic.pause(5000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            for (let index6 = 0; index6 <= 10; index6++) {
                basic.showString("" + (10 - index6))
                basic.pause(1000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            basic.clearScreen()
            basic.showString("Times Up")
        } else if (Dice_Role == 4) {
            Dice_rolled = false
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            basic.clearScreen()
            basic.pause(100)
            Tone = 130
            Timer = 240
            for (let index7 = 0; index7 <= Timer / 5 - 3; index7++) {
                basic.showString("" + (Timer - index7 * 5))
                basic.pause(5000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            for (let index8 = 0; index8 <= 10; index8++) {
                basic.showString("" + (10 - index8))
                basic.pause(1000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            basic.clearScreen()
            basic.showString("Times Up")
        } else if (Dice_Role == 5) {
            Dice_rolled = false
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            basic.clearScreen()
            basic.pause(100)
            Tone = 130
            Timer = 240
            for (let index9 = 0; index9 <= Timer / 5 - 3; index9++) {
                basic.showString("" + (Timer - index9 * 5))
                basic.pause(5000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            for (let index10 = 0; index10 <= 10; index10++) {
                basic.showString("" + (10 - index10))
                basic.pause(1000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            basic.clearScreen()
            basic.showString("Times Up")
        } else if (Dice_Role == 6) {
            Dice_rolled = false
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            basic.clearScreen()
            basic.pause(100)
            Tone = 130
            Timer = 120
            for (let index11 = 0; index11 <= Timer / 5 - 3; index11++) {
                basic.showString("" + (Timer - index11 * 5))
                basic.pause(5000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            for (let index12 = 0; index12 <= 10; index12++) {
                basic.showString("" + (10 - index12))
                basic.pause(1000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            basic.clearScreen()
            basic.showString("Times Up")
        } else if (Dice_Role == 99) {
            // Quiz answering done
            Dice_rolled = false
            // 
            basic.showString("Quiz time!")
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            Current_Question = 1
            list = [1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
            for (let index13 = 0; index13 <= list.length - 1; index13++) {
                Score = 0
                Question_not_answered = true
                basic.showNumber(Current_Question + 1)
                while (Question_not_answered) {
                    if (input.buttonIsPressed(Button.A)) {
                        Question_not_answered = false
                        if (!(list[Current_Question])) {
                            Score += 1
                            basic.showIcon(IconNames.Yes)
                        } else {
                            basic.showIcon(IconNames.No)
                        }
                    } else if (input.buttonIsPressed(Button.B)) {
                        Question_not_answered = false
                        if (list[Current_Question]) {
                            Score += 1
                            basic.showIcon(IconNames.Yes)
                        } else {
                            basic.showIcon(IconNames.No)
                        }
                    }
                }
                Current_Question += 1
            }
            basic.clearScreen()
            basic.showString("Score:")
            basic.showNumber(Score)
        } else if (Dice_Role == 7) {
            Dice_rolled = false
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            basic.clearScreen()
            basic.pause(100)
            Tone = 130
            Timer = 180
            for (let index9 = 0; index9 <= Timer / 5 - 3; index9++) {
                basic.showString("" + (Timer - index9 * 5))
                basic.pause(5000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            for (let index10 = 0; index10 <= 10; index10++) {
                basic.showString("" + (10 - index10))
                basic.pause(1000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            basic.clearScreen()
            basic.showString("Times Up")
        } else if (Dice_Role == 8) {
            Dice_rolled = false
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            basic.clearScreen()
        }
    }
})
