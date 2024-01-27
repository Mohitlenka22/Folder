import pyttsx3
import speech_recognition as sr
import datetime
import wikipedia
import webbrowser
import os
import smtplib

engine = pyttsx3.init('sapi5')

voices=engine.getProperty('voices')

engine.setProperty('voices',voices[0].id)


def speak(audio):

    engine.say(audio)

    engine.runAndWait()

def wishme():
 hour=int(datetime.datetime.now().hour)
 if hour>=0 and hour<12:
     speak("Good Morning!")
 elif hour>=12 and hour<18:
     speak("Good Afternoon!") 
 else:
     speak("Good Evenging!") 

 speak("I am Mercy Sir. Please tell me How May I help you?")

def takeCommand():
     r = sr.Recognizer()
     with sr.Microphone() as source:
         print("Listening...")
         r.pause_threshold = 1
         audio = r.listen(source)

     try:
         print("Recognizing...")
         query = r.recognize_google(audio,language="en-in")
         print(f"User said: {query}\n")

     except Exception as e:
         print("Say that again please...")
         return "None"
     return query
def sendEmail(to,content):
    server = smtplib.STMP('smtp.gmail.com',587) 
    server.ehlo() 
    server.starttls() 
    server.login('mohitCOC1221@gmail.com', 'asphalt1')
    server.sendmail('mohitCOC1221@gmail.com',to,content) 
    server.close()  

if __name__=="__main__" :
    while True:
    # if 1:
            wishme()
            query = takeCommand().lower()

            if 'wikipedia' in query:
                speak('Searching wikipedia...')
                query=query.replace("wikipedia","")
                results=wikipedia.summary(query, sentences=2)
                speak("According to wikipedia")
                print(results)
                speak(results)
            elif 'open youtube' in query:
                 webbrowser.open("youtube.com")
            elif 'open google' in query:
                 webbrowser.open("google.com")
            elif 'play music' in query:
                music_dir= 'D:\\Non Critical\\songs\\Favourite Songs2'
                Songs= os.listdir(music_dir)
                print(Songs) 
                os.startfile(os.path.join(music_dir, Songs[0])) 
            elif 'the time' in query:
                strTime = datetime.datetime.now().strftime("%H:%M:%S")
                speak(f"Sir, the time is {strTime}")     
            elif 'emaiL to Mohit' in query:
                try:
                    speak("what should I say?")
                    content = takeCommand()
                    to = "mohitCOC1221@gmail.com"
                    sendEmail(to,content)
                    speak("Email has been sent!")
                except Exception as e:
                    print(e)
                    speak("Sorry I cant send email!")






