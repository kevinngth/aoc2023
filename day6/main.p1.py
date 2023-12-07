from functools import reduce
from math import ceil, floor, sqrt
from utils import convert_lines_to_list, convert_string_to_number, filter_empty_string

FILE = 'input1.txt'


def create_ds():
    input_as_list = convert_lines_to_list(FILE)
    times = convert_string_to_number(filter_empty_string(
        input_as_list[0].split(":")[1].split(" ")))
    distances = convert_string_to_number(
        filter_empty_string(input_as_list[1].split(":")[1].split(" ")))
    ds = []
    for i in range(0, len(times)):
        ds.append({"time": times[i], "distance": distances[i]})
    return ds


def main():
    races = create_ds()
    for race in races:
        time, distance = race["time"], race["distance"]
        left_bound = (time - sqrt(time ** 2 - 4 * distance)) / 2
        right_bound = (time + sqrt(time ** 2 - 4 * distance)) / 2
        if right_bound.is_integer():
            right_bound -= 1
        else:
            right_bound = floor(right_bound)
        if left_bound.is_integer():
            left_bound += 1
        else:
            left_bound = ceil(left_bound)
        race["margin"] = right_bound - left_bound + 1
    return reduce(lambda a, c: a * c["margin"], races, 1)


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
