def a1():
    return 'A1 Wells'

def a2():
    return 'A2 Wells'

def b(a_func):
    return a_func() + ' Fargo'

print(b(a2))
