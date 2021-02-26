input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    control.reset()
})
input.onButtonPressed(Button.A, function () {
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
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let list: number[] = []
let Question_not_answered = false
let MelodyAnswers: number[] = []
let Melodies2: string[][] = []
let Melody_5: string[] = []
let Melody_4: string[] = []
let Melody_3: string[] = []
let Melody_2: string[] = []
let Melody_1: string[] = []
let RingToneOn = false
let Timer = 0
let Tone = 0
let Dice_rolled = false
let Dice_Role = 0
music.setBuiltInSpeakerEnabled(true)
basic.pause(100)
let Quiz_answered = true
let Current_Question = 0
Dice_Role = 0
let Score = 0
soundExpression.happy.play()
basic.showString("Hi!")
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (Dice_rolled) {
        if (Dice_Role == 1) {
            Dice_rolled = false
            basic.showString("Order Pizza!")
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            basic.showString("DIY Time!")
            Tone = 130
            Timer = 300
            for (let index = 0; index <= Timer / 5 - 2; index++) {
                basic.showString("" + (Timer - index * 5))
                basic.pause(5000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            for (let index = 0; index <= 10; index++) {
                basic.showString("" + (10 - index))
                basic.pause(1000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            basic.clearScreen()
            basic.showString("Times Up!")
        } else if (Dice_Role == 2) {
            Dice_rolled = false
            basic.showString("Ring tones!")
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            RingToneOn = true
            Melody_1 = ["C5 B A G F E D C ", "- - - - - - - - ", "- - - - - - - - ", "- - - - - - - - "]
            Melody_2 = ["- - - - - - - - ", "- - - - - - - - ", "- - - - - - - - ", "- - - - - - - - "]
            Melody_3 = ["- - - - - - - - ", "- - - - - - - - ", "- - - - - - - - ", "- - - - - - - - "]
            Melody_4 = ["- - - - - - - - ", "- - - - - - - - ", "- - - - - - - - ", "- - - - - - - - "]
            Melody_5 = ["- - - - - - - - ", "- - - - - - - - ", "- - - - - - - - ", "- - - - - - - - "]
            Melodies2 = [Melody_1, Melody_2, Melody_3, Melody_4, Melody_5]
            MelodyAnswers = [0, 1, 0, 0, 1]
            Score = 0
            for (let index1 = 0; index1 <= 5; index1++) {
                for (let index2 = 0; index2 <= 4; index2++) {
                    music.playMelody(Melodies2[index1][index2], 120)
                }
                Question_not_answered = true
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
                    basic.showString("Score")
                    basic.showNumber(Score)
                }
            }
        } else if (Dice_Role == 3) {
            Dice_rolled = false
            basic.showString("Paper planes")
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            basic.showString("DIY")
            Tone = 130
            Timer = 180
            for (let index = 0; index <= Timer / 5 - 2; index++) {
                basic.showString("" + (Timer - index * 5))
                basic.pause(5000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            for (let index = 0; index <= 10; index++) {
                basic.showString("" + (10 - index))
                basic.pause(1000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            basic.clearScreen()
            basic.showString("Times Up")
        } else if (Dice_Role == 4) {
            Dice_rolled = false
            basic.showString("Safe storage")
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            Tone = 130
            Timer = 600
            for (let index = 0; index <= Timer / 5 - 2; index++) {
                basic.showString("" + (Timer - index * 5))
                basic.pause(5000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            for (let index = 0; index <= 10; index++) {
                basic.showString("" + (10 - index))
                basic.pause(1000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            basic.clearScreen()
            basic.showString("Times Up")
        } else if (Dice_Role == 5) {
            Dice_rolled = false
            basic.showString("Tower")
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            Tone = 130
            Timer = 120
            for (let index = 0; index <= Timer / 5 - 2; index++) {
                basic.showString("" + (Timer - index * 5))
                basic.pause(5000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            for (let index = 0; index <= 10; index++) {
                basic.showString("" + (10 - index))
                basic.pause(1000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            basic.clearScreen()
            basic.showString("Times Up")
        } else if (Dice_Role == 6) {
            Dice_rolled = false
            basic.showString("Wine count")
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            Tone = 130
            Timer = 180
            for (let index = 0; index <= Timer / 5 - 2; index++) {
                basic.showString("" + (Timer - index * 5))
                basic.pause(5000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            for (let index = 0; index <= 10; index++) {
                basic.showString("" + (10 - index))
                basic.pause(1000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            basic.clearScreen()
            basic.showString("Times Up")
        } else if (Dice_Role == 7) {
            Dice_rolled = false
            basic.showString("Most shoes")
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            Tone = 130
            Timer = 120
            for (let index = 0; index <= Timer / 5 - 2; index++) {
                basic.showString("" + (Timer - index * 5))
                basic.pause(5000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            for (let index = 0; index <= 10; index++) {
                basic.showString("" + (10 - index))
                basic.pause(1000)
                Tone += 1
                music.playTone(Tone, music.beat(BeatFraction.Whole))
            }
            basic.clearScreen()
            basic.showString("Times Up")
        } else if (Dice_Role == 8) {
            // Quiz answering done
            Dice_rolled = false
            basic.showString("Quiz time!")
            Quiz_answered = false
            while (!(Quiz_answered)) {
                if (input.buttonIsPressed(Button.B)) {
                    Quiz_answered = true
                }
            }
            Current_Question = 1
            list = [1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0]
            for (let index = 0; index <= list.length - 1; index++) {
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
        }
    }
})
