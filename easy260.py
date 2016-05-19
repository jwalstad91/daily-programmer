place = int(input("What place did your dog take? "))

for i in range(100):
	if i != place:
		if(i % 10 == 1 & i != 11):
			print(str(i) + "st, ")
		elif(i % 10 == 2 & i != 12):
			print(str(i) + "nd, ")
		elif(i % 10 == 3 & i != 13):
			print(str(i) + "rd, ")
		else:
			print(str(i) + "th, ")