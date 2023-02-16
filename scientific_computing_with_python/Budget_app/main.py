class Category:
    category = ''
    ledger = []

    def __init__(self, category):
        self.category = category
    
    def deposit(self, amount, description = ""):
        self.ledger.append({"amount": amount, "description": description})

    def get_all_amounts(self):
        amounts = 0
        for entry in self.ledger:
            amounts += entry['amount']
        return amounts

    def withdraw(self, amount, description = ""):
        if amount > self.get_all_amounts():
            return False
        else:
            self.ledger.append({"amount": -1 * amount, "description": description})
            return True
        
a = Category("food")
a.deposit(10, "bananas")
a.deposit(5, "beer")
print(a.withdraw(60, "skate"))
print(a.withdraw(3, "chocolate"))
print(a.get_all_amounts())
print(a.ledger)