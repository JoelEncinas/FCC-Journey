class Category:
    def __init__(self, budget_category):
        self.instance_category = budget_category
        self.ledger = []

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def get_balance(self):
        total_amount = 0

        for entry in self.ledger:
            total_amount += entry['amount']
        return total_amount

    def withdraw(self, amount, description=""):
        if not self.check_funds(amount):
            return False
        else:
            self.ledger.append(
                {"amount": -1 * amount, "description": description})
            return True

    def transfer(self, amount, budget_category):
        if self.check_funds(amount) and budget_category.check_funds(amount):
            self.withdraw(amount, f"Transfer to {budget_category.instance_category}")
            budget_category.deposit(amount, f"Transfer from {self.instance_category}")
            return True
        else:
            return False

    def check_funds(self, amount):
        total_amount = self.get_balance()

        if amount > total_amount:
            return False
        else:
            return True


food = Category("Food")
print(food)
food.deposit(10, "check")
print(food.get_balance())
print(food.withdraw(5, "beer"))
print(food.get_balance())
print(food.withdraw(20, "cake"))
print(food.get_balance())
print(food.ledger)

print(food.get_balance())

clothes = Category("Clothing")
print(clothes)
clothes.deposit(50, "check")
print(clothes.get_balance())
print(clothes.ledger)

print(food.transfer(10, clothes))
print(food.transfer(5, clothes))
print(food.ledger)
print(food.get_balance())
print(clothes.ledger)
print(clothes.get_balance())