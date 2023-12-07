from typing import List


def filter_empty_string(iterable):
    return list(filter(lambda e: e != "", iterable))


def convert_lines_to_list(file) -> List[str]:
    input_as_list: List[str] = []
    with open(file) as f:
        for line in f:
            line = line.strip()
            input_as_list.append(line)

    return input_as_list


def convert_string_to_number(iterable):
    return list(map(lambda str: int(str), iterable))
