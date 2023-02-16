from urllib.request import urlopen
fhand = urlopen('http://data.pr4e.org/romeo.txt')

for line in fhand:
    print(line.decode().strip())