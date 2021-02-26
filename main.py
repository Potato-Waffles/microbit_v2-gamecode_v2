def on_logo_long_pressed():
    control.reset()
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def on_button_pressed_a():
    global Dice_Role, Dice_rolled
    soundExpression.giggle.play()
    basic.show_icon(IconNames.HEART)
    basic.pause(500)
    Dice_Role = randint(1, 5)
    Dice_rolled = True
    basic.show_number(Dice_Role)
    basic.pause(1000)
    basic.clear_screen()
    basic.pause(250)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

list2: List[number] = []
Question_not_answered = False
MelodyAnswers: List[number] = []
Melodies2: List[List[str]] = []
Melody_5: List[str] = []
Melody_4: List[str] = []
Melody_3: List[str] = []
Melody_2: List[str] = []
Melody_1: List[str] = []
RingToneOn = False
Timer = 0
Tone = 0
Dice_rolled = False
Dice_Role = 0
music.set_built_in_speaker_enabled(True)
basic.pause(100)
Quiz_answered = True
Current_Question = 0
Dice_Role = 0
Score = 0
soundExpression.happy.play()
basic.show_string("Hi!")
basic.show_icon(IconNames.HAPPY)

def on_forever():
    global Dice_rolled, Quiz_answered, Tone, Timer, RingToneOn, Melody_1, Melody_2, Melody_3, Melody_4, Melody_5, Melodies2, MelodyAnswers, Score, Question_not_answered, Current_Question, list2
    if Dice_rolled:
        if Dice_Role == 1:
            Dice_rolled = False
            basic.show_string("Order Pizza!")
            Quiz_answered = False
            while not (Quiz_answered):
                if input.button_is_pressed(Button.B):
                    Quiz_answered = True
            basic.show_string("DIY Time!")
            Tone = 130
            Timer = 300
            index = 0
            while index <= Timer / 5 - 2:
                basic.show_string("" + str((Timer - index * 5)))
                basic.pause(5000)
                Tone += 1
                music.play_tone(Tone, music.beat(BeatFraction.WHOLE))
                index += 1
            for index2 in range(11):
                basic.show_string("" + str((10 - index2)))
                basic.pause(1000)
                Tone += 1
                music.play_tone(Tone, music.beat(BeatFraction.WHOLE))
            basic.clear_screen()
            basic.show_string("Times Up!")
        elif Dice_Role == 2:
            Dice_rolled = False
            basic.show_string("Ring tones!")
            Quiz_answered = False
            while not (Quiz_answered):
                if input.button_is_pressed(Button.B):
                    Quiz_answered = True
            RingToneOn = True
            Melody_1 = ["C5 B A G F E D C ",
                "- - - - - - - - ",
                "- - - - - - - - ",
                "- - - - - - - - "]
            Melody_2 = ["- - - - - - - - ",
                "- - - - - - - - ",
                "- - - - - - - - ",
                "- - - - - - - - "]
            Melody_3 = ["- - - - - - - - ",
                "- - - - - - - - ",
                "- - - - - - - - ",
                "- - - - - - - - "]
            Melody_4 = ["- - - - - - - - ",
                "- - - - - - - - ",
                "- - - - - - - - ",
                "- - - - - - - - "]
            Melody_5 = ["- - - - - - - - ",
                "- - - - - - - - ",
                "- - - - - - - - ",
                "- - - - - - - - "]
            Melodies2 = [Melody_1, Melody_2, Melody_3, Melody_4, Melody_5]
            MelodyAnswers = [0, 1, 0, 0, 1]
            Score = 0
            for index1 in range(6):
                for index22 in range(5):
                    music.play_melody(Melodies2[index1][index22], 120)
                Question_not_answered = True
                while Question_not_answered:
                    if input.button_is_pressed(Button.A):
                        Question_not_answered = False
                        if not (list2[Current_Question]):
                            Score += 1
                            basic.show_icon(IconNames.YES)
                        else:
                            basic.show_icon(IconNames.NO)
                    elif input.button_is_pressed(Button.B):
                        Question_not_answered = False
                        if list2[Current_Question]:
                            Score += 1
                            basic.show_icon(IconNames.YES)
                        else:
                            basic.show_icon(IconNames.NO)
                    basic.show_string("Score")
                    basic.show_number(Score)
        elif Dice_Role == 3:
            Dice_rolled = False
            basic.show_string("Paper planes")
            Quiz_answered = False
            while not (Quiz_answered):
                if input.button_is_pressed(Button.B):
                    Quiz_answered = True
            basic.show_string("DIY")
            Tone = 130
            Timer = 180
            index3 = 0
            while index3 <= Timer / 5 - 2:
                basic.show_string("" + str((Timer - index3 * 5)))
                basic.pause(5000)
                Tone += 1
                music.play_tone(Tone, music.beat(BeatFraction.WHOLE))
                index3 += 1
            for index4 in range(11):
                basic.show_string("" + str((10 - index4)))
                basic.pause(1000)
                Tone += 1
                music.play_tone(Tone, music.beat(BeatFraction.WHOLE))
            basic.clear_screen()
            basic.show_string("Times Up")
        elif Dice_Role == 4:
            Dice_rolled = False
            basic.show_string("Safe storage")
            Quiz_answered = False
            while not (Quiz_answered):
                if input.button_is_pressed(Button.B):
                    Quiz_answered = True
            Tone = 130
            Timer = 600
            index5 = 0
            while index5 <= Timer / 5 - 2:
                basic.show_string("" + str((Timer - index5 * 5)))
                basic.pause(5000)
                Tone += 1
                music.play_tone(Tone, music.beat(BeatFraction.WHOLE))
                index5 += 1
            for index6 in range(11):
                basic.show_string("" + str((10 - index6)))
                basic.pause(1000)
                Tone += 1
                music.play_tone(Tone, music.beat(BeatFraction.WHOLE))
            basic.clear_screen()
            basic.show_string("Times Up")
        elif Dice_Role == 5:
            Dice_rolled = False
            basic.show_string("Tower")
            Quiz_answered = False
            while not (Quiz_answered):
                if input.button_is_pressed(Button.B):
                    Quiz_answered = True
            Tone = 130
            Timer = 120
            index7 = 0
            while index7 <= Timer / 5 - 2:
                basic.show_string("" + str((Timer - index7 * 5)))
                basic.pause(5000)
                Tone += 1
                music.play_tone(Tone, music.beat(BeatFraction.WHOLE))
                index7 += 1
            for index8 in range(11):
                basic.show_string("" + str((10 - index8)))
                basic.pause(1000)
                Tone += 1
                music.play_tone(Tone, music.beat(BeatFraction.WHOLE))
            basic.clear_screen()
            basic.show_string("Times Up")
        elif Dice_Role == 6:
            Dice_rolled = False
            basic.show_string("Wine count")
            while not (Quiz_answered):
                if input.button_is_pressed(Button.B):
                    Quiz_answered = True
            Tone = 130
            Timer = 180
            index9 = 0
            while index9 <= Timer / 5 - 2:
                basic.show_string("" + str((Timer - index9 * 5)))
                basic.pause(5000)
                Tone += 1
                music.play_tone(Tone, music.beat(BeatFraction.WHOLE))
                index9 += 1
            for index10 in range(11):
                basic.show_string("" + str((10 - index10)))
                basic.pause(1000)
                Tone += 1
                music.play_tone(Tone, music.beat(BeatFraction.WHOLE))
            basic.clear_screen()
            basic.show_string("Times Up")
        elif Dice_Role == 7:
            Dice_rolled = False
            basic.show_string("Most shoes")
            Quiz_answered = False
            while not (Quiz_answered):
                if input.button_is_pressed(Button.B):
                    Quiz_answered = True
            Tone = 130
            Timer = 120
            index11 = 0
            while index11 <= Timer / 5 - 2:
                basic.show_string("" + str((Timer - index11 * 5)))
                basic.pause(5000)
                Tone += 1
                music.play_tone(Tone, music.beat(BeatFraction.WHOLE))
                index11 += 1
            for index12 in range(11):
                basic.show_string("" + str((10 - index12)))
                basic.pause(1000)
                Tone += 1
                music.play_tone(Tone, music.beat(BeatFraction.WHOLE))
            basic.clear_screen()
            basic.show_string("Times Up")
        elif Dice_Role == 8:
            # Quiz answering done
            Dice_rolled = False
            basic.show_string("Quiz time!")
            Quiz_answered = False
            while not (Quiz_answered):
                if input.button_is_pressed(Button.B):
                    Quiz_answered = True
            Current_Question = 1
            list2 = [1,
                1,
                0,
                1,
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                1,
                1,
                0,
                1,
                0,
                1,
                0,
                0,
                1,
                0]
            index13 = 0
            while index13 <= len(list2) - 1:
                Score = 0
                Question_not_answered = True
                basic.show_number(Current_Question + 1)
                while Question_not_answered:
                    if input.button_is_pressed(Button.A):
                        Question_not_answered = False
                        if not (list2[Current_Question]):
                            Score += 1
                            basic.show_icon(IconNames.YES)
                        else:
                            basic.show_icon(IconNames.NO)
                    elif input.button_is_pressed(Button.B):
                        Question_not_answered = False
                        if list2[Current_Question]:
                            Score += 1
                            basic.show_icon(IconNames.YES)
                        else:
                            basic.show_icon(IconNames.NO)
                Current_Question += 1
                index13 += 1
            basic.clear_screen()
            basic.show_string("Score:")
            basic.show_number(Score)
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)

def on_forever3():
    pass
basic.forever(on_forever3)

def on_forever4():
    pass
basic.forever(on_forever4)

def on_forever5():
    pass
basic.forever(on_forever5)

def on_forever6():
    pass
basic.forever(on_forever6)

def on_forever7():
    pass
basic.forever(on_forever7)

def on_forever8():
    pass
basic.forever(on_forever8)

def on_forever9():
    pass
basic.forever(on_forever9)

def on_forever10():
    pass
basic.forever(on_forever10)
