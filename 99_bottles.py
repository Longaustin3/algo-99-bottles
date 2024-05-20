def bottle_song(bottles):
	# write your code here!
	for x in range (bottles, -1, -1):
		current_num = x
		new_num = x - 1
		if current_num > 2:
			print(f'{current_num} bottles of beer on the wall, {current_num} bottles of beer. \nTake one down and pass it around, {new_num} bottles of beer on the wall.')
		if current_num == 2:
			print(f'{current_num} bottles of beer on the wall, {current_num} bottles of beer. \nTake one down and pass it around, {new_num} bottle of beer on the wall.')
		if current_num == 1:
			print(f'{current_num} bottle of beer on the wall, {current_num} bottle of beer. \nTake one down and pass it around, no more bottles of beer on the wall.')
		if current_num == 0:
			print(f'No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, {bottles} bottles of beer on the wall.')

print(bottle_song(99))
