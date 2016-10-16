# suicide-chess

mark watkins recently solved suicide chess (or losing chess or antichess) as a white win with 1.e3.

what this is supposed to be is a site that has a browseable implementation of mark watkins's solution to suicide chess (for each move by black it gives a winning move by white). for now it copies stuff directly from the N=1000 paths from the lines section http://magma.maths.usyd.edu.au/~watkins/LOSING_CHESS/lines.html

things it won't do:

- stuff with solution tree size under 1000 (i.e. considered too easy to be given its own line, like e3 d6??)

- transpositions (the lines text files don't have transposition pointers. there's no easy fix for this. so like if you're looking up e3 b5 Bxb5 Bb7 Bxd7 Bxg2 Bxe8, the book only tells you what happens after Bxh1, when Qxd2 is a move as well, but everything under Qxd2 transposes to the other line, so it's not included. i'm not bothered enough to look through for transposition fixes.)

- actually solve anything. no processing power is involved.

i don't own any of the text files with the lines in it. they're mark watkins's solution. what i might do in the future is load the relevant file directly off his site instead of keeping a local copy of it over here, but i have no bloody idea how to do that.
