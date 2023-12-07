from math import floor, sqrt
from utils import convert_lines_to_list

FILE = 'input.txt'


def create_ds():
    times, distances = convert_lines_to_list(FILE)
    time = int(times.split(":")[1].replace(" ", ""))
    distance = int(distances.split(":")[1].replace(" ", ""))
    return {"time": time, "distance": distance}


def main():
    race = create_ds()
    time, distance = race["time"], race["distance"]
    left_bound = floor((time - sqrt(time ** 2 - 4 * distance)) / 2)
    right_bound = floor((time + sqrt(time ** 2 - 4 * distance)) / 2)
    return right_bound - left_bound


print(main())


"""
given:
distance = d (9)
hold time = h (x)
race time = t (7)

d = h*(t-h)
d = th-h²
h²-th+d = 0
h = (-b±√(b²-4ac))/2a
h = (-(-t)±√(t-4(1)(d)))/2(1)
h₁ = (7+√(7²-4*9))/2 = 5.30
h₂ = (7-√(7²-4*9))/2 = 1.70 
"""
