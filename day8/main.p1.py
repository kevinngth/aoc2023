from functools import reduce
from math import ceil, floor, sqrt
from utils import convert_lines_to_list, convert_string_to_number, filter_empty_string

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


def main():
    ds = create_ds()
    count = 0
    current_location = 'AAA'
    string_index = 0
    while (current_location != 'ZZZ'):
        current_location = ds[current_location][direction_map(
            ds['pattern'][string_index])]
        if string_index == len(ds['pattern']) - 1:
            string_index = 0
        else:
            string_index += 1
        count += 1
    return count


print(main())
