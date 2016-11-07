import os.path
import urllib
sp="C:\PATH_GOES_HERE"
thingy=urllib.urlopen("http://magma.maths.usyd.edu.au/~watkins/LOSING_CHESS/e3c5.lines") # or another file
thingy=thingy.read()
thingy=thingy.split('\n')
thingy=thingy[:-1] # remove trailing newline
for thing in range(len(thingy)):
    thingy[thing]=thingy[thing].strip() # there's an extra trailing whitespace at the end of each of the c5 and b6 lines that isn't there in any of the other lines files. THIS WAS SO BLOODY ANNOYING TO FIND. I SPENT FUCKING FOREVER WONDERING WHY MY APPROACH SUDDENLY DIDN'T WORK FOR THE C5 LINES AAAAARGH MARK I HATE YOU
def bananas(filename, start, without): # string, string starting with 'c7c5 f1b5', array-of-strings
    blahblahblah=os.path.join(sp, filename+".txt")
    blahblahblahblah=open(blahblahblah, "w")
    assert len(start)%5==4
    end=5+len(start)
    apples=0
    walrus=[]
    if without==[]:
        for whatever in thingy:
            if whatever[5:end]==start:
                apples+=1
                walrus.append(whatever[end-4:])
    else:
        for whatever in thingy:
            if whatever[5:end]==start and whatever[end+1:end+5] not in without:
                apples+=1
                walrus.append(whatever[end+1:])
    blahblahblahblah.write('\n'.join(walrus))
    print apples
    blahblahblahblah.close()
