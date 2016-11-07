import os.path
import urllib
sp="C:\PATH_GOES_HERE"
thingy=urllib.urlopen("http://magma.maths.usyd.edu.au/~watkins/LOSING_CHESS/e3c5.lines") # or another file
thingy=thingy.read()
thingy=thingy[:-1] # remove trailing newline
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
