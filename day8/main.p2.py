from math import lcm
from utils import convert_lines_to_list

FILE = 'input1.txt'


def create_ds():
    ds = {}
    input_as_list = convert_lines_to_list(FILE)
    input_as_list[0]
    ds["pattern"] = input_as_list[0]
    for i in range(2, len(input_as_list)):
        destination, direction = input_as_list[i].split(" = ")
        ds[destination] = direction.strip("()").split(", ")
    return ds


def direction_map(direction):
    if direction == "L":
        return 0
    else:
        return 1


def check_the_end(list_locations):
    if (any(location[2] == "Z" for location in list_locations)):
        print(list_locations)
    return all(location[2] == "Z" for location in list_locations)


def get_denominator(start, ds):
    cur_loc = start
    count = 0
    i = 0
    while (cur_loc[2] != "Z"):
        cur_loc = ds[cur_loc][direction_map(ds['pattern'][i])]
        count += 1
        if i == len(ds['pattern']) - 1:
            i = 0
        else:
            i += 1
    return count


def main():
    ds = create_ds()
    starts = list(filter(lambda e: e[2] == "A", ds.keys()))
    denominators = list(map(lambda start: get_denominator(start, ds), starts))
    return lcm(*denominators)


print(main())
