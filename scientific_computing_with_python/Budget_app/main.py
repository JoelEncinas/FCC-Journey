class Category:
    name = ''
    def __init__(self, name):
        self.name = name

q = Category('rock')
q.name = 'pop'
print(q.name)