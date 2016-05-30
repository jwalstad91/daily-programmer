# https://www.reddit.com/r/dailyprogrammer/comments/4lpygb/20160530_challenge_269_easy_basic_formatting/
# Given a BASIC file input with improper line spacing, correct the code indentation!
textInput = """12
····
VAR I
·FOR I=1 TO 31
»»»»IF !(I MOD 3) THEN
··PRINT "FIZZ"
··»»ENDIF
»»»»····IF !(I MOD 5) THEN
»»»»··PRINT "BUZZ"
··»»»»»»ENDIF
»»»»IF (I MOD 3) && (I MOD 5) THEN
······PRINT "FIZZBUZZ"
··»»ENDIF
»»»»·NEXT"""

lineCount, indent, *lineCode = textInput.splitlines()

#print(lineCount)
#print(indent)
#print(lineCode)
def indentCode():
	for i in lineCode:
		i = i.lstrip('·»')
		#print(i)
		if i.startswith('VAR') or i.startswith('FOR') or i.startswith('NEXT'):
			print(i)
		elif i.startswith('IF') or i.startswith('ENDIF'):
			print(indent + i)
		elif i.startswith('PRINT'):
			print(indent * 2 + i)

