import speech_recognition as sr
import pyttsx3
import datetime
import wikipedia
listener = sr.Recognizer()
engine = pyttsx3.init()

voices = engine.getProperty('voices')
engine.setProperty('voice',voices[1].id)
engine.say("Welcome to project Trance")
engine.say("Do you want to continue to sleep mode say yes or no")
engine.runAndWait()
