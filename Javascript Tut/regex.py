import re

regex = '^(\w[^!@#\$%\^&\*\.]{1,20})\d{0,5}?@\w{1,10}\.\w{2,3}'
email = "mohitlenka865@gmail.com nothing@hnb.in nut@3$.com"
for i in re.finditer(regex, email):
    print(i)